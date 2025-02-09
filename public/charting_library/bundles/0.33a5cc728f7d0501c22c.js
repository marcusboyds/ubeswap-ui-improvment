;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    Nkvk: function (e, t, i) {
      'use strict'
      i.r(t)
      var n = i('4O8T'),
        s = i.n(n),
        o = i('qocr')
      const r = { desktop: 1 / 0, desktopHd: 1919, phone: 767, 'phone-vertical': 479, tablet: 1019 },
        d = (() => {
          let e
          return () => {
            var t
            if (void 0 === e) {
              const i = document.createElement('div'),
                n = i.style
              ;(n.visibility = 'hidden'),
                (n.width = '100px'),
                (n.msOverflowStyle = 'scrollbar'),
                document.body.appendChild(i)
              const s = i.offsetWidth
              i.style.overflow = 'scroll'
              const o = document.createElement('div')
              ;(o.style.width = '100%'), i.appendChild(o)
              const r = o.offsetWidth
              null === (t = i.parentNode) || void 0 === t || t.removeChild(i), (e = s - r)
            }
            return e
          }
        })()
      function c(e, t, i) {
        null !== e && e.style.setProperty(t, i)
      }
      function h(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t)
      }
      function a(e, t) {
        return parseInt(h(e, t))
      }
      i.d(t, 'setFixedBodyState', function () {
        return w
      }),
        i.d(t, 'mediaState', function () {
          return g
        })
      class l extends s.a {
        constructor() {
          super(),
            (this.width = 0),
            (this.height = 0),
            (this.device = null),
            (this.breakpoints = r),
            this._checkDevice(),
            window.addEventListener('resize', this._checkDevice),
            Object.entries(r)
              .sort(([e, t], [i, n]) => t - n)
              .forEach(([e, t], i, n) => {
                let s
                if (0 !== i) {
                  const [, e] = n[i - 1]
                  s = e + 1
                } else s = 0
                const o =
                  ((r = s),
                  (d = t) === 1 / 0
                    ? window.matchMedia(`(min-width: ${r}px)`)
                    : window.matchMedia(`(min-width: ${r}px) and (max-width: ${d}px)`))
                var r, d
                o.matches && this._setNewDevice(e),
                  o.addListener((t) => {
                    t.matches && (this._checkDevice(), this._setNewDevice(e))
                  })
              }),
            Object(o.a)(this._checkDevice.bind(this)),
            this.isPhoneSizeDevice.bind(this)
        }
        isPhoneSizeDevice() {
          return 'phone' === this.device || 'phone-vertical' === this.device
        }
        _checkDevice() {
          ;(this.width = window.innerWidth), (this.height = window.innerHeight)
        }
        _setNewDevice(e) {
          const t = this.device
          ;(this.device = e), this.trigger('changeDevice', [e, t])
        }
      }
      let u = 0,
        p = !1
      function w(e) {
        const { body: t } = document,
          i = t.querySelector('.widgetbar-wrap')
        if (e && 1 == ++u) {
          const e = h(t, 'overflow'),
            n = a(t, 'padding-right')
          'hidden' !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (c(i, 'right', d() + 'px'), (t.style.paddingRight = n + d() + 'px'), (p = !0)),
            t.classList.add('i-no-scroll')
        } else if (!e && u > 0 && 0 == --u && (t.classList.remove('i-no-scroll'), p)) {
          c(i, 'right', '0px')
          let e =
            window.widgetbar && window.widgetbar.resizerBridge.fullscreen.value()
              ? 0
              : (function (e) {
                  if (null === e) return
                  return a(e, 'width') - a(e, 'padding-left') - a(e, 'padding-right')
                })(i) || 0
          t.scrollHeight <= t.clientHeight && (e -= d()), (t.style.paddingRight = (e < 0 ? 0 : e) + 'px'), (p = !1)
        }
      }
      const g = new l()
    },
    jAh7: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'OverlapManager', function () {
          return o
        }),
        i.d(t, 'getRootOverlapManager', function () {
          return d
        })
      var n = i('Eyy1')
      class s {
        constructor() {
          this._storage = []
        }
        add(e) {
          this._storage.push(e)
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t)
        }
        has(e) {
          return this._storage.includes(e)
        }
        getItems() {
          return this._storage
        }
      }
      class o {
        constructor(e = document) {
          ;(this._storage = new s()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment())
        }
        setContainer(e) {
          const t = this._container,
            i = null === e ? this._document.createDocumentFragment() : e
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
            })
          })(t, i),
            (this._container = i)
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e)
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const i = this._windows.get(e)
          if (void 0 !== i) return i
          this.registerWindow(e)
          const n = this._document.createElement('div')
          if (
            ((n.style.position = t.position),
            (n.style.zIndex = this._index.toString()),
            (n.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length
            if (t.index >= e) this._container.appendChild(n)
            else if (t.index <= 0) this._container.insertBefore(n, this._container.firstChild)
            else {
              const e = this._container.childNodes[t.index]
              this._container.insertBefore(n, e)
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(n, this._container.firstChild)
              : this._container.appendChild(n)
          return this._windows.set(e, n), ++this._index, n
        }
        unregisterWindow(e) {
          this._storage.remove(e)
          const t = this._windows.get(e)
          void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
        }
        getZindex(e) {
          const t = this.ensureWindow(e)
          return parseInt(t.style.zIndex || '0')
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString()
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e)
        }
      }
      const r = new WeakMap()
      function d(e = document) {
        const t = e.getElementById('overlap-manager-root')
        if (null !== t) return Object(n.ensureDefined)(r.get(t))
        {
          const t = new o(e),
            i = (function (e) {
              const t = e.createElement('div')
              return (
                (t.style.position = 'absolute'),
                (t.style.zIndex = (150).toString()),
                (t.style.top = '0px'),
                (t.style.left = '0px'),
                (t.id = 'overlap-manager-root'),
                t
              )
            })(e)
          return r.set(i, t), t.setContainer(i), e.body.appendChild(i), t
        }
      }
    },
  },
])
