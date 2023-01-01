
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Linked list</h1>

<p align='center'>
  Linked list
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 1.3kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
  <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
  // yarn
  yarn add @amaui/linked-list

  // npm
  npm install @amaui/linked-list
```

### Use cases
- Implementation of stacks
- Efficient removal of elements
- Reduced memory fragmentation
- etc.

### Use

```javascript
  import AmauiLinkedList from '@amaui/linked-list';

  // Make a new linked list instance
  const amauiLinkedList = new AmauiLinkedList();

  // Add values
  amauiLinkedList.add(1).add(4);

  amauiStack.first;
  // 1

  amauiStack.last;
  // 4

  const value = amauiLinkedList.search(4);
  // AmauiNode { value: 4, ... }

  amauiLinkedList.remove(1);

  amauiStack.first;
  // 4

  amauiStack.length;
  // 1
```

### Dev

Install

```sh
  yarn
```

Test

```sh
  yarn test
```

### Prod

Build

```sh
  yarn build
```
