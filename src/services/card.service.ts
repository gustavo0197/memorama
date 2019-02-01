import { Injectable } from '@angular/core'

@Injectable()
export class CardService {
    private images: any[] = [
        { url: './assets/julianfat.png', number: 1, visible: false },
        { url: './assets/julianfat.png', number: 1, visible: false },
        { url: './assets/julian 2.png', number: 2, visible: false },
        { url: './assets/julian 2.png', number: 2, visible: false },
        { url: './assets/tavo.png',  number: 3, visible: false },
        { url: './assets/tavo.png',  number: 3, visible: false },
        { url: './assets/nacho.png', number: 4, visible: false },
        { url: './assets/nacho.png', number: 4, visible: false },
        { url: './assets/chema.png', number: 5, visible: false },
        { url: './assets/chema.png', number: 5, visible: false },
        { url: './assets/vitor.png', number: 6, visible: false },
        { url: './assets/vitor.png', number: 6, visible: false }
    ]

    constructor(){
        this.sortImages()
    }

    getImages(): any[]{
        return this.images
    }

    sortImages(){
        for(let number = 0; number < 100; number++){
            let from: number = Math.floor( Math.random() * 12 ), 
                to: number = Math.floor( Math.random() * 12 )
            let image: Object = this.images[from]
            this.images[from] = this.images[to]
            this.images[to] = image
        }

        for(let number = 0; number < 12; number++){
            this.images[number].visible = false
        }
    }

    flipCard(index: number){
        this.images[index].visible = !this.images[index].visible
    }

}