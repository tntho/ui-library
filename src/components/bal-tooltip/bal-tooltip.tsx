import {Component, h, Host, Prop} from "@stencil/core";

@Component({
  tag: "bal-tooltip",
  styleUrl: "bal-tooltip.scss",
  shadow: true,
})
export class BalTooltip {

  /**
   * Tooltip text
   */
  @Prop() text: string;

  // FIXME: add info icon
  render() {
    return (
      <Host>
        <button class="is-primary has-tooltip-right" data-tooltip={this.text}>i</button>
      </Host>
    );
  }

}
