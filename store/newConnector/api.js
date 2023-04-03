import axios from "axios"
import {
  NEW_CONNECTOR8676534_USERNAME,
  NEW_CONNECTOR8676534_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: NEW_CONNECTOR8676534_USERNAME,
    password: NEW_CONNECTOR8676534_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
