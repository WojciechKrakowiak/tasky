import { Node } from 'slate';

export interface IProps {
  id: string;
  key: string;
  index: number;
  title: string;
  content: Node[];
}

export interface IState {
  isHover: boolean;
  isEditing: boolean;
}
