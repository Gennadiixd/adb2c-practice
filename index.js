import "isomorphic-fetch"; // or import the fetch polyfill you installed
import { Client } from "@microsoft/microsoft-graph-client";

const users = [
  {
    displayName: "Test User 1",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser1",
    userPrincipalName: "testuser1@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
    // myCustomAttribute: "myCustomValue",
  },
  {
    displayName: "Test User 2",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser2",
    userPrincipalName: "testuser2@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 3",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser3",
    userPrincipalName: "testuser3@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 4",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser4",
    userPrincipalName: "testuser4@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 5",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser5",
    userPrincipalName: "testuser5@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 6",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser6",
    userPrincipalName: "testuser6@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 7",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser7",
    userPrincipalName: "testuser7@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 8",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser8",
    userPrincipalName: "testuser8@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
  {
    displayName: "Test User 9",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser9",
    userPrincipalName: "testuser9@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
  },
];

const authenticationProvider = {
  getAccessToken: async (authenticationProviderOptions) =>
  "",
};

const clientOptions = {
  authProvider: authenticationProvider,
};

const client = Client.initWithMiddleware(clientOptions);


client
  .api("users")
  .create({
    displayName: "Test User 1",
    passwordProfile: { password: "TestPassword123-" },
    accountEnabled: true,
    mailNickname: "testuser1",
    userPrincipalName: "testuser1@sandboxfortest.onmicrosoft.com",
    city: "Redmond",
    // myCustomAttribute: "myCustomValue",
  })
  .then((user) => {
    console.log(`Created user ${user.displayName} (${user.userPrincipalName})`);
  });

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
