import useToken from "../hooks/useToken"
import { request } from "../requester"

const baseUrl = "http://localhost:3030/data/courses"

export const useCreateCourse = () => {
  const {options} = useToken()
  const create = async  (gameData) => {
    await request("POST",baseUrl,gameData,options)
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
export const useEditCourse = () => {
  const {options} = useToken()
  const editCourse = async (courseId,courseData) => {
  await request("PUT",`${baseUrl}/${courseId}`,courseData,options)
  }
  return {editCourse}
}
export const useDeleteCourse = () => {
  const {options} = useToken();
  const deleteCourse = async (courseId) =>{
    await request("DELETE", `${baseUrl}/${courseId}`,null,options) 
  }
  return {deleteCourse}
}