import React from "react"
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>,
  ])
}
