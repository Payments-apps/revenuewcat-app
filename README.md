YouTube tutorial: [🔴 Let’s build IN-APP SUBSCRIPTIONS with REACT NATIVE (RevenueCat, Tailwind CSS, Paywall, TypeScript)
](https://www.youtube.com/watch?v=bE6eyZcU89U&ab_channel=SonnySangha)

Usefull websites:

- [nativewind](https://www.nativewind.dev/quick-starts/expo)
- [expo.dev...](https://docs.expo.dev/build/introduction/)

Bugs:

- The one I choose to be current in revenuewcat, is showing in the app. The other is undefined.

Install app in iPhone device

- [🍎 Open this link on your iOS devices (or scan the QR code) to install the app:](https://expo.dev/accounts/footios/projects/revenuewcat-app/builds/009b4ac0-22e4-4928-8040-79ecd877d915)
- then run `npx expo start --dev-client`

Setups steps:

- `expo init appname`
- `npm install -g eas-cli`
- `yarn add nativewind yarn add --dev tailwindcss yarn add v1.22.10`
- `npx tailwindcss init` (create a tailwindcss file)
- If tailwind is not working run `npx expo start --clear`

- For revenuecat
- `expo install expo-dev-client`
- `expo install react-native-purchases`

- For navigation:
- `yarn add @react-navigation/native`
- `npx expo install react-native-screens react-native-safe-area-context`
- `yarn add @react-navigation/native-stack`

Notes:

- Go to the end of e.g. `createNativeStackNavigator` press ctrl + space bar => auto import

- After 1:32
- Create a new app in apple store connect
- check: [expo eas](https://docs.expo.dev/build/introduction/)
- run `eas device:create` :
- This command lets you register your Apple devices (iPhones and iPads) for internal distribution of your app.
  Internal distribution means that you won't need to upload your app archive to App Store / Testflight.
  Your app archive (.ipa) will be installable on your equipment as long as you sign your application with an adhoc provisiong profile.
  The provisioning profile needs to contain the UDIDs (unique identifiers) of your iPhones and iPads.

First of all, choose the Expo account under which you want to register your devices.
Later, authenticate with Apple and choose your desired Apple Team (if your Apple ID has access to multiple teams).

- Apple ID:
- Password
- How do you want to validate your account? … device
- How would you like to register your devices? › Website - generates a registration URL to be opened on your devices
- Scan QR code with iPhone
- download the profile
- Go to settings and search for Profile.
- Under DOWNLOADED PROFILE, press Register for Development, and then Install (up right corner)
- Go to settings again to Privacy & Services (for iOS 16) and enable Developer Mode.
- create a developer build for the app by running `eas build --profile development --platform ios`
- What would you like your iOS bundle identifier to be? › com.footios.revenuewcatapp
- Do you want to log in to your Apple account? … yes
- › Log in to your Apple Developer account to continue
- ✔ Apple ID: … freedomzone@icloud.com
- › Restoring session /Users/footios/.app-store/auth/freedomzone@icloud.com/cookie
- › Team Fotios Tsakiris (RTSV7MD9P2)
- › Provider Fotios Tsakiris (123921446)
- ✔ Logged in Local session
- ✔ Bundle identifier registered com.footios.revenuewcatapp
- ✔ Synced capabilities: Enabled: Push Notifications
- ✔ Synced capability identifiers: No updates
- ✔ Fetched Apple distribution certificates
- ✔ Generate a new Apple Distribution Certificate? … yes
- ✔ Created Apple distribution certificate
- ✔ Created distribution certificate
- ✔ Select devices for the ad hoc build: › 67768a3111e27186e63854eb138d2667cad655c1 (iPhone 7)
- ✔ Created new profile: \*[expo] com.footios.revenuewcatapp AdHoc 1677852659469
- All credentials are ready to build @footios/revenuewcat-app (com.footios.revenuewcatapp)
- ✔ Would you like to set up Push Notifications for your project? › No
- Compressing project files and uploading to EAS Build. Learn more
- ✔ Uploaded to EAS
- ATTENTION: If you add any new dependencies, you need to rebuild! It can sream UI updates but not dependencies.

Apple Store Connect:

- Create a new app
- Go to subscriptions
- Go to subscription groups and create a subscription...

Revenuewcat:

- Create new project and select app for iOS.
- Get the Bundle id from `app.json` it's: ` "bundleIdentifier": "..."`
- Follow the instructions by clicking the `i` in App Store Connect App-Specific Shared Secret
- Then save and go to `products` (left menu)
- Take the `PRODUCT ID` from apple store connect / subscriptions / pro-subscriptioin, for each product.
- Create two products... and two offerings where you attach the products.

VS Code:

- create a hook: useRevenuewCat ...
- Get the key from revenuewcat/API keys
