
import { liquidEngine } from 'react-liquid';

const registerFilters = () => {
  console.log('registering liquid filters');

  // not great and needs futher implementation,
  // but this will do for now
  liquidEngine.registerFilter('type', (item: string | string[]) => {
    if(Array.isArray(item)) {
      return 'array';
    }

    return 'string';
  });

}

export default registerFilters;