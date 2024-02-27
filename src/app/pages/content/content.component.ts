import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../../data/datafake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
private id:string|null ='0';
  Foto:string ='';
  titulo:string='';
  descricao:string='';
constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesComponent(this.id);
    }
  setValuesComponent(id:string|null){
    const resut = dataFake.filter(article=> article.id === id)[0]

      this.titulo = resut.title;
    this.descricao = resut.descricap;
    this.Foto = resut.a;
  }
}
