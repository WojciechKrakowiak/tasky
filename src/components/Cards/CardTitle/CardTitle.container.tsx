import { connect } from 'react-redux';
import { updateCard } from 'app/actions';
import CardTitle from './CardTitle';

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  updateCard: (title: string) => dispatch(updateCard(title, ownProps.cardId)),
});

export default connect(null, mapDispatchToProps)(CardTitle);
