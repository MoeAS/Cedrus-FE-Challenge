import { Component } from '@angular/core';
import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cedrus-FE';

  constructor(private spyService: ScrollSpyService) {}
  
  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 50 });
  }
}
