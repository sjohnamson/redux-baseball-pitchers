import { useSelector} from 'react-redux';

export default function OnTheMound() {
    const currentPitcher = useSelector(store => store.currentPitcher);
    
    return <h2>On the Mound: {currentPitcher}</h2>
}