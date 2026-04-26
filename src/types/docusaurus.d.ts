/// <reference types="@docusaurus/module-type-aliases" />

// 修复 React 19 中 Layout 组件的类型问题
declare module '@theme/Layout' {
  import type { ReactElement, ReactNode } from 'react';

  export interface Props {
    readonly children?: ReactNode;
    readonly noFooter?: boolean;
    readonly wrapperClassName?: string;
    readonly title?: string;
    readonly description?: string;
  }

  export default function Layout(props: Props): ReactElement;
}
