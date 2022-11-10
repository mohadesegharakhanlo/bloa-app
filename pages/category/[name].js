import React from 'react'
import {getRelatedPosts , getPosts, getCategoris} from '../../services'

const RelatedPosts = ({data}) => {
   
    return(
        <div className=' text-white text-xl'>{
          data.map((post) => (
            <p>{post.title}</p>
          ))
        }</div>
    )
}

export default RelatedPosts

export async function getStaticProps ({params}) {
    const data = await getRelatedPosts(params.name);
  
    return {
      props: {
        data,
        
      },
    };
  
  }
  
export async function getStaticPaths () {
    const categories = await getCategoris();
    
    return {
      paths : categories.map((category) => ({params : {name :category.name}})),
      fallback: false,
    };
}