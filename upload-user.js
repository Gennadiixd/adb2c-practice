import { Client } from "@microsoft/microsoft-graph-client";
import { getToken } from "./get-token.js";

const tenantName = "sandboxfortest";
const { access_token: accessToken } = await getToken();

const client = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => accessToken,
  },
});

export const uploadUser = async (user) => {
  try {
    await client.api("users").create(user);
  } catch (error) {
    console.log(error);
  }
};
