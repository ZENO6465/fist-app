import {Component} from '@angular/core';
import { HomeComponent as HomeComponent } from "./home/home.component";
@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
          <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, HomeComponent],
  
})
export class AppComponent {
  title = 'homes';
}
