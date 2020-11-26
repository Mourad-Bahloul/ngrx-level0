import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TuturialActions from '../actions/tutorial.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  // tslint:disable-next-line: typedef
  addTutorial(name: string, url: string) {
    this.store.dispatch(new TuturialActions.AddTutorial({name, url}));
  }
  ngOnInit(): void {
  }

}
