


let box = document.getElementById("box")

for (let x = 1; x <= 100; x++) {

    let divNuovo = document.createElement("div")
    divNuovo.classList.add("box-js")


    if (x % 3 == 0 && x % 5 == 0) {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        divNuovo.classList.add()

    } else if (x % 5 == 0) {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        divNuovo.classList.add()
        

    } else if (x % 3 == 0) {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        divNuovo.classList.add()
        
    } else {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        divNuovo.classList.add()
        
    }

    box.append(divNuovo)

}