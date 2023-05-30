export default {
  name: 'team',
	title: 'Team',
  type: 'document',
  icon: () => '👯‍♀️',
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
      name: 'img',
      type: 'image',
      title: 'Thumbnail',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img'
    }
  }
}