import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description?: string;
};

const PageMeta = ({ title, description }: Props) => {
  const { pathname } = useRouter();

  const metaDescription =
    description ||
    'DevStaff is the developers community gathering in Crete. An attempt at bringing us all together for informal chats about technology and software. Join the next meetup!';
  const ogImageUrl = `https://devstaff.gr/logo-full-green.png`;

  return (
    <Head>
      {/* General */}
      <title>{title}</title>

      <meta name="description" content={metaDescription} />
      <meta name="image" content="logo-full-green.png" />
      <meta name="keywords" content="DevStaff, developers community" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`https://devstaff.gr${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="257" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@devstaff_gr" />
    </Head>
  );
};

export default PageMeta;