
import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method,data ,params}) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data,params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }
export const shadnakApi =  createApi({
    baseQuery: axiosBaseQuery({
      baseUrl: 'http://localhost:3000',
    }),
    endpoints(build) {
      return {
        getshadnakcomments: build.query({ query: () => ({ url: '/comments', method: 'get' }) }),
        postshadnakcomment: build.query({
          query: (id) => ({ url: '/comments', method: 'post' ,params:{id :id}}),
        }),
      }
    },
  })
export const { useGetshadnakcommentsQuery,usePostshadnakcommentQuery } = shadnakApi
