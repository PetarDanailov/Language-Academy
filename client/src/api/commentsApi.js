import useToken from "../hooks/useToken";
import { request } from "../requester";

const baseUrl = "http://localhost:3030/data/comments";

export const useComments = () => {
  const getAllComments = async (courseId) => {
    const query = `?where=${encodeURIComponent(`courseId="${courseId}"`)}`;
    const result = await request("GET",`${baseUrl}${query}`);
    return result;
  }
  return {getAllComments};
}
export const usePostComment = () => {
  const {options} = useToken(); 
  const postComment = async (comment) => {
    const result = await request("POST", baseUrl,comment,options);
    return result;
  }
  return {postComment};
}
export const useUpdateComment = () => {
  const {options} = useToken();
  const updateComment = async (commentId,commentMessage) =>{
    const result = await request("PATCH",`${baseUrl}/${commentId}`,commentMessage,options)
    return result
  }
  return{updateComment}
}
export const useDeleteComment = () => {
  const {options} = useToken();
  const deleteComment = async(commentId) => {
    await request("DELETE", `${baseUrl}/${commentId}`,null,options); 
  }
  return {deleteComment}
}