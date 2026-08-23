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

const transparentPixel =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

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
    group: "BTS",
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
    group: "Hearts2hearts",
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
    group: "SEVENTEEN",
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
    id: "treasure",
    name: "TRUZ Pets",
    group: "TREASURE",
    version: "1.1.0",
    tag: "truz-v1.1.0",
    status: "Latest release",
    summary:
      "TRUZ 桌宠合集现已发布，包含 Bonbon、Chilli、Hikun、Lawoo、Podong、Romy、Ruru、Som、Woopy、Yochi 十只桌面伙伴。",
    docPath: "docs/truz.md",
    docDownloadName: "truz-使用说明.md",
    releaseNotePath: "docs/truz.md",
    downloadHint: "点击卡片直接下载",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "Windows 便携版适合不想安装的用户。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
    ],
    files: {
      windows: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ-Pets-win11-Setup-1.1.0.exe",
      windowsPortable: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ-Pets-win11-1.1.0.exe",
      macArm: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ.Pets-1.1.0-arm64.dmg",
      macX64: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ.Pets-1.1.0-x64.dmg",
    },
    downloadOptions: [
      {
        key: "windowsSetup",
        label: "Windows 安装版 v1.1.0",
        hint: "推荐 Windows 10/11",
        meta: "安装包 .exe",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ-Pets-win11-Setup-1.1.0.exe",
      },
      {
        key: "windowsPortable",
        label: "Windows 便携版 v1.1.0",
        hint: "免安装版本",
        meta: "便携版 .exe",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ-Pets-win11-1.1.0.exe",
      },
      {
        key: "macArm",
        label: "macOS ARM64 v1.1.0",
        hint: "Apple Silicon / M 系列",
        meta: "磁盘映像 .dmg",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ.Pets-1.1.0-arm64.dmg",
      },
      {
        key: "macX64",
        label: "macOS x64 v1.1.0",
        hint: "Intel Mac",
        meta: "磁盘映像 .dmg",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/truz-v1.1.0/TRUZ.Pets-1.1.0-x64.dmg",
      },
    ],
  },
  {
    id: "nmixx",
    name: "Mixxffy Pets",
    group: "NMIXX",
    version: "1.1.1",
    tag: "mixxffy-v1.1.1",
    status: "Latest release",
    summary:
      "这是一个包含 6 个 NMIXX 桌宠的应用，详情参见 D:/nmixx。",
    docPath: "docs/nmixx.md",
    docDownloadPath: "docs/nmixx.pdf",
    docDownloadName: "mixxffy-使用说明.pdf",
    releaseNotePath: "docs/nmixx.md",
    downloadHint: "点击卡片直接下载",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "Windows 便携版适合不想安装的用户。",
      "macOS arm64 适合 Apple Silicon；x64 适合 Intel Mac。",
      "包含 Bae、Haewon、Jiwoo、Kyujin、Lily、Sullyoon 六个桌宠。",
    ],
    files: {
      windows: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy-Pets-win11-Setup-1.1.1.exe",
      windowsPortable: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy-Pets-win11-1.1.1.exe",
      macArm: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy.Pets-1.1.1-arm64.dmg",
      macX64: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy.Pets-1.1.1-x64.dmg",
    },
    downloadOptions: [
      {
        key: "windowsSetup",
        label: "Windows 安装版 v1.1.1",
        hint: "推荐 Windows 10/11",
        meta: "安装包 .exe",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy-Pets-win11-Setup-1.1.1.exe",
      },
      {
        key: "windowsPortable",
        label: "Windows 便携版 v1.1.1",
        hint: "免安装版本",
        meta: "便携版 .exe",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy-Pets-win11-1.1.1.exe",
      },
      {
        key: "macArm",
        label: "macOS ARM64 v1.1.1",
        hint: "Apple Silicon / M 系列",
        meta: "磁盘映像 .dmg",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy.Pets-1.1.1-arm64.dmg",
      },
      {
        key: "macX64",
        label: "macOS x64 v1.1.1",
        hint: "Intel Mac",
        meta: "磁盘映像 .dmg",
        filename: "https://github.com/aiki77z/kpopzoo/releases/download/mixxffy-v1.1.1/Mixxffy.Pets-1.1.1-x64.dmg",
      },
    ],
  },
  {
    id: "wish",
    name: "WISH Pets",
    group: "NCT WISH",
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
    group: "NCT DREAM",
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
  allGroups: "← Groups",
  groupSelectTitle: "Pick your group",
  wallpaperTitle: "用宠物装饰你的相片",
  wallpaperSubtitle: "上传相片或打开摄像头拍一张，选择喜欢的宠物，挑好动作后拖到相片里摆放，再导出短视频或静态图，短视频默认时长3秒，可以自行下载转换live图。手机电脑平板均可哦！资源加载可能卡顿，请耐心等待",
  wallpaperUploadTitle: "添加相片",
  wallpaperPetTitle: "选择宠物",
  wallpaperPreviewTitle: "相片预览",
  download: "下载",
  usage: "使用说明 →",
  usageDownload: "下载使用说明",
  usageView: "阅览使用说明",
  mailboxButton: "留言板",
  mailboxEyebrow: "留言板",
  mailboxTitle: "投稿，评论，建议……",
  mailboxBody: "请点击此链接打开飞书共享表单留下所有想说的！",
  mailboxAction: "确定",
  downloadHint: "点击卡片直接下载",
  waitingRelease: "等待 release 附件",
  comingSoon: "即将发布",
  materialTitle: "素材",
  materialBody: "在 codex 中直接养要用的素材 spritesheet 图部分已经上传petdex，可以点击导入页面的petdex按钮。没有上传的麻烦小红书私信我发你。sns 发布基于此的二创请标注来源。",
  loadingUsage: "正在加载使用说明...",
  petHint: "点击屏幕试试看",
  windowsInstaller: "Windows 安装版",
  windowsPortable: "Windows 便携版",
  macAppleSilicon: "Mac M 系列芯片版",
  macIntel: "Mac Intel 芯片版",
};

const mailboxFormUrl = "https://gcncng3okwer.feishu.cn/wiki/Je24wMjm4irpsskyOoGcI7ftnJb?from=from_copylink";

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
  svt: "assets/groups/svt/app-logo.png",
  dream: "assets/groups/dream/app-logo.png",
  wish: "assets/groups/wish/app-logo.ico",
  enhypen: "assets/groups/enhypen/app-logo.png",
  h2h: "assets/groups/h2h/app-logo.png",
  treasure: "assets/groups/treasure/app-logo.png",
  nmixx: "assets/groups/nmixx/app-logo.png",
  riize: "assets/groups/riize/app-logo.ico",
  twice: "assets/groups/twice/app-logo.ico",
  txt: "assets/groups/txt/app-logo.ico",
  bt21: "assets/groups/bt21/app-logo.ico",
};

