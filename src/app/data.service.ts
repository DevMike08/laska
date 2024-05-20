import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getUsers() {
    return fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data.results;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        return [];
      });
  }
}
