export default {
 name: 'HeadingImageBlocks',
 title: 'Heading Image Blocks',
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
      type: 'titleAndDescription'
    }]
  },
 ] 
}