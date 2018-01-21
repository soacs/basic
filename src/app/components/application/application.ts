import {Component, ViewEncapsulation} from '@angular/core';
import {devUrl} from '../../config/urls';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './application.html',
  styleUrls: ['./application.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ApplicationComponent {
  content: string;
  devUrl: string

  constructor() {
    this.content = "This is the ApplicationComponent output";
    this.devUrl = environment.url;

  }
}
