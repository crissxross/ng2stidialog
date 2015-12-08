import {Component} from 'angular2/angular2';
import {Router} from 'angular2/router';

@Component({
	selector: 'home',
	template: `
    <div class="container hgt100 bg-home">
        <div class="row hgt50">
            <div class="ten columns offset-by-one column">
                <h1>Stitched Up Prototype Dialogue Engine</h1>
            </div>
        </div>
        <div class="row hgt50 bg-police">
            <div class="ten columns offset-by-one column">
                <h2>My first prototype in Angular 2</h2>
            </div>
        </div>
    </div>
    `
})
export class HomeComponent {

}