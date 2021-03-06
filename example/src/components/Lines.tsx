import React, { Fragment, FC } from 'react';

const Lines: FC<{lines: string[]}> = ({ lines }) => (
  <Fragment>
    {lines && lines.map((f, index) => <p key={index || 0}>{f}</p>)}
  </Fragment>
);

export default Lines;
