import useToken from "../hooks/useToken"
import { request } from "../requester"

const baseUrl = "http://localhost:3030/data/courses"

export const useCreateCourse = () => {
  const {options} = useToken()
  const create = (gameData) => {
    request("POST",baseUrl,gameData,options)
  }
  return {create}
}