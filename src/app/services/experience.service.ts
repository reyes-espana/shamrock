import { Injectable } from '@angular/core';
import { Experience, Location, Responsibility } from './experience.types';
import * as exp from '../utils/experiences.json';

@Injectable({
    providedIn: 'root'
})

export class ExperienceService {
    private expjson = JSON.parse(JSON.stringify(exp));

    getExp() {
        let experience: Experience[] = [];
        for(let i = 0; i < this.expjson.default.length; i++) {
            let responsibilities: Responsibility[] = this.expjson.default[i].responsibilities;
            let location: Location = {
              city: this.expjson.default[i].city,
              state: this.expjson.default[i].state
            }
            
            experience = [
                {
                    company: this.expjson.default[i].company,
                    location: location, 
                    title: this.expjson.default[i].title,
                    responsibilities: responsibilities
                }
            ]
        };
        console.log(experience)
        return experience
    }
}