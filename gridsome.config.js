// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Омоложение как стиль жизни",
  siteUrl: `https://sama-sebe-doctor.ml/`,
  host: "0.0.0.0",
  titleTemplate: "%s: омоложение как стиль жизни",
  siteDescription: "Мы хотим быть красивыми и записываемся на регулярные процедуры лазерной эпиляции и наращивания ногтей,  упуская самое важное - необходимость омоложения организма изнутри. Уверенность в себе придет, когда мы начнем чувствовать себя и выглядеть моложе",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
