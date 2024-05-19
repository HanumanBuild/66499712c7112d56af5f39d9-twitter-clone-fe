// Before
import React, { useState } from 'react';
// After
import React, { useState } from 'react';
import axios from 'axios';

const TweetForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${process.env.TWITTER_CLONE_BE_URL}/api/tweets`, { content });
    setContent('');
    window.location.reload(); // Reload to see the new tweet
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        className="w-full p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Tweet
      </button>
    </form>
  );
};

export default TweetForm;
// End of edit