export abstract class FileService {
    
    constructor() { }
    
    public abstract read_text(filename: string): Promise<string>;

    public abstract write_text(filename: string, content: string): Promise<boolean>;

    public abstract create_database(filename: string): Promise<Blob>;
}