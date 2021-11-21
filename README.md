# Introduction
The point of this project is to showcase my abilities to develop a small app to search users in Twitter.

The app was developed using  electron and React.

The app has two principal functions: search users and filter user's tweets. In addition, we have to store the last 5 searchs and show them everytime that user tries to search.

All the search process ocurrs in the main process.

# Setup the project

For this project to run properly we need to follow these steps:
* Clone this repository

    `git clone https://github.com/juansesierra/twitter-feed.git`
* Create a `.env` file and set the `API_TOKEN` variable, with your Twitter api token
* Install dependencies `npm i`
* Start the application `npm run electron-start`

# App
Once you start the app, this is the state that you will see.
If we want to search a user, you only have to write his name without "@" and click the button.

![Captura de pantalla 2021-11-20 a las 17 13 43](https://user-images.githubusercontent.com/26814252/142735132-ca33f433-e198-41df-b9cd-a34af1ff9dbc.png)

For example we are going to search Ibai Llanos' profile.

https://user-images.githubusercontent.com/26814252/142734590-3468eebb-0437-4405-a65d-7e998260a693.mov

We can also go to the bottom and load more tweets.

https://user-images.githubusercontent.com/26814252/142734672-1b041f82-b131-4bd8-bc4e-5048bfa39f32.mov

As we can see, we have another input where as we write tweets are filtered.

https://user-images.githubusercontent.com/26814252/142736008-3a8c8d24-09d9-49bd-920c-213809a55bd1.mov

In case that you are trying to search an user that doesn't exist or is a private profile you will get an alert.

![Captura de pantalla 2021-11-20 a las 17 58 49](https://user-images.githubusercontent.com/26814252/142735066-5cde8fdb-1353-43ae-b041-d9715f5c344f.png)

![Captura de pantalla 2021-11-20 a las 17 59 20](https://user-images.githubusercontent.com/26814252/142735061-a60094b0-7bea-4e3d-acae-1ec96092e618.png)

Finally, when you are trying to search and you have previously searched, the application will show you the previous searches.

![Captura de pantalla 2021-11-20 a las 18 02 57](https://user-images.githubusercontent.com/26814252/142735040-358f1a19-b560-4b60-8488-985f7a5dd4a6.png)


