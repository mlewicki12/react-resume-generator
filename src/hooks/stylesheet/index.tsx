
import { useEffect } from 'react';

const useStylesheet = (url: string) => {
  useEffect(() => {
    var head = document.head;
    var link =  document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return () => { head.removeChild(link); }
  }, [url]);
}

export default useStylesheet;