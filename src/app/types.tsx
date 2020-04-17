import { Node } from 'slate';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const MOVE_TASK = 'MOVE_TASK';

export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const MOVE_CARD = 'MOVE_CARD';

export interface ITask {
  id: string;
  title: string;
  content: Node[];
  isDragging: boolean;
}

export interface ICard {
  id: string;
  title: string;
  items: ITask[];
}

export interface IStore {
  tasks: ICard[];
  isTaskDragging: boolean;
  draggingTaskId: string;
}

interface IAddTaskAction {
  type: typeof ADD_TASK;
  task: ITask;
  cardId: string;
}

interface IUpdateTaskAction {
  type: typeof UPDATE_TASK;
  taskId: string;
  content: Node[];
}

interface IMoveTaskAction {
  type: typeof MOVE_TASK;
  taskId: string;
  source: { cardId: string; index: number };
  destination: { cardId: string; index: number };
}

interface IAddCardAction {
  type: typeof ADD_CARD;
}

interface IUpdateCardAction {
  type: typeof UPDATE_CARD;
  title: string;
  cardId: string;
}

interface IMoveCardAction {
  type: typeof MOVE_CARD;
  cardId: string;
  sourceIndex: number;
  destinationIndex: number;
}

export type TasksActionTypes =
  | IAddTaskAction
  | IUpdateTaskAction
  | IAddCardAction
  | IUpdateCardAction
  | IMoveTaskAction
  | IMoveCardAction;
