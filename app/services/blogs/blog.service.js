"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
// import { IBlog } from './blog';
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/do");
var BlogService = (function () {
    function BlogService(_http) {
        this._http = _http;
        this._urlBlog = 'app/api/blogData.json';
    }
    // getBlogs(): Observable<IBlog[]>{
    //   return this._http.get('app/api/blogData.json')
    //     .map((response: Response) => response.json())
    //     .catch(this.handleError);
    // }
    BlogService.prototype.getBlogs = function () {
        return this._http.get(this._urlBlog)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BlogService.prototype.getBloggerId = function (id) {
        return this.getBlogs()
            .map(function (blogger) { return blogger.find(function (blogger) { return blogger.id === id; }); })
            .do(function (data) { return console.log(data); });
    };
    BlogService.prototype.handleError = function (error) {
        console.error(error);
        var message = "Error status code " + error.status + " at " + error.url;
        return Observable_1.Observable.throw(message);
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map