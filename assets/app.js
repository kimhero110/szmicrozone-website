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
  initQrZoom();
  initSoftwareFilter();
  initTokenCalculator();
  initComputeCalculator();
  initCapitalSimulator();
  initContactForm();
});

function initQrZoom() {
  document.querySelectorAll("[data-qr-zoom]").forEach(el => {
    el.style.cursor = "zoom-in";
    el.addEventListener("click", () => {
      const lb = document.createElement("div");
      lb.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.8);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:zoom-out;padding:20px;";
      lb.innerHTML = `
        <div style="background:#fff;border-radius:18px;padding:32px;max-width:380px;width:100%;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,0.4);position:relative;cursor:default;">
          <button style="position:absolute;top:14px;right:16px;background:#f0f2f5;border:none;border-radius:50%;width:32px;height:32px;font-size:16px;cursor:pointer;color:#666;line-height:1;display:grid;place-items:center;" aria-label="关闭">✕</button>
          <span style="display:inline-block;background:#FFF4E6;color:#A35C00;font-size:12px;font-weight:600;padding:3px 10px;border-radius:6px;margin-bottom:12px;">★ 商务直联 · 微信扫一扫</span>
          <h3 style="font-size:20px;color:#1F3A5F;margin-bottom:6px;">微信扫码直联商务经理</h3>
          <p style="font-size:13px;color:#666;margin-bottom:18px;">支持在线对齐商机、产品选型与特惠报价</p>
          <div style="background:#FAF8F5;border:1px solid #E6D7C8;border-radius:12px;padding:16px;display:inline-block;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
            <img src="assets/img/contact-qrcode.png" alt="微信联系二维码" width="260" height="260" style="display:block;border-radius:8px;" />
          </div>
          <div style="margin-top:18px;font-size:13px;color:#333;line-height:1.8;border-top:1px dashed #E5E6EB;padding-top:14px;">
            <div><strong>直拨电话</strong>：<a href="tel:18662277800" style="color:#B08D57;font-weight:600;">18662277800</a></div>
            <div><strong>商务邮箱</strong>：<a href="mailto:rong.s@szmicrozone.com" style="color:#B08D57;">rong.s@szmicrozone.com</a></div>
          </div>
        </div>
      `;
      lb.onclick = (e) => {
        if (e.target === lb || e.target.closest("button")) lb.remove();
      };
      document.body.appendChild(lb);
    });
  });
}

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
              <div data-qr-zoom style="margin-top:14px;display:flex;align-items:center;gap:14px;cursor:zoom-in;">
                <img src="assets/img/contact-qrcode.png" alt="微信联系二维码" width="116" height="116" style="border-radius:8px;background:#fff;padding:4px;border:1px solid #E6D7C8;display:block;box-shadow:0 4px 12px rgba(0,0,0,0.04);" />
                <div style="font-size:12px;color:var(--text-secondary);line-height:1.5;">
                  <strong style="color:var(--ink);display:block;font-size:13px;">微信扫码咨询</strong>
                  快速对接方案与报价<br>
                  <span style="font-size:11px;color:var(--gold);">🔍 点击可全屏放大</span>
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

