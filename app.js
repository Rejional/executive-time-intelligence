const STORAGE_KEY = "tempo-executive-time-intelligence";

const seed = {
  activeView: "today",
  activeRange: "day",
  selectedActivityId: null,
  sources: [
    { id: "calendar", name: "Outlook Calendar", type: "Calendar", connected: true, events: 18 },
    { id: "email", name: "Outlook Mail", type: "Email", connected: true, events: 42 },
    { id: "teams", name: "Microsoft Teams", type: "Teams", connected: true, events: 29 },
    { id: "docs", name: "OneDrive Documents", type: "Document", connected: true, events: 11 },
    { id: "phone", name: "Phone Notes", type: "Phone", connected: false, events: 3 },
    { id: "travel", name: "Travel Blocks", type: "Travel", connected: false, events: 2 }
  ],
  operatingModel: {
    priorities: ["Service reliability reset", "Corporate strategy refresh", "Enterprise retention", "Platform modernization"],
    departments: ["Operations", "Product", "Finance", "Revenue", "People"],
    reports: ["Maya Chen", "Jordan Lee", "Priya Shah", "Owen Grant", "Elena Rivera"],
    categories: ["Strategy", "Operations", "People", "Governance", "Customer", "Crisis", "Admin"]
  },
  privacy: {
    ingestContent: true,
    metadataOnly: false,
    privateByDefault: false,
    chiefOfStaffAccess: true,
    retentionDays: 365
  },
  activities: [
    {
      id: "a1",
      start: "07:45",
      end: "08:20",
      title: "Strategy memo review",
      source: "Document + calendar hold",
      category: "Strategy",
      initiative: "Corporate strategy refresh",
      department: "Executive",
      people: ["Self"],
      priority: "Corporate strategy refresh",
      minutes: 35,
      confidence: 91,
      importance: "High",
      urgency: "Medium",
      summary: "Focused review of market expansion assumptions before the leadership meeting.",
      evidence: ["OneDrive edit window", "calendar focus block", "strategy memo keywords"],
      notes: [],
      private: false,
      excluded: false
    },
    {
      id: "a2",
      start: "08:30",
      end: "10:00",
      title: "Operations review extended",
      source: "Calendar + Teams + email",
      category: "Operations",
      initiative: "Service reliability reset",
      department: "Operations",
      people: ["COO", "VP Service"],
      priority: "Service reliability reset",
      minutes: 90,
      confidence: 84,
      importance: "High",
      urgency: "High",
      summary: "Scheduled for 60 minutes, but message and email activity indicate a 90-minute escalation.",
      evidence: ["meeting overrun", "Teams thread", "follow-up email cluster"],
      notes: ["Decision: COO owns recovery plan by Friday."],
      private: false,
      excluded: false
    },
    {
      id: "a3",
      start: "10:05",
      end: "10:28",
      title: "Escalation follow-up thread",
      source: "Email + Teams",
      category: "Operations",
      initiative: "Service reliability reset",
      department: "Operations",
      people: ["COO", "Legal"],
      priority: "Service reliability reset",
      minutes: 23,
      confidence: 78,
      importance: "Medium",
      urgency: "High",
      summary: "Related messages were clustered with the operations review by topic, people, and timing.",
      evidence: ["same participants", "same incident language", "within 30 minutes"],
      notes: [],
      private: false,
      excluded: false
    },
    {
      id: "a4",
      start: "10:45",
      end: "11:30",
      title: "One-on-one with Maya",
      source: "Calendar + voice note",
      category: "People",
      initiative: "Leadership development",
      department: "Product",
      people: ["Maya Chen"],
      priority: "Leadership depth",
      minutes: 45,
      confidence: 95,
      importance: "High",
      urgency: "Medium",
      summary: "Coaching conversation on delegation model, hiring constraints, and decision rights.",
      evidence: ["calendar event", "voice reflection", "direct-report mapping"],
      notes: ["Concern: Maya is carrying too much coordination load."],
      private: false,
      excluded: false
    },
    {
      id: "a5",
      start: "12:15",
      end: "13:05",
      title: "Board package governance",
      source: "Document + email",
      category: "Governance",
      initiative: "Board readiness",
      department: "Finance",
      people: ["CFO", "Chief of Staff"],
      priority: "Board readiness",
      minutes: 50,
      confidence: 88,
      importance: "High",
      urgency: "Medium",
      summary: "Reviewed draft materials and resolved open questions around capital plan framing.",
      evidence: ["document comments", "email thread", "board package title"],
      notes: [],
      private: false,
      excluded: false
    },
    {
      id: "a6",
      start: "13:30",
      end: "14:10",
      title: "Customer renewal call",
      source: "Phone + CRM note",
      category: "Customer",
      initiative: "Enterprise retention",
      department: "Revenue",
      people: ["CRO", "Customer CEO"],
      priority: "Enterprise retention",
      minutes: 40,
      confidence: 72,
      importance: "High",
      urgency: "Medium",
      summary: "High-value customer discussion with pricing, roadmap, and executive sponsor implications.",
      evidence: ["phone note", "CRM renewal reference", "CRO participant"],
      notes: [],
      private: false,
      excluded: false
    },
    {
      id: "a7",
      start: "14:18",
      end: "15:08",
      title: "Interruptions and approvals",
      source: "Email + Teams",
      category: "Admin",
      initiative: "Decision queue",
      department: "Multiple",
      people: ["Staff"],
      priority: "Operational hygiene",
      minutes: 50,
      confidence: 68,
      importance: "Medium",
      urgency: "Medium",
      summary: "Seven short approval and clarification loops split across hiring, facilities, and vendor decisions.",
      evidence: ["short message bursts", "approval keywords", "multi-department spread"],
      notes: [],
      private: false,
      excluded: false
    },
    {
      id: "a8",
      start: "15:30",
      end: "16:45",
      title: "Product steering committee",
      source: "Calendar + Teams",
      category: "Governance",
      initiative: "Platform modernization",
      department: "Product",
      people: ["CTO", "CPO", "PMO"],
      priority: "Platform modernization",
      minutes: 75,
      confidence: 89,
      importance: "High",
      urgency: "Medium",
      summary: "Governance review surfaced dependency risk and a need for faster executive decision cadence.",
      evidence: ["calendar event", "Teams channel", "dependency notes"],
      notes: [],
      private: false,
      excluded: false
    },
    {
      id: "a9",
      start: "17:00",
      end: "17:47",
      title: "End-of-day reflection",
      source: "Calendar hold + voice",
      category: "Strategy",
      initiative: "Executive effectiveness",
      department: "Executive",
      people: ["Self"],
      priority: "Executive effectiveness",
      minutes: 47,
      confidence: 81,
      importance: "Medium",
      urgency: "Low",
      summary: "Planning window used to reconcile decisions, prepare tomorrow, and identify delegation candidates.",
      evidence: ["calendar hold", "voice note", "planning keywords"],
      notes: [],
      private: false,
      excluded: false
    }
  ],
  weeklyHistory: [
    { category: "Strategy", thisWeek: 520, lastWeek: 740, target: 720 },
    { category: "Operations", thisWeek: 890, lastWeek: 640, target: 520 },
    { category: "People", thisWeek: 240, lastWeek: 310, target: 360 },
    { category: "Governance", thisWeek: 430, lastWeek: 390, target: 360 },
    { category: "Customer", thisWeek: 210, lastWeek: 180, target: 240 },
    { category: "Admin", thisWeek: 260, lastWeek: 220, target: 180 }
  ],
  directReports: [
    { name: "Maya Chen", role: "Product", lastOneOnOneDays: 0, minutes: 45, signal: "Coordination load risk" },
    { name: "Jordan Lee", role: "Operations", lastOneOnOneDays: 22, minutes: 15, signal: "Overdue relationship" },
    { name: "Priya Shah", role: "Finance", lastOneOnOneDays: 9, minutes: 30, signal: "Healthy cadence" },
    { name: "Owen Grant", role: "Revenue", lastOneOnOneDays: 18, minutes: 20, signal: "Light touch" },
    { name: "Elena Rivera", role: "People", lastOneOnOneDays: 12, minutes: 25, signal: "Watch hiring approvals" }
  ],
  coachingDone: [],
  audit: [
    "Calendar, email, Teams, and document metadata analyzed for today's reconstruction.",
    "No private activities shared outside this workspace.",
    "Chief of staff access enabled for summaries only."
  ]
};

