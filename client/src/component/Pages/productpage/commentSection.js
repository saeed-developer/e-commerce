import { useGetcommentsQuery } from '../../../services/shadnakapi'
    const CommentSection = ({id}) => {
    const {data , isSuccess,isError,refetch} = useGetcommentsQuery({key : 'productId' , id : id})   
    isError && refetch()
    const commentsNumber = useGetcommentsQuery({key : 'count' , id : id})
    commentsNumber.isError && commentsNumber.refetch()
    console.log(data)
    return (
        <>
         <div className = 'product-page-comment-container'>
            {commentsNumber.isSuccess && <p > نظرات ({commentsNumber.data}) </p>}
            <hr />
        </div>
        </>
    )
}

export default CommentSection
