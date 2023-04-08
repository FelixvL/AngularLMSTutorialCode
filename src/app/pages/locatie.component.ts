import { Component } from '@angular/core';

@Component({
	 selector: 'locatie-component',
	 template: `<h1>Component{{ title }}</h1>`,
})
export class LocatieComponent {
	 title: string = "Locatie";
}