import React from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted successfully')
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
				/>
				<p data-testid="first-name-error-id" className="error"></p>
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
				/>
				<p data-testid="last-name-error-id" className="error"></p>
				<input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
				/>
				<p data-testid="email-error-id" className="error"></p>
				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
				/>
				<p data-testid="password-error-id" className="error"></p>
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
				/>
				<p
					data-testid="confirm-password-error-id"
					className="error"
				></p>
				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`
