import { html, css, LitElement } from "lit-element";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icon/iron-icon.js";

export class CourseCard extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 16px;
        display: block;
        border: solid 1px #dcdcdc;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
      :host:hover {
        box-shadow: var(
          --courses-course-card-hover-box-shadow,
          1px 1px 5px #dcdcdc
        );
      }
      a {
        text-decoration: var(--course-card-a-text-decoration);
        color: var(--course-card-a-color);
        display: var(--course-card-a-display, flex);
        width: var(--course-card-a-width, 100%);
        flex-direction: column;
        flex: 1 1 auto;
      }
      .card_wrap {
        display: var(--course-card-card-wrap-display, flex);
        flex-direction: var(
          --course-card-card-wrap-flex-direction,
          column
        );
        align-items: var(--course-card-card-wrap-align-items, center);
        height: 100%;
      }
      .card_body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1 1 auto;
        padding: 1.25rem;
      }
      .course-card--icon {
        width: 100%;
        height: 100%;
      }
      [part="course_number"],
      [part="course_number"] slot::slotted(*){
        font-size: var(--course-card--course-number--font-size, 1.75rem);
        text-transform: var(
          --course-card--course-number--text-transform
        );
        text-align: var(
          --course-card--course-number--text-align,
          center
        );
        line-height: var(--course-card--course-number--line-height, 1.4);
        margin: var(--course-card--course-number--margin, 0.5rem 1rem 0);
        font-weight: var(--course-card--course-number--font-weight, 400);
      }
      [part="course_title"],
      [part="course_title"] slot::slotted(*) {
        font-size: var(--course-card-course-name-font-size, 1.125rem);
        text-align: var(--course-card-course-name-text-align, center);
        margin: var(--course-card-course-name-margin, 0 1rem 1rem);
        line-height: 1.2;
      }
      [part="course_icon"] {
        background-color: var(
          --course-card-course-icon-background-color, #fff
        );
        border-radius: var(
          --course-card-course-icon-border-radius,
          50%
        );
        position: var(--course-card-course-icon-position, relative);
        margin: var(--course-card-course-icon-margin, 0 auto);
        border: var(--course-card-course-icon-border, solid);
        border-color: var(--course-card-course-icon-border-color);
        border-width: var(--course-card-course-icon-border-width, 5px);

        height: var(--course-card--course-icon--height, 100px);
        width: var(--course-card--course-icon--width, 100px);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      iron-icon {
        width: var(--course-card-iron-icon-width, 70px);
        height: var(--course-card-iron-icon-height, 70px);
        fill: var(--course-card-iron-icon-color);
      }
      [part = "course_image"] {
        width: var(--course-card--course-image--width, 100%);
        height: var(--course-card--course-image--width, 150px);
      }
      [part = "course_image"] + .card_body > [part = "course_icon"] {
        bottom: var(--course-card-course-icon-position-bottom, 67px);
        margin: var(--course-card-course-icon-margin, 0 auto -65px auto);
      }
      [part = "course_icon"] {
        background-repeat: var(
          --course-card-course-image-background-repeat,
          no-repeat
        );
        background-size: var(
          --course-card-course-image-background-size,
          cover
        );
        background-position: var(
          --course-card-course-image-background-position,
          right center
        );
        width: var(--course-card--course-icon--width, 80px);
        height: var(--course-card--course-icon--width, 80px);
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
       * Course Icon
       * Accepts iron-icons or url to image.
       * E.g. pets
       * E.g. https://unsplash.it/300
       * @see {@link https://www.webcomponents.org/element/@polymer/iron-icons/demo/demo/index.html}
       */
      icon: {
        type: String,
      },
      /**
       * Course Number
       * E.g. COURSE 100
       */
      number: {
        type: String,
      },
      /**
       * Course Title
       * E.g. Introduction to Course
       */
      title: {
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
    this.title = "Lorem Ipsum";
    this.counter = 5;
    this.__icon = "";
  }

  __increment() {
    this.counter += 1;
  }

  __checkFieldIsAvailable(field) {
    let slot = this[field];
    console.log(slot);
    if (typeof(slot) != "undefined" && slot !== "") {
      return true
    } else if (this.querySelector("[slot='${slot}']")) {
      return true
    }
    return false;
  }

  __checkFieldForURL(field) {
    console.log(field);
    try {
      new URL(field);
    } catch (_) {
      return false;
    }
    return true;
  }

  render() {
    const icon = this.__checkFieldIsAvailable("icon");
    const image = this.__checkFieldIsAvailable("image");

    return html`
        <div class="card_wrap">
        <a href="${this.url}" target="_blank">
          ${(image) ? html`
          <div
            part="course_image"
            style="background-image:url(${this.image})"
            alt="${this.alt}"
          ></div>
          ` : html``}
          <div class="card_body">
            ${(icon) ? html`
              <div part="course_icon">
                <slot name="icon">
                  ${this.__checkFieldForURL(this.icon) ?
                    html`<div class="course-card--icon" style="background-image:url(${this.icon})"></div>` :
                    html`<iron-icon icon="${this.icon}"></iron-icon>`
                  }
                </slot>
              </div>
            ` : html``}
            <div part="course_number">
              <slot name="title">${this.number}</slot>
            </div>
            <div part="course_title">
              <slot name="subtitle">${this.title}</slot>
            </div>
          </div>
          </a>
        </div>
    `;
  }
}
