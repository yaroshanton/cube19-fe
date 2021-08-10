/* eslint-disable use-isnan */
import './ListItem.scss';
import UserImage from '../../assets/images/user.png';
import PencilImage from '../../assets/images/pencil.png';

import { ILeader } from '../../redux/leaders/interfaces/leder.types';

interface TListItemProps {
	leaders: ILeader[];
	updateOneLeader: (param: ILeader) => void;
}

const ListItem = (props: TListItemProps) => {
	const { leaders, updateOneLeader } = props;

	return (
		<div className="wrapper-list-item">
			{leaders &&
				leaders.map((leader: ILeader) => {
					return (
						<li key={leader.id} className="list-item">
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
