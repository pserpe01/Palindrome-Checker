const input = document.getElementById("input");

function check(){
    const value = input.value;
    const reverseWord = value.split("").reverse().join("");
    if(value == reverseWord){
        alert("Is a palindrome");
    }
    else{
        alert("Isn't a palindrome")
    }
} 