let state = loadState();

const els = {
  pageTitle: document.querySelector("#pageTitle"),
  coverageMetric: document.querySelector("#coverageMetric"),
  dailyNarrative: document.querySelector("#dailyNarrative"),
  alignmentScore: document.querySelector("#alignmentScore"),
  alignmentText: document.querySelector("#alignmentText"),
  measureRow: document.querySelector("#measureRow"),
  timeline: document.querySelector("#timeline"),
  sourceGrid: document.querySelector("#sourceGrid"),
  insightList: document.querySelector("#insightList"),
  noteTarget: document.querySelector("#noteTarget"),
  weeklyAllocation: document.querySelector("#weeklyAllocation"),
  trendList: document.querySelector("#trendList"),
  relationshipGrid: document.querySelector("#relationshipGrid"),
  streamGrid: document.querySelector("#streamGrid"),
  coachList: document.querySelector("#coachList"),
  setupForm: document.querySelector("#setupForm"),
  privacyControls: document.querySelector("#privacyControls"),
  auditList: document.querySelector("#auditList"),
  toast: document.querySelector("#toast"),
  dialog: document.querySelector("#activityDialog")
};

let toastTimer;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(seed);
  try {
    return { ...clone(seed), ...JSON.parse(saved) };
  } catch {
    return clone(seed);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatMinutes(total) {
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return hours ? `${hours}h${minutes ? ` ${minutes}m` : ""}` : `${minutes}m`;
}

function visibleActivities() {
  return state.activities.filter((activity) => !activity.excluded);
}

function totalMinutes(activities = visibleActivities()) {
  return activities.reduce((sum, activity) => sum + activity.minutes, 0);
}

function totalsBy(field, activities = visibleActivities()) {
  return activities.reduce((acc, activity) => {
    const value = activity[field] || "Unassigned";
    acc[value] = (acc[value] || 0) + activity.minutes;
    return acc;
  }, {});
}

function confidenceAverage() {
  const items = state.activities;
  return Math.round(items.reduce((sum, activity) => sum + activity.confidence, 0) / items.length);
}

function connectedSourceCount() {
  return state.sources.filter((source) => source.connected).length;
}

function categoryClass(category) {
  return String(category).toLowerCase().replaceAll(" ", "-");
}

function activityById(id) {
  return state.activities.find((activity) => activity.id === id);
}

function setView(view) {
  state.activeView = view;
  document.querySelectorAll(".view").forEach((item) => item.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  const titles = {
    today: "Attention brief",
    week: "Weekly intelligence",
    streams: "Work streams",
    coach: "Executive coach",
    setup: "Operating model",
    privacy: "Trust controls"
  };
  els.pageTitle.textContent = titles[view];
  persist();
}

function metrics() {
  const activities = visibleActivities();
  const total = totalMinutes(activities);
  const categoryTotals = totalsBy("category", activities);
  const strategic = categoryTotals.Strategy || 0;
  const operations = categoryTotals.Operations || 0;
  const people = categoryTotals.People || 0;
  const governance = categoryTotals.Governance || 0;
  const customer = categoryTotals.Customer || 0;
  const coverage = Math.min(97, Math.round(68 + connectedSourceCount() * 4 + confidenceAverage() * 0.12));
  const score = Math.max(38, Math.min(96, Math.round(58 + strategic * 0.12 + people * 0.08 + customer * 0.04 - operations * 0.05)));
  return { total, categoryTotals, strategic, operations, people, governance, customer, coverage, score };
}

function renderToday() {
  const data = metrics();
  const operationsPct = Math.round((data.operations / data.total) * 100);
  const strategyPct = Math.round((data.strategic / data.total) * 100);
  const peoplePct = Math.round((data.people / data.total) * 100);

  els.coverageMetric.textContent = `${data.coverage}%`;
  els.alignmentScore.textContent = data.score;
  els.alignmentText.textContent =
    data.score >= 78 ? "Strong alignment. Protect these conditions." : "Mostly aligned, with operational load trending high.";
  els.dailyNarrative.textContent =
    `Tempo reconstructed ${formatMinutes(data.total)} across ${Object.keys(totalsBy("initiative")).length} work streams. ` +
    `Operations hold ${operationsPct}% of visible attention, strategy holds ${strategyPct}%, and leadership development holds ${peoplePct}%.`;

  els.measureRow.innerHTML = [
    ["Captured", formatMinutes(data.total)],
    ["Strategic", formatMinutes(data.strategic)],
    ["Operational", formatMinutes(data.operations)],
    ["Confidence", `${confidenceAverage()}%`]
  ]
    .map(([label, value]) => `<article class="measure-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");

  renderTimeline();
  renderSources();
  renderInsights();
  renderNoteTargets();
}

function renderTimeline() {
  els.timeline.innerHTML = state.activities
    .map((activity) => {
      const flags = [activity.private ? "is-private" : "", activity.excluded ? "is-excluded" : ""].join(" ");
      const notes = activity.notes.map((note) => `<span class="pill">Note: ${escapeHtml(note)}</span>`).join("");
      const evidence = activity.evidence.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("");
      return `
        <article class="timeline-item ${flags}" data-id="${activity.id}">
          <div class="time-chip">
            <div>${activity.start}</div>
            <div>${activity.end}</div>
          </div>
          <div>
            <div class="activity-top">
              <div>
                <h3>${escapeHtml(activity.title)}</h3>
                <p class="activity-meta">${escapeHtml(activity.summary)}</p>
              </div>
              <div class="activity-actions">
                <button class="quiet-button" type="button" data-action="explain">Explain</button>
                <button class="quiet-button" type="button" data-action="edit">Correct</button>
              </div>
            </div>
            <div class="activity-tags">
              <span class="pill ${categoryClass(activity.category)}">${escapeHtml(activity.category)}</span>
              <span class="pill">${escapeHtml(activity.initiative)}</span>
              <span class="pill">${formatMinutes(activity.minutes)}</span>
              <span class="pill">${activity.confidence}% confidence</span>
              ${activity.private ? `<span class="pill private">Private</span>` : ""}
              ${activity.excluded ? `<span class="pill private">Excluded</span>` : ""}
              ${notes}
            </div>
            <div class="evidence-row">${evidence}</div>
          </div>
        </article>`;
    })
    .join("");
}

function renderSources() {
  els.sourceGrid.innerHTML = state.sources
    .map(
      (source) => `
        <article class="source-card">
          <header>
            <strong>${escapeHtml(source.type)}</strong>
            <span class="pill ${source.connected ? "connected" : "risk"}">${source.connected ? "Connected" : "Off"}</span>
          </header>
          <p>${escapeHtml(source.name)} - ${source.events} events visible</p>
          <button type="button" data-source="${source.id}">${source.connected ? "Pause" : "Connect"}</button>
        </article>`
    )
    .join("");
}

function renderInsights() {
  const data = metrics();
  const operationsPct = Math.round((data.operations / data.total) * 100);
  const strategyLast = state.weeklyHistory.find((item) => item.category === "Strategy");
  const strategyChange = Math.round(((strategyLast.thisWeek - strategyLast.lastWeek) / strategyLast.lastWeek) * 100);
  const overdue = state.directReports.filter((report) => report.lastOneOnOneDays > 14);

  const insights = [
    {
      title: `${operationsPct}% of visible time is operational`,
      body: "Service reliability is expanding beyond planned meeting time and creating follow-up load."
    },
    {
      title: `Strategic planning is ${Math.abs(strategyChange)}% ${strategyChange < 0 ? "down" : "up"} this week`,
      body: "The shift is driven by escalation work and governance load."
    },
    {
      title: `${overdue.length} direct reports need attention`,
      body: overdue.map((report) => report.name).join(", ") || "Relationship cadence is currently healthy."
    }
  ];

  els.insightList.innerHTML = insights
    .map((insight) => `<article class="insight-card"><strong>${insight.title}</strong><p>${insight.body}</p></article>`)
    .join("");
}

function renderNoteTargets() {
  els.noteTarget.innerHTML = state.activities
    .map((activity) => `<option value="${activity.id}">${activity.start} - ${escapeHtml(activity.title)}</option>`)
    .join("");
}

function renderWeek() {
  const weeklyTotal = state.weeklyHistory.reduce((sum, item) => sum + item.thisWeek, 0);
  els.weeklyAllocation.innerHTML = state.weeklyHistory
    .map((item) => {
      const pct = Math.round((item.thisWeek / weeklyTotal) * 100);
      const targetPct = Math.round((item.target / weeklyTotal) * 100);
      return `
        <article class="allocation-card">
          <header>
            <span>${item.category}</span>
            <strong>${pct}%</strong>
          </header>
          <div class="bar-track"><div class="bar-fill" style="--width: ${pct}%"></div></div>
          <p class="activity-meta">${formatMinutes(item.thisWeek)} this week, target ${targetPct}%</p>
        </article>`;
    })
    .join("");

  els.trendList.innerHTML = state.weeklyHistory
    .map((item) => {
      const change = Math.round(((item.thisWeek - item.lastWeek) / item.lastWeek) * 100);
      const risk = item.thisWeek > item.target ? "Above target" : "Below target";
      return `
        <article class="trend-card">
          <header>
            <strong>${item.category}</strong>
            <span class="pill ${change > 0 ? "risk" : "connected"}">${change > 0 ? "+" : ""}${change}%</span>
          </header>
          <p>${risk}. ${formatMinutes(item.thisWeek)} this week versus ${formatMinutes(item.lastWeek)} last week.</p>
        </article>`;
    })
    .join("");

  els.relationshipGrid.innerHTML = state.directReports
    .map((report) => {
      const risk = report.lastOneOnOneDays > 14;
      return `
        <article class="relationship-card">
          <header>
            <strong>${escapeHtml(report.name)}</strong>
            <span class="pill ${risk ? "risk" : "connected"}">${risk ? "Overdue" : "Current"}</span>
          </header>
          <p class="activity-meta">${escapeHtml(report.role)} - last one-on-one ${report.lastOneOnOneDays} days ago.</p>
          <div class="source-badges">
            <span class="pill">${formatMinutes(report.minutes)} this week</span>
            <span class="pill">${escapeHtml(report.signal)}</span>
          </div>
        </article>`;
    })
    .join("");
}

function workStreams() {
  const grouped = {};
  visibleActivities().forEach((activity) => {
    if (!grouped[activity.initiative]) {
      grouped[activity.initiative] = {
        name: activity.initiative,
        minutes: 0,
        categories: new Set(),
        departments: new Set(),
        people: new Set(),
        evidence: new Set(),
        activities: []
      };
    }
    const stream = grouped[activity.initiative];
    stream.minutes += activity.minutes;
    stream.categories.add(activity.category);
    stream.departments.add(activity.department);
    activity.people.forEach((person) => stream.people.add(person));
    activity.evidence.forEach((item) => stream.evidence.add(item));
    stream.activities.push(activity.title);
  });
  return Object.values(grouped).sort((a, b) => b.minutes - a.minutes);
}

function renderStreams() {
  els.streamGrid.innerHTML = workStreams()
    .map(
      (stream) => `
        <article class="stream-card">
          <header>
            <strong>${escapeHtml(stream.name)}</strong>
            <span class="pill">${formatMinutes(stream.minutes)}</span>
          </header>
          <p>${stream.activities.length} related activities clustered by timing, participants, and source evidence.</p>
          <div class="source-badges">
            ${[...stream.categories].map((item) => `<span class="pill ${categoryClass(item)}">${escapeHtml(item)}</span>`).join("")}
            ${[...stream.departments].map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="evidence-row">
            ${[...stream.evidence].slice(0, 4).map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
          </div>
        </article>`
    )
    .join("");
}

function recommendations() {
  const data = metrics();
  const operationsPct = Math.round((data.operations / data.total) * 100);
  const overdue = state.directReports.filter((report) => report.lastOneOnOneDays > 14);
  return [
    {
      id: "delegate-escalation",
      title: "Delegate escalation triage",
      body:
        operationsPct > 35
          ? "Move first-response service reliability triage to the COO and ask for exception-only updates."
          : "Operations is contained today. Keep the escalation threshold explicit.",
      impact: "Returns 45-60 minutes per day if sustained."
    },
    {
      id: "restore-strategy",
      title: "Restore strategy block",
      body: "Strategic planning is below target this week. Protect one uninterrupted 90-minute block before Friday.",
      impact: "Improves alignment against the corporate strategy refresh."
    },
    {
      id: "relationship-cadence",
      title: "Repair relationship cadence",
      body: overdue.length
        ? `Schedule short check-ins with ${overdue.map((report) => report.name).join(" and ")}.`
        : "Direct report coverage is healthy this week.",
      impact: "Reduces invisible management risk."
    },
    {
      id: "compress-governance",
      title: "Compress governance reviews",
      body: "Bundle board package and platform steering decisions into one prepared decision block.",
      impact: "Cuts meeting fragmentation and follow-up churn."
    }
  ];
}

function renderCoach() {
  els.coachList.innerHTML = recommendations()
    .map((item) => {
      const done = state.coachingDone.includes(item.id);
      return `
        <article class="coach-item ${done ? "is-done" : ""}">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
            <div class="source-badges"><span class="pill">${escapeHtml(item.impact)}</span></div>
          </div>
          <button class="quiet-button" type="button" data-coach="${item.id}">${done ? "Acknowledged" : "Acknowledge"}</button>
        </article>`;
    })
    .join("");
}

function renderSetup() {
  document.querySelector("#priorityInput").value = state.operatingModel.priorities.join("\n");
  document.querySelector("#departmentInput").value = state.operatingModel.departments.join("\n");
  document.querySelector("#reportInput").value = state.operatingModel.reports.join("\n");
  document.querySelector("#categoryInput").value = state.operatingModel.categories.join("\n");
}

function renderPrivacy() {
  const controls = [
    ["ingestContent", "Analyze content", "Use message and document text when connected sources permit it."],
    ["metadataOnly", "Metadata-only mode", "Classify using titles, participants, timestamps, and source metadata."],
    ["privateByDefault", "Private by default", "New manual entries and voice notes begin as private."],
    ["chiefOfStaffAccess", "Chief of staff summary access", "Allow summary-level access without exposing private notes."]
  ];
  els.privacyControls.innerHTML = controls
    .map(
      ([key, label, body]) => `
        <article class="privacy-item">
          <label class="checkbox-row">
            <input type="checkbox" data-privacy="${key}" ${state.privacy[key] ? "checked" : ""} />
            <span>${label}</span>
          </label>
          <p>${body}</p>
        </article>`
    )
    .join("");
  els.auditList.innerHTML = state.audit.map((item) => `<article class="audit-entry"><p>${escapeHtml(item)}</p></article>`).join("");
}

function renderAll() {
  renderToday();
  renderWeek();
  renderStreams();
  renderCoach();
  renderSetup();
  renderPrivacy();
  setView(state.activeView);
}

function sourceActivity(type, reference) {
  const defaults = {
    Calendar: ["Linked meeting block", "Governance", "Board readiness", "Finance", 45],
    Email: ["Linked email thread", "Operations", "Decision queue", "Multiple", 20],
    Teams: ["Linked Teams conversation", "Operations", "Service reliability reset", "Operations", 25],
    Document: ["Linked document review", "Strategy", "Corporate strategy refresh", "Executive", 35],
    Phone: ["Linked phone note", "Customer", "Enterprise retention", "Revenue", 30],
    Travel: ["Linked travel block", "Admin", "Executive movement", "Executive", 40]
  };
  const [title, category, initiative, department, minutes] = defaults[type] || defaults.Document;
  return {
    id: `a${Date.now()}`,
    start: "18:00",
    end: "18:30",
    title,
    source: `${type}: ${reference}`,
    category,
    initiative,
    department,
    people: ["Unassigned"],
    priority: initiative,
    minutes,
    confidence: 64,
    importance: "Medium",
    urgency: "Medium",
    summary: `New ${type.toLowerCase()} source ingested and added to the day for classification.`,
    evidence: ["manual source link", reference],
    notes: [],
    private: state.privacy.privateByDefault,
    excluded: false
  };
}

function openActivityDialog(activity) {
  state.selectedActivityId = activity.id;
  document.querySelector("#dialogTitle").textContent = activity.title;
  document.querySelector("#editCategory").innerHTML = state.operatingModel.categories
    .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
    .join("");
  document.querySelector("#editCategory").value = activity.category;
  document.querySelector("#editInitiative").value = activity.initiative;
  document.querySelector("#editMinutes").value = activity.minutes;
  document.querySelector("#editPriority").value = activity.priority;
  document.querySelector("#editPrivate").checked = activity.private;
  document.querySelector("#editExcluded").checked = activity.excluded;
  els.dialog.showModal();
}

function saveActivityCorrection() {
  const activity = activityById(state.selectedActivityId);
  if (!activity) return;
  activity.category = document.querySelector("#editCategory").value;
  activity.initiative = document.querySelector("#editInitiative").value.trim() || activity.initiative;
  activity.minutes = Number(document.querySelector("#editMinutes").value) || activity.minutes;
  activity.priority = document.querySelector("#editPriority").value.trim() || activity.priority;
  activity.private = document.querySelector("#editPrivate").checked;
  activity.excluded = document.querySelector("#editExcluded").checked;
  activity.confidence = Math.min(99, activity.confidence + 6);
  state.audit.unshift(`Correction learned for "${activity.title}" and applied to future classification.`);
  persist();
  renderAll();
  showToast("Correction saved and learning signal recorded.");
}

function splitActivity() {
  const activity = activityById(state.selectedActivityId);
  if (!activity || activity.minutes < 10) return;
  const splitMinutes = Math.floor(activity.minutes / 2);
  activity.minutes -= splitMinutes;
  const cloneActivity = {
    ...clone(activity),
    id: `a${Date.now()}`,
    title: `${activity.title} follow-up`,
    minutes: splitMinutes,
    confidence: Math.max(55, activity.confidence - 10),
    summary: "Split from the original activity after manual correction.",
    evidence: [...activity.evidence, "manual split"]
  };
  const index = state.activities.findIndex((item) => item.id === activity.id);
  state.activities.splice(index + 1, 0, cloneActivity);
  state.audit.unshift(`Activity split: "${activity.title}".`);
  persist();
  els.dialog.close();
  renderAll();
  showToast("Activity split into a follow-up block.");
}

function mergeActivity() {
  const index = state.activities.findIndex((item) => item.id === state.selectedActivityId);
  if (index < 0 || index === state.activities.length - 1) return;
  const activity = state.activities[index];
  const next = state.activities[index + 1];
  activity.title = `${activity.title} + ${next.title}`;
  activity.minutes += next.minutes;
  activity.end = next.end;
  activity.evidence = [...new Set([...activity.evidence, ...next.evidence, "manual merge"])]
  activity.notes = [...activity.notes, ...next.notes];
  activity.confidence = Math.min(99, activity.confidence + 3);
  state.activities.splice(index + 1, 1);
  state.audit.unshift(`Activities merged into "${activity.title}".`);
  persist();
  els.dialog.close();
  renderAll();
  showToast("Adjacent activity merged.");
}

function explainActivity(activity) {
  showToast(`Classified from ${activity.evidence.slice(0, 3).join(", ")}.`);
}

function attachListeners() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelector("#prepareBrief").addEventListener("click", () => {
    const data = metrics();
    state.audit.unshift(`Executive brief prepared with ${formatMinutes(data.total)} captured and ${data.score} alignment score.`);
    persist();
    renderPrivacy();
    showToast("Executive brief prepared from timeline, notes, trends, and coaching signals.");
  });

  document.querySelector("#resetDemo").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    state = clone(seed);
    renderAll();
    showToast("Demo reset to PRD baseline.");
  });

  document.querySelectorAll(".range-control button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".range-control button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeRange = button.dataset.range;
      persist();
      showToast(`${button.textContent} view selected.`);
    });
  });

  els.timeline.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const activity = activityById(actionButton.closest(".timeline-item").dataset.id);
    if (actionButton.dataset.action === "edit") openActivityDialog(activity);
    if (actionButton.dataset.action === "explain") explainActivity(activity);
  });

  els.sourceGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-source]");
    if (!button) return;
    const source = state.sources.find((item) => item.id === button.dataset.source);
    source.connected = !source.connected;
    state.audit.unshift(`${source.name} ${source.connected ? "connected" : "paused"} by user.`);
    persist();
    renderAll();
    showToast(`${source.name} ${source.connected ? "connected" : "paused"}.`);
  });

  document.querySelector("#linkForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.querySelector("#sourceType").value;
    const input = document.querySelector("#sourceReference");
    const reference = input.value.trim();
    if (!reference) {
      showToast("Add a source reference first.");
      return;
    }
    state.activities.push(sourceActivity(type, reference));
    const source = state.sources.find((item) => item.type === type);
    if (source) {
      source.connected = true;
      source.events += 1;
    }
    state.audit.unshift(`${type} source ingested: ${reference}.`);
    input.value = "";
    persist();
    renderAll();
    showToast(`${type} source ingested and classified.`);
  });

  document.querySelector("#recordToggle").addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("is-recording");
    showToast(event.currentTarget.classList.contains("is-recording") ? "Voice capture armed." : "Voice capture stopped.");
  });

  document.querySelector("#attachNote").addEventListener("click", () => {
    const input = document.querySelector("#voiceNote");
    const note = input.value.trim();
    if (!note) {
      showToast("Add a reflection note first.");
      return;
    }
    const activity = activityById(els.noteTarget.value);
    activity.notes.push(note);
    activity.evidence.push("voice reflection");
    activity.confidence = Math.min(99, activity.confidence + 4);
    state.audit.unshift(`Voice reflection attached to "${activity.title}".`);
    input.value = "";
    persist();
    renderAll();
    showToast("Voice note summarized and attached.");
  });

  document.querySelector("#activityForm").addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    saveActivityCorrection();
    els.dialog.close();
  });

  document.querySelector("#splitActivity").addEventListener("click", splitActivity);
  document.querySelector("#mergeActivity").addEventListener("click", mergeActivity);

  els.coachList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-coach]");
    if (!button) return;
    const id = button.dataset.coach;
    if (state.coachingDone.includes(id)) {
      state.coachingDone = state.coachingDone.filter((item) => item !== id);
    } else {
      state.coachingDone.push(id);
    }
    persist();
    renderCoach();
  });

  els.setupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.operatingModel.priorities = document.querySelector("#priorityInput").value.split("\n").map((item) => item.trim()).filter(Boolean);
    state.operatingModel.departments = document.querySelector("#departmentInput").value.split("\n").map((item) => item.trim()).filter(Boolean);
    state.operatingModel.reports = document.querySelector("#reportInput").value.split("\n").map((item) => item.trim()).filter(Boolean);
    state.operatingModel.categories = document.querySelector("#categoryInput").value.split("\n").map((item) => item.trim()).filter(Boolean);
    state.audit.unshift("Operating model updated by user.");
    persist();
    renderAll();
    showToast("Operating model saved.");
  });

  els.privacyControls.addEventListener("change", (event) => {
    const input = event.target.closest("[data-privacy]");
    if (!input) return;
    state.privacy[input.dataset.privacy] = input.checked;
    state.audit.unshift(`Privacy control changed: ${input.dataset.privacy}.`);
    persist();
    renderPrivacy();
    showToast("Privacy preference updated.");
  });
}

renderAll();
attachListeners();
