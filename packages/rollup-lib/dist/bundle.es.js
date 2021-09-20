import cloneDeep from 'lodash/cloneDeep';

var index = (function (v) {
  console.log("test1");
  console.log(cloneDeep(v));
});

export { index as default };
