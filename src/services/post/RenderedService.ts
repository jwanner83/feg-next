import { JSDOM } from 'jsdom'

class RenderedService {
  getRenderedContent(content: string) {
    if (!content) {
      return content
    }

    const dom = this.parse(content)
  
    // add class to first paragraph
    const paragraph = dom.window.document.body.querySelector('p')
    paragraph && paragraph.classList.add('first')

    return dom.window.document.body.innerHTML
  }

  private parse(content: string): JSDOM {
    return new JSDOM(content);
  }
}

export const renderedService = new RenderedService()