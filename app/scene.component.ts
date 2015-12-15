import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'scene',
    template: `
    <div class="hgt90">
         <div class="row hgt50 bg-han-light">
            <div class="ten columns offset-by-one column">
                <h1>Mock Scene</h1>
				<h2>Hannah speaks here</h2>
            </div>
        </div>
        <div class="row hgt50 bg-joel-light">
            <div class="ten columns offset-by-one column">
                <h2>Joel/Sarah will speak & think here</h2>
            </div>
        </div>
    </div>
    `
})
export class SceneComponent {

}