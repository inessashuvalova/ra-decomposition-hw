import PropTypes from 'prop-types'
import BottomLinkWidget from './BottomLinkWidget/BottomLinkWidget'
import shortid from 'shortid';
import './BottomLinksListWidget.css'

export default function BottomLinksListWidget(props) {
    const list = [];
    props.links.map(link => list.push(<BottomLinkWidget {...link} key={shortid.generate()} />))

    return (
        <ul className="BottomLinksListWidget">
            {list}
        </ul>
    )
}

BottomLinksListWidget.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            href: PropTypes.string.isRequired,
            time: PropTypes.string,
            mainTitle: PropTypes.string,
            text: PropTypes.string.isRequired,
            additionalText: PropTypes.string
        })
    )
}