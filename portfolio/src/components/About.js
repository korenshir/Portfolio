import react from 'react'
import React,{useEffect,useState} from 'react'
import sanityClient from "./../client.js";
import BlockContent from "@sanity/block-content-to-react";
import background from "./../backgrounds/IMG-0028.JPG";

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
    if(!author) return <div>Loading..</div>
    return (
   <main className="relative">
       <img src={background} height='50%' className="absolute w-full"/>
       <div className="p-10 lg:pt-48 container mx-auto relative">
         <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
             <img src={author.photoLink} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
             <div className="text-lg flex flex-col justufy-center">
                 <h1 className="cursive text-6xl text-green-300 mb-4">
                     Hey there, I'm{" "}
                     <span className="text-green-100">{author.name}
                     </span>
                 </h1>
                 <div className="prose lg:prose-xl text-white">
                    <BlockContent blocks={author.bio} projectId="g520sv3c" dataset="production"/>
                 </div>
             </div>
             </section>  
       </div>
   </main>
    );
}