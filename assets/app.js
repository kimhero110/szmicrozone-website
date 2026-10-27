/**
 * SUZHOU MICROZONE TECHNOLOGY CO., LTD. (苏州微众科技有限公司)
 * Interactive Engine: Navigation, Particle Constellation, Calculators & Filters
 */

const SITE_PAGES = [
  { href: "index.html", title: "首页 · 星耀中枢" },
  { href: "about.html", title: "关于微众 · 舆情鉴真" },
  { href: "software-licensing.html", title: "全球软件与信创矩阵" },
  { href: "cloud-compute.html", title: "智算云与异构算力" },
  { href: "telecom-token.html", title: "中国电信×微众Token" },
  { href: "custom-software.html", title: "工业软件与数字中台" },
  { href: "channel-capital.html", title: "IT渠道与资金赋能" },
  { href: "security-data.html", title: "数据要素与安全合规" },
  { href: "industry-solutions.html", title: "行业全景解决方案" },
  { href: "ecosystem-partners.html", title: "全球生态与渠道伙伴" },
  { href: "cases-insights.html", title: "标杆案例与智库" },
  { href: "contact.html", title: "商务垂询与项目报备" }
];

document.addEventListener("DOMContentLoaded", () => {
  initSharedChrome();
  initParticleCanvas();
  initSoftwareFilter();
  initTokenCalculator();
  initComputeCalculator();
  initCapitalSimulator();
  initContactForm();
});

