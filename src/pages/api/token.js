import { getToken } from "../../server/petfinder-auth";

export default async function handler(req, res) {
  try {
    const token = await getToken();
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error.");
  }
}
