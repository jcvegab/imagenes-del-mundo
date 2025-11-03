/**
 * Types for Google Custom Search Image API response
 * @todo Add more fields if needed
 */
export type GoogleCSResponse = {
  items: GoogleCSItem[]
}

export type GoogleCSItem = {
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  mime: string
  fileFormat: string
  image: GoogleCSImage
}

export type GoogleCSImage = {
  contextLink: string
  height: number
  width: number
  byteSize: number
  thumbnailLink: string
  thumbnailHeight: number
  thumbnailWidth: number
}

export type ImageItem = {
  id: string
  url: string
  alt: string
}
