export default {
  name: 'team',
	title: 'Team',
  type: 'document',
  icon: () => '👫',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Heading',
      group: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero Paragraph',
      group: 'hero',
      description: 'This field will be visible as 3 separate paragraph, so make space between 3 paragraphs.',
      validation: Rule =>
        Rule.custom(value => {
          if (value.split("\n").length - 1 > 4) {
            return 'You can write only 3 paragraphs';
          }
          return true;
        }),
    },
    {
      name: 'hero_Column',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Hero Column',
      group: 'hero',
    },
    {
      name: 'smallCta_Heading',
      type: 'markdown',
      title: 'Small CTA Section Heading',
      group: 'smallCta',
    },
    {
      name: 'smallCta_Cta',
      type: 'cta',
      title: 'Small CTA Section CTA',
      group: 'smallCta',
    },
    {
      name: 'smallCta_Heading2',
      type: 'markdown',
      title: 'Small CTA Section Second Heading',
      group: 'smallCta',
    },
    {
      name: 'smallCta_Cta2',
      type: 'cta',
      title: 'Small CTA Section Second CTA',
      group: 'smallCta',
    },
    {
      name: 'testimonials_Heading',
      type: 'markdown',
      title: 'Testimonials Heading',
      group: 'testimonials',
    },
    {
      name: 'testimonials_List',
      type: 'array',
      of: [ { type: 'string' } ],
      title: 'Testimonials List',
      validation: Rule => Rule.max(6),
      group: 'testimonials',
    },
    {
      name: 'team_Heading',
      type: 'markdown',
      title: 'Team Heading',
      group: 'team',
    },
    {
      name: 'team_Paragraph',
      type: 'markdown',
      title: 'Team Paragraph',
      group: 'team',
    },
    {
      name: 'attitude_Heading',
      type: 'markdown',
      title: 'Attitude Heading',
      group: 'attitude',
    },
    {
      name: 'attitude_Paragraph',
      type: 'markdown',
      title: 'Attitude Paragraph',
      group: 'attitude',
    },
    {
      name: 'attitude_Claim',
      type: 'markdown',
      title: 'Attitude Claim',
      group: 'attitude',
    },
    {
      name: 'attitude_Img',
      type: 'image',
      title: 'Attitude Image',
      group: 'attitude',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'CTA Section',
      group: 'ctaSection',
    },
    {
      name: 'curiosityEntries_Heading',
      type: 'markdown',
      title: 'Curiosity Entries Heading',
      group: 'curisityEntries',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'smallCta',
      title: 'Small CTA Section',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
    },
    {
      name: 'team',
      title: 'Team',
    },
    {
      name: 'attitude',
      title: 'Attitude',
    },
    {
      name: 'ctaSection',
      title: 'CTA Section',
    },
    {
      name: 'curisityEntries',
      title: 'Curiosity Entries',
    },
  ]
}