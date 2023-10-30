import { Component } from '@angular/core';
import { Type } from 'src/app/models/type.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  types = [Type.SHOPPING, Type.BUSINESS, Type.OTHERTHINGS];
}
