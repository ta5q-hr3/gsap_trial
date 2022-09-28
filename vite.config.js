// vite configuration
export default {

  // config of options are...

  server: {
    port:8888
  },

  // "npm run build" output place setting. ... set output distribution directry
  build: {
    outDir: "./dist",
  },

  // base directory setting. ここで指定するパスが vite 実行時(プレビューする時のindex)の起点になります。
  base: "./",

}
