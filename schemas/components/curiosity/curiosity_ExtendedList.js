import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_ExtendedList",
  title: "Sekcja z rozszerzoną listą ze zdjęciami",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'markdown',
      title: 'Subtitle',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'curiosity_ExtendedList_Array',
        }
      ],
      title: 'List',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subtitle'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}

export const curiosity_ExtendedList_Array = {
  name: "curiosity_ExtendedList_Array",
  title: "Lista",
  type: "object",
  fields: [
    {
      name: 'paragraph',
      type: 'markdown'
    },
    {
      name: 'item',
      type: 'array',
      of: [
        {
          type: 'curiosity_ExtendedList_Array_Item'
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'paragraph',
    },
    prepare({ title }) {
      return {
        title: removeMarkdown(title),
      };
    }
  }
}

export const curiosity_ExtendedList_Array_Item = {
  name: "curiosity_ExtendedList_Array_Item",
  title: "Lista",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image'
    },
    {
      name: 'paragraph',
      type: 'markdown'
    },
  ],
  preview: {
    select: {
      title: 'paragraph',
      media: 'img'
    },
    prepare({ title, media }) {
      return {
        title: removeMarkdown(title),
        media: media
      };
    }
  }
}