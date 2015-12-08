var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
// components
var HomeComponent_1 = require("./HomeComponent");
var SceneComponent_1 = require("./SceneComponent");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Stitched Up';
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <div>\n      <a class=\"button button-primary\" [router-link]=\"['Home']\">{{title}}</a>\n      <a class=\"button button-primary\" [router-link]=\"['Scene']\">Scene</a>\n      <strong>{{title}}</strong>\n      <router-outlet></router-outlet>\n    </div>\n    "
        }),
        router_1.RouteConfig([
            { path: '/app', redirectTo: ['Home'] },
            { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent },
            { path: '/scene', name: 'Scene', component: SceneComponent_1.SceneComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/src/app' })
]);
//# sourceMappingURL=app.js.map