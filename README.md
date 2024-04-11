
# Twitter Clone Usign Reatc Native CLI

# Project Description

This application serves as a Twitter clone, providing users with the capability to register an account and log in to access its features. Upon successful login, users are presented with a drawer navigation that includes two primary pages: Home and Help Center.

The Home page directs users to a bottom tab navigator housing three distinct screens:
- **Feeds**: Here, users can browse through tweets posted by others within the app. Selecting a tweet takes them to a detailed view.
- **Tweet Details**: This page presents comprehensive information about the tweet, such as the username of the poster, the posting date, and other relevant metadata.
- **Profile**: On this screen, the authenticated user can view their personal data, select a profile picture, and post new tweets.

The application is crafted using various frameworks and technologies:
- **React Native CLI**: Employed as the cross-platform mobile framework to build the app for both Android and iOS devices.
- **Redux Toolkit**: Utilized for efficient state management throughout the app.
- **MySQL and PHP**: These form the backbone of the API, managing data transactions and server-side logic.

Key features implemented within the app include:
- **Local Notifications**: Activated when users interact with tweet icons, such as liking, retweeting, or saving.
- **Deep Linking**: Enables users to share the application link with friends, helping to expand the community.
- **Profile Settings**: Allows users to choose an image from their device and set it as their account's profile picture.
- **Infinite Scrolling, Pagination, and Pull-to-Refresh**: Enhances user experience by providing seamless content browsing and ensuring users see the latest content updates.
- **Device-Specific Experience**: The drawer displays the type of device in use (Android or iOS), tailoring the experience accordingly.
- **Authentication**: Integrated through Firebase, offering users the option to sign up and log in securely.
- **Drawer and Bottom Tab Navigation**: Incorporates multiple stacks to enrich navigation and user interaction.
- **Profiling**: Utilizes Flipper to monitor and optimize application performance.


# Installation

To install this project, run the following commands in your terminal:

```sh
# Clone the repository
git clone repository url

# Navigate to the project directory
cd [ProjectName]

# Open the project in Visual Studio Code (Optional)
code .

# Install dependencies
npm install

# Start the application on Android
npx react-native run-android

# Or start the application on iOS
npx react-native run-ios

# Usage

Once the application is up and running on your device, follow these steps to utilize its features:

1. **Open the App**: Start the application on your device or emulator.

2. **Register an Account**: If you are a new user, navigate to the sign-up screen from the initial screen, enter the required information to create an account.

3. **Log In**: If you have an existing account, go to the login screen, input your credentials, and log in to access the main features of the app.

4. **Explore the App**

5. **Sign Out**: When you're ready to exit the app, you can sign out from the Profile page by pressing the 'Sign Out' button.

# Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# License

Distributed under the MIT License. See `LICENSE` for more information.

# Credits

This project would not have been possible without the contribution of:

- Eurisko Mobility


Special thanks to everyone who has contributed to the development and maintenance of the project, as well as to the open-source software used in this application.


