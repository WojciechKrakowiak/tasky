export interface IProps {
  addItem(title: string): void;
  placeholder: string;
  cardId: string;
  buttonTitle: string;
}

export interface IState {
  isActive: boolean;
  itemTitle: string;
}