const groupPetCollections = {
  boynextdoor: ["assets/groups/boynextdoor/pet/312.gif", "assets/groups/boynextdoor/pet/catbbi.gif", "assets/groups/boynextdoor/pet/dalring.gif", "assets/groups/boynextdoor/pet/hantatpung.gif", "assets/groups/boynextdoor/pet/myngmyng.gif", "assets/groups/boynextdoor/pet/woonbaby.gif"],
  bt21: ["assets/groups/bt21/pet/chimmy.gif", "assets/groups/bt21/pet/cooky.gif", "assets/groups/bt21/pet/koya.gif", "assets/groups/bt21/pet/mang.gif", "assets/groups/bt21/pet/rj.gif", "assets/groups/bt21/pet/shooky.gif", "assets/groups/bt21/pet/tata.gif", "assets/groups/bt21/pet/van.gif"],
  dream: ["assets/groups/dream/pet/boohoo.gif", "assets/groups/dream/pet/eihei.gif", "assets/groups/dream/pet/gumi.gif", "assets/groups/dream/pet/hengqiebeng.gif", "assets/groups/dream/pet/mengmeng.gif", "assets/groups/dream/pet/niangao.gif", "assets/groups/dream/pet/pinky.gif"],
  enhypen: ["assets/groups/enhypen/pet/jakey.gif", "assets/groups/enhypen/pet/kishu.gif", "assets/groups/enhypen/pet/noxstar.gif", "assets/groups/enhypen/pet/pu-ni.gif", "assets/groups/enhypen/pet/snowe.gif", "assets/groups/enhypen/pet/wonchu.gif"],
  h2h: ["assets/groups/h2h/pet/ana.gif", "assets/groups/h2h/pet/carmen.gif", "assets/groups/h2h/pet/fans.gif", "assets/groups/h2h/pet/ian.gif", "assets/groups/h2h/pet/jiwoo.gif", "assets/groups/h2h/pet/juun.gif", "assets/groups/h2h/pet/stella.gif", "assets/groups/h2h/pet/yeon.gif", "assets/groups/h2h/pet/yuha.gif"],
  treasure: ["assets/groups/treasure/pet/bonbon.gif", "assets/groups/treasure/pet/chilli.gif", "assets/groups/treasure/pet/hikun.gif", "assets/groups/treasure/pet/lawoo.gif", "assets/groups/treasure/pet/podong.gif", "assets/groups/treasure/pet/romy.gif", "assets/groups/treasure/pet/ruru.gif", "assets/groups/treasure/pet/som.gif", "assets/groups/treasure/pet/woopy.gif", "assets/groups/treasure/pet/yochi.gif"],
  nmixx: ["assets/groups/nmixx/pet/bae.gif", "assets/groups/nmixx/pet/haewon.gif", "assets/groups/nmixx/pet/jiwoo.gif", "assets/groups/nmixx/pet/kyujin.gif", "assets/groups/nmixx/pet/lily.gif", "assets/groups/nmixx/pet/sullyoon.gif"],
  newjeans: ["assets/groups/newjeans/pet/daniel.gif", "assets/groups/newjeans/pet/haerin.gif", "assets/groups/newjeans/pet/hanni.gif", "assets/groups/newjeans/pet/hyein.gif", "assets/groups/newjeans/pet/minji.gif"],
  riize: ["assets/groups/riize/pet/doolbyeong.gif", "assets/groups/riize/pet/meongryongie.gif", "assets/groups/riize/pet/rizuko.gif", "assets/groups/riize/pet/songyongdoli.gif", "assets/groups/riize/pet/tonangdeok.gif", "assets/groups/riize/pet/urakbam.gif"],
  svt: ["assets/groups/svt/pet/bboogyuli.gif", "assets/groups/svt/pet/chandalee.gif", "assets/groups/svt/pet/cherry.gif", "assets/groups/svt/pet/doa.gif", "assets/groups/svt/pet/foxdungee.gif", "assets/groups/svt/pet/kimja.gif", "assets/groups/svt/pet/nonver.gif", "assets/groups/svt/pet/ocl.gif", "assets/groups/svt/pet/ppyopuli.gif", "assets/groups/svt/pet/shuasumi.gif", "assets/groups/svt/pet/tamtam.gif", "assets/groups/svt/pet/thepalee.gif", "assets/groups/svt/pet/toram.gif"],
  twice: ["assets/groups/twice/pet/chaengvely.gif", "assets/groups/twice/pet/davely.gif", "assets/groups/twice/pet/jeongvely.gif", "assets/groups/twice/pet/jively.gif", "assets/groups/twice/pet/mively.gif", "assets/groups/twice/pet/movely.gif", "assets/groups/twice/pet/navely.gif", "assets/groups/twice/pet/savely.gif", "assets/groups/twice/pet/tsuvely.gif"],
  txt: ["assets/groups/txt/pet/bamgeut.gif", "assets/groups/txt/pet/choiyongmeong.gif", "assets/groups/txt/pet/dagonyang.gif", "assets/groups/txt/pet/hhmnyaring.gif", "assets/groups/txt/pet/hwangchoon.gif"],
  wish: ["assets/groups/wish/pet/jaehee.gif", "assets/groups/wish/pet/kuri.gif", "assets/groups/wish/pet/ryo.gif", "assets/groups/wish/pet/sakupang.gif", "assets/groups/wish/pet/sioning.gif", "assets/groups/wish/pet/yushi.gif"],
};

const groupWallpaperSources = {
  newjeans: "source/njz3.jpg",
  boynextdoor: "source/bnd1.jpg",
  txt: "source/txt1.jpg",
  twice: "source/twice1.jpg",
  riize: "source/riize.jpg",
  bt21: "source/bts.jpg",
  h2h: "source/h2h.jpg",
  treasure: "source/treasure.png",
  nmixx: "source/nmixx.jpg",
  svt: "source/svt.jpg",
  wish: "source/wish.jpg",
  dream: "source/dream.jpg",
  enhypen: "source/ehp.jpg",
};

const petActionLabels = {
  idle: "待机",
  right: "向右走",
  left: "向左走",
  wave: "挥手",
  jump: "跳跃",
  fail: "失败",
  wait: "等待",
  busy: "忙碌",
  review: "检查",
};

const defaultPetFrames = [
  { key: "wave", effect: "wave", row: 3, frames: 4, fps: 7 },
  { key: "jump", effect: "jump", row: 4, frames: 5, fps: 8 },
  { key: "wait", effect: "wait", row: 6, frames: 6, fps: 6 },
  { key: "busy", effect: "busy", row: 7, frames: 6, fps: 7 },
  { key: "review", effect: "review", row: 8, frames: 6, fps: 6 },
  { key: "fail", effect: "fail", row: 5, frames: 8, fps: 7 },
  { key: "left", effect: "left", row: 2, frames: 8, fps: 8 },
  { key: "right", effect: "right", row: 1, frames: 8, fps: 8 },
];

const defaultSpriteSheet = {
  columns: 8,
  rows: 9,
  idleFrames: 6,
};

const wallpaperVideoDurationMs = 3000;

const extendedSpriteSheetPets = new Set([
  "newjeans/hanni",
  "bt21/chimmy",
  "bt21/cooky",
  "bt21/koya",
  "bt21/mang",
  "bt21/rj",
  "bt21/shooky",
  "bt21/tata",
  "bt21/van",
]);

const petFrameManifest = {};

