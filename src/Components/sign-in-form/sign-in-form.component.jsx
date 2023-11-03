import AuthForm from '../auth-form/auth-form.component';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

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
		<AuthForm onSubmit={ handleSubmit }>
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
				<Button type='submit' buttonType='auth'>Sign In</Button>
				<Button type='button' onClick={ handleGoogleSignIn } buttonType='auth'>Sign In With Google</Button>
			</div>
		</AuthForm>
	)
}

export default SignInForm;