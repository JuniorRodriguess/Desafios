function noRepeat() {
    let frase = document.querySelector('.ask-2').value.split('')
    let repeat = [...new Set(frase)].join('')
   
    document.querySelector('.resp-2').innerHTML = repeat
    return    
}


