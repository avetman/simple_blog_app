import { List, Layout, Avatar } from 'antd';
import {Link} from 'react-router-dom';

const PostList = ({allPosts}) => {
    return (
       <Layout style={{ padding: '1rem' }}>
           <List
               dataSource={allPosts}
               renderItem={(item) => (
                   <List.Item key={item.id}>
                       <List.Item.Meta
                           avatar={<Avatar src={item.categories} />}
                           title={ <Link to={`/posts/${item.id}`}>{item.title}</Link>}
                           description={item.title}
                       />
                       <div>{item.categories}</div>
                   </List.Item>
               )}
           />

       </Layout>

    );
}

export default PostList;
