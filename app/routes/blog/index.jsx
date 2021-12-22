import {Link,useLoaderData} from 'remix'
import blogStyles from "~/styles/blog.css";

export function links() {
  return [{ rel: "stylesheet", href: blogStyles }];
}

export let loader = () =>{
  return [
           {
                id: 1,  
                title: "First post on Remix ",
                content:"Remix is a great framework...."
            },
            {
                id: 2,  
                title: "Another post about Remix",
                content: "It has very good features...."
            },
            {
                id: 3,  
                title: "Yet another post about remix",
                content: "It has very good features plus more...."
            } 
          ]
} 


export default function Blog() {

  const posts = useLoaderData()

  return (
          <>
            <h2>Our latest posts</h2>
            {
              posts.map(
                (post)=><div className='card' key={post.id}>
                  <Link to={'/blog/posts/'+post.id}>{post.title}</Link>

                </div>
              )
            }
          </>

  )
}