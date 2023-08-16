import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CatcherList() {
    const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');
    const catcherList = useSelector(store => store.catcherList);
    return (
        <ul>
            {catcherList.map((catcher, i) => (
                <li key={i}
                    onClick={() => setCurrentCatcher(catcher)}
                >
                    {catcher}
                </li>
            ))}
        </ul>
    )
}