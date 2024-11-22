/* eslint-disable */
import React from 'react';
import { Hits } from 'react-instantsearch-hooks-web';
import { ComponentInstance } from '@uniformdev/canvas';

enum HitTypes {
  Hit = 'algolia-hit',
}

export const renderHits = (component: ComponentInstance) => {
  const hitType = component?.slots?.hitComponent?.[0]?.type;
  switch (hitType) {
    case HitTypes.Hit:
      return <Hits hitComponent={Hit} />;
    default:
      return <Hits />;
  }
};

type HitComponent = {
  objectID: string;
  [name: string]: any;
};

const Hit = ({ hit }: { hit: HitComponent }) => {
  const { objectID = 'unknown', ...properties } = hit || {};
  const slug = properties.name
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x: any) => x.toLowerCase())
    .join("-");

  return (
    <div>
      <h3 className="font-bold uppercase text-1xl pb-6">{properties.name}</h3>
        <p style={{ 
            wordBreak: 'break-all', 
            lineClamp: 6, 
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap', 
            overflow: 'hidden' }} className="pb-6">{properties.description}</p>
      <a href={`products/${slug}`} role="button" className="btn rounded-none btn-primary">Read More</a>
    </div>
  );
};

export default Hit;
