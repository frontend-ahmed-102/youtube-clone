import {defineConfig} from "vite";
import {resolve} from "path";
import { channel } from "diagnostics_channel";

export default defineConfig({
    base:"/youtube/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                channel: resolve(__dirname, 'channel.html'),
                watch: resolve(__dirname, 'watch.html'),
                login: resolve(__dirname, 'login.html'),
                signup: resolve(__dirname, 'signup.html'),
                'search-result': resolve(__dirname, 'search-result.html'),
                'history-log': resolve(__dirname, 'history-log.html'),
                'forget-password': resolve(__dirname, 'forget-password.html'),
            }
        }
    }
})
