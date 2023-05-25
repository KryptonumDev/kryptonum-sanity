export default {
  name: 'webDevelopment',
	title: 'Web Development',
  type: 'document',
  icon: () => '🌐',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Claim',
      type: 'markdown',
      title: 'Hero Claim',
      group: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_SecondParagraph',
      type: 'markdown',
      title: 'Hero Second Paragraph',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'img',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'hero_Nav',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription',
        }
      ],
      title: 'Hero Nav',
      group: 'hero',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'conquest',
      title: 'Conquest',
    },
    {
      name: 'challenge',
      title: 'Challenge',
    },
    {
      name: 'services',
      title: 'Services',
    },
    {
      name: 'creativity',
      title: 'Creativity',
    },
    {
      name: 'roadmap',
      title: 'Roadmap',
    },
    {
      name: 'team',
      title: 'Team',
    },
  ]
}