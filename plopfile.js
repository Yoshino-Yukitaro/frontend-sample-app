import * as fs from 'fs';

export default function (plop) {
  const routes = fs.readdirSync('app/routes').map(routeName => ({ name: `routes/${routeName}`, value: `routes/${routeName}`}))

  plop.setGenerator('component', {
    description: 'react component',
    prompts: [
      {
        type: 'list',
        name: 'parentPath',
        message: '共通デザイン(ボタンやアイコンなど)はuiを、それ以外は該当するroutesを選択してください >',
        choices: [ { name: "ui", value: "ui" }, ...routes ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください >',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{parentPath}}/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'app/{{parentPath}}/{{pascalCase name}}/{{pascalCase name}}Presenter.tsx',
        templateFile: 'plop-templates/component/Presenter.tsx.hbs',
      },
      {
        type: 'add',
        path: 'app/{{parentPath}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'app/{{parentPath}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'app/{{parentPath}}/{{pascalCase name}}/{{camelCase name}}.module.scss',
        templateFile: 'plop-templates/component/component.module.scss.hbs',
      },
    ],
  });
}