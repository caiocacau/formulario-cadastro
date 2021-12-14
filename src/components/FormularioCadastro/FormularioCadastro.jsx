import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ enviarDadosForm, validacoes }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            enviarDadosForm(dadosColetados);
        }
    })

    // Criando um Array para tornar o código mais legível
    const formularios = [
        <DadosUsuario enviarDadosForm={coletarDados} validacoes={validacoes} />,
        <DadosPessoais enviarDadosForm={coletarDados} validacoes={validacoes} />,
        <DadosEntrega enviarDadosForm={coletarDados} validacoes={validacoes} />,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximaEtapa();
    }

    function proximaEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <Fragment>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Dados Usuário</StepLabel></Step>
                <Step><StepLabel>Dados Pessoais</StepLabel></Step>
                <Step><StepLabel>Dados Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Fragment>
    );
}

export default FormularioCadastro;