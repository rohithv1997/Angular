import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Component({
  selector: 'app-serve',
  templateUrl: './server/server.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Rohith';
}
