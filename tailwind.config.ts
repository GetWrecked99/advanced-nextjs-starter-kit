import type { Config } from 'tailwindcss'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {},
    plugins: [],
    corePlugins: {
        preflight: false
    }
}

export default config
