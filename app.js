const repository = (() => {
  const host = window.location.hostname;
  const pathRepo = window.location.pathname.split("/").filter(Boolean)[0] || "kpopzoo";

  if (host.endsWith(".github.io")) {
    return {
      owner: host.replace(".github.io", ""),
      repo: pathRepo,
    };
  }

  return {
    owner: "YOUR_GITHUB_USERNAME",
    repo: "kpopzoo",
  };
})();

const apps = [
  {
    id: "newjeans",
    name: "NewJeans Pets",
    group: "NewJeans",
    version: "1.0.1",
    tag: "newjeans-v1.0.1",
    status: "Latest release",
    summary:
      "五只 NewJeans 风格桌宠，可以在桌面陪伴、移动和互动。适合想要轻量常驻的小桌面伙伴。",
    docPath: "docs/newjeans.txt",
    releaseNotePath: "docs/newjeans.md",
    notes: [
      "启动后桌宠会出现在桌面，可拖动到喜欢的位置。",
      "托盘菜单可以管理显示、隐藏和退出。",
      "如果 Windows 安全提示拦截，请选择保留并确认这是你自己发布的安装包。",
    ],
    files: {
      windows: "https://github.com/aiki77z/kpopzoo/releases/download/newjeans-v1.0.1/NewJeans.Pets.Setup.1.0.1.exe",
      macArm: "https://github.com/aiki77z/kpopzoo/releases/download/newjeans-v1.0.1/NewJeans.Pets-1.0.1-arm64.dmg",
      macX64: "https://github.com/aiki77z/kpopzoo/releases/download/newjeans-v1.0.1/NewJeans.Pets-1.0.1-x64.dmg",
    },
  },
  {
    id: "boynextdoor",
    name: "BOYNEXTDOOR Pets",
    group: "BOYNEXTDOOR",
    version: "1.0.3",
    tag: "boynextdoor-v1.0.3",
    status: "Latest release",
    summary:
      "BOYNEXTDOOR 桌宠合集，保留多角色互动和轻量桌面陪伴体验。",
    docPath: "docs/boynextdoor.txt",
    releaseNotePath: "docs/boynextdoor.md",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "macOS 安装包来自 release 附件，下载后拖入应用程序或直接打开。",
      "桌宠资源已经内置在安装包内，下载页不会公开 spritesheet 源文件。",
    ],
    files: {
      windows: "BOYNEXTDOOR-Pets-win11-Setup-1.0.3.exe",
      macArm: "BOYNEXTDOOR.Pets-1.0.3-arm64.dmg",
      macX64: "BOYNEXTDOOR.Pets-1.0.3-x64.dmg",
    },
  },
  {
    id: "txt",
    name: "TXT Pets",
    group: "TXT",
    version: "1.0.2",
    tag: "txt-v1.0.2",
    status: "Latest release",
    summary:
      "TXT 桌宠合集，包含 Bamgeut、Hwangchoon、Choiyongmeong 等角色，适合日常常驻桌面。",
    docPath: "docs/txt.txt",
    releaseNotePath: "docs/txt.md",
    notes: [
      "支持拖动桌宠，拖动方向会触发对应移动状态。",
      "安装新版前可以先退出旧版桌宠，避免窗口状态没有刷新。",
      "macOS arm64 适合 M 系列芯片；x64 适合 Intel Mac。",
    ],
    files: {
      windows: "TXT-Pets-win11-Setup-1.0.2.exe",
      macArm: "TXT.Pets-1.0.2-arm64.dmg",
      macX64: "TXT.Pets-1.0.2-x64.dmg",
    },
  },
  {
    id: "twice",
    name: "TWICE Pets",
    group: "TWICE",
    version: "1.0.0",
    tag: "twice-v1.0.0",
    status: "Latest release",
    summary:
      "TWICE 风格桌宠合集，包含多成员角色、桌面拖动和基础互动。",
    docPath: "docs/twice.txt",
    releaseNotePath: "docs/twice.md",
    notes: [
      "下载对应系统版本后直接安装。",
      "如果同时打开多个角色，可以从托盘菜单统一管理。",
      "macOS 下载后若提示来自互联网，请在系统设置里允许打开。",
    ],
    files: {
      windows: "TWICE-Pets-win11-Setup-1.0.0.exe",
      macArm: "TWICE.Pets-1.0.0-arm64.dmg",
      macX64: "TWICE.Pets-1.0.0-x64.dmg",
    },
  },
  {
    id: "riize",
    name: "RIIZE Pets",
    group: "RIIZE",
    version: "1.0.3",
    tag: "riize-v1.0.3",
    status: "Latest release",
    summary:
      "RIIZE 桌宠合集，当前版本优化了默认启动角色和隐藏/恢复状态。",
    docPath: "docs/riize.txt",
    releaseNotePath: "docs/riize.md",
    notes: [
      "默认启动角色为 Rizuko。",
      "隐藏全部后再次恢复，会尽量回到隐藏前的角色集合。",
      "Windows 安装新版时建议先退出托盘里的旧版应用。",
    ],
    files: {
      windows: "RIIZE-Pets-win11-Setup-1.0.3.exe",
      macArm: "RIIZE.Pets-1.0.3-arm64.dmg",
      macX64: "RIIZE.Pets-1.0.3-x64.dmg",
    },
  },
  {
    id: "bt21",
    name: "BT21 Pets",
    group: "BT21",
    version: "1.0.0",
    tag: "bt21-v1.0.0",
    status: "Latest release",
    summary:
      "BT21 桌宠合集现已发布，支持 Windows 安装包和 macOS 双架构下载。",
    docPath: "docs/bt21.txt",
    releaseNotePath: "docs/bt21.md",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
      "发布时只上传安装包，不公开源码和素材源文件。",
    ],
    files: {
      windows: "BT21-Pets-win11-Setup-1.0.0.exe",
      macArm: "BT21.Pets-1.0.0-arm64.dmg",
      macX64: "BT21.Pets-1.0.0-x64.dmg",
    },
  },
  {
    id: "h2h",
    name: "H2H Pets",
    group: "H2H",
    version: "1.1.1",
    tag: "h2h-v1.1.1",
    status: "Latest release",
    summary:
      "H2H 桌宠合集现已发布，包含 Windows 推荐安装包、Windows 备用安装包，以及 macOS 双架构下载。",
    docPath: "docs/h2h.md",
    docDownloadPath: "docs/h2h.pdf",
    docDownloadName: "h2h-使用说明.pdf",
    releaseNotePath: "docs/h2h.md",
    notes: [
      "H2H Pets 当前下载入口待开放。",
      "Windows 将提供推荐安装包和备用安装包。",
      "macOS 将提供 Apple Silicon 与 Intel 两个版本。",
    ],
    files: {
      windows: "H2H-Pets-Setup-1.0.0.exe",
      macArm: "H2H.Pets-1.1.0-arm64.dmg",
      macX64: "H2H.Pets-1.1.0-x64.dmg",
    },
    downloadOptions: [
      {
        key: "windows",
        label: "Windows v1.0.0 推荐版",
        hint: "推荐 Windows 10/11",
        meta: "当前推荐版本",
        filename: "H2H-Pets-Setup-1.0.0.exe",
      },
      {
        key: "windowsAlt",
        label: "Windows v1.1.1 备用版",
        hint: "如果推荐版不可用再选择",
        meta: "备用安装包",
        filename: "H2H-Pets-win11-Setup-1.1.1.exe",
      },
      {
        key: "macArm",
        label: "macOS ARM64 v1.1.0",
        hint: "Apple Silicon / M 系列",
        meta: "磁盘映像 .dmg",
        filename: "H2H.Pets-1.1.0-arm64.dmg",
      },
      {
        key: "macX64",
        label: "macOS x64 v1.1.0",
        hint: "Intel Mac",
        meta: "磁盘映像 .dmg",
        filename: "H2H.Pets-1.1.0-x64.dmg",
      },
    ],
  },
  {
    id: "svt",
    name: "SVT Pets",
    group: "SVT",
    version: "1.0.2",
    tag: "svt-v1.0.2",
    status: "Latest release",
    summary:
      "SVT 桌宠合集现已发布，包含 13 只角色。Windows 现提供 v1.0.2 修复版与 v1.0.1 保留版双入口。",
    docPath: "docs/svt-1.0.2.txt",
    releaseNotePath: "docs/svt-1.0.2.md",
    notes: [
      "Windows v1.0.2：修复画布占位过多问题，界面可能会和之前的版本不同。",
      "Windows v1.0.1 保留下载，方便需要旧版界面的用户继续使用。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
      "发布时只上传安装包，不公开源码和素材源文件。",
    ],
    files: {
      windows: "SVT-Pets-Setup-1.0.2.exe",
      macArm: "SVT.Pets-1.0.1-arm64.dmg",
      macX64: "SVT.Pets-1.0.1-x64.dmg",
    },
    downloadOptions: [
      {
        label: "Windows v1.0.2 修复版",
        hint: "推荐 Windows 10/11",
        meta: "修复画布占位过多问题",
        filename: "SVT-Pets-Setup-1.0.2.exe",
      },
      {
        label: "Windows v1.0.1 保留版",
        hint: "旧版界面入口",
        meta: "保留旧版本下载",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/svt-v1.0.1/SVT-Pets-win11-Setup-1.0.1.exe",
      },
      {
        label: "macOS ARM64 v1.0.1",
        hint: "Apple Silicon / M 系列",
        meta: "保留 mac 1.0.1 下载",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/svt-v1.0.1/SVT.Pets-1.0.1-arm64.dmg",
      },
      {
        label: "macOS x64 v1.0.1",
        hint: "Intel Mac",
        meta: "保留 mac 1.0.1 下载",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/svt-v1.0.1/SVT.Pets-1.0.1-x64.dmg",
      },
    ],
  },
  {
    id: "wish",
    name: "WISH Pets",
    group: "WISH",
    version: "1.1.2",
    tag: "wish-v1.1.2",
    status: "Latest release",
    summary:
      "WISH 桌宠合集现已发布，包含 Windows 安装版、Windows 便携版，以及 macOS 双架构下载。",
    docPath: "docs/wish.md",
    docDownloadPath: "docs/wish.pdf",
    docDownloadName: "wish-使用说明.pdf",
    releaseNotePath: "docs/wish.md",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "Windows 便携版适合不想安装的用户。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
    ],
    files: {
      windows: "NCT-WISH-Pets-win11-Setup-1.1.2.exe",
      macArm: "NCT.WISH.Pets-1.1.2-arm64.dmg",
      macX64: "NCT.WISH.Pets-1.1.2-x64.dmg",
    },
    downloadOptions: [
      {
        key: "windowsSetup",
        label: "Windows 安装版 v1.1.2",
        hint: "推荐 Windows 10/11",
        meta: "安装包 .exe",
        filename: "NCT-WISH-Pets-win11-Setup-1.1.2.exe",
      },
      {
        key: "windowsPortable",
        label: "Windows 便携版 v1.1.2",
        hint: "免安装版本",
        meta: "便携版 .exe",
        filename: "NCT-WISH-Pets-win11-1.1.2.exe",
      },
      {
        key: "macArm",
        label: "macOS ARM64 v1.1.2",
        hint: "Apple Silicon / M 系列",
        meta: "磁盘映像 .dmg",
        filename: "NCT.WISH.Pets-1.1.2-arm64.dmg",
      },
      {
        key: "macX64",
        label: "macOS x64 v1.1.2",
        hint: "Intel Mac",
        meta: "磁盘映像 .dmg",
        filename: "NCT.WISH.Pets-1.1.2-x64.dmg",
      },
    ],
  },
  {
    id: "dream",
    name: "DREAM Pets",
    group: "DREAM",
    version: "1.1.0",
    tag: "dream-v1.1.0",
    status: "Latest release",
    summary:
      "DREAM 桌宠合集现已发布，包含 Windows 安装版、Windows 便携版，以及 macOS 双架构下载。",
    docPath: "docs/dream.md",
    docDownloadPath: "docs/dream.pdf",
    docDownloadName: "dream-使用说明.pdf",
    releaseNotePath: "docs/dream.md",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "Windows 便携版适合不想安装的用户。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
    ],
    files: {
      windows: "DREAM-Pets-win11-Setup-1.1.0.exe",
      macArm: "DREAM.Pets-1.1.0-arm64.dmg",
      macX64: "DREAM.Pets-1.1.0-x64.dmg",
    },
    downloadOptions: [
      {
        key: "windowsSetup",
        label: "Windows 安装版 v1.1.0",
        hint: "推荐 Windows 10/11",
        meta: "安装包 .exe",
        filename: "DREAM-Pets-win11-Setup-1.1.0.exe",
      },
      {
        key: "windowsPortable",
        label: "Windows 便携版 v1.1.0",
        hint: "免安装版本",
        meta: "便携版 .exe",
        filename: "DREAM-Pets-win11-1.1.0.exe",
      },
      {
        key: "macArm",
        label: "macOS ARM64 v1.1.0",
        hint: "Apple Silicon / M 系列",
        meta: "磁盘映像 .dmg",
        filename: "DREAM.Pets-1.1.0-arm64.dmg",
      },
      {
        key: "macX64",
        label: "macOS x64 v1.1.0",
        hint: "Intel Mac",
        meta: "磁盘映像 .dmg",
        filename: "DREAM.Pets-1.1.0-x64.dmg",
      },
    ],
  },
  {
    id: "enhypen",
    name: "ENHYPEN Pets",
    group: "ENHYPEN",
    version: "1.1.2",
    tag: "enhypen-v1.1.2",
    status: "Latest release",
    summary:
      "ENHYPEN 桌宠合集现已发布，包含 Windows 安装版、Windows 便携版，以及 macOS 双架构下载。",
    docPath: "docs/ehp.md",
    docDownloadPath: "docs/ehp.pdf",
    docDownloadName: "enhypen-使用说明.pdf",
    releaseNotePath: "docs/ehp.md",
    downloadHint: "点击卡片直接下载",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "Windows 便携版适合不想安装的用户。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
    ],
    files: {
      windows: "ENHYPEN-Pets-win11-Setup-1.1.2.exe",
      macArm: "ENHYPEN.Pets-1.1.2-arm64.dmg",
      macX64: "ENHYPEN.Pets-1.1.2-x64.dmg",
    },
    downloadOptions: [
      {
        key: "windowsSetup",
        label: "Windows 安装版 v1.1.2",
        hint: "推荐 Windows 10/11",
        meta: "安装包 .exe",
        filename: "ENHYPEN-Pets-win11-Setup-1.1.2.exe",
      },
      {
        key: "windowsPortable",
        label: "Windows 便携版 v1.1.2",
        hint: "免安装版本",
        meta: "便携版 .exe",
        filename: "ENHYPEN-Pets-win11-1.1.2.exe",
      },
      {
        key: "macArm",
        label: "macOS ARM64 v1.1.2",
        hint: "Apple Silicon / M 系列",
        meta: "磁盘映像 .dmg",
        filename: "ENHYPEN.Pets-1.1.2-arm64.dmg",
      },
      {
        key: "macX64",
        label: "macOS x64 v1.1.2",
        hint: "Intel Mac",
        meta: "磁盘映像 .dmg",
        filename: "ENHYPEN.Pets-1.1.2-x64.dmg",
      },
    ],
  },
];

