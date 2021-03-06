import { Form, Formik } from 'formik';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { createLeader } from '../../redux/leaders/leadersActions';
import { modalAddLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';

import { IInitialLeader } from '../../redux/leaders/interfaces/leder.types';

import './modalAddLeaders.scss';

const initFormik = { name: '', score: Number('_') };

const ModalAddLeaders = () => {
	const dispatch = useDispatch();
	const onToggleModal = () => dispatch(modalAddLeadersOpenAction());

	// Closing modal by Backdrop
	const handleBackdropClick = (event: React.FormEvent<EventTarget>): void => {
		if (event.currentTarget === event.target) {
			onToggleModal();
		}
	};

	const handleSubmit = (leader: IInitialLeader) => {
		if (leader.name !== '' && leader.score !== Number('_')) {
			dispatch(createLeader(leader));
			onToggleModal();
		} else {
			toast.error('🦄 Enter your name and score!', {
				autoClose: 2000,
			});
		}
	};

	return (
		<div
			role="button"
			tabIndex={0}
			className="modal-backdrop"
			onClick={handleBackdropClick}
			onKeyDown={handleBackdropClick}
		>
			<div className="wrapper-modal">
				<div className="modal">
					<div
						role="button"
						tabIndex={0}
						className="modal__close"
						onClick={onToggleModal}
						onKeyDown={onToggleModal}
					>
						x
					</div>
					<Formik initialValues={initFormik} onSubmit={leader => handleSubmit(leader)}>
						{({ values, handleChange, handleBlur }) => (
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
								<button type="submit" className="modal__form__button">
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
