import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    private readonly API = "https://api.opendota.com/api/heroStats"

    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.API)
    }
}
