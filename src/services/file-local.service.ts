import { Injectable } from '@angular/core';
import { FileService } from './file.service';

@Injectable()
export class FileLocalService extends FileService {
    constructor() {
        super();
    }

    public read_text(filename: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve(localStorage.getItem(filename));
        });
    }

    public write_text(filename: string, content: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            localStorage.setItem(filename, content);
            resolve(true);
        });
    }

    public create_database(filename: string): Promise<Blob> {
        return new Promise<Blob>((resolve) => {
            this.read_text(filename).then(d => resolve(new Blob([d], { type: 'text' })));
        });
    }
}