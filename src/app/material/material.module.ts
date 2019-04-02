import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

let mt = [MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatExpansionModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: mt,
  exports: mt
})
export class MaterialModule {}
