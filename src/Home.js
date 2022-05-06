import {useState} from 'react';
import {BlogList} from './BlogList';

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'Blog 1', body: 'Body 1',author: 'Author 1',id: 1},
        {title: 'Blog 2', body: 'Body 2',author: 'Author 2',id: 2},
        {title: 'Blog 3', body: 'Body 3',author: 'Author 3',id: 3},
    ]);

    return ( 
        <div className="home">
            <BlogList  blogs={blogs} title="All Blogs !"/>
         </div> 
     );
}

export default Home;
