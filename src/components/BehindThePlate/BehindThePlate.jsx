import { useSelector } from "react-redux" 

export default function BehindThePlate() {    
    const currentCatcher = useSelector(store => store.currentCatcher);

    return <h2>Behind the Plate: {currentCatcher}</h2>
}