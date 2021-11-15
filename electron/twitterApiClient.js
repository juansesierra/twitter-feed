const axios = require("axios");
class TwitterAPIClient {
  constructor(bearerToken) {
    const defaultOptions = {
      baseURL: "https://api.twitter.com/2/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + bearerToken,
      },
    };

    this.axios = axios.create(defaultOptions);
  }
  async getTweetsByUserId(userId) {
    try {
      const response = await this.axios.get(
        `/users/${userId}/tweets`
      );
      return response.data.data;
    } catch (error) {
      console.log("ERR: Failed to fetch tweets", error);
      return error;
    }
  }
  async getUserByUserName(userName) {
    try {
      const params = {
        params: {
          usernames: userName,
          "user.fields": "profile_image_url"
        }
      }
      const response = await this.axios.get('/users/by', params);

      return response.data.data[0];
    } catch (error) {
      console.log("ERR: Failed to fetch user", error);
      return error;
    }
  }
  async getUserProfileByUserName(userName) {
    const userInfo = await this.getUserByUserName(userName);
    const userTweets = await this.getTweetsByUserId(userInfo.id);
    const profile = {
      userInfo,
      tweets : userTweets
    }
    console.log("Perfil Resultado");
    console.log(profile);
    return profile;
  }
}

module.exports = TwitterAPIClient;