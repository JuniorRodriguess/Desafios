function findSubs() {
    let str = document.querySelector(".ask-3").value;
    let newStr = str.split('').reverse().join('');
    let palindromo = ''

    for(i = 0; i < newStr.length; i++) {
        for (j = i + 1; j <= str.length; j++) {
            let subs = newStr.slice(i,j);                       
            let newSubs = subs.split('').reverse().join('');
            if(newSubs == subs && subs.length > palindromo.length) {
                palindromo = subs
            }
        }
    }
    console.log(palindromo)
   document.querySelector('.resp-3').innerHTML = palindromo
}