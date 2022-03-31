let blink

let element

let value

const blinkFn = (el, [fColor, sColor]) => {
  let flag = true
  blink = setInterval(() => {
    el.style.color = flag ? fColor : sColor
    flag = !flag
  }, 500)
}

const mouseover = event => {
  clearInterval(blink)
}

const mouseout = event => {
  blinkFn(element, value)
}

export default {
  mounted(el, binding) {
    element = el
    value = binding.value

    el.addEventListener('mouseover', mouseover)
    el.addEventListener('mouseout', mouseout)

    if (binding.modifiers.blink) {
      blinkFn(element, value)
    } else {
      el.style[binding.arg] = binding.value
    }
  },

  updated(el, binding) {
    el.style[binding.arg] = binding.value
  },

  unmounted(el, binding) {
    clearInterval(blink)
    el.removeEventListener(mouseover)
  },
}