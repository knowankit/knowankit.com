import Projects from '@/components/projects';
import Head from 'next/head';

const ProjectsPage = (props) => {
  return (
    <>
      <Head>
        <title>KnowAnkit | Projects</title>
      </Head>
      <Projects {...props} />
    </>
  );
};
export default ProjectsPage;
