import { useSelector, useDispatch } from 'react-redux';

export default function () {
    const pitcherList = useSelector(store => store.pitcherList);
    return<div>Total Pitchers: {pitcherList.length}</div>
}