// Bilingual dictionary. English + Hong Kong Traditional Chinese.
// Site defaults to zh-HK.

export const en = {
  brand: "A Line Technologies",
  nav: {
    services: "Services",
    cases: "Cases",
    team: "Clinical team",
    contact: "Contact",
    partnerLogin: "Partner login",
    submitCase: "Submit a test case",
  },
  hero: {
    headline: "Precision clear aligner treatment plans.",
    sub: "A Line Technologies is the orthodontist-led treatment-planning partner behind aligner labs, dental clinics, and emerging aligner brands across the Asia–Pacific. We design. You manufacture. Your brand stays front.",
    ctaSubmit: "Submit a test case",
    ctaProcess: "See how it works",
    placeholderLabel: "Hero visual",
    placeholderHint:
      "Screenshot or render of a treatment-planning software view — e.g. occlusal 3D arch with movement plan side panel, or a clinician at a workstation.",
    placeholderSpec: "1200 × 900 · WebP or PNG · save to /public/hero.png",
  },
  partner: {
    eyebrow: "Clinical partner",
    headline: "Plans designed for Beame Medical Tech.",
    body: "Our treatment plans are used clinically by Beame Medical Tech, a Hong Kong clear-aligner brand. Beame's clinicians prescribe, fit, and monitor — we design the plans they execute.",
    cta: "Learn more about Beame →",
  },
  stats: {
    items: [
      { v: "[XX]k+", l: "Treatment plans designed", n: "Cumulative since [year founded]" },
      { v: "[XX]", l: "Partner clinics & labs", n: "[Regions]" },
      { v: "[XX] hr", l: "Standard turnaround", n: "Express track at [XX] hr" },
      { v: "[XX]%", l: "First-revision approval", n: "[Time window]" },
    ],
    footnote:
      "Replace bracketed values with real figures in Stats.tsx. Any number on the live site should be defensible.",
  },
  process: {
    eyebrow: "Workflow",
    headline: "From scan to print-ready, four steps.",
    sub: "No phone tag, no chasing files — just a clinician-reviewed plan, delivered under your brand.",
    step: "Step",
    steps: [
      {
        title: "Submit scan and prescription",
        body: "Upload an STL/PLY intraoral scan, photos, and a brief clinical prescription through your white-labelled partner portal. CBCT optional for root-aware planning.",
      },
      {
        title: "Segmentation and diagnosis",
        body: "Our segmentation pipeline isolates each tooth, builds the occlusal model, and flags clinical considerations — crowding, rotations, IPR opportunities, occlusal contacts.",
      },
      {
        title: "Orthodontist-led treatment design",
        body: "A licensed orthodontist designs the final movement plan: staging, attachments, IPR schedule, biomechanically validated tooth velocities. Every case. No exceptions.",
      },
      {
        title: "Delivered: STL stages, plan PDF, 3D viewer",
        body: "You receive printable STL files for each stage, a clinician-ready treatment summary in your brand, and a shareable 3D viewer link. Revisions until you're ready to print.",
      },
    ],
  },
  technology: {
    eyebrow: "Technology",
    headline:
      "Engineered like a medical device. Reviewed like a treatment plan.",
    sub: "A Line Technologies sits at the intersection of orthodontic clinical practice and aligner CAD. Six principles separate a defensible setup from a pretty one.",
    pillars: [
      { title: "Diagnosis-first treatment planning", body: "Every case starts with a documented diagnosis. We don't move teeth without first defining the clinical objective and the biomechanical envelope." },
      { title: "Automated segmentation, manual refinement", body: "Our segmentation engine isolates teeth, gingiva, and contact points in minutes. A trained CAD technician then refines margins, root estimates, and attachment surfaces." },
      { title: "CBCT root fusion (optional)", body: "When CBCT data is available, we fuse the 3D root anatomy into the planning model so movements are constrained by real bone — not assumed." },
      { title: "Biomechanically validated staging", body: "Velocity caps per tooth type, anchorage modelling, attachment optimisation, IPR scheduling — derived from peer-reviewed orthodontic biomechanics, not heuristics." },
      { title: "Software-agnostic export", body: "Output is delivered as universal STL stages plus the CAD platform of your choice." },
      { title: "Orthodontist sign-off, every case", body: "No setup leaves our facility without a licensed orthodontist's signature. This is a clinical service that happens to use software — not the other way around." },
    ],
    softwareEyebrow: "Software-agnostic",
    softwareCopy:
      "Receive your case in the planning platform you already use. Output is portable; the clinical thinking is ours.",
  },
  services: {
    eyebrow: "Services",
    headline: "Design only. Always.",
    sub: "We do not manufacture aligners. We design the treatment plans your team prints, finishes, and ships. That separation isn't accidental — it's the entire point of our model.",
    items: [
      { bullet: "Our most common service", title: "Full treatment plan", body: "End-to-end clear aligner setup: diagnosis, movement plan, staging, attachments, IPR schedule, printable STL stages, and a clinician-ready summary." },
      { bullet: "For established labs", title: "Setup-only (your stage count)", body: "We design to your prescribed stage count and constraints. Use when your in-house team handles diagnosis and you need execution." },
      { bullet: "Unlimited revisions", title: "Refinement & mid-course correction", body: "Re-scan, re-stage, and re-issue stages based on actual progression. Includes a delta report showing what tracked vs. what didn't." },
      { bullet: "Often bundled at case open", title: "Retainer & retention planning", body: "Post-treatment retention sets, Essix and Vivera-style retainers, and long-term arch monitoring plans." },
    ],
  },
  cases: {
    eyebrow: "Case library",
    headline: "The deliverable, illustrated.",
    sub: "A representative cross-section of cases planned, anonymised. Request the full case library — including before/after photography and staging frames — for partner due diligence.",
    requestLink: "Request the full case library →",
    diagnosis: "[Diagnosis]",
    complexity: { Mild: "Mild", Moderate: "Moderate", Complex: "Complex" },
    fields: { stages: "Stages", duration: "Duration", ipr: "IPR", attachments: "Attachments", months: "mo" },
    filtersAll: "All",
    footnote: "Anonymised case records. Identifiers redacted for patient privacy.",
  },
  team: {
    eyebrow: "Clinical leadership",
    headline: "A clinical team you can name.",
    sub: "Most aligner-design outsourcers won't tell you who's planning your cases. We will. Every plan we deliver carries the signature of a named, credentialled orthodontist — and you can meet them.",
    members: [
      { initials: "CD", name: "Dr. [Clinical Director name]", role: "Clinical Director", creds: "BDS · MOrth · 15+ yr clinical orthodontics", body: "Oversees clinical governance and the orthodontist review board. Personally signs off on escalated cases." },
      { initials: "TP", name: "Dr. [Head of Treatment Planning]", role: "Head of Treatment Planning", creds: "BDS · MDS Orthodontics", body: "Leads the treatment-planning team. Authored our internal staging protocols for deep-bite and Class II correction." },
      { initials: "SC", name: "Dr. [Senior Consultant]", role: "Senior Consultant — Complex Cases", creds: "BDS · MSc Orthodontics", body: "Reviews cases involving skeletal discrepancies, surgical orthodontic interfaces, and adult re-treatment." },
    ],
    govEyebrow: "Clinical governance",
    govBody:
      "Our orthodontist review board meets weekly to audit case outcomes, calibrate staging protocols, and review any case flagged for refinement. Plans are signed off by the named clinician responsible — never by an anonymous reviewer.",
  },
  whiteLabel: {
    eyebrow: "White-label",
    headline: "Your brand, front and centre.",
    sub: "You spent years building trust with the dentists who refer to you. We're not going to dilute that by stamping our name on your deliverables. Every plan leaves our facility looking like it came from yours.",
    features: [
      { title: "We stay invisible.", body: "Your patients never see our name. Your clinicians never see our name. Your competitors don't either." },
      { title: "Your brand on every deliverable.", body: "Treatment summaries, 3D viewer links, and retainer cases are rendered under your logo and palette — not ours." },
      { title: "Clinician-ready documents.", body: "Plan PDFs are written for the receiving dentist, not our internal team. Diagnosis, mechanics, risks, retention plan — all included." },
    ],
  },
  compliance: {
    eyebrow: "Compliance & security",
    headline: "How we handle patient data.",
    sub: "Patient records are the most sensitive thing your lab touches. Here's our operating posture for the data you send us.",
    promises: [
      { title: "Encrypted in transit and at rest", body: "AES-256 at rest, TLS 1.3 in transit. Patient identifiers separated from clinical data." },
      { title: "Audit trail on every case", body: "Every clinical action — segmentation edit, stage adjustment, sign-off — is logged with operator and timestamp." },
      { title: "DPA & BAA on request", body: "Standard Data Processing Agreement and Business Associate Agreement available for partner onboarding." },
      { title: "Orthodontist sign-off required", body: "No setup is released to a partner without a named, licensed orthodontist's review signature." },
      { title: "Data residency options", body: "APAC and EU hosting options for partners with regional data-residency requirements." },
      { title: "Independent security testing", body: "External penetration testing on an annual cadence; remediation tracked and re-tested." },
    ],
    footnote:
      "Full compliance documentation — including data processing agreements, sub-processor list, and security questionnaire responses — available to qualified partners under NDA.",
  },
  cta: {
    eyebrow: "Get started",
    headline: "Send us a real case. We'll plan it free.",
    sub: "The fastest way to evaluate us is to give us a case from your last month and compare the result to what you got. One per partner, no obligation, NDA on request.",
    ctaSubmit: "Submit a test case",
    ctaTalk: "Talk to partnerships",
    listEyebrow: "What to send",
    list: [
      "Intraoral scan (STL, PLY, or OBJ) — upper + lower + bite",
      "Intraoral and extraoral photos (8 total, standard ortho set)",
      "Short prescription: chief complaint, treatment goals, constraints",
      "Optional: CBCT for root-aware planning",
    ],
    hqLine: "Hong Kong HQ · APAC support",
    contactLine: "hello@aline.tech",
  },
  footer: {
    tagline:
      "Clear aligner treatment-planning, designed in Hong Kong for labs and clinics. Design only. No manufacturing. Your brand stays front.",
    contactLabel: "Get in touch",
    submitCase: "Submit a case",
    emailUs: "hello@aline.tech",
    copyright: "A Line Technologies Limited.",
    disclaimer:
      "A Line Technologies provides clear aligner treatment-planning design services to dental laboratories, orthodontic clinics, and aligner brands. We do not manufacture aligners. We are not a clinical practice and do not provide orthodontic care directly to patients. All clinical decision-making remains the responsibility of the treating clinician.",
  },
  login: {
    heading: "Partner sign-in",
    sub: "Access your account to submit cases, review plans, and download deliverables.",
    emailLabel: "Work email",
    emailPlaceholder: "you@yourlab.com",
    pwLabel: "Password",
    pwPlaceholder: "••••••••",
    forgot: "Forgot?",
    signIn: "Sign in",
    signingIn: "Signing in…",
    error:
      "We couldn't find an account for that email. Partner access is by invitation.",
    talkLink: "Talk to us",
    becomeSuffix: "about becoming a partner.",
    noAccount: "Don't have a partner account?",
    submitLink: "Submit a test case",
    getStarted: "to get started.",
    brandEyebrow: "For partners",
    brandHeading: "Every case, every status, every deliverable — in one place.",
    brandBullets: [
      "Submit scans and prescriptions in one upload",
      "Track status across diagnosis, design, and clinical review",
      "Download STL stages and clinician-ready summaries",
      "Audit trail for every clinical action",
    ],
    trouble: "Trouble signing in?",
  },
  toggleLang: "EN",
};

