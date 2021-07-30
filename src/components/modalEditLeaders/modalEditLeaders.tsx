/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, FC } from 'react';
import '../modalAddLeaders/modalAddLeaders';
import { useDispatch } from 'react-redux';
import './modalEditLeaders.scss';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';

import { modalEditLeadersOpenAction } from '../../redux/modalEditLeaders/modalEditLeadersActions';
import { editLeadersAction } from '../../redux/leaders/leadersActions';

interface ModalProps {
	data: ILeader;
}

const ModalEditLeaders: FC<ModalProps> = ({ data }: ModalProps) => {
	const dispatch: any = useDispatch();
	const [editLeaders, seteditLeaders] = useState(data);
	const onToggleModal: any = () => dispatch(modalEditLeadersOpenAction());

	// Закрытие модалки по клику Backdrop
	const handleBackdropClick = (event: { currentTarget: any; target: any }): void => {
		if (event.currentTarget === event.target) {
			onToggleModal();
		}
	};

	// Закрытие модалки по Escape
	useEffect(() => {
		const handleKeyDown = (e: { code: string }) => {
			if (e.code === 'Escape') {
				onToggleModal();
				window.removeEventListener('keydown', handleKeyDown);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
	}, [onToggleModal]);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		seteditLeaders(state => ({
			...state,
			[e.target.name]: Number(e.target.value),
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (data.score !== editLeaders.score) {
			dispatch({ type: [editLeadersAction.type], payload: editLeaders });
			onToggleModal();
		} else {
			// eslint-disable-next-line no-alert
			alert('You made no change!');
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className="modal-backdrop" onClick={handleBackdropClick}>
			<div className="wrapper-modal" aria-hidden="true">
				<div className="modal">
					<div className="modal__close" role="button" onClick={onToggleModal}>
						x
					</div>
					<form name="form" className="modal__form" onSubmit={handleSubmit}>
						<h1 className="modal__form__text">Edit user score</h1>
						<input
							className="modal__form__input modal__form--name"
							name="name"
							placeholder={data.name}
							onChange={handleInput}
							readOnly
						/>
						<input
							className="modal__form__input "
							type="number"
							name="score"
							onChange={handleInput}
							placeholder="
              Score:"
						/>
						<button type="submit" className="modal__form__button">
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalEditLeaders;
