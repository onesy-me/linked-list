/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import OnesyLinkedList from '../src';

group('OnesyLinkedList', () => {

  to('OnesyLinkedList', async () => {
    const value = new OnesyLinkedList();

    value.add(14);

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.OnesyLinkedList();

      value.add(14);

      return [value.first.value, value.length];
    });
    const valueNode = [value.first.value, value.length];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([14, 1]));
  });

  group('onesyLinkedList', async () => {

    to('empty', async () => {
      const value = new OnesyLinkedList();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        return [value.empty];
      });
      const valueNode = [value.empty];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([true]));
    });

    to('first', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.first.value];
      });
      const valueNode = [value.first.value];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1]));
    });

    to('last', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.last.value];
      });
      const valueNode = [value.last.value];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([14]));
    });

    to('array', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4, 14]]));
    });

    to('map', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueMap = value.map(item => item + 1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        const valueMap = value.map(item => item + 1);

        return [valueMap];
      });
      const valueNode = [valueMap];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[2, 5, 15]]));
    });

    to('forEach', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueForEach = [];

      value.forEach(item => valueForEach.push(item));

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        const valueForEach = [];

        value.forEach(item => valueForEach.push(item));

        return [valueForEach];
      });
      const valueNode = [valueForEach];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4, 14]]));
    });

    to('add', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4, 14]]));
    });

    to('addAtStart', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.addAtStart(114);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.addAtStart(114);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[114, 1, 4, 14]]));
    });

    to('addAtEnd', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.addAtEnd(114);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.addAtEnd(114);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4, 14, 114]]));
    });

    to('addAfter', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.addAfter(114, 1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.addAfter(114, 1);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4, 114, 14]]));
    });

    to('addBefore', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.addBefore(114, 1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.addBefore(114, 1);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 114, 4, 14]]));
    });

    to('update', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.update(4, 114);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.update(4, 114);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 114, 14]]));
    });

    to('updateAtIndex', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.updateAtIndex(114, 1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.updateAtIndex(114, 1);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 114, 14]]));
    });

    to('remove', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.remove(4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.remove(4);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 14]]));
    });

    to('removeFirst', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.removeFirst();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.removeFirst();

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[4, 14]]));
    });

    to('removeLast', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.removeLast();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.removeLast();

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4]]));
    });

    to('removeAtIndex', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.removeAtIndex(2);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.removeAtIndex(2);

        return [value.array];
      });
      const valueNode = [value.array];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[1, 4]]));
    });

    to('find', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.find(1).value];
      });
      const valueNode = [value.find(1).value];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4]));
    });

    to('findValue', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.findValue(4).value];
      });
      const valueNode = [value.findValue(4).value];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4]));
    });

    to('search', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.search(4).value];
      });
      const valueNode = [value.search(4).value];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4]));
    });

    to('includes', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.includes(14), value.includes(1114)];
      });
      const valueNode = [value.includes(14), value.includes(1114)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([true, false]));
    });

    to('indexOf', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        return [value.indexOf(14), value.indexOf(1114)];
      });
      const valueNode = [value.indexOf(14), value.indexOf(1114)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, -1]));
    });

    to('clear', async () => {
      const value = new OnesyLinkedList();

      value.add(1).add(4).add(14);

      value.clear();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyLinkedList();

        value.add(1).add(4).add(14);

        value.clear();

        return [value.empty, value.length];
      });
      const valueNode = [value.empty, value.length];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([true, 0]));
    });

  });

});
