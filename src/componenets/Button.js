import PropTypes from 'prop-types';



const Button = ({ color, text, onClick }) => {
    // const onClick = (e) => {
    //     alert('Click!');
    // }


    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
}

Button.defaultProps = { // sets default values
    color: 'steelBlue'
}

Button.propTypes = { // throws error if given args arn't correct type
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button
