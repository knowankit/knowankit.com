'use client';

import { Box } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
import { useColorMode } from '@/components/ui/color-mode';

const Comments = () => {
  const commentBox = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const commentScript = document.createElement('script');
    const theme = colorMode === 'dark' ? 'github-dark' : 'github-light';

    commentScript.setAttribute('src', 'https://utteranc.es/client.js');
    commentScript.setAttribute('repo', 'knowankit/knowankit.com');
    commentScript.setAttribute('theme', theme);
    commentScript.setAttribute('crossorigin', 'anonymous');
    commentScript.setAttribute('async', 'true');
    commentScript.setAttribute('issue-term', 'pathname');

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box ref={commentBox}></Box>
    </Box>
  );
};

export default Comments;
