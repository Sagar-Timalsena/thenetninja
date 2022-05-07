import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Saagar', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Sujan', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Shyam', id: 3 },
    { title: 'My new website', body: 'lorem ipsum...', author: 'Saagar', id: 4 },
  ]);
  const [name, setName] = useState("Saagar");
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() =>{
        console.log('use effect run');
        console.log(name);
    },[]    );
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs From Saagar Timalsena" handleDelete={handleDelete} />            
      <button onclick={() => setName("Saagar")}>Click Me</button>
      <p>{name}</p>
    </div>
  );
}
export default Home;