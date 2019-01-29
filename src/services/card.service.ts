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

    getImages(): any[]{
        return this.images
    }

    sortImages(){ }

    changeActive(id: number){
        this.images[id].active = !this.images[id].active
    }

}