import {Layout, Button, message, Alert} from "antd";
import {useNavigate} from "react-router-dom";


const PostDetail = ({content, title, categories, handleDelete}) => {

    const handleClick = () => {
        navigate('/')
    }

    const navigate = useNavigate();
    return (
        <>
            <Layout>
                <div className="container">
                    <header>
                        <Button type='link' onClick={handleClick}> Back to posts</Button>
                        <Button onClick={handleDelete}>Delete Post</Button>
                    </header>
                </div>
                <main className='container'>
                    <h3>{title}</h3>
                    {/*<div className='categories'>{categories?.map(category => (<span key={category} className='category'>{category},</span>))}</div>*/}
                    <div className='categories'>
                        <span className='category'>{categories}</span>
                </div>
                    <p className='content'>{content}</p>
                </main>

            </Layout>
        </>

    )
}
export default PostDetail;