const groupPetPreviewLayouts = {
  h2h: {
    width: 58,
    widthStep: 0,
    positions: [
      [8.5, 58],
      [17.5, 59],
      [26.5, 56],
      [35, 55],
      [44, 55],
      [52.5, 54],
      [61, 53],
      [70, 55],
      [79.5, 55],
    ],
    rotations: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  treasure: {
    width: 58,
    widthStep: 0,
    positions: [
      [10, 58],
      [18.5, 56],
      [27, 58],
      [35.5, 56],
      [44, 58],
      [52.5, 56],
      [61, 58],
      [69.5, 56],
      [78, 58],
      [86.5, 56],
    ],
    rotations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  txt: {
    width: 78,
    widthStep: 0,
    positions: [
      [27, 71],
      [36.5, 71],
      [49, 71],
      [60.5, 71],
      [72.5, 71],
    ],
    rotations: [0, 0, 0, 0, 0],
  },
  twice: {
    width: 70,
    widthStep: 0,
    positions: [
      [8.5, 56],
      [19.5, 51],
      [30.5, 55],
      [41.5, 54],
      [52.5, 53],
      [63.5, 54],
      [74.5, 55],
      [84.5, 57],
      [92, 56],
    ],
    rotations: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

const groupTrackConfig = {
  newjeans: { title: "Super Shy", artist: "NewJeans", src: null, cover: null },
  boynextdoor: { title: "Earth, Wind & Fire", artist: "BOYNEXTDOOR", src: null, cover: null },
  txt: { title: "Deja Vu", artist: "TXT", src: null, cover: null },
  twice: { title: "Feel Special", artist: "TWICE", src: null, cover: null },
  riize: { title: "Get A Guitar", artist: "RIIZE", src: null, cover: null },
  bt21: { title: "BT21 Theme", artist: "BT21", src: null, cover: null },
  h2h: { title: "The Chase", artist: "H2H", src: null, cover: null },
  treasure: { title: "KING KONG", artist: "TREASURE", src: null, cover: null },
  nmixx: { title: "Mixx Lab", artist: "NMIXX", src: null, cover: null },
  svt: { title: "God of Music", artist: "SEVENTEEN", src: null, cover: null },
  wish: { title: "WISH", artist: "NCT WISH", src: null, cover: null },
  dream: { title: "Smoothie", artist: "NCT DREAM", src: null, cover: null },
  enhypen: { title: "XO", artist: "ENHYPEN", src: null, cover: null },
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
  },
  boynextdoor: {
    device: "house-window",
    player: "vinyl",
    light: ["#fff8ec", "#fffdf7", "#f0d89b", "#e17c6c", "#2c2520", "#f7efe3"],
  },
  txt: {
    device: "story-door",
    player: "minidisc",
    light: ["#f6f0ff", "#fffaff", "#d8c7ff", "#7e68c8", "#28213d", "#fbf8ff"],
  },
  twice: {
    device: "soft-laptop",
    player: "cd",
    light: ["#fff5f7", "#fffdf9", "#ffd2df", "#f181a6", "#332026", "#fff8fa"],
  },
  riize: {
    device: "media-machine",
    player: "vinyl",
    light: ["#f6f7f2", "#fffdf7", "#dad4bd", "#9b8a69", "#27251f", "#f4f1e8"],
  },
  bt21: {
    device: "mini-homepage",
    player: "disc",
    light: ["#f8f9ff", "#ffffff", "#c8dbff", "#6489dc", "#20283a", "#f5f8ff"],
  },
  h2h: {
    device: "clear-summer",
    player: "disc",
    light: ["#f7fff5", "#fffff7", "#d7ef9d", "#6fb77b", "#203025", "#fbfff4"],
  },
  treasure: {
    device: "media-machine",
    player: "disc",
    light: ["#f5fbff", "#ffffff", "#c9e6ff", "#2f8fe8", "#132b45", "#f7fbff"],
  },
  nmixx: {
    device: "translucent-windows",
    player: "disc",
    light: ["#f9fbff", "#ffffff", "#d7e2f8", "#6a8fd8", "#202b3d", "#f8fbff"],
  },
  svt: {
    device: "archive-console",
    player: "minidisc",
    light: ["#f7f5ef", "#fffdf7", "#d8cec0", "#577d93", "#252728", "#f3f0e8"],
  },
  wish: {
    device: "sky-notebook",
    player: "cd",
    light: ["#f3fbff", "#ffffff", "#bfe3ff", "#5e9ed5", "#1d2b38", "#f5fbff"],
  },
  dream: {
    device: "translucent-windows",
    player: "disc",
    light: ["#f2fff9", "#ffffff", "#b7eadb", "#43a6a6", "#1d3132", "#f4fffb"],
  },
  enhypen: {
    device: "night-console",
    player: "vinyl",
    light: ["#f8f6ff", "#ffffff", "#d6d0f4", "#7768bd", "#27243a", "#faf8ff"],
  },
};

const groupUIConfig = apps.reduce((config, app, index) => {
  const seed = groupThemeSeeds[app.id] || groupThemeSeeds.newjeans;
  const [background, surface, shell, accent, text, screen] = seed.light;

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
      wallpaper: groupWallpaperSources[app.id] || null,
      overlayAssets: [],
      decorations: [],
      cursor: null,
    },
    petPreview: {
      idle: null,
      items: buildPetPreviewItems(app.id),
      walking: null,
      click: null,
      fallback: "css-pet",
      width: 92,
      startX: 47,
      startY: 58,
    },
    player: {
      variant: seed.player,
      cover: null,
    },
    track: groupTrackConfig[app.id] || {
      title: "",
      artist: "",
      src: null,
      cover: null,
    },
  };
  return config;
}, {});

function buildPetPreviewItems(groupId) {
  const sources = groupPetCollections[groupId] || [];
  const layout = groupPetPreviewLayouts[groupId] || getPetPreviewLayout(sources.length);

  return sources.map((src, index) => {
    const [x, y] = layout.positions[index % layout.positions.length];
    const name = src.split("/").pop().replace(/\.[^.]+$/, "");
    return {
      id: name,
      src,
      x,
      y,
      width: layout.width + (index % 2) * layout.widthStep,
      rotation: layout.rotations[index % layout.rotations.length],
    };
  });
}

function getPetPreviewLayout(count) {
  if (count >= 10) {
    return {
      width: count >= 12 ? 54 : 60,
      widthStep: 4,
      positions: [
        [17, 35],
        [34, 30],
        [51, 35],
        [68, 31],
        [23, 52],
        [40, 48],
        [57, 53],
        [74, 49],
        [18, 70],
        [35, 66],
        [52, 72],
        [69, 68],
        [84, 78],
      ],
      rotations: [-7, 4, -2, 6, -4, 3, -6, 5, -1, 7, -5, 2, -3],
    };
  }

  if (count >= 8) {
    return {
      width: 64,
      widthStep: 5,
      positions: [
        [18, 37],
        [38, 32],
        [58, 39],
        [24, 57],
        [46, 54],
        [68, 58],
        [32, 75],
        [54, 73],
        [76, 76],
      ],
      rotations: [-7, 4, -2, 6, -4, 3, -6, 5, -1],
    };
  }

  if (count >= 6) {
    return {
      width: 72,
      widthStep: 6,
      positions: [
        [24, 40],
        [47, 34],
        [70, 43],
        [30, 65],
        [54, 62],
        [76, 70],
        [43, 78],
      ],
      rotations: [-7, 4, -2, 6, -4, 3, -6],
    };
  }

  return {
    width: 82,
    widthStep: 7,
    positions: [
      [25, 47],
      [47, 36],
      [69, 48],
      [36, 70],
      [61, 68],
    ],
    rotations: [-7, 4, -2, 6, -4],
  };
}

const appRoot = document.querySelector("#appRoot");
const privacyButton = document.querySelector("#privacyButton");
const mailboxButton = document.querySelector("#mailboxButton");
const messageDialog = document.querySelector("#messageDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogBody = document.querySelector("#dialogBody");
const dialogClose = document.querySelector("#dialogClose");
const dialogActions = document.querySelector("#dialogActions");
const usageDialog = document.querySelector("#usageDialog");
const usageDialogTitle = document.querySelector("#usageDialogTitle");
const usageDialogBody = document.querySelector("#usageDialogBody");
const usageDialogClose = document.querySelector("#usageDialogClose");

const state = {
  currentApp: apps[0],
  colorMode: "light",
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
    return `<img class="${className}" src="${escapeHtml(asset.src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`;
  }
  return `<span class="${className} asset-fallback" aria-hidden="${alt ? "false" : "true"}">${escapeHtml(asset.fallback || fallback)}</span>`;
}

function applyColorMode(mode) {
  state.colorMode = "light";
  document.body.dataset.colorMode = "light";
  localStorage.removeItem("kpopzoo:colorMode");
  applyGroupTheme(state.currentApp?.id);
}

function applyGroupTheme(groupId) {
  const config = groupUIConfig[groupId] || groupUIConfig[apps[0].id];
  const theme = config.theme.light;
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
  document.body.dataset.view = name;
  delete document.body.dataset.group;
  appRoot.innerHTML = html;
  bindViewEvents();
}

function handleRoute() {
  const route = window.location.hash || "#/home";

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

  if (route === "#/wallpaper") {
    navigateTo("#/diypic", { replace: true });
    return;
  }

  if (route === "#/diypic") {
    state.currentApp = apps[0];
    applyGroupTheme(apps[0].id);
    renderWallpaperMaker();
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

function renderHome() {
  showView(
    "home",
    renderIntroScene(),
  );
}

function renderIntroScene() {
  return `
    <section class="splash-view" aria-label="KPOPZOO opening">
      <div class="splash-scene">
        <div class="intro-ascii-computer" aria-hidden="true">
          <pre class="intro-ascii-frame" data-intro-ascii-frame></pre>
          <pre class="intro-ascii-kaomoji" data-intro-ascii-kaomoji></pre>
        </div>
        <div class="intro-copy" aria-label="Something has moved into your desktop.">
          <p class="intro-line intro-line-01">something</p>
          <p class="intro-line intro-line-02">has moved</p>
          <p class="intro-line intro-line-03">into your desktop.</p>
        </div>
        <p class="intro-produced">produced by broccoli and ccnr</p>
        <div class="intro-actions">
          <button class="intro-action" type="button" data-route="#/groups">ENTERING KPOPZOO →</button>
          <a class="intro-action" href="https://petdex.dev/u/nf2q40sq">PETDEX →</a>
          <a class="intro-action" href="https://www.xiaohongshu.com/collection/item/6a1143d10f00000000000001?xhsshare=&appuid=5f18e32c00000000010094f7&apptime=1786361079&share_id=79d8ec913bff4692853982526d8e6361&share_channel=copy_link" target="_blank" rel="noopener noreferrer">小红书合集 →</a>
        </div>
      </div>
    </section>
  `;
}

function getIntroAsciiComputer() {
  return [
    "                         .-,uod8BBbbuo,.",
    "                  .-,uod8BBBBBBBBBBBBBBBBBRPFT?!::.",
    "              ,=m8BBBBBBBBBBBBBBBBBBRPFT?|||||||||||||.",
    "            !....:!TVBBBBRPFT||||||||||||!!^^\"\"'   ||||",
    "            !......:!?|||||!!^^\"\"'                 ||||",
    "            !........||||                         ||||",
    "            !........||||                         ||||",
    "            !........||||                         ||||",
    "            !........||||                         ||||",
    "            !........||||                         ||||",
    "            !........||||                         ||||",
    "            `........||||                       ,||||",
    "              `;.....||||                  _-!!|||||",
    "        .-,uodWBBBBb..||||          _-!!|||||||||!:'",
    "   !YBBBBBBBBBBBBBBBBb.||||._-!!|||||||||!iof68BBBBb....",
    "   !..YBBBBBBBBBBBBBBBBb||||||||||!iof68BBBBBBRPFT?!::  `.",
    "   !....YBBBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::    `.",
    "   !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::::;!^\"`;::::      `.",
    "   !........YBBBBBBBBBBRPFT?!::::::::::::::::::::::::;        iBBbo.",
    "   `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.       WBBBbo.",
    "     `...............:::::::::::::::::::::;iof6888888888b.     `YBBBP^'",
    "       `............:::::::::::::::::;iof68888888888888888b.     `",
    "         `........:::::::::::::;iof688888888888888888888888b.",
    "           `.....::::::::;iof688888888888888888888888888899fT!",
    "             `..::!888888888888888888888888888888899fT|!^\"'",
    "                `' !!988888888888888888888888899fT|!^\"'",
    "                    `!!888888888888888888899fT|!^\"'",
    "                       `!988888888899fT|!^\"'",
    "                          `!999fT|!^\"'",
  ].join("\n");
}

function getIntroAsciiKaomoji() {
  return [
    "(\\_/)",
    "( •.•)",
    "c(\")(\")",
  ].join("\n");
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
        <h1 class="group-select-title" data-group-typed-title="${escapeHtml(uiText.groupSelectTitle)}" aria-label="${escapeHtml(uiText.groupSelectTitle)}"></h1>
        <div class="selector-grid" aria-label="团体列表">
          ${groupApps.map(renderGroupSelectorItem).join("")}
        </div>
      </section>
      ${renderMailbox()}
    `,
  );
  initGroupTypedTitle();
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

function renderWallpaperMaker() {
  const petOptions = getWallpaperPetOptions();
  showView(
    "wallpaper",
    `
      <section class="wallpaper-maker" aria-labelledby="wallpaper-title">
        <div class="view-topline">
          <button class="text-link" type="button" data-route="#/home">← KPOPZOO</button>
          <button class="text-link" type="button" data-route="#/groups">全部团体</button>
        </div>
        <div class="wallpaper-heading">
          <h1 id="wallpaper-title">${escapeHtml(uiText.wallpaperTitle)}</h1>
          <p>${escapeHtml(uiText.wallpaperSubtitle)}</p>
        </div>
        <div class="wallpaper-layout">
          <aside class="wallpaper-panel wallpaper-controls" aria-label="相片装饰工具">
            <section class="wallpaper-step">
              <h2>${escapeHtml(uiText.wallpaperUploadTitle)}</h2>
              <label class="wallpaper-upload">
                <input type="file" accept="image/png,image/jpeg" data-wallpaper-upload>
                <span>上传 png / jpg 相片</span>
                <small data-wallpaper-file-name>还没有添加相片</small>
              </label>
              <div class="wallpaper-camera-actions">
                <button type="button" data-wallpaper-camera-start>打开摄像头</button>
                <button type="button" data-wallpaper-camera-shot disabled>拍照</button>
              </div>
              <video class="wallpaper-camera" data-wallpaper-camera muted playsinline hidden></video>
            </section>
            <section class="wallpaper-step">
              <div class="wallpaper-step-title">
                <h2>${escapeHtml(uiText.wallpaperPetTitle)}</h2>
                <div class="wallpaper-mini-actions">
                  <button type="button" data-wallpaper-clear>清空</button>
                </div>
              </div>
              <label class="wallpaper-filter">
                <span>团体</span>
                <select data-wallpaper-group-filter>
                  <option value="all">全部宠物</option>
                  ${apps.map((app) => `<option value="${escapeHtml(app.id)}">${escapeHtml(app.group)}</option>`).join("")}
                </select>
              </label>
              <div class="wallpaper-pet-list" data-wallpaper-pet-list>
                ${petOptions.map(renderWallpaperPetChoice).join("")}
              </div>
            </section>
          </aside>
          <section class="wallpaper-panel wallpaper-preview-panel" aria-labelledby="wallpaper-preview-title">
            <div class="wallpaper-preview-head">
              <div>
                <h2 id="wallpaper-preview-title">${escapeHtml(uiText.wallpaperPreviewTitle)}</h2>
                <p>拖动宠物调整位置，每只宠物都可以单独选择动作帧。</p>
              </div>
              <div class="wallpaper-export-actions">
                <button class="primary-action" type="button" data-wallpaper-reset>重置摆放</button>
                <button class="primary-action" type="button" data-wallpaper-export-video>导出短视频</button>
                <button class="primary-action" type="button" data-wallpaper-export-photo>导出静态图</button>
              </div>
            </div>
            <div class="wallpaper-stage" data-wallpaper-stage>
              <div class="wallpaper-empty" data-wallpaper-empty>
                <strong>添加相片后开始制作</strong>
                <span>可以先选择宠物，摆放位置会一起保存。</span>
              </div>
              <div class="wallpaper-pet-layer" data-wallpaper-pet-layer></div>
            </div>
          </section>
        </div>
      </section>
    `,
  );
  initWallpaperMaker(petOptions);
}

function getWallpaperPetOptions() {
  return apps.flatMap((app) => {
    const sources = groupPetCollections[app.id] || [];
    return sources.map((src) => {
      const id = src.split("/").pop().replace(/\.[^.]+$/, "");
      const manifestFrames = petFrameManifest[`${app.id}/${id}`] || [];
      const spriteSrc = `assets/groups/${app.id}/spritesheets/${id}/spritesheet.webp`;
      const spriteSheet = getPetSpriteSheetConfig(app.id, id, spriteSrc);
      const frames = [
        {
          key: "default",
          label: "默认动画",
          src: spriteSrc,
          type: "sprite",
          effect: "default",
          sprite: { ...spriteSheet, row: 0, frames: defaultSpriteSheet.idleFrames, fps: 6 },
        },
        ...defaultPetFrames.map((frame) => ({
          type: "sprite",
          key: frame.key,
          label: petActionLabels[frame.key] || frame.key,
          src: spriteSrc,
          effect: frame.effect,
          sprite: { ...spriteSheet, row: frame.row, frames: frame.frames, fps: frame.fps },
        })),
        ...manifestFrames.map((frame) => ({
          type: frame.type || (frame.sprite ? "sprite" : "image"),
          key: frame.key,
          label: frame.label || petActionLabels[frame.key] || frame.key,
          src: frame.src || src,
          effect: frame.effect || frame.key,
          sprite: frame.sprite || null,
        })),
      ];
      return {
        id: `${app.id}-${id}`,
        name: id,
        groupId: app.id,
        group: app.group,
        src,
        frames,
      };
    });
  });
}

function renderWallpaperPetChoice(pet) {
  return `
    <div class="wallpaper-pet-choice" data-wallpaper-choice data-group-id="${escapeHtml(pet.groupId)}">
      <img src="${escapeHtml(pet.src)}" alt="" loading="lazy" decoding="async">
      <span>
        <strong>${escapeHtml(pet.name)}</strong>
        <small>${escapeHtml(pet.group)}</small>
      </span>
      <select data-wallpaper-frame-select aria-label="选择 ${escapeHtml(pet.name)} 动作帧">
        ${pet.frames.map((frame) => `<option value="${escapeHtml(frame.key)}">${escapeHtml(frame.label)}</option>`).join("")}
      </select>
      <button type="button" data-wallpaper-add-pet="${escapeHtml(pet.id)}" aria-label="添加 ${escapeHtml(pet.name)}">+</button>
    </div>
  `;
}

function getPetSpriteSheetConfig(groupId, petId, src) {
  const rows = extendedSpriteSheetPets.has(`${groupId}/${petId}`) ? 11 : defaultSpriteSheet.rows;
  return {
    ...defaultSpriteSheet,
    rows,
    src,
  };
}

function getWallpaperSpriteData(frame) {
  const sprite = frame?.sprite;
  if (!sprite) return null;

  const columns = sprite.columns || defaultSpriteSheet.columns;
  const rows = sprite.rows || defaultSpriteSheet.rows;
  const frames = Math.max(1, sprite.frames || columns);
  const row = Math.max(0, sprite.row || 0);
  const frameWidth = sprite.frameWidth || sprite.width || defaultSpriteSheet.frameWidth || 192;
  const frameHeight = sprite.frameHeight || sprite.height || defaultSpriteSheet.frameHeight || 208;

  return {
    src: sprite.src || frame.src,
    columns,
    rows,
    frames,
    row,
    fps: sprite.fps || 6,
    frameWidth,
    frameHeight,
  };
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
        <h1 class="group-typed-title" data-group-typed-title="${escapeHtml(app.group)}" aria-label="${escapeHtml(app.group)}"></h1>
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
  document.body.dataset.group = app.id;
  initGroupTypedTitle();
  initPetPreview(uiConfig);
  initPreviewFullscreen();
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
      <div class="device-screen" style="${screenStyle}" role="region" aria-label="${escapeHtml(uiText.petHint)}">
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
        ${renderDesktopDecorations(desktop)}
        ${renderPetPreview(uiConfig)}
        <button class="preview-fullscreen-toggle" type="button" data-preview-fullscreen aria-label="全屏预览">
          <span aria-hidden="true">🔍</span>
        </button>
        ${renderDesktopAppLogo(app, uiConfig)}
      </div>
    </div>
  `;
}

function renderDesktopAppLogo(app, uiConfig) {
  const logo = uiConfig.selector?.appLogo || siteAssets.appLogo;
  const fallback = logo.fallbackText || app.group;
  return `
    <button class="app-logo" type="button" data-reset-pets aria-label="恢复宠物初始位置">
      ${assetHtml(logo, "app-logo-asset", fallback, app.group)}
    </button>
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
  const items = pet.items?.length
    ? pet.items
    : [
        {
          id: "fallback",
          src: pet.idle || pet.fallbackAsset,
          x: pet.startX,
          y: pet.startY,
          width: pet.width,
          rotation: 0,
        },
      ];

  return `
    <div class="pet-playground" aria-label="${escapeHtml(uiText.petHint)}">
      ${items
        .map((item, index) => {
          const style = `--pet-x:${item.x}%;--pet-y:${item.y}%;--pet-width:${item.width}px;--pet-rotation:${item.rotation || 0}deg;--pet-z:${10 + index};`;
          return `
            <button class="pet-preview" type="button" data-pet-id="${escapeHtml(item.id)}" style="${style}" aria-label="拖动 ${escapeHtml(item.id)}">
              ${
                item.src
                  ? `<img src="${transparentPixel}" data-src="${escapeHtml(item.src)}" alt="" loading="lazy" decoding="async">`
                  : `<span class="css-pet" aria-hidden="true"><span></span></span>`
              }
            </button>
          `;
        })
        .join("")}
    </div>
    <span class="pet-reaction" aria-hidden="true"></span>
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
  return "";
}

function bindViewEvents() {
  appRoot.querySelectorAll("[data-route]").forEach((control) => {
    control.addEventListener("click", () => navigateTo(control.dataset.route));
  });

  appRoot.querySelectorAll("[data-group]").forEach((control) => {
    control.addEventListener("click", () => navigateTo(`#/group/${control.dataset.group}`));
  });

  appRoot.querySelector("[data-usage-view]")?.addEventListener("click", openUsageDialog);
  initIntroAsciiBackground();
}

function initGroupTypedTitle() {
  const title = appRoot.querySelector("[data-group-typed-title]");
  if (!title) return;

  const text = title.dataset.groupTypedTitle || "";
  let index = 0;
  title.textContent = "";
  title.dataset.typing = "true";

  const typeNext = () => {
    if (!title.isConnected) return;
    index = Math.min(text.length, index + 1);
    title.textContent = text.slice(0, index);

    if (index < text.length) {
      window.setTimeout(typeNext, 58);
      return;
    }

    title.dataset.typing = "done";
  };

  window.setTimeout(typeNext, 120);
}

function initWallpaperMaker(petOptions) {
  const stage = appRoot.querySelector("[data-wallpaper-stage]");
  const layer = appRoot.querySelector("[data-wallpaper-pet-layer]");
  const empty = appRoot.querySelector("[data-wallpaper-empty]");
  const upload = appRoot.querySelector("[data-wallpaper-upload]");
  const fileName = appRoot.querySelector("[data-wallpaper-file-name]");
  const filter = appRoot.querySelector("[data-wallpaper-group-filter]");
  const camera = appRoot.querySelector("[data-wallpaper-camera]");
  const startCamera = appRoot.querySelector("[data-wallpaper-camera-start]");
  const takePhoto = appRoot.querySelector("[data-wallpaper-camera-shot]");
  const frameSelects = Array.from(appRoot.querySelectorAll("[data-wallpaper-frame-select]"));
  const addButtons = Array.from(appRoot.querySelectorAll("[data-wallpaper-add-pet]"));
  const choices = Array.from(appRoot.querySelectorAll("[data-wallpaper-choice]"));
  const selected = new Map();
  const petLookup = new Map(petOptions.map((pet) => [pet.id, pet]));
  let backgroundUrl = "";
  let backgroundDataUrl = "";
  let backgroundSize = { width: 0, height: 0 };
  let cameraStream = null;
  let instanceCounter = 0;
  let topZ = 40;
  let spritePreviewFrame = 0;
  let spritePreviewRun = 0;

  const defaultPlacement = (index) => ({
    x: 22 + (index % 4) * 17,
    y: 68 + (Math.floor(index / 4) % 2) * 10,
    width: 118,
    rotation: 0,
    z: 20 + index,
  });

  const syncEmptyState = () => {
    const hasBackground = Boolean(backgroundUrl);
    stage.classList.toggle("has-background", hasBackground);
    empty.hidden = hasBackground || selected.size > 0;
  };

  const setBackgroundFromDataUrl = async (dataUrl, label) => {
    if (backgroundUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(backgroundUrl);
    }

    backgroundUrl = dataUrl;
    backgroundDataUrl = dataUrl;
    stage.style.backgroundImage = `url("${backgroundUrl}")`;
    fileName.textContent = label;
    backgroundSize = await getImageSize(dataUrl);
    stage.style.setProperty("--wallpaper-photo-aspect", `${backgroundSize.width} / ${backgroundSize.height}`);
    syncEmptyState();
  };

  const setBackgroundFromFile = (file) => {
    if (backgroundUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(backgroundUrl);
    }

    backgroundUrl = URL.createObjectURL(file);
    stage.style.backgroundImage = `url("${backgroundUrl}")`;
    fileName.textContent = file.name;

    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      backgroundDataUrl = String(reader.result || "");
      backgroundSize = await getImageSize(backgroundDataUrl);
      stage.style.setProperty("--wallpaper-photo-aspect", `${backgroundSize.width} / ${backgroundSize.height}`);
    });
    reader.readAsDataURL(file);
    syncEmptyState();
  };

  const getSelectedFrame = (petId) => {
    const choice = addButtons.find((button) => button.dataset.wallpaperAddPet === petId)?.closest("[data-wallpaper-choice]");
    const frameKey = choice?.querySelector("[data-wallpaper-frame-select]")?.value || "default";
    const pet = petLookup.get(petId);
    return pet?.frames.find((frame) => frame.key === frameKey) || pet?.frames[0] || null;
  };

  const placePet = (button, clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    const x = Math.max(6, Math.min(94, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(10, Math.min(92, ((clientY - rect.top) / rect.height) * 100));
    button.style.setProperty("--wallpaper-pet-x", `${x}%`);
    button.style.setProperty("--wallpaper-pet-y", `${y}%`);

    const item = selected.get(button.dataset.wallpaperPetInstance);
    if (item) {
      item.x = x;
      item.y = y;
      item.z = Number(button.style.getPropertyValue("--wallpaper-pet-z")) || item.z;
    }
  };

  const bindWallpaperPetDrag = (button) => {
    let dragging = false;

    button.addEventListener("pointerdown", (event) => {
      if (event.target.closest("[data-wallpaper-instance-control]")) return;
      event.preventDefault();
      dragging = true;
      button.setPointerCapture(event.pointerId);
      button.classList.add("is-dragging");
      button.style.setProperty("--wallpaper-pet-z", `${topZ++}`);
      placePet(button, event.clientX, event.clientY);
    });

    button.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      placePet(button, event.clientX, event.clientY);
    });

    const stopDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      if (button.hasPointerCapture?.(event.pointerId)) {
        button.releasePointerCapture(event.pointerId);
      }
      button.classList.remove("is-dragging");
    };

    button.addEventListener("pointerup", stopDrag);
    button.addEventListener("pointercancel", stopDrag);
  };

  const stopSpritePreviews = () => {
    spritePreviewRun += 1;
    if (spritePreviewFrame) {
      window.cancelAnimationFrame(spritePreviewFrame);
      spritePreviewFrame = 0;
    }
  };

  const startSpritePreviews = async () => {
    stopSpritePreviews();
    const runId = spritePreviewRun;
    const canvases = Array.from(layer.querySelectorAll("[data-wallpaper-sprite-canvas]"));
    if (!canvases.length) return;

    const spriteCanvases = await Promise.all(
      canvases.map(async (canvas) => {
        try {
          return {
            canvas,
            image: await loadPetImage(canvas.dataset.spriteSrc),
          };
        } catch (error) {
          const fallbackSrc = canvas.dataset.fallbackSrc;
          if (!fallbackSrc) return null;

          try {
            return {
              canvas,
              image: await loadPetImage(fallbackSrc),
              fallback: true,
            };
          } catch (fallbackError) {
            return null;
          }
        }
      }),
    );

    const visibleSprites = spriteCanvases.filter(Boolean);
    if (!visibleSprites.length || runId !== spritePreviewRun) return;

    const draw = () => {
      if (runId !== spritePreviewRun) return;

      visibleSprites.forEach(({ canvas, image, fallback }) => {
        drawWallpaperSpriteCanvas(canvas, image, fallback);
      });
      spritePreviewFrame = window.requestAnimationFrame(draw);
    };

    draw();
  };

  const renderSelectedPets = () => {
    layer.innerHTML = Array.from(selected.values())
      .map(
        (item) => {
          const spriteData = getWallpaperSpriteData(item.frame);
          const visual = spriteData
            ? `
              <canvas
                class="wallpaper-pet-sprite"
                width="${spriteData.frameWidth}"
                height="${spriteData.frameHeight}"
                data-wallpaper-sprite-canvas
                data-sprite-src="${escapeHtml(spriteData.src)}"
                data-fallback-src="${escapeHtml(item.src)}"
                data-sprite-columns="${spriteData.columns}"
                data-sprite-rows="${spriteData.rows}"
                data-sprite-frames="${spriteData.frames}"
                data-sprite-row="${spriteData.row}"
                data-sprite-fps="${spriteData.fps}"
                aria-hidden="true"
              ></canvas>
            `
            : `<img src="${escapeHtml(item.src)}" alt="" draggable="false" data-wallpaper-effect="${escapeHtml(item.frame?.effect || "default")}">`;

          return `
            <div
              class="wallpaper-pet"
              data-wallpaper-pet-instance="${escapeHtml(item.instanceId)}"
              style="--wallpaper-pet-x:${item.x}%;--wallpaper-pet-y:${item.y}%;--wallpaper-pet-width:${item.width}px;--wallpaper-pet-rotation:${getWallpaperPetRotation(item)}deg;--wallpaper-pet-z:${item.z};"
              aria-label="拖动 ${escapeHtml(item.name)}"
            >
            ${visual}
            <div class="wallpaper-pet-controls" data-wallpaper-instance-control>
              <select data-wallpaper-instance-frame="${escapeHtml(item.instanceId)}" aria-label="选择 ${escapeHtml(item.name)} 动作帧">
                ${item.frames.map((frame) => `<option value="${escapeHtml(frame.key)}"${frame.key === item.frameKey ? " selected" : ""}>${escapeHtml(frame.label)}</option>`).join("")}
              </select>
              <button type="button" data-wallpaper-resize-instance="${escapeHtml(item.instanceId)}" data-delta="-12" aria-label="缩小 ${escapeHtml(item.name)}">−</button>
              <button type="button" data-wallpaper-resize-instance="${escapeHtml(item.instanceId)}" data-delta="12" aria-label="放大 ${escapeHtml(item.name)}">+</button>
              <button type="button" data-wallpaper-rotate-instance="${escapeHtml(item.instanceId)}" data-delta="-15" aria-label="向左旋转 ${escapeHtml(item.name)}">↺</button>
              <button type="button" data-wallpaper-rotate-instance="${escapeHtml(item.instanceId)}" data-delta="15" aria-label="向右旋转 ${escapeHtml(item.name)}">↻</button>
              <button type="button" data-wallpaper-remove-instance="${escapeHtml(item.instanceId)}" aria-label="删除 ${escapeHtml(item.name)}">×</button>
            </div>
          </div>
        `;
        },
      )
      .join("");

    Array.from(layer.querySelectorAll(".wallpaper-pet")).forEach(bindWallpaperPetDrag);
    startSpritePreviews();
    Array.from(layer.querySelectorAll("[data-wallpaper-instance-frame]")).forEach((select) => {
      select.addEventListener("pointerdown", (event) => event.stopPropagation());
      select.addEventListener("change", () => {
        const item = selected.get(select.dataset.wallpaperInstanceFrame);
        const frame = item?.frames.find((candidate) => candidate.key === select.value);
        if (!item || !frame) return;
        selected.set(item.instanceId, {
          ...item,
          src: frame.src,
          frameKey: frame.key,
          frameLabel: frame.label,
          frame,
          rotation: frame.key === "default" ? 0 : item.rotation,
        });
        renderSelectedPets();
      });
    });
    Array.from(layer.querySelectorAll("[data-wallpaper-remove-instance]")).forEach((button) => {
      button.addEventListener("pointerdown", (event) => event.stopPropagation());
      button.addEventListener("click", () => {
        selected.delete(button.dataset.wallpaperRemoveInstance);
        renderSelectedPets();
      });
    });
    Array.from(layer.querySelectorAll("[data-wallpaper-resize-instance]")).forEach((button) => {
      button.addEventListener("pointerdown", (event) => event.stopPropagation());
      button.addEventListener("click", () => {
        const item = selected.get(button.dataset.wallpaperResizeInstance);
        if (!item) return;
        const delta = Number(button.dataset.delta) || 0;
        selected.set(item.instanceId, {
          ...item,
          width: Math.max(42, Math.min(118, item.width + delta)),
        });
        renderSelectedPets();
      });
    });
    Array.from(layer.querySelectorAll("[data-wallpaper-rotate-instance]")).forEach((button) => {
      button.addEventListener("pointerdown", (event) => event.stopPropagation());
      button.addEventListener("click", () => {
        const item = selected.get(button.dataset.wallpaperRotateInstance);
        if (!item) return;
        const delta = Number(button.dataset.delta) || 0;
        selected.set(item.instanceId, {
          ...item,
          rotation: ((item.rotation || 0) + delta + 360) % 360,
        });
        renderSelectedPets();
      });
    });
    syncEmptyState();
  };

  upload?.addEventListener("change", () => {
    const file = upload.files?.[0];
    if (!file) return;

    if (!/^image\/(png|jpe?g)$/i.test(file.type)) {
      openMessageDialog("格式不支持", "请上传 png 或 jpg 图片。");
      upload.value = "";
      return;
    }

    setBackgroundFromFile(file);
  });

  frameSelects.forEach((select) => {
    select.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const pet = petLookup.get(button.dataset.wallpaperAddPet);
      if (!pet) return;

      const frame = getSelectedFrame(pet.id);
      const placement = defaultPlacement(selected.size);
      const instanceId = `${pet.id}-${++instanceCounter}`;
      selected.set(instanceId, {
        ...pet,
        instanceId,
        src: frame?.src || pet.src,
        frameKey: frame?.key || "default",
        frameLabel: frame?.label || "默认动画",
        frame: frame || pet.frames[0],
        rotation: 0,
        ...placement,
      });
      renderSelectedPets();
    });
  });

  const applyPetFilters = () => {
    const groupId = filter?.value || "all";
    choices.forEach((choice) => {
      const matchesGroup = groupId === "all" || choice.dataset.groupId === groupId;
      choice.hidden = !matchesGroup;
    });
  };

  const schedulePetFilters = () => {
    window.setTimeout(applyPetFilters, 0);
  };

  filter?.addEventListener("input", schedulePetFilters);
  filter?.addEventListener("change", schedulePetFilters);
  filter?.addEventListener("blur", schedulePetFilters);
  filter?.addEventListener("keyup", schedulePetFilters);
  filter?.addEventListener("pointerup", schedulePetFilters);
  applyPetFilters();

  startCamera?.addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      openMessageDialog("无法打开摄像头", "当前浏览器不支持直接调用摄像头，可以先用系统相机拍照后上传。");
      return;
    }

    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
      camera.srcObject = cameraStream;
      camera.hidden = false;
      takePhoto.disabled = false;
      await camera.play();
    } catch (error) {
      openMessageDialog("摄像头未开启", "浏览器没有获得摄像头权限，可以检查权限后再试。");
    }
  });

  takePhoto?.addEventListener("click", async () => {
    if (!cameraStream || !camera.videoWidth || !camera.videoHeight) return;

    const canvas = document.createElement("canvas");
    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;
    canvas.getContext("2d").drawImage(camera, 0, 0, canvas.width, canvas.height);
    await setBackgroundFromDataUrl(canvas.toDataURL("image/png"), `camera-${Date.now()}.png`);
  });

  appRoot.querySelector("[data-wallpaper-clear]")?.addEventListener("click", () => {
    selected.clear();
    renderSelectedPets();
  });

  appRoot.querySelector("[data-wallpaper-reset]")?.addEventListener("click", () => {
    Array.from(selected.values()).forEach((item, index) => {
      Object.assign(item, defaultPlacement(index));
    });
    topZ = 40;
    renderSelectedPets();
  });

  const validateExport = () => {
    if (!backgroundDataUrl) {
      openMessageDialog("先添加相片", "请上传相片或打开摄像头拍照后再导出。");
      return false;
    }

    if (!selected.size) {
      openMessageDialog("先选择宠物", "至少选择一只宠物放进相片里。");
      return false;
    }

    return true;
  };

  appRoot.querySelector("[data-wallpaper-export-video]")?.addEventListener("click", async () => {
    if (!validateExport()) return;
    try {
      await exportDecoratedLive(Array.from(selected.values()), backgroundDataUrl, backgroundSize, {
        filenamePrefix: "kpopzoo-short-video",
      });
    } catch (error) {
      console.error("Failed to export short video", error);
      openMessageDialog("导出失败", "浏览器没有成功录制短视频，可以换成 Chrome/Edge 后再试。");
    }
  });

  appRoot.querySelector("[data-wallpaper-export-photo]")?.addEventListener("click", async () => {
    if (!validateExport()) return;
    try {
      await exportDecoratedPhoto(Array.from(selected.values()), backgroundDataUrl, backgroundSize);
    } catch (error) {
      console.error("Failed to export decorated photo", error);
      openMessageDialog("导出失败", "浏览器没有成功合成静态图，可以刷新页面后再试一次。");
    }
  });

  syncEmptyState();
}

