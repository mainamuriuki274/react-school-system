import PropTypes from 'prop-types';


const Button = (props) => {
    return (
        <button 
        style = {{ backgroundColor: props.color, float: 'right' }}
        className = 'btn'
        onClick = { props.onClick }
        >{props.title} {props.icon}</button>
    )
}
Button.defaultProps = {
    color:  "blue"
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}
export default Button
