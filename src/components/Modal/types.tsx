import { ITask } from 'app/types';
import { Node } from 'slate';

export interface IProps {
  HeaderIcon: string;
  updateTask: (taskId: string, content: Node[]) => void;
  task: {
    id: string;
    cardTitle: string;
    title: string;
    content: Node[];
  };
}
