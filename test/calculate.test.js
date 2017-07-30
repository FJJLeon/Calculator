

var expect = chai.expect;

describe("Valid input test",function(){

    it("1+1 should return 2",function(){
        expect(parse("1+1")).to.be.equal(2);
    });

    it("2-1 should return 1",function(){
        expect(parse("2-1")).to.be.equal(1);
    });

    it("5*6 should return 30",function(){
        expect(parse("5*6")).to.be.equal(30);
    });

    it("9/3 should return 8.25",function(){
        expect(parse("9/3")).to.be.equal(3);
    });

    it("(8-3) should return 5",function(){
        expect(parse("(8-3)")).to.be.equal(5);
    });

    it("11*12/(1+(1/2))+5*(6-4)*31 should return 398",function(){
        expect(parse("11*12/(1+(1/2))+5*(6-4)*31")).to.be.equal(398);
    });

    it("1+-3 should return -2",function(){
        expect(parse("1+-3")).to.be.equal(-2);
    });

    it("2017+18-20*666 should return -11285",function(){
        expect(parse("2017+18-20*666")).to.be.equal(-11285);
    });

    it("(6+16)*6/16 should return 8.25",function(){
        expect(parse("(6+16)*6/16")).to.be.equal(8.25);
    });

    it("1 should return 8.25",function(){
        expect(parse("(6+16)*6/16")).to.be.equal(8.25);
    });
});

describe("Invalid input test", function () {

    it("2/0 should return Divide by zero",function(){
        expect(handle("2/0")).to.be.equal("Divide by zero");
    });

    it("-2/0 should return Divide by zero",function(){
        expect(handle("-2/0")).to.be.equal("Divide by zero");
    });

    it("1+*3 should return Input error",function(){
        expect(handle("1+*3")).to.be.equal("Input error");
    });

    it("9+((2*3 should return Input error",function(){
        expect(handle("9+((2*3")).to.be.equal("Input error");
    });

    it("8+-*/5 should return Input error",function(){
        expect(handle("1+*3")).to.be.equal("Input error");
    });

});