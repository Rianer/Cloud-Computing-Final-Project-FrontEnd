import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['']);
  }

  // navigateTo(link: string) {
  //   this.router.navigateByUrl(link);
  // }
}
