import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // ici il est inutile d'import MatToolbarModule car SharedModule n'en a pas besoin,
    // parcontre il doit le mettre à disposition des autres Modules donc on ne fait que l'exporter
    MatToolbarModule
  ]
})
export class SharedModule { }
