import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nonebot Chikari银趴帮助在线文档",
  description: "Nonebot Chikari银趴帮助在线文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '银趴帮助文档', link: '/' },
      { text: '工作讲解', link: '/work' }
    ],

    sidebar: [
      {
        text: '银趴相关',
        items: [
          { text: '帮助文档', link: '/' },
          { text: '工作讲解', link: '/work' }
        ]
      },
      {
        
        text: '钓鱼相关',
        items: [
          { text: '帮助文档', link: '/fishing' },
          { text: '概率讲解', link: '/fishingprobability' }
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joeyep114514/nonebot_plugin_chikari_yinpa_Fix' },
      { icon: 'qq', link: 'https://qm.qq.com/q/80jJWKp4r0' }
    ],
  footer: {
      message: 'The Plugin is licensed under the MIT License.',
      copyright: '/by_nc.svg'
    }
  }
})
