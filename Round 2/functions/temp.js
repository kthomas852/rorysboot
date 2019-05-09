const help = require('./functions');

const obj = {
  myDohicky: function(a, b){
  const c = a + b
    return c
  },

  midway: function(cb){
    return cb(23, this.myDohicky)
  }
}

console.log(obj.midway(help.hof));
console.log(obj.midway(help.jake.hofTwo));
