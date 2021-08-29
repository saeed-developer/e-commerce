import { useGetcommentsQuery } from '../../../services/shadnakapi'
    const CommentSection = ({id}) => {
    const {data , isSuccess,isError,refetch} = useGetcommentsQuery({key : 'productId' , id : id})   
    isError && refetch()
    const commentsNumber = useGetcommentsQuery({key : 'count' , id : id})
    commentsNumber.isError && commentsNumber.refetch()
    console.log(data)
    return (
        <>
         <div className = 'product-page-comment-section-container'>
            {commentsNumber.isSuccess && <p > نظرات ({commentsNumber.data}) </p>}
            <hr style = {{border : '1px solid black' , width : '100%'}} />
            {isSuccess && data.map((data)=>{
                let index;
                if (data.date.includes('T') ){
                    index = data.date.indexOf('T')
                } 
              return ( 
                  <div className = "product-page-comment-container">
                      <p  >{data.name}</p>
                       
                      <p >{data.date.slice(0,index)}</p>
                      <div style = {{width:'100%'}}></div>
                     <p >{
                     data.content
                     }</p> 
                     <p>پاسخ</p>
                      
                  </div>
              )
            })
            }
        </div>
        </>
    )
}

export default CommentSection
