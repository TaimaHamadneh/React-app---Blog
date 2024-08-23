import BlogList from "./BlogList";
import useFetch from "./useFetch"
const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

 

  return (
    <div className="home">
         { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 // at first blogs = null ( here:   const [blogs, setBlogs] = useState(null) )
 // then we useefftect to get data from server
 // setBlogs(data); update blogs values 

export default Home;