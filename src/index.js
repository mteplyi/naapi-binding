const Benchmark = require('benchmark');
const addon = require('addon');

console.log(addon.langVersion);

new Benchmark.Suite()
  .add('napi-1000', () => {
    addon.generateArray(1000);
  })
  .add('jsjs-1000', () => {
    const array = new Array(1000);
    for (let i = 0; i < array.length; i++) {
      array[i] = i;
    }
  })
  .add('napi-10000', () => {
    addon.generateArray(10000);
  })
  .add('jsjs-10000', () => {
    const array = new Array(10000);
    for (let i = 0; i < array.length; i++) {
      array[i] = i;
    }
  })
  .on('complete', function () {
    for (let i = 0; i < this.length; i++) {
      console.log(this[i].toString());
    }
    console.log('Fastest is', this.filter('fastest').map('name')[0]);
  })
  .run();
