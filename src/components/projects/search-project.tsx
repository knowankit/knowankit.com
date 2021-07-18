import React, { useState } from 'react';
import ProjectCard from '@/src/components/projects/project-card';
import { Box, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import projects from '@/src/components/projects/project-list';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchProject = () => {
  const [filteredList, setFilteredList] = useState(projects);
  const [searchText, setSearchText] = useState('');

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
      <Box my="2rem" mx={['8rem', '10rem', '16rem', '16rem']}>
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
