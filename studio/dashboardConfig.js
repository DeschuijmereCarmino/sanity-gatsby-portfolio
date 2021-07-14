export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ef02f543f9bc5d5670f035',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o4ahveaf',
                  apiId: 'd1767c08-daf2-4d1a-bc7a-9a2cd2d77608'
                },
                {
                  buildHookId: '60ef02f6b8eb205bbec450bc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-afsq81o3',
                  apiId: 'f3241711-d47c-4c3a-9da1-c9b82684a32a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeschuijmereCarmino/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-afsq81o3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
