import { removeMarkdown } from "../../utils/functions";

export default {
  name: "PeopleShowcase",
  title: "People Showcase",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        { type: 'PeopleShowcase_Item' }
      ],
      title: 'List',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list'
    },
    prepare({ title, list }) {
      return {
        title: `[People Showcase] ${removeMarkdown(title)}`,
        subtitle: list.length ? `${list.length} people` : 'No people yet.',
      };
    }
  }
}

export const PeopleShowcase_Item = {
  name: 'PeopleShowcase_Item',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cryptonym',
      type: 'string',
      title: 'Cryptonym',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      cryptonym: 'cryptonym',
      subtitle: 'description',
      media: 'img'
    },
    prepare({ title, cryptonym, subtitle, media }) {
      return {
        title: `${title} (${cryptonym})`,
        subtitle: removeMarkdown(subtitle),
        media,
      }
    },
  },
}