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
export const useCourses = () => {
  const getAll = async () => {
    const result = await request("GET", baseUrl)
    return result
  }
  return {getAll};
}
export const useCourse = () => {
  const getOne = async (courseId) => {
    const result = await request("GET",`${baseUrl}/${courseId}`)
    return result;
  }
  return {getOne}
}