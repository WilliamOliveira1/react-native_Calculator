# react-native_Calculator

This is a small react-native project, wich was coded mostly in Javascript if you want to set up for code or install the app to test you can follow the step-by-step below or check in the react-native page: [React-Native Setup]( https://reactnative.dev/docs/environment-setup )

### Step-by-Step to set up the development environment (For Windows users)
 * First install Chocolatey
      * Open the PowerShell as administrator
      * Copy the the following command:
      ```
      Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
      ```
      * Paste the copied text on PowerShell and wait to complete the installation
      * If you don't see any errors, you are ready to use Chocolatey!
      * But if you want to check - Type:
      ```
      choco 
      ```
      Or
      ```
      choco -?
      ```
      
* Installing dependencies - ( Node, JDK )    
    * Copy the the following command:
    ```
    choco install -y nodejs.install openjdk8
    ```
    * Paste the copied text on PowerShell and wait to complete the installation
* Download and install Android Studio: [AndroidStudio](https://developer.android.com/studio/index.html)    
    * While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
        * Android SDK
        * Android SDK Platform
        * Android Virtual Device
        * If you are not already using Hyper-V: Performance (Intel ® HAXM) [(See here for AMD or Hyper-V)](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
        
____________  _____________Will Be Continued______________________
