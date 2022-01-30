import { Box } from "@material-ui/core"

export default function Badge(props) {
    const style = {
        backgroundColor: props.color,
        color: '#fff',
        padding: '2px 5px',
        fontSize: '10px'
    }

    return (
        <span
            style={{...style}}
        >
            {props.text}
        </span>
    )
}