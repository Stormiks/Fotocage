# Fotocage

## Развёртывание проекта
```
yarn install
```

### Компилирование и живая перезагрузка страниц, при изменениях
```
yarn serve
```

### Компилирование и минификация кода проекта
```
yarn build
```

### При разработке из под "Vusial Studio Code"

- Необходимо в корне проекта создать папку ".vscode" -> файл "settings.json"
- Внести следующую конфигурацию, для комфортной корректной работы с проектом:
```JSON
{
    // https://eslint.vuejs.org/user-guide/#editor-integrations (Visual Studio Code)
    "eslint.validate": [
        "vue",
        "javascript"
    ],

    "editor.formatOnSave": false,
    "vetur.validation.template": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // Для отлкючения парсера от "Type Sscript"
    "typescript.suggest.paths": false,
    "path-intellisense.autoSlashAfterDirectory": true,
    "path-intellisense.extensionOnImport": false,
    "path-intellisense.absolutePathToWorkspace": true,
    // Чтобы редактор подхватывал нужные алиасы и предлагах в подсказках
    "path-intellisense.mappings": {
        "~": "${workspaceRoot}",
        "@": "${workspaceRoot}/src",
        "@views": "${workspaceRoot}/src/views",
        "@assets": "${workspaceRoot}/src/assets",
        "@router": "${workspaceRoot}/src/router",
        "@components": "${workspaceRoot}/src/components"
      }
}
```

### В проекте используется, следующие готовые компоненты:
- Tailwindcss (https://tailwindcss.com/)
- Axios (https://github.com/axios/axios)
- Vue-axios (https://github.com/imcvampire/vue-axios)
- Vue-router (https://github.com/vuejs/vue-router)
- Vuex (https://github.com/vuejs/vuex)
