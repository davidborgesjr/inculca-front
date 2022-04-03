import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Route, Routes } from 'react-router-dom';
import ActivitiesPage from './ActivitiesPage';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ProfessorPage() {
  const classes = useStyles();
  return (
    <>
      <Link to={'/send-activity'}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Enviar Atividades
        </Button>
      </Link>
    </>
  );
}
