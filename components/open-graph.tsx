const siteUrl = 'https://knowankit.com';

type Props = {
  path: string;
  title: string;
  image?: string;
  type?: string;
};

// Rendered as JSX instead of the Metadata API's openGraph field, which also emits twitter:* tags.
const OpenGraph = ({ path, title, image, type = 'website' }: Props) => (
  <>
    <meta property="og:type" content={type} />
    <meta property="og:url" content={`${siteUrl}${path}`} />
    <meta property="og:site_name" content="Know Ankit" />
    <meta property="og:title" content={title} />
    {image && (
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
    )}
  </>
);

export default OpenGraph;
