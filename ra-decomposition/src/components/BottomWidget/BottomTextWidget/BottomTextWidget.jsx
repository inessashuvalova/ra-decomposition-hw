import PropTypes from 'prop-types'

export default function BottomTextWidget(props) {
    return <div className="BottomTextWidget">{props.text}</div>
}

BottomTextWidget.propTypes = {
    text: PropTypes.string.isRequired
}