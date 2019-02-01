import { Component, Output, Input, EventEmitter } from '@angular/core'

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Output() clickCounter: EventEmitter<Object> = new EventEmitter<Object>()
    @Input() imageData: any
    @Input() index: any

    click(){
        this.clickCounter.emit({index: this.index, number: this.imageData.number})
        // this.imageData.active = !this.imageData.active
    }
}