import { Component } from '@angular/core';

type TasksState = 'ALL' | 'Completed' | 'UnCompleted';
type TasksOrder = 'OLDEST' | 'NEWEST';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss'],
})
export class ToDoFormComponent {
  tasksStates: { label: string; value: TasksState }[] = [
    { label: 'ALL', value: 'ALL' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Un Completed', value: 'UnCompleted' },
  ];
  taskOrderOptions: { label: string; value: TasksOrder }[] = [
    { label: 'Oldest', value: 'OLDEST' },
    { label: 'Newest', value: 'NEWEST' },
  ];
  isCollapsed = true;
  taskState: TasksState = 'ALL';
  orderBy: TasksOrder = 'NEWEST';
  onClickHandler() {
    this.isCollapsed = !this.isCollapsed;
    console.log('====================================');
    console.log(this.isCollapsed);
    console.log('====================================');
  }
}
