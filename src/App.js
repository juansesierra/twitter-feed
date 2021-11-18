import React, { useState } from 'react';
import SearchForm from './components/searchForm'
import TweetList from './components/tweetList'

const App = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [tweets, setTweets] = useState([]);
  const [searchs, setSearchs] = useState([]);
  const [userInfo, setUserInfo] = useState({
    userName: '',
    imageUrl: '',
    name: ''
  });

  const saveSearchs = (newSearch) => {
    setSearchs((searchList) => {
      if (searchList.includes(newSearch)) {
        return searchList;
      }

      if (searchList.length === 5) {
        return [...searchList.slice(1, 5), newSearch];
      }

      return [...searchList, newSearch];
    })
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!userName.length) {
      setError("Debe escribir un nombre de usuario");
      return;
    }

    saveSearchs(userName);

    const result = await window.api.fetchUserProfile(userName);
    if (result instanceof Error) {
      setError(result.message);
      setTweets([]);
    }

    else {
      setUserInfo({
        userName: result.userInfo.username,
        name: result.userInfo.name,
        imageUrl: result.userInfo.profile_image_url
      });
      setTweets(result.tweets);
    }
  }

  const tweetList = () => {
    if (tweets.length) {
      return <TweetList tweets={tweets} user={userInfo} />
    }
  }

  return (
    <div className="App">
      <SearchForm searchs={searchs} onSubmit={handleSubmit} onInputChange={handleInputChange} />
      {error && <label className="text-danger my-2">{error}</label>}
      {tweetList()}
    </div>
  );
}

export default App;
