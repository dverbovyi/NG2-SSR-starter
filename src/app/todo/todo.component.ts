import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Todo } from './todo.schema'
import { ApiService } from '../shared/services';

@Component({
  selector: 'todo',
  styleUrls: ['./todo.component.css'],
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  public title: string = 'TODO component with prerender server data';

  public todos: Todo[];

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service
      .get('/api/todos')
      .subscribe(data => {
        this.todos = data;
      });
  }

}
