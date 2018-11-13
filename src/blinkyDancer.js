var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this.blinkyDancer = new Dancer(top, left, timeBetweenSteps);

  Dancer.call(this);

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  var oldStep = this.step;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
  //this.oldStep = blinkyDancer.prototype.step;


  // return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


//makeBlinkyDancer.prototype.oldStep = blinkyDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};



