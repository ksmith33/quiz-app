import { Link, useLocation } from "react-router-dom";
import "./sidebar.styles.scss";

function Sidebar () {
	const location = useLocation();

	return (
		<aside className="sidebar-container">
			<Link to='/account/settings' className={`${location.pathname === '/account/settings' ? 'selected' : ''}`}>Settings</Link>
			<Link to='/account/history' className={`${location.pathname === '/account/history' ? 'selected' : ''}`}>History</Link>
		</aside>
	)
}

export default Sidebar;