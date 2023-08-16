
import { useSelector, useDispatch } from 'react-redux';

export default function PitcherList() {
    const dispatch = useDispatch();
    const pitcherList = useSelector(store => store.pitcherList);

    return (
        <ul>
            {pitcherList.map((pitcher, i) => (
                <li key={i}
                    onClick={() => dispatch({ type: 'MAKE_CURR_PITCHER', payload: pitcher })}
                >
                    {pitcher}
                </li>
            ))}
        </ul>
    )
}