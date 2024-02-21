import * as Og from "@wevm/vercel-og";
import { type HonoElement, toReactNode } from "./utils.js";

export class ImageResponse extends Og.ImageResponse {
  constructor(
    element: HonoElement,
    options?: ConstructorParameters<typeof Og.ImageResponse>[1],
  ) {
    super(toReactNode(element), options);
  }
}

export const unstable_createNodejsStream = (
  element: HonoElement,
  options?: Parameters<typeof Og.unstable_createNodejsStream>[1],
) => Og.unstable_createNodejsStream(toReactNode(element), options);
