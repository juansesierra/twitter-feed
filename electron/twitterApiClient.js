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
    const response = await this.axios.get(
      `/users/${userId}/tweets`
    );
    if (response.status == 200 && response.data.data)
      return response.data.data;

    else
      throw Error("Tweets not found");
  }
  async getUserByUserName(userName) {
    const params = {
      params: {
        usernames: userName,
        "user.fields": "profile_image_url,protected"
      }
    }
    const response = await this.axios.get('/users/by', params);

    if (response.status == 200 && response.data.data)
      return response.data.data[0];

    else
      throw Error("No se ha encontrado el nombre de usuario");
  }
  async getUserProfileByUserName(userName) {
    const userInfo = await this.getUserByUserName(userName);

    if (userInfo.protected) {
      throw Error("La cuenta del usuario es privada");
    }

    const userTweets = await this.getTweetsByUserId(userInfo.id);
    const profile = {
      userInfo,
      tweets: userTweets
    }
    return profile;
  }
}

module.exports = TwitterAPIClient;