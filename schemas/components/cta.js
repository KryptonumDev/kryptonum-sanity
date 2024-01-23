export default {
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Theme',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' }
        ],
        layout: 'radio',
        direction: "horizontal"
      },
      initialValue: 'primary',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      description: 'a text which will be visible in the Button',
      fieldset: 'content',
    },
    {
      title: 'Link',
      name: 'href',
      type: 'string',
      description: 'A URL, either relative or absolute (https://)',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Invalid URL format. Please provide a relative URL (starting with "/") or an absolute URL (with "https").';
          }
          return true;
        }),
      fieldset: 'content',
    }
  ],
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: { columns: 2 },
    },
  ],
  preview: {
    select: {
      title: 'text',
      theme: 'theme',
      href: 'href'
    },
    prepare({ title, theme, href }) {
      return {
        title: title,
        subtitle: `'${theme}' button linked to '${href}'`,
      }
    }
  }
}