import { removeMarkdown } from "../../utils/functions";

export default {
  name: "standout",
  title: "Sekcja z wyróżnionym tekstem i zdjęciem",
  type: "object",
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'markdown',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'markdown',
    },
    {
      name: 'standout',
      title: 'Standout',
      type: 'markdown',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'reversed',
      title: 'Is Reversed?',
      description: 'Default the component shows photo on the right side. If you want to show Image on the left side, check this box.',
      type: 'boolean',
      initialValue: false
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph',
    },
    prepare({ title, subtitle }) {
      return {
        title: title ? removeMarkdown(title) : 'Komponent bez tytułu',
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}