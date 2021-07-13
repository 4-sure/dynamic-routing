

import {useState, useEffect} from 'react';
import {SidePanel} from './SidePanel';
import {MetricsView} from './MetricsView';
import {useHistory} from 'react-router-dom'

export function MainApp() {
  const [metric, setMetric] = useState(null);
  const history = useHistory();
  const setUrlContext = (d) => {
    setMetric(d);
    history.push(`/metrics/${d.category_title.toLowerCase()}`)
  };



  return (
    <div>
      <SidePanel setUrlContext={setUrlContext} />
      <MetricsView />
    </div>
  ); 
} // 