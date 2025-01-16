import './projects.css';
import proj1_abstract from './abstractproj1.pdf';

function Projects() {
    return (
        <>
            <h1 id="projtitle">Projects</h1>

            <div className="project-container">
                <h3 className="projName">
                    Exploring Cognitive Bioplausibility of Computational Neuroscience Models
                </h3>
                <h4 className="projDate">July 2022 - September 2023</h4>
                <p className="projDescription">
                    I began this project in high school to explore the realm of computational neuroscience.
                    Mentored by a graduate student at MIT, I explored over 15 different models and honed in 
                    on machine learning and bio-circuit models. This was presented at the Polygence Symposium 
                    in September 2023. Feel free to email me at krb2179@columbia.edu for the full project.
                </p>
                <a href={proj1_abstract} target="_blank" rel="noopener noreferrer">View Abstract (PDF)</a>
            </div>

            {/* Add more projects in the same format */}
            <div className="project-container">
                <h3 className="projName">
                    Next Project Title Here
                </h3>
                <h4 className="projDate">Start Date - End Date</h4>
                <p className="projDescription">
                    Brief description of this project goes here. Highlight key outcomes, skills gained, or technologies used.
                </p>
                <a href="#">View Project (Link or PDF)</a>
            </div>
        </>
    );
}

export default Projects;
