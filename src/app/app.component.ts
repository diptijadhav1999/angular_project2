import { Component } from '@angular/core';
import language from './language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularStyle';

  languages:language[]=[
    {
      name:'c',
      platform:'console',
      status:'hard'
    },
    {
      name:'c++',
      platform:'All platforms',
      status:'easy'
    },
    {
      name:'angular',
      platform:'web',
      status:'hard'
    },
    {
      name:'android',
      platform:'mobile',
      status:'easy'
    }
  ];
}
