import { Formik } from 'formik';
import React from 'react';
// import { useSelector } from 'react-redux';
// import leadersSelectors from '../../redux/leaders/leadersSelectors';

import './modalAddLeaders.scss';

const ModalAddLeaders = () => {
	// const leaders: any = useSelector(leadersSelectors.getOtherScoreLeaders);

	return (
		<div className="wrapper-modal">
			<div className="modal">
				<div className="modal__close">x</div>
				<Formik
					initialValues={{ name: '', score: '' }}
					onSubmit={(values, { setSubmitting }) => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
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
							<button type="submit" disabled={isSubmitting} className="modal__form__button">
								Save
							</button>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default ModalAddLeaders;