export const zh: typeof en = {
  brand: "A Line Technologies",
  nav: {
    services: "服務",
    cases: "案例",
    team: "臨床團隊",
    contact: "聯絡",
    partnerLogin: "合作夥伴登入",
    submitCase: "提交試做個案",
  },
  hero: {
    headline: "精準隱形牙箍治療方案。",
    sub: "A Line Technologies 是亞太區隱形牙箍實驗室、牙科診所及新興品牌背後的治療方案設計夥伴，由矯齒科醫生主導。我們負責設計，您負責生產，品牌永遠是您的。",
    ctaSubmit: "提交試做個案",
    ctaProcess: "了解流程",
    placeholderLabel: "首頁主視覺",
    placeholderHint:
      "治療方案設計軟件的截圖或渲染圖 — 例如 3D 咬合視圖配側欄移動方案，或臨床人員操作的場景。",
    placeholderSpec: "1200 × 900 · WebP 或 PNG · 儲存至 /public/hero.png",
  },
  partner: {
    eyebrow: "臨床合作夥伴",
    headline: "為 Beame Medical Tech 設計的治療方案。",
    body: "我們的治療方案由本港隱形牙箍品牌 Beame Medical Tech 臨床使用。Beame 的醫生負責處方、配戴及監察，我們負責設計他們執行的治療方案。",
    cta: "了解更多關於 Beame →",
  },
  stats: {
    items: [
      { v: "[XX]k+", l: "設計治療方案數量", n: "[成立年份] 起累計" },
      { v: "[XX]", l: "合作診所與實驗室", n: "[地區]" },
      { v: "[XX] 小時", l: "標準交付時間", n: "急件 [XX] 小時內" },
      { v: "[XX]%", l: "首版方案通過率", n: "[統計期間]" },
    ],
    footnote:
      "請於 Stats.tsx 將方括號內的數字替換為實際數據。任何公開展示的數字均應有據可查。",
  },
  process: {
    eyebrow: "工作流程",
    headline: "從口腔掃描到可列印方案，四個步驟。",
    sub: "免去電話追蹤、檔案來回 — 您只會收到一份由臨床醫生審核、以您品牌呈現的治療方案。",
    step: "步驟",
    steps: [
      {
        title: "提交掃描及處方",
        body: "透過您專屬的合作夥伴入口上載 STL/PLY 口腔掃描檔、相片及簡短臨床處方。可選擇提供 CBCT 影像以支援牙根感知規劃。",
      },
      {
        title: "牙齒分割與診斷",
        body: "我們的分割系統會分離每隻牙齒、建立咬合模型，並標示臨床注意事項 — 包括擠迫、旋轉、IPR 機會及咬合接觸點。",
      },
      {
        title: "矯齒科醫生主導的方案設計",
        body: "由註冊矯齒科醫生設計最終的移動方案：分階段、附件、IPR 安排、生物力學驗證的移動速度。每個個案皆然，無一例外。",
      },
      {
        title: "交付：STL 分階段檔、方案 PDF、3D 檢視器",
        body: "您將收到每個階段的可列印 STL 檔案、以您品牌呈現的臨床治療摘要，以及可分享的 3D 檢視器連結。可不斷修訂，直至您準備列印為止。",
      },
    ],
  },
  technology: {
    eyebrow: "技術",
    headline: "以醫療器械標準設計，以治療方案標準審核。",
    sub: "A Line Technologies 處於矯齒臨床實踐與隱形牙箍 CAD 設計的交匯點。六項原則區分一個站得住腳的治療方案與一個只是看起來漂亮的方案。",
    pillars: [
      { title: "以診斷為先的治療規劃", body: "每個個案均由有記錄的診斷開始。在未確立臨床目標及生物力學範圍之前，我們不會移動任何牙齒。" },
      { title: "自動分割，人手細化", body: "我們的分割引擎能於數分鐘內分離牙齒、牙齦及接觸點。經訓練的 CAD 技術員會進一步細化邊緣、牙根估算及附件表面。" },
      { title: "CBCT 牙根融合（可選）", body: "如有 CBCT 資料，我們會將 3D 牙根結構融合至規劃模型，令牙齒移動受實際骨質結構約束 — 而非假設。" },
      { title: "生物力學驗證的分階段安排", body: "依據經同儕審查的矯齒生物力學文獻 — 而非經驗法則 — 設定每類牙齒的移動速度上限、錨點建模、附件優化及 IPR 安排。" },
      { title: "與軟件平台無關的輸出", body: "輸出為通用 STL 分階段檔案，亦可配合您選用的 CAD 平台。" },
      { title: "每個個案均經矯齒科醫生簽核", body: "未經註冊矯齒科醫生簽核，任何方案均不會離開我們的設施。這是一項臨床服務，恰巧使用了軟件 — 而非反之。" },
    ],
    softwareEyebrow: "與平台無關",
    softwareCopy:
      "於您現有的規劃平台收取個案。輸出檔案可移植，臨床判斷則由我們提供。",
  },
  services: {
    eyebrow: "服務",
    headline: "只做設計。一直如此。",
    sub: "我們不製造隱形牙箍。我們設計治療方案，由您的團隊負責列印、處理及付運。這種分工並非偶然 — 而是我們模式的核心。",
    items: [
      { bullet: "我們最常見的服務", title: "完整治療方案", body: "端對端隱形牙箍設計：診斷、移動方案、分階段、附件、IPR 安排、可列印 STL 分階段檔，以及臨床摘要。" },
      { bullet: "適合成熟實驗室", title: "純設計（依您指定階段數）", body: "依據您指定的階段數及條件設計。適用於由內部團隊負責診斷、只需執行支援的情況。" },
      { bullet: "無限次修訂", title: "中期調整與再規劃", body: "依實際進度重新掃描、重新分階段及重新發送。包括追蹤偏差分析報告，列出進度符合與不符合之處。" },
      { bullet: "通常於開案時一併納入", title: "保持器與保留期規劃", body: "治療後保持器組件、Essix 及 Vivera 式保持器，以及長期牙弓監察方案。" },
    ],
  },
  cases: {
    eyebrow: "案例庫",
    headline: "成品實例。",
    sub: "已規劃個案的代表性樣本，已作去識別化處理。如需完整案例庫 — 包括治療前後相片及分階段影格 — 以供合作夥伴盡職審查，請與我們聯絡。",
    requestLink: "索取完整案例庫 →",
    diagnosis: "[診斷]",
    complexity: { Mild: "輕度", Moderate: "中度", Complex: "複雜" },
    fields: { stages: "階段數", duration: "療程", ipr: "IPR", attachments: "附件", months: "個月" },
    filtersAll: "全部",
    footnote: "已去識別化的個案記錄。為保障病人私隱已遮蔽識別資料。",
  },
  team: {
    eyebrow: "臨床領導",
    headline: "一支您能具名的臨床團隊。",
    sub: "大部分隱形牙箍設計外判商不會告訴您是誰在規劃您的個案。我們會。我們交付的每一份治療方案，均有一位具名、有資歷的矯齒科醫生簽署 — 您亦可親自與他們見面。",
    members: [
      { initials: "CD", name: "[臨床總監姓名] 醫生", role: "臨床總監", creds: "牙科學士 · 矯齒科碩士 · 15 年以上臨床矯齒經驗", body: "負責臨床管治及矯齒科醫生審核委員會。親自簽核需要轉介的個案。" },
      { initials: "TP", name: "[治療規劃主管姓名] 醫生", role: "治療規劃主管", creds: "牙科學士 · 矯齒科碩士", body: "領導治療規劃團隊。制定我們內部處理深咬及 Class II 矯正的分階段標準。" },
      { initials: "SC", name: "[資深顧問姓名] 醫生", role: "資深顧問 — 複雜個案", creds: "牙科學士 · 矯齒科理學碩士", body: "審核涉及骨骼差異、外科矯齒介面及成人再治療的個案。" },
    ],
    govEyebrow: "臨床管治",
    govBody:
      "我們的矯齒科醫生審核委員會每週召開會議，審核個案結果、校準分階段標準，以及覆核所有被標記需重新調整的個案。方案由具名的負責臨床醫生簽核 — 絕不由匿名審核人簽署。",
  },
  whiteLabel: {
    eyebrow: "白標服務",
    headline: "您的品牌，始終居中。",
    sub: "您花了多年建立轉介牙醫對您的信任。我們不會在您的成品上印上我們的名字，稀釋這份信任。每一份方案離開我們的設施時，看起來都像出自您的團隊。",
    features: [
      { title: "我們保持隱形。", body: "您的病人不會看見我們的名字。您的臨床人員不會看見我們的名字。您的競爭對手也不會。" },
      { title: "每份成品皆是您的品牌。", body: "治療摘要、3D 檢視器連結、保持器盒 — 全部以您的標誌與色系呈現，而非我們的。" },
      { title: "為臨床而寫的文件。", body: "方案 PDF 是寫給接收個案的牙醫看，並非寫給我們內部團隊看。診斷、力學、風險、保留方案 — 一應俱全。" },
    ],
  },
  compliance: {
    eyebrow: "合規與資訊保安",
    headline: "我們如何處理病人資料。",
    sub: "病人記錄是您實驗室處理過最敏感的資料。以下是我們處理您交付資料的操作標準。",
    promises: [
      { title: "傳輸及儲存均經加密", body: "靜態 AES-256 加密，傳輸 TLS 1.3。病人識別資料與臨床資料分開儲存。" },
      { title: "每個個案皆有審計記錄", body: "每項臨床操作 — 包括分割編輯、階段調整、簽核 — 均會連同操作員及時間戳一併記錄。" },
      { title: "可提供 DPA 及 BAA", body: "標準資料處理協議（DPA）及商業夥伴協議（BAA），可於合作夥伴開戶時提供。" },
      { title: "必經矯齒科醫生簽核", body: "未經具名註冊矯齒科醫生審核簽署，任何方案均不會交付予合作夥伴。" },
      { title: "可選擇資料寄存地點", body: "為有地區性資料寄存要求的合作夥伴提供亞太及歐洲寄存選項。" },
      { title: "獨立資訊保安測試", body: "每年由外部公司進行滲透測試；問題修復會被追蹤並重新測試。" },
    ],
    footnote:
      "完整合規文件 — 包括資料處理協議、子處理者清單及保安問卷回應 — 可在簽署保密協議後向合資格合作夥伴提供。",
  },
  cta: {
    eyebrow: "開始合作",
    headline: "將真實個案交給我們，我們免費為您規劃。",
    sub: "評估我們最快的方式，是將您上個月處理過的個案交給我們，再比較雙方結果。每位合作夥伴限一次，無任何承諾，可簽署保密協議。",
    ctaSubmit: "提交試做個案",
    ctaTalk: "與合作部門洽談",
    listEyebrow: "請提供以下資料",
    list: [
      "口腔掃描檔（STL、PLY 或 OBJ）— 上顎、下顎及咬合",
      "口腔內外相片（共 8 張，標準矯齒組）",
      "簡短處方：主訴、治療目標、限制條件",
      "可選：CBCT 影像以支援牙根感知規劃",
    ],
    hqLine: "香港總部 · 亞太區支援",
    contactLine: "hello@aline.tech",
  },
  footer: {
    tagline:
      "於香港為實驗室及診所設計的隱形牙箍治療方案。只做設計，不做製造，品牌始終是您的。",
    contactLabel: "聯絡我們",
    submitCase: "提交個案",
    emailUs: "hello@aline.tech",
    copyright: "A Line Technologies Limited.",
    disclaimer:
      "A Line Technologies 為牙科實驗室、矯齒診所及隱形牙箍品牌提供治療方案設計服務。本公司不製造隱形牙箍，亦非臨床機構，不直接向病人提供矯齒治療。所有臨床決定仍由負責治療的臨床醫生承擔。",
  },
  login: {
    heading: "合作夥伴登入",
    sub: "登入您的帳戶以提交個案、審核方案及下載成品。",
    emailLabel: "公司電郵",
    emailPlaceholder: "you@yourlab.com",
    pwLabel: "密碼",
    pwPlaceholder: "••••••••",
    forgot: "忘記密碼？",
    signIn: "登入",
    signingIn: "登入中⋯",
    error: "找不到該電郵對應的帳戶。合作夥伴需經邀請開通。",
    talkLink: "聯絡我們",
    becomeSuffix: "了解如何成為合作夥伴。",
    noAccount: "尚未開通合作夥伴帳戶？",
    submitLink: "提交試做個案",
    getStarted: "以開始合作。",
    brandEyebrow: "合作夥伴專區",
    brandHeading: "每個個案、每個狀態、每份成品 — 集中於一處。",
    brandBullets: [
      "一次上載完成掃描及處方提交",
      "追蹤診斷、設計及臨床審核的進度",
      "下載 STL 分階段檔及臨床摘要",
      "每項臨床操作皆有完整審計記錄",
    ],
    trouble: "登入有問題？",
  },
  toggleLang: "中",
};

export type Lang = "en" | "zh";
export const dict = { en, zh };
