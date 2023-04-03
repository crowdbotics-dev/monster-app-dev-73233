import axios from "axios";
import { MONSTER_CONNECTOR_USERNAME, MONSTER_CONNECTOR_PASSWORD } from "react-native-dotenv";
const monsterconnector = axios.create({
  baseURL: "https://youtube.com",
  auth: {
    username: MONSTER_CONNECTOR_USERNAME,
    password: MONSTER_CONNECTOR_PASSWORD
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export const apiService = {};