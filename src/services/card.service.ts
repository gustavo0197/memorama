import { Injectable } from '@angular/core'

@Injectable()
export class CardService {
    private images: any[] = [
        {id: 0, url: '', number: 1, active: false},{id: 1, url: '', number: 1, active: false},
        {id: 2, url: '', number: 2, active: false},{id: 3, url: '', number: 2, active: false},
        {id: 4, url: '', number: 3, active: false},{id: 5, url: '', number: 3, active: false},
        {id: 6, url: '', number: 4, active: false},{id: 7, url: '', number: 4, active: false},
        {id: 8, url: '', number: 5, active: false},{id: 9, url: '', number: 5, active: false},
        {id: 10, url: '', number: 6, active: false},{id: 11, url: '', number: 6, active: false}
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
            this.images[number].id = number
            this.images[number].active = false
        }
    }

    changeActive(id: number){
        this.images[id].active = !this.images[id].active
    }

}