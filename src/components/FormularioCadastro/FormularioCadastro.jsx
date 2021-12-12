import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin='dense' />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin='dense' />

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin='dense' />

            <FormControlLabel
                control={
                    <Switch
                        defaultChecked
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
                        defaultChecked
                        checked={state.novidades}
                        onChange={handleChange}
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />
            
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );

}

export default FormularioCadastro;