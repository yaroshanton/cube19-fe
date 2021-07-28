import React from 'react';
import './modalAddLeaders.scss';

const ModalAddLeaders = () => {
	return (
		<div className="wrapper-modal-add">
			<div className="wrapper-modal-add__close">x</div>
			<p>Add user score</p>
			<input />
			<input />
			<button type="submit">Save</button>
		</div>
	);
};

export default ModalAddLeaders;
