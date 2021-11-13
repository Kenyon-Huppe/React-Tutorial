// import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => { // destructures 
    const clicker = () => {
        alert('Click! ;)');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={clicker}></Button>
        </header>
    )
}

Header.defaultProps = { // sets props.title as this if nothing is passed in
    title: 'Task Tracker'
}

// CSS in JS
// const headingStyle = {  
//     color: '#fff',
//     backgroundColor: 'black'
// }

export default Header
