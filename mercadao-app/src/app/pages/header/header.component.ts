import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
        { label: 'Estatísticas', routerLink: '/estatisticas'  },
        { label: 'TI', routerLink: '/ti'  },
        { label: 'Sobre', routerLink: '/sobre' }
      ];

      this.home = {icon: PrimeIcons.HOME, routerLink: '/' };
  }
}
