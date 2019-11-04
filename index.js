

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value;
 return object;
}
function deleteFromObjectByKey(object, key){
let newobject = Object.assign({}, key);

delete newobject[key];

return object;
}
1) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     Error: Expected 1 to be undefined 

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
return object;
}