const uiText = {
  entering: "entering kpopzoo...",
  chooseGroup: "选择团体 →",
  allGroups: "← 全部团体",
  groupSelectTitle: "PICK YOUR GROUP",
  download: "下载",
  usage: "使用说明 →",
  usageDownload: "下载使用说明",
  usageView: "阅览使用说明",
  mailboxEyebrow: "投稿箱",
  mailboxTitle: "想看哪个团？",
  mailboxBody: "打开飞书表单提交团名、角色或其他建议，我会按呼声整理后续桌宠。",
  mailboxAction: "去飞书投稿",
  mailboxNote: "会在新页面打开表单，提交后建议集中保存",
  downloadHint: "点击卡片直接下载",
  waitingRelease: "等待 release 附件",
  comingSoon: "即将发布",
  materialTitle: "素材",
  materialBody: "在 codex 中直接养要用的素材 spritesheet 图麻烦小红书私信我发你。sns 发布基于此的二创请标注来源。",
  loadingUsage: "正在加载使用说明...",
  petHint: "点击屏幕试试看",
  windowsInstaller: "Windows 安装版",
  windowsPortable: "Windows 便携版",
  macAppleSilicon: "Mac M 系列芯片版",
  macIntel: "Mac Intel 芯片版",
};

const siteAssets = {
  broccoli: {
    src: null,
    fallback: "🥦",
  },
  appLogo: {
    src: null,
    fallbackText: "KZ",
  },
};

