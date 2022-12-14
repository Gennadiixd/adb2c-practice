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
  "eyJ0eXAiOiJKV1QiLCJub25jZSI6IlM2T2NZRnRidDJMWTNFOFBtUm13RTk0SlpFX0VsMHNlcGw1Y3pJd0t2TjgiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mNTVlYTVjNi0xODkzLTQxZjItYjNmMC03OGJhOWQ3ZjUwZjQvIiwiaWF0IjoxNjcxMDE1OTc1LCJuYmYiOjE2NzEwMTU5NzUsImV4cCI6MTY3MTAxOTg3NSwiYWlvIjoiRTJaZ1lMQmF1V25qcG12c2NhYlhJOTliSmt3c0FRQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJxd2VyYXNkZiIsImFwcGlkIjoiOTQzM2Y3YjUtNGI3Yi00NjJhLWI3MTQtNzM1OGQ4ODRjMWUwIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjU1ZWE1YzYtMTg5My00MWYyLWIzZjAtNzhiYTlkN2Y1MGY0LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiMmMwYjMzMTUtNjVjNy00NGFmLTk0N2MtYjc3MjM3MGIyNWJiIiwicmgiOiIwLkFSMEF4cVZlOVpNWThrR3o4SGk2blg5UTlBTUFBQUFBQUFBQXdBQUFBQUFBQUFBZEFBQS4iLCJyb2xlcyI6WyJVc2VyLlJlYWRCYXNpYy5BbGwiLCJVc2VyLlJlYWRXcml0ZS5BbGwiLCJVc2VyLkludml0ZS5BbGwiLCJVc2VyLlJlYWQuQWxsIiwiVXNlci5FeHBvcnQuQWxsIiwiVXNlci5NYW5hZ2VJZGVudGl0aWVzLkFsbCJdLCJzdWIiOiIyYzBiMzMxNS02NWM3LTQ0YWYtOTQ3Yy1iNzcyMzcwYjI1YmIiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiTkEiLCJ0aWQiOiJmNTVlYTVjNi0xODkzLTQxZjItYjNmMC03OGJhOWQ3ZjUwZjQiLCJ1dGkiOiJsQzIwRmVmTGpFQ0Z6RXVuRFp6MkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX3RjZHQiOjE2NzA4NDI5MDl9.fY9OQtZ-y9mWKBdiCJ5wmc9kNos95ramfuGKw-YuCcvz1_WosnczLlRRnPwM4SimS-Ge4xKXGhc5GphwP9uT08Xo3QYdBD3L_GjpG0UXXPH6aRXZjjL6QG7bRUpz25u1p1l-93HHuQdVqrOwLJHTypqiyn53DZmtIBBtgrwa75vKqSCbmgRpcxk_8eT0uqcC43Vq8JJybJpp9Cyk5tRKHtbuOOT5B1Xvm8GZeOk2WrDA6gVuQNEjM3Vne7A7y4Wvrw3H-l5YszL5F_YyApkeqXz4n2neK1rTTnMnpZ8SrfHyF3PlXtCcAGUJEtslqtA45CAoA2mutOhyEjnbPfmTVg",
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
