
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
				<input type='text' name='fname' id='fname' value='name'/>
				<input type='text' name='address' id='address' value='address'/>
				<input type='text' name='email' id='email' value='email'/>
				<input type='text' name='phone' id='phone' value='phone number'/>
				<textarea name='message' id='message'>message</textarea>
				<input type='submit' name='send' id='send' value='send'/>
			</form>
		</>
    );
}
}
export default Contact;