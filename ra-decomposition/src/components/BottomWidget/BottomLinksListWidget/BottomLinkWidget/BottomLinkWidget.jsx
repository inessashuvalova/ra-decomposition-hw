import './BottomLinkWidget.css'

export default function BottomLinkWidget(props) {
    return (
        <li className="BottomLinkWidget"
            style={props.icon ? { backgroundImage: `url(${props.icon})` } : null}>
            <a className="BottomLinkWidget-Link" href={props.href}>
                {props.time ? <span className="BottomLinkWidget-Time">{props.time}</span> : null}
                {props.mainTitle ? <span className="BottomLinkWidget-MainTitle">{`${props.mainTitle} ― `}</span> : null}
                <span className="BottomLinkWidget-Text">{props.text}</span>
                {props.additionalText ? <span className="BottomLinkWidget-AdditionalText">{props.additionalText}</span> : null}
            </a>
        </li>
    )
}

BottomLinkWidget.defaultProps = {
    icon: null,
    time: null,
    mainTitle: null,
    additionalText: null
}