function initSharedChrome() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  const headerHost = document.getElementById("site-header");
  if (headerHost) {
    const navLinksHtml = SITE_PAGES.map(p => {
      const isActive = p.href === currentFile ? "active" : "";
      return `<a href="${p.href}" class="nav-link ${isActive}">${p.title}</a>`;
    }).join("");

    headerHost.innerHTML = `
      <div class="topbar">
        <div class="container topbar-inner">
          <div class="topbar-badges">
            <span class="topbar-badge"><span class="dot-live"></span> 苏州吴中总部 · 华东智算与软件总分销中枢</span>
            <span class="topbar-badge">｜ 始于 2011 · 注册资本 1000万 · 金山办公苏鲁总分销 · 中国电信天翼云算力/Token核心战略伙伴</span>
          </div>
          <div>
            <span>7×24 政企专线：<strong>400-828-SZMZ / 0512-6658-XXXX</strong></span>
          </div>
        </div>
      </div>
      <header class="navbar">
        <div class="container nav-inner">
          <a href="index.html" class="brand">
            <div class="brand-mark">MZ</div>
            <div class="brand-text">
              <span class="brand-title">苏州微众科技</span>
              <span class="brand-sub">SZMICROZONE TECH</span>
            </div>
          </a>
          <nav class="nav-links">
            ${navLinksHtml}
          </nav>
          <a href="contact.html" class="nav-cta">项目报备 / 算力申领</a>
        </div>
      </header>
    `;
  }

  const footerHost = document.getElementById("site-footer");
  if (footerHost) {
    footerHost.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <div class="brand" style="margin-bottom:16px;">
                <div class="brand-mark">MZ</div>
                <div class="brand-text">
                  <span class="brand-title">苏州微众科技有限公司</span>
                  <span class="brand-sub">SUZHOU MICROZONE TECHNOLOGY CO., LTD.</span>
                </div>
              </div>
              <p style="color:var(--text-secondary);font-size:13.5px;margin-bottom:16px;">
                成立于2011年4月，坐落于江苏省苏州市吴中经济开发区。深耕正版软件总分销、中国电信联名Token与智算中心服务、企业级CRM/ERP/MES高端定制、以及IT渠道供应链与项目资金赋能，致力于成为中国长三角最具领导力的数字基建与产业赋能旗舰。
              </p>
              <div class="tag-list">
                <span class="tag">金山WPS苏鲁总代</span>
                <span class="tag">微软/甲骨文核心伙伴</span>
                <span class="tag">中国电信Token联营</span>
                <span class="tag">IT供应链资金池</span>
              </div>
            </div>
            <div class="footer-col">
              <h4>核心业务矩阵</h4>
              <ul>
                <li><a href="software-licensing.html">全球正版软件与国产信创</a></li>
                <li><a href="cloud-compute.html">多云管理与AIDC智算底座</a></li>
                <li><a href="telecom-token.html">中国电信×微众 大模型Token服务</a></li>
                <li><a href="custom-software.html">CRM / ERP / MES 软件定制</a></li>
                <li><a href="channel-capital.html">IT渠道项目孵化与资金服务</a></li>
                <li><a href="security-data.html">数据资产入表与零信任安全</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>标杆与生态</h4>
              <ul>
                <li><a href="about.html">企业档案与全网舆情鉴真</a></li>
                <li><a href="industry-solutions.html">八大重点行业数字化方案</a></li>
                <li><a href="ecosystem-partners.html">全球50+签约软件与硬件大厂</a></li>
                <li><a href="cases-insights.html">客户标杆案例与智库白皮书</a></li>
                <li><a href="contact.html">渠道加盟与大项目联合投标</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>四大核心优势</h4>
              <ul>
                <li><a href="software-licensing.html">全栈合规：国际巨头+信创双轨</a></li>
                <li><a href="telecom-token.html">国资云网：电信级低时延Token</a></li>
                <li><a href="custom-software.html">懂制造业：深耕长三角智造工厂</a></li>
                <li><a href="channel-capital.html">资金护航：亿元级渠道授信与垫资</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>总部与区域中心</h4>
              <ul>
                <li><a href="contact.html">总部：苏州市吴中经济开发区</a></li>
                <li><a href="contact.html">江苏业务中心（南京/苏州/无锡）</a></li>
                <li><a href="contact.html">山东业务中心（济南/青岛）</a></li>
                <li><a href="contact.html">华东智算节点（苏州吴江/上海临港）</a></li>
                <li><a href="contact.html">邮箱：bd@szmicrozone.com</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <div>© 2011–2026 苏州微众科技有限公司 (Suzhou Microzone Technology Co., Ltd.) 版权所有 · 苏ICP备XXXXXXXX号</div>
            <div>重要声明：本公司为苏州本土独立IT科技与算力服务集团，与“深圳前海微众银行”及“深圳微众信科”无股权隶属关系。</div>
          </div>
        </div>
      </footer>
    `;
  }
}

function initParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = Array.from({ length: 52 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 2 + 1
  }));

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 240, 255, 0.55)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 145) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 145) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

function initSoftwareFilter() {
  const buttons = document.querySelectorAll("[data-filter-btn]");
  const items = document.querySelectorAll("[data-software-cat]");
  if (!buttons.length || !items.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-filter-btn");
      items.forEach(card => {
        const cat = card.getAttribute("data-software-cat");
        if (target === "all" || cat.includes(target)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function initTokenCalculator() {
  const dailySlider = document.getElementById("token-daily-slider");
  const modelSelect = document.getElementById("token-model-select");
  const linkSelect = document.getElementById("token-link-select");
  if (!dailySlider || !modelSelect) return;

  function update() {
    const millionTokensPerDay = parseFloat(dailySlider.value);
    const unitPrice = parseFloat(modelSelect.value); // RMB per 1M tokens
    const linkBonus = linkSelect ? parseFloat(linkSelect.value) : 1;

    document.getElementById("token-daily-val").textContent = `${millionTokensPerDay} M Tokens / 日`;
    const monthlyMillion = millionTokensPerDay * 30;
    const rawCost = monthlyMillion * unitPrice * linkBonus;
    const microzoneCost = rawCost * 0.72; // 28% telecom bundle saving
    const saved = rawCost - microzoneCost;

    document.getElementById("token-monthly-total").textContent = `${monthlyMillion.toLocaleString()} M`;
    document.getElementById("token-est-cost").textContent = `¥ ${Math.round(microzoneCost).toLocaleString()} / 月`;
    document.getElementById("token-est-save").textContent = `¥ ${Math.round(saved).toLocaleString()} / 月`;
  }

  dailySlider.addEventListener("input", update);
  modelSelect.addEventListener("change", update);
  if (linkSelect) linkSelect.addEventListener("change", update);
  update();
}

function initComputeCalculator() {
  const gpuSlider = document.getElementById("gpu-count-slider");
  const archSelect = document.getElementById("gpu-arch-select");
  if (!gpuSlider || !archSelect) return;

  function update() {
    const gpus = parseInt(gpuSlider.value, 10);
    const pricePerGpu = parseFloat(archSelect.value);
    document.getElementById("gpu-count-val").textContent = `${gpus} 卡 (${gpus / 8} 节点)`;
    const totalPflops = (gpus * 1.98).toFixed(1);
    const monthlyFee = gpus * pricePerGpu;

    document.getElementById("gpu-pflops-out").textContent = `${totalPflops} PFLOPS (FP16)`;
    document.getElementById("gpu-price-out").textContent = `¥ ${monthlyFee.toLocaleString()} / 月`;
  }

  gpuSlider.addEventListener("input", update);
  archSelect.addEventListener("change", update);
  update();
}

function initCapitalSimulator() {
  const amountSlider = document.getElementById("capital-amount-slider");
  const cycleSlider = document.getElementById("capital-cycle-slider");
  if (!amountSlider || !cycleSlider) return;

  function update() {
    const amountWan = parseInt(amountSlider.value, 10);
    const days = parseInt(cycleSlider.value, 10);
    document.getElementById("capital-amount-val").textContent = `¥ ${amountWan.toLocaleString()} 万元`;
    document.getElementById("capital-cycle-val").textContent = `${days} 天账期`;

    const creditLine = Math.round(amountWan * 0.85);
    const approvalHours = amountWan <= 500 ? "24 小时极速过会" : "48 小时专委会批复";

    document.getElementById("capital-credit-out").textContent = `¥ ${creditLine.toLocaleString()} 万元`;
    document.getElementById("capital-speed-out").textContent = approvalHours;
  }

  amountSlider.addEventListener("input", update);
  cycleSlider.addEventListener("input", update);
  update();
}

function initContactForm() {
  const form = document.getElementById("mz-contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const out = document.getElementById("mz-form-feedback");
    if (out) {
      out.style.display = "block";
      out.innerHTML = "✅ <strong>尊贵的合作伙伴，您的需求已加密直达苏州微众总裁办与方案中心！</strong> 专属架构师与商务总监将在 30 分钟内与您联系（已分配工单号：MZ-2026-" + Math.floor(100000 + Math.random() * 900000) + "）。";
    }
    form.reset();
  });
}
