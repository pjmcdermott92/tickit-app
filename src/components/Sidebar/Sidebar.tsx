import { Link } from 'react-router-dom';
import {
	IoArrowBackCircleOutline,
	IoPersonOutline,
	IoChevronUp,
} from 'react-icons/io5';
import classNames from '../../utils/classNames';
import LOGO from '@/assets/images/logo-color.png';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
	expanded: boolean;
	close: () => void;
}

export default function Sidebar({ expanded, close }: ISidebarProps) {
	return (
		<aside className={classNames(styles.Sidebar, expanded && styles.expanded)}>
			<button className={styles.toggle} onClick={close}>
				<IoArrowBackCircleOutline />
			</button>

			<Link to='/' className={styles.brand}>
				<img src={LOGO} />
				<div>
					<h1>
						Tick<span>It</span>
					</h1>
					<span>Project Tracker</span>
				</div>
			</Link>

			<div className={styles.userAction}>
				<span className={styles.avatar}>
					<IoPersonOutline />
				</span>
				<div>
					<p>Johnathan Doe</p>
					<span>Administrator</span>
				</div>
				<button>
					<IoChevronUp />
				</button>
			</div>
		</aside>
	);
}
