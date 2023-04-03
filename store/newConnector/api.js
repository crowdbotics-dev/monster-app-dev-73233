import axios from "axios"
import {
  NEW_CONNECTOR86876_USERNAME,
  NEW_CONNECTOR86876_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://youtube.com",
  auth: {
    username: NEW_CONNECTOR86876_USERNAME,
    password: NEW_CONNECTOR86876_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
