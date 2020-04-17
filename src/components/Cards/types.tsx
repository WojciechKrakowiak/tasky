import { ICard, ITask } from 'app/types';
import { Node } from 'slate';

export interface IProps {
  cardsData: ICard[];
  moveItem(
    taskId: string,
    source: { cardId: string; index: number },
    destination: { cardId: string; index: number },
  ): void;
  moveCard(cardId: string, sourceIndex: number, destinationIndex: number): void;
}

export interface IState {
  isItemDragging: boolean;
  draggingItem: {
    id: string;
    title: string;
    content: string;
  };
  draggingItemPosition: {
    x: number;
    y: number;
  };
}
