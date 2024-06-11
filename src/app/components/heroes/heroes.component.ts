import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Hero } from '../hero/hero';
import { HeroService } from '../../services/hero/hero.service';
import { HeroComponent } from '../hero/hero.component';

@Component({
    selector: 'app-heroes',
    standalone: true,
    imports: [
        HeroComponent
    ],
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
    heroes!: Hero[]

    constructor(private service: HeroService) { }

    ngOnInit(): void {
        this.service.getHeroes().subscribe((heroes) => {
            heroes.sort((a, b) => this.sortHeroes(a, b))

            this.heroes = heroes
        })
    }

    sortHeroes(a: Hero, b: Hero): number {
        if (a["localized_name"] > b["localized_name"]) {
            return 1
        } else if (b["localized_name"] > a["localized_name"]) {
            return -1
        } else {
            return 0
        }
    }
}
