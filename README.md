# Introduction
The point of this project is to showcase my abilities to develop a small app to search users in Twitter.

The app was developed using  electron and React.

The app has two principal functions: search users and filter user's tweets. In addition, we have to store the last 5 searchs and show them everytime that user tries to search.

All the search process ocurrs in the main process.

# Setup the project

For this project to run properly we need to follow these steps:
* Clone this repository

    `git clone https://github.com/juansesierra/twitter-feed.git`
* Install dependencies `npm i`
* Start the application `npm run electron-start`

# App
Once you start the app, this is the state that you will see.
If we want to search a user, you only have to write his name without "@" and click the button.

![](https://i.imgur.com/c2wa38b.png)

For example we are going to search Ibai Llanos' profile.

https://user-images.githubusercontent.com/26814252/142734590-3468eebb-0437-4405-a65d-7e998260a693.mov

We can also go to the bottom and load more tweets.

https://user-images.githubusercontent.com/26814252/142734672-1b041f82-b131-4bd8-bc4e-5048bfa39f32.mov

In case that you are trying to search an user that doesn't exist or is a private profile you will get an altert.

![Captura de pantalla 2021-11-20 a las 17 59 20](https://user-images.githubusercontent.com/26814252/142734803-69e46fe8-5230-4e90-bc7b-7e767b47ea92.png)

![Captura de pantalla 2021-11-20 a las 17 58 49](https://user-images.githubusercontent.com/26814252/142734793-9a04a653-e335-47a4-9270-031352dbcd2f.png)

Finally, when you are trying to search and you have previously searched, the application will show you the previous searches.

![Captura de pantalla 2021-11-20 a las 18 02 57](https://user-images.githubusercontent.com/26814252/142734905-a6f62ee2-5c74-4dcc-ad92-a596b908b55b.png)

