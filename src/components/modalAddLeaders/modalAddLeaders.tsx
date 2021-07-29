import React from 'react';
import './modalAddLeaders.scss';

const ModalAddLeaders = () => {
	return (
		<div className="wrapper-modal">
			<div className="modal">
				<div className="modal__close">x</div>
				<form name="form" className="modal__form">
					<h1 className="modal__form__text">Add user score</h1>
					<input className="modal__form__input" name="name" />
					<input className="modal__form__input" name="score" />
					<div className="modal__form__button">Save</div>
				</form>
			</div>
		</div>
	);
};

export default ModalAddLeaders;
