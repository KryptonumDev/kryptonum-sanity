export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'nav_Annotation',
      type: 'markdown',
      title: 'Annotacja',
      fieldset: 'nav',
    },
    {
      name: 'nav_Projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'caseStudy_entries'
        }],
        options: {
          disableNew: true
        }
      }],
      title: 'Projects',
      fieldset: 'nav',
      validation: Rule => Rule.required().max(8),
    },
    {
      name: 'nav_BlogPost',
      type: 'reference',
      to: [{
        type: 'blog_entries'
      }],
      options: {
        disableNew: true
      },
      title: 'Blog Post',
      description: 'The blog post that will be displayed in the navigation (if not provided, the latest blog post will be displayed)',
      fieldset: 'nav',
    },
    {
      name: 'nav_Curiousities',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'curiosity_entries'
        }],
        options: {
          disableNew: true
        },
      }],
      title: 'Curiosity',
      description: 'The curiosities that will be displayed in the navigation (if not provided, the latest curiosities will be displayed)',
      fieldset: 'nav',
      validation: Rule => Rule.max(2),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      fieldset: 'footer',
      validation: Rule => Rule.required()
    },
    {
      name: 'footer_Projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'caseStudy_entries'
        }],
        options: {
          disableNew: true
        }
      }],
      title: 'Projects',
      fieldset: 'footer',
      validation: Rule => Rule.required().min(1).max(5),
    },
    {
      name: 'footer_ContactPerson',
      type: 'reference',
      to: [{
        type: 'teamMember'
      }],
      options: {
        disableNew: true
      },
      title: 'Contact Person',
      fieldset: 'footer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      fieldset: 'socials',
      validation: Rule => Rule.required(),
    },
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      fieldset: 'socials',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tiktok',
      type: 'url',
      title: 'TikTok',
      fieldset: 'socials',
      validation: Rule => Rule.required(),
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn',
      fieldset: 'socials',
      validation: Rule => Rule.required(),
    },
    {
      name: 'quickForm_Paragraph',
      type: 'string',
      title: 'Quick Form Paragraph',
      fieldset: 'quickForm',
    },
    {
      name: 'quickForm_Person',
      type: 'reference',
      to: [{
        type: 'teamMember'
      }],
      options: {
        disableNew: true
      },
      title: 'Quick Form Person',
      fieldset: 'quickForm',
    },
    {
      name: 'faq',
      type: 'faq',
      title: 'FAQ',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
  ],
  fieldsets: [
    {
      name: 'nav',
      title: 'Navigation',
      options: { collapsible: true }
    },
    {
      name: 'footer',
      title: 'Footer',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'socials',
      title: 'Socials',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'quickForm',
      title: 'Quick Form',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'globalSeo',
      title: 'Global SEO',
      options: { collapsible: true, collapsed: true }
    },
  ],
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'An image that is visible when sharing the page on social media. The dimensions of the photo should be 1200x630px'
    },
  ]
}