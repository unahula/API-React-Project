import {React} from 'react';
// import image from './image.jpg'; // Adjust the path as needed
import myPic from './mypic.jpg'

function Post() {
  return (
    <>
      <h1>Posting the documents ...</h1>
      <img src= {myPic} alt="IMAGE Displaying...." width= "300px"  ></img>
    </>
  );
}
export default Post;