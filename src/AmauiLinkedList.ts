import { TMethod } from '@onesy/models';

export interface IOnesyLinkedListNode {
  value: any;
  previous?: IOnesyLinkedListNode;
  next?: IOnesyLinkedListNode;
}

export class OnesyNode {

  public constructor(
    public value: any,
    public next?: IOnesyLinkedListNode,
    public previous?: IOnesyLinkedListNode
  ) { }

}

export default class OnesyLinkedList {
  public length = 0;

  public constructor(
    public main?: IOnesyLinkedListNode
  ) {

  }

  public get empty(): boolean { return this.length === 0; }

  public get first(): IOnesyLinkedListNode { return this.main; }

  public get last(): IOnesyLinkedListNode {
    if (!this.main) return;

    let element = this.main;

    while (element.next) element = element.next;

    return element;
  }

  public get array(): Array<any> {
    const response = [];

    let item = this.main;

    do {
      if (item?.value !== undefined) response.push(item.value);

      item = item?.next;
    }
    while (item?.value !== undefined);

    return response;
  }

  public map(method: TMethod): Array<any> { return this.array.map(method); }

  public forEach(method: TMethod): void { return this.array.forEach(method); }

  public add(value: any): OnesyLinkedList {
    const element = new OnesyNode(value);

    if (!this.main) this.main = element;
    else {
      const last = this.last;

      last.next = element;
    }

    this.length++;

    return this;
  }

  public addAtStart(value: any): OnesyLinkedList {
    const element = new OnesyNode(value);

    if (!this.first) this.main = element;
    else {
      const following = this.main;

      element.next = following;

      this.main = element;
    }

    this.length++;

    return this;
  }

  // alias
  public addAtEnd = this.add;

  public addAfter(value: any, index: number): OnesyLinkedList {
    const element = new OnesyNode(value);

    if (!this.main) this.main = element;
    else {
      const previous = this.find(index);

      if (previous) {
        element.next = previous.next;

        previous.next = element;

        this.length++;
      }
    }

    return this;
  }

  public addBefore(value: any, index: number): OnesyLinkedList {
    const element = new OnesyNode(value);

    if (!this.main) this.main = element;
    else {
      const previous = this.find(index - 1);
      const next = this.find(index);

      if (next) {
        if (previous) previous.next = element;

        element.next = next;

        previous.next = element;

        this.length++;
      }
    }

    return this;
  }

  public update(previousValue: any, value: any): OnesyLinkedList {
    const element = this.findValue(previousValue);

    if (element) element.value = value;

    return this;
  }

  public updateAtIndex(value: any, index: number): OnesyLinkedList {
    const element = this.find(index);

    if (element) element.value = value;

    return this;
  }

  public remove(value: any): OnesyLinkedList {
    if (this.length === 1 && this.main.value === value) return this.clear();

    if (this.main) {
      let previous = this.main;
      let item = this.main?.next;
      let element: OnesyNode;

      while (!element && item?.next) {
        if (item.value === value) {
          element = item;

          break;
        }

        previous = item;
        item = item?.next;
      }

      previous.next = element?.next;

      this.length--;
    }

    return this;
  }

  public removeFirst(): OnesyLinkedList {
    if (this.length <= 1) return this.clear();

    this.main = this.main.next;

    return this;
  }

  public removeLast(): OnesyLinkedList {
    if (this.length <= 1) return this.clear();

    if (this.main) {
      let previous = this.main;
      let item = this.main?.next;

      while (item?.next) {
        previous = item;
        item = item?.next;
      }

      if (previous) delete previous.next;

      this.length--;
    }

    return this;
  }

  public removeAtIndex(value: number): OnesyLinkedList {
    if (value < 0 || value > this.length - 1) return;

    if (value === 0) return this.removeFirst();

    if (this.main) {
      let previous = this.main;
      let item = this.main?.next;
      let index = 0;
      let element: OnesyNode;

      while (!element && item?.next) {
        index++;

        if (index === value) {
          element = item;

          break;
        }

        previous = item;
        item = item?.next;
      }

      previous.next = element?.next;

      this.length--;
    }

    return this;
  }

  public find(value: number): OnesyNode {
    if (value < 0 || value > this.length - 1) return;

    if (this.main) {
      let item = this.main;
      let index = 0;
      let element: OnesyNode;

      if (index === value) element = item;

      while (!element && item.next) {
        item = item.next;

        index++;

        if (index === value) element = item;
      }

      return element;
    }
  }

  public findValue(value: any): OnesyNode {
    if (this.main) {
      let item = this.main;
      let element: OnesyNode;

      while (!element && item.next) {
        if (item.value === value) element = item;

        item = item.next;
      }

      if (item.value === value) element = item;

      return element;
    }
  }

  public search = this.findValue;

  public indexOf(value: any): number {
    let index = 0;
    let item = this.main;
    let element: OnesyNode;

    if (value === this.main.value) return 0;

    while (!element && item.next) {
      item = item.next;

      index++;

      if (item.value === value) element = item;
    }

    if (item.value === value) element = item;

    return element ? index : -1;
  }

  public includes(value: any): boolean {
    const element = this.findValue(value);

    return !!element;
  }

  public clear(): OnesyLinkedList {
    delete this.main;

    this.length = 0;

    return this;
  }
}
