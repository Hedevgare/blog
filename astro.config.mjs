import { defineConfig } from 'astro/config';
import rehypeExpressiveCode from 'rehype-expressive-code';
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

const rehypeExpressiveCodeOptions = {}

// https://astro.build/config
export default defineConfig({
    markdown: {
        syntaxHighlight: 'shiki',
        remarkPlugins: [],
        rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
        shikiConfig: {
            wrap: true
        }
    },
    integrations: [expressiveCode({
        plugins: [pluginLineNumbers()],
        defaultProps: {
            showLineNumbers: true,
        },
        frames: {
            showCopyToClipboardButton: true,
        },
        styleOverrides: {
            textMarkers: {
                markBackground: "#deefb724",
                markBorderColor: "#DEEFB7",
                lineMarkerLabelColor: "#141414"
            },
            frames: {
                editorActiveTabIndicatorTopColor: "#DEEFB7",
                editorTabBarBorderBottomColor: "#24292e",
                editorTabBarBackground: "#141414",
                frameBoxShadowCssValue: 0,
                tooltipSuccessBackground: "#DEEFB7",
                tooltipSuccessForeground: "#141414"
            },
            codeFontFamily: "Ubuntu Sans Mono",
            uiFontFamily: "Ubuntu Sans Mono",
            borderRadius: 0,
        }
    })]
});