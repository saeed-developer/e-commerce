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
      baseUrl: process.env.REACT_APP_URL,
    }),
    endpoints(build) {
      return {
        getcomments: build.query({ query: (key) => ({ url: '/comments', method: 'get' ,params:{key : key.key , id : key.id}
      })}),
        getproduct:build.query({query:(id)=>({url:'/products',method:'get', params:{id:id}})
        }),
      geturl:build.query({query:(value)=>({url:'/get-url',method:'get',params:{key:value}}) }),
      getcities : build.query({query: (value)=>({url:'/get-cities',method:'get' ,params:{key : value.key,province : value.province}})}),
      getcontent : build.query({query : (value)=>({url:'/get-content',method:'get',params:{key:value.key,province:value.province}})})
      }
    },
  })
export const { useGetcommentsQuery,useGetproductQuery,useGeturlQuery,useGetcitiesQuery,useGetcontentQuery} = shadnakApi

