import dynamic from 'next/dynamic';
import * as React from 'react';
const DynamicHome = dynamic(() => import('./Home'), {
  ssr: false,
});
// eslint-disable-next-line react/display-name
export default () => {
  return <DynamicHome />;
};
