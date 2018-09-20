import { NON_PICTURE } from '../const/images';

export class ModelWithPicture {
    public id: string;
    constructor(item?: Partial<ModelWithPicture>){
        this.id = !!item ? item.id ||  Math.random().toString().substr(2) : Math.random().toString().substr(2);
    }

    public get picture(): string {
        return localStorage.getItem(this.id) || NON_PICTURE
    };
    public set picture(value: string) {
        localStorage.setItem(this.id, value);
    };
}