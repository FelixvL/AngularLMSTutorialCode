import { Component } from '@angular/core';

@Component({
	 selector: 'evenement-component',
	 template: `<h1>{{ title }}</h1>`,
})
export class EvenementComponent {
	 title: string = "Evenement";
}