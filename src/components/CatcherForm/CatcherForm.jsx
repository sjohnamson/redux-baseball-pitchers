import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function CatcherForm() {

    const [newCatcher, setNewCatcher] = useState('');
    const dispatch = useDispatch();

    const handleCatcherNameChange = event => {
        setNewCatcher(event.target.value);
      };
    
      // add new catcher to array. this will move to the catcher reducer!
      const handleCatcherSubmit = event => {
        event.preventDefault();
        // spread: give me everything in catcherList, then add this new thing
        dispatch({
          type: 'ADD_CATCHER',
          payload: newCatcher
        })
        setNewCatcher('');
      };

    return (
        <form onSubmit={handleCatcherSubmit}>
            <input
                type="text"
                value={newCatcher}
                onChange={handleCatcherNameChange}
                placeholder="New Catcher Name" />
            <button type="submit">Add Catcher</button>
        </form>
    )
}