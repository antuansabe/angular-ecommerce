import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: '../demo/demo.component.html',
  styleUrls: ['../demo/demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['Antonn', 'Julian', 'Ramos'];

  objeto = {};

  power = 10;

  ngOnInit() {
    // es buena practica tenernlo
  }

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem( index: number) {
this.items.splice(index, 1);
  }
}
