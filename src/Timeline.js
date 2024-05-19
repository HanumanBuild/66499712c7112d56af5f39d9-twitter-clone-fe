import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timeline = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const result = await axios(`${process.env.TWITTER_CLONE_BE_URL}/api/tweets`);
      setTweets(result.data);
    };

    fetchTweets();
  }, []);

  return (
    <div className="space-y-4">
      {tweets.map(tweet => (
        <div key={tweet._id} className="p-4 shadow rounded bg-white">
          <p>{tweet.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;