import { Link } from 'react-router-dom';
import { IoPersonOutline,IoChevronUp } from 'react-icons/io5';
import LOGO from '@/assets/images/logo-color.png';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
	return (
        <aside className={styles.Sidebar}>

            <Link to='/' className={styles.brand}>
                <img src={LOGO} />
                <div>
                    <h1>Tick<span>It</span></h1>
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
