export default {
  name: 'homepage',
	title: 'Homepage',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'array',
      of: [
        {
          name: 'string',
          type: 'string',
        }
      ],
      validation: Rule => Rule.max(3),
      title: 'Hero Subheding',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Hero Cta',
      group: 'hero',
    },
    {
      name: 'conquest_Heading',
      type: 'markdown',
      title: 'Conquest Heading',
      group: 'conquest',
    },
    {
      name: 'conquest_Claim',
      type: 'markdown',
      title: 'Conquest Claim',
      group: 'conquest',
    },
    {
      name: 'conquest_Paragraph',
      type: 'text',
      rows: 5,
      title: 'Conquest Paragraph',
      group: 'conquest',
    },
    {
      name: 'conquest_SecondClaim',
      type: 'markdown',
      title: 'Conquest Second Claim',
      group: 'conquest',
    },
    {
      name: 'conquest_Cta',
      type: 'cta',
      title: 'Conquest Cta',
      group: 'conquest',
    },
    {
      name: 'challenge_Heading',
      type: 'markdown',
      title: 'Challenge Heading',
      group: 'challenge',
    },
    {
      name: 'challenge_Claim',
      type: 'markdown',
      title: 'Challenge Claim',
      group: 'challenge',
    },
    {
      name: 'challenge_Paragraph',
      type: 'text',
      rows: 5,
      title: 'Challenge Paragraph',
      group: 'challenge',
    },
    {
      name: 'challenge_SecondClaim',
      type: 'markdown',
      title: 'Challenge Second Claim',
      group: 'challenge',
    },
    {
      name: 'challenge_Cta',
      type: 'cta',
      title: 'Challenge Cta',
      group: 'challenge',
    },
    {
      name: 'services_Heading',
      type: 'markdown',
      title: 'Services Heading',
      group: 'services',
    },
    {
      name: 'services_List',
      type: 'array',
      title: 'Services List',
      of: [
        {
          type: 'titleAndDescription',
        }
      ],
      validation: Rule => Rule.max(4),
      group: 'services',
    },
    {
      name: 'creativity_Heading',
      type: 'markdown',
      title: 'Creativity Heading',
      group: 'creativity',
    },
    {
      name: 'creativity_Paragraph',
      type: 'text',
      rows: 5,
      title: 'Creativity Paragraph',
      group: 'creativity',
    },
    {
      name: 'creativity_SecondParagraph',
      type: 'markdown',
      title: 'Creativity Second Paragraph',
      group: 'creativity',
    },
    {
      name: 'roadmap_Heading',
      type: 'markdown',
      title: 'Roadmap Heading',
      group: 'roadmap',
    },
    {
      name: 'roadmap_Process',
      type: 'array',
      title: 'Roadmap Process',
      of: [
        {
          type: 'titleAndDescription',
        }
      ],
      validation: Rule => Rule.max(5),
      group: 'roadmap',
    },
    {
      name: 'roadmap_Cta',
      type: 'cta',
      title: 'Roadmap Cta',
      group: 'roadmap',
    },
    {
      name: 'team_Heading',
      type: 'markdown',
      title: 'Team Heading',
      group: 'team',
    },
    {
      name: 'team_Text',
      type: 'text',
      rows: 8,
      title: 'Team Text',
      group: 'team',
    },
    {
      name: 'team_Cta',
      type: 'cta',
      title: 'Team Cta',
      group: 'team',
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