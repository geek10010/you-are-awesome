// 1
const createEnumerableProperty = propertyName => propertyName;

// 2
const createNotEnumerableProperty = propertyName => Symbol(propertyName);

// 3
const createProtoMagicObject = () => {
  createProtoMagicObject.prototype = Function.prototype;
  return createProtoMagicObject;
};

// 4
const incrementor = () => {
  incrementor.counter = (incrementor.counter || 0) + 1;
  const inner = () => incrementor();
  inner.valueOf = () => incrementor.counter;
  return inner;
};

// 5
const asyncIncrementor = () => {
  asyncIncrementor.counter = (asyncIncrementor.counter || 0) + 1;
  const inner = () => asyncIncrementor();
  inner.valueOf = () => asyncIncrementor.counter;
  return inner;
};

// 6
const createIncrementer = () => {
  function* increment() {
    let counter = 0;
    while (true) {
      yield counter += 1;
    }
  }
  return increment();
};

// 7
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  const resolveLater = (resolve) => {
    setTimeout(() => resolve(param), 1000);
  };
  return new Promise(resolveLater);
};

// 8
const getDeepPropertiesCount = (obj) => {
  let counter = 0;

  const count = (object) => {
    const objKeys = Object.keys(object);
    if (objKeys.length) {
      objKeys.forEach((key) => {
        counter += 1;
        count(object[key]);
      });
    }
  };

  count(obj);
  return counter;
};


// 9
const createSerializedObject = () => {};

// 10
const sortByProto = () => {};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
