import { Component } from '@angular/core';

@Component({
	 selector: 'pagenotfound-component',
	 template: `<h1>{{ title }}</h1>`,
})
export class PageNotFoundComponent {
	 title: string = "Page Not Found";
}