async function exportDecoratedPhoto(selectedPets, backgroundDataUrl, backgroundSize) {
  const { canvas } = await drawDecoratedPhoto(selectedPets, backgroundDataUrl, backgroundSize, {
    maxDimension: 4096,
  });
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("Canvas did not produce a blob");
  downloadBlob(blob, `kpopzoo-decorated-photo-${Date.now()}.png`);
}

async function exportDecoratedLive(selectedPets, backgroundDataUrl, backgroundSize, options = {}) {
  const { canvas, drawFrame } = await drawDecoratedPhoto(selectedPets, backgroundDataUrl, backgroundSize, {
    maxDimension: 1920,
    allowUpscale: true,
    evenDimensions: true,
  });
  const stream = canvas.captureStream?.(24);
  if (!stream || !window.MediaRecorder) {
    throw new Error("MediaRecorder is not available");
  }

  const { recorder, mimeType } = createVideoRecorder(stream, {
    videoBitsPerSecond: 12000000,
  });
  const chunks = [];
  let animationFrame = 0;

  recorder.addEventListener("dataavailable", (event) => {
    if (event.data?.size) chunks.push(event.data);
  });

  const stopped = new Promise((resolve) => {
    recorder.addEventListener("stop", resolve, { once: true });
  });

  const startedAt = performance.now();
  const tick = () => {
    drawFrame();
    if (performance.now() - startedAt < wallpaperVideoDurationMs) {
      animationFrame = window.requestAnimationFrame(tick);
    }
  };

  recorder.start();
  tick();
  await wait(wallpaperVideoDurationMs);
  window.cancelAnimationFrame(animationFrame);
  recorder.stop();
  await stopped;
  if (!chunks.length) {
    throw new Error(`MediaRecorder produced no data for ${mimeType}`);
  }
  downloadBlob(new Blob(chunks, { type: mimeType }), `${options.filenamePrefix || "kpopzoo-live-photo"}-${Date.now()}.${videoExtensionForMimeType(mimeType)}`);
}

