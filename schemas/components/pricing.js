export default {
  name: "pricing",
  title: "Pricing",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'subpages',
      type: 'string',
      title: 'Subpages',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Cta',
    },
    {
      name: 'benefits',
      type: 'array',
      of: [
        {
          type: 'benefits',
        }
      ],
      title: 'benefits',
    },
    {
      name: 'hint',
      type: 'text',
      rows: 3,
      title: 'Hint'
    },
    {
      name: 'mostPopular',
      type: 'boolean',
      title: 'Most Popular',
      initialValue: false
    }
  ]
}