import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.css"]
})
export class Page2Component implements OnInit {
  name = null;
  pokemon = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(element => {
      this.name = element.get("name");

      this.dataService.getPokemon(this.name).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    });
  }
}
