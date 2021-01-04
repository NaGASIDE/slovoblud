let text;
/** @param {MouseEvent} e */
function onMouseUp(e) {
  if (!(e.target instanceof HTMLElement))
    return null
  let text = document.getSelection().toString()
  let i = text.replace(new RegExp(`[бвгджзйклмнпрстфхцчшщьъ.!?,BCDFGHJKLMNPQRSTVWXYZ0123456789-]`, `gi`), ``)
  let t = i.split(` `).join(``).length;
  if(t > 0) {create(t)}
}
function XYSite(e) {
  x = e.pageX
  y = e.pageY
}
function create(t) {
  txt = document.createElement(`div`)
  txt.style.position = `absolute`
  txt.innerHTML = `<h1>${t}</h1>`
  txt.style.top = `${y - 5}px`
  txt.style.left = `${x}px`
  txt.style.userSelect = `none`
  document.body.appendChild(txt)
}
document.addEventListener('mouseup', onMouseUp)
document.addEventListener('click', XYSite)
document.addEventListener(`mousedown`, () => txt.remove())


