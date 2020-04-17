import produce from 'immer';
import { ADD_TASK, MOVE_TASK, ADD_CARD, UPDATE_CARD, MOVE_CARD, IStore, TasksActionTypes, UPDATE_TASK } from './types';
import initialState from './initialState';

const getCardIndexById = (state: IStore, cardId: string): number => {
  let cardIndex = 0;
  for (cardIndex; cardIndex < state.tasks.length; cardIndex++) {
    if (state.tasks[cardIndex].id === cardId) break;
  }
  return cardIndex;
};

const getTaskIndexById = (state: IStore, taskId: string): [number, number] => {
  let cardIndex = 0;
  let taskIndex = 0;
  for (cardIndex; cardIndex < state.tasks.length; cardIndex++) {
    for (taskIndex; taskIndex < state.tasks[cardIndex].items.length; taskIndex++) {
      if (state.tasks[cardIndex].items[taskIndex].id === taskId) break;
    }
  }
  return [taskIndex, cardIndex];
};

export function tasksReducer(state = initialState, action: TasksActionTypes): IStore {
  switch (action.type) {
    case ADD_TASK: {
      const cardIndex = getCardIndexById(state, action.cardId);

      const nextState = produce(state, (draftState) => {
        draftState.tasks[cardIndex].items.push({
          id: `t${new Date().getTime()}`,
          title: action.task.title,
          content: action.task.content,
          isDragging: false,
        });
      });
      return nextState;
    }

    case UPDATE_TASK: {
      const { taskId, content } = action;
      const [taskIndex, cardIndex] = getTaskIndexById(state, taskId);

      const nextState = produce(state, (draftState) => {
        draftState.tasks[cardIndex].items[taskIndex].content = content;
      });
      return nextState;
    }

    case MOVE_TASK: {
      const { source, destination, taskId } = action;
      const sourceCardIndex = getCardIndexById(state, source.cardId);
      const taskToMove = state.tasks[sourceCardIndex].items[source.index];

      if (taskToMove.id !== taskId) return state;

      const destinationCardIndex = getCardIndexById(state, destination.cardId);
      const destinationCardTasks = state.tasks[destinationCardIndex].items;
      const nextState = produce(state, (draftState) => {
        if (source.cardId === destination.cardId) {
          if (source.index > destination.index) {
            draftState.tasks[destinationCardIndex].items = [
              ...destinationCardTasks.slice(0, destination.index),
              taskToMove,
              ...destinationCardTasks.slice(destination.index, destinationCardTasks.length),
            ];
            draftState.tasks[sourceCardIndex].items.splice(source.index + 1, 1);
          } else {
            draftState.tasks[destinationCardIndex].items = [
              ...destinationCardTasks.slice(0, destination.index + 1),
              taskToMove,
              ...destinationCardTasks.slice(destination.index + 1, destinationCardTasks.length),
            ];
            draftState.tasks[sourceCardIndex].items.splice(source.index, 1);
          }
        } else {
          draftState.tasks[destinationCardIndex].items = [
            ...destinationCardTasks.slice(0, destination.index),
            taskToMove,
            ...destinationCardTasks.slice(destination.index, destinationCardTasks.length),
          ];
          draftState.tasks[sourceCardIndex].items.splice(source.index, 1);
        }
        // draftState.tasks[sourceCardIndex].items.splice(source.index, 1);
        // draftState.tasks[destinationCardIndex].items = [destinationCardTasks]
      });
      return nextState;
    }

    case ADD_CARD: {
      const nextState = produce(state, (draftState) => {
        draftState.tasks.push({
          id: `c${new Date().getTime()}`,
          title: '',
          items: [],
        });
      });
      return nextState;
    }

    case UPDATE_CARD: {
      const cardIndex = getCardIndexById(state, action.cardId);

      const nextState = produce(state, (draftState) => {
        draftState.tasks[cardIndex].title = action.title;
      });
      return nextState;
    }

    case MOVE_CARD: {
      const { sourceIndex, destinationIndex, cardId } = action;
      const cards = state.tasks;
      const cardToMove = cards[sourceIndex];

      if (cardToMove.id !== cardId) return state;

      const nextState = produce(state, (draftState) => {
        if (sourceIndex > destinationIndex) {
          draftState.tasks = [
            ...cards.slice(0, destinationIndex),
            cardToMove,
            ...cards.slice(destinationIndex, cards.length),
          ];
          draftState.tasks.splice(sourceIndex + 1, 1);
        } else {
          draftState.tasks = [
            ...cards.slice(0, destinationIndex + 1),
            cardToMove,
            ...cards.slice(destinationIndex + 1, cards.length),
          ];
          draftState.tasks.splice(sourceIndex, 1);
        }
      });
      return nextState;
    }

    default:
      return state;
  }
}
