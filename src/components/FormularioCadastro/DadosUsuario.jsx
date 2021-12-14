import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({ enviarDadosForm, validacoes }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({
        senha: {
            valido: true,
            texto: ""
        }
    });

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

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!formularioContemErros()) {
                    enviarDadosForm({ email, senha })
                }
            }}>
            <TextField
                id="email"
                label="E-mail"
                type="email"
                required
                variant="outlined"
                fullWidth
                margin='dense'
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                required
                variant="outlined"
                fullWidth
                margin='dense'
                name="senha"
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
            />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );

}

export default DadosUsuario;