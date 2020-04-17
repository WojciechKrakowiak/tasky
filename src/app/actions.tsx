import { Node } from 'slate';
import { ADD_TASK, MOVE_TASK, ADD_CARD, UPDATE_CARD, MOVE_CARD, UPDATE_TASK } from './types';

export const addTask = (task: { title: string; content: string }, cardId: string) => ({
  type: ADD_TASK,
  task,
  cardId,
});

export const moveTask = (
  taskId: string,
  source: { cardId: string; index: number },
  destination: { cardId: string; index: number },
) => ({
  type: MOVE_TASK,
  taskId,
  source,
  destination,
});

export const updateTask = (taskId: string, content: Node[]) => ({
  type: UPDATE_TASK,
  taskId,
  content,
});

export const addCard = () => ({
  type: ADD_CARD,
});

export const updateCard = (title: string, cardId: string) => ({
  type: UPDATE_CARD,
  title,
  cardId,
});

export const moveCard = (cardId: string, sourceIndex: number, destinationIndex: number) => ({
  type: MOVE_CARD,
  cardId,
  sourceIndex,
  destinationIndex,
});
