// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
// Input: "abcdef"
// Ouput: "fedcba"

//Cách 1:
function reverse_str(str) {
    const arr=str.split("");
    const reverse_arr =arr.reverse();
    const reverse_str = reverse_arr.join("");
    console.log(reverse_str);
};

reverse_str("abcdef");

//Cách 2:
function reverse_str(str) {
    let newStr="";
    for (let i = str.length - 1; i>=0; i--) {
        newStr += str[i];
    }
    return newStr
};

reverse_str("abcdef");