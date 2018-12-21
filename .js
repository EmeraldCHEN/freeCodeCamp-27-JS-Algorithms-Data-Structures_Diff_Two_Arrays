function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i = 0; i < arr2.length; i++){
        if(arr1.includes(arr2[i]) === false){
            newArr.push(arr2[i]);
        }
    }
    for(let j = 0; j < arr1.length; j++){
        if(arr2.includes(arr1[j]) === false){
            newArr.push(arr1[j]);         
        }
    } 
    return newArr;
  }
  
  diffArray([2, 3, 5, 6, 11], [ 2, 3, 4, 5,11]); // Returns [4,6]
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  // Returns [pink wool]






// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays/
