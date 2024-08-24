import { useEffect, useState } from "react";
import { getComments } from "../../services/operations/CommentApi";

const useFetchComment = (blogId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(blogId);
        setComments(response);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [blogId]);

  return comments;
};

export default useFetchComment;
