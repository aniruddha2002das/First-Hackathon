import { useState } from 'react'
import './LoginPage.css'

function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')





	async function loginUser(event) {
		event.preventDefault()

		if (email === "" || password === "") {

			alert('No Empty Fields allowed')
		}

		else {

			
			const response = await fetch('http://localhost:8050/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				})
			})

			const data = await response.json()
			
			console.log(data);
			if (data.user === true) {
				// localStorage.setItem('token', data.user)
				alert('Login successful')
				window.location.href = '/home'
			} else {
				alert('Invalid username or password')
			}
		}
	}

	return (
		<div>
			<form onSubmit={loginUser}>
				<div id="center">
					<h3>Viaja<span>r</span></h3>
					<h4>Login </h4>
					{/* <hr/> */}

					<div id="content" >
						<div className="horiz">
							<label htmlFor="uname" className="blok">Username:</label>
							<label htmlFor="pass" className="blok">Password:</label>
						</div>

						<div id="boxdiv" className="horiz">
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Email"
								id="uname" className="box" />

							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
								id="pass" className="box" />
						</div>
					</div>

					<div id="buttons">
						<button id="back" type="button" className="button">Back</button>
						<button id="sub" type="submit" className="button">Login</button>
					</div>
				</div>
			</form>

		</div>
	)
}

export default LoginPage;


