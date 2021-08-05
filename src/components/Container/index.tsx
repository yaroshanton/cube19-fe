import React, { ReactNode } from 'react';

import './Container.scss';

interface IProps {
	children: ReactNode;
}

const Container = ({ children }: IProps) => <div className="container">{children}</div>;

export default Container;
