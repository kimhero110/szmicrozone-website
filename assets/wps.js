/* WPS 办公专区：公共页眉页脚、新闻数据、交互 */
const WPS_NAV = [
  ["wps.html", "产品总览"],
  ["wps-solutions.html", "行业应用"],
  ["wps-news.html", "新闻资讯"],
  ["channel-activation.html", "渠道商机赋能"],
  ["wps.html#buy", "采购服务"]
];

// 新闻数据。source 为空表示本公司原创内容。
const WPS_NEWS = [
  {
    id: "authorization-2026", date: "2026-04-01", cat: "公司动态",
    title: "苏州微众科技获金山办公“企业区域总分销商”授权",
    summary: "苏州微众科技有限公司获北京金山办公软件股份有限公司授予“企业区域总分销商”资质，授权期为 2026 年 4 月 1 日至 2027 年 3 月 31 日。",
    body: [
      "苏州微众科技有限公司获北京金山办公软件股份有限公司授予 2026 年度“企业区域总分销商（Corporate Regional Master Distributor）”资质，授权编码 NO. JSBG-FXQY20260401。",
      "## 授权范围",
      "本次授权有效期为 2026 年 4 月 1 日至 2027 年 3 月 31 日，授权区域为中国大陆，适用用户类型为非 NAME 用户。具体授权内容以金山办公经销商管理制度及双方签署的协议为准。",
      "## 服务内容",
      "授权期内，微众科技将在授权范围内为企业客户及下游渠道伙伴提供 WPS Office、WPS 365 等金山办公产品的正版采购、选型咨询、部署实施、迁移与培训服务。",
      "客户可通过本站“采购服务”栏目或联系 rong.s@szmicrozone.com（电话 18662277800）咨询具体方案。"
    ],
    source: ""
  },
  {
    id: "wps365-launch", date: "2024-04-09", cat: "产品动态",
    title: "金山办公发布 WPS 365，面向组织的一站式 AI 办公平台",
    summary: "WPS 365 整合文档、协作与 AI 能力，面向政企组织提供一站式办公服务，支持公有云与私有化等多种部署方式。",
    body: [
      "金山办公于 2024 年 4 月发布面向组织和企业的办公平台 WPS 365。该平台整合了 WPS Office、金山文档、即时沟通、会议、日程等组件，并与 WPS AI 能力相结合。",
      "## 我们的理解",
      "对企业客户而言，WPS 365 的价值在于把“文档处理”与“团队协作”放到统一平台下管理：统一账号、统一权限、统一的文档资产沉淀，降低多套工具并行带来的管理成本。",
      "对于有数据安全要求的政企客户，可结合私有化部署方案评估落地路径。微众科技可协助进行需求梳理、版本选型与部署规划。"
    ],
    source: "根据金山办公公开发布信息整理，产品功能与版本以金山办公官方说明为准。"
  },
  {
    id: "wps-ai", date: "2023-07-06", cat: "产品动态",
    title: "WPS AI 开启公测，大模型能力融入文字、表格、演示与 PDF",
    summary: "WPS AI 将生成式 AI 能力融入 WPS 各组件，覆盖内容起草、改写润色、表格公式与数据分析、演示文稿生成等场景。",
    body: [
      "金山办公推出的 WPS AI 将大模型能力融入 WPS 文字、表格、演示、PDF 等组件，提供内容起草、改写润色、摘要提炼、表格公式生成、数据分析与演示文稿生成等功能。",
      "## 企业场景建议",
      "在企业落地 AI 办公时，建议优先关注三点：数据是否出域、权限是否与现有组织架构一致、以及使用效果能否被度量。微众科技可协助客户在试点部门开展 PoC 测试，再逐步推广。"
    ],
    source: "根据金山办公公开发布信息整理，功能可用范围以官方说明及实际授权版本为准。"
  },
  {
    id: "xinchuang-migration-guide", date: "2026-09-15", cat: "实践洞察",
    title: "从 MS Office 到 WPS：企业办公软件迁移的五个关键步骤",
    summary: "结合项目经验，总结企业办公软件迁移中的评估、兼容性测试、宏与模板处理、培训推广与运维保障要点。",
    body: [
      "越来越多企业在信创替代或正版化合规的背景下，考虑将办公软件迁移到 WPS。根据我们的项目经验，迁移成败往往不取决于软件本身，而取决于前期准备是否充分。",
      "## 一、现状盘点",
      "统计终端数量、操作系统类型（Windows / 统信 UOS / 麒麟）、现有 Office 版本，以及高频使用的业务模板、宏和插件。",
      "## 二、兼容性测试",
      "抽取各部门最常用的 50–100 份真实文档做打开、编辑、打印测试，重点关注复杂表格公式、VBA 宏、公文格式与第三方插件。",
      "## 三、模板与宏改造",
      "对无法直接兼容的宏和模板制定改造清单，必要时使用 WPS 的 JS 宏或加载项重新实现。",
      "## 四、分批推广与培训",
      "建议先选取 1–2 个部门试点，形成操作手册与常见问题清单后再全面推广。",
      "## 五、运维与持续支持",
      "建立统一的部署、升级与问题反馈渠道，确保迁移后用户体验平稳。"
    ],
    source: ""
  },
  {
    id: "event-template", date: "2026-11-20", cat: "活动预告",
    title: "【活动预告】WPS 365 政企数字办公交流会 · 苏州站（筹备中）",
    summary: "交流会内容涵盖 WPS 365 产品介绍、私有化部署实践与 AI 办公应用演示，具体时间地点将另行通知。",
    body: [
      "本次交流会正在筹备中，拟面向苏州及周边地区的政企、制造业 IT 负责人，内容包括 WPS 365 产品介绍、私有化部署实践分享与 AI 办公应用现场演示。",
      "具体时间、地点及报名方式将在本页面更新。如有意参加，可联系 rong.s@szmicrozone.com（电话 18662277800）登记。"
    ],
    source: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const cur = location.pathname.split("/").pop() || "wps.html";

  const h = document.getElementById("wps-header");
  if (h) {
    h.innerHTML = `<header class="wh"><div class="w">
      <a class="wh-brand" href="index.html"><img src="assets/img/logo-mark.svg" alt=""><span>苏州微众科技<small>SZMICROZONE</small></span></a>
      <span class="wh-sep"></span><a class="wh-zone" href="wps.html">WPS 办公专区</a>
      <nav id="wn">${WPS_NAV.map(([u, t]) => `<a href="${u}" class="${u === cur || (cur === "wps-article.html" && u === "wps-news.html") ? "on" : ""}">${t}</a>`).join("")}<a href="index.html">返回主站</a></nav>
      <a class="wh-cta" href="contact.html">获取报价</a>
      <button class="wh-tg" id="wt" aria-label="菜单">☰</button>
    </div></header>`;
    document.getElementById("wt").onclick = () => document.getElementById("wn").classList.toggle("open");
  }

  const f = document.getElementById("wps-footer");
  if (f) {
    f.innerHTML = `<footer class="wf"><div class="w"><div>
      <div><h5>苏州微众科技有限公司</h5><p>金山办公企业区域总分销商（2026.04.01–2027.03.31）<br>授权编码 NO. JSBG-FXQY20260401</p><p style="margin-top:8px"><a href="mailto:rong.s@szmicrozone.com" style="color:#fff">rong.s@szmicrozone.com</a><br><a href="tel:18662277800" style="color:#fff;font-weight:600">电话：18662277800</a></p><div style="margin-top:12px;display:flex;align-items:center;gap:10px;"><img src="assets/img/contact-qrcode.png" alt="微信联系二维码" width="68" height="68" style="border-radius:4px;background:#fff;padding:2px;display:block;" /><span style="font-size:12px;color:#A0A6B1;line-height:1.4;"><strong style="color:#fff;display:block;">微信扫码咨询</strong>获取 WPS 报价方案</span></div></div>
      <div><h5>WPS 产品</h5><a href="wps.html#products">WPS 365</a><a href="wps.html#products">WPS Office 政企版</a><a href="wps.html#products">WPS AI</a><a href="wps.html#products">金山文档私有化</a></div>
      <div><h5>应用与资讯</h5><a href="wps-solutions.html">行业应用</a><a href="wps-news.html">新闻资讯</a><a href="wps.html#buy">采购服务</a></div>
      <div><h5>主站</h5><a href="index.html">首页</a><a href="about.html">关于我们</a><a href="contact.html">联系我们</a></div>
    </div><div class="cp">© ${new Date().getFullYear()} 苏州微众科技有限公司。WPS、金山办公、WPS 365、WPS AI 等为北京金山办公软件股份有限公司的商标或注册商标，本站仅用于说明授权分销的产品。</div></div></footer>`;
  }

  // 证书高清灯箱
  document.querySelectorAll("[data-lb]").forEach(el => el.addEventListener("click", () => {
    const img = el.tagName === "IMG" ? el : el.querySelector("img");
    if (!img) return;
    const lb = document.createElement("div");
    lb.className = "lb on";
    lb.innerHTML = `
      <div style="position:relative;max-width:92vw;max-height:92vh;display:flex;flex-direction:column;align-items:center;background:#fff;border-radius:12px;padding:14px;box-shadow:0 25px 60px rgba(0,0,0,0.5);">
        <div style="width:100%;display:flex;justify-content:space-between;align-items:center;padding:0 4px 10px;border-bottom:1px solid #EAEAEA;font-size:13px;color:#333;">
          <span><strong>金山办公企业区域总分销商</strong> · 授权证书原件核验（NO. JSBG-FXQY20260401）</span>
          <button style="background:#F2F3F5;border:none;border-radius:6px;width:28px;height:28px;font-size:16px;cursor:pointer;color:#555;display:grid;place-items:center;" aria-label="关闭">✕</button>
        </div>
        <img src="${img.src}" alt="${img.alt}" style="max-height:80vh;max-width:88vw;object-fit:contain;margin-top:10px;border-radius:4px;border:1px solid #eee;">
      </div>
    `;
    lb.onclick = (e) => {
      if (e.target === lb || e.target.closest("button")) lb.remove();
    };
    document.body.appendChild(lb);
  }));

  // 行业 Tab
  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach(b => b.addEventListener("click", () => {
    tabs.forEach(x => x.classList.toggle("on", x === b));
    document.querySelectorAll("[data-pane]").forEach(p => p.style.display = p.dataset.pane === b.dataset.tab ? "" : "none");
  }));

  // 新闻列表
  const list = document.getElementById("news-list");
  if (list) {
    const render = cat => {
      list.innerHTML = WPS_NEWS.filter(n => cat === "全部" || n.cat === cat)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(n => {
          const [y, m, d] = n.date.split("-");
          return `<div class="news-item"><div class="d"><b>${m}.${d}</b>${y}</div><div>
            <span class="cat">${n.cat}</span><h3 style="display:inline"><a href="wps-article.html?id=${n.id}">${n.title}</a></h3>
            <p style="margin-top:8px">${n.summary}</p></div></div>`;
        }).join("");
    };
    render("全部");
    document.querySelectorAll("[data-ncat]").forEach(b => b.addEventListener("click", () => {
      document.querySelectorAll("[data-ncat]").forEach(x => x.classList.toggle("on", x === b));
      render(b.dataset.ncat);
    }));
  }

  // 首页最新资讯
  const latest = document.getElementById("news-latest");
  if (latest) {
    latest.innerHTML = [...WPS_NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3).map(n =>
      `<a class="card" href="wps-article.html?id=${n.id}"><span class="cat">${n.cat}</span><span style="color:var(--mute);font-size:13px">${n.date}</span>
       <h3 style="margin-top:12px">${n.title}</h3><p>${n.summary}</p><span class="more">阅读全文 →</span></a>`).join("");
  }

  // 文章详情
  const art = document.getElementById("article");
  if (art) {
    const n = WPS_NEWS.find(x => x.id === new URLSearchParams(location.search).get("id")) || WPS_NEWS[0];
    document.title = `${n.title} | 苏州微众科技 WPS 办公专区`;
    art.innerHTML = `<a href="wps-news.html" style="color:var(--mute);font-size:14px">← 返回新闻资讯</a>
      <div style="margin-top:20px"><span class="cat">${n.cat}</span></div><h1>${n.title}</h1>
      <div class="meta">${n.date} · ${n.source ? "资讯整理" : "苏州微众科技"}</div>
      ${n.body.map(p => p.startsWith("## ") ? `<h2>${p.slice(3)}</h2>` : `<p>${p}</p>`).join("")}
      ${n.source ? `<div class="src">信息来源：${n.source}</div>` : ""}`;
  }
});
