"use strict";

const nacionalidad = document.querySelector(".nacionalidad");
const exp = document.querySelector(".exp");
const forma = document.querySelector(".forma");
const ocupacion = document.querySelector(".ocupacion");
const lenguajesP = document.querySelector(".lenguajesP");
const ap = document.querySelector("#ap");
const ap2 = document.querySelector(".ap2");
const btn = document.querySelector(".btn")

const cuerpo = document.querySelector(".a")

const Inom = document.querySelector(".nom");
const b1 = document.querySelector(".ba");
const b2 = document.querySelector(".in");
const b3 = document.querySelector(".av");
const b4 = document.querySelector(".na");
const Imail = document.querySelector(".mail");
const Tper = document.querySelector(".perfil");
const Ife = document.querySelector(".fe");


console.log(Tper.value)



ocupacion.addEventListener("change", (e)=> {

    e.defaultPrevented;

    lenguajesP.innerHTML = "";

    if(ocupacion.value == "Front-end"){
        

        for(let i = 0; i < 4; i++)
        {
            lenguajes(0,i);
        }
    }
    else if(ocupacion.value == "Back-end"){
        

        for(let i = 0; i < 4; i++)
        {
            lenguajes(1,i);
        }
    }
    else{
        for(let i = 0; i < 8; i++)
        {
            lenguajes(2,i);
        }
    }
})

const paises =  async (i) => {

    let a = await fetch("informacion.json");
    let respuesta = await a.json();
    

    nacionalidad.innerHTML += `<option value = "${respuesta.paises[i]}">${respuesta.paises[i]}</option>`;
}

const ocupaciones =  async (i) => {

    let a = await fetch("informacion.json");
    let respuesta = await a.json();
    

    ocupacion.innerHTML += `<option value = "${respuesta.ocupacion[i]}">${respuesta.ocupacion[i]}</option>`;
}

const expe =  async (i) => {

    let a = await fetch("informacion.json");
    let respuesta = await a.json();
    

    exp.innerHTML += `<option value = "${respuesta.exp[i]}">${respuesta.exp[i]}</option>`;
}

const form =  async (i) => {

    let a = await fetch("informacion.json");
    let respuesta = await a.json();
    

    forma.innerHTML += `<option value = "${respuesta.forma[i]}">${respuesta.forma[i]}</option>`;
}

const apti =  async (i) => {

    let a = await fetch("informacion.json");
    let respuesta = await a.json();
    

    ap.innerHTML += `<option value = "${respuesta.aptitudes[i]}"></option>`;
}

const lenguajes = async (i, x) =>{

    let a = await fetch("informacion.json");
    let respuesta = await a.json();

    lenguajesP.innerHTML +=`<div class="form-check">
    <input class="form-check-input ax" type="checkbox" value="${respuesta.lenguajes[i][x]}">
    <label class="form-check-label" for="flexCheckChecked">
        ${respuesta.lenguajes[i][x]}
    </label>
  </div>`


}


for(let i = 0; i < 5; i++)
{
    paises(i);
}

for(let i = 0; i < 4; i++)
{
    expe(i);
}

for(let i = 0; i < 4; i++)
{
    form(i);
}


for(let i = 0; i < 3; i++)
{
    ocupaciones(i);
}

for(let i = 0; i < 3; i++)
{
    apti(i);
}

btn.addEventListener("click", ()=>{
    //comprobaciones

    const checklist = document.querySelectorAll(".ax");


    console.log(checklist);


    if(Inom.value == "" || ocupacion.value == "Ocupacion" || Tper.value == "" || nacionalidad == "Nacionalidad" || exp == "Experiencia laboral" || forma == "Formacion"){
        alert("Faltan datos");
    }else{
        cuerpo.innerHTML = "";
        

        cuerpo.innerHTML += `
        <h1>DATOS: </h1>
        <p>Nombre = ${Inom.value}</p>
        <p>fecha = ${Ife.value}</p>
        <p>ocupacion = ${ocupacion.value}</p>
        <p>Experiencia = ${exp.value}</p>
        <p>Formacion = ${forma.value}</p>
        <p>E-mail = ${Imail.value}</p>
        <p>Nacionalidad = ${nacionalidad.value}</p>`;

        if(b1.checked){
            cuerpo.innerHTML += `<p>Ingles = Basico</p>`;
        }else if(b2.checked){
            cuerpo.innerHTML += `<p>Ingles = Medio</p>`;
        }else if(b3.checked){
            cuerpo.innerHTML += `<p>Ingles = Avanzado</p>`;
        }else if(b4.checked){
            cuerpo.innerHTML += `<p>Ingles = Nativo</p>`;
        }

        if(ocupacion.value == "Front-end"){
        
            console.log("hols");
            for(let i = 0; i < 4; i++)
            {
                if(checklist[i].checked){
                    cuerpo.innerHTML += `<p>lenguajes = ${checklist[i].value}</p>`;
                }
            }
        }
        else if(ocupacion.value == "Back-end"){
            
    
            for(let i = 0; i < 4; i++)
            {
                if(checklist[i].checked){
                    cuerpo.innerHTML += `<p>lenguajes = ${checklist[i].value}</p>`;
                }
            }
        }
        else{
            for(let i = 0; i < 8; i++)
            {
                if(checklist[i].checked){
                    cuerpo.innerHTML += `<p>lenguajes = ${checklist[i].value}</p>`;
                }
            }
        }

        cuerpo.innerHTML += `<p>Aptitudes = ${ap2.value}</p>
        <p>perfil= ${Tper.value}</p>`

    }


})