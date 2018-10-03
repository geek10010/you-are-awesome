// DO WHATEVER YOU WANT HERE

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
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
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
