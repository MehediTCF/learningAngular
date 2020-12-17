import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    server: string ='server011';
    serverId: number = 10;
    serverStatus: string ='Offline';
    createServer: boolean = false;
    constructor(){
        this.serverStatus = Math.random() > 0.5? 'Online': 'Offline';
        setTimeout(()=>{
            this.createServer = true;

        }, 2000)
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

    
}