import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosRoutingModule } from './todos-routing.module';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoSearchFieldComponent } from './to-do-search-field/to-do-search-field.component';


@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoItemComponent,
    ToDoFormComponent,
    ToDoSearchFieldComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule ,
    NgbCollapseModule
  ]
})
export class TodosModule { }
