'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { Box, InputGroup, Input, SimpleGrid } from '@chakra-ui/react';
import projects from '@/data/projects';
import { getRepos } from '@/lib/get-all-github-stars';
import { AiOutlineSearch } from 'react-icons/ai';

const byStars = (a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0);

const SearchProject = () => {
  const [source, setSource] = useState(projects);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function fetchMyAPI() {
      const data = await getRepos();
      if (cancelled || !Array.isArray(data) || data.length === 0) return;
      setSource(data.filter((repo) => !repo.fork).sort(byStars));
    }

    fetchMyAPI();
    return () => {
      cancelled = true;
    };
  }, []);

  const query = searchText.toLowerCase();
  const filteredList = source.filter((project) => project.name.toLowerCase().includes(query));

  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <Box maxW="1100px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
      <Box mb={8} maxW="32rem" mx="auto">
        <InputGroup endElement={<AiOutlineSearch />}>
          <Input
            type="text"
            placeholder="Search project"
            aria-label="Search project"
            value={searchText}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
        {filteredList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SearchProject;
