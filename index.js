/*function footerScreen(){
    document.getElementById("footer").style.position = "initial";
}

function footerScreenR(){
    document.getElementById("footer").style.position = "absolute";
}*/

function erase (){

    let tela2 = document.getElementById('answersDivRow');
    let texto2= ``;

    document.getElementById('numero').value = "";
    document.getElementById('letra').value = "";
    document.getElementById('caracter').value = "";
    document.getElementById('color').value = "";

    tela2.innerHTML = texto2;

}

function check () {
    let numero = ['O Castelo Animado','O Castelo no Céu','O serviço de Entregas da Kiki','Sussurros do Coração','O Mundo dos Pequeninos','Meu Amigo Totoro','O Reino dos Gatos','As Memórias de Marnie','Nausicaa','O Conto da Princesa Kaguya','Shutter Island'];
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
            <button onclick="erase()" id="answersBtn" class="btn">Limpar</button>
        </div>
    `;

    tela.innerHTML = texto;
}

/*****************************************************************************************************************************************************/

function dark(){
    document.body.style.background="rgb(29, 29, 32)";
    document.body.style.color="hsla(0,0%,100%,0.87)";
    document.getElementById('1').style.color="hsla(0,0%,100%,0.87)";
    document.getElementById('2').style.color="hsla(0,0%,100%,0.87)";
    document.getElementById('3').style.color="hsla(0,0%,100%,0.87)";
    document.getElementById('4').style.color="hsla(0,0%,100%,0.87)";

    document.getElementById('btn').style.border="0";
    
    let css = '.modeColors li:hover{background-color: #a8a8a8;} hr{border-color: hsla(0,0%,100%,0.87);} #backgroundModes:checked ~ .modeColors{box-shadow: 0 1.5px hsla(0,0%,100%,0.87);} .answersDiv{border:2px solid hsla(0,0%,100%,0.87);}';
    let style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

function rainbow(){
    document.body.style.background="linear-gradient(to right, orange , yellow, green, cyan, blue, violet)";
    document.body.style.color="black";
    document.getElementById('1').style.color="black";
    document.getElementById('2').style.color="black";
    document.getElementById('3').style.color="black";
    document.getElementById('4').style.color="black";

    document.getElementById('btn').style.border="0";
    
    let css = '.modeColors li:hover{background-color: #a8a8a8;} hr{border-color: black;} #backgroundModes:checked ~ .modeColors{box-shadow: 0 1.5px black;} .answersDiv{border:2px solid black;}';
    let style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

function light(){
    document.body.style.background="hsla(0,0%,100%,0.87)";
    document.body.style.color="black";
    document.getElementById('1').style.color="black";
    document.getElementById('2').style.color="black";
    document.getElementById('3').style.color="black";
    document.getElementById('4').style.color="black";

    document.getElementById('btn').style.border="1px solid black";

    let css = '.modeColors li:hover{background-color: #a8a8a8;} hr{border-color: black;} #backgroundModes:checked ~ .modeColors{box-shadow: 0 1.5px black;} .answersDiv{border:2px solid black;}';
    let style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

function sophia(){
    document.body.style.background="linear-gradient(to right,  rgb(173, 45, 167), #ff41d0, rgb(173, 45, 167))";
    document.body.style.color="black";
    document.getElementById('1').style.color="black";
    document.getElementById('2').style.color="black";
    document.getElementById('3').style.color="black";
    document.getElementById('4').style.color="black";

    document.getElementById('btn').style.border="0";

    let css = '.modeColors li:hover{background-color: #ff6bda;} hr{border-color: black;} #backgroundModes:checked ~ .modeColors{box-shadow: 0 1.5px black;} .answersDiv{border:2px solid black;}';
    let style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}