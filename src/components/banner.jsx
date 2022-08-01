import React from 'react';

const Banner = ({ text, isAlert }) => (
  <>
    {text && (
      <P className={`banner ${isAlert ? 'banner-red' : 'banner-green'}`}>
        {text}
      </P>
    )}
  </>
);

export default Banner;
