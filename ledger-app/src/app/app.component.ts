import { Component } from '@angular/core';
import { SpeechService } from './_services/speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public speech: SpeechService) {}
}
