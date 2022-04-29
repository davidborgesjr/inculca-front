import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import InputSelect from '../components/InputSelect';
import { ISelectCombo } from '../model/SelectCombo';

export default function ComplementaryActivityPage() {
  const recursosComplementares = [
    {
      id: 'd21017c9-e8b1-4040-b710-b64e770d8be6',
      description: 'Links externos',
    },
    {
      id: '419d8f5b-dec5-43c4-b563-0f4c0809dc12',
      description: 'Imagens',
    },
  ];

  const [recursoComp, setRecursoComp] = useState<ISelectCombo>();

  const handleChangeInputRecursoComp = (selectedItem: string) => {
    const item = recursosComplementares.filter(
      item => item.id === selectedItem
    )[0];
    setRecursoComp(item);
  };

  const getDescricaoRecurso = () => {
    return (
      <TextField
        id="outlined-textarea"
        label="Como o recurso ajuda os pais?"
        placeholder="Digite uma breve descrição sobre como o link ajuda os pais"
        multiline
      />
    );
  };

  const recursoSelecionado = () => {
    if (recursoComp) {
      if (recursoComp.id === 'd21017c9-e8b1-4040-b710-b64e770d8be6') {
        return (
          <>
            <TextField
              id="outlined-textarea"
              label="Link externo"
              placeholder="Cole o link do site aqui"
              multiline
            />
            {getDescricaoRecurso()}
          </>
        );
      } else {
        return (
          <>
            <Button variant="contained" component="label">
              Enviar Imagem
              <input type="file" hidden />
            </Button>
            {getDescricaoRecurso()}
          </>
        );
      }
    }
  };

  return (
    <>
      <InputSelect
        optionsItem={recursosComplementares}
        labelName="Unidades Temáticas"
        handleFunction={handleChangeInputRecursoComp}
      />
      {recursoSelecionado()}
      <Button color="primary">Enviar Questão</Button>
    </>
  );
}