async function drawDecoratedPhoto(selectedPets, backgroundDataUrl, backgroundSize, options = {}) {
  const background = await loadImage(backgroundDataUrl);
  const naturalWidth = backgroundSize.width || background.naturalWidth || 1080;
  const naturalHeight = backgroundSize.height || background.naturalHeight || 1080;
  const { width, height } = getDecoratedCanvasSize(naturalWidth, naturalHeight, options);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const pets = await Promise.all(
    selectedPets
      .slice()
      .sort((a, b) => a.z - b.z)
      .map(prepareDrawablePet),
  );

  const drawFrame = () => {
    context.clearRect(0, 0, width, height);
    context.drawImage(background, 0, 0, width, height);
    pets.forEach((pet) => {
      const petWidth = Math.max(24, (pet.width / Math.max(1, document.querySelector("[data-wallpaper-stage]")?.clientWidth || 680)) * width);
      const petHeight = petWidth;
      const centerX = (pet.x / 100) * width;
      const centerY = (pet.y / 100) * height;
      const effect = pet.sprite ? getPetEffectTransform("default") : getPetEffectTransform(pet.frame?.effect || "default");
      context.save();
      context.translate(centerX, centerY);
      context.rotate((getWallpaperPetRotation(pet) * Math.PI) / 180);
      context.translate(0, effect.y * petHeight);
      context.rotate(effect.rotate);
      context.scale(effect.scaleX, effect.scaleY);
      context.shadowColor = "rgba(0, 0, 0, 0.18)";
      context.shadowBlur = Math.max(8, petWidth * 0.12);
      context.shadowOffsetY = Math.max(6, petWidth * 0.08);
      drawPetDrawable(context, pet, -petWidth / 2, -petHeight / 2, petWidth, petHeight);
      context.restore();
    });
  };

  drawFrame();
  return { canvas, drawFrame };
}

