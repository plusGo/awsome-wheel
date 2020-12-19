import {Component} from '@angular/core';
import {ngxDeepClone} from '../../projects/ngx-deep-clone/src/lib/ngx-deep-clone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const originVariable = {name: 'originVariable'};
    const source = {fieldA: originVariable, fieldB: originVariable};
    const cloneValue = ngxDeepClone(source);
    console.log(cloneValue.fieldA === cloneValue.fieldB);
  }

}
