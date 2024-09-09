import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

goToHome(){
  this.router.navigate(['/home'])
}

}
