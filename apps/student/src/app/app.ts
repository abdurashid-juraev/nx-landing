import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from '../../../../libs/shared/ui/src/lib/shared/buttons/btn';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [RouterModule, BtnComponent, ButtonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'student';
}
