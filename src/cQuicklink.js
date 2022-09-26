import { LightningElement, api } from "lwc";

export default class CQuicklink extends LightningElement {
  @api cta = "Quicklink CTA";
  @api label = "Quicklink CTA Label";
  @api icon = "";
  @api newtab = "_self";

  get tabProp() {
    return this.newtab ? "_blank" : "_self";
  }

  get iconProperties() {
    return this.icon ? true : false;
  }
}
