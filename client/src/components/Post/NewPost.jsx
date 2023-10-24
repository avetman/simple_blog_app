import {Layout, Button, Form, Input, message} from "antd";
import {useNavigate} from "react-router-dom";
import {useAddNewPostMutation} from "../../store/Blog/apiSlice.js";
import {useDispatch} from "react-redux";
import {setNewPostCreated} from "../../store/Blog/postMutationSlice.js";

const { TextArea } = Input;



const NewPost = () => {
    const navigation = useNavigate();
    const [addNewPost, {isLoading}] = useAddNewPostMutation();
    const dispatch = useDispatch();
    const onFinish = async (values) => {
       try{
           await addNewPost(values);
           message.success('New post created:');
           dispatch(setNewPostCreated(true))
           navigation('/')
           console.log('New post created:');
       }catch(error){
           message.error('Error adding new post:', error);
           console.error('Error adding new post:', error);
       }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleClick = () => {
        navigation('/')
    }

    return (

                <Layout className="container">
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ width:'100%',maxWidth: 800, margin: "1rem auto" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please write Title!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Categories"
                            name="category"
                            rules={[{ required: true, message: 'Please write category' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="TextArea"
                            name="content"
                            rules={[{ required: true, message: 'Please write your Post' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button  htmlType="submit" loading={isLoading}>
                                Save
                            </Button>
                            <Button onClick={handleClick}>
                                Cancel
                            </Button>
                        </Form.Item>


                    </Form>
                </Layout>



    )
}

export default NewPost;
