var chai = require('chai'); 
var expect = chai.expect;   
chai.should();

var bubblesort = require('../js/bubblesort.js');

describe('bubblesort', function(){

  it('should be a function', function(){
    expect(bubblesort).to.be.a('function');
  });

  it('should accept an argument', function(){
  	expect(bubblesort).to.have(arguments);
  });




});
