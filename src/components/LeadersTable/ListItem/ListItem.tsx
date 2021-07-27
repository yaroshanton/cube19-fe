import React from 'react';
import './ListItem.scss';
import UserImage from './img/user.png';
import PencilImage from './img/pencil.png';

const ListItem = () => {
	return (
		<div className="list-item">
			<div className="list-item__place">1st</div>
			<img src={UserImage} alt="user" className="list-item__image" />

			<div className="list-item__score">420</div>
			<div className="list-item__name ">name</div>
			<div className="list-item__changes">No change</div>
			<img src={PencilImage} alt="pencil" className="list-item__edit cursor-pointer" />
		</div>
	);
};

export default ListItem;
