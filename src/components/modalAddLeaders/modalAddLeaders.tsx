/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './modalAddLeaders.scss';
import { modalAddLeadersOpenAction } from '../../redux/modalAddLeaders/modalAddLeadersActions';

const ModalAddLeaders = () => {
	const dispatch: any = useDispatch();
	const onToggleModal: any = () => dispatch(modalAddLeadersOpenAction());

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

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div className="modal-backdrop" onClick={handleBackdropClick}>
			<div className="wrapper-modal">
				<div className="modal">
					<div className="modal__close" onClick={onToggleModal}>
						x
					</div>
					<Formik
						initialValues={{ name: '', score: '' }}
						onSubmit={(values, { setSubmitting }) => {
							const b = JSON.stringify(values, null, 2);
							setSubmitting(false);
							console.log(b);
						}}
					>
						{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
							<form name="form" className="modal__form" onSubmit={handleSubmit}>
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
								<div className="modal__form__button">
									<button type="submit" disabled={isSubmitting}>
										Save
									</button>
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ModalAddLeaders;
