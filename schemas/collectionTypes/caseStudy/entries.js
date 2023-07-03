export default {
  name: 'caseStudy_entries',
	title: 'Case Study Wpisy',
  type: 'document',
  icon: () => '📂',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
    },
    {
      name: 'paragraph2',
      type: 'markdown',
      title: 'Second Paragraph',
    },
    {
      name: 'categories_Paragraph',
      type: 'string',
      title: 'Categories Paragraph',
      initialValue: 'Zakres pracy:'
    },
    {
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy_categories' }],
          options: { disableNew: true },
        }
      ],
      title: 'Categories',
      description: 'The first category in an array should be the most important one, because it shows in SEO tags.'
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'client_Heading',
      type: 'markdown',
      title: 'Client Heading',
      group: 'client',
      initialValue: '**Klient**'
    },
    {
      name: 'client_Paragraph',
      type: 'markdown',
      title: 'Client Paragraph',
      group: 'client',
    },
    {
      name: 'client_Standout',
      type: 'markdown',
      title: 'Client Standout',
      group: 'client',
    },
    {
      name: 'client_Img',
      type: 'image',
      title: 'Client Image',
      group: 'client',
    },
    {
      name: 'challenge_Heading',
      type: 'markdown',
      title: 'Challenge Heading',
      group: 'challenge',
      initialValue: '**Wyzwanie**'
    },
    {
      name: 'challenge_Paragraph',
      type: 'markdown',
      title: 'Challenge Paragraph',
      group: 'challenge',
    },
    {
      name: 'process',
      type: 'array',
      of: [
        {
          type: 'caseStudy_Process',
        }
      ],
      title: 'Process',
      group: 'process',
    },
    {
      name: 'logo_Images',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Logo',
      group: 'logo',
      hidden: ({ parent }) => !parent.categories?.find(({_ref}) => _ref === 'dcaf4d22-de24-4eae-84d5-1743586c8fbb')
    },
    {
      name: 'logo_Paragraph',
      type: 'markdown',
      title: 'Logo Paragraph',
      group: 'logo',
      initialValue: 'Logo',
      hidden: ({ parent }) => !parent.categories?.find(({_ref}) => _ref === 'dcaf4d22-de24-4eae-84d5-1743586c8fbb')
    },
    {
      name: 'visualIdentification_Images',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Visual Identification Images',
      group: 'visualIdentification',
      hidden: ({ parent }) => !parent.categories?.find(({_ref}) => _ref === 'b0c9484a-e2cd-4522-963b-fa0d712c11f8')
    },
    {
      name: 'visualIdentification_Paragraph',
      type: 'markdown',
      title: 'Visual Identification Paragraph',
      group: 'visualIdentification',
      initialValue: 'Identyfikacja wizualna',
      hidden: ({ parent }) => !parent.categories?.find(({_ref}) => _ref === 'b0c9484a-e2cd-4522-963b-fa0d712c11f8')
    },
    {
      name: 'visualIdentification_Paragraph2',
      type: 'markdown',
      title: 'Visual Identification Second Paragraph',
      group: 'visualIdentification',
      hidden: ({ parent }) => !parent.categories?.find(({_ref}) => _ref === 'b0c9484a-e2cd-4522-963b-fa0d712c11f8')
    },
    {
      name: 'testimonial_Heading',
      type: 'markdown',
      title: 'Testimonial Heading',
      initialValue: '**Opinia** klienta',
      group: 'testimonial',
    },
    {
      name: 'testimonial',
      type: 'reference',
      to: [{ type: 'testimonials' }],
      options: { disableNew: true },
      title: 'Testimonial',
      group: 'testimonial',
    },
    {
      name: 'testimonial_Paragraph',
      type: 'markdown',
      title: 'Testimonial Paragraph',
      group: 'testimonial',
    },
    {
      name: 'testimonial_Paragraph2',
      type: 'markdown',
      title: 'Testimonial Second Paragraph',
      group: 'testimonial',
    },
    {
      name: 'technologies_Paragraph',
      type: 'string',
      title: 'Technologies Paragraph',
      group: 'technologies',
      initialValue: 'Zastosowane technologie'
    },
    {
      name: 'technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technologies' }],
          options: { disableNew: true },
        }
      ],
      title: 'Technologies',
      group: 'technologies'
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Cta Section',
      initialValue: {
        heading: "Chcesz, byśmy **zaopiekowali** się Twoją marką?",
        cta: {
          theme: 'primary',
          text: 'Umów darmową konsultację',
          href: '/pl/kontakt'
        },
        img: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-4b4c8eee5356689bd082550ebb7ade03f0d95b2d-700x633-webp'
          }
        }
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img'
    }
  },
  groups: [
    {
      name: 'client',
      title: 'Client'
    },
    {
      name: 'challenge',
      title: 'Challenge'
    },
    {
      name: 'process',
      title: 'Process'
    },
    {
      name: 'logo',
      title: 'Logo'
    },
    {
      name: 'visualIdentification',
      title: 'Visual Identification'
    },
    {
      name: 'technologies',
      title: 'Technologies'
    },
    {
      name: 'testimonial',
      title: 'Testimonial'
    },
  ]
}