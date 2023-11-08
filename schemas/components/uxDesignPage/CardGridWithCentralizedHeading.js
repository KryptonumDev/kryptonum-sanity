export default {
  name: 'CardGridWithCentralizedHeading',
  type: 'object',
  fields: [
    {
      name: 'centralizedHeading',
      type: 'CenteredHeading',
    },
    {
      name: 'cardGrid',
      type: 'array',
      of: [{type: 'IconDescription'}],
    },
  ],
}
