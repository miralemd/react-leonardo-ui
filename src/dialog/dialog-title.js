import React from 'react';
import { luiClassName } from '../util';

const DialogTitle = ({ className, children, ...extraProps }) => {
  const finalClassName = luiClassName('dialog__title', { className });
  return (
    <div className={finalClassName} {...extraProps}>
      {children}
    </div>
  );
};

export default DialogTitle;
