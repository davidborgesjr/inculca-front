export interface IQuestion {
  id: string;
  description: string;
  optionChoices: IQuestionOptions[];
}

export interface IQuestionOptions {
  id: string;
  description: string;
  isAnswer: boolean;
}

export interface IGenericDescription {
  id: string;
  description: string;
}

export interface IPayload {
  questions: IQuestion[];
  unidadeTematica: IGenericDescription;
  subject: IGenericDescription;
}
