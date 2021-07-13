
import {useParams} from 'react-router-dom';

export const MetricsView = ({ }) => {
const params = useParams();
console.log(params)
    return <>{params ? <div>{JSON.stringify(params)}</div> : null}</>;
};

// I can request access after I sign in xD