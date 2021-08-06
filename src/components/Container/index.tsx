<<<<<<< HEAD
import { ReactNode } from 'react';
=======
import React, { ReactNode } from 'react';

>>>>>>> create-logic-edit-leader
import './Container.scss';

interface IProps {
	children: ReactNode;
}

const Container = ({ children }: IProps) => <div className="container">{children}</div>;

export default Container;
