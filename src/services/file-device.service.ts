import { Injectable, EventEmitter } from '@angular/core';
import { MessageService } from './messages.service';
import { File, FileEntry } from '@ionic-native/file'
import { FileService } from './file.service';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Document } from '../models';
import { FileTransfer } from '@ionic-native/file-transfer';
import * as JSZip from 'jszip';

@Injectable()
export class FileDeviceService extends FileService {
    private working_folder: string;
    private download_emiter: EventEmitter<boolean> = new EventEmitter<boolean>();
    private total_files: string[] = [];

    constructor(private file: File, private message: MessageService, private chooser: FileChooser, private path: FilePath, private transfer: FileTransfer) {
        super();
        this.working_folder = this.file.dataDirectory;
        //this.file.externalRootDirectory
        this.create_folder('files');
        this.create_folder('pictures');
    }

    public create_picture(uri: string): Promise<Document> {
        return new Promise<Document>((resolve) => {

            this.path.resolveNativePath(uri)
                .then(path => {
                    let file = path.substring(path.lastIndexOf('/') + 1, path.length);

                    this.transfer.create().download(uri, `${this.working_folder}pictures/${file}`)
                        .then(() => resolve(new Document({ file: file, folder: `${this.working_folder}pictures` })))
                        .catch(() => this.message.alert('Error', 'No access permission to source file.\nTry select file from another location.'))
                });
        });
    }

    private copy_file(uri: string): Promise<Document> {
        return new Promise<Document>((resolve) => {

            this.path.resolveNativePath(uri)
                .then(path => {
                    //let folder = path.substring(0, path.lastIndexOf('/'));
                    let file = path.substring(path.lastIndexOf('/') + 1, path.length);

                    this.transfer.create().download(uri, `${this.working_folder}files/${file}`)
                        .then(() => resolve(new Document({ file: file, folder: `${this.working_folder}files` })))
                        .catch(() => this.message.alert('Error', 'No access permission to source file.\nTry select file from another location.'))
                    //.catch(ex => this.message.alert('Error', JSON.stringify(ex, null, 2)));
                });
        });
    }

    private create_folder(type: string) {
        try {
            this.file.createDir(this.working_folder, type, false);
        } catch (ex) {
            this.message.alert('Error', `${type}\n${ex.message}`);
        }
    }

    public select_file(): Promise<Document> {

        return new Promise<Document>((resolve) => {
            this.chooser.open()
                .then(uri => {
                    this.copy_file(uri).then(d => resolve(d));
                })
                .catch(e => this.message.alert('File', e.message));
        });
    }

    private create_file(filename: string): Promise<FileEntry> {
        return new Promise<FileEntry>((resolve, reject) => {
            this.file.writeFile(this.working_folder, `${filename}.json`, '', { append: true })
                .then(r => resolve(r))
                .catch(_ => {
                    this.file.writeFile(this.working_folder, `${filename}.json`, '', { replace: true })
                        .then(r => resolve(r))
                        .catch(ex => {
                            reject(ex.message);
                            this.message.alert('Error create file', JSON.stringify(ex, null, 2));
                        })
                });
        })

    }

    public delete(file: Document): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.file.removeFile(file.folder, file.file)
                .then(r => resolve(r.success))
                .catch((ex) => {
                    this.message.alert('Error', ex.message);
                    reject(ex.message);
                })
        });
    }

    public async read_text(filename: string): Promise<string> {
        await this.create_file(filename);
        return new Promise<string>((resolve, reject) => {
            this.file.readAsText(this.working_folder, `${filename}.json`)
                .then(r => resolve(r))
                .catch(ex => {
                    reject(ex.message);
                    this.message.alert('Error read file', JSON.stringify(ex, null, 2));
                });
        });
    }

    public async write_text(filename: string, content: string): Promise<boolean> {
        await this.create_file(filename);
        return new Promise<boolean>((resolve, reject) => {
            this.file.writeFile(this.working_folder, `${filename}.json`, content, { replace: true })
                .then(() => resolve(true))
                .catch(ex => {
                    reject(ex);
                    this.message.alert('Error write file', JSON.stringify(ex, null, 2));
                });
        });
    }

    private zip_ready(zip: JSZip) {
        this.message.alert('Zip', 'Zip ready');
    }

    public create_database(filename: string): Promise<Blob> {
        let zip = new JSZip();

        this.download_emiter.subscribe(filename => {
            //this.set_percent();
            this.total_files = this.total_files.filter(f => f != filename);
            if (!this.total_files.length) this.zip_ready(zip);
        });

        return new Promise<Blob>((resolve, reject) => {
            this.create_database_structure(filename).then(files => {
                let folders = {
                    data: zip.folder('data'),
                    files: zip.folder('files'),
                    pictures: zip.folder('pictures')
                };
                this.total_files = files.map(f => f.entry.name);
                files.forEach(f => {
                    this.add_to_zip((f.folder == 'data') ? zip : folders[f.folder], f);
                })
            });
        });
    }

    add_to_zip(folder: any, file: any): any {
        this.file.readAsArrayBuffer(`${this.working_folder}${file.folder}`, file.entry.name).then(buffer => {
            folder.file(file.entry.name, buffer);
            this.download_emiter.emit(file.entry.name);
        }).catch(ex => this.message.alert('Read', JSON.stringify(file.entry, null, 2)));
    }

    private async create_database_structure(filename: string) {
        return new Promise<any>((resolve) => {
            let result = []
            this.files_in('').then(data => {
                result = result.concat(data.filter(f => f.isFile && f.name == `${filename}.json`).map(f => ({ folder: 'data', entry: f })));
                this.files_in('files').then(files => {
                    result = result.concat(files.filter(f => f.isFile).map(f => ({ folder: 'files', entry: f })));
                    this.files_in('pictures').then(pictures => {
                        result = result.concat(pictures.filter(f => f.isFile).map(f => ({ folder: 'pictures', entry: f })));
                        resolve(result);
                    })
                });
            });
        });
    }

    public async files_in(folder: string) {
        return await this.file.listDir(this.working_folder, folder)
    }
}