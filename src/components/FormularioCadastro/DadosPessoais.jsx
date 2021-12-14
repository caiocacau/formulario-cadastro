import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ enviarDadosForm, validacoes }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    //    const [promocoes, setPromocoes] = useState(true);
    //    const [novidades, setNovidades] = useState(false);

    const [state, setState] = React.useState({
        promocoes: true,
        novidades: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [erros, setErros] = useState({
        cpf: {
            valido: true,
            texto: ""
        },
        nome: {
            valido: true,
            texto: ""
        }
    });

    function validarCampos(event) {
        const { name, value } = event.target;
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

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!formularioContemErros()) {
                    enviarDadosForm({ nome, sobrenome, cpf, state })
                }
            }}>
            <TextField
                id="nome"
                label="Nome"
                type="text"
                required
                variant="outlined"
                margin='dense'
                fullWidth
                name="nome"
                value={nome}
                onChange={(event) => {
                    // Implementando regra para receber aceitar somente 3 posições no nome
                    //                    let tmpNome = event.target.value;
                    //                  if (tmpNome.length >= 3) {
                    //                    tmpNome = tmpNome.substr(0, 3);
                    //                  }
                    //                  setNome(tmpNome);
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
            />
            <TextField
                id="sobrenome"
                label="Sobrenome"
                type="text"
                required
                variant="outlined"
                margin='dense'
                name="sobrenome"
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                fullWidth
            />
            <TextField
                id="cpf"
                label="CPF"
                type="number"
                required
                variant="outlined"
                fullWidth
                margin='dense'
                name="cpf"
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={state.promocoes}
                        onChange={handleChange}
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={state.novidades}
                        onChange={handleChange}
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form >
    );

}

export default DadosPessoais;