import '../styles/404.css';
import {Link} from 'react-router-dom';

const FourOhFour = () => {
	return (
		<div className='mainbox'>
			<div className='err'>4</div>
			<i className='far fa-question-circle fa-spin'></i>
			<div className='err2'>4</div>
			<div className='msg'>
				Maybe this page moved? Got deleted? Is hiding out in quarantine?
				Never existed in the first place?
				<p>
					Let's go <Link to='/home'>home</Link> and try from there.
				</p>
			</div>
		</div>
	);
};


export default FourOhFour;