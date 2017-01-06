var Backbone = require('backbone');

class ExModelClass {
    constructor(){
        this.model = {};
        this.model.ex = new Backbone.Model();
        this.model.ex2 = new Backbone.Model();
    }
    call(){
        return this.model;
    }
}
module.exports = ExModelClass;