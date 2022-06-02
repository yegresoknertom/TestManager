import React, {useState} from 'react'; 
import './checkbox.css';

const Checkbox = (props) => {

    const [cheked, setChecked] = useState(false);
    const label = props.label;
    const toggleFilter = props.toggleFilter;

    const handleChange = () => {
        setChecked(!cheked);
        toggleFilter(label)
    }

    return (
        <label>
            <input type="checkbox" checked={cheked} onChange={handleChange} />
            {label}
        </label>
    )
}

export default Checkbox