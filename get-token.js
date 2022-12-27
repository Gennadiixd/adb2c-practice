import fetch from "isomorphic-fetch";

const grant_type = "client_credentials";
const resource = "https://graph.microsoft.com";

const client_id = "9433f7b5-4b7b-462a-b714-7358d884c1e0";
const client_secret = "ulR8Q~dhezjfpxiJO4YnlyX2VSIa.N5NjZ5WicX6";
const tenant_id = "f55ea5c6-1893-41f2-b3f0-78ba9d7f50f4";

// const client_id = "18d4a173-3c3c-4dfa-88c8-f8f0aa1ed9cc";
// const client_secret = "EoA8Q~EayVLTH40-SSFNMOn80nhZDhftHOG0mc-6";
// const tenant_id = "f55ea5c6-1893-41f2-b3f0-78ba9d7f50f4";

const body = new URLSearchParams();
body.append("grant_type", grant_type);
body.append("client_id", client_id);
body.append("client_secret", client_secret);
body.append("resource", resource);

export const getToken = async () => {
  const response = await fetch(
    `https://login.microsoft.com/${tenant_id}/oauth2/token`,
    {
      method: "POST",
      body,
    }
  );

  const data = await response.json();

  return data;
};
