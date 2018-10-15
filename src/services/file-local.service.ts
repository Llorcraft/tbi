import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import { Document } from '../models';

@Injectable()
export class FileLocalService extends FileService {
    constructor() {
        super();
    }

    public delete(file: Document): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public select_file(): Promise<Document> {
        throw new Error("Method not implemented.");
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