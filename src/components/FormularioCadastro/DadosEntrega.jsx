import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ enviarDadosForm }) {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                enviarDadosForm({ cep, logradouro, numero, estado, cidade })
            }}>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin='dense'
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
            />
            <TextField
                id="logradouro"
                label="Logradouro"
                type="text"
                variant="outlined"
                margin='dense'
                fullWidth
                value={logradouro}
                onChange={(event) => {
                    setLogradouro(event.target.value)
                }}
            />
            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin='dense'
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
            />
            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin='dense'
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
            />
            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin='dense'
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar cadastro</Button>
        </form>
    );

}

export default DadosEntrega;