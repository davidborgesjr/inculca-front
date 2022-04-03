import { IPayload } from '../model/Questions';
import { getAllData } from './httpService';

export async function getQuestions(): Promise<IPayload> {
  return await getAllData('/multipleChoiceQuestions');
}
