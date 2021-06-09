import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import './../styles/post.css';


const Post = () => {
	const [post, setPost] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?id=${params.id}`)
			.then((response) => response.json())
			.then((result) => {
				setPost(result[0]);
			});
	}, [params]);

	return (
		<div className='mainbox'>
			<h1 className="post-title">{post.title}</h1>
			<div className='post-msg'>
				<p>{post.body}</p>
                <p className="post-link"><Link to={`/userposts/${post.userId}`}>Posted by: user {post.userId}</Link></p>
                <p className="post-link">
                <Link to='/home' className="link">Home</Link> <Link to='/post' className="link">Post</Link>
                </p>
				  
			</div>
		</div>
	);
};

export default Post;
