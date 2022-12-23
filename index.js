import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { Client } from "@microsoft/microsoft-graph-client";

const tenantName = "sandboxfortest";
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJub25jZSI6Im1QSGRwOG5KYnFUQ3ZXajg4ZXlpcjdNdy00ckpvRGNfTk9SNS1vUVcwUXciLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mNTVlYTVjNi0xODkzLTQxZjItYjNmMC03OGJhOWQ3ZjUwZjQvIiwiaWF0IjoxNjcxMTIzNzY0LCJuYmYiOjE2NzExMjM3NjQsImV4cCI6MTY3MTEyNzY2NCwiYWlvIjoiRTJaZ1lQaXRzRFZnYW9HbmdsZTlnV2VnOFI5VEFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJxd2VyYXNkZiIsImFwcGlkIjoiOTQzM2Y3YjUtNGI3Yi00NjJhLWI3MTQtNzM1OGQ4ODRjMWUwIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjU1ZWE1YzYtMTg5My00MWYyLWIzZjAtNzhiYTlkN2Y1MGY0LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiMmMwYjMzMTUtNjVjNy00NGFmLTk0N2MtYjc3MjM3MGIyNWJiIiwicmgiOiIwLkFSMEF4cVZlOVpNWThrR3o4SGk2blg5UTlBTUFBQUFBQUFBQXdBQUFBQUFBQUFBZEFBQS4iLCJyb2xlcyI6WyJVc2VyLlJlYWRCYXNpYy5BbGwiLCJVc2VyLlJlYWRXcml0ZS5BbGwiLCJVc2VyLkludml0ZS5BbGwiLCJVc2VyLlJlYWQuQWxsIiwiVXNlci5FeHBvcnQuQWxsIiwiVXNlci5NYW5hZ2VJZGVudGl0aWVzLkFsbCJdLCJzdWIiOiIyYzBiMzMxNS02NWM3LTQ0YWYtOTQ3Yy1iNzcyMzcwYjI1YmIiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiJmNTVlYTVjNi0xODkzLTQxZjItYjNmMC03OGJhOWQ3ZjUwZjQiLCJ1dGkiOiJuOGFHWHMwdzBVS3dzTmhYaXdHa0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX3RjZHQiOjE2NzA4NDI5MDl9.PHhl8ffsNj4GNwFeRXEkO-T8_C5xNdlqbIxHYdfSEMEICLWkY_ajzL-_ae3yzKhMdrtXG5VCIrRpOFR3t7MyMs5w3hxSyhio8cHNac7gBV1_HTSRYzMEv1AOzPsIKWDQ8Wnw2FRkrcvmots7WQUmp83pgHEMr3xyqISDt8cPeFZhv80Nil4tC5DGVgmLan_Gxtk13BEm14EGlU89ZBFqGCSE6Ev1uQh_meLcwnSLS_C4BEaq6K27aKSX4a6jb4k5vwRCLz2MguiJUdaBg2BRgbX3WZd7yLTZ5LUAHOUNHJZTHGxycEtdzOKMrRVH3q1xTPQQYplv-USO3xwj4uXaNg";

const client = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => accessToken,
  },
});

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
