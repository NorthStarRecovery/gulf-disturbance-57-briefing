(() => {
  "use strict";

  const brief = window.NORTHSTAR_WEATHER_BRIEF;
  if (!brief) {
    document.documentElement.classList.add("motion-settled");
    throw new Error("NORTHSTAR_WEATHER_BRIEF is missing. Load scripts/briefing-data.js before app.js.");
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = motionPreference.matches;
  const SVG_NS = "http://www.w3.org/2000/svg";
  const text = (value, fallback = "—") => value === 0 ? "0" : String(value || fallback);
  const escapeHTML = (value) => text(value, "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
  const safeURL = (value) => {
    const candidate = text(value, "").trim();
    if (!candidate) return "";
    if (/^(https?:\/\/|\.\.?\/|[a-z0-9_-]+\/)/i.test(candidate)) return candidate;
    return "";
  };
  const setText = (selector, value) => {
    const node = $(selector);
    if (node) node.textContent = text(value);
  };
  const setHTML = (selector, value) => {
    const node = $(selector);
    if (node) node.innerHTML = value;
  };

  function markDraft() {
    if (brief.publicationReady) return;
    document.body.classList.add("is-draft");
    const banner = document.createElement("div");
    banner.className = "draft-banner";
    banner.setAttribute("role", "status");
    banner.innerHTML = "<strong>Planning template</strong><span>Unverified placeholder data — do not distribute.</span>";
    document.body.prepend(banner);
  }

  function renderShell() {
    const meta = brief.meta || {};
    const hero = brief.hero || {};
    const hazard = /^[a-z0-9-]+$/i.test(text(brief.hazard, "")) ? text(brief.hazard).toLowerCase() : "general";
    document.body.dataset.reportMode = brief.reportMode === "rapid" ? "rapid" : "full";
    document.body.dataset.hazard = hazard;
    document.body.dataset.printLabel = text(meta.printLabel, "NORTHSTAR WEATHER INTELLIGENCE");
    $$("main > section").forEach((section) => { section.dataset.printLabel = document.body.dataset.printLabel; });
    document.title = `${text(meta.shortTitle, "Weather Brief")} | ${text(meta.location, "Client Briefing")} | NorthStar`;
    const description = $("meta[name='description']");
    if (description) description.content = `${text(meta.title, "Weather event")} client weather-intelligence briefing for ${text(meta.location, "the selected geography")}.`;
    setText("#headerStatus", `${text(meta.shortTitle, "Weather event")} / ${text(meta.officialStatus, "status pending")}`);
    setText("#whereLabel", `${text(meta.location, "Client")} briefing`);
    setText("#heroEyebrow", `${text(hero.eyebrow, "NorthStar client weather brief")} · ${text(meta.advisory, "Update")}`);
    setHTML("#heroTitle", `${escapeHTML(hero.title)}<br><span class="gold">${escapeHTML(hero.accent)}</span>`);
    setText("#heroDeck", hero.deck);
    setText("#decisionSignal", hero.decisionSignal);
    setText("#countdownEyebrow", hero.countdownEyebrow);
    setText("#countdownValue", hero.countdownValue);
    setText("#countdownLabel", hero.countdownLabel);
    setText("#nextUpdateStatus", meta.nextUpdate);
    setText("#freshnessStatus", brief.publicationReady ? "Source window verified" : "Draft / unverified");
    setText("#commandSourceLine", `${text(meta.primarySource, "Primary source")} private scenario · ${text(meta.officialStatus, "official status pending")}`);
    setHTML("#heroMeta", [
      ["Primary source", meta.primarySource],
      ["Official status", meta.officialStatus],
      ["Valid", meta.validTime],
      ["Confidence", meta.confidence]
    ].map(([label, value]) => `<span><b>${escapeHTML(label)}</b> ${escapeHTML(value)}</span>`).join(""));
    setHTML("#freshnessRail", (hero.freshness || []).map((item) => `
      <span data-state="${escapeHTML(item.state)}"><b>${escapeHTML(item.label)}</b>${escapeHTML(item.value)}</span>
    `).join(""));
    setText("#footerStatement", `Prepared for ${text(meta.audience, "client stakeholders")}. Verify the data cut before distribution.`);
    setText("#footerFineprint", `Primary source: ${text(meta.primarySource)}. Data cutoff: ${text(meta.dataCutoff)}. Published: ${text(meta.publishedTime)}.`);
  }

  function renderTldr() {
    const data = brief.tldr || {};
    setText("#tldrHeadline", data.headline);
    setText("#tldrSummary", data.summary);
    setHTML("#tldrPrimary", (data.primary || []).map((item) => `
      <article><span>${escapeHTML(item.label)}</span><p>${escapeHTML(item.text)}</p></article>
    `).join(""));
    setHTML("#tldrSecondary", `
      <h3>${escapeHTML(data.secondary?.heading || "Monitor next")}</h3>
      <ul>${(data.secondary?.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    `);
  }

  function visibleSections() {
    return $$("main > section.section-watch").filter((section) => {
      if (brief.reportMode === "rapid" && section.classList.contains("full-only")) return false;
      return true;
    });
  }

  function renderTOC() {
    const sections = visibleSections().filter((section) => section.id !== "top" && section.id !== "tldr");
    setHTML("#tocLinks", sections.map((section) => `
      <a href="#${escapeHTML(section.id)}"><span>${escapeHTML(section.dataset.section)}</span><b aria-hidden="true">↘</b></a>
    `).join(""));
  }

  function renderSnapshot() {
    const data = brief.snapshot || {};
    setText("#snapshotHeadline", data.headline);
    setText("#snapshotSummary", data.summary);
    setHTML("#signalGrid", (data.metrics || []).map((item) => `
      <article class="signal-card ${item.tone === "accent" ? "accent" : ""}">
        <span class="signal-label">${escapeHTML(item.label)}</span>
        <strong>${escapeHTML(item.value)}<small>${escapeHTML(item.unit || "")}</small></strong>
        <p>${escapeHTML(item.detail)}</p>
      </article>
    `).join(""));
    setHTML("#signalBrief", (data.signals || []).map((item) => `
      <div class="signal-band ${item.tone === "warning" ? "warning" : ""}">
        <span class="signal-icon">${escapeHTML(item.icon)}</span>
        <div><b>${escapeHTML(item.title)}</b><p>${escapeHTML(item.text)}</p></div>
      </div>
    `).join(""));
  }

  function renderForecast() {
    const data = brief.forecast || {};
    setText("#forecastHeadline", data.headline);
    setText("#forecastSummary", data.summary);
    const image = safeURL(data.image);
    if (image) {
      setHTML("#forecastVisual", `
        <button class="image-button" type="button" data-image="${escapeHTML(image)}" data-caption="${escapeHTML(data.imageCaption)}" aria-label="Open forecast source graphic">
          <img src="${escapeHTML(image)}" alt="${escapeHTML(data.imageAlt)}" loading="lazy" decoding="async">
          <span>Open source graphic</span>
        </button>
        <figcaption>${escapeHTML(data.imageCaption)}</figcaption>
      `);
    } else {
      setHTML("#forecastVisual", `
        <div class="source-placeholder" role="img" aria-label="Forecast graphic placeholder">
          <span>Source graphic withheld</span>
          <strong>Add a distribution-safe event visual</strong>
          <p>Never publish a private StormGeo graphic unless distribution is authorized. A sourced public graphic or an original, clearly labeled scenario diagram may be used instead.</p>
        </div>
        <figcaption>${escapeHTML(data.imageCaption)}</figcaption>
      `);
    }
    setHTML("#forecastLadder", (data.points || []).map((point) => `
      <div class="forecast-point ${point.current ? "current" : ""} ${point.focus ? "focus" : ""}" role="listitem">
        <span>${escapeHTML(point.time)}</span><b>${escapeHTML(point.state)}</b><strong>${escapeHTML(point.value)}</strong><em>${escapeHTML(point.location)}</em>
      </div>
    `).join(""));
    setHTML("#uncertaintyStrip", `${(data.uncertainty || []).map((item) => `
      <div><span>${escapeHTML(item.label)}</span><strong>${escapeHTML(item.value)}</strong></div>
    `).join("")}<p><b>Interpretation:</b> ${escapeHTML(data.interpretation)}</p>`);
  }

  let activeSiteId = "";

  function chartSeries(site) {
    if (Array.isArray(site.chart?.series) && site.chart.series.length) return site.chart.series;
    return [
      { name: "Sustained", values: site.chart?.sustained || [], color: "#003a70" },
      { name: "Gust", values: site.chart?.gust || [], color: "#fdb913" }
    ];
  }

  function renderSites() {
    const data = brief.sites || {};
    const sites = data.items || [];
    setText("#sitesHeadline", data.headline);
    setText("#sitesSummary", data.summary);
    activeSiteId = sites[0]?.id || "";
    setHTML("#siteSwitch", sites.map((site, index) => `
      <button class="${index === 0 ? "active" : ""}" type="button" data-site="${escapeHTML(site.id)}" aria-pressed="${index === 0}">${escapeHTML(site.name)}</button>
    `).join(""));
    setHTML("#siteSummaryGrid", sites.map((site, index) => `
      <article class="site-summary ${index === 0 ? "active" : ""}" data-site-card="${escapeHTML(site.id)}">
        <div class="site-card-head"><span>${escapeHTML(site.region)}</span><strong>${escapeHTML(site.name)}</strong><em>${escapeHTML(site.status)}</em></div>
        <div class="site-metrics">${(site.metrics || []).map((metric) => `
          <div><span>${escapeHTML(metric.label)}</span><b>${escapeHTML(metric.value)}</b><small>${escapeHTML(metric.detail)}</small></div>
        `).join("")}</div>
        <div class="probability-row" role="list" aria-label="${escapeHTML(site.name)} forecast probabilities">${(site.probabilities || []).map((probability) => `
          <span role="listitem" style="--p:${Math.max(0, Math.min(100, Number(probability.value) || 0))}"><b>${escapeHTML(probability.value)}%</b><small>${escapeHTML(probability.label)}</small></span>
        `).join("")}</div>
      </article>
    `).join(""));
    setHTML("#printSiteTable", `
      <h3>Site forecast comparison</h3>
      <table><thead><tr><th>Site</th><th>Impact window</th><th>Peak period</th><th>Precipitation</th><th>Resolution</th></tr></thead>
      <tbody>${sites.map((site) => `<tr><td>${escapeHTML(site.name)}</td><td>${escapeHTML(site.impactWindow)}</td><td>${escapeHTML(site.peakPeriod)}</td><td>${escapeHTML(site.precipitation)}</td><td>${escapeHTML(site.resolution)}</td></tr>`).join("")}</tbody></table>
    `);
    $$("#siteSwitch button").forEach((button) => button.addEventListener("click", () => selectSite(button.dataset.site)));
    if (activeSiteId) selectSite(activeSiteId, false);
  }

  function selectSite(siteId, animate = true) {
    const site = (brief.sites?.items || []).find((item) => item.id === siteId);
    if (!site) return;
    activeSiteId = siteId;
    $$("#siteSwitch button").forEach((button) => {
      const active = button.dataset.site === siteId;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    $$('[data-site-card]').forEach((card) => card.classList.toggle("active", card.dataset.siteCard === siteId));
    setText("#readoutSite", site.name);
    setText("#readoutWindow", site.impactWindow);
    setText("#readoutPeak", site.peakPeriod);
    setText("#readoutRain", site.precipitation);
    setText("#readoutResolution", site.resolution);
    setText("#readoutNote", site.narrative);
    renderChart(site);
    if (animate && !reducedMotion && window.gsap) {
      window.gsap.fromTo(".wind-readout > *", { opacity: 0.35, y: 10 }, { opacity: 1, y: 0, duration: 0.42, stagger: 0.035, ease: "expo.out", clearProps: "opacity,transform" });
    }
  }

  function createSVG(name, attributes = {}) {
    const node = document.createElementNS(SVG_NS, name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
  }

  function renderChart(site) {
    const svg = $("#windChart");
    if (!svg) return;
    const times = site.chart?.times || [];
    const series = chartSeries(site);
    const count = Math.max(1, times.length, ...series.map((item) => item.values.length));
    const width = Math.max(920, count * 72);
    const height = 380;
    const margin = { top: 34, right: 34, bottom: 62, left: 56 };
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    const numericValue = (value) => {
      if (value === null || value === undefined || (typeof value === "string" && !value.trim())) return null;
      const numeric = Number(value);
      return Number.isFinite(numeric) ? numeric : null;
    };
    const values = series.flatMap((item) => item.values.map(numericValue)).filter((value) => value !== null);
    let domainMin = values.length ? Math.min(...values) : 0;
    let domainMax = values.length ? Math.max(...values) : 10;
    if (site.chart?.includeZero !== false) {
      domainMin = Math.min(0, domainMin);
      domainMax = Math.max(0, domainMax);
    }
    if (domainMin === 0 && domainMax === 0) {
      domainMax = 10;
    } else if (domainMin === domainMax) {
      const padding = Math.max(1, Math.abs(domainMin) * 0.1);
      domainMin -= padding;
      domainMax += padding;
    }
    const roughStep = (domainMax - domainMin) / 4;
    const magnitude = 10 ** Math.floor(Math.log10(Math.max(roughStep, Number.EPSILON)));
    const residual = roughStep / magnitude;
    const step = (residual >= 5 ? 5 : residual >= 2 ? 2 : 1) * magnitude;
    const floor = Math.floor(domainMin / step) * step;
    const ceiling = Math.ceil(domainMax / step) * step;
    const x = (index) => margin.left + (count === 1 ? innerW / 2 : index * innerW / (count - 1));
    const y = (value) => margin.top + innerH - ((Number(value) - floor) / (ceiling - floor)) * innerH;
    svg.replaceChildren();
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.width = `${width}px`;
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = floor + (ceiling - floor) * tick / 4;
      const py = y(value);
      svg.append(createSVG("line", { x1: margin.left, y1: py, x2: width - margin.right, y2: py, class: "chart-gridline" }));
      const label = createSVG("text", { x: margin.left - 10, y: py + 4, class: "chart-axis", "text-anchor": "end" });
      label.textContent = Number.isInteger(value) ? String(value) : String(Number(value.toFixed(2)));
      svg.append(label);
    }
    series.forEach((item, seriesIndex) => {
      const valuesForSeries = item.values || [];
      const path = createSVG("path", { class: `chart-line series-${seriesIndex}`, fill: "none", stroke: item.color || (seriesIndex ? "#fdb913" : "#003a70"), "stroke-width": seriesIndex ? 3 : 4, "stroke-linecap": "round", "stroke-linejoin": "round" });
      let drawing = false;
      const commands = valuesForSeries.flatMap((value, index) => {
        const numeric = numericValue(value);
        if (numeric === null) {
          drawing = false;
          return [];
        }
        const command = `${drawing ? "L" : "M"}${x(index)} ${y(numeric)}`;
        drawing = true;
        return command;
      });
      path.setAttribute("d", commands.join(" "));
      svg.append(path);
      valuesForSeries.forEach((value, index) => {
        const numeric = numericValue(value);
        if (numeric === null) return;
        svg.append(createSVG("circle", { cx: x(index), cy: y(numeric), r: 4, fill: item.color || (seriesIndex ? "#fdb913" : "#003a70"), class: "chart-point" }));
      });
    });
    const labelStep = count > 14 ? 3 : count > 8 ? 2 : 1;
    times.forEach((labelValue, index) => {
      if (index % labelStep !== 0 && index !== times.length - 1) return;
      const label = createSVG("text", { x: x(index), y: height - 28, class: "chart-axis", "text-anchor": "middle" });
      label.textContent = text(labelValue, "");
      svg.append(label);
    });
    setText("#chartTitle", `${site.name} forecast profile`);
    setHTML(".chart-legend", series.map((item, index) => `<span style="--legend-color:${escapeHTML(item.color || (index ? "#fdb913" : "#003a70"))}">${escapeHTML(item.name)}</span>`).join(""));
    const summary = series.map((item) => {
      const finite = item.values.map(numericValue).filter((value) => value !== null);
      if (!finite.length) return `${item.name} has no numeric values`;
      const low = Math.min(...finite);
      const high = Math.max(...finite);
      const mode = item.extreme || site.chart?.extreme || (low < 0 ? "range" : "max");
      const unit = text(site.chart?.unit, "");
      if (mode === "min") return `${item.name} reaches a minimum of ${low} ${unit}`;
      if (mode === "range") return `${item.name} ranges from ${low} to ${high} ${unit}`;
      return `${item.name} peaks at ${high} ${unit}`;
    }).join("; ");
    setText("#chartDataSummary", `${site.name}: ${summary}.`);
    const scroller = $("#chartScroll");
    if (scroller) scroller.scrollLeft = 0;
  }

  function renderGeography() {
    const data = brief.geography || {};
    setText("#geographyHeadline", data.headline);
    setText("#geographySummary", data.summary);
    setText("#resolutionNote", data.resolutionNote);
    setHTML("#geographyGrid", (data.layers || []).map((layer) => {
      const href = safeURL(layer.href);
      return `<article class="geography-card" data-level="${escapeHTML(layer.level || "unknown")}">
        <div><span>${escapeHTML(layer.source)}</span><strong>${escapeHTML(layer.status)}</strong></div>
        <h3>${escapeHTML(layer.name)}</h3><p>${escapeHTML(layer.detail)}</p>
        ${href ? `<a href="${escapeHTML(href)}" target="_blank" rel="noopener">Open source</a>` : ""}
      </article>`;
    }).join(""));
  }

  let activeGateKey = "";

  function renderTimeline() {
    const data = brief.timeline || {};
    const gates = data.gates || [];
    setText("#timelineHeadline", data.headline);
    setText("#timelineSummary", data.summary);
    activeGateKey = gates[0]?.key || "";
    setHTML("#gateRail", gates.map((gate, index) => `
      <button class="gate ${index === 0 ? "active" : ""}" id="gate-tab-${escapeHTML(gate.key)}" type="button" role="tab" aria-controls="gateDetail" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}" data-gate="${escapeHTML(gate.key)}">
        <span>${escapeHTML(gate.label)}</span><b>${escapeHTML(gate.time)}</b><em>${escapeHTML(gate.title)}</em>
      </button>
    `).join(""));
    $$("#gateRail button").forEach((button, index, buttons) => {
      button.addEventListener("click", () => selectGate(button.dataset.gate));
      button.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
        const target = event.key === "Home" ? buttons[0] : event.key === "End" ? buttons[buttons.length - 1] : buttons[(index + delta + buttons.length) % buttons.length];
        target.focus();
        selectGate(target.dataset.gate);
      });
    });
    if (activeGateKey) selectGate(activeGateKey, false);
  }

  function selectGate(key, animate = true) {
    const gate = (brief.timeline?.gates || []).find((item) => item.key === key);
    if (!gate) return;
    activeGateKey = key;
    $$("#gateRail button").forEach((button) => {
      const active = button.dataset.gate === key;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    const activeTab = $(`#gate-tab-${CSS.escape(key)}`);
    if (activeTab) $("#gateDetail")?.setAttribute("aria-labelledby", activeTab.id);
    setHTML("#gateDetail", `<span>${escapeHTML(gate.label)} / ${escapeHTML(gate.time)}</span><h3>${escapeHTML(gate.title)}</h3><p>${escapeHTML(gate.body)}</p><ul>${(gate.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`);
    if (animate && !reducedMotion && window.gsap) {
      window.gsap.fromTo("#gateDetail > *", { opacity: 0.2, y: 12 }, { opacity: 1, y: 0, duration: 0.38, stagger: 0.045, ease: "expo.out", clearProps: "opacity,transform" });
    }
  }

  function renderConfidence() {
    const data = brief.confidence || {};
    setText("#confidenceHeadline", data.headline);
    setText("#confidenceSummary", data.summary);
    setHTML("#confidencePosture", `<span>Calibrated posture</span><strong>${escapeHTML(data.posture)}</strong><p>${escapeHTML(data.postureDetail)}</p>`);
    setHTML("#agreementTable", `
      <table><thead><tr><th>Source</th><th>Role</th><th>Signal</th><th>Agreement</th><th>Freshness</th></tr></thead>
      <tbody>${(data.rows || []).map((row) => `<tr><td>${escapeHTML(row.source)}</td><td>${escapeHTML(row.role)}</td><td>${escapeHTML(row.signal)}</td><td>${escapeHTML(row.agreement)}</td><td>${escapeHTML(row.freshness)}</td></tr>`).join("")}</tbody></table>
    `);
  }

  function storageKey() {
    return `northstar-weather-readiness:${text(brief.meta?.shortTitle, "brief")}`;
  }

  let showOnlyOpenItems = false;

  function renderReadiness() {
    const data = brief.readiness || {};
    setText("#readinessHeadline", data.headline);
    setText("#readinessSummary", data.summary);
    let saved = {};
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey()) || "{}");
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) saved = parsed;
    } catch (_error) { saved = {}; }
    setHTML("#checkGrid", (data.groups || []).map((group) => `
      <article class="check-card" data-check-group="${escapeHTML(group.id)}">
        <button class="check-toggle" type="button" aria-expanded="true"><span class="group-box" aria-hidden="true"></span><b>${escapeHTML(group.title)}</b><small>0/${group.items?.length || 0}</small><em>Collapse</em></button>
        <div class="check-items">${(group.items || []).map((item, index) => {
          const id = `${group.id}-${index}`;
          return `<label><input type="checkbox" data-check-id="${escapeHTML(id)}" ${saved[id] ? "checked" : ""}><span>${escapeHTML(item)}</span></label>`;
        }).join("")}</div>
      </article>
    `).join(""));
    $$(".check-toggle").forEach((button) => button.addEventListener("click", () => {
      const card = button.closest(".check-card");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.querySelector("em").textContent = expanded ? "Expand" : "Collapse";
      card.classList.toggle("collapsed", expanded);
    }));
    $$("#checkGrid input").forEach((input) => input.addEventListener("change", syncReadiness));
    $("#copyReadiness")?.addEventListener("click", copyReadiness);
    $("#focusOpen")?.addEventListener("click", focusOpenItems);
    $("#resetReadiness")?.addEventListener("click", resetReadiness);
    $("#printBrief")?.addEventListener("click", () => window.print());
    syncReadiness(false);
  }

  function syncReadiness(animate = true) {
    const inputs = $$("#checkGrid input");
    const complete = inputs.filter((input) => input.checked).length;
    const total = inputs.length;
    const state = Object.fromEntries(inputs.map((input) => [input.dataset.checkId, input.checked]));
    try { localStorage.setItem(storageKey(), JSON.stringify(state)); } catch (_error) { /* local storage is optional */ }
    setText("#scoreText", `${complete}/${total}`);
    setText("#fabCount", `${complete}/${total}`);
    const arc = $("#scoreArc");
    if (arc) {
      const circumference = 326.73;
      arc.style.strokeDasharray = String(circumference);
      arc.style.strokeDashoffset = String(circumference * (1 - (total ? complete / total : 0)));
    }
    $$(".check-card").forEach((card) => {
      const cardInputs = $$("input", card);
      const cardComplete = cardInputs.filter((input) => input.checked).length;
      const small = $(".check-toggle small", card);
      if (small) small.textContent = `${cardComplete}/${cardInputs.length}`;
      card.classList.toggle("complete", cardComplete === cardInputs.length && cardInputs.length > 0);
    });
    applyOpenFilter();
    $("#readinessFab")?.classList.toggle("complete", complete === total && total > 0);
    if (animate && !reducedMotion && window.gsap) {
      window.gsap.fromTo(".score-ring", { scale: 0.96 }, { scale: 1, duration: 0.34, ease: "expo.out", clearProps: "transform" });
    }
  }

  async function copyReadiness() {
    const lines = $$(".check-card").map((card) => {
      const title = $(".check-toggle b", card)?.textContent || "Group";
      const open = $$("label", card).filter((label) => !$("input", label)?.checked).map((label) => $("span", label)?.textContent).filter(Boolean);
      return `${title}: ${open.length ? `OPEN — ${open.join("; ")}` : "ALIGNED"}`;
    });
    const value = `${text(brief.meta?.shortTitle)} readiness\n${lines.join("\n")}`;
    try {
      await navigator.clipboard.writeText(value);
      setText("#copyReadiness", "Copied");
      window.setTimeout(() => setText("#copyReadiness", "Copy status summary"), 1400);
    } catch (_error) {
      window.prompt("Copy readiness summary", value);
    }
  }

  function focusOpenItems() {
    showOnlyOpenItems = !showOnlyOpenItems;
    applyOpenFilter();
  }

  function applyOpenFilter() {
    $$(".check-card").forEach((card) => {
      const hasOpen = $$("input", card).some((input) => !input.checked);
      card.hidden = showOnlyOpenItems && !hasOpen;
    });
    setText("#focusOpen", showOnlyOpenItems ? "Show all items" : "Focus open items");
  }

  function resetReadiness() {
    showOnlyOpenItems = false;
    $$("#checkGrid input").forEach((input) => { input.checked = false; });
    syncReadiness();
  }

  function renderRoles() {
    const data = brief.roles || {};
    const roles = data.items || [];
    const sites = brief.sites?.items || [];
    setText("#rolesHeadline", data.headline);
    setText("#rolesSummary", data.summary);
    setHTML("#roleSelect", roles.map((role) => `<option value="${escapeHTML(role.id)}">${escapeHTML(role.name)}</option>`).join(""));
    setHTML("#roleSiteSelect", sites.map((site) => `<option value="${escapeHTML(site.id)}">${escapeHTML(site.name)}</option>`).join(""));
    setHTML("#printRoleGrid", roles.map((role) => `<article><span>${escapeHTML(role.priority)}</span><h3>${escapeHTML(role.name)}</h3><ul>${role.actions.map((action) => `<li>${escapeHTML(action)}</li>`).join("")}</ul><p class="role-boundary">${escapeHTML(role.boundary)}</p></article>`).join(""));
    $("#roleSelect")?.addEventListener("change", renderRoleOutput);
    $("#roleSiteSelect")?.addEventListener("change", renderRoleOutput);
    renderRoleOutput();
  }

  function renderRoleOutput() {
    const role = (brief.roles?.items || []).find((item) => item.id === $("#roleSelect")?.value) || brief.roles?.items?.[0];
    const site = (brief.sites?.items || []).find((item) => item.id === $("#roleSiteSelect")?.value) || brief.sites?.items?.[0];
    if (!role) return;
    setText("#rolePriority", role.priority);
    setText("#roleTitle", `${role.name}${site ? ` / ${site.name}` : ""}`);
    setHTML("#roleActions", (role.actions || []).map((action) => `<li>${escapeHTML(action)}</li>`).join(""));
    setText("#roleBoundary", role.boundary);
    if (!reducedMotion && window.gsap) window.gsap.fromTo(".role-output", { opacity: 0.35, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "expo.out", clearProps: "opacity,transform" });
  }

  function renderAppendix() {
    const data = brief.appendix || {};
    setText("#appendixHeadline", data.headline);
    setText("#appendixSummary", data.summary);
    setHTML("#appendixStack", (data.tables || []).map((table) => `
      <article class="appendix-table"><h3>${escapeHTML(table.title)}</h3><div class="table-scroll" tabindex="0">
        <table><thead><tr>${(table.columns || []).map((column) => `<th>${escapeHTML(column)}</th>`).join("")}</tr></thead>
        <tbody>${(table.rows || []).map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      </div><p>${escapeHTML(table.note)}</p></article>
    `).join(""));
  }

  function renderSources() {
    const data = brief.sources || {};
    setText("#sourcesHeadline", data.headline);
    setText("#sourcesSummary", data.summary);
    setHTML("#sourceGrid", (data.items || []).map((source) => {
      const href = source.private ? "" : safeURL(source.href);
      return `<article class="source-card ${source.private ? "private-source" : ""}">
        <span>${escapeHTML(source.authority)}</span><h3>${escapeHTML(source.title)}</h3><dl class="source-role"><div><dt>Role</dt><dd>${escapeHTML(source.role || source.authority)}</dd></div><div><dt>Weight</dt><dd>${escapeHTML(source.weight || "Context; evaluate within its stated role")}</dd></div></dl><p>${escapeHTML(source.note)}</p><em>Valid / vintage: ${escapeHTML(source.validTime)}</em>
        ${source.private ? `<strong>Private · retained locally</strong>` : href ? `<a href="${escapeHTML(href)}" target="_blank" rel="noopener">Open source</a>` : `<strong>Public link unavailable · verify before release</strong>`}
      </article>`;
    }).join(""));
    setHTML("#limitsNote", `<span>Use boundary</span><p>${escapeHTML(data.limitations)}</p>`);
  }

  function chapterAfter(anchor, id, label, title, summary, content, theme = "light") {
    const section = document.getElementById(id) || document.createElement("section");
    section.id = id;
    section.className = `${theme} section-watch full-only`;
    section.dataset.section = label;
    section.dataset.printLabel = brief.meta?.printLabel || "NORTHSTAR WEATHER INTELLIGENCE";
    section.innerHTML = `<div class="container"><div class="section-head"><h2 id="${escapeHTML(id)}Headline">${escapeHTML(title)}</h2>${summary ? `<p>${escapeHTML(summary)}</p>` : ""}<a class="back-to-contents" href="#contents">Back to contents</a></div>${content}</div>`;
    anchor.after(section);
    return section;
  }

  function renderVisualEvidence() {
    const data = brief.visualEvidence || {};
    const items = data.items || [];
    const waiver = typeof data.waiver === "string" ? data.waiver : data.waiver?.reason || data.waiver?.note;
    if (items.length || waiver) {
      const content = items.length ? `<div class="evidence-visuals">${items.map((item) => {
        const image = safeURL(item.image || item.src);
        const href = safeURL(item.href);
        return `<figure>${image ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(item.alt || item.question)}">` : ""}<figcaption><strong>${escapeHTML(item.provider)} · ${escapeHTML(item.model)}</strong><p>Initialized ${escapeHTML(item.initialization)} · Valid ${escapeHTML(item.validTime)}</p><p>${escapeHTML(item.question || item.decisionQuestion)}</p><p>${escapeHTML(item.caption)}</p>${href ? `<a href="${escapeHTML(href)}">View supporting product</a>` : ""}</figcaption></figure>`;
      }).join("")}</div>` : `<article class="evidence-waiver"><h3>Model-image availability</h3><p>${escapeHTML(waiver)}</p>${data.waiver?.decisionImpact ? `<p>${escapeHTML(data.waiver.decisionImpact)}</p>` : ""}<p>The private scenario and official warning/status evidence remain separate. No missing model image is treated as evidence of agreement.</p></article>`;
      chapterAfter($("#forecast"), "visual-evidence", "Model visual evidence", data.headline || "What the model visuals can support.", data.summary || "Source, model cycle, and valid time matter as much as the image.", content, "dark");
    }
    const imageData = brief.readinessImage || {};
    const image = safeURL(imageData.image || "assets/client-readiness.png");
    chapterAfter($("#readiness"), "readiness-visual", "Readiness at a glance", imageData.headline || "A shared readiness picture.", imageData.summary || "Use this visual alongside the site evidence and the latest official guidance.", `<figure class="readiness-visual"><img src="${escapeHTML(image)}" alt="${escapeHTML(imageData.alt || "Client readiness infographic summarizing the briefing's coordination priorities")}"><figcaption>${escapeHTML(imageData.caption || "NorthStar briefing graphic. Readiness priorities are planning actions, not a forecast of site damage.")}</figcaption></figure>`);
  }

  function arrangeReadableChapters() {
    const sites = brief.sites?.items || [];
    let siteAnchor = $("#sites");
    const cards = $$("#siteSummaryGrid > article");
    if (cards.length > 2) {
      siteAnchor = chapterAfter(siteAnchor, "sites-east", "Site comparison continued", "Site comparison, continued.", brief.sites?.summary, '<div class="site-summary-grid"></div>');
      cards.slice(2).forEach((card) => siteAnchor.querySelector(".site-summary-grid").append(card));
    }
    const detail = `<div class="site-detail-grid">${sites.map((site) => `<article><h3>${escapeHTML(site.name)}</h3><dl><div><dt>Impact window</dt><dd>${escapeHTML(site.impactWindow)}</dd></div><div><dt>Peak period</dt><dd>${escapeHTML(site.peakPeriod)}</dd></div><div><dt>Precipitation</dt><dd>${escapeHTML(site.precipitation)}</dd></div><div><dt>Resolution</dt><dd>${escapeHTML(site.resolution)}</dd></div></dl><p>${escapeHTML(site.narrative)}</p>${site.uncertainty ? `<p><b>Uncertainty:</b> ${escapeHTML(site.uncertainty)}</p>` : ""}</article>`).join("")}</div>`;
    if (sites.length) chapterAfter(siteAnchor, "site-windows", "Site timing and context", "The local window matters.", "Forecast timing and interpretation for every named location. Wind probabilities and deterministic values describe different questions.", detail);
    $("#printSiteTable")?.remove();
    const gates = brief.timeline?.gates || [];
    const timeline = document.createElement("div");
    timeline.className = "print-gate-grid print-only";
    timeline.innerHTML = gates.map((gate) => `<article><span>${escapeHTML(gate.label)} · ${escapeHTML(gate.time)}</span><h3>${escapeHTML(gate.title)}</h3><p>${escapeHTML(gate.body)}</p><ul>${(gate.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></article>`).join("");
    $("#timeline .container")?.append(timeline);
    // Deliberate continuation chapters keep the same evidence in HTML and PDF.
    let appendixAnchor = $("#appendix");
    $$("#appendixStack > article").slice(1).forEach((table, index) => {
      const section = chapterAfter(appendixAnchor, `appendix-${index + 2}`, `Forecast table ${index + 2}`, table.querySelector("h3")?.textContent || "Forecast detail", brief.appendix?.summary, "");
      section.querySelector(".container").append(table);
      appendixAnchor = section;
    });
    const sourceCards = $$("#sourceGrid > article");
    let sourceAnchor = $("#sources");
    for (let index = 2; index < sourceCards.length; index += 2) {
      const section = chapterAfter(sourceAnchor, `sources-${index / 2 + 1}`, `Sources ${index / 2 + 1}`, "Sources and their roles.", brief.sources?.summary, '<div class="source-grid"></div>', "dark");
      sourceCards.slice(index, index + 2).forEach((card) => section.querySelector(".source-grid").append(card));
      sourceAnchor = section;
    }
    if (sourceAnchor !== $("#sources")) sourceAnchor.querySelector(".container").append($("#limitsNote"));
  }

  function renderComparisonChapters() {
    const profiles = (brief.sites?.items || []).map((site) => {
      const times = site.chart?.times || [];
      const series = site.chart?.series || [];
      const x = (hour) => 42 + hour / 24 * 418;
      const y = (value) => 164 - value / 60 * 144;
      const ticks = [0, 20, 40, 60].map((value) => `<line x1="42" x2="460" y1="${y(value)}" y2="${y(value)}" stroke="#C6D1DE"/><text x="33" y="${y(value) + 5}" text-anchor="end">${value}</text>`).join("");
      const hours = [0, 6, 12, 18, 24].map((hour) => `<text x="${x(hour)}" y="188" text-anchor="middle">${String(hour).padStart(2, "0")}:00</text>`).join("");
      const lines = series.map((item, index) => {
        let drawing = false;
        const commands = (item.values || []).map((value, i) => {
          const parts = (times[i] || "").split(":").map(Number);
          if (value === null || value === undefined || !Number.isFinite(Number(value)) || parts.length < 2 || !parts.every(Number.isFinite)) { drawing = false; return ""; }
          const command = `${drawing ? "L" : "M"}${x(parts[0] + parts[1] / 60).toFixed(2)},${y(Number(value)).toFixed(2)}`;
          drawing = true;
          return command;
        }).join(" ");
        return `<path d="${commands}" fill="none" stroke="${["#54626F", "#104C8E", "#D2691E"][index] || "#54626F"}" stroke-width="${index === 0 ? 2 : 3}" ${index === 2 ? 'stroke-dasharray="7 4"' : ""}/>`;
      }).join("");
      const summary = series.map((item) => `${item.name}: ${Math.min(...item.values)}–${Math.max(...item.values)} mph`).join("; ");
      return `<figure class="profile-panel"><h3>${escapeHTML(site.name)}</h3><svg viewBox="0 0 480 206" role="img" aria-label="${escapeHTML(`${site.name}, Saturday October 10 CDT. ${summary}. Lines show only the supplied hours.`)}"><text x="42" y="13">mph</text>${ticks}${hours}${lines}</svg></figure>`;
    }).join("");
    if (profiles) chapterAfter($("#site-windows"), "wind-profiles", "Four-site wind profiles", "Wind builds at different times.", "Saturday October 10 · CDT. All panels use the same clock and 0–60 mph scale; lines cover only supplied hours.", `<div class="profile-legend"><span class="lower">Sustained lower</span><span class="upper">Sustained upper</span><span class="gust">Gust</span></div><div class="profile-grid">${profiles}</div><p class="profile-note">StormGeo Advisory 1 · valid Oct 6 at 9 a.m. CDT. Sustained curves preserve the supplied maximum-likely hourly range, not hourly mean winds. Gusts are separate from sustained winds.</p>`);
    chapterAfter($("#confidence"), "scenarios", "Planning scenarios", "Three scenarios to plan around.", "The reviewed evidence does not provide calibrated scenario odds. Use each branch to test decisions; do not average the models.", `<div class="scenario-grid">
      <article><span>A · Private baseline</span><h3>Strong tropical storm</h3><p>StormGeo forecasts a 65 mph storm-wide sustained-wind peak Friday, then weakening near the coast. Southeast Louisiana and Mississippi are favored for the Saturday approach.</p><p><b>Planning implication:</b> Complete protection and continuity arrangements before the site wind windows begin.</p></article>
      <article><span>B · Faster or farther east</span><h3>Less preparation time</h3><p>ECMWF places the low farther north than GFS at 12Z Saturday. The Florida Panhandle remains an alternative in StormGeo’s track discussion.</p><p><b>Planning implication:</b> Complete protection earlier and keep eastward coordination and access options open.</p></article>
      <article><span>C · Worst-case planning</span><h3>Stronger and disruptive</h3><p>StormGeo cannot rule out hurricane strength. Test delayed weakening and stronger east-side hazards together with loss of power and an access route.</p><p><b>Contingency only:</b> No probability, outage duration or facility flood depth is assigned. This is a hypothetical planning case, not a forecast.</p></article>
    </div>`, "dark");
  }

  function renderNorthStarSupport() {
    const prompts = [
      ["top", "Keep NorthStar in your response contacts.", "24-hour emergency response", "1-800-283-2933", "tel:+18002832933"],
      ["sites", "Which critical processes cannot be interrupted?", "Identify essential loads, people and backup dependencies with NorthStar.", "Discuss continuity priorities", "#northstar-support"],
      ["scenarios", "If the primary plan fails, what keeps operating?", "Review alternate power, access and restart priorities with NorthStar.", "Explore recovery support", "#northstar-support"],
      ["readiness", "Is your SOP up to date?", "Confirm standard operating procedures, decision owners and emergency contacts.", "Ask NorthStar about pre-loss planning", "https://recovery.northstar.com/premiere-response-program/pre-loss/"]
    ];
    prompts.forEach(([id, title, copy, label, href]) => {
      const aside = document.createElement("aside");
      aside.className = "northstar-cta";
      aside.setAttribute("aria-label", "NorthStar readiness support");
      aside.innerHTML = `<div><strong>${escapeHTML(title)}</strong><p>${escapeHTML(copy)}</p></div><a href="${escapeHTML(href)}">${escapeHTML(label)}</a>`;
      $(`#${id} > .container`)?.append(aside);
    });
    const services = [
      ["Pre-loss planning", "Property assessments, critical-equipment records and response planning."],
      ["Temporary power & climate control", "Mobile generation, cooling, heating and facility-support resources."],
      ["Water damage restoration", "Drying, dehumidification and restoration after water losses."],
      ["Flood control", "Pre-flood support and temporary flood-protection solutions."],
      ["Fire & microbial remediation", "Fire and smoke cleanup, odor mitigation and mold remediation."],
      ["Reconstruction & facility support", "Post-loss rebuilding and support for facility repairs and maintenance."]
    ];
    chapterAfter($("#roles"), "northstar-support", "NorthStar support", "Protect the processes that cannot pause.", "Bring NorthStar into the readiness conversation. Identify what must keep running, its dependencies and the fallback plan before conditions change.", `
      <div class="continuity-prompt"><strong>Start with the operation.</strong><p>Patient care, cold storage, production, IT and building systems may depend on the same power, cooling or access. Name the owner, allowable downtime and backup for each critical process.</p></div>
      <div class="northstar-services">${services.map(([title, detail]) => `<article><h3>${escapeHTML(title)}</h3><p>${escapeHTML(detail)}</p></article>`).join("")}</div>
      <div class="support-contact"><div><span>NorthStar · 24-hour emergency response</span><a href="tel:+18002832933">1-800-283-2933</a></div><p>Discuss site requirements and resource availability with NorthStar.<br><a href="https://recovery.northstar.com/">Explore NorthStar services</a></p></div>
      <p class="support-sources">Service references: ${(brief.supportSources || []).map((source) => `<a href="${escapeHTML(safeURL(source.href))}">${escapeHTML(source.title)}</a>`).join(" · ")}. Verified October 6, 2026.</p>`);
  }

  function setupImageDialog() {
    const dialog = $("#imageDialog");
    let returnFocus = null;
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-image]");
      if (!trigger || !dialog) return;
      const image = safeURL(trigger.dataset.image);
      if (!image) return;
      returnFocus = trigger;
      $("#dialogImage").src = image;
      $("#dialogImage").alt = $("img", trigger)?.alt || "Source graphic";
      setText("#dialogCaption", trigger.dataset.caption || $("figcaption", trigger.closest("figure"))?.textContent || "Source graphic");
      dialog.showModal();
    });
    $("#closeDialog")?.addEventListener("click", () => dialog.close());
    dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog?.addEventListener("close", () => returnFocus?.focus());
  }

  function setupNavigation() {
    const sections = visibleSections();
    const nav = $("#sectionDots");
    if (!nav) return;
    nav.innerHTML = sections.map((section) => `<a href="#${escapeHTML(section.id)}" aria-label="${escapeHTML(section.dataset.section)}"></a>`).join("");
    const links = $$("a", nav);
    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      const index = sections.indexOf(active.target);
      links.forEach((link, linkIndex) => link.classList.toggle("active", linkIndex === index));
      setText("#whereLabel", active.target.dataset.section);
      nav.classList.toggle("on-light", active.target.classList.contains("light"));
    }, { threshold: [0.2, 0.5, 0.75], rootMargin: "-18% 0px -48%" });
    sections.forEach((section) => observer.observe(section));
    const updateScroll = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maximum > 0 ? window.scrollY / maximum : 0;
      const bar = $("#scrollProgress");
      if (bar) bar.style.transform = `scaleX(${Math.max(0, Math.min(1, progress))})`;
      const fab = $("#readinessFab");
      if (fab) {
        const visible = brief.reportMode !== "rapid" && window.scrollY > window.innerHeight * 0.75;
        fab.classList.toggle("show", visible);
        fab.tabIndex = visible ? 0 : -1;
        fab.setAttribute("aria-hidden", String(!visible));
      }
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
  }

  function setupReveals() {
    const nodes = $$(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: "0px 0px -8%" });
    nodes.forEach((node) => observer.observe(node));
  }

  function setupMotion() {
    if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    $$(".section-head h2").forEach((heading) => {
      const sourceText = heading.textContent.replace(/\s+/g, " ").trim();
      const words = sourceText.split(" ");
      if (words.length < 4) return;
      heading.dataset.sourceHeading = sourceText;
      const fragment = document.createDocumentFragment();
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = "scrub-word";
        span.textContent = word;
        fragment.appendChild(span);
        if (index < words.length - 1) fragment.appendChild(document.createTextNode(" "));
      });
      heading.replaceChildren(fragment);
      if (heading.textContent.replace(/\s+/g, " ").trim() !== sourceText) {
        heading.textContent = sourceText;
        delete heading.dataset.sourceHeading;
        return;
      }
      gsap.fromTo($$(".scrub-word", heading), { opacity: 0.2 }, { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: heading, start: "top 84%", end: "bottom 48%", scrub: 0.35 } });
    });
    const visual = $("#forecastVisual");
    if (visual) gsap.fromTo(visual, { scale: 0.92, opacity: 0.55 }, { scale: 1, opacity: 1, ease: "expo.out", scrollTrigger: { trigger: visual, start: "top 88%", end: "center 55%", scrub: 0.35 } });
    gsap.from(".forecast-ladder .forecast-point", { y: 24, opacity: 0, stagger: 0.08, duration: 0.72, ease: "expo.out", scrollTrigger: { trigger: "#forecastLadder", start: "top 78%" } });
  }

  function setupWeatherCanvas() {
    const canvas = $("#windCanvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let width = 0;
    let height = 0;
    let particles = [];
    let frame = 0;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(28, Math.min(92, Math.round(width / 18)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: (index * 97) % Math.max(1, width),
        y: (index * 53) % Math.max(1, height),
        speed: 0.22 + (index % 7) * 0.08,
        phase: index * 0.73,
        length: 18 + (index % 6) * 7
      }));
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        const wave = Math.sin(frame * 0.008 + particle.phase) * 12;
        const angle = -0.18 + Math.sin(particle.y / Math.max(1, height) * Math.PI) * 0.22;
        const dx = Math.cos(angle) * particle.length;
        const dy = Math.sin(angle) * particle.length + wave * 0.05;
        context.beginPath();
        context.moveTo(particle.x, particle.y + wave);
        context.lineTo(particle.x + dx, particle.y + dy + wave);
        context.strokeStyle = index % 11 === 0 ? "rgba(253,185,19,.42)" : "rgba(202,220,252,.26)";
        context.lineWidth = index % 5 === 0 ? 1.2 : 0.7;
        context.stroke();
        if (!reducedMotion) {
          particle.x += particle.speed;
          if (particle.x > width + 40) particle.x = -40;
        }
      });
      frame += 1;
      if (!reducedMotion) window.requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
  }

  function setupKeyboardScroll() {
    $("#chartScroll")?.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      event.currentTarget.scrollBy({ left: event.key === 'ArrowRight' ? 180 : -180, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  let printReadinessState = [];

  function flattenAnimatedHeadings() {
    $$('[data-source-heading]').forEach((heading) => {
      const sourceText = heading.dataset.sourceHeading?.replace(/\s+/g, " ").trim();
      if (!sourceText) return;
      heading.textContent = sourceText;
      delete heading.dataset.sourceHeading;
    });
  }

  function settleMotion() {
    $$(".reveal").forEach((node) => node.classList.add("in"));
    if (window.gsap) {
      const motionNodes = $$(".forecast-ladder .forecast-point, #forecastVisual, .scrub-word");
      window.gsap.killTweensOf(motionNodes);
      window.gsap.set(motionNodes, { opacity: 1, transform: "none", filter: "none", visibility: "visible" });
    }
    document.documentElement.classList.add("motion-settled");
  }

  function prepareForPrint() {
    settleMotion();
    flattenAnimatedHeadings();
    printReadinessState = $$(".check-card").map((card) => {
      const button = $(".check-toggle", card);
      return {
        card,
        hidden: card.hidden,
        collapsed: card.classList.contains("collapsed"),
        expanded: button?.getAttribute("aria-expanded") || "true",
        label: $("em", button)?.textContent || "Collapse"
      };
    });
    printReadinessState.forEach(({ card }) => {
      const button = $(".check-toggle", card);
      card.hidden = false;
      card.classList.remove("collapsed");
      button?.setAttribute("aria-expanded", "true");
      const labelNode = button ? $("em", button) : null;
      if (labelNode) labelNode.textContent = "Collapse";
    });
  }

  function restoreAfterPrint() {
    printReadinessState.forEach(({ card, hidden, collapsed, expanded, label }) => {
      const button = $(".check-toggle", card);
      card.hidden = hidden;
      card.classList.toggle("collapsed", collapsed);
      button?.setAttribute("aria-expanded", expanded);
      const labelNode = button ? $("em", button) : null;
      if (labelNode) labelNode.textContent = label;
    });
    printReadinessState = [];
  }

  function renderAll() {
    markDraft();
    renderShell();
    renderTldr();
    renderSnapshot();
    renderForecast();
    renderSites();
    renderGeography();
    renderTimeline();
    renderConfidence();
    renderReadiness();
    renderRoles();
    renderAppendix();
    renderSources();
    renderVisualEvidence();
    arrangeReadableChapters();
    renderComparisonChapters();
    renderNorthStarSupport();
    renderTOC();
    setupImageDialog();
    setupNavigation();
    setupReveals();
    setupWeatherCanvas();
    setupKeyboardScroll();
    const printMedia = window.matchMedia("print");
    printMedia.addEventListener?.("change", (event) => {
      if (event.matches) flattenAnimatedHeadings();
    });
    window.addEventListener("beforeprint", prepareForPrint);
    window.addEventListener("afterprint", restoreAfterPrint);
    window.setTimeout(() => document.documentElement.classList.add("motion-settled"), 1800);
    window.requestAnimationFrame(setupMotion);
  }

  motionPreference.addEventListener?.("change", (event) => {
    reducedMotion = event.matches;
    if (reducedMotion && window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
    settleMotion();
  });

  renderAll();
})();
