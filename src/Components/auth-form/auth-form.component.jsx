import './auth-form.styles.scss';

function AuthForm ({ children, onSubmit }) {

	return (
		<form onSubmit={ onSubmit } className='auth-form-container'>
			{ children }
		</form>
	)
}

export default AuthForm;