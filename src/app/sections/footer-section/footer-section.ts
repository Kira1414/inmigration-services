import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css'
})
export class FooterSectionComponent {}
