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
var SceneComponent = (function () {
    function SceneComponent() {
    }
    SceneComponent = __decorate([
        angular2_1.Component({
            selector: 'scene',
            template: "\n    <div class=\"hgt90\">\n         <div class=\"row hgt50 bg-han-light\">\n            <div class=\"ten columns offset-by-one column\">\n                <h1>Mock Scene</h1>\n\t\t\t\t<h2>Hannah speaks here</h2>\n            </div>\n        </div>\n        <div class=\"row hgt50 bg-joel-light\">\n            <div class=\"ten columns offset-by-one column\">\n                <h2>Joel/Sarah will speak & think here</h2>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SceneComponent);
    return SceneComponent;
})();
exports.SceneComponent = SceneComponent;
//# sourceMappingURL=SceneComponent.js.map