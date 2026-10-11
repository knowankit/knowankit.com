import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { Box, InputGroup, InputRightElement, Input, SimpleGrid } from '@chakra-ui/react';
import projects from '@/data/projects';
import { getRepos } from '@/lib/get-all-github-stars';
import { AiOutlineSearch } from 'react-icons/ai';

const byStars = (a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0);

const SearchProject = () => {
  const [source, setSource] = useState(projects);
  const [filteredList, setFilteredList] = useState(projects);
  const [searchText, setSearchText] = useState('');
  const searchTextRef = useRef(searchText);
  searchTextRef.current = searchText;

  useEffect(() => {
    let cancelled = false;

    async function fetchMyAPI() {
      const data = await getRepos();
      if (cancelled || !Array.isArray(data) || data.length === 0) return;

      const sortedData = data.filter((repo) => !repo.fork).sort(byStars);
      const query = searchTextRef.current.toLowerCase();
      setSource(sortedData);
      setFilteredList(
        sortedData.filter((project) => project.name.toLowerCase().indexOf(query) !== -1)
      );
    }

    fetchMyAPI();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);

    setFilteredList(
      source.filter(
        (project) => project.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
      )
    );
  };

  return (
    <Box maxW="1100px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
      <Box mb={8} maxW="32rem" mx="auto">
        <InputGroup>
          <InputRightElement pointerEvents="none">
            <AiOutlineSearch />
          </InputRightElement>
          <Input
            type="text"
            placeholder="Search project"
            value={searchText}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {filteredList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SearchProject;
