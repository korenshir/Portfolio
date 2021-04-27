import React,{useEffect} from 'react'
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

        <section id="portfolio" className="portfolio section-bg">
                     <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand"></link>

        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
       {projectData && projectData.map((project,index)=>( 
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={project.photoLink} className="img-fluid" alt="" href={project.link} />
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
               
                  <div className="text-gray-500 text-xs space-x">
                        <span>
                             <strong className="font-bold">Finished on</strong>:{" "}
                            {new Date(project.date).toLocaleDateString()}{" "}
                         </span>
                         <br/>
                         <span>
                         <strong className="font-bold">Written in</strong>:{" "}
                             {project.languages}{" "}
                         </span>
                         <br/>
                         <span>
                         <strong className="font-bold">Data Management</strong>:{" "}
                             {project.dataManagement}
                         </span>
                         <br/>
                         <span>
                         <strong className="font-bold">Technologies</strong>:{" "}
                             {project.technologies}
                         </span>
                         </div>
                  <div className="portfolio-links">
                    <a href={project.link} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                  </div>
                </div>
              </div>
            </div>
           ))}          
          </div>
        </div>
      </section>

    );
}
