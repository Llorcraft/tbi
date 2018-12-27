import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import { Document } from '../models';
import { Picture } from '../models/picture';
import { LoadindService } from './loading.service';

@Injectable()
export class FileLocalService extends FileService {
    constructor(public loading: LoadindService) {
        super(loading);
    }

    public working_folder: string = 'D:\\Sofware Factory\\tbi\\src\\assets\\';

    public create_pdf(base64: string, filename: string): Promise<string> {
        this.loading.show();
        return new Promise<string>((resolve, reject) => {
            let blob = new Blob([this.base64_to_uint(base64)], { type: 'application/pdf' });
            let newWindow = window.open('/', '_blank');
            newWindow.location.href = URL.createObjectURL(blob);
            this.loading.hide();
            resolve(filename);
        });
    }

    public base64_to_uint(base64: string): Uint8Array {
        let arr = base64.split(','),
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return u8arr;
    }


    public create_picture(uri: string): Promise<Document> {
        throw new Error("Method not implemented.");
    }

    public get_documents(): Promise<Document[]> {
        throw new Error("Method not implemented.");
    }

    public delete(file: Document | Picture): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public select_file(): Promise<Document> {
        throw new Error("Method not implemented.");
    }

    public read_text(filename: string): Promise<string> {
        this.loading.show();
        return new Promise<string>((resolve, reject) => {
            this.loading.hide();
            resolve(localStorage.getItem(filename));
        });
    }

    public write_text(filename: string, content: string): Promise<boolean> {
        this.loading.show();
        return new Promise<boolean>((resolve, reject) => {
            localStorage.setItem(filename, content);
            this.loading.hide();
            resolve(true);
        });
    }

    public create_database(filename: string): Promise<Blob> {
        return new Promise<Blob>((resolve) => {
            this.read_text(filename).then(d => resolve(new Blob([d], { type: 'text' })));
        });
    }
}