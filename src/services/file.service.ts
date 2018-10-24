import { Document } from "../models";
import { Picture } from "../models/picture";

export abstract class FileService {
    
    constructor() { }
    
    public working_folder: string;

    public abstract read_text(filename: string): Promise<string>;

    public abstract write_text(filename: string, content: string): Promise<boolean>;

    public abstract create_database(filename: string): Promise<Blob>;

    public abstract select_file():Promise<Document>;

    public abstract delete(file: Document | Picture): Promise<boolean>;

    public abstract create_picture(uri: string): Promise<Document>

    public abstract get_documents(): Promise<Document[]>

}