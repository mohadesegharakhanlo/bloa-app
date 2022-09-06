import {request , gql , GraphQLClient} from 'graphql-request'

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
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
    const result = await request(graphqlAPI , query);
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
   
    const query = gql `
        query GetSimilarPosts($slug : String! , $categories : [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3
              ) {
                title
                featuredImage {
                  url
                }
                createdAt
                slug
              }
        }
    `
    const result = await request(graphqlAPI , query);
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