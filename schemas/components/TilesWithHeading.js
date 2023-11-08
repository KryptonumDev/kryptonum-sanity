export default {
  name: "TilesWithHeading",
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'tiles',
      type: 'TilesComponent'
    }
  ]
}