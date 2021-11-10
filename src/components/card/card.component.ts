import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Output() clickCounter: EventEmitter<Object> = new EventEmitter<Object>();
  @Input() image: any;
  @Input() index: any;

  public selectCard() {
    this.clickCounter.emit({ index: this.index, number: this.image.number });
  }
}
