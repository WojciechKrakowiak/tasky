import { connect } from 'react-redux';
import { addTask } from 'app/actions';
import CardAddItem from './CardAddItem';

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addItem: (title: string) => dispatch(addTask({ title, content: '' }, ownProps.cardId)),
});

export default connect(null, mapDispatchToProps)(CardAddItem);
