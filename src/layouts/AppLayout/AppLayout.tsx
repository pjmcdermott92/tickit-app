import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './AppLayout.module.scss';

export default function AppLayout() {
	const [sidebarExpanded, setSidebarExpanded] = useState(true);

	return (
		<div className={styles.pageWrapper} data-expand-sidebar={sidebarExpanded}>
			<Sidebar />
			<main className={styles.content}>
				<header className={styles.pageHeading}>
					<button
						className={styles.toggleBtn}
						onClick={() => setSidebarExpanded((curr) => !curr)}
                        title={`${sidebarExpanded ? 'Hide' : 'Show'} Sidebar`}
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
