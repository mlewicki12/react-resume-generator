
import { liquidEngine } from 'react-liquid';

liquidEngine.registerFilter('array', (item: string | string[]) => {
  if(Array.isArray(item)) {
    console.log(`${item} is array!`);
    return true;
  }

  return false;
});
