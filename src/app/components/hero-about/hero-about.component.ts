import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';

@Component({
  selector: 'app-hero-about',
  standalone: true,
  imports: [IntersectionTriggerDirective],
  templateUrl: './hero-about.component.html',
  styleUrl: './hero-about.component.scss'
})
export class HeroAboutComponent {

}
