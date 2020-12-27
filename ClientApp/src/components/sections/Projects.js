import React, { useEffect, useState } from 'react'
import { Section } from '../utilities/Section'
import { Grid, Col, Row } from 'react-bootstrap'
import { Chip } from '@material-ui/core';
import axios from 'axios'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-scroll'

import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import '../../css/Projects.scss'

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter style={androidstudio} language={language} children={value} />
    }
}

export const Projects = ({nextSectionName}) => {
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState({ name: '' })
    const [loading, setLoading] = useState(true);

    const baseUrl = 'https://raw.githubusercontent.com/Raff-dev'
    const srcToRepoSrc = (match, project) => {
        let path = match.replace('src=', '').replace(`"`, '').replace(`"`, '');
        return `src="${baseUrl}/${project.name}/master/${path}"`
    }

    useEffect(() => {
        axios.get(`${baseUrl}/Portfolio/master/projects.json`)
            .then(res => {
                setProjects(res.data.projects);
                setCurrentProject(res.data.projects[0]);
                setLoading(false);
            }).catch(console.log);
    }, [])

    useEffect(() => {
        for (let project of projects) {
            const url = `${baseUrl}/${project.name}/master/README.md`;
            axios.get(url)
                .then(res => {
                    let markdown = res.data;
                    let tags = markdown.match(/\[tags\]: <> \([^)]*\)/g)

                    // repair underline
                    markdown = markdown.replace(/(^|.)+\n(-|_|\*){3}/g, match => `## ${match}`)

                    //get images repo source 
                    markdown = markdown.replace(/src="[^\s:]+"/g, (match) => srcToRepoSrc(match, project))

                    project.tags = tags ? tags[0].replace('[tags]: <> (', '').replace(')', '').split(', ') : [];
                    project.markdown = markdown
                    setProjects([...projects])

                })
                .catch(console.log)
        }
    }, [loading])

    return (
        <Section className="projects" sectionName="Projects" nextSectionName={nextSectionName}>
            <Row className="projects-nav" sm={8} >
                <nav>
                    <hr className="m-0" />
                    <div className="items">
                        {projects.map(project =>
                            <Link
                                key={project.name}
                                to="Projects"
                                duration={300}
                                smooth={true}
                                className={(currentProject.name === project.name) && 'selected'} >
                                <span onClick={() => setCurrentProject(project)} >{project.label}</span>
                            </Link>
                        )}
                    </div>
                    <hr className="m-0" />
                </nav>
            </Row>
            <Grid>
                <Col>
                    <div className="projects-container" >
                        {projects.map(project =>
                            <div id={project.label} className={currentProject.name === project.name ? "project active" : "project"}>
                                <div className="github-link">
                                    <SocialIcon url={`https://github.com/Raff-dev/${project.name}`} bgColor="rgb(0, 0, 0)" />
                                    <span className="text-muted text-light">
                                        View the code on GitHub!
                                    </span>
                                </div>

                                <div className="tag-chips">
                                    {project.tags && project.tags.map(tag => <Chip className="chip" label={tag} />)}
                                </div>
                                <hr className="m-0" />

                                <div className="markdown">
                                    <ReactMarkdown renderers={renderers} allowDangerousHtml={true} children={project.markdown} />
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
            </Grid>
        </Section >
    );


}