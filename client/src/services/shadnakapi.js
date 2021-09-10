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
        postcomment: build.query({
          query: (data) => ({ url: '/comments', method: 'post' ,params:{name:data.name,email:data.email,content:data.content,type:
        data.type,parent_id : data.parentId , product_id :data.productId}}),
        }),
        getproduct:build.query({query:(id)=>({url:'/products',method:'get', params:{id:id}})
        }),
      geturl:build.query({query:(value)=>({url:'/get-url',method:'get',params:{key:value}}) }),
      }
    },
  })
export const { useGetcommentsQuery,usePostcommentQuery ,useGetproductQuery,useGeturlQuery} = shadnakApi

