
function reverseString() {
    let str = document.querySelector('.ask-1').value
    let reverse = str.split(" ").reverse().join(" ")  
    
    document.querySelector('.resp-1').innerHTML = reverse;
    return

}



