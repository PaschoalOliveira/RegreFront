import { Component } from '@angular/core';
import { ImovelService } from './services/imovel.service';
import { Imovel } from './imovel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imoveis: Imovel[] = [];

  constructor(private imovelService: ImovelService) {}

  ngOnInit(){
    this.getImoveis();
  } 

  getImoveis() {
    this.imovelService.getImoveis().subscribe((imoveis: Imovel[]) => {
      this.imoveis = imoveis;
    });
  }
}
