import '../styles/home.css';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className='mainbox'>
			<h1>Welcome!</h1>
			<div className='home-msg'>
				Get started by viewing user posts for free!!
				<p>
					Let's go <Link to='/post'>User Posts</Link> and try from there.
				</p>
			</div>
		</div>
	);
};


export default Home;
