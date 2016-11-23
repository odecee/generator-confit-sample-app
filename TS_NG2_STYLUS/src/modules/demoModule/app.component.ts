import { Component, ViewEncapsulation } from '@angular/core';

// Require the CSS file explicitly (or it could be defined as an entry-point too).
require('./styles/app.styl');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent { }
