import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { Topbar } from '../components/topbar/topbar';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'lib-feature-layout',
  imports: [Sidebar, Topbar, RouterOutlet],
  templateUrl: './feature-layout.html',
  styleUrl: './feature-layout.css'
})
export class FeatureLayout {}
