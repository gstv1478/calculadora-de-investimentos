const form = document.querySelector("#form");
const aporteInicial= document.querySelector("#aporteInicial");
const aporteMensal=document.querySelector("#aporteMensal");
const anos= document.querySelector("#anos");
const btn = document.querySelector("#btn");
const span = document.querySelector("#span");
const media = document.querySelector("#media");



const a = 1000; //aporte inicial
const b = 1+(10/100); //rentabilidade media
const c = 5; // tempo 
 


form.addEventListener("submit", async function() {
    event.preventDefault();
    const url = pegaURL();
    getAllPosts(url);

    
});

async function getAllPosts(url) {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    const r = "R$" + data.toLocaleString('pt-BR');
    console.log(r);
    span.textContent = `${r}`;
}

function pegaURL() {
    if (aporteInicial.value && media.value && anos.value) {
        const rent = ((1) + (media.value/100));
        console.log(rent, 'aqui');
        return `http://api.mathjs.org/v4/?expr=${aporteInicial.value}*${rent}%5E${anos.value}`
    } else {
        console.log('Deu errado');
    }
}

//função que calcula o valor do investimento
/* function calculadora(a, b, c, d) {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        d = parseFloat(d);

        // mensal para anual 
        b = b*12;

        //rentabilidade
        c = ((1) + (c/100));

        a = (a)*(c**(d))  

        if (d == 1) {
        
        // rentabilidade do capital inicial
        a = (a+b)*(c**(d))  
        console.log(a);
        } else { */
            /* a = (a)*(c**(d))  */

            /* for (var i = 0; i < d; i++) {
                console.log(`${i} vez`);
                a = a + (b*c**(i+1))
                console.log(a);
                
            }
            console.log("acabou");
        }
        
        let valor = a
        return valor;
} */