const groupAppLogoSources = {
  newjeans: "assets/groups/newjeans/app-logo.ico",
  boynextdoor: "assets/groups/boynextdoor/app-logo.ico",
  svt: "assets/groups/svt/app-logo.ico",
  dream: "assets/groups/dream/app-logo.png",
  wish: "assets/groups/wish/app-logo.ico",
  enhypen: "assets/groups/enhypen/app-logo.png",
  h2h: "assets/groups/h2h/app-logo.png",
  riize: "assets/groups/riize/app-logo.ico",
  twice: "assets/groups/twice/app-logo.ico",
  txt: "assets/groups/txt/app-logo.ico",
  bt21: "assets/groups/bt21/app-logo.ico",
};

const homeCollage = [
  { id: "paper-01", type: "paper", className: "home-paper-01" },
  { id: "paper-02", type: "paper", className: "home-paper-02" },
  { id: "photo-01", type: "image", src: null, className: "home-photo-01", fallback: "KPOPZOO" },
  { id: "tape-01", type: "tape", className: "home-tape-01" },
  { id: "stamp-01", type: "stamp", className: "home-stamp-01", fallback: "desktop pets" },
];

const downloadPresentationMap = {
  windows: {
    type: "windowsInstaller",
    label: uiText.windowsInstaller,
    subLabel: ".exe",
    badge: "推荐",
  },
  windowsSetup: {
    type: "windowsInstaller",
    label: uiText.windowsInstaller,
    subLabel: ".exe",
    badge: "推荐",
  },
  windowsAlt: {
    type: "windowsInstaller",
    label: uiText.windowsInstaller,
    subLabel: ".exe",
    badge: "备用",
  },
  windowsPortable: {
    type: "windowsPortable",
    label: uiText.windowsPortable,
    subLabel: ".exe",
    badge: "免安装",
  },
  macArm: {
    type: "macArm",
    label: uiText.macAppleSilicon,
    subLabel: "Apple Silicon · .dmg",
    badge: "M",
  },
  macX64: {
    type: "macX64",
    label: uiText.macIntel,
    subLabel: "Intel · .dmg",
    badge: "Intel",
  },
};

