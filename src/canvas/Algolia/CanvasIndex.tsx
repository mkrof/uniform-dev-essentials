import React from 'react';
import { Index } from 'react-instantsearch-hooks-web';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-react';
import { getDefaultIndexName } from '../../context/CanvasAlgoliaProvider';
import ErrorPropertyCallout from '@/canvas/Algolia/ErrorPropertyCallout';

type CanvasIndexProps = {
  indexParams?: {
    indexProps?: {
      indexName?: string;
      indexId?: string;
    };
  };
};

const CanvasIndex = (componentProps: ComponentProps<CanvasIndexProps>) => {
  const { indexProps } = componentProps?.indexParams || {};
  const indexName = indexProps?.indexName || getDefaultIndexName();

  if (!indexName) {
    return <ErrorPropertyCallout title="Property 'indexName' was not defined for Index component." />;
  }

  return (
    <div className="index">
      <Index {...indexProps} indexName={indexName}>
        <UniformSlot name="widgets" />
      </Index>
    </div>
  );
};

export default CanvasIndex;
