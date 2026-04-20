let numeros = [];

function adicionar() {
    let input = document.getElementById("numero");
    let valor = Number(input.value);

    // 1. Validação de campo vazio
    if (input.value === "") {
        alert("Digite um número!");
        return;
    }

    // 2. VERIFICAÇÃO DE REPETIÇÃO
    // O método .includes(valor) retorna true se o número já estiver na lista
    if (numeros.includes(valor)) {
        alert("Este número já foi adicionado! Tente outro.");
        input.value = ""; // Limpa o campo
        input.focus();    // Devolve o foco
        return;           // Interrompe a função para não adicionar
    }

    // Se passou pelas validações acima, adiciona o número
    numeros.push(valor);

    // Atualiza a interface
    document.getElementById("lista").innerHTML =
        "Números: " + numeros.join(", ");

    input.value = "";
    input.focus();
}

function limpar() {
    if (confirm("Tem certeza que deseja limpar a lista?")) {
        numeros = [];

        document.getElementById("lista").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    }
}

function analisar() {
    if (numeros.length === 0) {
        alert("Adicione números primeiro!");
        return;
    }

    let soma = 0;
    let pares = 0;
    let impares = 0;
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];

        soma += num;

        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }

    document.getElementById("resultado").innerHTML = `
        Total de números: ${numeros.length} <br>
        Soma: ${soma} <br>
        Pares: ${pares} <br>
        Ímpares: ${impares} <br>
        Maior: ${maior} <br>
        Menor: ${menor}
    `;
}