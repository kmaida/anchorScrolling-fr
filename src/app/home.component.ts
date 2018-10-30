import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCallback() {
    this.router.navigateByUrl('/callback#access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZha2UgVG9rZW4iLCJpYXQiOjE1MTYyMzkwMjJ9.fg-Dm3WJDDPt3J18KcIipEka0n92sFbIF9N7JqCLnQ_194uScpG7nt9JOEDHE0lqgmNTKf1xr31X5rQPO1HkmGMPzQQ64TLoyr1qs8azzdpJKdm3w4R5qn9Z52zA1deIa1-dBShXrC0ynhXBCXaWaCymRD7n6duyBbuZAmAieaI&expires_in=86400');
  }

}
