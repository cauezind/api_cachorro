const exibir = document.querySelector('#cachorro')
var foto = []
const botao = document.getElementById('botao')

window.addEventListener('load', function(){


    async function doFetchAsync(){

        //ASSYNC
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const dados = await res.json();

        console.log(dados)       
        let dogPic = dados.message
        foto.push(dogPic)

        mostraDados()

        

    }

    doFetchAsync()

    botao.addEventListener("click", doFetchAsync)
})



function mostraDados(){

    foto.forEach(dog => {

        exibir.innerHTML = `<img src="${dog}" />`

    });
    console.log(foto)
 }


 