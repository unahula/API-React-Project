import {React} from 'react';
// import image from './image.jpg'; // Adjust the path as needed
//import myPic from '/mypic.jpg'
import myPic from '../pages/mypic.jpg';
function Post() {
  //const myPic = '../pages/mypic.jpg';
  return (
    
    <>
   
      <h1>Posting the documents ...</h1>
      <img src= {myPic} alt="IMAGE is not displaying...." width= "300px"  ></img>
    </>
  );
}
export default Post;