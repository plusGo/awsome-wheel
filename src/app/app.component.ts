import {Component} from '@angular/core';
import {ngxDeepClone} from '../../projects/ngx-deep-clone/src/lib/ngx-deep-clone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // let value;
    // value = {data: {data: {data: 1}}};
    // value.data.data.data = value;

    // value = {data: 1};
    // value.data = value;
    // const cloneValue = ngxDeepClone(value);
    // console.log(cloneValue)

    const source = {};

    let last = source;
    for (let i = 0; i < 1000; i++) {
      last[i] = {};
      last = last[i];
    }
    const cloneValue = ngxDeepClone(source);
    console.log(source);
  }

}
