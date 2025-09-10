// plugins/globalHelpers.js
import { h } from "vue"

export default {
    install(app) {
        // === Auth helper ===
        app.config.globalProperties.$auth = {
            login(token) {
                localStorage.setItem("accessToken", token)
            },
            logout() {
                localStorage.removeItem("accessToken")
            },
            getAccessToken() {
                return localStorage.getItem("accessToken")
            },
            isLoggedIn() {
                return !!localStorage.getItem("accessToken")
            },
        }

        // === renderIcon helper ===
        // Usage:
        // - SVG string → renderIcon("svg", "<svg ...>")
        // - Imported Vue component (e.g. from @vicons) → renderIcon("component", SomeIcon)
        app.config.globalProperties.$renderIcon = function (type, value) {
            if (type === "svg" && typeof value === "string") {
                return () => h("span", { innerHTML: value, style: "display:inline-flex;align-items:center;" })
            }
            if (type === "component" && value) {
                return () => h(value, { style: "display:inline-flex;align-items:center;" })
            }
            return undefined
        }
    },
}
