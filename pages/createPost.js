import {submitPost} from '../services'

const createPost = () => {
    const handleOnClick = () => {
        let info = {
            title:"test",
            slug:"test-test-test",
            usercontent:"this is content testtttt!!!!!!!",
            excerpt:"excerpt test",
            featuredImage:{url:"jfhg"}
        }

        submitPost(info).then(
            (res) => console.log("creste post res" , res)
        ).catch(
            (err) => console.log("create post err" , err)
        )

    }
  return (
    <div>
        <button onClick={handleOnClick}>
            submit
        </button>
    </div>
  )
}

export default createPost