const downloadIcons = {
  windowsInstaller: { src: null, fallback: "WIN" },
  windowsPortable: { src: null, fallback: "EXE" },
  macArm: { src: null, fallback: "M" },
  macX64: { src: null, fallback: "INT" },
};

const defaultDownloadKeys = ["windows", "windowsPortable", "macArm", "macX64"];

const groupThemeSeeds = {
  newjeans: {
    device: "pixel-laptop",
    player: "cd",
    light: ["#f5fff8", "#fcfff9", "#c9e5d8", "#7aa7e8", "#1f2f38", "#f6fbff"],
    dark: ["#111f24", "#182b30", "#5f9dbb", "#a9e8d0", "#eefcff", "#122228"],
  },
  boynextdoor: {
    device: "house-window",
    player: "vinyl",
    light: ["#fff8ec", "#fffdf7", "#f0d89b", "#e17c6c", "#2c2520", "#f7efe3"],
    dark: ["#221916", "#31221c", "#e6b766", "#ff9b82", "#fff8ec", "#1c1512"],
  },
  txt: {
    device: "story-door",
    player: "minidisc",
    light: ["#f6f0ff", "#fffaff", "#d8c7ff", "#7e68c8", "#28213d", "#fbf8ff"],
    dark: ["#181326", "#241d38", "#9181d9", "#cbbdff", "#f8f3ff", "#161122"],
  },
  twice: {
    device: "soft-laptop",
    player: "cd",
    light: ["#fff5f7", "#fffdf9", "#ffd2df", "#f181a6", "#332026", "#fff8fa"],
    dark: ["#25171d", "#341f28", "#df7898", "#ffc0d0", "#fff5f8", "#201217"],
  },
  riize: {
    device: "media-machine",
    player: "vinyl",
    light: ["#f6f7f2", "#fffdf7", "#dad4bd", "#9b8a69", "#27251f", "#f4f1e8"],
    dark: ["#191917", "#282821", "#908568", "#d9ca9f", "#fffbe8", "#151512"],
  },
  bt21: {
    device: "mini-homepage",
    player: "disc",
    light: ["#f8f9ff", "#ffffff", "#c8dbff", "#6489dc", "#20283a", "#f5f8ff"],
    dark: ["#11182a", "#1c2740", "#668fd8", "#9fc0ff", "#f2f6ff", "#101624"],
  },
  h2h: {
    device: "clear-summer",
    player: "disc",
    light: ["#f7fff5", "#fffff7", "#d7ef9d", "#6fb77b", "#203025", "#fbfff4"],
    dark: ["#101d16", "#1b2b21", "#83bd74", "#d7f39b", "#f8fff0", "#0f1a14"],
  },
  svt: {
    device: "archive-console",
    player: "minidisc",
    light: ["#f7f5ef", "#fffdf7", "#d8cec0", "#577d93", "#252728", "#f3f0e8"],
    dark: ["#171819", "#24282a", "#6d94a7", "#aac8d4", "#f4f2ea", "#131516"],
  },
  wish: {
    device: "sky-notebook",
    player: "cd",
    light: ["#f3fbff", "#ffffff", "#bfe3ff", "#5e9ed5", "#1d2b38", "#f5fbff"],
    dark: ["#111b25", "#1b2a38", "#639dca", "#a9d8ff", "#f1f9ff", "#101820"],
  },
  dream: {
    device: "translucent-windows",
    player: "disc",
    light: ["#f2fff9", "#ffffff", "#b7eadb", "#43a6a6", "#1d3132", "#f4fffb"],
    dark: ["#0f2021", "#193234", "#46a9a6", "#95eee0", "#f0fffb", "#0e1b1d"],
  },
  enhypen: {
    device: "night-console",
    player: "vinyl",
    light: ["#f8f6ff", "#ffffff", "#d6d0f4", "#7768bd", "#27243a", "#faf8ff"],
    dark: ["#151226", "#211d35", "#7d70c6", "#bfb5ff", "#f8f5ff", "#111020"],
  },
};

