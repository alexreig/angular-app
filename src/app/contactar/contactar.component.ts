import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {


  constructor() {}


  ngOnInit() {}

    send(): void {
      swal('Mensaje enviado', 'Pronto nos pondremos en contacto contigo!', 'success');
      
        return;
        }

  }
