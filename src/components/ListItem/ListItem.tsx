/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import UserImage from '../../assets/images/user.png';
import PencilImage from '../../assets/images/pencil.png';
import './ListItem.scss';
import { ILeader } from '../../redux/leaders/interfaces/leder.types';

interface TListItemProps {
	leaders: ILeader[];
	handleClick: (param: ILeader) => void;
}

const ListItem = (props: TListItemProps) => {
	const { leaders, handleClick } = props;

	return (
		<div className="wrapper-list-item">
			{leaders.map((leader: ILeader) => {
				return (
					<li key={leader.id} className="list-item">
						<div className="list-item__place">{leader.position}st</div>
						<img src={UserImage} alt="user" className="list-item__image" />
						<div className="list-item__score">{leader.score}</div>
						<div className="list-item__name ">{leader.name}</div>
						<div className="list-item__changes">
							{leader.change === 0 ? 'No Change' : `${leader.change}point`}
						</div>
						<img
							src={PencilImage}
							alt="pencil"
							className="list-item__edit cursor-pointer"
							onClick={() => handleClick(leader)}
						/>
					</li>
				);
			})}
		</div>
	);
};

export default ListItem;
