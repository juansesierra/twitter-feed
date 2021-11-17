import React, { useState } from 'react';
import SearchForm from './components/searchForm'
import TweedCard from './components/tweetCard'

const App = () => {
  const tweetData = {
    userName : "IbaiLlanos",
    name: "Ibai",
    text: "Probando mi primer tweet"
  };
  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState({
    userName:'',
    imageUrl: '',
    name: ''
  });

  const handleInputChange = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("Username: ", userName)
    window.api.fetchUserProfile(userName).
    then((result) => {
      setUserInfo(userInfo => ({
        ...userInfo, 
        userName: result.userInfo.username,
        name: result.userInfo.name,
        imageUrl: result.userInfo.profile_image_url
      }));
      console.log("tweets", result.tweets);
    });
    console.log("userInfo", userInfo)
  }

  function getTweetInfo () {
    return {
      userName : "IbaiLlanos",
      name: "Ibai",
      text: "Probando mi primer tweet con funcion"
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm onSubmit={handleSubmit} onInputChange={handleInputChange}/>
        <TweedCard tweet={getTweetInfo()}/>
      </header>
    </div>
  );
}

export default App;
