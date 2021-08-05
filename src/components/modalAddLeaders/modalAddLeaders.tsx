/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './modalAddLeaders.scss';

import { createLeader } from '../../redux/leaders/leadersOperations';
import { modalAddLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import { IInitialLeader } from '../../redux/leaders/interfaces/leder.types';

const initFormik = { name: '', score: 0 };

const ModalAddLeaders: React.FC = () => {
	const dispatch = useDispatch();
	const onToggleModal = () => dispatch(modalAddLeadersOpenAction());

	// Закрытие модалки по клику Backdrop
	const handleBackdropClick = (event: React.MouseEvent<HTMLInputElement>): void => {
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

		// TODO: Read about cleanup

		window.addEventListener('keydown', handleKeyDown);
	}, [onToggleModal]);

	const handleSubmit = (leader: IInitialLeader) => {
		dispatch(createLeader(leader));
		onToggleModal();
	};

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div className="modal-backdrop" onClick={handleBackdropClick}>
			<div className="wrapper-modal">
				<div className="modal">
					<div className="modal__close" onClick={onToggleModal}>
						x
					</div>
					<Formik initialValues={initFormik} onSubmit={leader => handleSubmit(leader)}>
						{({ values, handleChange, handleBlur, isSubmitting }) => (
							<Form className="modal__form">
								<h1 className="modal__form__text">Add user score</h1>
								<input
									className="modal__form__input"
									name="name"
									placeholder="Name:"
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								<input
									className="modal__form__input"
									type="number"
									name="score"
									placeholder="Score:"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.score}
								/>
								<button type="submit" disabled={isSubmitting} className="modal__form__button">
									Save
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ModalAddLeaders;
