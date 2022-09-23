import { LightningElement, api } from "lwc";

export default class CTile extends LightningElement {
  @api title = "Tile Title";
  @api body = "Tile Body";
  @api cta = "Tile CTA";
  @api label = "Tile CTA Label";
  @api icon = "";
  @api newtab = "_self";

  get tabProp() {
    return this.newtab ? "_blank" : "_self";
  }

  get iconProperties() {
    return this.icon ? true : false;
  }
}
