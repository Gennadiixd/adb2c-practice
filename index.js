import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { withRateLimiter } from "./rate-limiter.js";
import { uploadUser } from "./upload-user.js";
import { users } from "./users.js";

const uploadUserWithRateLimiter = withRateLimiter(uploadUser);

for (const user of users) {
  uploadUserWithRateLimiter(user);
}

// client
//   .api("/applications/18d4a173-3c3c-4dfa-88c8-f8f0aa1ed9cc/extensionProperties")
//   .get()
//   .then((data) => console.log(data));

// const user = {
//   accountEnabled: true,
//   displayName: "Jane Doe",
//   givenName: "Jane",
//   surname: "Doe",
//   passwordProfile: {
//     password: "your-password",
//     forceChangePasswordNextLogin: false,
//   },
//   mailNickname: "jane.doe",
//   userPrincipalName: "jane.doe@your-tenant-name.onmicrosoft.com",
//   // You can specify custom attributes for the user here
//   myCustomAttribute: "my-custom-value",
// };

// client
//   .api("users")
//   .create({
//     displayName: "Test User 1",
//     passwordProfile: {
//       password: "TestPassword123-",
//     },
//     accountEnabled: true,
//     mailNickname: "testuser1",
//     userPrincipalName: "testuser5@sandboxfortest.onmicrosoft.com",
//     city: "Redmond",
//     myCustomAttribute: "myCustomValue",
//   })
//   .then((user) => {
//     console.log(user);
//   });

// client
//   .api("users")
//   .get()
//   .then((users) => {
//     console.log(`Found ${users.value.length} users:`);
//     users.value.forEach((user) => {
//       console.log(`- ${user.displayName} (${user.userPrincipalName})`);
//     });
//   });

// client
//   .api("users")
//   .create({
//     displayName: "Test User",
//     passwordProfile: { password: "TestPassword123-" },
//     accountEnabled: true,
//     mailNickname: "testuser",
//     userPrincipalName: "t312345Sestuser@sandboxfortest.onmicrosoft.com",
//     city: "Redmond",
//     smth: "smth",
//   })
//   .then((user) => {
//     console.log(user);
//   });

// client
//   .api("users")
//   .get("/users/t312345Sestuser@sandboxfortest.onmicrosoft.com")
//   .then((user) => {
//     console.log(user);
//   });

// const { GraphClient } = require('@microsoft/microsoft-graph-client');

// const client = new GraphClient();

// const user = {
//   accountEnabled: true,
//   displayName: 'Jane Doe',
//   givenName: 'Jane',
//   surname: 'Doe',
//   passwordProfile: {
//     password: 'your-password',
//     forceChangePasswordNextLogin: true
//   },
//   mailNickname: 'jane.doe',
//   userPrincipalName: 'jane.doe@your-tenant-name.onmicrosoft.com',
//   // You can specify custom attributes for the user here
//   myCustomAttribute: 'my-custom-value'
// };

// client
//   .api('/users')
//   .createOrUpdateUser(user)
//   .then(user => {
//     console.log(`User created: ${user.displayName}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// const client = MicrosoftGraph.init({
//   defaultVersion: "v1.0",
//   authProvider: (done) => {
//     done(null, accessToken);
//   },
// });

// // Set the user's first and last name
// const firstName = "Jane";
// const lastName = "Doe";

// // Set the user's custom field, for example their favorite color
// const favoriteColor = "blue";

// // Create the user
// client
//   .api(`/users`)
//   .post({
//     accountEnabled: true,
//     displayName: `${firstName} ${lastName}`,
//     mailNickname: `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
//     passwordProfile: {
//       password: "your-password",
//       forceChangePasswordNextSignIn: false,
//     },
//     userPrincipalName: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${tenant}.onmicrosoft.com`,
//     // Add the user's custom field
//     extension_your_custom_field_name: favoriteColor,
//   })
//   .then((user) => {
//     console.log(`Created user: ${user.displayName}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Import the request module
// const request = require('request');

// // Set the URL for the Microsoft Graph API
// const url = 'https://graph.microsoft.com/v1.0/users';

// // Set the request options, including the access token and the user information
// const options = {
//   method: 'POST',
//   url: url,
//   headers: {
//     'Authorization': 'Bearer <ACCESS_TOKEN>',
//     'Content-Type': 'application/json'
//   },
//   json: {
//     'displayName': '<USER_NAME>',
//     'mailNickname': '<USER_EMAIL>',
//     'passwordPolicies': 'DisablePasswordExpiration',
//     'passwordProfile': {
//       'password': '<USER_PASSWORD>',
//       'forceChangePasswordNextSignIn': false
//     },
//     'accountEnabled': true,
//     'creationType': 'LocalAccount',
//     'userPrincipalName': '<USER_EMAIL>',
//     '<CUSTOM_FIELD_1>': '
