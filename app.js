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
    id: "svt",
    name: "SVT Pets",
    group: "SVT",
    version: "1.0.2",
    tag: "svt-v1.0.2",
    status: "Latest release",
    summary:
      "SVT 桌宠合集现已发布，包含 13 只角色。Windows 现提供 v1.0.2 修复版与 v1.0.1 保留版双入口。",
    docPath: "docs/svt.txt",
    releaseNotePath: "docs/svt.md",
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
];

const platforms = [
  {
    key: "windows",
    label: "Windows Setup 版",
    hint: "推荐 Windows 10/11",
    meta: "安装包 .exe",
  },
  {
    key: "macArm",
    label: "macOS ARM64 版",
    hint: "Apple Silicon / M 系列",
    meta: "磁盘映像 .dmg",
  },
  {
    key: "macX64",
    label: "macOS x64 版",
    hint: "Intel Mac",
    meta: "磁盘映像 .dmg",
  },
];

const groupButtons = document.querySelector("#groupButtons");
const selectedStatus = document.querySelector("#selectedStatus");
const selectedTitle = document.querySelector("#selectedTitle");
const selectedVersion = document.querySelector("#selectedVersion");
const selectedSummary = document.querySelector("#selectedSummary");
const usageDownload = document.querySelector("#usageDownload");
const usageView = document.querySelector("#usageView");
const downloadCards = document.querySelector("#downloadCards");
const downloadHint = document.querySelector("#downloadHint");
const privacyButton = document.querySelector("#privacyButton");
const messageDialog = document.querySelector("#messageDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogBody = document.querySelector("#dialogBody");
const dialogClose = document.querySelector("#dialogClose");
const usageDialog = document.querySelector("#usageDialog");
const usageDialogTitle = document.querySelector("#usageDialogTitle");
const usageDialogBody = document.querySelector("#usageDialogBody");
const usageDialogClose = document.querySelector("#usageDialogClose");
let currentApp = apps[0];

function releaseUrl(app, filename) {
  if (/^https?:\/\//i.test(filename)) {
    return filename;
  }

  return `https://github.com/${repository.owner}/${repository.repo}/releases/download/${app.tag}/${encodeURIComponent(filename)}`;
}

function renderButtons(activeId) {
  groupButtons.innerHTML = apps
    .map(
      (app) => `
        <button
          class="group-button"
          type="button"
          data-app="${app.id}"
          aria-selected="${app.id === activeId}"
        >
          <strong>${app.group}</strong>
          <span>${app.status} · ${app.version}</span>
        </button>
      `,
    )
    .join("");
}

function updateUsageActions(app) {
  if (!app.docPath) {
    usageDownload.removeAttribute("href");
    usageDownload.removeAttribute("download");
    usageDownload.setAttribute("aria-disabled", "true");
    usageDownload.setAttribute("aria-label", "暂无使用说明");
  } else {
    usageDownload.href = app.docPath;
    usageDownload.download = `${app.id}-使用说明.txt`;
    usageDownload.removeAttribute("aria-disabled");
    usageDownload.setAttribute("aria-label", `下载 ${app.group} 使用说明`);
  }

  if (!app.releaseNotePath) {
    usageView.setAttribute("aria-disabled", "true");
    usageView.disabled = true;
    usageView.setAttribute("aria-label", "暂无使用说明");
  } else {
    usageView.removeAttribute("aria-disabled");
    usageView.disabled = false;
    usageView.setAttribute("aria-label", `阅览 ${app.group} 使用说明`);
  }
}

function escapeHtml(value) {
  return value
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
  const app = currentApp;

  if (!app.releaseNotePath) return;

  usageDialogTitle.textContent = `${app.group} 使用说明`;
  usageDialogBody.innerHTML = "<p>正在加载使用说明...</p>";

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

function renderApp(app) {
  selectedStatus.textContent = app.status;
  selectedTitle.textContent = app.name;
  selectedVersion.textContent = app.version === "Preparing" ? "Preparing" : `v${app.version}`;
  selectedSummary.textContent = app.summary;
  downloadHint.textContent = app.tag ? "点击卡片直接下载" : "等待 release 附件";

  updateUsageActions(app);

  const cards = app.downloadOptions
    ? app.downloadOptions.map((option) => ({
        label: option.label,
        hint: option.hint,
        meta: option.meta,
        filename: option.filename,
      }))
    : platforms.map((platform) => ({
        key: platform.key,
        label: platform.label,
        hint: platform.hint,
        meta: platform.meta,
        filename: app.files[platform.key],
      }));

  downloadCards.innerHTML = cards
    .map((card) => {
      const enabled = Boolean(app.tag && card.filename);

      if (!enabled) {
        return `
          <div class="download-card disabled" aria-disabled="true">
            <div>
              <strong>${card.label}</strong>
              <small>${card.hint}</small>
            </div>
            <span>${app.unavailableText?.[card.key] || "即将发布"}</span>
          </div>
        `;
      }

      return `
        <a class="download-card" href="${releaseUrl(app, card.filename)}" download>
          <div>
            <strong>${card.label}</strong>
            <small>${card.hint}</small>
          </div>
          <span>${card.meta}</span>
        </a>
      `;
    })
    .join("");
}

function selectApp(appId) {
  const app = apps.find((item) => item.id === appId) || apps[0];
  currentApp = app;
  renderButtons(app.id);
  renderApp(app);
}

groupButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-app]");
  if (!button) return;
  selectApp(button.dataset.app);
});

selectApp(apps[0].id);

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
  openMessageDialog(
    "素材保护",
    "如果想要 spritesheet 图在 Codex 中直接养请 xhs 私信，sns 发布作品请标注来源。",
  );
});


dialogClose.addEventListener("click", () => {
  messageDialog.close();
});

usageView.addEventListener("click", openUsageDialog);

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

