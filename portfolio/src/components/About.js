import react from 'react'
import React,{useEffect,useState} from 'react'
import sanityClient from "./../client.js";
import BlockContent from "@sanity/block-content-to-react";
import background from "./../backgrounds/IMG-1251123.jpg";

export default function About() {
    const [author,setAuthor]= React.useState(null);
    useEffect(()=>
    {
        sanityClient.fetch(`*[_type =="author"]{
        name,
        photoLink,
        bio
        }`).then((data)=>
        setAuthor(data[0])).catch(console.error);
    },[])
    if(!author) return <div style={{fontFamily:"Quicksand"}}>Loading..</div>
    return (
        <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand"></link>
   <main className="relative" style={{fontFamily:"Quicksand"}}>
       <img src={background} height='300px' className="absolute w-full"/>
       <div className="p-20 lg:pt-20 container mx-auto relative">
         <section className="bg-green-700 rounded-lg shadow-2xl lg:flex p-5">
             <img src={author.photoLink} style={{borderRadius:"40%"}}className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
             <div className="text-lg flex flex-col justufy-center">
                 <h1 className="cursive text-6xl text-green-300 mb-4">
                     Hey there, I'm{" "}
                     <span className="text-green-100">{author.name}
                     </span>
                 </h1>
                 <div className="prose lg:prose-xl text-white" style={{fontSize:"16px"}}>
                    <BlockContent blocks={author.bio} projectId="g520sv3c" dataset="production"/>
                 </div>
             </div>
             </section>  
       </div>
   </main>
   </div>
    );
}