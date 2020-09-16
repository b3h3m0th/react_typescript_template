import { decorate, observable, action } from "mobx";

export class ExampleStore {
  exampleValue: boolean = true;

  toggleExampleValue: () => void = () => {
    this.exampleValue = !this.exampleValue;
  };
}

decorate(ExampleStore, {
  exampleValue: observable,
  toggleExampleValue: action,
});

export const exampleStore = new ExampleStore();