const groupUIConfig = apps.reduce((config, app, index) => {
  const seed = groupThemeSeeds[app.id] || groupThemeSeeds.newjeans;
  const [background, surface, shell, accent, text, screen] = seed.light;
  const [darkBackground, darkSurface, darkShell, darkAccent, darkText, darkScreen] = seed.dark;

  config[app.id] = {
    selector: {
      broccoliSrc: null,
      appLogo: {
        src: groupAppLogoSources[app.id] || null,
        fallbackText: app.group
          .split(/\s+/)
          .map((part) => part[0])
          .join("")
          .slice(0, 4)
          .toUpperCase(),
      },
      scale: 0.94 + (index % 4) * 0.04,
      rotation: [-7, 4, -2, 8][index % 4],
      floatDelay: index * 0.13,
    },
    theme: {
      light: {
        background,
        surface,
        shell,
        accent,
        text,
        screen,
        card: "rgba(255, 255, 255, 0.72)",
      },
      dark: {
        background: darkBackground,
        surface: darkSurface,
        shell: darkShell,
        accent: darkAccent,
        text: darkText,
        screen: darkScreen,
        card: "rgba(28, 32, 38, 0.78)",
      },
    },
    collage: [],
    device: {
      variant: seed.device,
      shellAsset: null,
      shellClass: `device-${app.id}`,
      screenRect: { x: 13, y: 15, width: 74, height: 55 },
      keyboard: !["house-window", "mini-homepage"].includes(seed.device),
    },
    desktop: {
      variant: "configured",
      wallpaper: null,
      overlayAssets: [],
      decorations: [
        { id: "note", type: "note", text: app.group, x: 10 + (index % 4) * 4, y: 14 + (index % 3) * 5 },
        { id: "spark", type: "spark", text: "✦", x: 72 - (index % 5) * 3, y: 68 - (index % 3) * 6 },
      ],
      cursor: null,
    },
    petPreview: {
      idle: null,
      walking: null,
      click: null,
      fallback: "css-pet",
      width: 80,
      startX: 45,
      startY: 58,
    },
    player: {
      variant: seed.player,
      cover: null,
    },
    track: {
      title: "",
      artist: "",
      src: null,
      cover: null,
    },
  };
  return config;
}, {});

const appRoot = document.querySelector("#appRoot");
const privacyButton = document.querySelector("#privacyButton");
const colorModeToggle = document.querySelector("#colorModeToggle");
const messageDialog = document.querySelector("#messageDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogBody = document.querySelector("#dialogBody");
const dialogClose = document.querySelector("#dialogClose");
const usageDialog = document.querySelector("#usageDialog");
const usageDialogTitle = document.querySelector("#usageDialogTitle");
const usageDialogBody = document.querySelector("#usageDialogBody");
const usageDialogClose = document.querySelector("#usageDialogClose");

const state = {
  currentApp: apps[0],
  colorMode: getInitialColorMode(),
  splashSeen: sessionStorage.getItem("kpopzoo:splashSeen") === "true",
  audio: null,
  audioAppId: null,
};

function releaseUrl(app, filename) {
  if (/^https?:\/\//i.test(filename)) {
    return filename;
  }

  return `https://github.com/${repository.owner}/${repository.repo}/releases/download/${app.tag}/${encodeURIComponent(filename)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function resolveMarkdownAsset(path, basePath = "") {
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("/") || path.startsWith("data:")) {
    return path;
  }

  const baseDirectory = basePath.includes("/") ? basePath.slice(0, basePath.lastIndexOf("/") + 1) : "";
  return `${baseDirectory}${path}`;
}

function renderMarkdown(markdown, basePath = "") {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let inList = false;

  function closeList() {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      return;
    }

    if (trimmed.startsWith("# ")) {
      closeList();
      html.push(`<h2>${renderInlineMarkdown(trimmed.slice(2))}</h2>`);
      return;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      html.push(`<h3>${renderInlineMarkdown(trimmed.slice(3))}</h3>`);
      return;
    }

    if (trimmed.startsWith("### ")) {
      closeList();
      html.push(`<h4>${renderInlineMarkdown(trimmed.slice(4))}</h4>`);
      return;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      closeList();
      const [, alt, src] = imageMatch;
      html.push(
        `<figure><img src="${escapeHtml(resolveMarkdownAsset(src, basePath))}" alt="${escapeHtml(alt)}" loading="lazy"></figure>`,
      );
      return;
    }

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${renderInlineMarkdown(trimmed.slice(2))}</li>`);
      return;
    }

    closeList();
    html.push(`<p>${renderInlineMarkdown(trimmed)}</p>`);
  });

  closeList();
  return html.join("");
}

async function openUsageDialog() {
  const app = state.currentApp;

  if (!app.releaseNotePath) return;

  usageDialogTitle.textContent = `${app.group} 使用说明`;
  usageDialogBody.innerHTML = `<p>${uiText.loadingUsage}</p>`;

  if (typeof usageDialog.showModal === "function") {
    usageDialog.showModal();
  }

  try {
    const response = await fetch(app.releaseNotePath);
    if (!response.ok) throw new Error("Failed to load release note");
    const markdown = await response.text();
    usageDialogBody.innerHTML = renderMarkdown(markdown, app.releaseNotePath);
  } catch (error) {
    usageDialogBody.innerHTML = renderMarkdown(
      `# ${app.name} 使用说明\n\n${app.notes.map((note) => `- ${note}`).join("\n")}`,
    );
  }
}

