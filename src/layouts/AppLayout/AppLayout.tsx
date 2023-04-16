import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './AppLayout.module.scss';

export default function AppLayout() {
	const [sidebarExpanded, setSidebarExpanded] = useState(true);
	const [mobileSidebar, setMobileSidebar] = useState(false);

	return (
		<div className={styles.pageWrapper} data-expand-sidebar={sidebarExpanded}>
			<Sidebar expanded={mobileSidebar} close={() => setMobileSidebar(false)} />
			<main className={styles.content}>
				<header className={styles.pageHeading}>
					<button
						className={styles.toggleBtn}
						onClick={() => setSidebarExpanded((curr) => !curr)}
						title={`${sidebarExpanded ? 'Hide' : 'Show'} Sidebar`}
					>
						<IoMenu />
					</button>
					<button
						className={styles.mobileBtn}
						onClick={() => setMobileSidebar(true)}
					>
						<IoMenu />
					</button>
					<h5>Dashboard</h5>
				</header>

				<div className={styles.contentContainer}>
					<Outlet />
				</div>
			</main>
		</div>
	);
}
