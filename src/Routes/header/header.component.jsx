import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header.styles.scss';

function Header () {
	return (
		<>
			<header className='header-container'>
				<h1>Placeholder</h1>
				<nav className='links'>
					<Link to='/'>Quizzes</Link>
					<Link to='/account'>Account</Link>
					{/*log out button*/}
				</nav>
			</header>
			
			<Outlet />
		</>
	);
}

export default Header;