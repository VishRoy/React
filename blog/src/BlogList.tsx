import { Link } from 'react-router-dom';

type Blog = {
  title: string;
  body: string;
  author: string;
  id: number;
};

interface BlogProps {
  blogs: Blog[] | Blog;
  //   handleDelete: (id: number) => void;
}

const BlogList: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <div className="bloglist">
      {Array.isArray(blogs) &&
        blogs.map((blog) => {
          return (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>

                <p> Written by {blog.author}</p>
              </Link>

              {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
            </div>
          );
        })}
    </div>
  );
};

export default BlogList;

// const BlogList: React.FC<BlogProps> = ({ blogs }) => {
//   return (
//     <div className="bloglist">
//       {blogs.map((blog) => {
//         return (
//           <div className="blog-preview" key={blog.id}>
//             <Link to={`/blogs/${blog.id}`}>
//               <h2>{blog.title}</h2>
//               <p> Written by {blog.author}</p>
//             </Link>
//             {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default BlogList;
