function boredResponse(){
    let atividades = JSON.parse (this.responseText);
    let telaBored = document.getElementById('boredRow');
    
    let textoBored='';

    textoBored=`
        <div class="response">
            <p>Sugestão: ${atividades.activity}.</p>
        </div>
    `;

    telaBored.innerHTML = textoBored;
}

function bored(){
    let xhr = new XMLHttpRequest ();
    xhr.onload = boredResponse;
    xhr.open ('GET', `http://www.boredapi.com/api/activity/`);
    xhr.send ();
}

/************************************************************************************************************/

function dogsResponse(){
    let dogs = JSON.parse (this.responseText);
    let telaDogs = document.getElementById('dogsRow');

    let textoDogs = '';

    if(dogs.status == 'success'){
        textoDogs = `
            <img src="${dogs.message}">
        `;
    }
    else{
        textoDogs = `
            <p>Erro. Não foi possível carregar uma imagem. Tente novamente em um tempinho ou passe para a proxima atividade.</p>
        `;
    }

    telaDogs.innerHTML = textoDogs;

}

function dogs(){
    let xhr = new XMLHttpRequest ();
    xhr.onload = dogsResponse;
    xhr.open ('GET', `https://dog.ceo/api/breeds/image/random`);
    xhr.send ();
}

/******************************************************************************************************/


function catsResponse(){
    let cats = JSON.parse(this.responseText);
    let telaCats = document.getElementById('catsRow');

    let textoCats = '';

    textoCats = `
        <p>${cats.fact}</p>
    `;

    telaCats.innerHTML = textoCats;
}

function cats(){
    let xhr = new XMLHttpRequest ();
    xhr.onload = catsResponse;
    xhr.open ('GET', `https://catfact.ninja/fact`);
    xhr.send ();
}

/************************************************************************************************************/

function ageResponse(){
    let ageResponse = JSON.parse(this.responseText);
    let telaAge = document.getElementById('ageRow');

    let textoAge = '';

    textoAge=`
        <p>Idade: ${ageResponse.age}</p>
    `;

    telaAge.innerHTML = textoAge;
}

function age(){
    let nome = document.getElementById('nameInput').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = ageResponse;
    xhr.open ('GET', `https://api.agify.io?name=${nome}`);
    xhr.send ();
}

/******************************************************************************************************/

function genderResponse(){
    let genderResponse = JSON.parse(this.responseText);
    let telaGender = document.getElementById('genderRow');

    let textoGender = '';

    textoGender=`
        <p>Sexo: ${genderResponse.gender}</p>
        <p>Probabilidade (de 0 a 1): ${genderResponse.probability}</p>
    `;

    telaGender.innerHTML = textoGender;
}

function gender(){
    let nome = document.getElementById('nameInput2').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = genderResponse;
    xhr.open ('GET', `https://api.genderize.io?name=${nome}`);
    xhr.send ();
}

/*********************************************************************************************************/

function nationResponse(){
    let nationResponse = JSON.parse(this.responseText);
    let telaNation = document.getElementById('nationRow');

    let textoNation = '';

    textoNation=`
        <p>1° (opção) País: ${nationResponse.country[0].country_id}</p>
        <p>Probabilidade (de 0 a 1): ${nationResponse.country[0].probability}</p>
        <p>2° (opção) País: ${nationResponse.country[1].country_id}</p>
        <p>Probabilidade (de 0 a 1): ${nationResponse.country[1].probability}</p>
        <p>3° (opção) País: ${nationResponse.country[2].country_id}</p>
        <p>Probabilidade (de 0 a 1): ${nationResponse.country[2].probability}</p>
    `;

    telaNation.innerHTML = textoNation;
}

function nation(){
    let nome = document.getElementById('nameInput3').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = nationResponse;
    xhr.open ('GET', `https://api.nationalize.io?name=${nome}`);
    xhr.send ();
}

