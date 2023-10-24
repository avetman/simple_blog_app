import PostDetail from "../components/Post/PostDetail.jsx";
import {useParams} from "react-router-dom";
import {useGetPostByIdQuery, useDeletePostMutation, useGetAllPostsQuery } from "../store/Blog/apiSlice.js";
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import {setPostDeleted} from "../store/Blog/postMutationSlice.js";
import {useDispatch} from "react-redux";

const PostDetailsScreen = () => {

    const {id} = useParams();
    const {data, isLoading, isError} = useGetPostByIdQuery(id);
    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleDelete = async () => {
        try {
            const response = await deletePost(id);
            if (response.data && response.data.message) {
                message.success(response.data.message);
                dispatch(setPostDeleted(true));
                navigate('/')
            } else {
                message.error("Error deleting post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);

        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading post details</div>;
    }
    return (
       <PostDetail
           content={data.content}
           categories={data.categories}
           title={data.title}
           handleDelete={handleDelete}
       />
    )
}

export default PostDetailsScreen;
