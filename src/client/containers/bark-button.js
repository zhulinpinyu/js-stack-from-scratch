import { connect } from 'react-redux'
import Button from '../components/button'
import { makeBark } from '../actions/dog-actions'

const mapDispactchToProps = dispactch => ({
  action: () => { dispactch(makeBark()) },
  actionLabel: 'Bark'
})

export default connect(null, mapDispactchToProps)(Button)
