import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Todo } from './todo.schema'
import { ModelService } from '../shared/services';

@Component({
  selector: 'todo',
  styleUrls: ['./todo.component.css'],
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  public title: string = 'TODO component with prerender server data';

  public todos: Todo[];

  constructor(private model: ModelService) { }

  ngOnInit() {
    this.model
      .get('/api/todos')
      .subscribe(data => {
        this.todos = data;
    });
  }

}
