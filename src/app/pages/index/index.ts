import { Component} from '@angular/core';
import { Apresentation } from "./components/apresentation/apresentation";
import { CardRow } from "./components/card-row/card-row";
import { Copywriting } from "./components/copywriting/copywriting";
import { RotaractData } from "./components/rotaract-data/rotaract-data";
import { DataItem } from "./components/rotaract-data/rotaract-data"
import { Footer } from "./components/footer/footer";
import { DefaultService } from '../../services/default-service';

@Component({
  selector: 'app-index',
  imports: [Apresentation, CardRow, Copywriting, RotaractData, Footer],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

  constructor(private service: DefaultService){
    console.log(
      this.service.getAll().subscribe({
        next: (res) => console.log(res),
        error: (err) => console.error(err) 
      })
    )
  }

  rotaractDataList: DataItem[] = [
    { quantity: 60, unitMeasure: " anos", description: "de existência" },
    { quantity: 6, unitMeasure: " milhões", description: "arrecadados e doados em projetos" },
    { quantity: 25, unitMeasure: " mil", description: "projetos cadastrados" },
    { quantity: 175 , unitMeasure: " mil", description: "clubes no mundo" },
    { quantity: 175, unitMeasure: "", description: "países" },
    { quantity: 785, unitMeasure: "", description: "clubes no Brasil" },
    { quantity: 220, unitMeasure: " mil", description: "voluntários no mundo" },
    { quantity: 9, unitMeasure: " mil", description: "voluntários no Brasil" }
    
  ]
  rotaract2DataList: DataItem[] = [
    { icon: './icon/desenvolvimento-pessoal.svg', description: "Desenvolvimento pessoal" },
    { icon: './icon/networking.svg', description: "Networking" },
    { icon: './icon/projetos-humanitarios.svg', description: "Projetos humanitários" },
    { icon: './icon/lideranca.svg', description: "Liderança" },
    { icon: './icon/gerenciamento-pessoas.svg', description: "Gerenciamento de pessoas" },
    { icon: './icon/conexao-pessoas.svg', description: "Conexão de pessoas" },
    { icon: './icon/rede-mundial.svg', description: "Rede mundial de jovens voluntários" }
  ]
}

