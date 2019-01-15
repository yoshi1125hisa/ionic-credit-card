import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PrivatePage } from '../private/private';
import { MinimalPage } from './../minimal/minimal';
import { SlidingPage } from './../sliding/sliding';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  private = PrivatePage;
  minimal = MinimalPage;
  sliding = SlidingPage;

  constructor() {

  }
}
