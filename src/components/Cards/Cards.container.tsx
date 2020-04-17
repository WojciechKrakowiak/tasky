import { connect } from 'react-redux';
import { IStore } from 'app/types';
import { moveTask, moveCard } from 'app/actions';
import Cards from './Cards';

const mapState = (state: IStore) => ({ cardsData: state.tasks });

const mapDispatch = (dispatch: any) => ({
  moveItem: (
    itemId: string,
    source: { cardId: string; index: number },
    destination: { cardId: string; index: number },
  ) => dispatch(moveTask(itemId, source, destination)),

  moveCard: (cardId: string, sourceIndex: number, destinationIndex: number) =>
    dispatch(moveCard(cardId, sourceIndex, destinationIndex)),
});

export default connect(mapState, mapDispatch)(Cards);
