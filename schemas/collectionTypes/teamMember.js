export default {
  name: 'teamMember',
	title: 'Team Members',
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
      title: 'Image',
    },
    {
      name: 'cryptonym',
      type: 'string',
      title: 'Cryptonym',
    },
    {
      name: 'bio',
      type: 'markdown',
      title: 'Bio',
    },
    {
      name: 'skills',
      type: 'markdown',
      title: 'Skills',
    },
    {
      name: 'tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technologies' }],
          options: { disableNew: true },
        }
      ],
      title: 'Tools',
    },
    {
      name: 'benefits',
      type: 'markdown',
      title: 'Benefits',
    },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'linkWithImg'
        }
      ],
      title: 'Links',
    },
    {
      name: 'afterWork',
      type: 'markdown',
      title: 'After Work',
    },
    {
      name: 'hobbies',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      title: 'Hobbies',
    },
    {
      name: 'inspirations',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      title: 'Inspirations',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'tel',
      type: 'string',
      title: 'Phone Number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'img'
    }
  }
}