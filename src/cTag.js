import { LightningElement, api } from "lwc";

export default class CTag extends LightningElement {
  @api status = "";

  get classes() {
    const arr = [
      "tag",
      this.status ? `-${this.status}` : "",
    ];

    return arr.join(" ");
  }
}
