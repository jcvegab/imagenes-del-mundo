import { config } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'

const head = createHead()

config.global.plugins = [head]
