import Topic from '../topic/topic.component';
import './topic-list.styles.scss';

//how to name
const TOPICS = [
	{
		name: 'Javascript',
		image: 'JavaScript-logo.png'
	},
	{
		name: 'React',
		image: 'React-icon.svg.png'
	}
]

function TopicList () {
	return (
		<ul className='topics-container'>
			{
				TOPICS.map((topic) => {
					const { name, image } = topic;
					return (
						<Topic name={name} image={image} key={name}/>
					)
				})
			}
		</ul>
	)
}

export default TopicList;