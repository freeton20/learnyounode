process.argv.shift();
process.argv.shift();
console.log(process.argv.reduce(function(sum,el){return Number(el) + sum},0))