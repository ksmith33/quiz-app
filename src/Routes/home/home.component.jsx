import Message from "../../Components/message/message.component";
import TopicList from "../../Components/topic-list/topic-list.component";
import "./home.styles.scss";

function Home () {
	return (
		<main className="home-container">
			<TopicList />
			<Message text='For each topic, placeholder offers a series of quizzes that get progressively harder. Select a topic to get started!'/>
		</main>
	)
}

export default Home;