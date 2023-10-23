import { useState } from 'react';
import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';

function SignInForm () {
	const [formFields, setFormFields] = useState({
		email: "",
		password: ""
	});
	const { email, password } = formFields;

	function handleChange (event) {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]:value });
	}

	function handleSubmit (event) {
		event.preventDefault();
		//firebase sign in with email and password
		resetFormFields();
	}

	function handleGoogleSignIn () {
		//firebase google sign in
		resetFormFields();
	}

	function resetFormFields() {
		setFormFields({ email: "", password: "" });
	}


	return (
		<form onSubmit={ handleSubmit } className='sign-in-container'>
			<h2>Sign In</h2>
			<FormInput
				label='Email'
				type='email'
				required
				onChange={ handleChange }
				name='email'
				id='email'
				value={ email }
			/>

			<FormInput
				label="Password"
				type='password'
				required
				onChange={ handleChange }
				name='password'
				id='password'
				value={ password }
			/>

			<div className='buttons'>
				{/*replace with button component*/}
				<button type='submit'>Sign In</button>
				<button type='button' onClick={ handleGoogleSignIn }>Sign In With Google</button>
			</div>
		</form>
	)
}

export default SignInForm;