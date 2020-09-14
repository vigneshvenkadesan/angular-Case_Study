import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users= [
    {

      id:1,
      name: 'Dosa',
      type: 'Vegetarian'
  
  },
  {

    id:2,
    name: 'Chicken 65',
    type: 'Non Vegeterian'
  
},
{

  id:3,
  name: 'Idly',
  type: 'Vegeterian'

}
  ];
  constructor(private authService: AuthService) { }
}
