import React, { useState } from 'react'
import { useDispatch, connect} from 'react-redux'
import { changeLocation } from '../../app/locationSlice';
import Button from '@mui/material/Button';
import './location.css'
function Location(props) {
    let LocState = props.state
    let LocZip = props.zip
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const values = event.target;
        dispatch(changeLocation({ 
                state: values.state.value, 
                zip: values.zip.value  
            }
          ));
        toggleForm()

    };
    const [LocForm, setLocForm ] = useState(false)

    const toggleForm = () =>{
       LocForm ? setLocForm(false) : setLocForm(true)
     }  
    return (
    <div>
        {!LocForm && 
        <div>
            <span>Location (zip,state): {LocZip}, {LocState}  </span>
            <span className="location-change" onClick={() =>{
                    toggleForm()
                }}>change</span>
        </div>}
        {LocForm && 
        <form onSubmit={handleSubmit}>
                <label>
                    Zip:
                    <input type="text" name="zip"/>
                </label>
                <label>
                    State:
                    <input type="text" name="state"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        }
        
    </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        state: state.location.state, 
        zip: state.location.zip
    }
}

export default connect(mapStateToProps)(Location)
