import { Component } from '@angular/core';
import { Todo } from '../to-do-item/to-do-item.component';

const tempToDos: Todo[] = [
  {
    title: 'Finish the french course ',
    url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Bla Bla Bla Bla Bla Bla Bla',
    createdAt: new Date(),
    isCompleted: false,
  },
  {
    title: 'Finish the french course ',
    url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Bla Bla Bla Bla Bla Bla Bla',
    createdAt: new Date(),
    isCompleted: true,
  },
  {
    title: 'Finish the french course ',
    url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Bla Bla Bla Bla Bla Bla Bla',
    createdAt: new Date(),
    isCompleted: false,
  },
  {
    title: 'Finish the french course ',
    url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Bla Bla Bla Bla Bla Bla Bla',
    createdAt: new Date(),
    isCompleted: false,
  },
  {
    title: 'Finish the french course ',
    url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Bla Bla Bla Bla Bla Bla Bla',
    createdAt: new Date(),
    isCompleted: false,
  },
];

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  todos = tempToDos;
}
