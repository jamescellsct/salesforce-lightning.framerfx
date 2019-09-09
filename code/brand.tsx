import * as React from "react";
import * as System from "@salesforce/whatever";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";
import "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBrand: React.SFC = props => {
  return <System.Brand {...props} style={style} />;
};

export const Brand = withHOC(InnerBrand);

Brand.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Brand, {
  children: {
    title: "Children",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: {
    title: "ClassName",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: false, type: ControlType.Boolean },
  image: { title: "Image", defaultValue: false, type: ControlType.Boolean },
  backgroundSize: {
    title: "BackgroundSize",
    defaultValue: false,
    type: ControlType.Boolean
  },
  size: { title: "Size", defaultValue: false, type: ControlType.Boolean },
  style: { title: "Style", defaultValue: false, type: ControlType.Boolean },
  styleContainer: {
    title: "StyleContainer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  theme: { title: "Theme", defaultValue: false, type: ControlType.Boolean }
});
