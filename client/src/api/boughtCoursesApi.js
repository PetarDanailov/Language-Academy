import useToken from "../hooks/useToken"
import { request } from "../requester"

const baseUrl = "http://localhost:3030/data/boughtCourses"
export const useBuyCourse = () => {
  const {options} = useToken()
  const buyCourse = async (boughtCourseData) => {
    await request("POST", baseUrl,boughtCourseData,options);
  }
  return {buyCourse};
}
export const useBoughtCourses = () => {
  const getAll = async (userId) => {
    const query = `?where=${encodeURIComponent(`_ownerId="${userId}"`)}`
    const result = await request("GET",`${baseUrl}${query}`)
    return result;
  }
  return {getAll};
}