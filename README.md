## Getting Started
To preview this MD file, on Visual Studio Code. click on README.md and then click Ctrl+Shift+V to preview

# Pill Ease

Pill Ease is a mobile application designed to tackle the prevalent issue of medication non-adherence.


### Clone the Repository

To run Pill Ease on your local device, follow these steps:

1. Clone the GitHub repository:
   ```
   git clone https://github.com/wafiqm32/pillease-as2mwe.git
   ```

2. Navigate to the project directory:
   ```
   cd pillease-as2mwe
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ionic serve
   ```

### Accessing the Application on Other Devices

To access the application on other devices, follow the steps above to clone the repository and install dependencies. Then, run the application using Ionic serve. Ensure that your device is connected to the same network as the host machine. Access the application by entering the provided local or network IP address and port number in your device's browser.

## Usage Instructions

1. Upon opening the application, you will be greeted by the authentication page. Use the following credentials:
   - Email: Wafiq3222@gmail.com
   - Password: 12345678

2. After logging in, you will be directed to the home page where you can:
   - View a warm greeting message.
   - Access your profile by clicking on the profile button.
   - Navigate to the calendar.
   - Add pills by clicking the plus button, redirecting you to the pills page.

3. In the profile page, your login email and password will be displayed, though censored. You can:
   - Check your history log.
   - Logout.

4. In the pills page, you can add pills to the home page. If a pill is already added, a popup notification will indicate success. Attempting to add the same pill twice will trigger a warning message.

5. In the pills info page, clicking on the info button for each pill will display relevant information about the app.

## Project Details

- Pill Ease is built using Ionic Angular.
- It is an standalone file.

## Contributing

For bug reports, pull requests, and feature requests, please contact us at 22ftt1516@student.pb.edu.bn.

## License

Pill Ease is a free application.

## Contact Information

For further inquiries, you can reach us via email at 22ftt1516@student.pb.edu.bn or WhatsApp at +673 722 3322.

---

This README file provides users with comprehensive instructions on how to get started with Pill Ease, how to use its features, and how to contribute to the project. It also includes contact information for further assistance.

### Building an Android APK with Capacitor

To build an Android APK using Capacitor, you need to follow these steps:

1. **Add Android Platform**: If you haven't added the Android platform to your project yet, run the following command in your terminal:

    ```bash
    ionic capacitor add android
    ```

2. **Build your Ionic project**: This step will create the `www` folder that Capacitor has been configured to use as the `webDir` in `capacitor.config.json`.

    ```bash
    ionic build
    ```

3. **Copy Web Assets**: Copy your web assets into the Android project:

    ```bash
    ionic capacitor copy android
    ```

4. **Open Android Project in Android Studio**: Open your PillEase project in Android Studio:

    ```bash
    ionic capacitor open android
    ```

5. **Run Android Application**: Once Android Studio is open, you can run PillEase either on a connected device or emulator. Alternatively, you can use the following command to run your application from the terminal:

    ```bash
    ionic capacitor run android
    ```

By following these steps, you can build an Android APK using Capacitor for PillEase.

# Screenshots of APK file on Samsung S23 Ultra:

![Screenshot of the APK file on Samsung S23 Ultra](../pilleasemweas2/src/assets/s1.jpg "APK Screenshot")

![Screenshot of the APK file on Samsung S23 Ultra](../pilleasemweas2/src/assets/s2.jpg "APK Screenshot")

![Screenshot of the APK file on Samsung S23 Ultra](../pilleasemweas2/src/assets/s3.jpg "APK Screenshot")

![Screenshot of the APK file on Samsung S23 Ultra](../pilleasemweas2/src/assets/s4.jpg "APK Screenshot")

![Screenshot of the APK file on Samsung S23 Ultra](../pilleasemweas2/src/assets/s5.jpg "APK Screenshot")

