

export default function Buttom (props) {
    return(
        <button onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
    )
}