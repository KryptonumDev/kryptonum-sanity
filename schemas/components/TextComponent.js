import { removeMarkdown } from "../../utils/functions";

export default {
  name: "TextComponent",
  title: "Text Component",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        { type: 'TextComponent_Blocks' }
      ],
      title: 'Blocks',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `[Text Component] ${removeMarkdown(title)}`,
      };
    }
  }
}

export const TextComponent_Blocks = {
  name: "TextComponent_Blocks",
  title: "Blocks",
  type: "object",
  fields: [
    {
      name: 'isTitle',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'icon',
      type: 'image',
      hidden: ({ parent }) => parent?.isTitle
    },
    {
      name: 'title',
      type: 'markdown',
      hidden: ({ parent }) => !parent?.isTitle
    },
    {
      name: 'description',
      type: 'markdown',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      isTitle: 'isTitle',
      media: 'icon'
    },
    prepare({ isTitle, title, subtitle, media }) {
      return {
        title: removeMarkdown(title) || removeMarkdown(subtitle),
        subtitle: title ? removeMarkdown(subtitle) : '',
        media: isTitle ? '' : media
      };
    }
  }
}