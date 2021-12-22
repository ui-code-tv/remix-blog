import {Link,useLoaderData} from 'remix'
import blogStyles from "~/styles/blog.css";

export function links() {
  return [{ rel: "stylesheet", href: blogStyles }];
}

export let loader= ({params}) => {

  const post =  [
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
                ].find((p)=> p.id === Number(params.PostId))

                if (!post) throw Error("No posts found")
                const data = {...post}
                return data


}


export default function GetPost() {
  const post= useLoaderData()
return (
  <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
  </>
)

}