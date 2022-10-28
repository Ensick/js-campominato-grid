


let box = document.getElementById("box")

for (let x = 1; x <= 100; x++) {

    let divNuovo = document.createElement("div")
    divNuovo.classList.add("box-js")

    divNuovo.addEventListener('click' , function(){
        console.log(this);
        this.classList.toggle('ms-color-custom')

    })


    if (x % 3 == 0 && x % 5 == 0) {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        

    } else if (x % 5 == 0) {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        
        

    } else if (x % 3 == 0) {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        
        
    } else {

        divNuovo.innerHTML = `<h4>${x}</h4>`;
        
        
    }

    box.append(divNuovo)

}