import React from 'react'
import RelatedPostCard from '../../components/RelatedPostCard'
import {getRelatedPosts , getCategoris} from '../../services'

const RelatedPosts = ({data}) => {
   
    return(
        <div className=' text-white text-xl'>{
          data.map((post , index) => (
            <div key={index}>
              <RelatedPostCard post = {post}/>
            </div>
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