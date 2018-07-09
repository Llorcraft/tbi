export class Document {
  public name: string = '';
  public path: string = '';
  public size: number = 0;

  constructor(document?: Partial<Document>){
    if(!!document) Object.assign(this, document);
  }
}
