# 苏州微众科技有限公司 (SZMICROZONE) · 12页旗舰级官网

> **长三角数字基建与产业赋能旗舰 · 始于 2011 · 苏州市吴中经济开发区**  
> 正版软件与信创总代 · 中国电信算力与Token联营 · 工业软件定制(CRM/ERP/MES) · IT渠道项目与供应链资金服务

---

## 一、 站点架构与 12 大核心页面清单

| 序号 | 页面文件 | 板块定位与核心交互功能 |
| :--- | :--- | :--- |
| **01** | `index.html` | **星耀中枢首页**：HTML5 Canvas 动态算力粒子网络、四大实力指标、六大业务矩阵、全网“微众”真伪辨析速查表 |
| **02** | `about.html` | **关于微众与舆情鉴真**：深度澄清与微众银行/微众信科及C端仿冒App的界限，展现2011–2026十五载发展历程 |
| **03** | `software-licensing.html` | **全球软件与信创矩阵**：支持实时分类筛选（金山WPS苏鲁总代、微软、Oracle、Adobe、西门子/AutoDesk工业软件、全栈信创） |
| **04** | `cloud-compute.html` | **智算云与异构算力**：内置「GPU算力集群在线选型器」（H800/H20/昇腾910B/L40S 实时算力与预算测算） |
| **05** | `telecom-token.html` | **中国电信 × 微众 Token 服务**：内置「Token集采精算器」，展示中国电信 OTN 专线直连与大模型统一网关 |
| **06** | `custom-software.html` | **工业软件与数字中台定制**：覆盖 AI-CRM、集团ERP、车间MES、立体库WMS、PLM/QMS 与 3D 数字孪生工厂 |
| **07** | `channel-capital.html` | **IT渠道与项目资金服务**：内置「IT供应链配资与账期模拟器」，详解最高 85% 集采垫资与联合投标赋能 |
| **08** | `security-data.html` | **数据要素与安全合规**：企业数据资产入表与银行数据贷融资、IPO软件正版化法务防御、AI Agent工场 |
| **09** | `industry-solutions.html` | **行业全景解决方案**：半导体装备、党政国央企信创、汽车零配件、生物医药、高校科研、跨国企业华东总部 |
| **10** | `ecosystem-partners.html` | **全球生态与渠道伙伴**：四大上游原厂阵营墙与“星火千帆”四类合作伙伴返利赋能计划 |
| **11** | `cases-insights.html` | **标杆案例与微众智库**：四大千万级实战脱敏案例与 2026 年度产业白皮书 |
| **12** | `contact.html` | **商务垂询与加密商机报备**：在线生成专属加密工单编号，展示苏州总部与南京、济南/青岛等节点矩阵 |

---

## 二、 快速推送至 GitHub / Gitee 并开启 Pages

```bash
# 一键初始化 Git、提交代码并推送到您的 GitHub 或 Gitee 仓库：
bash push-git.sh https://github.com/您的账号/szmicrozone-website.git
# 或推送至 Gitee：
bash push-git.sh https://gitee.com/您的账号/szmicrozone-website.git
```

* **GitHub Pages 自动部署**：项目已内置 `.github/workflows/deploy-pages.yml`，推送到 `main` 分支后，在 GitHub 仓库 `Settings -> Pages -> Build and deployment` 中选择 **GitHub Actions** 即可自动生成 HTTPS 站点。
* **本地 / Docker / Nginx 部署**：
  ```bash
  bash deploy.sh local 8080   # 本地预览
  bash deploy.sh docker       # Docker Compose 容器化启动
  bash deploy.sh nginx        # 同步至系统 /var/www/szmicrozone
  ```
