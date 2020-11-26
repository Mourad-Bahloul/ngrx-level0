import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';
import * as TuturialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    // AppState has a property called 'tutorials',
    // link with the reducer is in StoreModule.forRoot({tutorials: reducer})
    this.tutorials = store.select('tutorials');
  }

  // tslint:disable-next-line: typedef
  deleteTutorial(index) {
    this.store.dispatch(new TuturialActions.RemoveTutorial(index));
  }
  ngOnInit(): void {
  }

}
