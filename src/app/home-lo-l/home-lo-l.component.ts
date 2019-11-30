import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-lo-l',
  templateUrl: './home-lo-l.component.html',
  styleUrls: ['./home-lo-l.component.css']
})
export class HomeLoLComponent implements OnInit {

  users = [
    {pos: 1, name: "Abner", points: 20},
    {pos: 2, name: "Eduardo", points: 18},
    {pos: 3, name: "Mateus", points: 15},
    {pos: 1, name: "Felipe", points: 14},
    {pos: 2, name: "Lucas", points: 13},
    {pos: 3, name: "Guilherme", points: 10},
    {pos: 1, name: "Bruno", points: 9},
    {pos: 2, name: "Douglas", points: 8},
    {pos: 3, name: "Kaabulozo", points: 7}
  ]

  rounds = [
    {teamA: "KBM", teamB: "PNG"},
    {teamA: "PRG", teamB: "ITZ"},
    {teamA: "KDS", teamB: "RED"},
    {teamA: "RDP", teamB: "CNB"},
  ]

  
  constructor() { }

  ngOnInit() {
  }

}
