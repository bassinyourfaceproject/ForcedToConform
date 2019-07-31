
import React from 'react';

class Contact extends React.Component {
	componentDidMount() {
		document.querySelector('body').className = 'contact';
	}

	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

  render() {
    return (
		<>
		<h1><span>let's keep in touch</span></h1>
			<form action='contact.html'>
				<input type='text' placeholder='name' id='fname'/>
				<input type='text' placeholder= 'address'name='address' id='address'/>
				<input type='text' placeholder= 'email'name='email' id='email'/>
				<input type='text' placeholder= 'phone'name='phone' id='phone'/>
				<textarea placeholder='message' name='message' id='message'></textarea>
				<input type='submit' name='send' id='send' />
				<input type='submit' name='send' id='send' />
			</form>
		</>
    );
}
}
export default Contact;