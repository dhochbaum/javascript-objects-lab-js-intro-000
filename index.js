var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var a = object
  a[key] = value
  return a
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {

}
