import React, { FunctionComponent, ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
}

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
  return (
    <div className="container flex justify-center items-center">{children}</div>
  );
};

export default Layout;
