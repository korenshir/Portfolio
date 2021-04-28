import React, { useEffect } from 'react'
import sanityClient from "./../client.js";
import BlockContent from "@sanity/block-content-to-react";
export default function About() {
    const [author, setAuthor] = React.useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type =="author"]{
        name,
        photoLink,
        bio
        }`).then((data) =>
            setAuthor(data[0])).catch(console.error);
    }, [])
    if (!author) return <div style={{ fontFamily: "Quicksand" }}>Loading..</div>
    return (
        <div>
            <main>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={author.photoLink} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>{author.name}</h3>
                                <p className="fst-italic">
                                <div className="prose lg:prose-xl text-black" style={{ fontSize: "16px" }}>
                                        <BlockContent blocks={author.bio} projectId="g520sv3c" dataset="production" />
                                    </div>                                  </p>
                                <p>
                                </p>
                            </div>
                            </div>
                          
                    </div>
                </section>
            </main>
        </div>
    );
}
