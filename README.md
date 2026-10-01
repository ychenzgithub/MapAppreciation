# 🗺️ 古地图超清微距交互赏析平台 (Map Appreciation)

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀_在线访问-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://ychenzgithub.github.io/MapAppreciation/)
[![GitHub repo size](https://img.shields.io/github/repo-size/ychenzgithub/MapAppreciation?style=for-the-badge)](https://github.com/ychenzgithub/MapAppreciation)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

### 🌐 网页在线体验入口（点击直接进入）

# 👉 **[https://ychenzgithub.github.io/MapAppreciation/](https://ychenzgithub.github.io/MapAppreciation/)** 👈

> **无需配置任何本地环境**，基于浏览器即可体验亿级像素传世古地图的毫秒级加载与毫发毕现的微距漫游。

---

## 📖 项目简介

**Map Appreciation** 是一个专注于收录十六至十七世纪东西方文明交流时期极具学术、艺术与科学价值的高清历史地图微距赏析平台。本项目依托**金字塔瓦片切片技术（Deep Zoom Pyramid）**与现代 WebGIS 交互，打破传统数字地图清晰度不足、加载卡顿的瓶颈，为历史地理爱好者、学者及大众提供沉浸式的古地图鉴赏体验。

---

## 🏛️ 收录舆图典藏

### 1. 《坤舆万国全图》 (1602年 · 明万历三十年)
- **绘著者**：意大利耶稣会士 **利玛窦 (Matteo Ricci)** 与明代工部员外郎 **李之藻**
- **底图规格**：原图 11,726 × 5,266 像素六条屏木刻拓本
- **鉴赏要点**：
  - 首创以中国为中心的“中央经线”世界全景投影（彭纳投影）；
  - 奠定现代中文世界绝大多数地理译名体系（如“亚细亚”、“地中海”、“太平洋”、“加拿大”、“大西洋”等）；
  - 边缘附有托勒密九重天仪象图、南北极半球投影、节气中气图与四角科学附图。

### 2. 《中国新图志 · 中国总图》 (1655年 · 清顺治十二年)
- **编著者**：意大利传教士 **卫匡国 (Martino Martini)** 主撰 · 荷兰地图巨擘 **约翰·布劳 (Joan Blaeu)** 雕铜版套色印行
- **底图规格**：原图 7,768 × 6,126 像素阿姆斯特丹手工套色精装铜版画（美国国会图书馆珍藏）
- **鉴赏要点**：
  - 欧洲历史上第一部严谨测绘中国全境的科学地图集，李约瑟尊其为“欧洲中国地理学之父”；
  - 首次将中国“两京十三省”及长城、黄河九曲置于近代托勒密球形经纬度坐标网中；
  - 彻底解开欧洲数百年来将“契丹”（Cathay）与“中国”（China）割裂误读的千古悬案；
  - 荷式巴洛克华美卷标中汉服仕女、儒士大夫与西洋学者交相辉映，版画艺术价值极高。

---

## ✨ 核心特色功能

- 🔍 **超清金字塔多级漫游**：采用 256×256 瓦片切片金字塔（0~5/6 级），支持数亿像素原图丝滑缩放，墨线与朱印清晰可辨。
- ✈️ **一键平滑飞行动画**：提供核心人文地理坐标（如万里长城、京师北直隶、江南水网、黄河星宿海、台湾北回归线、澳门港口等）的一键平滑飞向与微距对焦。
- 🖥️ **沉浸式全屏观摩**：支持右上角全屏浮动按钮，或直接按下键盘快捷键 **`F`** 键进入无干扰全屏沉浸模式。
- 📜 **学术级图文解说与切片对位**：包含宏观制图背景、科学测量革新、珍禽异兽/版画艺术解读及独创的“地名密码与音译/拉丁考据指南”。

---

## 🛠️ 本地运行与开发

本项目为轻量级纯前端架构，无需安装 Node.js 或复杂后端，克隆后即可本地运行：

```bash
# 1. 克隆本仓库
git clone https://github.com/ychenzgithub/MapAppreciation.git
cd MapAppreciation

# 2. 启动轻量静态 Web 服务
python3 -m http.server 8080

# 3. 在浏览器中打开
# http://localhost:8080
```

### 🗺️ 自定义切片生成
若需为新地图生成瓦片：
```bash
# 安装 Python 图像处理依赖
pip install Pillow

# 执行切片生成脚本
python3 tile_generator.py
```

---

## 📄 版权与许可

- 本项目代码遵循 [MIT License](LICENSE)。
- 地图图像资源来源于美国国会图书馆（LOC）、日本京都大学等公有领域（Public Domain）数字化典藏。
