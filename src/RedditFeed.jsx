import React ,{useEffect,useState} from 'react'
import axios from "axios";

const RedditFeed = () => {
  const [posts,setPosts] = useState([]);
 
  useEffect(() => {
     axios.get("https://www.reddit.com/r/reactjs.json").then((response) => {
      setPosts(response.data.data.children);
     })
     .catch((error) => {
      console.error(error);
     })
     ;
 
  },[])
  return (
    <section className='min-h-screen bg-pinkx-100 p-4 md:p-8'>
        <h1 className='text-3xl font-bold text-center mb-6 text-pink-600'>Posts</h1>
        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto'>
          {posts.map((post,index) => {
            const {title,selftext_html,url,score} = post.data;
        
            return (
              <div className='bg-white rounded-2xl shadow-md p-4 border border-pink-200 hover:shadow-lg transition'>
                <h2 className='text-xl font-semibold text-pink-700 mb-2'>
                  {title}
                </h2>
                <div className='overflow-hidden max-h-60 mb-3 text-sm text-gray-700 break-words'>
                {selftext_html ? (
                  <div className='prose prose-sm max-w-none text-gray-700 mb-3' dangerouslySetInnerHTML={{__html: selftext_html}} />
                ) : ( <p className="text-sm text-gray-500 italic mb-3">
                  No self text available.
                </p>)}
               
                <a href={url} target='_blank' rel='noopener noreffer' className='text-sm text-pink-500 hover:underline hover:text-pink-700' >Visit Post</a>
              <div className='text-sm text-gray-600 mt-2'>
                Score: <span className='font-medium'>{score}</span>
              </div>
              </div>
              </div>
            )
          })}
        </article>
    </section>
  )
}

export default RedditFeed