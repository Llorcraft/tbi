import { Injectable } from '@angular/core';
import { MessageService } from './messages.service';
// import { FilePath } from '@ionic-native/file-path';
import { File, FileEntry } from '@ionic-native/file'
import { FileService } from './file.service';

@Injectable()
export class FileDeviceService extends FileService {
    constructor(private file: File, private message: MessageService) {
        super();
    }

    private create_file(filename: string): Promise<FileEntry> {
        return new Promise<FileEntry>((resolve, reject) => {
            this.file.writeFile(this.file.externalRootDirectory, `${filename}.json`, '', { append: true })
                .then(r => resolve(r))
                .catch(_ => {
                    this.file.writeFile(this.file.externalRootDirectory, `${filename}.json`, '', { replace: true })
                        .then(r => resolve(r))
                        .catch(ex => {
                            reject(ex.message);
                            this.message.alert('Error create file', JSON.stringify(ex, null, 2));
                        })
                });
        })

    }

    public async read_text(filename: string): Promise<string> {
        await this.create_file(filename);
        return new Promise<string>((resolve, reject) => {
            this.file.readAsText(this.file.externalRootDirectory, `${filename}.json`)
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
            this.file.writeFile(this.file.externalRootDirectory, `${filename}.json`, content, { replace: true })
                .then(() => resolve(true))
                .catch(ex => {
                    reject(ex);
                    this.message.alert('Error write file', JSON.stringify(ex, null, 2));
                });
        });
    }

    public create_database(filename: string): Promise<Blob> {
        return new Promise<Blob>(resolve => {
            resolve(null);
        });
    }

    public read_file
}