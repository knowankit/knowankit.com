import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/projects/project-card';
import { Box, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import projects from '@/data/projects';
import { getRepos } from '@/lib/get-all-github-stars';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchProject = () => {
  const [filteredList, setFilteredList] = useState(projects);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      const data = await getRepos();

      const sortedData = data.sort((a, b) => b['stargazers_count'] - a['stargazers_count']);
      setFilteredList(sortedData);
    }

    fetchMyAPI();
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);

    const tempProjectList = [...projects];
    const filteredListTemp = tempProjectList.filter(
      (project) => project.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    );
    setFilteredList(filteredListTemp);
  };

  const loadProjects = () => {
    return (
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {filteredList.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Box>
    );
  };

  return (
    <>
      <Box my="2rem" width={['16rem', '20rem', '32rem', '32rem']} mx="auto">
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
      {loadProjects()}
    </>
  );
};

export default SearchProject;
