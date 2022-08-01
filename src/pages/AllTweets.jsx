import React from 'react';
import Tweets from '../components/tweets';

const AllTweets = ({ tweetService }) => (
  <Tweets tweetService={tweetService} addable={true} />
);

export default AllTweets;
