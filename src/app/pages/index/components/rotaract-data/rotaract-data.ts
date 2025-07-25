import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rotaract-data',
  imports: [],
  templateUrl: './rotaract-data.html',
  styleUrl: './rotaract-data.css'
})

export class RotaractData {
  @Input() items!: DataItem[]
  @Input() bgColor: string = "#555555"
}
export class DataItem {
  constructor(quantity: number,
              unitMeasure: string,
              description: string,
              icon: string)
  {
    this.quantity = quantity ?? ""
    this.unitMeasure = unitMeasure ?? ""
    this.description = description ?? ""
    this.icon = icon ?? ""
  }

  quantity?: number
  unitMeasure?: string
  description?: string
  icon?: string
  
}
