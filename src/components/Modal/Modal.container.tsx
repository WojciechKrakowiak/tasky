import { connect } from 'react-redux';
import { IStore } from 'app/types';
import Modal from './Modal';
import { updateTask } from 'app/actions';
import { Node } from 'slate';

const getTaskData = (state: IStore, ownProps: any) => {
  const { id } = ownProps;
  let cardIndex = 0;
  let taskIndex = 0;
  let isTaskFound = false;

  for (; cardIndex < state.tasks.length && !isTaskFound; cardIndex++) {
    const { items } = state.tasks[cardIndex];
    for (taskIndex = 0; taskIndex < items.length; taskIndex++) {
      if (items[taskIndex].id === id) {
        isTaskFound = true;
        break;
      }
    }

    if (isTaskFound) {
      break;
    }
  }

  const task = state.tasks[cardIndex].items[taskIndex];

  return {
    id,
    cardTitle: state.tasks[cardIndex].title,
    title: task.title,
    content: task.content,
  };
};

const mapStateToProps = (state: IStore, ownProps: any) => ({
  task: getTaskData(state, ownProps),
});

const mapDispatchToProps = (dispatch: any) => ({
  updateTask: (taskId: string, content: Node[]) => dispatch(updateTask(taskId, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
