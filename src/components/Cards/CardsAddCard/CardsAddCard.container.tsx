import { connect } from 'react-redux';
import { addCard } from 'app/actions';
import CardsAddCard from './CardsAddCard';

const mapDispatchToProps = (dispatch: any) => ({
  addCard: () => dispatch(addCard()),
});

export default connect(null, mapDispatchToProps)(CardsAddCard);
