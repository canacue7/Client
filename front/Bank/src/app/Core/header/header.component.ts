import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isLogged = false;
  updateU = false;
  regis= false;
   
  title = 'Bank';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  Listar(){
    //  this.router.navigate(["listar"]);
    }
  
    Nuevo(){
     // this.router.navigate(["add"]);
    }

    Login(){
      //  this.router.navigate(["listar"]);
    }
    Registrar(){
      //  this.router.navigate(["listar"]);

      this.regis=true;
    }
}
