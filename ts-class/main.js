var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employe = /** @class */ (function () {
    function Employe(name) {
        this.employeName = name;
    }
    Employe.prototype.render = function () {
        console.log("Good Night " + this.employeName);
    };
    return Employe;
}());
var theEmploye = new Employe("Usamah Basalamah");
console.log(theEmploye.employeName);
theEmploye.render();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.managerWork = function () {
        console.log("Sorry manager has been worked");
    };
    return Manager;
}(Employe));
var theManager = new Manager("Basalamah");
theManager.managerWork();
theManager.render();
console.log(theManager.employeName);
