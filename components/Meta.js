import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Meetups',
  keywords: 'meetups, web development, programming, coding, mern, node, react',
  description:
    'Browse the huge list of various meetups in web dev tecgnologies',
}

export default Meta
