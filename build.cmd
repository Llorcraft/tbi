REM ionic cordova build android --prod --aot --minifyjs --optimizejs --minifycss
ionic cordova build android --verbose
REM ionic cordova build android --minifyjs --optimizejs --minifycss
REM ionic cordova build android --prod --release

REM set PATH="C:\Program Files\Java\jdk1.8.0_181\bin"
REM keytool -genkeypair -v -keystore insulation.keystore -alias insulation -keyalg RSA -keysize 2048 -validity 10000
REM jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore insulation.keystore app-release-unsigned.apk insulation
REM set PATH="C:\Users\luis.estrada.LAPTOP-NLQESFGA\AppData\Local\Android\Sdk\build-tools\28.0.1"
REM zipalign -v 4 app-release-unsigned.apk insulation.apk