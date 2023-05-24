export default {
  name: 'curiosities',
	title: 'Curiosities',
  type: 'document',
  icon: () => '😲',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'thumbnail',
      type: 'img',
      title: 'Thumbnail',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail.source'
    }
  }
}