import { Component, OnInit } from '@angular/core';
import { Experience, Location, Responsibility } from '../../services/experience.types';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor(private expService: ExperienceService) {}

  ngOnInit() {
    const experience = this.expService.getExp();
  }

}
