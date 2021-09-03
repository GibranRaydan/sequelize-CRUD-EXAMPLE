
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calculateArea();
    };

    calculateArea() {
        return this.height * this.width;
    };

};
module.exports = Rectangle;


