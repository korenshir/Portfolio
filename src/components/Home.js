export default function Home() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1 className="cursive" style={{fontSize:"80px"}}>Shir Koren</h1>
          <br/>
          <p>Front End Developer </p>
          <div className="social-links">
            <a href="https://github.com/korenshir" className="github"><i className="bx bxl-github" /></a>
            <a href="mailto:korenshir@gmail.com" className="email"><i className="bx bxs-envelope" /></a>
            <a href="https://www.linkedin.com/in/shir-koren-232a67197" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
        </div>
      </section>
    );
}
