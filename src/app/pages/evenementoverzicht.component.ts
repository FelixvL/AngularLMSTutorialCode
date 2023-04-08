import { Component } from '@angular/core';

@Component({
	 selector: 'evenementoverzicht-component',
	 template: `<h1>{{ title }}</h1>`,
})
export class EvenementOverzichtComponent {
	 title: string = "Evenement Overzicht";
}