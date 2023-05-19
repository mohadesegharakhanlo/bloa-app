import { gql, GraphQLClient } from "graphql-request";
import bcryptjs from "bcryptjs";
import { Jwt } from "jsonwebtoken";

export default async function handler(req, res) {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjgwMTQ2NTMsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w3a216MmoyMGx6MDAxdXA2OW9jMTN4bC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDMxZDdjYTEtMzNkZi00N2JjLWIxNDItOWJjZWQwNjU4NDlhIiwianRpIjoiY2xhOXd1dzRqMmxrMDAxdW1iaDZkNGtrbSJ9.HXPs-v7YCfqInlB0HF5u90sAol8eYT4M7hhbQMBPugnyIGYJ16DSNTa51wkirvVlNBC6PFCmolFcHD2qqnGmj26xRnIk0vCCsa-SHv0yHRrw2gljw23BqZc6CtEOGm_kuVIt7ibEqoJJztzQhzuNhkziBlPVxwW5J5VzwdogVrCSOuLWKfB9bcZOS0Ts-N8ueKihGTlO9wmglCLZgbY5ZDTFXr-QINChvBrAtg_R0icHeoEtErkc0O7RX_MwqPEPUJeCkVkqzB-5Qhkpp_JZNIqG5XS_1BCaMW4UQPJ7QFIMqendjXHeFg2GkMWDVK1adH0YO2KNTz7WQY0VfMR0TGh72xPyKTUHDExKQYEOm9cmN9-ZB-pj3Dj3Mcbn3uImWb7o0KbcMCCtXgF2Rx26ZQc7tw3IoIYMplY0n_TD5dgaSu_aVwZIOS8G5KE5-0rSeH_fKPgqnX_oDuooP8Aj4oExkdezW3aREhPZXi_JPsx1BTv6N2TAd-QwMpFwLCbVku5tZj_kLGz9ax8z1z0q7RbLEjO3wwDhw6VWggD-9gxVJuhe1WwRWk9s6I1WQ8pyIzqVDZPZgQl64KjVFe2rrDk9_Se-GeQbvAOxYrILpzxQbXTdJYR1ExnhCCcuBT2-Jo_FKh9WXE-IQmVwTtA7XWqQaIk3nK_lATDQ7i0Zgnc";
  const client = new GraphQLClient(
    "https://api-us-west-2.hygraph.com/v2/cl7kmz2j20lz001up69oc13xl/master",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const CreateNextUserMutation = gql`
  mutation CreateNextUsers($firstName:String! , $lastName:String! , $password:String! , email:String!) {
    createNextUsers(data:{firstName:$firstName , lastName:$lastName , password:$password , email:$email}) {
      id
    }
  }
`;
 // const { email, firstName, lastName, password } = req.body;

  if (!email || !password || !lastName || !firstName) {
    res.status(400).end();
  }

  // const hashedPassword = await bcryptjs.hash(password, 8);
  // const userData = {
  //   email,
  //   password: hashedPassword,
  //   firstName,
  //   lastName,
  // };
  const response = await client.request(CreateNextUserMutation, req.body);
  // if (!response?.CreateNextUser?.id) {
  //   res.status(500);
  // }
  return res.status(200).send(response);
}
