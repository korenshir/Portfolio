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
        photoLink,
        dataManagement,
        technologies
        }`).then((data)=>setProjectData(data)).catch(console.error);
    },[])

    return (
    <div style={{fontFamily:"QuickSand"}}>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand"></link>
     <main className="bg-green-100 min-h-screen p-12">
         <section className="container mx-auto" >
             <h1 className="text-5xl flex justify-center cursive"> My Projects</h1>
             <br/>
             <section className="grid grid cols-2 gap 8">
             {projectData && projectData.map((project,index)=>( 
                <article className="relative rounded-lg shadow-xl bg-white p-16">
                    <div style={{float:"left"}}>
                    <img src={project.photoLink} width="100px"  style={{position:'absolute',right:150,marginTop:"20px", borderRadius:"10%"}}></img>

                    <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                        <a 
                        href={project.link} 
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        >{project.title}</a>
                    </h3>
                    <div className="text-gray-500 text-xs space-x">
                        <span>
                            <strong className="font-bold">Finished on</strong>:{" "}
                            {new Date(project.date).toLocaleDateString()}{" "}
                        </span>
                        <span>
                        <strong className="font-bold">Languages</strong>:{" "}
                            {project.languages}{" "}
                        </span>
                        <span>
                        <strong className="font-bold">Data Management</strong>:{" "}
                            {project.dataManagement}
                        </span>
                        <br/>
                        <span>
                        <strong className="font-bold">Technologies</strong>:{" "}
                            {project.technologies}
                        </span>
                        <p className="my-6 text-lg text-grey-700 leading-relaxed">{project.description}
                        </p>
                        <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400"
                        >View The Project{" "}
                        <span role="img" aria-label="right pointer"> &#128073;</span>
                        </a>
                    </div>
                    </div>
                </article>
                
                ))}
             </section>
         </section>
     </main>
     </div>

    );
}