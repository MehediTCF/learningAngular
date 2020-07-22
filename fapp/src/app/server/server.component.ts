import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    server: string ='server011';
    serverId: number = 10;
    serverStatus: string ='offline';

    getServerStatus(){
        return this.serverStatus;
    }

    
}