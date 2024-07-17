import { useDispatch } from 'react-redux';
import { Header } from './components/header/Header';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { useEffect } from 'react';
import { addUser } from './redux/userSlice';
import { Email } from './components/email/Email';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then(response => response.json())
			.then(data => dispatch(addUser(data)))
			.catch(error => console.log(error));
	}, []);
	return (
		<>
			<GlobalStyles />
			<Header />
			<Email />
		</>
	);
};

export default App;
