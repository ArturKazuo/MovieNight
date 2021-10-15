function footerScreen(){
    alert("foi????????")
    document.getElementById("footer").style.bottom = "initial";
}

function footerScreenR(){
    document.getElementById("footer").style.bottom = "0px";
}

function erase (){

    let tela2 = document.getElementById('answersDivRow');
    let texto2= ``;

    document.getElementById('numero').value = "";
    document.getElementById('letra').value = "";
    document.getElementById('caracter').value = "";
    document.getElementById('color').value = "";

    tela2.innerHTML = texto2;

    footerScreenR();
}

function check () {
    let numero = ['O Castelo Animado','O Castelo no Céu','O serviço de Entregas da Kiki','Sussurros do Coração','O Mundo dos Pequeninos','Meu Amigo Totoro','O Reino dos Gatos','As Memórias de Marnie','Nausicaa','O Conto da Princesa Kaguya'];
    let letra = ['Donut','Hamburguer','Pizza','Lamen','Sushi','Macarrão','Lasanha','Mexicano','Vegano','Árabe','China'];
    let caracter = ['água','Coca Cola','Guaraná','Sprite','Suco'];
    let cor = ['milkshake','chocolate','cookie','brownie','doce','bolo'];

    numero = numero.sort(() => Math.random() - 0.5)
    letra = letra.sort(() => Math.random() - 0.5)
    caracter = caracter.sort(() => Math.random() - 0.5)
    cor = cor.sort(() => Math.random() - 0.5)

    let i = document.getElementById('numero').value;
    let j = document.getElementById('letra').value;
    let k = document.getElementById('caracter').value;
    let l = document.getElementById('color').value;

    let tela = document.getElementById('answersDivRow');

    let texto=``;

    if(i==`` || j==`` || k==`` || l==``){
        texto = `
            <div class="errorMsg">
                <p>Escolha uma opção válida</p>
            </div>
        `;

        tela.innerHTML = texto;

        return;
    }

    texto=`
        <div class="answersDiv">
            <p>Filme: ${numero[i]}</p>
            <p>Comida: ${letra[j]}</p>
            <p>Bebida: ${caracter[k]}</p>
            <p>Sobremesa: ${cor[l]}</p>
        </div>

        <div class="answersBtn">
            <button onclick="erase()" id="answersBtn" class="answersBtn">Limpar</button>
        </div>
    `;

    tela.innerHTML = texto;

    footerScreen();
}