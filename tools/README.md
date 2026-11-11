# tools/

Needs `python3` and `node`. Run from the repo root.

- `python3 tools/build.py` writes `data.js` from `worlds/` and `src/data.template.js`; `--check` exits 1 if `data.js` is out of date.
- `python3 tools/check.py` is the validation suite (exit 1 on any failure). Run it before every commit.
- `tools/scene_lib.py` is a library for scripted edits: `State()` parses `data.js`; `scene_world()` rebuilds a world as scenes with matched sets; `write_world_files()` writes the result back to `worlds/`; `harness()` runs the real quick-page prompt code for every world and tension; `commit_many()` makes one atomic commit (set `GITHUB_TOKEN` in the environment; never in a file).

Environment: `COUPLES_ROOT` points the tools at another checkout (default: the repo these tools are in). Files missing locally are read from GitHub.
