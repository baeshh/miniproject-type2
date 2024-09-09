import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './community.css';

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [newComment, setNewComment] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://your-api-url/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handlePostSubmit = async () => {
        const formData = new FormData();
        formData.append('content', newPost);
        if (image) {
            formData.append('image', image);
        }
        
        try {
            await axios.post('https://your-api-url/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setNewPost("");
            setImage(null);
            fetchPosts();
        } catch (error) {
            console.error('Error posting:', error);
        }
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleCommentSubmit = async (postId) => {
        try {
            await axios.post(`https://your-api-url/posts/${postId}/comments`, {
                content: newComment,
            });
            setNewComment("");
            fetchPosts();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`https://your-api-url/posts/${postId}`);
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className="community-container">
            <h1>Community Board</h1>
            <div>
                <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write something..."
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                />
                <button onClick={handlePostSubmit}>Post</button>
            </div>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="Post" />}
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                        />
                        <button onClick={() => handleCommentSubmit(post.id)}>Comment</button>
                        <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
