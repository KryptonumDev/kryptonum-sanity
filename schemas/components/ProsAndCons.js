import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'ProsAndCons',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'markdown'
    },
    {
      name: 'ProsAndCons',
      type: 'array',
      of: [{type: 'ListOfProsAndCons'}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title: `[ProsAndCons] ${removeMarkdown(title)}`
      }
    }
  }
}

export const ListOfProsAndCons = {
  name: "ListOfProsAndCons",
  type: "object",
  fields: [
    {
      name: 'content',
      type: 'markdown'
    },
    {
      name: 'isPros',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'content',
      value: 'isPros'
    },
    prepare({ title, value }) {
      return {
        title: `[${value ? "pros" : "con"}] - ${removeMarkdown(title)}`
      }
    }
  }
}