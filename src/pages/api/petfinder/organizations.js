import axios from "axios";
import { getToken } from "src/server/petfinder-auth";

export default async function handler(req, res) {
  try {
    const access_token = await getToken();
    const response = await axios.get(
      "https://api.petfinder.com/v2/organizations",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
}
