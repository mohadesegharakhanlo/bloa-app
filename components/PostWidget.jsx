import React , {useEffect , useState} from 'react'
import {getRecentPosts , getSimilarPosts} from '../services/index'
import moment from 'moment';
import Link from 'next/link';
const PostWidget = ({slug , categories}) => {
    const [relatedPost , setRelatedPost] = useState([]);
    const getData = () => {
        if(slug){
            getSimilarPosts(slug , categories).then(
                res => setRelatedPost(res)
            )
        }else {
            getRecentPosts().then(
                res => setRelatedPost(res)
            )
        }
    }
    useEffect(()=>{
        getData()
    } , [slug])
  return (
    <div className='bg-white p-8 rounded-lg '>
    <h1 className='text-black border-b mb-4 pb-2 text-xl font-bold' dir='rtl'>
        {slug ? 'کتاب های مرتبط' : 'معرفی های اخیر'}
    </h1>
    {
        relatedPost && relatedPost.map((item , index) => (
            <div key={index} className='flex items-center justify-start w-full mb-6 gap-3' dir='rtl'>
                <div>
                    <img 
                        src={item.featuredImage.url}
                        height='60px'
                        width='60px'
                        className='rounded-full'
                    />
                </div>
                <div className=' text-gray-500'>
                    
                    <Link className='text-md' href={`/post/${item.slug}`}>{item.title}</Link>
                    <p className='mt-1 text-xs'>{moment(item.createdAt).format('MMM DD, YYYY')}</p>
                </div>
                
            </div>
        ))
    }
    

    
    </div>
  )
}

export default PostWidget