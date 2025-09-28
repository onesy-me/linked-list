
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img width='auto' height='84' src='https://raw.githubusercontent.com/onesy-me/onesy/refs/heads/main/utils/images/logo.png' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Linked List</h1>

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

### Add

```sh
yarn add @onesy/linked-list
```

### Use cases
- Implementation of stacks
- Efficient removal of elements
- Reduced memory fragmentation
- etc.

### Use

```javascript
  import OnesyLinkedList from '@onesy/linked-list';

  // Make a new linked list instance
  const onesyLinkedList = new OnesyLinkedList();

  // Add values
  onesyLinkedList.add(1).add(4);

  onesyLinkedList.first;
  // 1

  onesyLinkedList.last;
  // 4

  const value = onesyLinkedList.search(4);
  // OnesyNode { value: 4, ... }

  onesyLinkedList.remove(1);

  onesyLinkedList.first;
  // 4

  onesyLinkedList.length;
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
