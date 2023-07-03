export default {
  name: 'curiosity_categories',
	title: 'Ciekawostki kategorie',
  type: 'document',
  icon: () => '📑',
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
  ],
}