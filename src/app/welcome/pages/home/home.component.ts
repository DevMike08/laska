import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().then(data => {
      this.users = data;
    });
  }
  // parentData: string = user.name.first

  cards: any[] = [
    { name: 'Card 1', imageUrl: 'url1.jpg' },
    { name: 'Card 2', imageUrl: 'url2.jpg' },
    { name: 'Card 3', imageUrl: 'url3.jpg' }
  ];
}
