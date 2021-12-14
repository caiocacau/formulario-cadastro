function validarCpf(cpf) {
  if (cpf === '') {
    return { valido: true, texto: "" }
  }

  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" }
  } else {
    return { valido: true, texto: "" }
  }
}

function validarNome(nome) {
  if (nome === "") {
    return { valido: true, texto: "" }
  }

  if (nome.length < 4 || nome.length > 60) {
    return { valido: false, texto: "Nome deve ter entre 4 e 60 dígitos" }
  } else {
    return { valido: true, texto: "" }
  }
}

function validarSenha(senha) {
  if (senha === "") {
    return { valido: true, texto: "" }
  }

  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos" }
  } else {
    return { valido: true, texto: "" }
  }
}

export {validarCpf, validarNome, validarSenha}