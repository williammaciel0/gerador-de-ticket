let validacao = document.querySelectorAll('.validacao')
const campo = document.querySelectorAll('.campo')
let card = document.querySelector('.sessao-card')

const inputUpload = document.querySelector('.input-upload')
const sumirInput = document.querySelector('.sumir') 
const titulo = document.querySelector('.titulo1')
const descricao = document.querySelector('.descricao1')

let formularioValores = {
        nameFull: '',
        emalAddress: '',
        gitHub: ''
}

function preencherFormulario(formularioValores){
        card.innerHTML = `<p class="titulo">Congrats, ${formularioValores.nameFull}! Your ticket is ready.</p>
        <p class="descricao"> We've emailed your ticket to <span style="color: hsl(7, 86%, 67%)">${formularioValores.emalAddress}</span> and will send updates in the run up to the event.</p>
        <div class="card">
                <div class="logo-card">
                <img src="./assets/images/logo-mark.svg" alt="">
                <div class="titulo-e-data">
                        <h1>Coding Conf</h1>
                        <p>Jan 31, 2025 / Austin, TX</p> 
                </div>
                
                </div>
                <div class="avatar">
                <img src="./assets/images/image-avatar.jpg" alt="">
                <div class="informacoes-avatar">
                        <h2>${formularioValores.nameFull}</h2>
                        <p><img src="./assets/images/icon-github.svg" alt=""> ${formularioValores.gitHub}</p>
                </div>
                </div>
        </div>`
        
        titulo.classList.add('esconder')
        inputUpload.classList.add('esconder')
        descricao.classList.add('esconder')
        sumirInput.classList.add('esconder')
        
}

function validarValores(campo, index, idValor){
        
        if(campo !== ""){
                validacao[index].classList.remove('campo-vazio')
                if(idValor === 'nm'){
                        formularioValores.nameFull = campo
                } else if (idValor === 'ems'){
                        formularioValores.emalAddress = campo
                } else if(idValor === 'ghu') {
                        formularioValores.gitHub = campo
                }
                if(formularioValores.nameFull !== "" && formularioValores.emalAddress !== "" && formularioValores.gitHub !== ""){
                        preencherFormulario(formularioValores)
                }
        } else {
                validacao[index].classList.add('campo-vazio')
        }
}



function evento(){
        for(let i = 0; i <= campo.length; i++){
                validarValores(campo[i].value, i, campo[i].id)
        }
        
}


