import React from 'react';
import SearchProject from '@/components/projects/search-project';
import ContentWithNavbarFooter from '@/layouts/content-with-navbar-footer';

const Projects = () => {
  return (
    <ContentWithNavbarFooter>
      <SearchProject />
    </ContentWithNavbarFooter>
  );
};

export default Projects;
