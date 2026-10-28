/**
 * SUZHOU MICROZONE TECHNOLOGY CO., LTD. (苏州微众科技有限公司)
 * Shared chrome (navigation / footer), reveal motion, calculators & filters
 */

// 主导航（8 项）。group 用于让二级页面高亮所属栏目。
const NAV_ITEMS = [
  { href: "index.html", title: "首页", group: ["index.html"] },
  { href: "wps.html", title: "WPS 办公", group: ["wps.html", "wps-solutions.html", "wps-news.html", "wps-article.html"] },
  { href: "channel-activation.html", title: "渠道赋能", group: ["channel-activation.html", "channel-capital.html"] },
  { href: "software-licensing.html", title: "软件与信创", group: ["software-licensing.html", "security-data.html"] },
  { href: "cloud-compute.html", title: "智算与Token", group: ["cloud-compute.html", "telecom-token.html"] },
  { href: "custom-software.html", title: "软件定制", group: ["custom-software.html"] },
  { href: "industry-solutions.html", title: "行业方案", group: ["industry-solutions.html", "cases-insights.html"] },
  { href: "about.html", title: "关于我们", group: ["about.html", "ecosystem-partners.html"] }
];

document.addEventListener("DOMContentLoaded", () => {
  initSharedChrome();
  initReveal();
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
    const navLinksHtml = NAV_ITEMS.map(p => {
      const isActive = p.group.includes(currentFile) ? "active" : "";
      return `<a href="${p.href}" class="nav-link ${isActive}">${p.title}</a>`;
    }).join("");

    headerHost.innerHTML = `
      <header class="navbar">
        <div class="container nav-inner">
          <a href="index.html" class="brand">
            <img class="brand-mark" src="assets/img/logo-mark.svg" alt="" width="44" height="44" />
            <span class="brand-text"><span class="brand-title">苏州微众科技</span><span class="brand-sub">SZMICROZONE</span></span>
          </a>
          <nav class="nav-links" id="nav-links" aria-label="主导航">${navLinksHtml}</nav>
          <a href="contact.html" class="nav-cta">联系我们</a>
          <button class="nav-toggle" id="nav-toggle" aria-label="打开菜单" aria-expanded="false"><span></span><span></span></button>
        </div>
      </header>
    `;

    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  const footerHost = document.getElementById("site-footer");
  if (footerHost) {
    footerHost.innerHTML = `
      <section class="cta-band">
        <div class="container">
          <h2>与我们聊聊您的下一个数字化项目。</h2>
          <a href="contact.html" class="btn">预约方案咨询 →</a>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <a href="index.html" class="brand">
                <img class="brand-mark" src="assets/img/logo-mark.svg" alt="" width="44" height="44" />
                <span class="brand-text"><span class="brand-title">苏州微众科技</span><span class="brand-sub">SUZHOU MICROZONE TECHNOLOGY</span></span>
              </a>
              <p class="footer-about">软件、算力与数字化基础设施服务商，总部位于江苏省苏州市吴中经济开发区。</p>
            </div>
            <div class="footer-col">
              <h4>业务板块</h4>
              <ul>
                <li><a href="wps.html">WPS 办公专区</a></li>
                <li><a href="channel-activation.html">商机路由与渠道赋能</a></li>
                <li><a href="software-licensing.html">软件正版化与信创</a></li>
                <li><a href="cloud-compute.html">智算算力与Token</a></li>
                <li><a href="custom-software.html">制造业软件定制</a></li>
                <li><a href="channel-capital.html">渠道项目资金协同</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>公司</h4>
              <ul>
                <li><a href="about.html">关于我们</a></li>
                <li><a href="industry-solutions.html">行业方案</a></li>
                <li><a href="ecosystem-partners.html">合作伙伴</a></li>
                <li><a href="cases-insights.html">案例与洞察</a></li>
                <li><a href="contact.html">联系我们</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>联系</h4>
              <ul>
                <li>江苏省苏州市吴中经济开发区</li>
                <li><a href="mailto:rong.s@szmicrozone.com">rong.s@szmicrozone.com</a></li>
                <li><a href="tel:18662277800">18662277800</a></li>
              </ul>
              <div style="margin-top:14px;display:flex;align-items:center;gap:12px;">
                <img src="assets/img/contact-qrcode.png" alt="微信联系二维码" width="76" height="76" style="border-radius:6px;background:#fff;padding:3px;border:1px solid #E6D7C8;display:block;" />
                <div style="font-size:12px;color:var(--text-secondary);line-height:1.4;">
                  <strong style="color:var(--ink);display:block;">微信扫码咨询</strong>
                  快速对接方案与报价
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2011–2026 苏州微众科技有限公司 版权所有 · 苏ICP备XXXXXXXX号</span>
            <span>与深圳前海微众银行、深圳微众信用科技无隶属关系</span>
          </div>
        </div>
      </footer>
    `;
  }
}

function initReveal() {
  const targets = document.querySelectorAll(".hero > .container > *, .section-header, .card, .console-box, .data-table-wrap, .metric-card, .filter-bar");
  targets.forEach(el => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => io.observe(el));
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
    const approvalHours = amountWan <= 500 ? "1-2 个工作日内响应" : "2-3 个工作日内完成评估";

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
      out.innerHTML = "<strong>感谢您的垂询。</strong> 我们已收到您的需求，商务同事将尽快与您联系（参考编号：MZ-2026-" + Math.floor(100000 + Math.random() * 900000) + "）。";
    }
    form.reset();
  });
}

