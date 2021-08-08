import { Box, useColorMode } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

const Comments = () => {
  const commentBox = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const commentScript = document.createElement('script');
    const theme = colorMode === 'light' ? 'github-light' : 'github-dark';

    commentScript.setAttribute('src', 'https://utteranc.es/client.js');
    commentScript.setAttribute('repo', 'knowankit/knowankit.com');
    commentScript.setAttribute('theme', theme);
    commentScript.setAttribute('crossorigin', 'anonymous');
    commentScript.setAttribute('async', 'true');
    commentScript.setAttribute('issue-term', 'pathname');

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    }
  }, []);

  return (
    <Box>
      <Box ref={commentBox}></Box>
    </Box>
  );
};

export default Comments;
