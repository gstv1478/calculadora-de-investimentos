const form = document.querySelector("#form");
const aporteInicial= document.querySelector("#aporteInicial");
const aporteMensal=document.querySelector("#aporteMensal");
const anos= document.querySelector("#anos");
const btn = document.querySelector("#btn");
const span = document.querySelector("#span");
const media = document.querySelector("#media");



form.addEventListener("submit", function() {
    event.preventDefault();
    const resul = calculadora(aporteInicial.value, aporteMensal.value, media.value, anos.value);
    console.log(resul);
    const r = "R$" + resul.toFixed(2).replace(".", ",");
    span.textContent = `${r}`;
});

function calculadora(a, b, c, d) {
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        d = parseInt(d);

        

        // mensal para anual 
        b = b*12;
        //rentabilidade
        c = ((1) + (c/100));
        // rentabilidade do capital inicial
        a = (a)*(c^(d))  

        let valor = a + b + c + d;
        return valor;
}