function getDecoratedCanvasSize(naturalWidth, naturalHeight, options = {}) {
  const sourceWidth = Math.max(1, naturalWidth);
  const sourceHeight = Math.max(1, naturalHeight);
  const maxDimension = options.maxDimension || 4096;
  const sourceMaxDimension = Math.max(sourceWidth, sourceHeight);
  const scale = options.allowUpscale
    ? maxDimension / sourceMaxDimension
    : Math.min(1, maxDimension / sourceMaxDimension);
  let width = Math.max(1, Math.round(sourceWidth * scale));
  let height = Math.max(1, Math.round(sourceHeight * scale));

  if (!options.evenDimensions) {
    return { width, height };
  }

  if (sourceWidth >= sourceHeight) {
    width = toEvenDimension(width);
    height = toEvenDimension(Math.round((width * sourceHeight) / sourceWidth));
  } else {
    height = toEvenDimension(height);
    width = toEvenDimension(Math.round((height * sourceWidth) / sourceHeight));
  }

  return { width, height };
}

function toEvenDimension(value) {
  return Math.max(2, Math.round(value / 2) * 2);
}

async function prepareDrawablePet(pet) {
  if (pet.frame?.type === "sprite" && pet.frame.sprite) {
    try {
      return {
        ...pet,
        image: await loadPetImage(pet.frame.sprite.src || pet.src),
        sprite: pet.frame.sprite,
      };
    } catch (error) {
      return {
        ...pet,
        image: await loadPetImage(pet.src),
        sprite: null,
      };
    }
  }

  return {
    ...pet,
    image: await loadPetImage(pet.src),
    sprite: null,
  };
}

