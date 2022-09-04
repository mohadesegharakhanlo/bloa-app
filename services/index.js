import {request , gql} from 'graphql-request'


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

}