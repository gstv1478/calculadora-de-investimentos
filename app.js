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
    const r = "R$" + resul.toLocaleString('pt-BR');
    console.log(r);
    span.textContent = `${r}`;
});

function calculadora(a, b, c, d) {
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
        } else {
            /* a = (a)*(c**(d))  */

            for (var i = 0; i < d; i++) {
                console.log(`${i} vez`);
                a = a + (b*c**(i+1))
                console.log(a);
                
            }
            console.log("acabou");
        }
        
        let valor = a
        return valor;
}