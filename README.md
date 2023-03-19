# Keploy-JavaScript-Integration

## JavaScript based Weather API with Keploy TypeScript-SDK Integrated.

### Software Required

1. Node.js
2. Sublime Editor
3. Keploy Server (Windows 64-bit)

### Installation

1. Open command Prompt and run following commands
```sh
Win + R
```
2. Browse to directory in cmd & install all libraries using npm
```sh
npm init
npm install express
npm install dotenv
npm install axio
npm i https://github.com/keploy/typescript-sdk
```
3. Now, initialize the server via nodemon
```sh
node server.js
start keploy.exe
```
4. Copy http link shown in cmd and paste in the browser 
```sh

export KEPLOY_MODE="record" in .env file.
Visit http://localhost:3000/ to make API calls
Visit http://localhost:6789 to check API calls recorded by Keploy Server
```

```sh
export KEPLOY_MODE="test" in .env file.
```

Check keploy console for test activities

## Contributing
To report any bugs or issues. Please open an issue.

## Help
You can also report an issue at Keploy Typescript-SDK.
For more info visit official Keploy Docs.
