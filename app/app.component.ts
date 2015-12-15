import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

// components
import {HomeComponent} from "./home.component";
import {SceneComponent} from "./scene.component";

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container hgt100">
        <div class="row nav">
            <a class="button button-primary" [routerLink]="['Home']">{{title}}</a>
            <a class="button button-primary" [routerLink]="['Scene']">Scene</a>
        </div>
            <router-outlet></router-outlet>
    </div>
    `
})

    @RouteConfig([
    { path: '/', redirectTo: ['Home']},
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/scene', name: 'Scene', component: SceneComponent }
])

export class AppComponent {
    public title = 'Stitched Up'
}