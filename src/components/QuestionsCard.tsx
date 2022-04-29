import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ICardParameters } from '../model/IInputSelectParameters';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function QuestionsCard({
  cardTitle = 'Card Title',
  cardSubHeader = 'Card Subheader',
  cardDescription = 'Description Card',
  question = null,
  handleFunction,
}: ICardParameters) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickButton = () => {
    if (handleFunction) {
      handleFunction(question);
    }
  };
  return (
    <div style={{ minWidth: '400px' }}>
      <Card className={classes.root}>
        <CardHeader title={cardTitle} subheader={cardSubHeader} />
        <CardContent style={{ minHeight: '100px' }}>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" color="primary" onClick={handleClickButton}>
            Selecionar questão
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {question.optionChoices.map((option, index) => {
              const styleCorrectOption = option.isAnswer
                ? { backgroundColor: 'green' }
                : {};
              return (
                <Typography
                  paragraph
                  key={option.id}
                  style={styleCorrectOption}
                >
                  {`(${index + 1}) ${option.description}`}
                </Typography>
              );
            })}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
