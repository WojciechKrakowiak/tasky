import { connect } from 'react-redux';
import { IStore } from 'app/types';
import Card from './Card';

const mapStateToProps = (store: IStore, ownProps: any) => {
  let cardIndex = 0;
  for (cardIndex; cardIndex < store.tasks.length; cardIndex++) {
    if (store.tasks[cardIndex].id === ownProps.id) break;
  }
  return {
    items: store.tasks[cardIndex].items,
  };
};

export default connect(mapStateToProps)(Card);
