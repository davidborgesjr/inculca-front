import React, { useEffect } from 'react';
import { useState } from 'react';
import InputSelect from '../components/InputSelect';
import Loading from '../components/Loading';
import QuestionsCard from '../components/QuestionsCard';
import { IPayload, IQuestion, IQuestionOptions } from '../model/Questions';
import { ISelectCombo } from '../model/SelectCombo';
import { getQuestions } from '../services/apiService';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ComplementaryActivityPage from './ComplementaryActivityPage';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

export default function ActivitiesPage() {
  const date = new Date();

  //"2017-05-24"

  const getFullZeros = (value: number) => {
    return value > 10 ? value : '0' + value;
  };

  const getDateLabel = () => {
    const test = `${date.getFullYear()}-${getFullZeros(
      date.getMonth()
    )}-${getFullZeros(date.getDate())}`;
    console.log(test);
    return test;
  };
  const inputListSubjects: ISelectCombo[] = [
    { id: '516df9cd-0102-42b8-81db-cdb9b3af6ae7', description: 'Matemática' },
  ];

  const inputListTematicUnits: ISelectCombo[] = [
    {
      id: '86879cf7-d0ec-41b9-b034-1366681cb418',
      description: 'Números',
    },
    {
      id: '2f506ac8-4a1b-4690-9ee6-52d10ef8c083',
      description: 'Álgebra',
    },
    {
      id: '9c5ba3f0-0a62-4b55-8ad4-8a7a1dc2d020',
      description: 'Geometria',
    },
    {
      id: 'f649caac-40ea-4f80-a8f1-7ebdc0c15852',
      description: 'Grandezas e Medidas',
    },
  ];

  const [payload, setPayload] = useState<IPayload>();
  const [selectedCard, setSelectedCard] = useState<IQuestion>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showQuestions, setShowQuestions] = useState(false);

  const [subject, setSubject] = useState<ISelectCombo>();
  const [tematicUnit, setTematicUnit] = useState<ISelectCombo>();

  useEffect(() => {
    async function getAllQuestions() {
      try {
        const payload = await getQuestions();
        setPayload(payload);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(error.message);
      }
    }
    if (subject && tematicUnit) {
      setShowQuestions(true);
      getAllQuestions();
    } else {
      setShowQuestions(false);
    }
  }, [subject, tematicUnit]);

  const handleChangeInputListSubjects = (selectedItem: string) => {
    const item = inputListSubjects.filter(item => item.id === selectedItem)[0];
    setSubject(item);
  };

  const handleChangeInputListTematicUnits = (selectedItem: string) => {
    const item = inputListTematicUnits.filter(
      item => item.id === selectedItem
    )[0];
    setTematicUnit(item);
  };

  const handleClickCard = (selectedCard: IQuestion) => {
    setSelectedCard(selectedCard);
  };

  const handleClickButton = () => {
    console.log('próxima atividade');
  };

  let questionsCardTsx;
  if (showQuestions) {
    questionsCardTsx = (
      <div className="flex justify-center my-4">
        <Loading />
      </div>
    );
    if (!loading) {
      questionsCardTsx = (
        <div style={{ display: 'inline-flex', gap: '5%' }}>
          {payload.questions.map(question => {
            return (
              <QuestionsCard
                cardTitle={payload.subject.description}
                cardSubHeader={payload.unidadeTematica.description}
                cardDescription={question.description}
                handleFunction={handleClickCard}
                question={question}
                key={question.id}
              ></QuestionsCard>
            );
          })}
        </div>
      );
    }
  }

  const otherFields = () => {
    if (selectedCard) {
      return (
        <div style={{ display: 'grid', gap: '25px', marginTop: '25px' }}>
          <TextField
            id="date-disponibilizacao"
            label="Data de disponibilização"
            type="date"
            // defaultValue="2017-05-24"
            defaultValue={getDateLabel()}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="date-entrega"
            label="Data de entrega"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Quantidade de tentativas"
            placeholder="2"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Objetivo da atividade"
            multiline
            placeholder="Descreva o objetivo da atividade de forma simples"
            rows={4}
            defaultValue=""
          />
          <ComplementaryActivityPage></ComplementaryActivityPage>
        </div>
      );
    }
  };

  return (
    <>
      <div style={{ display: 'grid' }}>
        <h1>Enviar atividade</h1>
        <InputSelect
          optionsItem={inputListSubjects}
          labelName="Disciplina"
          handleFunction={handleChangeInputListSubjects}
        />
        <InputSelect
          optionsItem={inputListTematicUnits}
          labelName="Unidades Temáticas"
          handleFunction={handleChangeInputListTematicUnits}
        />
        {questionsCardTsx}
        {otherFields()}
      </div>
    </>
  );
}

// const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

// const handleDateChange = (date: Date | null) => {
//   setSelectedDate(date);
// };
/* 
{
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> 
}

*/
