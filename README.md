# How to debug on your android virtual device ( Nox )

 1. run cmd and type `react-native run-android`
 2. run your nox apps
 3. open your cmd and do `adb connect 127.0.0.1:62001`
 4. when you get error in your device ( device not found )
	 - click the shake button and choose Dev Settings
	 - choose "debug server host and port for device"
	 - open your cmd in your windows and type `ipconfig` and you get your IP
	 -  insert your ip:8081 ( 8081 is default port that used by dev server and it will be run automatically when you run `react-native run-android` before )
	 - wait your dev server
	 - and done, reload your virtual device by clicking shake button and choose Reload 
