import { useEffect, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { getAllGithubStars } from '@/lib/get-all-github-stars';
import { AiOutlineGithub } from 'react-icons/ai';
import ContentWithNavbarFooter from '@/layouts/content-with-navbar-footer';

const HomePage = () => {
  useEffect(() => {
    async function fetchMyAPI() {
      const count = await getAllGithubStars();
      setStars(count);
    }

    fetchMyAPI();
  }, []);

  const [stars, setStars] = useState(0);

  return (
    <ContentWithNavbarFooter>
      <Box id="profile" display="flex" height="inherit" justifyContent="center" alignItems="center">
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
      </Box>
    </ContentWithNavbarFooter>
  );
};

export default HomePage;
