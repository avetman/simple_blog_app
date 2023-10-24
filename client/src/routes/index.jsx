import {createBrowserRouter} from "react-router-dom";
import AllPostsScreen from "../screens/AllPostsScreen.jsx";
import PostDetailsScreen from "../screens/PostDetailsScreen.jsx";
import NewPostScreen from "../screens/NewPostScreen.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'posts/:id',
        element: <PostDetailsScreen/>
    },
    {
        path: 'posts/new',
        element: <NewPostScreen />
    }
])

export default router;
