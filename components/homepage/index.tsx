import { useEffect, useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import RecentBlog from '@/components/homepage/recent-blog-card';
import RecentProject from '@/components/homepage/recent-project-card';
import Footer from '@/components/footer';
import { getAllGithubStars } from '@/lib/get-all-github-stars';
import { AiOutlineGithub } from 'react-icons/ai';
import projects from '@/data/projects';
import router from 'next/router';

const Profile = ({ posts }) => {
  useEffect(() => {
    async function fetchMyAPI() {
      const count = await getAllGithubStars();
      setStars(count);
    }

    fetchMyAPI();
  }, []);

  const [stars, setStars] = useState(0);

  const showProjectsPage = () => {
    router.push('/projects');
  };

  const loadRecentProjectsAndBlogs = () => {
    const filteredProjects = projects.slice(0, 3);

    return (
      <Box display="flex" flexDirection="column" mt="1rem">
        <Box mt="1rem" ml="0.5rem">
          <Heading as="h2" size="md">
            Blogs
          </Heading>
        </Box>
        {posts.map((post, index) => (
          <Box m="0.5rem" key={index}>
            <RecentBlog post={post} />
          </Box>
        ))}
        <Box>
          <Heading as="h2" size="md" ml="0.5rem">
            Projects
          </Heading>
        </Box>
        {filteredProjects.map((project, index) => (
          <Box m="0.5rem" key={index}>
            <RecentProject project={project} />
          </Box>
        ))}
        <Button variant="ghost" onClick={showProjectsPage} colorScheme="brand">
          See all projects
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      <Box
        height="80vh"
        id="profile"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Box
          textAlign="center"
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="center">
          <Box fontSize={['2rem', '2.5rem', '3rem', '3rem']} fontWeight="bold">
            <Box display="inline-flex" position="relative" overflow="hidden">
              <Box display="inline-flex" flexDirection="column">
                <Box>Front-end</Box>
                {/* <Box>Back-end</Box>
                <Box>Full-stack</Box> */}
              </Box>
            </Box>
            <Box display="inline-block" ml="10px">
              Developer &nbsp;
              <Box as="span">
                &lt;
                <Box as="span" className="dash">
                  _
                </Box>
                /&gt;
              </Box>
            </Box>
          </Box>
          <Box
            fontSize={['1rem', '1.6rem', '1.8rem', '1.8rem']}
            mx={['2rem', '1rem', '1rem', '1rem']}>
            <p>I code beautifully simple things and I love what I do</p>
            <p>And of-course a love for egyptian bracket</p>
          </Box>
          <Box>
            <Button
              variant="ghost"
              colorScheme="brand"
              onClick={() => (window.location.href = 'https://github.com/knowankit')}>
              <AiOutlineGithub /> &nbsp; {stars} stars
            </Button>
          </Box>
        </Box>
        {/* {loadRecentProjectsAndBlogs()} */}
      </Box>
      <Box height="10vh">
        <Footer />
      </Box>
    </>
  );
};

export default Profile;
