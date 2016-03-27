import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
  <h1>App is {{ state }}</h1>
  `
})
export class AppComponent {

  state: string = `Running!`

}
