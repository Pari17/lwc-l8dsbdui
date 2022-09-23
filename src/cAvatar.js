import { LightningElement, api } from "lwc";

export default class CAvatar extends LightningElement {
  @api name = "";
  @api initials = "";
  @api imgsrc = "";

  get convertToInitials() {
    const names = this.name.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  }
}
