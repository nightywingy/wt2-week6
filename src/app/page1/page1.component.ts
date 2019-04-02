import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  pokemons = null;
  constructor(private dataService: DataService) {}
  name : any;
  email : any;
  sended : any;
  addname(event: any)
  {
    this.name = event.target.value ;
  };
  addEmail(event: any)
  {
    this.email = event.target.value ;
  };
  kirimdata()
  {
    console.log("sss");
    this.dataService.Postdata(this.name,this.email);
  }
  ngOnInit() {
    // this.students = this.dataService.getStudents();
    this.dataService.getPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data;
    });
  }
}

//https://pokeapi.co/api/v2/pokemon
