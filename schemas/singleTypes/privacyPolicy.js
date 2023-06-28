export default {
  name: 'privacyPolicy',
	title: 'Privacy Policy',
  type: 'document',
  icon: () => '📄',
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
      title: 'Hero paragraph',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Image',
      group: 'hero',
    },
    {
      name: 'keyInfo_Heading',
      type: 'markdown',
      title: 'Key Info Heading',
      group: 'content',
    },
    {
      name: 'keyInfo_List',
      type: 'array',
      of: [
        { type: 'markdown' }
      ],
      title: 'Key Info List',
      group: 'content',
    },
    {
      name: 'content_Heading',
      type: 'markdown',
      title: 'Content Heading',
      group: 'content',
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Content',
      group: 'content',
    },
    {
      name: 'simpleCtaSection',
      type: 'simpleCtaSection',
      title: 'Simple CTA Section',
      group: 'simpleCtaSection',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'simpleCtaSection',
      title: 'Simple CTA Section',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}