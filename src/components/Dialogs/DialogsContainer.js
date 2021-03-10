
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage
});


export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs);
