export interface IProps {
  title: string;
  updateCard(title: string): void;
}

export interface IState {
  isEditActive: boolean;
  titleInputValue: string;
}
