# <div style="text-align:center">docsify-vuepress-theme</div>

> A vuepress-theme docsify plugin

![npm](https://img.shields.io/npm/v/docisfy-vuepress-theme.svg)

# Why not vuepress?

[vuepress](https://vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F)配置项太多，启动速度慢，过于笨重

# Install

```
// insert after vue.css(or other theme)
<link rel="stylesheet" href="https://unpkg.com/docisfy-vuepress-theme/dist/style.min.css" />

// insert after docsify.min.js
<script src="https://unpkg.com/docisfy-vuepress-theme/dist/index.min.js"></script>
```

# Usage

> Just intall it and have fun!

## 1 menu

### 1.1 字体随着目录的级数越来越小

![font.png](https://github.com/luvsunlight/docisfy-vuepress-theme/blob/master/screenshots/font.png)

### 1.2 选中子目录，父目录也会高亮

![highlightparent.png](https://github.com/luvsunlight/docisfy-vuepress-theme/blob/master/screenshots/highlightparent.png)

### 1.3 选中子目录时，其会有一个额外的背景高亮颜色

![highlight.png](https://github.com/luvsunlight/docisfy-vuepress-theme/blob/master/screenshots/highlight.png)

### 1.4 目录折叠功能,并且有>^等箭头

![menufold.png](https://github.com/luvsunlight/docisfy-vuepress-theme/blob/master/screenshots/highlightparent.png)

## 2 代码高亮

将原本 docsify 的代码换成了 vuepress 风格的代码块，看起来更专业和好看

![code.png](https://github.com/luvsunlight/docisfy-vuepress-theme/blob/master/screenshots/code.png)

## 3 markdown 扩展

## usage

![mdExtension.png](https://github.com/luvsunlight/docisfy-vuepress-theme/blob/master/screenshots/mdExtension.png)

```
:::tip/danger/warnign
content
:::
```

# Related

[docsify](https://docsify.js.org/#/)

# TODO
* 用less重写css（配合gulp）
* 增加可选项，比如哪些细节不需要
* link后面接图标


# Changelog

2019/6/25 - initial release
