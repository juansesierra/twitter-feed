import React, { useState } from 'react';
import { Alert, Navbar, Spinner, FormControl } from 'react-bootstrap';
import SearchForm from '../components/searchForm';
import TweetList from '../components/tweetList';
import LoadingButton from '../components/loadingButton';
import logo from '../logo.svg';

const SearchPage = () => {
  const [userName, setUserName] = useState('');
  const [tweetTextFilter, setTweetTextFilter] = useState('');
  const [error, setError] = useState('');
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingTweets, setIsLoadingTweets] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [searchs, setSearchs] = useState([]);
  const [nextPaginationToken, setNextPaginationToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '',
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
    setTweets([]);
    setError("");

    if (!userName.length) {
      setError("Debe escribir un nombre de usuario");
      return;
    }

    saveSearchs(userName);
    setIsLoadingUser(true);
    const result = await window.api.fetchUserProfile(userName);
    setIsLoadingUser(false);

    if (result instanceof Error) {
      setError(result.message);
    }

    else {
      setUserInfo({
        id: result.userInfo.id,
        userName: result.userInfo.username,
        name: result.userInfo.name,
        imageUrl: result.userInfo.profile_image_url
      });
      setTweets(result.tweets);
      setNextPaginationToken(result.nextPaginationToken)
    }
  }

  const handleLoadMoreTweetsClick = async (event) => {
    event.preventDefault();

    setIsLoadingTweets(true);

    const result = await window.api.fetchTweets(userInfo.id, nextPaginationToken);
    console.log(result);
    setTweets([...tweets, ...result.tweets]);
    setNextPaginationToken(result.nextPaginationToken);
    setIsLoadingTweets(false);

  }

  const handleTweetFilterTextChange = (event) => {
    event.preventDefault();
    setTweetTextFilter(event.target.value);

  }

  const filteredTweets = tweets.filter(
    tweet => {
      return (tweet.text.toLowerCase().includes(tweetTextFilter.toLowerCase()));
    }
  )

  const tweetList = () => {
    if (isLoadingUser) {
      return (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      );
    }
    if (filteredTweets.length) {
      return <TweetList tweets={filteredTweets} user={userInfo} />
    }
  }

  return (
    <>
      <Navbar className="justify-content-center" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt="Twitter Searcher"
            src={logo}
            width="40"
            height="40"
          />
        </Navbar.Brand>
      </Navbar>
      <SearchForm
        className="my-3"
        searchs={searchs}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
      {
        tweets.length > 0 &&
        < FormControl
          type="text"
          className="my-3"
          placeholder="Introduce texto para filtrar los tweets"
          onChange={handleTweetFilterTextChange}
        />
      }
      {
        error && <Alert variant="danger" className="my-2">{error}</Alert>
      }
      {tweetList()}
      {
        tweets.length > 0 && nextPaginationToken &&
        <LoadingButton
          isLoading={isLoadingTweets}
          handleButtonClick={handleLoadMoreTweetsClick}
        />
      }
    </>
  );
}

export default SearchPage;
