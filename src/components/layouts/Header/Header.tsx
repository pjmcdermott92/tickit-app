import { Link } from 'react-router-dom';
import LOGO from '@/assets/images/logo-semi-transparent.png';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={LOGO} alt='Brand Logo' />
            </Link>

        </header>
    )
}