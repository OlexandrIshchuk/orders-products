import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TopMenu from '../../components/TopMenu';
import './layout.styles.scss';

const Layout = () => {
	return (
		<div className="d-flex">
			<TopMenu />
			<Navbar />
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
