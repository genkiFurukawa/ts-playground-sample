```
name: Playwright Tests

on:
  workflow_dispatch:
    inputs:
      environment:
        description: "Environment to test (e.g., staging, production)"
        required: true
        default: "staging"

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      # 1. リポジトリをチェックアウト
      - name: Checkout repository
        uses: actions/checkout@v3

      # 2. Node.js のセットアップ
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      # 3. 依存関係をインストール
      - name: Install dependencies
        run: npm install

      # 4. テストを実行
      - name: Run Playwright Tests
        run: |
          SERVER_FILE=servers-${{ inputs.environment }}.json npx playwright test --reporter=html --project=chromium
```

==

```
Inside that directory, you can run several commands:

yarn playwright test
Runs the end-to-end tests.

yarn playwright test --ui
Starts the interactive UI mode.

yarn playwright test --project=chromium
Runs the tests only on Desktop Chrome.

yarn playwright test example
Runs the tests in a specific file.

yarn playwright test --debug
Runs the tests in debug mode.

yarn playwright codegen
Auto generate tests with Codegen.

We suggest that you begin by typing:

    yarn playwright test

And check out the following files:

- ./tests/example.spec.ts - Example end-to-end test
- ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
- ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
✨ Done in 8.45s.
```
