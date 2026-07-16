# KPOPZOO Desktop Pets

KPOPZOO is a public download page for packaged desktop pet releases.

Recommended repo layout:

- Keep each app source repository private.
- Upload only installer artifacts to this repository's GitHub Releases.
- Keep spritesheets, generated art, references, and hatch-run folders out of this public repository.
- Update release data in `app.js` when a new version is published.

## Release asset naming

The page builds direct download links with this pattern:

```text
https://github.com/<owner>/kpopzoo/releases/download/<tag>/<asset-file-name>
```

When this page is hosted on GitHub Pages, `<owner>` and `<repo>` are detected automatically from the current URL. For local preview, links use `YOUR_GITHUB_USERNAME` as a placeholder.

## Suggested tag format

Use one tag per group release, for example:

- `newjeans-v1.0.1`
- `boynextdoor-v1.0.2`
- `txt-v1.0.2`
- `twice-v1.0.0`
- `riize-v1.0.3`

Upload the Windows Setup, macOS arm64, and macOS x64 installers as release assets under the matching tag.
