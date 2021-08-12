import './ListItem.scss';
import { v4 as uuidv4 } from 'uuid';
import UserImage from '../../assets/images/user.png';
import PencilImage from '../../assets/images/pencil.png';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';

interface IListItemProps {
	leaders: ILeader[];
	updateOneLeader: (param: ILeader) => void;
}

const ListItem = (props: IListItemProps) => {
	const { leaders, updateOneLeader } = props;

	return (
		<div className="wrapper-list-item">
			{leaders &&
				leaders.map((leader: ILeader) => {
					return (
						<li key={uuidv4()} className="list-item">
							<div className="list-item__place">{leader.position}st</div>
							<img src={UserImage} alt="user" className="list-item__image" />
							<div className="list-item__score">{leader.score}</div>
							<div className="list-item__name ">{leader.name}</div>
							<div className="list-item__changes">
								{leader.change === 0 ? 'No Change' : `${leader.change}point`}
							</div>
							<div
								className="list-item__edit cursor-pointer"
								onClick={() => updateOneLeader(leader)}
								onKeyDown={() => updateOneLeader}
								role="button"
								tabIndex={0}
							>
								<img src={PencilImage} alt="pencil" />
							</div>
						</li>
					);
				})}
		</div>
	);
};

export default ListItem;
