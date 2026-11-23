# 1. 프로젝트 초기화 (package.json이 없는 경우)
npm init -y

# 2. Capacitor 핵심 패키지 및 CLI 설치
npm install @capacitor/core
npm install -D @capacitor/cli

# 3. Capacitor 설정 파일 생성 (앱 이름, 패키지 ID 입력)
npx cap init "MyApp" "com.example.myapp" --web-dir="www"
cd android
./gradlew assembleDebug
# 생성 경로: android/app/build/outputs/apk/debug/app-debug.apk
