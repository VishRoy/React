import BlogList from './BlogList';
import useFetch from './useFetch';

// interface Blog {
//   title: string;
//   body: string;
//   author: string;
//   id: number;
// }

const Home: React.FC = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {/* {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />} */}
    </div>
  );
};

export default Home;

//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState(null);

//   const handleDelete = (id: number): void => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };

//   useEffect(() => {
//     fetch('http://localhost:8000/blogs')
//       .then((res) => {
//         if (!res.ok) {
//           throw Error('could not fetch the data for the resource');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data);
//         setIsLoading(false);
//         setError(null);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err.message);
//       });
//   }, []);
