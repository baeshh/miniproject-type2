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
            console.error('게시물 가져오기 오류:', error);
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
            console.error('게시물 작성 오류:', error);
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
            console.error('댓글 작성 오류:', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`https://your-api-url/posts/${postId}`);
            fetchPosts();
        } catch (error) {
            console.error('게시물 삭제 오류:', error);
        }
    };

    return (
        <div className="community-container">
            <h1>커뮤니티</h1>
            <div>
                <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="게시물을 작성해보세요..."
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                />
                <button onClick={handlePostSubmit}>게시</button>
            </div>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="게시물 이미지" />}
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="댓글을 작성하세요..."
                        />
                        <button onClick={() => handleCommentSubmit(post.id)}>댓글 작성</button>
                        <button onClick={() => handleDeletePost(post.id)}>게시물 삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
