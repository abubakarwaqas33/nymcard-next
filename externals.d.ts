declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
  }

  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }