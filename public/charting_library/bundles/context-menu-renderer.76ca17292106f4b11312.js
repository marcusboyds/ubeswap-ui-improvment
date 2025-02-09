;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['context-menu-renderer'],
  {
    R5JZ: function (e, t, n) {
      'use strict'
      function o(e, t, n, o, r) {
        function i(r) {
          if (e > r.timeStamp) return
          const i = r.target
          void 0 !== n && null !== t && null !== i && i.ownerDocument === o && (t.contains(i) || n(r))
        }
        return (
          r.click && o.addEventListener('click', i, !1),
          r.mouseDown && o.addEventListener('mousedown', i, !1),
          r.touchEnd && o.addEventListener('touchend', i, !1),
          r.touchStart && o.addEventListener('touchstart', i, !1),
          () => {
            o.removeEventListener('click', i, !1),
              o.removeEventListener('mousedown', i, !1),
              o.removeEventListener('touchend', i, !1),
              o.removeEventListener('touchstart', i, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return o
      })
    },
    Sn4D: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var o = n('q1tI'),
        r = n.n(o),
        i = n('Eyy1'),
        s = n('TSYQ'),
        c = n('x0D+'),
        a = n('Nkvk'),
        u = n('AiMB'),
        l = n('mkWe'),
        d = n('qFKp'),
        h = n('X0gx'),
        v = n('sHQ4')
      function m(e) {
        const { position: t, onClose: n, children: m, className: f, theme: p = v } = e,
          w = Object(i.ensureNotNull)(Object(o.useContext)(l.a)),
          [g, b] = Object(o.useState)(0),
          y = Object(o.useRef)(null),
          E = Object(o.useContext)(h.a)
        return (
          Object(o.useEffect)(() => {
            var e
            return (
              null === (e = y.current) || void 0 === e || e.focus({ preventScroll: !0 }),
              E.subscribe(w, n),
              Object(a.setFixedBodyState)(!0),
              d.CheckMobile.iOS() && Object(c.disableBodyScroll)(Object(i.ensureNotNull)(y.current)),
              b(w.addDrawer()),
              () => {
                E.unsubscribe(w, n)
                const e = w.removeDrawer()
                d.CheckMobile.iOS() && Object(c.enableBodyScroll)(Object(i.ensureNotNull)(y.current)),
                  0 === e && Object(a.setFixedBodyState)(!1)
              }
            )
          }, []),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(
              'div',
              { className: s(v.wrap, v['position' + t]) },
              g === w.currentDrawer && r.a.createElement('div', { className: v.backdrop, onClick: n }),
              r.a.createElement(
                'div',
                {
                  className: s(v.drawer, p.drawer, v['position' + t], f),
                  ref: function (e) {
                    y.current = e
                  },
                  tabIndex: -1,
                  onScroll: function (e) {
                    e.stopPropagation()
                  },
                  'data-name': e['data-name'],
                },
                m
              )
            )
          )
        )
      }
    },
    cbq4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContextMenuRenderer', function () {
          return c
        })
      var o = n('q1tI'),
        r = n('i8i4'),
        i = n('xRqE'),
        s = n('Ialn')
      class c {
        constructor(e, t, n, r) {
          ;(this._root = null),
            (this._isShown = !1),
            (this._props = {
              isOpened: !1,
              items: e,
              position: { x: 0, y: 0 },
              menuStatName: t.statName,
              mode: t.mode,
              'data-name': t['data-name'],
            }),
            (this._onDestroy = n),
            (this._onShow = r),
            (this._activeElement = document.activeElement),
            (this._returnFocus = t.returnFocus),
            (this._takeFocus = t.takeFocus),
            (this._menuElementRef = o.createRef())
        }
        show(e, t, n) {
          this._onShow && this._onShow(),
            (this._isShown = !0),
            this._render(
              Object.assign(Object.assign({}, this._props), {
                position: (t, o) => {
                  'function' == typeof e && (e = e(t, o)),
                    e.touches &&
                      e.touches.length > 0 &&
                      (e = { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY })
                  return {
                    x: !n && Object(s.isRtl)() ? e.clientX - t : e.clientX,
                    y: e.clientY,
                    overrideHeight: e.overrideHeight,
                  }
                },
                isOpened: !0,
                onClose: () => {
                  this.hide(), this.destroy()
                },
                doNotCloseOn: t,
                takeFocus: this._takeFocus,
                menuElementReference: this._menuElementRef,
              })
            )
        }
        hide() {
          ;(this._isShown = !1), this._render(Object.assign(Object.assign({}, this._props), { isOpened: !1 }))
        }
        isShown() {
          return this._isShown
        }
        destroy() {
          ;(this._isShown = !1),
            this._root &&
              (r.unmountComponentAtNode(this._root), document.body.removeChild(this._root), (this._root = null)),
            this._onDestroy && this._onDestroy(),
            this._returnFocus && this._activeElement instanceof HTMLElement && this._activeElement.focus()
        }
        _render(e) {
          this._root ||
            ((this._root = document.createElement('span')),
            (this._root.className = 'context-menu-wrapper'),
            document.body.appendChild(this._root)),
            r.render(o.createElement(i.a, e), this._root)
        }
      }
    },
    hn2c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'
    },
    mkWe: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return s
        })
      var o = n('q1tI'),
        r = n.n(o)
      class i extends r.a.PureComponent {
        constructor(e) {
          super(e),
            (this._addDrawer = () => {
              const e = this.state.currentDrawer + 1
              return this.setState({ currentDrawer: e }), e
            }),
            (this._removeDrawer = () => {
              const e = this.state.currentDrawer - 1
              return this.setState({ currentDrawer: e }), e
            }),
            (this.state = { currentDrawer: 0 })
        }
        render() {
          return r.a.createElement(
            s.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.currentDrawer,
              },
            },
            this.props.children
          )
        }
      }
      const s = r.a.createContext(null)
    },
    sHQ4: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-164vy-kj',
        positionBottom: 'positionBottom-164vy-kj',
        backdrop: 'backdrop-164vy-kj',
        drawer: 'drawer-164vy-kj',
        positionLeft: 'positionLeft-164vy-kj',
      }
    },
    'x0D+': function (e, t, n) {
      var o, r, i
      ;(r = [t]),
        void 0 ===
          (i =
            'function' ==
            typeof (o = function (e) {
              'use strict'
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
                  return n
                }
                return Array.from(e)
              }
              Object.defineProperty(e, '__esModule', { value: !0 })
              var n = !1
              if ('undefined' != typeof window) {
                var o = {
                  get passive() {
                    n = !0
                  },
                }
                window.addEventListener('testPassive', null, o), window.removeEventListener('testPassive', null, o)
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                s = !1,
                c = -1,
                a = void 0,
                u = void 0,
                l = function (e) {
                  return i.some(function (t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                  })
                },
                d = function (e) {
                  var t = e || window.event
                  return !!l(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                },
                h = function () {
                  setTimeout(function () {
                    void 0 !== u && ((document.body.style.paddingRight = u), (u = void 0)),
                      void 0 !== a && ((document.body.style.overflow = a), (a = void 0))
                  })
                }
              ;(e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
                    )
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e
                    })
                  ) {
                    var h = { targetElement: e, options: o || {} }
                    ;(i = [].concat(t(i), [h])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length && (c = e.targetTouches[0].clientY)
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, i
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (i = (n = t).targetTouches[0].clientY - c),
                          !l(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < i) ||
                            ((r = o) && r.scrollHeight - r.scrollTop <= r.clientHeight && i < 0)
                              ? d(n)
                              : n.stopPropagation()))
                      }),
                      s || (document.addEventListener('touchmove', d, n ? { passive: !1 } : void 0), (s = !0))
                  }
                } else {
                  ;(m = o),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!m && !0 === m.reserveScrollBarGap,
                          t = window.innerWidth - document.documentElement.clientWidth
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight), (document.body.style.paddingRight = t + 'px'))
                      }
                      void 0 === a && ((a = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
                    })
                  var v = { targetElement: e, options: o || {} }
                  i = [].concat(t(i), [v])
                }
                var m
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (i.forEach(function (e) {
                        ;(e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null)
                      }),
                      s && (document.removeEventListener('touchmove', d, n ? { passive: !1 } : void 0), (s = !1)),
                      (i = []),
                      (c = -1))
                    : (h(), (i = []))
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                      )
                    ;(e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e
                      })),
                      s &&
                        0 === i.length &&
                        (document.removeEventListener('touchmove', d, n ? { passive: !1 } : void 0), (s = !1))
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (h(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e
                        }))
                })
            })
              ? o.apply(t, r)
              : o) || (e.exports = i)
    },
  },
])
