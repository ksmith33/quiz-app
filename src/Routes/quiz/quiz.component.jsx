import { useParams } from "react-router-dom";

function Quiz () {
	const { quizId } = useParams();

	return (
		<h1>{ quizId }</h1>
	)
}

export default Quiz;