import { Formik } from 'formik';
import React from 'react';
import './modalAddLeaders.scss';

const ModalAddLeaders = () => {
	return (
		<div className="wrapper-modal">
			<div className="modal">
				<div className="modal__close">x</div>
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
	);
};

export default ModalAddLeaders;
