import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
    selector: 'app-hero-info',
    standalone: true,
    imports: [],
    templateUrl: './hero-info.component.html',
    styleUrl: './hero-info.component.css'
})
export class HeroInfoComponent implements OnInit {
    hero!: Hero

    constructor() {}

    ngOnInit(): void {
        if (history !== undefined) {
            this.hero = history.state
        }
    }
}
