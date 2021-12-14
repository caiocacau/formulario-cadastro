export const validacoes = () => {
  function validarCpf (cpf) {
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
    if (nome.length < 4 || nome.length > 60) {
      return { valido: false, texto: "Nome deve ter entre 4 e 60 dígitos" }
    } else {
      return { valido: true, texto: "" }
    }
  }
  function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
      return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos" }
    } else {
      return { valido: true, texto: "" }
    }
  }

  function formularioContemErros(erros) {
      for (let campo in erros) {
          if (!erros[campo].valido) {
              return true;
          }
      }
      return false;
  }

  function validarCamposForm(event, erros) {
      const {name, value} = event.target;
      const novoEstado = { ...erros };
      // Dessa forma, ele cria um atributo com esse nome se não tiver ou sobrescreve ele
      novoEstado[name] = validacoes[name](value);
      
  //  setErros(novoEstado);
      return novoEstado;
  }

  return {
    cpf: validarCpf,
    nome: validarNome,
    senha: validarSenha,
    validarCampos: validarCamposForm,
    formularioContemErros: formularioContemErros
  }
}