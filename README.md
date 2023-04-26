# Puppeteer Test
This is a test puppeteer script using node-js to login to LeetCode using SSO.

## Requirements
- Node.js v16.15.1
- Google Basic Auth Credentials

## Steps to Run
1) Clone git repository into your machine
2) Create a `.env` file with the following variables. 
    Basic auth credentials (the email and password) should be for a test Google account. Be careful if using your real credentials. 

    ```
    EMAIL=email@email.com
    PASSWORD=crazy-wacky-password
    APP_LOGIN_URL=https://leetcode.com/accounts/login/
    ```
3. Run the following command in your terminal `npm i`
4. Run the program `node script.js`


