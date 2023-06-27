export default {
  name: "contactPerson",
  title: "Contact Person",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'person',
      type: 'reference',
      to: [
        {
          type: 'teamMember'
        }
      ],
      options: { disableNew: true },
      title: 'Person',
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}