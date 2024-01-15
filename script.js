// Create an object called student with a property called name
const student = {
  name: "acciojob"
};

// Add a property to the Object prototype called getKeys() that returns an array of all the keys in the object
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
const keys = student.getKeys();
console.log(keys); // Output: ['name']
