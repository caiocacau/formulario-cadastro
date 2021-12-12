import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource/roboto';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h1" component="h3">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
