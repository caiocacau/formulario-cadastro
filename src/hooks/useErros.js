import { useState } from "react";

function useErros(validacoes) {

    const estadoInicial = criarEstadoInicial(validacoes);

    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(event) {
        const {name, value} = event.target;
        const novoEstado = { ...erros };
        // Dessa forma, ele cria um atributo com esse nome se não tiver ou sobrescreve ele
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function formularioContemErros() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return true;
            }
        }
        return false;
    }

    return [erros, validarCampos, formularioContemErros];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" }
    }
    return estadoInicial;
}

export default useErros;