function getInitialColorMode() {
  const stored = localStorage.getItem("kpopzoo:colorMode");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveAsset(assetConfig, fallback = null) {
  if (!assetConfig) return { src: null, fallback };
  if (typeof assetConfig === "string") return { src: assetConfig, fallback };
  return {
    src: assetConfig.src || null,
    fallback: assetConfig.fallback || assetConfig.fallbackText || fallback,
  };
}

function assetHtml(assetConfig, className, fallback = "", alt = "") {
  const asset = resolveAsset(assetConfig, fallback);
  if (asset.src) {
    return `<img class="${className}" src="${escapeHtml(asset.src)}" alt="${escapeHtml(alt)}" loading="lazy">`;
  }
  return `<span class="${className} asset-fallback" aria-hidden="${alt ? "false" : "true"}">${escapeHtml(asset.fallback || fallback)}</span>`;
}

function applyColorMode(mode) {
  state.colorMode = mode === "dark" ? "dark" : "light";
  document.body.dataset.colorMode = state.colorMode;
  localStorage.setItem("kpopzoo:colorMode", state.colorMode);
  colorModeToggle?.setAttribute("aria-label", state.colorMode === "dark" ? "切换到日间模式" : "切换到夜间模式");
  const icon = colorModeToggle?.querySelector("span");
  if (icon) icon.textContent = state.colorMode === "dark" ? "☀" : "☾";
  applyGroupTheme(state.currentApp?.id);
}

function applyGroupTheme(groupId) {
  const config = groupUIConfig[groupId] || groupUIConfig[apps[0].id];
  const theme = config.theme[state.colorMode] || config.theme.light;
  const root = document.body.style;
  root.setProperty("--page-bg", theme.background);
  root.setProperty("--page-text", theme.text);
  root.setProperty("--surface", theme.surface);
  root.setProperty("--device-shell", theme.shell);
  root.setProperty("--screen-bg", theme.screen);
  root.setProperty("--accent", theme.accent);
  root.setProperty("--card-bg", theme.card);
}

function navigateTo(route, options = {}) {
  if (options.replace) {
    history.replaceState(null, "", route);
    handleRoute();
    return;
  }

  if (window.location.hash === route) {
    handleRoute();
    return;
  }

  window.location.hash = route;
}

function showView(name, html) {
  appRoot.dataset.view = name;
  appRoot.innerHTML = html;
  bindViewEvents();
}

function handleRoute() {
  const route = window.location.hash || "#/home";

  if (!state.splashSeen) {
    renderSplash(route);
    return;
  }

  if (route === "#/home" || route === "#/" || route === "#") {
    state.currentApp = apps[0];
    applyGroupTheme(apps[0].id);
    renderHome();
    return;
  }

  if (route === "#/groups") {
    applyGroupTheme(state.currentApp?.id || apps[0].id);
    renderGroupSelector(apps);
    return;
  }

  const groupMatch = route.match(/^#\/group\/([^/]+)$/);
  if (groupMatch) {
    const app = apps.find((item) => item.id === groupMatch[1]) || apps[0];
    state.currentApp = app;
    applyGroupTheme(app.id);
    renderGroupDetail(app);
    return;
  }

  navigateTo("#/home", { replace: true });
}

function renderSplash(targetRoute) {
  showView(
    "splash",
    `
      <section class="splash-view" aria-label="KPOPZOO opening">
        <div class="splash-broccoli">${assetHtml(siteAssets.broccoli, "splash-broccoli-asset", siteAssets.broccoli.fallback, "")}</div>
        <p>${escapeHtml(uiText.entering)}</p>
      </section>
    `,
  );

  window.setTimeout(() => {
    state.splashSeen = true;
    sessionStorage.setItem("kpopzoo:splashSeen", "true");
    navigateTo(targetRoute || "#/home", { replace: true });
  }, 2300);
}

function renderHome() {
  showView(
    "home",
    `
      <section class="home-view">
        <div class="home-copy">
          <h1><span>KPOP</span><span>ZOO</span></h1>
          <button class="primary-action" type="button" data-route="#/groups">${escapeHtml(uiText.chooseGroup)}</button>
        </div>
        <div class="home-stage" aria-hidden="true">
          <div class="home-broccoli">${assetHtml(siteAssets.broccoli, "home-broccoli-asset", siteAssets.broccoli.fallback, "")}</div>
          <div class="home-collage">${renderHomeCollage()}</div>
        </div>
      </section>
      ${renderMailbox()}
    `,
  );
}

function renderHomeCollage() {
  return homeCollage
    .map((item) => {
      const classes = `collage-item ${item.type} ${item.className || ""}`;
      if (item.src) {
        return `<img class="${classes}" src="${escapeHtml(item.src)}" alt="" loading="lazy">`;
      }
      return `<span class="${classes}">${escapeHtml(item.fallback || "")}</span>`;
    })
    .join("");
}

function renderGroupSelector(groupApps) {
  showView(
    "groups",
    `
      <section class="group-select-view">
        <div class="view-topline">
          <button class="text-link" type="button" data-route="#/home">← KPOPZOO</button>
        </div>
        <h1>${escapeHtml(uiText.groupSelectTitle)}</h1>
        <div class="selector-grid" aria-label="团体列表">
          ${groupApps.map(renderGroupSelectorItem).join("")}
        </div>
      </section>
      ${renderMailbox()}
    `,
  );
}

function renderGroupSelectorItem(app) {
  const config = groupUIConfig[app.id] || groupUIConfig[apps[0].id];
  const selector = config.selector;
  const style = `--selector-scale:${selector.scale};--selector-rotation:${selector.rotation}deg;--selector-delay:${selector.floatDelay}s;`;
  const logo = selector.appLogo || siteAssets.appLogo;
  const fallback = selector.appLogo?.fallbackText || app.group;

  return `
    <button class="selector-card" type="button" data-group="${escapeHtml(app.id)}" style="${style}" aria-label="打开 ${escapeHtml(app.group)}">
      <span class="selector-logo">${assetHtml(logo, "selector-logo-asset", fallback, app.group)}</span>
      <span class="selector-label">${escapeHtml(app.group)}</span>
    </button>
  `;
}

function renderGroupDetail(app) {
  const uiConfig = groupUIConfig[app.id] || groupUIConfig[apps[0].id];
  showView(
    "group",
    `
      <section class="group-detail-view">
        <div class="view-topline">
          <button class="text-link" type="button" data-route="#/groups">${escapeHtml(uiText.allGroups)}</button>
          <span class="version-pill">${escapeHtml(app.version === "Preparing" ? "Preparing" : `v${app.version}`)}</span>
        </div>
        <h1>${escapeHtml(app.group)}</h1>
        <div class="detail-layout">
          <section class="preview-column" aria-label="${escapeHtml(app.group)} 桌面预览">
            ${renderDevicePreview(app, uiConfig)}
          </section>
          <aside class="download-panel" aria-labelledby="download-title">
            <div class="download-title-row">
              <h2 id="download-title">${escapeHtml(uiText.download)}</h2>
              ${renderUsageActions(app)}
            </div>
            <p class="download-hint">${escapeHtml(app.downloadHint || (app.tag ? uiText.downloadHint : uiText.waitingRelease))}</p>
            ${renderDownloadOptions(app)}
          </aside>
        </div>
      </section>
    `,
  );
  initPetPreview(uiConfig);
  initMusicPlayer(app, uiConfig);
}

function renderDevicePreview(app, uiConfig) {
  const device = uiConfig.device;
  const hasShellAsset = Boolean(device.shellAsset);
  const rect = device.screenRect || { x: 13, y: 15, width: 74, height: 55 };
  const screenStyle = `--screen-x:${rect.x}%;--screen-y:${rect.y}%;--screen-w:${rect.width}%;--screen-h:${rect.height}%;`;

  return `
    <div class="device-shell ${escapeHtml(device.shellClass || "")}" data-device="${escapeHtml(device.variant)}" data-shell-mode="${hasShellAsset ? "image" : "css"}">
      ${hasShellAsset ? `<img class="device-shell-image" src="${escapeHtml(device.shellAsset)}" alt="">` : ""}
      <div class="device-decoration" aria-hidden="true"></div>
      <div class="device-screen" style="${screenStyle}" role="button" tabindex="0" aria-label="${escapeHtml(uiText.petHint)}">
        ${renderDesktopPreview(app, uiConfig)}
      </div>
      <div class="device-controls" aria-hidden="true"><span></span><span></span><span></span></div>
      ${device.keyboard ? `<div class="device-keyboard" aria-hidden="true">${Array.from({ length: 24 }, () => "<span></span>").join("")}</div>` : ""}
    </div>
  `;
}

function renderDesktopPreview(app, uiConfig) {
  const desktop = uiConfig.desktop;
  const wallpaper = desktop.wallpaper ? `<img class="desktop-wallpaper" src="${escapeHtml(desktop.wallpaper)}" alt="">` : "";
  return `
    <div class="desktop-preview" data-desktop="${escapeHtml(desktop.variant)}">
      ${wallpaper}
      <div class="desktop-layer">
        ${renderMusicPlayer(uiConfig)}
        ${renderDesktopDecorations(desktop)}
        ${renderPetPreview(uiConfig)}
        <div class="app-logo">${assetHtml(siteAssets.appLogo, "app-logo-asset", siteAssets.appLogo.fallbackText, "KPOPZOO")}</div>
      </div>
    </div>
  `;
}

function renderDesktopDecorations(desktop) {
  return (desktop.decorations || [])
    .map(
      (item) => `
        <span class="desktop-decoration ${escapeHtml(item.type)}" style="left:${Number(item.x) || 0}%;top:${Number(item.y) || 0}%;">
          ${escapeHtml(item.text || "")}
        </span>
      `,
    )
    .join("");
}

function renderPetPreview(uiConfig) {
  const pet = uiConfig.petPreview;
  const style = `--pet-x:${pet.startX}%;--pet-y:${pet.startY}%;--pet-width:${pet.width}px;`;
  const imageSrc = pet.idle || pet.fallbackAsset;

  return `
    <button class="pet-preview" type="button" style="${style}" aria-label="${escapeHtml(uiText.petHint)}">
      ${
        imageSrc
          ? `<img src="${escapeHtml(imageSrc)}" alt="">`
          : `<span class="css-pet" aria-hidden="true"><span></span></span>`
      }
    </button>
    <span class="pet-reaction" aria-hidden="true"></span>
  `;
}

function renderMusicPlayer(uiConfig) {
  const player = uiConfig.player || {};
  const track = uiConfig.track || {};
  const cover = track.cover || player.cover;
  return `
    <button class="music-player" type="button" data-player="${escapeHtml(player.variant || "disc")}" aria-label="播放或暂停音乐" aria-pressed="false">
      ${cover ? `<img src="${escapeHtml(cover)}" alt="">` : `<span class="disc-face" aria-hidden="true"></span>`}
    </button>
  `;
}

function renderUsageActions(app) {
  const downloadPath = app.docDownloadPath || app.docPath;
  const downloadAction = downloadPath
    ? `<a class="usage-link" href="${escapeHtml(downloadPath)}" download="${escapeHtml(app.docDownloadName || `${app.id}-使用说明.txt`)}" aria-label="下载 ${escapeHtml(app.group)} 使用说明">${escapeHtml(uiText.usageDownload)}</a>`
    : "";
  const viewAction = app.releaseNotePath
    ? `<button class="usage-link" type="button" data-usage-view aria-label="阅览 ${escapeHtml(app.group)} 使用说明">${escapeHtml(uiText.usage)}</button>`
    : "";
  return `<div class="usage-actions">${downloadAction}${viewAction}</div>`;
}

function getDownloadCards(app) {
  if (app.downloadOptions) {
    return app.downloadOptions.map((option, index) => {
      const key = inferDownloadKey(option, index);
      return {
        key,
        filename: option.filename,
        disabled: option.disabled,
        legacyLabel: option.label,
        hint: option.hint,
        meta: option.meta,
      };
    });
  }

  return defaultDownloadKeys.map((key) => ({
    key,
    filename: key === "windowsPortable" ? app.files?.windowsPortable : app.files?.[key],
  }));
}

function inferDownloadKey(option, index) {
  if (option.key) return option.key;
  const label = `${option.label || ""} ${option.filename || ""}`.toLowerCase();
  if (label.includes("portable") || label.includes("便携")) return "windowsPortable";
  if (label.includes("arm64") || label.includes("apple") || label.includes("m 系列")) return "macArm";
  if (label.includes("x64") || label.includes("intel")) return "macX64";
  if (index === 1 && label.includes("windows")) return "windowsAlt";
  return "windows";
}

function renderDownloadOptions(app) {
  const cards = getDownloadCards(app);
  return `
    <div class="download-cards">
      ${cards.map((card) => renderDownloadCard(app, card)).join("")}
    </div>
  `;
}

function renderDownloadCard(app, card) {
  const presentation = downloadPresentationMap[card.key] || downloadPresentationMap.windows;
  const icon = downloadIcons[presentation.type] || downloadIcons.windowsInstaller;
  const enabled = Boolean(app.tag && card.filename && !card.disabled);
  const label = presentation.label;
  const detail = getDownloadDetail(card, presentation);
  const iconHtml = icon.src
    ? `<img src="${escapeHtml(icon.src)}" alt="">`
    : `<span aria-hidden="true">${escapeHtml(icon.fallback)}</span>`;

  const content = `
    <span class="download-icon">${iconHtml}</span>
    <span class="download-copy">
      <strong>${escapeHtml(label)}</strong>
      <small>${escapeHtml(presentation.subLabel)}</small>
      ${detail ? `<em>${escapeHtml(detail)}</em>` : ""}
    </span>
    <span class="download-badge">${escapeHtml(presentation.badge || "")}</span>
  `;

  if (!enabled) {
    return `<div class="download-card disabled" aria-disabled="true">${content}<span class="download-unavailable">${escapeHtml(app.unavailableText?.[card.key] || uiText.comingSoon)}</span></div>`;
  }

  return `<a class="download-card" href="${escapeHtml(releaseUrl(app, card.filename))}" download>${content}</a>`;
}

function getDownloadDetail(card, presentation) {
  if (card.key === "windows" || card.key === "windowsSetup" || card.key === "windowsAlt") {
    return ".exe";
  }

  if (card.key === "windowsPortable") {
    return "免安装 · .exe";
  }

  if (card.key === "macArm") {
    return "Apple Silicon · .dmg";
  }

  if (card.key === "macX64") {
    return "Intel · .dmg";
  }

  return card.meta || card.hint || presentation.subLabel;
}

function renderMailbox() {
  return `
    <section class="mailbox-section" aria-labelledby="mailbox-title">
      <div class="mailbox-icon" aria-hidden="true">✉</div>
      <div class="mailbox-copy">
        <p class="eyebrow">${escapeHtml(uiText.mailboxEyebrow)}</p>
        <h2 id="mailbox-title">${escapeHtml(uiText.mailboxTitle)}</h2>
        <p>${escapeHtml(uiText.mailboxBody)}</p>
      </div>
      <div class="mailbox-actions">
        <a class="mailbox-primary" href="https://gcncng3okwer.feishu.cn/wiki/Je24wMjm4irpsskyOoGcI7ftnJb?from=from_copylink" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(uiText.mailboxAction)}
        </a>
        <p class="mailbox-note">${escapeHtml(uiText.mailboxNote)}</p>
      </div>
    </section>
  `;
}

function bindViewEvents() {
  appRoot.querySelectorAll("[data-route]").forEach((control) => {
    control.addEventListener("click", () => navigateTo(control.dataset.route));
  });

  appRoot.querySelectorAll("[data-group]").forEach((control) => {
    control.addEventListener("click", () => navigateTo(`#/group/${control.dataset.group}`));
  });

  appRoot.querySelector("[data-usage-view]")?.addEventListener("click", openUsageDialog);
}

function initPetPreview(uiConfig) {
  const screen = appRoot.querySelector(".device-screen");
  const pet = appRoot.querySelector(".pet-preview");
  const reaction = appRoot.querySelector(".pet-reaction");
  if (!screen || !pet || !reaction) return;

  const movePet = (event) => {
    if (event.target.closest(".pet-preview, .music-player, a, button:not(.device-screen)")) return;
    const rect = screen.getBoundingClientRect();
    const x = Math.max(8, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(18, Math.min(84, ((event.clientY - rect.top) / rect.height) * 100));
    pet.style.setProperty("--pet-x", `${x}%`);
    pet.style.setProperty("--pet-y", `${y}%`);
    reaction.style.left = `calc(${x}% + 3rem)`;
    reaction.style.top = `calc(${y}% - 3rem)`;
    pet.classList.remove("is-bouncing");
    requestAnimationFrame(() => pet.classList.add("is-bouncing"));
  };

  screen.addEventListener("click", movePet);
  screen.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const rect = screen.getBoundingClientRect();
      movePet({ target: screen, clientX: rect.left + rect.width * 0.62, clientY: rect.top + rect.height * 0.56 });
    }
  });

  pet.addEventListener("click", (event) => {
    event.stopPropagation();
    const reactions = ["♡", "☆", "!", "…"];
    reaction.textContent = reactions[Math.floor(Math.random() * reactions.length)];
    reaction.classList.remove("is-visible");
    pet.classList.remove("is-jumping");
    requestAnimationFrame(() => {
      pet.classList.add("is-jumping");
      reaction.classList.add("is-visible");
    });
  });

  pet.addEventListener("animationend", () => {
    pet.classList.remove("is-bouncing", "is-jumping");
  });
}

