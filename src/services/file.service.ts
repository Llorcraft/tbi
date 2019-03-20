import { Document } from "../models";
import { Picture } from "../models/picture";
import { LoadindService } from "./loading.service";

export abstract class FileService {

    constructor(public loading: LoadindService) { }

    public working_folder: string;

    public abstract read_text(filename: string, hide?: boolean): Promise<string>;

    public abstract write_text(filename: string, content: string, hide?: boolean): Promise<boolean>;

    public abstract create_database(filename: string): Promise<Blob>;

    public abstract select_file(): Promise<Document>;

    public abstract delete(file: Document | Picture): Promise<boolean>;

    public abstract create_picture(uri: string): Promise<Document>

    public abstract get_documents(): Promise<Document[]>

    public abstract base64_to_uint(base64: string): Uint8Array;

    public abstract create_pdf(base64: string, filename: string): Promise<string>;

}