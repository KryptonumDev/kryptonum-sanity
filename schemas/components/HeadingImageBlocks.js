export default {
 name: 'HeadingImageBlocks',
 title: 'List',
 type: 'object',
 fields: [
  {
    name: 'heading',
    type: 'markdown'
  },
  {
    name: 'image',
    type: 'image'
  },  {
    name: 'blocks',
    type: 'array',
    of: [{
      type: 'markdown'
    }]
  },
 ] 
}