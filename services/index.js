import {request , gql , GraphQLClient} from 'graphql-request'
import server from '../config'
const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );
    const query = gql `
        query MyQuery {
            postsConnection {
            edges {
                node {
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                excerpt
                featuredImage {
                    url
                }
                slug
                title
                categories {
                    name
                    slug
                }
                }
            }
            }
        }
    `
    const result = await graphQLClient.request(query)
    return result.postsConnection.edges

};


export const getRecentPosts = async () => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );
    const query = gql`
        query LastPost() {
            posts(
                orderBy : createdAt_ASC
                last:3
            ) {
                title
                slug
                createdAt
                featuredImage{
                    url
                }
            }
        }
      
    `;
    const result = await graphQLClient.request(query)
  
    return result.posts;
};

export const getSimilarPosts = async (slug , categories) => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );
    const query = gql `
        query GetSimilarPosts($slug : String! , $categories : [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3
                ){
                    title
                    featuredImage {
                    url
                    }
                    createdAt
                    slug
                }
        }
    `;
    const result = await graphQLClient.request(query , {slug , categories});
    return result.posts;
};


export const getCategoris = async () => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );
    const query = gql `
        query MyQuery {
            categories {
                name
                slug
            }
        }
    
    `
    const result = await graphQLClient.request(query)
    return result.categories;
}

export const getPostDetails = async (slug) => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );
    const query = gql`
        query getPostDetails($slug : String!) {
            post(where : {slug : $slug}){
                title
                excerpt
                featuredImage {
                    url
                }
                author {
                    name
                    bio
                    photo{
                        url
                    }
                }
                createdAt
                slug
                content{
                    raw
                }
                categories{
                    name
                    slug
                }
            }
        }
    
    `
    const result = await graphQLClient.request(query , {slug})
    return result.post
}

export const submitComment = async (obj) => {
    
    const result = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(obj),
    });
  
    return result.json();
};

export const signUp = async (userData) => {
    const result = await fetch('/api/auth/signup' , {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(userData)
    });
    
    return result;
}

export const getFeaturedPosts = async () => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );

    const query = gql`
        query GetFeaturedPosts() {
            posts(where : {featuredPost : true}) {
                author {
                    name
                    photo {
                        url
                    }
                }
                featuredImage {
                    url
                }
                slug
                createdAt
                title
            }
    }
    `
    const result = await graphQLClient.request(query)
    return result.posts

}


export const getRelatedPosts = async (name) => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );
    const query = gql`
        query GetRelatedPosts($name : String!){
            posts(where: {categories_some: {name_contains: $name}}) {
                title
                slug
                excerpt
                featuredImage {
                    url
                }
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
            }
        }
    
    `
    const result = await graphQLClient.request(query , {name})
    return result.posts
}

export const getComments = async (slug) => {
    const graphQLClient = new GraphQLClient(
        'https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master'
    );

    const query = gql`
        query MyQuery($slug : String!){
            comments(where: {post: {slug: $slug}}) {
                comment
                createdAt
                name
            }
        }
    
    `
    const result = await graphQLClient.request(query , {slug})
    return result.comments

}