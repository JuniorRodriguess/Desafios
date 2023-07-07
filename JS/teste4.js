function maiuscula() {
    let str = document.querySelector(".ask-4").value
    let lower = str.toLowerCase().split(" ");    

    for(i = 0; i < lower.length; i++) {
        lower[i] = lower[i][0].toUpperCase() + lower[i].substring(1)
    }

    document.querySelector(".resp-4").innerHTML = lower.join(' ')
}