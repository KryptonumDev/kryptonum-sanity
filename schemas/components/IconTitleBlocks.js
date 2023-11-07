export default {
  name: "IconTitleBlocks",
  title: "List",
  type: 'object',
  fields: [
    {
      name: 'icon',
      type: 'image'
    },
    {
      name: 'title',
      type: 'markdown'
    },
    {
      name: 'blocks',
      type: 'array',
      of: [{type: 'Blocks_Array'}]
    }
  ]
}

export const Blocks_Array = {
  name: "Blocks_Array",
  title: "List",
  type: 'object',
  fields: [
    {
      name: 'description',
      type: 'markdown'
    },
    {
      name: 'title',
      type: 'markdown'
    },
  ]
}