import { Component } from '@angular/core';

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    userName: string = '';
    emptyUserName: boolean = this.userName == '';

    getServerStatus(){
        return this.serverStatus;
    }

    onResetUserName(){
        this.userName = '';
    }

}