function drawPetDrawable(context, pet, x, y, width, height) {
  if (!pet.sprite) {
    context.drawImage(pet.image, x, y, width, height);
    return;
  }

  const columns = pet.sprite.columns || defaultSpriteSheet.columns;
  const rows = pet.sprite.rows || defaultSpriteSheet.rows;
  const frameWidth = pet.sprite.frameWidth || pet.sprite.width || pet.image.naturalWidth / columns;
  const frameHeight = pet.sprite.frameHeight || pet.sprite.height || pet.image.naturalHeight / rows;
  const frames = Math.max(1, pet.sprite.frames || columns);
  const fps = pet.sprite.fps || 12;
  const index = Math.floor((performance.now() / 1000) * fps) % frames;
  const sx = (index % columns) * frameWidth;
  const sy = (pet.sprite.row || 0) * frameHeight + Math.floor(index / columns) * frameHeight;
  context.drawImage(pet.image, sx, sy, frameWidth, frameHeight, x, y, width, height);
}

function getWallpaperPetRotation(pet) {
  return Number(pet?.rotation) || 0;
}

function drawWallpaperSpriteCanvas(canvas, image, fallback = false) {
  const context = canvas.getContext("2d");
  if (!context || !image) return;

  context.clearRect(0, 0, canvas.width, canvas.height);
  if (fallback) {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return;
  }

  const columns = Math.max(1, Number(canvas.dataset.spriteColumns) || defaultSpriteSheet.columns);
  const rows = Math.max(1, Number(canvas.dataset.spriteRows) || defaultSpriteSheet.rows);
  const frames = Math.max(1, Number(canvas.dataset.spriteFrames) || columns);
  const row = Math.max(0, Number(canvas.dataset.spriteRow) || 0);
  const fps = Math.max(1, Number(canvas.dataset.spriteFps) || 6);
  const frameWidth = image.naturalWidth / columns;
  const frameHeight = image.naturalHeight / rows;
  const index = Math.floor((performance.now() / 1000) * fps) % frames;
  const sx = (index % columns) * frameWidth;
  const sy = row * frameHeight + Math.floor(index / columns) * frameHeight;

  context.drawImage(image, sx, sy, frameWidth, frameHeight, 0, 0, canvas.width, canvas.height);
}

function getPetEffectTransform(effect) {
  const time = performance.now() / 1000;
  const pulse = Math.sin(time * Math.PI * 2);
  const fastPulse = Math.sin(time * Math.PI * 4);

  switch (effect) {
    case "wave":
      return { rotate: pulse * 0.16, scaleX: 1, scaleY: 1, y: 0 };
    case "jump":
      return { rotate: 0, scaleX: 1, scaleY: 1, y: -Math.abs(pulse) * 0.18 };
    case "wait":
      return { rotate: fastPulse * 0.025, scaleX: 1, scaleY: 1, y: 0 };
    case "busy":
      return { rotate: pulse * 0.08, scaleX: 1 + Math.abs(fastPulse) * 0.03, scaleY: 1, y: 0 };
    case "review":
      return { rotate: pulse * 0.05, scaleX: 1, scaleY: 1, y: Math.sin(time * Math.PI * 3) * 0.03 };
    case "fail":
      return { rotate: -0.18 + pulse * 0.04, scaleX: 1, scaleY: 0.92, y: 0.08 };
    case "left":
      return { rotate: 0, scaleX: -1, scaleY: 1, y: 0 };
    case "right":
      return { rotate: 0, scaleX: 1, scaleY: 1, y: 0 };
    default:
      return { rotate: 0, scaleX: 1, scaleY: 1, y: 0 };
  }
}

