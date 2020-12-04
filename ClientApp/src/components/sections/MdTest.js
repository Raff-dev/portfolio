import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Section } from '../utilities/Section'
import { Grid, Col, Row } from 'react-bootstrap'
import { Chip, rgbToHex } from '@material-ui/core';
import axios from 'axios'
import { SocialIcon } from 'react-social-icons';
import gfm from 'remark-gfm'
import { Link, animateScroll as scroll } from 'react-scroll'

import '../../css/Projects.scss'
import { LinkContainer } from 'react-router-bootstrap'
import { faGift } from '@fortawesome/free-solid-svg-icons';


export const MdTest = () => {
    const projects = [
        { label: 'Wat Plan', name: 'WAT_Plan' },
        { label: 'Data Science', name: 'Data-Science' },
        { label: 'Toster', name: 'Toster' },
        { label: 'LZ77', name: 'Dictionary-Coder' },
        { label: 'Tetris', name: 'Tetris' },
        { label: 'Portfolio', name: 'Portfolio' },
        { label: 'Boids', name: 'Boids' },
    ]
    const [markdown, setMarkdown] = useState(null);
    const [tags, setTags] = useState([]);
    const [currentProject, setCurrentProject] = useState(projects[0].name)
    const [prevProject, setPrevProject] = useState(projects[0].name)
    const [prevTags, setPrevTags] = useState([])
    const [prevMarkdown, setPrevMarkdown] = useState(projects[0].name)

    const srcToRepoSrc = (match) => {
        let path = match.replace('src=', '').replaceAll(`"`, '');
        return `src="https://raw.githubusercontent.com/Raff-dev/${currentProject}/master/${path}"`
    }

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Raff-dev/${currentProject}/master/README.md`;
        axios.get(url)
            .then(res => {
                let md = res.data;
                let newTags = md.match(/\[tags]: <> \([^)]*\)/g)

                setPrevTags(tags)
                setPrevMarkdown(markdown)

                if (newTags) {
                    newTags = newTags[0].replace('[tags]: <> (', '').replace(')', '').split(', ')
                    setTags(newTags)
                } else setTags([])

                // repair underline
                md = md.replace(/(^|.)+\n(-|_|\*){3}/g, match => `## ${match}`)

                //get images repo source 
                md = md.replace(/src="[^\s:]+"/g, srcToRepoSrc)
                setMarkdown(md)
            })
            .catch(console.log)
    }, [currentProject])

    return (
        <Section className="projects" sectionName="Markdown">
            <Row className="projects-nav" sm={8} >
                <nav>
                    <div className="items">
                        {projects.map(project =>
                            <Link to="Markdown" duration={300} smooth={true} className={(currentProject === project.name) && 'selected'} >
                                <span onClick={() => { setPrevProject(currentProject); setCurrentProject(project.name) }} >{project.label}</span>
                            </Link>
                        )}
                    </div>
                </nav>
            </Row>
            <Grid>
                <Col >
                    <div className="current-project">

                        <div className="github-link">
                            <SocialIcon url={`https://github.com/Raff-dev/${currentProject}`} bgColor="rgb(0, 0, 0)" />
                            <span className="text-muted text-light">
                                View the code on GitHub!
                        </span>
                        </div>
                        <div className="tag-chips">
                            {tags.map(tag => <Chip className="chip" label={tag} />)}
                        </div>
                        <div className="markdown">
                            <Markdown allowDangerousHtml plugins={[gfm]} source={markdown} />
                        </div>
                    </div>

                    <div className="prev-project">
                        <div className="github-link">
                            <SocialIcon url={`https://github.com/Raff-dev/${prevProject}`} bgColor="rgb(0, 0, 0)" />
                            <span className="text-muted text-light">
                                View the code on GitHub!
                        </span>
                        </div>
                        <div className="tag-chips">
                            {tags.map(tag => <Chip className="chip" label={tag} />)}
                        </div>
                        <div className="markdown">
                            <Markdown allowDangerousHtml plugins={[gfm]} source={markdown} />
                        </div>
                    </div>
                </Col>
            </Grid>
        </Section >
    );


}