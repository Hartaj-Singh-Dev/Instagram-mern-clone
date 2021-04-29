import {React ,useState,Fragment, useEffect}from "react";
import '../Styles/Home.css'
import {NavLink} from 'react-router-dom';
import PostCard from "./PostCard";
const Home = () => {
  const [postData, setpostData] = useState([])
  const GetPosts =  ()=>{
       fetch("http://localhost:8000/getPost",{
        credentials:'include',
        method:'GET',
        headers:{
          "Content-type":'application/json'
        },
      }).then(function(resp){
      return resp.json()
      }).then(function(data){const post = data
        console.log(post.posts);
        setpostData(post.posts)
        console.log(postData);
      }).catch((err)=>{console.log(err);})
  }
  useEffect(()=>{
    GetPosts()
  }, [])
   return (
    <>
      <div className="homePage">
        <div className="centerPosts">
          { postData.map(item=>{
            return(
              <PostCard avatarSrc='' userName={item.Postby.name} imageUrl={item.photo} postCaption={item.body} />
            )
          })}
        {/* <PostCard avatarSrc='' userName='thehartajsingh' imageUrl='https://images.unsplash.com/photo-1595867190173-8b8c50f9473b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' postCaption='hvhievbjibfhkvhegfvyifeuivububwu' />
        <PostCard avatarSrc='' userName='thehartajsingh' imageUrl='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' postCaption='hvhievbjibfhkvhegfvyifeuivububwu' />
        <PostCard avatarSrc='' userName='thehartajsingh' imageUrl='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' postCaption='hvhievbjibfhkvhegfvyifeuivububwu' />
        <PostCard avatarSrc='' userName='thehartajsingh' imageUrl='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80' postCaption='hvhievbjibfhkvhegfvyifeuivububwu' />
        <PostCard avatarSrc='' userName='thehartajsingh' imageUrl='https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' postCaption='hvhievbjibfhkvhegfvyifeuivububwu' /> */}
        </div>
      </div>

    </>
  );
};

export default Home;
