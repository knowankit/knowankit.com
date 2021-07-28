import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SocialIcons from '@/components/homepage/social-icons';
import Navbar from '@/components/navbar';
import RecentBlog from '@/components/homepage/recent-blog-card';
import RecentProject from '@/components/homepage/recent-project-card';

const Profile = () => {
  const recentPosts = [
    {
      title: 'Hydrate redux store in Next.js',
      summary: 'Learn how to create store in the server side and use the same store on the client',
      publishedAt: '2017-07-26',
      slug: 'hydrate-redux-state-in-nextjs',
      frontMatter: {
        readingTime: {
          text: '5 mins'
        }
      }
    }
  ];

  const recentProjects = [
    {
      name: 'Trello Clone - Built with Nextjs framework',
      github: 'https://github.com/knowankit/trello-clone',
      description:
        'Built with Nextjs framework with Typescript and Chakra UI library with support from MongoDB',
      demo: 'trello-clone-one.vercel.app'
    }
  ];

  const loadRecentProjectsAndBlogs = () => {
    return (
      <>
        <Box color="white" my="2rem">
          <Heading as="h2" size="md">
            Latest Post
          </Heading>
        </Box>
        {recentPosts.map((post, index) => (
          <Box m="0.5rem" key={index}>
            <RecentBlog post={post} />
          </Box>
        ))}
        <Box color="white" my="1rem">
          <Heading as="h2" size="md">
            Latest Project
          </Heading>
        </Box>
        {recentProjects.map((project, index) => (
          <Box m="0.5rem" key={index}>
            <RecentProject project={project} />
          </Box>
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Box
        minHeight="90vh"
        backgroundColor="black"
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
              <Box display="inline-flex" flexDirection="column" mt="4rem">
                <Box color="#FF851B">Front-end</Box>
                {/* <Box>Back-end</Box>
                <Box>Full-stack</Box> */}
              </Box>
            </Box>
            <Box color="white" display="inline-block" ml="10px">
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
            color="white"
            fontSize={['1rem', '1.6rem', '1.8rem', '1.8rem']}
            mx={['2rem', '1rem', '1rem', '1rem']}>
            <p>I code beautifully simple things and I love what I do</p>
            <p>And of-course a love for egyptian bracket</p>
          </Box>
        </Box>
        {loadRecentProjectsAndBlogs()}
        <Box m="1rem">
          <SocialIcons />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
