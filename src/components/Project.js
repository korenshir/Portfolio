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
     <main className="min-h-screen p-12" sr>

         <section className="container mx-auto" >
             <h1 className="text-5xl flex justify-center cursive" style={{color:'black'}}> My Projects</h1>
             <br/>
             <section className="grid grid cols-2 gap 8">
             {projectData && projectData.map((project,index)=>( 
                <article className="relative rounded-lg p-16" style={{borderColor:'black'}}>
                    <div style={{float:"left"}}>
                    {project.title=='Second Chance' ? 
                    <img src={project.photoLink}  style={{position:'absolute',right:200,marginTop:"20px",height:'200px'}}></img> :
                    <img src={project.photoLink}  style={{position:'absolute',right:100,marginTop:"20px",height:'180px'}}></img>
             }
                    <h3 className="text-black text-3xl font-bold mb-2 hover:text-red-700">
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
                        <strong className="font-bold">Written in</strong>:{" "}
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
                        <p className="my-6 text-lg text-grey-700 leading-relaxed" style={{width:'80%'}}>{project.description}
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
