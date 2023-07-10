export default {
  name: "process_KeyElements",
  title: "Process Key Elements",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading'
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph'
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img'
    }
  }
}

export const process_KeyElementsWrapper = {
  name: "process_KeyElementsWrapper",
  title: "Sekcja kluczowych elementów lewo/prawo",
  type: "object",
  fields: [
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
      initialValue: 'Znaki szczególne:'
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'process_KeyElements'
        }
      ],
      title: 'List'
    },
  ],
  preview: {
    select: {
      title: 'list',
    },
    prepare({ title }) {
      return {
        title: title[0].heading
      }
    }
  }
}