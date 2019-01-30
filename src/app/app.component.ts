import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CardService ]
})
export class AppComponent {
    private totalClicks: number = 0
    private images: any[]
    private clicks: Array<Object>[2]

    constructor(private cardService: CardService){
        this.images = cardService.getImages()
        this.clicks = [
            {
                id: null,
                number: null
            },
            {
                id: null,
                number: null
            }
        ]
    }

    ngOnInit(){ }
    
    click(e): void{
        this.totalClicks++
        this.cardService.changeActive(e.image.id)
        this.clicks[this.totalClicks % 2] = { id: e.image.id, number: e.image.number }
        
        if( this.totalClicks % 2 == 0 ){
            if( this.clicks[0].number != this.clicks[1].number ){
                setTimeout( () => {
                    this.cardService.changeActive(this.clicks[0].id)
                    this.cardService.changeActive(this.clicks[1].id)
                }, 750)
            }
        }
    }

    resetGame(){
        this.totalClicks = 0
        this.cardService.sortImages()
    }
}
