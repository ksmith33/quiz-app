import { useParams } from "react-router-dom"

function Category () {
	const { categoryName } = useParams();
	return (
		<h1>{ categoryName }</h1>
	)
}

export default Category