export abstract class PictureService {
    constructor() { }
    /**
     * Take picture from device camera
     * @param edit Edit picture after take it
     * @param quality Picture quality 0-100
     */
    public abstract take_picture(edit?: boolean, quality?: number): Promise<string>;

    /**
     * Select picture from picture gallery
     * @param edit Edit picture after select it
     * @param quality Picture quality 0-100
     */
    public abstract get_picture(edit?: boolean, quality?: number): Promise<string>;
}