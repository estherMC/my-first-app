import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  //  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  
  showSecret = false;
  logBtnClicks = [];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name of server: " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.logBtnClicks.push(this.logBtnClicks.length+1);
  }

}
