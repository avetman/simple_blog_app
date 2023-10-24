import PostList from "../components/Post/PostList.jsx";


const AllPostsScreen = ({allPosts}) => {

    return(
       <PostList allPosts={allPosts} />
    )
}

export default AllPostsScreen

