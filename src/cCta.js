import { LightningElement, api } from "lwc";

export default class CCta extends LightningElement {
  @api text = "CTA component";
  @api url = "";
  @api secondary = false;
  @api ghost = false;
  @api disabled = false;
  @api icon = false;
  @api iconleft = false;
  @api icononly = false;
  @api newtab = false;

  get tabProp() {
    return this.newtab ? "_blank" : "_self";
  }

  get isDisabled() {
    return this.disabled ? "disabled" : "";
  }

  get isIconOnly() {
    return this.icononly ? "sr-only" : "";
  }

  get iconProperties() {
    let _displayIcon = false;

    if (this.icon && !this.iconleft) {
      _displayIcon = true;
    }

    return _displayIcon;
  }

  get isLeftIcon() {
    return this.iconleft ? true : false;
  }

  get classes() {
    const arr = [
      "cta",
      this.secondary ? "-secondary" : "",
      this.ghost ? "-ghost" : "",
      this.disabled ? "-disabled" : "",
      this.icononly ? "-iconOnly" : "",
      this.iconleft ? "-iconLeft" : "",
    ];

    return arr.join(" ");
  }
}
