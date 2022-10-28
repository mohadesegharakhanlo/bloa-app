import React from 'react'

import PostDetail from '../../components/PostDetail'
import Author from '../../components/Author'
import Comments from '../../components/Comments'
import CommentForm from '../../components/CommentForm'
import PostWidget from '../../components/PostWidget'
import Categories from '../../components/Categories'

import  {getPosts , getPostDetails} from '../../services'



const PostDetails = ({post}) => {
 
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 mx-10'>
        <div className='col-span-1 lg:col-span-8 color-white'>
          <PostDetail post={post}/>
          <Author author={post.author}/>
          <CommentForm slug={post.slug}/>
          <Comments slug={post.slug}/>
        </div>
        <div className='col-span-1 lg:col-span-4 top-8'>
          <div className='relative lg:sticky '> 
            <PostWidget slug={post.slug} categories={post.categories.slug}/>
            <Categories/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps ({params}) {
  const data = await getPostDetails(params.slug);

  return {
    props: {
      post: data,
    },
  };

}

export async function getStaticPaths () {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}