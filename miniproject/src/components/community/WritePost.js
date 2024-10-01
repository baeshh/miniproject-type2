import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './writePost.css';

const WritePost = () => {
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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
      navigate('/community'); // 글 작성 후 커뮤니티로 이동
    } catch (error) {
      console.error('게시물 작성 오류:', error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="write-post-container">
      <h1>글 작성하기</h1>
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
  );
};

export default WritePost;
