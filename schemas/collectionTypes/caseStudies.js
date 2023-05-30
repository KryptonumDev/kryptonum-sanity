export default {
  name: 'caseStudies',
	title: 'Case Studies',
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
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'thumbnail.source'
    }
  }
}