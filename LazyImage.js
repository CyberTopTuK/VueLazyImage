export default {
  functional: true,
  props: {
    source: {
      type: String,
      required: true
    }
  },
  render (h, { props }) {
    let imgErrFlag = false

    const img = h(
      'img',
      {
        class: imgErrFlag ? 'err-img' : null,
        'attrs': {
          'class': 'lazy-load-custom-name-img',
          'data-url': props.source,
          'alt': '_'
        },
        nativeOn: {
          error: imgErrFlag = true
        }
      }
    )
    return h(
      'figure',
      {
        directives: [{
          name: 'lazyload'
        }]
      },
      [img]
    )
  }
}
