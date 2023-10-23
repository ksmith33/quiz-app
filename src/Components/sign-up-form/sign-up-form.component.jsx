import AuthForm from '../auth-form/auth-form.component';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

function SignUpForm () {
	const [formFields, setFormFields] = useState({
		email: "",
		password: "",
		confirmPassword: ""
	});

	const { email, password, confirmPassword } = formFields;

	function handleChange (event) {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]:value });
	}

	function handleSubmit (event) {
		event.preventDefault();
		resetFormFields();
	}

	function resetFormFields() {
		setFormFields({ email: "", password: "", confirmPassword: "" });
	}

	return (
		<AuthForm onSubmit={ handleSubmit }>
			<h2>Sign Up</h2>
			<FormInput
				label='Email'
				placeholder='email'
				type='email'
				required
				onChange={ handleChange }
				name='email'
				id='email'
				value={ email }
			/>

			<FormInput
				label="Password"
				placeholder='password'
				type='password'
				required
				onChange={ handleChange }
				name='password'
				id='password'
				value={ password }
			/>

			<FormInput
				label="Confirm Password"
				placeholder='confirm password'
				type='password'
				required
				onChange={ handleChange }
				name='confirmPassword'
				id='confirmPassword'
				value={ confirmPassword }
			/>

			<div className='buttons'>
				<Button type='submit'>Sign Up</Button>
			</div>
		</AuthForm>
	)
}

export default SignUpForm;