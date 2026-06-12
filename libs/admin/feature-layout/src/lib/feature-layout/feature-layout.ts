import { Component } from '@angular/core';
import { Sidebar } from '../components/sidebar';
import { Topbar } from '../components/topbar';

@Component({
  selector: 'lib-feature-layout',
  imports: [Sidebar, Topbar],
  templateUrl: './feature-layout.html',
  styleUrl: './feature-layout.css'
})
export class FeatureLayout {}
