import { html, css, LitElement } from "lit-element";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icon/iron-icon.js";

export class CourseCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px #dcdcdc;
      }
      :host:hover {
        box-shadow: var(
          --haxtheme-courses-course-card-hover-box-shadow,
          1px 1px 5px #dcdcdc
        );
      }
      a {
        text-decoration: var(--haxtheme-course-card-a-text-decoration);
        color: var(--haxtheme-course-card-a-color);
        display: var(--haxtheme-course-card-a-display, block);
        width: var(--haxtheme-course-card-a-width, 100%);
      }
      #card_wrap {
        display: var(--haxtheme-course-card-card-wrap-display, flex);
        flex-direction: var(
          --haxtheme-course-card-card-wrap-flex-direction,
          column
        );
        align-items: var(--haxtheme-course-card-card-wrap-align-items, center);
      }
      [part="course_number"], 
      [part="course_number"] slot::slotted(*){
        font-size: var(--course-card--course-number--font-size, 28px);
        text-transform: var(
          --haxtheme-course-card-course-number-text-transform
        );
        line-height: var(--course-card--course-number--line-height, 1.4);
        margin: var(--course-card--course-number--margin, 0);
        font-weight: var(--course-card--course-number--font-weight, 400);
      }
      [part="course_name"],
      [part="course_name"] slot::slotted(*) {
        font-size: var(--haxtheme-course-card-course-name-font-size);
        text-align: var(--haxtheme-course-card-course-name-text-align, center);
        width: var(--haxtheme-course-card-course-name-width, 90%);
        margin: var(--haxtheme-course-card-course-name-margin, 0 0 15px 0);
        line-height: 1.2;
      }
      [part="course_icon"] {
        background-color: var(
          --haxtheme-course-card-course-icon-background-color, #fff
        );
        border-radius: var(
          --haxtheme-course-card-course-icon-border-radius,
          50%
        );
        position: var(--haxtheme-course-card-course-icon-position, relative);
        bottom: var(--haxtheme-course-card-course-icon-position-bottom, 50px);
        border: var(--haxtheme-course-card-course-icon-border, solid);
        border-color: var(--haxtheme-course-card-course-icon-border-color);
        border-width: var(--haxtheme-course-card-course-icon-border-width, 5px);
        margin: var(--haxtheme-course-card-course-icon-margin, 0 0 -40px 0);
        height: var(--course-card--course-icon--height, 100px);
        width: var(--course-card--course-icon--width, 100px);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      iron-icon {
        width: var(--haxtheme-course-card-iron-icon-width, 70px);
        height: var(--haxtheme-course-card-iron-icon-height, 70px);
        fill: var(--haxtheme-course-card-iron-icon-color);
      }
      #course_image {
        background-repeat: var(
          --haxtheme-course-card-course-image-background-repeat,
          no-repeat
        );
        background-size: var(
          --haxtheme-course-card-course-image-background-size,
          cover
        );
        background-position: var(
          --haxtheme-course-card-course-image-background-position,
          right center
        );
        width: var(--haxtheme-course-card-course-image-width, 100%);
        height: var(--haxtheme-course-card-course-image-height, 150px);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Course Image
       */
      image: {
        type: String,
      },
      /**
       * Image Alt Text
       */
      alt: {
        type: String,
      },
      /**
       * Course Number
       */
      number: {
        type: String,
      },
      /**
       * Course Icon
       */
      icon: {
        type: String,
      },
      /**
       * Course Name
       */
      name: {
        type: String,
      },
      /**
       * Course URL
       */
      url: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.title = "Hey there";
    this.counter = 5;
    this.__icon = "";
  }

  __increment() {
    this.counter += 1;
  }

  __checkIconIsAvailable() {
    if (this.icon !== "") {
      return true
    }
    else if (this.querySelector("[slot='icon']")) {
      return true
    }
    return false;
  }

  render() {
    const icon = this.__checkIconIsAvailable();
    return html`
      <a href="${this.url}">
        <div id="card_wrap">
          <div
            id="course_image"
            style="background-image:url(${this.image})"
            alt="${this.alt}"
          ></div>
          ${(icon) ? html`
            <div part="course_icon">
              <slot name="icon"><iron-icon icon="${this.icon}"></iron-icon></slot>
            </div>
          ` : html``}
          <div part="course_number">
            <slot name="title">${this.number}</slot>
          </div>
          <div part="course_name">
            <slot name="subtitle">${this.name}</slot>
          </div>
        </div>
      </a>
    `;
  }
}
