
import { useSelector, useDispatch } from 'react-redux';

export default function CatcherList() {
    const dispatch = useDispatch();

    const catcherList = useSelector(store => store.catcherList);
    
    return (
        <ul>
            {catcherList.map((catcher, i) => (
                <li key={i}
                    onClick={() => dispatch({type: 'MAKE_CURR_CATCHER', payload: catcher})}
                >
                    {catcher}
                </li>
            ))}
        </ul>
    )
}