# Org

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Nx Buyruqlari Shpargalkasi (Uzbek Cheat Sheet)

Ushbu loyihada Angular va Nx bilan ishlashda eng ko'p ishlatiladigan buyruqlar va ularning vazifalari.

### 1. Ilovani ishlashga tushirish (Run)
```sh
# Admin ilovasini ishga tushirish (port: 4600)
npx nx serve admin

# Student ilovasini ishga tushirish
npx nx serve student

# Loyihalar bog'liqligini grafik ko'rinishida ko'rish
npx nx graph
```

### 2. Kutubxona (Library) yaratish
Eng ko'p ishlatiladigan buyruq:
```sh
# Yengil TypeScript kutubxonasi yaratish (Service, Interface, Utils uchun)
npx nx g @nx/js:lib <lib-nomi> --directory=libs/<path> --tags="scope:<app-nomi>,type:<lib-turi>" --bundler=none --unitTestRunner=none

# Angular Component kutubxonasi yaratish (UI uchun)
npx nx g @nx/angular:lib <lib-nomi> --directory=libs/<path> --tags="scope:<app-nomi>,type:ui"
```

**Flaglar bo'yicha izoh:**
- `--directory`: Kutubxona qaysi papkada yaratilishi (masalan: `libs/shared/env`)
- `--tags`: Loyihani guruhlash: `scope` (qaysi app ishlatadi) va `type` (vazifasi: `util`, `ui`, `data-access`, `feature`)
- `--bundler=none`: Kutubxona uchun alohida builder qo'shmaslik (Build vaqtini tejaydi)
- `--unitTestRunner=none`: Hozircha Unit test fayllarini yaratmaslik

### 3. Kutubxonani ko'chirish yoki o'chirish
```sh
# Kutubxonani boshqa papkaga ko'chirish (avtomatik importlarni to'g'irlaydi)
npx nx g @nx/workspace:move --project <eski-nomi> --destination libs/<yangi-yo'l>

# Kutubxonani butkul o'chirish
npx nx g @nx/workspace:remove --projectName=<lib-nomi>
```

### 4. Transloco (Ko'p tillik) o'rnatish
```sh
npx nx g @jsverse/transloco:ng-add
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
