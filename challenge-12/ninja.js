let obj1 = {
  prop1: 'prop1',
  prop2: 'prop2',
};

let obj2 = {
  prop1: 'prop1',
  prop2: 'prop2',
};

obj1.prop1 = 'propriedade 1';

console.log(obj1 === obj2);

let objCopy = obj1;
console.log(objCopy);
console.log(objCopy === obj1);
console.log(objCopy.prop1);
console.log((objCopy.prop1 = 'propriedae do objeto copy'));
