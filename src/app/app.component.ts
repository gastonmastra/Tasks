import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [
    {name: 'Terminar primer modulo de Angular', since: new Date()},
    {name: 'Hacer las compras para la cena', since: new Date()},
    {name: 'Investigar sobre Bootstrap', since: new Date()},
    {name: 'Nueva tarea', since: new Date()},
  ];
}
