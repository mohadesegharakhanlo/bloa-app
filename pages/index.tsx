import type { NextPage } from 'next'
import Head from 'next/head'
import {getPosts} from '../services/index'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'
import FeaturedPosts from '../components/FeaturedPosts'

const Home = ({posts}) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post , index) => (
              <PostCard post={post.node} key={index}/>
            ))
          }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8 text-white'>
          <PostWidget/>
          <Categories/>

          </div>
        </div>

      </div>
    </div>
  )
}


export async function getStaticProps() {
  const posts = ( await getPosts() ) || []

  return {
    props :{posts}
  }
}

export default Home
