// Viết một function xoá các phần từ trùng lặp trong một mảng các số:
//Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]

//Cách 1: Sử dụng indexOf với vòng lặp for hoặc for-of:
let input = [1, 2, 3, 5, 4, 2, 6, 4];

function getUnique(array){
    let uniqueArray = [];
    //Sử dụng vòng lặp for
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
getUnique(input);


function getUnique(array){
    let uniqueArray = [];
    // Sử dụng vòng lặp for-of
    for(let value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}
getUnique(input);


//Cách 2: Sử dụng indexOf() và filter()
let array = [1, 2, 3, 5, 4, 2, 6, 4];
let uniqueArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
});
console.log(uniqueArray);

//Cách 3: Sử dụng Sets
let arr  = [1, 2, 3, 5, 4, 2, 6, 4];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

