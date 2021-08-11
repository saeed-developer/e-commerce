
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
        getcomments: build.query({ query: (id) => ({ url: '/comments', method: 'get' ,params:{id:id}})}),
        postcomment: build.query({
          query: (id) => ({ url: '/comments', method: 'post' ,params:{id :id}}),
        }),
        getproduct:build.query({query:(id)=>({url:'/products',method:'get', params:{id:id}})
        }),
      //  getproductimage:build.query({query:(id)=>({url:'/productimage',method:'get',params:{id:id}}) }),
      }
    },
  })
export const { useGetcommentsQuery,usePostcommentQuery ,useGetproductQuery} = shadnakApi
//first I decided to use redux for geting image because of caching advantage but it took time to change binary to base64 and actually I didn't 
//find good method to do it.
