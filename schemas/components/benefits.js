export default {
  name: "benefits",
  title: "Benefits",
  type: "object",
  fields: [
    {
      type: 'string',
      title: 'String',
      name: 'name'
    },
    {
      name: 'highlighted',
      title: 'Highlighted',
      type: 'boolean',
      initialValue: false,
    },
  ]
}