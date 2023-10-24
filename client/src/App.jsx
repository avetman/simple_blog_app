
import {Layout, Button, Flex} from "antd";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import './App.css'
import AllPostsScreen from "./screens/AllPostsScreen.jsx";
import {useGetAllPostsQuery} from "./store/Blog/apiSlice.js";
import {useSelector} from "react-redux";
import {selectPostDeleted, selectNewPostCreated} from "./store/Blog/postMutationSlice.js";

function App() {
    const postDeleted = useSelector(selectPostDeleted);
    const postCreated = useSelector(selectNewPostCreated)

    const {data: allPosts, refetch} = useGetAllPostsQuery({})


    useEffect(() => {
        if (postCreated || postDeleted) {
            refetch();
        }
    }, [postCreated, postDeleted, refetch]);

    const navigation = useNavigate();
    const handleClick = () => {
        navigation('/posts/new');
    }

  return (
    <>
        <Layout>
            <div className='container'>
                <header>
                    <h1> Simple Blog</h1>
                    <Button onClick={handleClick}>Add New</Button>
                </header>
            </div>
        </Layout>
        <main className='container'>
            <AllPostsScreen allPosts={allPosts}/>
        </main>
    </>
  )
}

export default App
