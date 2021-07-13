import { useEffect, useState } from 'react';
import {initialData} from '../data/initialData';
import {Loader} from './Loader';


export const SidePanel = ({ setUrlContext }) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    setTimeout(() => {
      setData(initialData)
    }, 2000);
  }, []);


    return (
      <div>
        {data ? data.map((d, i) => (
          <button onClick={() => setUrlContext(d)} key={i}>
            {d.category_title}
          </button>
        )) : <Loader />}
      </div>
    );
  };