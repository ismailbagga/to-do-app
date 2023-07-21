import { Component, Input } from '@angular/core';

export type Todo = {
  title: string;
  createdAt: Date;
  description: string;
  url: string;
  isCompleted: boolean;
};

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent {
  @Input({ required: true }) todo!: Todo;
}
