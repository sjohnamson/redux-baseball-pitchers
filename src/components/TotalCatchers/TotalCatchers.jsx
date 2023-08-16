import { useSelector, useDispatch } from 'react-redux';

export default function TotalCatchers() {
    const catcherList = useSelector(store => store.catcherList);
    return <div>Total Catchers: {catcherList.length}</div>
}