import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor(private expService: ExperienceService) {}

  ngOnInit() {
    this.expService.getExp();
  }

}
