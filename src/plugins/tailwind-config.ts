import type { LoadContext, Plugin } from '@docusaurus/types';
import type { PostCssOptions } from '@docusaurus/types';

export default function tailwindPlugin(
  context: LoadContext,
  options: Record<string, unknown>
): Plugin {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions: PostCssOptions): PostCssOptions {
      postcssOptions.plugins = [require('@tailwindcss/postcss')];
      return postcssOptions;
    },
  };
}
