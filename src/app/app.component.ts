import { Component } from "@angular/core";
import { CardService } from "../services/card.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [CardService],
})
export class AppComponent {
  private totalClicks: number = 0;
  private clicks: Array<Object>[2];
  public images: any[];

  constructor(private cardService: CardService) {
    this.images = cardService.getImages();
    this.clicks = [
      {
        id: null,
        number: null,
      },
      {
        id: null,
        number: null,
      },
    ];
  }

  click(e): void {
    this.totalClicks++;
    this.cardService.flipCard(e.index);
    this.clicks[this.totalClicks % 2] = { id: e.index, number: e.number };

    if (this.totalClicks % 2 == 0) {
      if (this.clicks[0].number != this.clicks[1].number) {
        setTimeout(() => {
          this.cardService.flipCard(this.clicks[0].id);
          this.cardService.flipCard(this.clicks[1].id);
        }, 750);
      }
    }
  }

  resetGame() {
    this.totalClicks = 0;
    this.cardService.sortImages();
  }
}
