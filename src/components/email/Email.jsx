import { addUser, changeEmail } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Email = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	return (
		<>
			<input
				type='email'
				placeholder='Email'
				value={user.email}
				onChange={event => handlechange(event, dispatch)}
			/>

			<form action='' onSubmit={event => handleSubmit(event, dispatch)}>
				<input type='text' name='username' id='' />
				<input type='text' name='name' id='' />
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

const handlechange = (event, dispatch) => {
	dispatch(changeEmail(event.target.value));
};
const handleSubmit = (event, dispatch) => {
	event.prevent.Default();
	dispatch(addUser(event.target.value));
	console.log(event.target.value);
};
