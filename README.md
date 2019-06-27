# @goa/uuid

[![npm version](https://badge.fury.io/js/%40goa%2Fuuid.svg)](https://npmjs.org/package/@goa/uuid)

`@goa/uuid` is a [fork](https://github.com/kelektiv/node-uuid) of Simple, fast generation of RFC4122 UUIDS written in ES6.

```sh
yarn add @goa/uuid
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`v4(options?: UuidConfig, buffer?: Array|Buffer, offset?: number)`](#v4options-uuidconfigbuffer-arraybufferoffset-number-void)
  * [`_goa.UuidConfig`](#type-_goauuidconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function from the `v4` file:

```js
import uuid from '@goa/uuid/v4'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `v4(`<br/>&nbsp;&nbsp;`options?: UuidConfig,`<br/>&nbsp;&nbsp;`buffer?: Array|Buffer,`<br/>&nbsp;&nbsp;`offset?: number,`<br/>`): void`

Generate and return a RFC4122 v4 UUID.

__<a name="type-_goauuidconfig">`_goa.UuidConfig`</a>__: Optional uuid state to apply.

|  Name  |                   Type                    |                                  Description                                  |
| ------ | ----------------------------------------- | ----------------------------------------------------------------------------- |
| random | <em>!Array&lt;number&gt;</em>             | Array of 16 numbers (0-255) to use in place of randomly generated values.     |
| rng    | <em>function(): !Array&lt;number&gt;</em> | Random # generator function that returns an Array[16] of byte values (0-255). |

```js
/* alanode example/ */
import uuid from '@goa/uuid/v4'

const res = uuid()
console.log(res)
```
```
3a1d3879-5b1a-4189-8207-32b037ec37de
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Original work by [Robert Kieffer](https://github.com/kelektiv/node-uuid/blob/master/LICENSE.md) and other contributors.

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>