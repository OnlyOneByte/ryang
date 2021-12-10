module.exports = {
	
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ryang.dev`,
    // Your Name
    name: 'Rengang (Angelo) Yang',
    // Main Site Title
    title: `Angelo Yang | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: ``,
    // Optional: Twitter account handle
    author: `@OnlyOneByte`,
    // Optional: Github account URL
    github: `https://github.com/OnlyOneByte`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryang42/`,
    // Content of the About Me section
    about: `Ni-Howdy! I'm Angelo. I'm a hardcore minecraft enthusiast, and love collecting single board computers. You can find me volunteering at any hackathon in the central texas area.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: 'Devfolio',
    //     description:
    //       'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'ChromeExtensionKit',
    //     description:
    //       'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
    //     link: 'https://chromeextensionkit.com/?ref=devfolio',
    //   },
      
    // ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'PIMCO',
        description: 'Full-Stack Developer, June 2021 - Present (FT)',
        link: 'https://www.pimco.com/en-us/?showSplash=1',
      },
      {
        name: 'Research Assistant @ Texas A&M ',
        description: 'Full-Stack Developer, December 2018 - February 2021',
        link: '',
      },
      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Angular w/ Typescript, Python & Python Tools (Jupyter, Pandas, Tensorflow, Keras), Kotlin and Java (Spring Boot), C++',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, CI / CD w/ Github Actions and Gitlabs, Microservices, API design, Agile / Scrum, AWS Certified Developer',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
