

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


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
return object;
}