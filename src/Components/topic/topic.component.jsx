import './topic.styles.scss';
import { Link } from 'react-router-dom';

function Topic ( { name, image }) {
	return (
		<li className='topic-container'>
			<Link to={`/category/${name}`}>
				<img src={`src/assets/images/${image}`} />
				<h2> { name } </h2>
			</Link>
		</li>
	)
}

export default Topic;