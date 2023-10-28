import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import './authentication.styles.scss';

function Authentication () {
	return (
		<main className="auth-container">
			<h1>Placeholder</h1>
			<SignInForm />
			<SignUpForm />
		</main>
	)
}

export default Authentication;