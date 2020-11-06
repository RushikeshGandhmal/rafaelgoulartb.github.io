import React from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/core'
import SectionTitle from '../section-title'
import Item from './item'

import projects from '../../data/en/portfolio'

const Portfolio: React.FC = () => {
  return (
    <Flex
      as="section"
      id="portfolio"
      flexDir="column"
      width={['95%', '90%', '80%', '80%']}
      mx="auto"
    >
      <SectionTitle>Portfolio</SectionTitle>

      <Flex flexWrap="wrap">
        {projects.map(project => (
          <Item
            key={project.name}
            name={project.name}
            description={project.description}
            imgSource={project.imgSource}
            skills={project.skills}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            playStoreUrl={project.playStoreUrl}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Portfolio
