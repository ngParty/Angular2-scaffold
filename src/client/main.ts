import { enableProdMode } from 'angular2/core';

if ( process.env.NODE_ENV === `production` ) {

  // Reference: https://angular.io/docs/ts/latest/api/core/enableProdMode-function.html
  // Otherwise run change detection twice to check for side effects
  enableProdMode();

}


import { bootstrap } from 'angular2/platform/browser';

import { AppComponent } from './app/app.component'

bootstrap(
    AppComponent
);
