import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { ILeader } from '../../redux/leaders/interfaces/leder.types';

import UserImage from '../../assets/images/user.png';
import PencilImage from '../../assets/images/pencil.png';

import './ListItem.scss';

interface IListItemProps {
	leaders: ILeader[];
	updateOneLeader: (param: ILeader) => void;
}

const ListItem = (props: IListItemProps) => {
	const { leaders, updateOneLeader } = props;

	const listItemStyles = {
		green: 'list-item__green',
		yellow: 'list-item__yellow',
		red: 'list-item__red',
	};

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
							<div
								className={cn({
									[listItemStyles.green]: leader.change > 0,
									[listItemStyles.red]: leader.change < 0,
									[listItemStyles.yellow]: leader.change === 0,
								})}
							>
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
