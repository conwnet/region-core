# region-core

[![version](https://img.shields.io/npm/v/region-core.svg?style=flat-square)](http://npm.im/region-core)
[![npm downloads](https://img.shields.io/npm/dm/region-core.svg?style=flat-square)](https://www.npmjs.com/package/region-core)
[![codecov](https://codecov.io/gh/regionjs/region-core/branch/develop/graph/badge.svg)](https://codecov.io/gh/regionjs/region-core)
[![MIT License](https://img.shields.io/npm/l/region-core.svg?style=flat-square)](http://opensource.org/licenses/MIT)

region-core 是一个 React 渐进式状态管理框架，你可以在使用 react state，redux 的同时使用它，并获得开发的便利。

[English](https://github.com/regionjs/region-core/blob/master/docs/README.md) | 中文

| Package | Version | Docs | Description |
| --- | --- | --- | --- |
| [region-core](https://github.com/regionjs/region-core) | [![version](https://img.shields.io/npm/v/region-core.svg?style=flat-square)](http://npm.im/region-core) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-core/blob/master/docs/Document.md) | Region 的核心，提供 set, load & useProps |
| [region-shortcut](https://github.com/regionjs/region-shortcut) | [![version](https://img.shields.io/npm/v/region-shortcut.svg?style=flat-square)](http://npm.im/region-shortcut) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-shortcut/blob/master/README.md) | region-core 的封装，提供全局的 set, load & useProps |
| [region-form](https://github.com/regionjs/region-form) | [![version](https://img.shields.io/npm/v/region-form.svg?style=flat-square)](http://npm.im/region-form) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-form/blob/master/README.md) | RegionForm，bindWith 可以绑定任何 ant-design 表单组件 |

## Get Started

- 安装

```bash
npm i region-core
```

- 使用 region 创建一个组件

```jsx harmony
import { createRegion } from 'region-core';

const region = createRegion('initialValue');

const handleChange = e => region.set(e.target.value);

const Component = () => {
  const value = region.useValue();
  return <input value={value} onChange={handleChange} />;
};
```

- 使用 region 请求数据

```jsx harmony
import { createRegion } from 'region-core';

const region = createRegion();

const loadUser = region.loadBy(asyncFuncion);

// call loadUser in application lifecycle
loadUser({userId: 1});

const Component = () => {
  const value = region.useValue();
  const loading = region.useLoading();
  const error = region.useError();
  const fetchTime = region.useFetchTime();
  const { loading, error, fetchTime, value } = region.useProps();

  return <div>{value}</div>;
}
```

## 文档

[中文文档和最佳实践](https://github.com/regionjs/region-core/blob/master/docs/Document-zh_CN.md)

[迁移指南](https://github.com/regionjs/region-core/blob/master/docs/Migrate-zh_CN.md)

[更新日志](https://github.com/regionjs/region-core/blob/master/docs/CHANGELOG.md)

[征求意见(rfcs)](https://github.com/regionjs/rfcs/issues)

## 示例

[在线示例](https://regionjs.github.io/region-core/)

```bash
git clone https://github.com/regionjs/region-core.git
cd example
npm i
npm start
```

[服务端渲染: NextJs with Region](https://codesandbox.io/s/region-ssr-6xprd)
