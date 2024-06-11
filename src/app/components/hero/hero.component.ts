import { RouterLink } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

    @Input()
    hero!: Hero

    heroName!: string

    ngOnInit(): void {
        this.heroName = this.hero.name.substring(this.hero.name.indexOf('_', 13) + 1, this.hero.name.length)
    }
}
