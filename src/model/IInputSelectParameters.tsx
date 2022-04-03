import { IQuestion, IQuestionOptions } from './Questions';
import { ISelectCombo } from './SelectCombo';

export interface IInputSelectParameters {
  optionsItem: ISelectCombo[];
  labelName: string;
  handleFunction: (value: string) => void;
}

export interface ICardParameters {
  cardTitle: string;
  cardDescription: string;
  cardSubHeader: string;
  question: IQuestion;
  handleFunction: (value: IQuestion) => void;
}
