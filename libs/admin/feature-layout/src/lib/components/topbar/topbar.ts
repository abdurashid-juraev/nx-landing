import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'lib-topbar',
  imports: [ButtonModule, OverlayBadgeModule, AvatarModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar {}
