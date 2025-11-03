import { GCSE_API_KEY, GCSE_CX } from './variables'

const customSearchUrl = new URL('https://www.googleapis.com/customsearch/v1')
customSearchUrl.searchParams.append('key', GCSE_API_KEY)
customSearchUrl.searchParams.append('cx', GCSE_CX)
customSearchUrl.searchParams.append('searchType', 'image')

export const GCSE_IMAGES_API_URL = customSearchUrl
