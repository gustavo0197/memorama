import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Output() clickCounter: EventEmitter<Object> = new EventEmitter<Object>()

    click(){
        this.clickCounter.emit({})
    }
}