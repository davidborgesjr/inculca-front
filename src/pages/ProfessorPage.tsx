import React from 'react';
import Button from '@material-ui/core/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';

export default function ProfessorPage() {
  return (
    <>
      <Card sx={{ maxWidth: 420 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <CalendarMonthIcon />
            Atividades
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Acompanhe as atividades lançadas, ou crie a sua própria atividade
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'block' }}>
          <Link to="/send-activity">
            <Button style={{ minWidth: '400px' }}>
              Criar atividade <AddCircleIcon />{' '}
            </Button>
          </Link>
          <Button style={{ minWidth: '400px' }}>
            Atividades abertas
            <LockOpenIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
