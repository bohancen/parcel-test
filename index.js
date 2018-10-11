import "babel-polyfill"
let load = document.getElementById('load')
load.onclick=async function renderPage() {
  // 延迟加载请求页面。
  const {html} = await import('./render.js');
  console.log(html)
  document.getElementById('root').innerHTML = html
}
