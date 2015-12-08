import {Component} from 'angular2/angular2';
import {Router} from 'angular2/router';

@Component({
	selector: 'scene',
	template: `
    <div class="container hgt100 bg-home">
        <div class="row hgt50">
            <div class="ten columns offset-by-one column">
                <h1>Mock Scene</h1>
				<h2>Hannah speaks here</h2>
            </div>
        </div>
        <div class="row hgt50 bg-police">
            <div class="ten columns offset-by-one column">
                <h2>Joel/Sarah go here</h2>
            </div>
        </div>
    </div>
    `
})
export class SceneComponent {

}