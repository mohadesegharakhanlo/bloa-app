import {GraphQLClient , gql , request} from 'graphql-request'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }
export default async function handler(req, res) {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQ4NjY3NTEsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w3a216MmoyMGx6MDAxdXA2OW9jMTN4bC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWNlNGFhYWQtZGJlYS00YjE4LThhM2MtZDMzYmJkNGM1MDQ1IiwianRpIjoiY2w4dHVvZmM1NHZ5ZDAxdW45ajc3OTF2aSJ9.Lu7JaqVA98jugD6NP66aN7GBNwHFViLdusvfnyRdrkAA5dycc4FP47-hfRfgJBm5_DI4TQWbt0BTjMIDhkg_fMiS2S87GNblEQASfLQVtWHmENdGlJ2YvNNu7A1SHvP_7RtiFHZ4v-3rVMmAQyOw7oftBAm_6Jsni3HX3B-ibEZyIG9F2n1h7F5taWdBRuHQotwS7W6XihxWv7KXA3pbwXLD9Ntxn7PGYV_LT56g-3-E2Ri_hCAr8C-NdTstMtbp-iyoAM_6eVdoTX3kJ5HSHIwahdRDntaTX4IgCMZOfM2KwDrPw0OxuFYwGaoXqWBg6ql1hNxJDLiqza52t0b9Z81EvihqJX7m94ftJUWASd04AqQYYlXhxqALKsxon8J-3Q5rxK9NjVIJ45V3uc6aRxT6UtRITeQC1rS8Qo3_VXCBEWaiLMqMdss2UzqMfL4qCd3BpRJ5-QRQKCl0Cb98ea-uA269U-MnP4u2OB9x-aBX3s_JIfCGkAIqfRloEZ-33qnMoH8zoZghcpQQLBt5TcjznJbBaBMdWqFgMT8NvAZvsOm52wCyQCklo1y8wdTJNhwG0j8PXD7BKrPq3SwZLcULNip18eeuXtO_bavIqEajRCzj5ktMW8ZLc7kVdX5Lv5YdGRgwbzP7tBgIeTOCozfxHyeNnMj68IbKtQENpSU";
  const graphQlClient = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master' , 
    {
      headers : {
        authorization :`Bearer ${token}`
      }
    }
  );
  const query = gql`
    mutation CreateComment($name : String! , $email : String! , $slug : String! , $comment : String!) {
      createComment (data : {name : $name , email : $email , comment : $comment , post :{connect : {slug : $slug}} }
        ) {id}
    }
  `
  try{
    const result = await graphQlClient.request(query , req.body)
    return res.status(200).send(result);
  } catch(error){
    console.log(error);
    return res.status(500).send(error);
  }
    
    
  
}
