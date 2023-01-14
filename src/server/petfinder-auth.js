import axios from "axios";

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

let auth_data = undefined;

export async function getToken() {
  if (auth_data !== undefined) {
    console.log("Active token found in cache.");
  } else {
    console.log("New token being fetched.");
    try {
      const response = await axios.post(
        "https://api.petfinder.com/v2/oauth2/token",
        `grant_type=client_credentials&client_id=${api_key}&client_secret=${api_secret}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      auth_data = response.data;
    } catch (err) {
      throw "Could not fetch token";
    }
  }
  return auth_data.access_token;
}

export function expireToken() {
  auth_data = undefined;
}
