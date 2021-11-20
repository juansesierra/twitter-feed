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

  async getTweetsByUserId(userId, paginationToken = "") {
    const params = {
      params: {
        "tweet.fields": "public_metrics"
      }
    }
    if (paginationToken)
      params.params.pagination_token = paginationToken;

    const response = await this.axios.get(`/users/${userId}/tweets`, params);
    try {
      if (response.status == 200 && response.data.data)
        return {
          tweets: response.data.data,
          nextPaginationToken: response.data.meta.next_token ? response.data.meta.next_token : ""
        };

      else
        throw Error("No se han enccontrado tweets");
    }
    catch (error) {
      throw Error("No se han enccontrado tweets");
    }
  }

  async getUserByUserName(userName) {
    const params = {
      params: {
        usernames: userName,
        "user.fields": "profile_image_url,protected"
      }
    }
    try {
      const response = await this.axios.get('/users/by', params);

      if (response.status == 200 && response.data.data)
        return response.data.data[0];

      else
        throw Error("No se ha encontrado el nombre de usuario");
    }
    catch (error) {
      throw Error("No se ha encontrado el nombre de usuario");
    }
  }

  async getUserProfileByUserName(userName) {
    const userInfo = await this.getUserByUserName(userName);

    if (userInfo.protected) {
      throw Error("La cuenta del usuario es privada");
    }

    const tweetsResponse = await this.getTweetsByUserId(userInfo.id);
    const profile = {
      userInfo,
      tweets: tweetsResponse.tweets,
      nextPaginationToken: tweetsResponse.nextPaginationToken
    }
    return profile;
  }
}

module.exports = TwitterAPIClient;