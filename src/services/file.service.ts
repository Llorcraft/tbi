import { Injectable } from '@angular/core';
import { MessageService } from './messages.service';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file'

@Injectable()
export class FileService {
    constructor(private file: File, private message: MessageService, private path: FilePath) { }
    public read(): Promise<string>{
        return new Promise<string>((resolve, reject) => {
            this.file.readAsText(this.file.dataDirectory, 'test.csv')
                .then(r => resolve(r))
                .catch(err => this.message.alert('Error', JSON.stringify(err, null, 2)));
        })
    }
    public write(): string {
        this.file.writeFile(this.file.dataDirectory, 'test.csv', 'hello,world,', { replace: true })
            .then(() => {
                // let email = {
                //     to: 'luis.llorca@email.com',
                //     attachments: [
                //         this.file.dataDirectory + 'test.csv'
                //     ],

                //     subject: 'subject',
                //     body: 'body text...',
                //     isHtml: true
                // };
                // //this.emailComposer.open(email);
                this.message.alert('Copia', 'OK');
            })
            .catch((err) => {
                this.message.alert('Copia', JSON.stringify(err, null, 2));
            });

        // }
        return '';
    }
}