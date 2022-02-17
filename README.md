# README

This README would normally document whatever steps are necessary to get your application up and running.

## How do I get set up?

The code is built using React-Native and running code locally requires a Mac

- Install the shared React Native dependencies (`React Native CLI`, _not_ `Expo CLI`)
  - [macOS](https://reactnative.dev/docs/environment-setup#installing-dependencies)
- Clone this repo

  ```bash
  git clone ...
  cd HoDienThanh_TestLevel
  ```

- Install dependencies

  ```bash
  yarn install
  ```

- Install pods for iOS

  ```bash
  cd ios && pod install && cd ..
  ```

- Start Metro

  ```bash
  yarn start
  ```

- Start iOS app

  ```bash
  yarn run ios
  ```

- Start android app with MacOS
  ```bash
  yarn run android or npx react-native run-android or react-native run-android
  ```
  - Start android app with Windowns
  ```bash
   npx react-native run-android or react-native run-android
  ```
