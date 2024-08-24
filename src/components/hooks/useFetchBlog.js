import React, { useEffect, useState } from 'react'
import { getBlogById } from '../../services/operations/BlogApi';

const useFetchBlog = (id) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
      async function fetchBlog() {
        try {
          const fetchedBlog = await getBlogById(id);
          setBlog(fetchedBlog);
        //   console.log(fetchedBlog);
        } catch (error) {
          console.error("Failed to fetch blog", error);
        }
      }
      fetchBlog();
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return blog;

}

export default useFetchBlog;