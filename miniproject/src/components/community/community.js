import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './community.css';

const Community = () => {
    const [posts, setPosts] = useState([]);

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

    const handleLikePost = async (postId) => {
        try {
            await axios.post(`https://your-api-url/posts/${postId}/like`);
            fetchPosts();
        } catch (error) {
            console.error('좋아요 오류:', error);
        }
    };

    return (
        <div className="community-container">
            <h1>커뮤니티 게시판</h1>
            <Link to="/write-post">
                <button>글 작성하기</button> {/* 글 작성 페이지로 이동하는 버튼 */}
            </Link>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="게시물 이미지" />}
                        <div>
                            <span>좋아요 {post.likes}개</span>
                            <button onClick={() => handleLikePost(post.id)}>좋아요</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
