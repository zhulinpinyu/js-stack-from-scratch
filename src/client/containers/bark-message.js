import { connect } from 'react-redux'
import Message from '../components/message'

const mapStateToProps = state => ({
  message: state.dog.get('hasBarked') ? 'Dog has barked!' : 'Dog not bark'
})

export default connect(mapStateToProps)(Message)
