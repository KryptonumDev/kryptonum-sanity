export default {
  name: 'testimonials',
  type: 'document',
	title: 'Testiminials',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'project',
      type: 'string',
      title: 'Project',
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text'
    },
    {
      name: 'img',
      type: 'img',
      title: 'Image',
    },
    {
      title: 'Call To Action',
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img.source'
    }
  }
}