function anagramPalidromo() {
    let str = document.querySelector(".ask-5").value
    let word = str.split('').reverse().join('')
    

    if (word == str) {         
        document.querySelector(".resp-5").innerHTML = "true"
    } else {
        document.querySelector(".resp-5").innerHTML = "false"
    }    

    

}