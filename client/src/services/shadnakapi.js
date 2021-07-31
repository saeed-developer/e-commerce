
import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data })
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
        getshadnak: build.query({ query: () => ({ url: '/comments', method: 'get' }) }),
        postshadnak: build.query({
          query: (name) => ({ url: `/comments/${name}`, method: 'post' }),
        }),
      }
    },
  })
export const { useGetshadnakQuery,usePostshadnakQuery } = shadnakApi
