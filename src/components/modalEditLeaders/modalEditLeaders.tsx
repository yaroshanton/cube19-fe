import { useEffect, useState, FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';
import { modalEditLeadersOpenAction } from '../../redux/modalLeaders/modalLeadersActions';
import { editLeadersAction } from '../../redux/leaders/actionTypes';

<<<<<<< HEAD
import { editLeadersAction } from '../../redux/leaders/actionTypes';
import { modalEditLeadersOpenAction } from '../../redux/modalEditLeaders/modalEditLeadersActions';
import '../modalAddLeaders/modalAddLeaders';

=======
>>>>>>> create-logic-edit-leader
import './modalEditLeaders.scss';

interface ModalProps {
	data: ILeader;
}

const ModalEditLeaders: FC<ModalProps> = ({ data }: ModalProps) => {
	const dispatch = useDispatch();
	const [editLeaders, setEditLeaders] = useState(data);
	const onToggleModal = () => dispatch(modalEditLeadersOpenAction());

<<<<<<< HEAD
	// Close modal on click Backdrop
=======
	// Closing a modalk on click Backdrop
>>>>>>> create-logic-edit-leader
	const handleBackdropClick = (event: { currentTarget: any; target: any }): void => {
		if (event.currentTarget === event.target) {
			onToggleModal();
		}
	};
	// TODO: Create custom hook for this func modalEdit

<<<<<<< HEAD
	// Closing the modal by Escape
=======
	// Closing a modalk on click Escape
>>>>>>> create-logic-edit-leader
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
		setEditLeaders(state => ({
			...state,
			[e.target.name]: Number(e.target.value),
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (data.score !== editLeaders.score) {
			dispatch({ type: [editLeadersAction.type], payload: editLeaders });
			onToggleModal();
		} else {
			toast.dark('You made no change!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
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
			<div className="wrapper-modal" aria-hidden="true">
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