async function loadPetImage(src) {
  try {
    return await loadImage(await assetToDataUrl(src));
  } catch (error) {
    return loadImage(src);
  }
}

async function assetToDataUrl(src) {
  const response = await fetch(src);
  if (!response.ok) throw new Error(`Failed to load ${src}`);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.addEventListener("load", () => resolve(image), { once: true });
    image.addEventListener("error", reject, { once: true });
    image.src = src;
  });
}

async function getImageSize(src) {
  const image = await loadImage(src);
  return {
    width: image.naturalWidth || image.width || 1080,
    height: image.naturalHeight || image.height || 1080,
  };
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
}

function wait(duration) {
  return new Promise((resolve) => window.setTimeout(resolve, duration));
}

function createVideoRecorder(stream, options = {}) {
  const candidates = [
    "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    "video/mp4;codecs=h264",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];

  for (const mimeType of candidates) {
    if (!MediaRecorder.isTypeSupported(mimeType)) continue;

    try {
      return {
        mimeType,
        recorder: new MediaRecorder(stream, { ...options, mimeType }),
      };
    } catch (error) {
      console.warn(`MediaRecorder rejected ${mimeType}`, error);
    }
  }

  return {
    mimeType: "video/webm",
    recorder: new MediaRecorder(stream, options),
  };
}

function videoExtensionForMimeType(mimeType) {
  return mimeType.includes("mp4") ? "mp4" : "webm";
}

function initIntroAsciiBackground() {
  const frameTarget = appRoot.querySelector("[data-intro-ascii-frame]");
  const kaomojiTarget = appRoot.querySelector("[data-intro-ascii-kaomoji]");
  if (!frameTarget || !kaomojiTarget) return;

  const frameSource = getIntroAsciiComputer();
  const kaomojiSource = getIntroAsciiKaomoji();
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const frameChunk = isMobile ? 12 : 20;
  const kaomojiChunk = isMobile ? 1 : 2;

  frameTarget.textContent = "";
  kaomojiTarget.textContent = "";
  frameTarget.dataset.typing = "true";
  kaomojiTarget.dataset.typing = "waiting";

  const typeText = (target, source, chunkSize, done) => {
    let index = 0;

    const typeNext = () => {
      if (!target.isConnected) return;
      index = Math.min(source.length, index + chunkSize);
      target.textContent = source.slice(0, index);

      if (index < source.length) {
        window.setTimeout(typeNext, 18);
        return;
      }

      target.dataset.typing = "done";
      done?.();
    };

    typeNext();
  };

  window.setTimeout(() => {
    typeText(frameTarget, frameSource, frameChunk, () => {
      kaomojiTarget.dataset.typing = "true";
      window.setTimeout(() => typeText(kaomojiTarget, kaomojiSource, kaomojiChunk), 180);
    });
  }, 260);
}

function initPetPreview(uiConfig) {
  const screen = appRoot.querySelector(".device-screen");
  const pets = Array.from(appRoot.querySelectorAll(".pet-preview"));
  const reaction = appRoot.querySelector(".pet-reaction");
  if (!screen || !pets.length || !reaction) return;
  hydratePetImages();

  let topZ = 30;
  const initialItems = uiConfig.petPreview.items || [];

  const placePet = (pet, clientX, clientY) => {
    const rect = screen.getBoundingClientRect();
    const x = Math.max(8, Math.min(88, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(18, Math.min(84, ((clientY - rect.top) / rect.height) * 100));
    pet.style.setProperty("--pet-x", `${x}%`);
    pet.style.setProperty("--pet-y", `${y}%`);
    reaction.style.left = `calc(${x}% + 3rem)`;
    reaction.style.top = `calc(${y}% - 3rem)`;
    return { x, y };
  };

  pets.forEach((pet) => {
    let dragging = false;
    let moved = false;

    pet.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      dragging = true;
      moved = false;
      pet.setPointerCapture(event.pointerId);
      pet.classList.add("is-dragging");
      pet.style.setProperty("--pet-z", `${topZ++}`);
      placePet(pet, event.clientX, event.clientY);
    });

    pet.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      moved = true;
      placePet(pet, event.clientX, event.clientY);
    });

    const stopDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      if (pet.hasPointerCapture?.(event.pointerId)) {
        pet.releasePointerCapture(event.pointerId);
      }
      pet.classList.remove("is-dragging");

      if (!moved) {
        const reactions = ["♡", "☆", "!", "…"];
        const rect = pet.getBoundingClientRect();
        reaction.textContent = reactions[Math.floor(Math.random() * reactions.length)];
        reaction.style.left = `${rect.left - screen.getBoundingClientRect().left + rect.width * 0.75}px`;
        reaction.style.top = `${rect.top - screen.getBoundingClientRect().top}px`;
        reaction.classList.remove("is-visible");
        pet.classList.remove("is-jumping");
        requestAnimationFrame(() => {
          pet.classList.add("is-jumping");
          reaction.classList.add("is-visible");
        });
      }
    };

    pet.addEventListener("pointerup", stopDrag);
    pet.addEventListener("pointercancel", stopDrag);
    pet.addEventListener("animationend", () => {
      pet.classList.remove("is-jumping");
    });
  });

  appRoot.querySelector("[data-reset-pets]")?.addEventListener("click", () => {
    pets.forEach((pet, index) => {
      const item = initialItems[index];
      if (!item) return;
      pet.style.setProperty("--pet-x", `${item.x}%`);
      pet.style.setProperty("--pet-y", `${item.y}%`);
      pet.style.setProperty("--pet-z", `${10 + index}`);
      pet.classList.remove("is-dragging", "is-jumping");
    });
    reaction.classList.remove("is-visible");
    topZ = 30;
  });
}

function initPreviewFullscreen() {
  const screen = appRoot.querySelector(".device-screen");
  const toggle = appRoot.querySelector("[data-preview-fullscreen]");
  if (!screen || !toggle) return;

  const isFullscreen = () => document.fullscreenElement === screen || screen.classList.contains("is-preview-fullscreen");

  const updateState = () => {
    const active = isFullscreen();
    screen.classList.toggle("is-preview-fullscreen", active && document.fullscreenElement !== screen);
    toggle.classList.toggle("is-active", active);
    toggle.setAttribute("aria-label", active ? "退出全屏预览" : "全屏预览");
  };

  toggle.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement === screen) {
        await document.exitFullscreen();
      } else if (screen.requestFullscreen) {
        await screen.requestFullscreen();
      } else {
        screen.classList.toggle("is-preview-fullscreen");
      }
    } catch (error) {
      screen.classList.toggle("is-preview-fullscreen");
    }

    updateState();
  });

  document.addEventListener("fullscreenchange", updateState, { once: false });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && screen.classList.contains("is-preview-fullscreen")) {
      screen.classList.remove("is-preview-fullscreen");
      updateState();
    }
  });
}

function hydratePetImages() {
  const images = Array.from(appRoot.querySelectorAll(".pet-preview img[data-src]"));
  const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 1));

  images.forEach((image, index) => {
    window.setTimeout(() => {
      if (!image.isConnected || !image.dataset.src) return;
      schedule(() => {
        if (!image.isConnected || !image.dataset.src) return;
        const src = image.dataset.src;
        const reveal = () => {
          if (!image.isConnected) return;
          delete image.dataset.src;
          delete image.dataset.loading;
        };

        image.dataset.loading = "true";
        image.addEventListener("load", reveal, { once: true });
        image.addEventListener(
          "error",
          () => {
            delete image.dataset.loading;
          },
          { once: true },
        );
        image.src = src;

        if (image.complete && image.naturalWidth > 0) {
          reveal();
        }
      });
    }, index * 80);
  });
}

function openMessageDialog(title, body) {
  dialogTitle.textContent = title;
  dialogBody.textContent = body;
  dialogActions.replaceChildren();

  if (typeof messageDialog.showModal === "function") {
    messageDialog.showModal();
    return;
  }

  alert(`${title}\n${body}`);
}

function openMailboxDialog() {
  openMessageDialog(uiText.mailboxTitle, uiText.mailboxBody);

  const confirmButton = document.createElement("button");
  confirmButton.type = "button";
  confirmButton.className = "dialog-confirm";
  confirmButton.textContent = uiText.mailboxAction;
  confirmButton.addEventListener("click", () => {
    messageDialog.close();
    window.open(mailboxFormUrl, "_blank", "noopener,noreferrer");
  });

  dialogActions.append(confirmButton);
}

mailboxButton.addEventListener("click", () => {
  openMailboxDialog();
});

privacyButton.addEventListener("click", () => {
  openMessageDialog(uiText.materialTitle, uiText.materialBody);
});

document.querySelectorAll(".site-header [data-route]").forEach((control) => {
  control.addEventListener("click", () => navigateTo(control.dataset.route));
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
