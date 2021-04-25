import React,{useEffect,useState} from 'react'
import sanityClient from "./../client.js"

export default function Project() {
    const [projectData,setProjectData]= React.useState(null);
    useEffect(()=>
    {
        sanityClient.fetch(`*[_type =="project"]{
        title,
        date,
        languages,
        description,
        link, 
        }`).then((data)=>setProjectData(data)).catch(console.error);
    },[])

    return (
     <main className="bg-green-100 min-h-screen p-12">
         <section className="container mx-auto">
             <h1 className="text-5xl flex justify-center cursive"> My Projects
             </h1>
             <h2></h2>
             <section></section>
         </section>
     </main>
    );
}