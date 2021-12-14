import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ enviarDadosForm }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, formularioContemErros] = useErros(validacoes);

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