function initMusicPlayer(app, uiConfig) {
  const button = appRoot.querySelector(".music-player");
  if (!button) return;

  button.addEventListener("click", () => {
    const track = uiConfig.track;
    const willPlay = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(willPlay));
    button.classList.toggle("is-playing", willPlay);

    if (!track?.src) return;

    if (!state.audio || state.audioAppId !== app.id) {
      state.audio?.pause();
      state.audio = new Audio(track.src);
      state.audio.loop = true;
      state.audioAppId = app.id;
    }

    if (willPlay) {
      state.audio.play().catch(() => {
        button.setAttribute("aria-pressed", "false");
        button.classList.remove("is-playing");
      });
    } else {
      state.audio.pause();
    }
  });
}

function openMessageDialog(title, body) {
  dialogTitle.textContent = title;
  dialogBody.textContent = body;

  if (typeof messageDialog.showModal === "function") {
    messageDialog.showModal();
    return;
  }

  alert(`${title}\n${body}`);
}

privacyButton.addEventListener("click", () => {
  openMessageDialog(uiText.materialTitle, uiText.materialBody);
});

document.querySelectorAll(".site-header [data-route]").forEach((control) => {
  control.addEventListener("click", () => navigateTo(control.dataset.route));
});

colorModeToggle.addEventListener("click", () => {
  applyColorMode(state.colorMode === "dark" ? "light" : "dark");
});

dialogClose.addEventListener("click", () => {
  messageDialog.close();
});

messageDialog.addEventListener("click", (event) => {
  if (event.target === messageDialog) {
    messageDialog.close();
  }
});

usageDialogClose.addEventListener("click", () => {
  usageDialog.close();
});

usageDialog.addEventListener("click", (event) => {
  if (event.target === usageDialog) {
    usageDialog.close();
  }
});

window.addEventListener("hashchange", handleRoute);
applyColorMode(state.colorMode);
handleRoute();
