import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import '@fontsource/roboto';
import { Container, Typography } from '@material-ui/core';
import { validarCpf, validarNome, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/validacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCpf, nome: validarNome, senha: validarSenha }}>
          <FormularioCadastro enviarDadosForm={onSubmitFormularioCadastro} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmitFormularioCadastro(dados) {
  console.log(dados);
  //  console.log(dados.state.promocoes);
}

export default App;