/*****************************************************************************************************/

function jokeResponse(){
    let joke = JSON.parse(this.responseText);
    let telaJoke = document.getElementById('jokeRow');

    let textoJoke = '';

    if(joke.type == `single`){
        textoJoke = `
        <div class="jokeResponseDiv">
            <p>${joke.joke}</p>
        </div>
        `;
    }
    if(joke.type == `twopart`){
        textoJoke = `
        <div class="jokeResponseDiv">
            <p>${joke.setup}</p>
            <p>${joke.delivery}</p>
        </div>
        `;
    }

    telaJoke.innerHTML = textoJoke;
}

function joke(){

    let type = document.getElementById('typeChoice').value;

    if(type==``){

        let texto='';
        let tela = document.getElementById('jokeRow')

        texto = `
            <div class="errorMsg">
                <p>Escolha uma opção válida</p>
            </div>
        `;

        tela.innerHTML = texto;

        return;
    }

    let xhr = new XMLHttpRequest ();
    xhr.onload = jokeResponse;
    xhr.open ('GET', `https://v2.jokeapi.dev/joke/${type}?blacklistFlags=racist,sexist`);
    xhr.send ();
}

/******************************************************************************************************/

function cocktailResponse(){
    let cocktailResponse = JSON.parse(this.responseText);
    let telaCocktail = document.getElementById('cocktailRow');
    let textoCocktail = '';
    let numResponses = cocktailResponse.drinks.length;

    if(numResponses == 1){
        textoCocktail = `
            <p>Drink: ${cocktailResponse.drinks[0].strDrink}</p>
        `;
    }

    if(numResponses > 1){
        let randomDrink = Math.floor(Math.random() * numResponses + 1);

        textoCocktail = `
            <p>Drink: ${cocktailResponse.drinks[randomDrink].strDrink}</p>
        `;
    }

    telaCocktail.innerHTML = textoCocktail;
}

function cocktail(){
    let cocktailChoiceSelect = document.getElementById('cocktailChoiceSelect').value;

    if(cocktailChoiceSelect==``){

        let texto='';
        let tela = document.getElementById('cocktailRow');

        texto = `
            <div class="errorMsg">
                <p>Escolha uma opção válida</p>
            </div>
        `;

        tela.innerHTML = texto;

        return;
    }

    if(cocktailChoiceSelect == 'any'){
        let xhr = new XMLHttpRequest ();
        xhr.onload = cocktailResponse;
        xhr.open('GET',`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        xhr.send();
    }
    if(cocktailChoiceSelect != 'any'){
        let xhr = new XMLHttpRequest ();
        xhr.onload = cocktailResponse;
        xhr.open('GET',`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailChoiceSelect}`);
        xhr.send();
    }

}

/******************************************************************************************************************************************************************/

function loveResponse(){
    let porcentagem = JSON.parse(this.responseText);
    let telaLove = document.getElementById('loveRow');
    let textoLove = '';
    
    textoLove = `
        <p>Porcentagem: ${porcentagem.percentage}%</p>
        <p>Comentário: ${porcentagem.result}</p>
    `;

    telaLove.innerHTML = textoLove;
}

function love(){
    const data = null;

    let seuNome = document.getElementById('nameInputLove').value;
    let otherNome = document.getElementById('nameInputLove2').value;

    if(seuNome == '' || otherNome == '' || (seuNome == '' & otherNome == '')){
        let texto='';
        let tela = document.getElementById('loveRow');

        texto = `
            <div class="errorMsg">
                <p>Escolha uma opção válida</p>
            </div>
        `;

        tela.innerHTML = texto;

        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("GET", `https://love-calculator.p.rapidapi.com/getPercentage?sname=${seuNome}&fname=${otherNome}`);
    xhr.onload = loveResponse;
    xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "1e7a7addecmsh266ab56bb95b3aep157e7ejsn9590ae911176");

    xhr.send(data);
}