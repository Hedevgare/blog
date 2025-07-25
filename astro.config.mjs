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
        useDarkModeMediaQuery: false,
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
                editorActiveTabIndicatorTopColor: "#4ABCCA",
                editorActiveTabBackground: "#0c1021",
                editorActiveTabForeground: "#4ABCCA",
                editorActiveTabIndicatorBottomColor: "#0c1021",
                editorTabBarBorderBottomColor: "#020617",
                editorTabBarBackground: "#020617",
                editorBackground: "#0c1021",
                terminalBackground: "#0c1021",
                terminalTitlebarBackground: "#020617",
                terminalTitlebarDotsForeground: "#4ABCCA",
                terminalTitlebarDotsOpacity: 0.5,

                tooltipSuccessBackground: "#4ABCCA",
                tooltipSuccessForeground: "#0c1021",
                
                frameBoxShadowCssValue: 0,
            },
            codeFontFamily: "Ubuntu Sans Mono",
            uiFontFamily: "Ubuntu Sans Mono",
            borderColor: "#0c1021",
            borderRadius: 0,
        }
    })]
});