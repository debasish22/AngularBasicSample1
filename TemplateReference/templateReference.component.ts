import {Component} from '@angular/core'

@Component({
    selector:'tempRef',
    templateUrl:'TemplateReference/Views/templateReference.html'
})

export class TemplateReferenceComponent{

    constructor(){}

    getData(mob : number, stat : string, cnt: string) {
		console.log(mob);
		console.log(stat);
		console.log(cnt);
	}

}