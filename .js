/*************   Solution #1  *******************************************************************/

function diffArray(arr1, arr2) {
    var newArr = [];
    // Looping through an array to find elements that don't exist in another array
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){ // Array.prototype.indexOf() to find unique elements 
            newArr.push(arr2[i]); // Pushing the unique elements to newArr
        }
    }
    for(let j = 0; j < arr1.length; j++){
        if(arr2.includes(arr1[j]) === false){  // Array.prototype.includes() to find unique elements 
            newArr.push(arr1[j]);   // Pushing the unique elements to newArr again      
        }
    } 
    return newArr;
  }
  
  diffArray([2, 3, 5, 6, 11], [ 2, 3, 4, 5,11]); // Returns [4,6]
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  // Returns [pink wool]



/*************   Solution #2 is improved version of solution #1   ********************************/

function diffArray2(arr1, arr2) {
    let newArr = [];
    function findUniqueItem(firstArr, secondArr){
        for(let i = 0; i < firstArr.length; i++){
            if(secondArr.includes(firstArr[i]) === false){
                newArr.push(firstArr[i]);
            }
        }
    }
    findUniqueItem(arr1, arr2);
    findUniqueItem(arr2, arr1);    
    
    return newArr;
}



/*************   Solution #3  *******************************************************************/








// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays/
