import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/Article.css';

const Loading = () => {
  return (
    <div className="loading-div">
      <CircularProgress size={60} color="secondary" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
