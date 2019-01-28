import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private clicks: number = 0
    private images: any[] = [{},{},{},{},{},{}]

    constructor(){ }

    click(): void{
        this.clicks++
    }
}
