import Button from "./Button";
import {FaPlus, FaTimes} from 'react-icons/fa';

const Header = (props) => {
    return (
    <header>
        <h1>My School</h1>
        <Button title={props.showAddStudent ? 'Close'  : 'Add Student' } onClick = { props.showAddStudent ? props.onClose  : props.onAdd } color={props.showAddStudent ? 'black' : 'steelblue'} icon ={props.showAddStudent ?  <FaTimes style={{ color: 'white', paddingTop: '5px' }}/> : <FaPlus style={{ color: 'white', paddingTop: '5px'}}/>}   />
    
    </header>
    )
}

export default Header
