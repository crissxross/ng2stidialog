import {bootstrap, Component, provide} from 'angular2/angular2';
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

// components
import {HomeComponent} from "./HomeComponent";
import {SceneComponent} from "./SceneComponent";

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div>
      <a class="button button-primary" [router-link]="['Home']">{{title}}</a>
      <a class="button button-primary" [router-link]="['Scene']">Scene</a>
      <strong>{{title}}</strong>
      <router-outlet></router-outlet>
    </div>
    `
})

    @RouteConfig([
    { path: '/app', redirectTo: ['Home']},
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/scene', name: 'Scene', component: SceneComponent }
])

export class AppComponent {
    public title = 'Stitched Up'
}
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/src/app'})
]);