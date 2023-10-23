import './auth-form.styles.scss';

function AuthForm ({ children, onSubmit }) {

	return (
		<form onSubmit={ onSubmit } className='sign-in-container'>
			{ children }
		</form>
	)
}

export default AuthForm;