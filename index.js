

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value;
 return object;
}
function deleteFromObjectByKey(object, key){
newobject = Object.assign({}, key);

delete newobject[key];

return object;
}
 1) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: newobject is not defined
      at deleteFromObjectByKey (about:blank:15:13)
      at Context.<anonymous> (test/index-test.js:50:20)

  2) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: newobject is not defined
      at deleteFromObjectByKey (about:blank:15:13)

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
return object;
}