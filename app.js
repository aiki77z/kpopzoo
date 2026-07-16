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
    notes: [
      "启动后桌宠会出现在桌面，可拖动到喜欢的位置。",
      "托盘菜单可以管理显示、隐藏和退出。",
      "如果 Windows 安全提示拦截，请选择保留并确认这是你自己发布的安装包。",
    ],
    files: {
      windows: "NewJeans Pets Setup 1.0.1.exe",
      macArm: "NewJeans.Pets-1.0.1-arm64.dmg",
      macX64: "NewJeans.Pets-1.0.1-x64.dmg",
    },
  },
  {
    id: "boynextdoor",
    name: "BOYNEXTDOOR Pets",
    group: "BOYNEXTDOOR",
    version: "1.0.2",
    tag: "boynextdoor-v1.0.2",
    status: "Latest release",
    summary:
      "BOYNEXTDOOR 桌宠合集，保留多角色互动和轻量桌面陪伴体验。",
    notes: [
      "Windows 用户优先选择 Setup 安装包。",
      "macOS 安装包来自 release 附件，下载后拖入应用程序或直接打开。",
      "桌宠资源已经内置在安装包内，下载页不会公开 spritesheet 源文件。",
    ],
    files: {
      windows: "BOYNEXTDOOR-Pets-win11-Setup-1.0.2.exe",
      macArm: "BOYNEXTDOOR-Pets-mac-arm64-1.0.2.dmg",
      macX64: "BOYNEXTDOOR-Pets-mac-x64-1.0.2.dmg",
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
    version: "Preparing",
    tag: "",
    status: "Coming soon",
    summary:
      "BT21 桌宠合集正在整理中。安装包发布到 KPOPZOO Release 后，这里可以直接打开下载。",
    notes: [
      "当前先保留页面入口，方便之后补齐 release 附件。",
      "发布时只上传安装包，不公开源码和素材源文件。",
      "补齐文件名后，下载卡片会自动变成可点击状态。",
    ],
    files: {},
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
const usageNotes = document.querySelector("#usageNotes");
const downloadCards = document.querySelector("#downloadCards");
const downloadHint = document.querySelector("#downloadHint");

function releaseUrl(app, filename) {
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

function renderApp(app) {
  selectedStatus.textContent = app.status;
  selectedTitle.textContent = app.name;
  selectedVersion.textContent = app.version === "Preparing" ? "Preparing" : `v${app.version}`;
  selectedSummary.textContent = app.summary;
  downloadHint.textContent = app.tag ? "点击卡片直接下载" : "等待 release 附件";

  usageNotes.innerHTML = app.notes.map((note) => `<li>${note}</li>`).join("");

  downloadCards.innerHTML = platforms
    .map((platform) => {
      const filename = app.files[platform.key];
      const enabled = Boolean(app.tag && filename);

      if (!enabled) {
        return `
          <div class="download-card disabled" aria-disabled="true">
            <div>
              <strong>${platform.label}</strong>
              <small>${platform.hint}</small>
            </div>
            <span>即将发布</span>
          </div>
        `;
      }

      return `
        <a class="download-card" href="${releaseUrl(app, filename)}" download>
          <div>
            <strong>${platform.label}</strong>
            <small>${platform.hint}</small>
          </div>
          <span>${platform.meta}</span>
        </a>
      `;
    })
    .join("");
}

function selectApp(appId) {
  const app = apps.find((item) => item.id === appId) || apps[0];
  renderButtons(app.id);
  renderApp(app);
}

groupButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-app]");
  if (!button) return;
  selectApp(button.dataset.app);
});

selectApp(apps[0].id);
