import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QueueSpy Documentation",
  description: "Keeping Players In The Know",
  lang: "en-GB",
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico'}]],

  themeConfig: {
    logo: '/Black_ColorBG.webp',
    siteTitle: 'QueueSpy',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Discord', link: 'https://discord.gg/TxfdASpmmx' }
    ],

    sidebar: [
      {
        items: [
          { 
            text: 'Supported Games',
            collapsed: false,
            items: [
              { text: 'Getting Started', link: '/supported-games/getting-started' },
              { text: 'Ark: Survival Evolved', link: '/supported-games/ark-survival-evolved' },
              { text: 'DayZ', link: '/supported-games/dayz' },
              { text: 'Hell Let Loose', link: '/supported-games/hell-let-loose' },
              { text: 'Minecraft', link: '/supported-games/minecraft' },
              { text: 'Rust', link: '/supported-games/rust' },
              { text: 'Squad', link: '/supported-games/squad' },
              { text: 'The Isle', link: '/supported-games/the-isle' },
            ]
          },
          { text: 'Connection Troubleshooting', link: '/connection-troubleshooting' },
          { text: 'FAQs', link: '/faqs' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'discord', link: 'https://discord.gg/TxfdASpmmx'}
    ]
  }
})
