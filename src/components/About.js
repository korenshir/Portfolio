import React,{useEffect} from 'react'
import sanityClient from "./../client.js";
import BlockContent from "@sanity/block-content-to-react";

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
       <div className="p-20 lg:pt-20 container mx-auto relative">
         <section className="lg:flex p-5" style={{borderRadius:"5%"}}>
             <img src={author.photoLink} style={{borderRadius:"40%"}} alt="author image" className="rounded w-22 h-22 lg:w-32 lg:h-32 mr-20 mt-20"/>
             <div className="text-lg flex flex-col justufy-center">
                 <h1 className="cursive text-6xl text-green-900 mb-4">
                     Hey there, I'm{" "}
                     <span className="text-green-700">{author.name}
                     </span>
                 </h1>
                 <div className="prose lg:prose-xl text-black" style={{fontSize:"16px"}}>
                    <BlockContent blocks={author.bio} projectId="g520sv3c" dataset="production"/>
                 </div>
             </div>
             </section>  
       </div>
   </main>
   </div>
    );
}
