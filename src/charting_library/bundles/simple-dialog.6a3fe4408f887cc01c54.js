;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['simple-dialog'],
  {
    '+EG+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return r
        })
      var a = n('q1tI')
      class o extends a.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return a.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const r = a.createContext(null)
    },
    '+l/S': function (e, t, n) {},
    '/KDZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('q1tI')
      class o extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate()
            }),
            (this.state = { query: window.matchMedia(this.props.rule) })
        }
        componentDidMount() {
          this._subscribe(this.state.query)
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query))
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query)
        }
        render() {
          return this.props.children(this.state.query.matches)
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media ? { query: window.matchMedia(e.rule) } : null
        }
        _subscribe(e) {
          e.addListener(this._handleChange)
        }
        _unsubscribe(e) {
          e.removeListener(this._handleChange)
        }
      }
    },
    '2A9e': function (e) {
      e.exports = JSON.parse(
        '{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}'
      )
    },
    '3tYt': function (e, t, n) {
      e.exports = { label: 'label-32bOLbsS', input: 'input-32bOLbsS' }
    },
    '6KyJ': function (e, t, n) {
      'use strict'
      var a,
        o = n('q1tI'),
        r = n('TSYQ'),
        i = n('K9GE'),
        s = n('YZ9j')
      n('O7m7')
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'), (e[(e.Appear = 1)] = 'Appear'), (e[(e.Active = 2)] = 'Active')
      })(a || (a = {}))
      class c extends o.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: a.Initial })
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = r(s.item, { [s[t]]: Boolean(t) })
          return o.createElement(
            'span',
            { className: r(s.loader, e, this._getStateClass()) },
            o.createElement('span', { className: n }),
            o.createElement('span', { className: n }),
            o.createElement('span', { className: n })
          )
        }
        componentDidMount() {
          this.setState({ state: a.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: a.Active })
            }, 2 * i.c))
        }
        componentWillUnmount() {
          this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null))
        }
        _getStateClass() {
          switch (this.state.state) {
            case a.Initial:
              return s['loader-initial']
            case a.Appear:
              return s['loader-appear']
            default:
              return ''
          }
        }
      }
      n.d(t, 'a', function () {
        return c
      })
    },
    '8Rai': function (e, t, n) {
      'use strict'
      var a = n('q1tI')
      const o = function (e, { bubbles: t = !1, cancelable: n = !1, detail: a = null } = {}) {
        try {
          return new window.CustomEvent(e, { bubbles: t, cancelable: n, detail: a })
        } catch (o) {
          const r = document.createEvent('CustomEvent')
          return r.initCustomEvent(e, t, n, a), r
        }
      }
      var r = n('R5JZ')
      function i(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: i,
            touchStart: s,
            handler: c,
            reference: l,
            ownerDocument: u = document,
          } = e,
          d = Object(a.useRef)(null),
          m = Object(a.useRef)(new o('timestamp').timeStamp)
        return (
          Object(a.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: i, touchStart: s },
              a = l ? l.current : d.current
            return Object(r.a)(m.current, a, c, u, e)
          }, [t, n, i, s, c]),
          l || d
        )
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      }
    },
    AiMB: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return l
        })
      var a = n('q1tI'),
        o = n('i8i4'),
        r = n('e3/o'),
        i = n('jAh7'),
        s = n('+EG+')
      class c extends a.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = Object(r.guid)())
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid)
        }
        render() {
          const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions)
          return (
            (e.style.top = this.props.top || ''),
            (e.style.bottom = this.props.bottom || ''),
            (e.style.left = this.props.left || ''),
            (e.style.right = this.props.right || ''),
            (e.style.pointerEvents = this.props.pointerEvents || ''),
            o.createPortal(a.createElement(l.Provider, { value: this }, this.props.children), e)
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context ? Object(i.getRootOverlapManager)() : this.context
        }
      }
      c.contextType = s.b
      const l = a.createContext(null)
    },
    E3Fn: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      class a {
        constructor() {
          this._storage = new Map()
        }
        setAsOpened(e, t) {
          this._storage.set(e, t)
        }
        setAsClosed(e) {
          this._storage.delete(e)
        }
        isOpened(e) {
          return this._storage.has(e)
        }
        getDialogPayload(e) {
          return this._storage.get(e)
        }
      }
    },
    EcUf: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        o = n.n(a),
        r = n('YFKU'),
        i = n('TSYQ'),
        s = n('Iivm'),
        c = n('WXjp'),
        l = n('/3z9'),
        u = n('/KDZ'),
        d = n('uhCe'),
        m = n('tmL0'),
        p = n('mwqF'),
        f = n('6KyJ'),
        h = n('Eyy1'),
        v = n('PR+g'),
        b = n('+EG+')
      const g = o.a.createContext({ isSmallTablet: !1, dialogCloseHandler: () => {} })
      var w = n('G4Ee')
      function E(e) {
        const { disabled: t, name: n, title: r, appearance: s, intent: c, handler: l, reference: u } = e,
          { isSmallTablet: d, dialogCloseHandler: m } = Object(a.useContext)(g),
          E = Object(h.ensureNotNull)(Object(a.useContext)(b.b)),
          O = Object(v.a)(),
          [y, C] = Object(a.useState)(!1)
        return o.a.createElement(
          p.a,
          {
            disabled: t,
            reference: u,
            className: i(w.actionButton, d && w.small),
            name: n,
            size: d ? 'l' : void 0,
            appearance: s,
            intent: c,
            onClick: function () {
              if (y) return
              const e = l({ dialogClose: m, innerManager: E })
              e &&
                (C(!0),
                e.then(() => {
                  O.current && C(!1)
                }))
            },
          },
          o.a.createElement('span', { className: i(y && w.hiddenTitle) }, r),
          y && o.a.createElement(f.a, { color: 'white' })
        )
      }
      var O = n('zztK'),
        y = n('yKGJ')
      function C(e) {
        const {
            title: t,
            onClose: n,
            actions: r,
            dataName: p,
            popupDialogClassName: f,
            backdrop: h,
            closeOnOutsideClick: v = !0,
          } = e,
          [b, w] = Object(a.useState)(!0),
          C = Object(a.useRef)(null)
        return o.a.createElement(u.a, { rule: d.a.TabletSmall }, (a) =>
          o.a.createElement(
            g.Provider,
            { value: { isSmallTablet: a, dialogCloseHandler: n } },
            o.a.createElement(
              c.a,
              {
                className: i(y.popupDialog, f),
                isOpened: b,
                backdrop: h,
                onClickBackdrop: x,
                onClickOutside: v ? x : void 0,
                onKeyDown: j,
                autofocus: !0,
                fixedBody: !0,
              },
              o.a.createElement(
                'div',
                { className: y.wrap, 'data-name': p },
                o.a.createElement(
                  'div',
                  { className: i(y.main, a && y.small) },
                  o.a.createElement('div', { className: i(y.title, a && y.small) }, t),
                  (function (t) {
                    if ('html' in e)
                      return o.a.createElement(m.a, {
                        className: i(y.content, t && y.small, y.html),
                        dangerouslySetInnerHTML: { __html: e.html },
                      })
                    if ('content' in e)
                      return o.a.createElement(m.a, { className: i(y.content, t && y.small) }, e.content)
                    return null
                  })(a),
                  r &&
                    r.length > 0 &&
                    o.a.createElement(
                      'div',
                      { className: i(y.footer, a && y.small) },
                      r.map((e, t) =>
                        o.a.createElement(E, Object.assign({}, e, { key: e.name, reference: 0 === t ? C : void 0 }))
                      )
                    )
                ),
                o.a.createElement(s.a, {
                  className: i(y.close, a && y.small),
                  icon: O,
                  onClick: x,
                  'data-name': 'close',
                  'data-role': 'button',
                })
              )
            )
          )
        )
        function j(e) {
          switch (Object(l.hashFromEvent)(e)) {
            case 27:
              b && (e.preventDefault(), n())
              break
            case 13:
              if (b && r && r.length) {
                e.preventDefault()
                const t = C.current
                t && t.click()
              }
          }
        }
        function x() {
          w(!1), n()
        }
      }
      function j(e) {
        return 'html' in e ? { html: e.html } : { content: e.text }
      }
      var x = n('wHCJ'),
        S = n('3tYt')
      function N(e) {
        const { maxLength: t, value: n, onValueChange: r, nameInputRef: i } = e,
          { isSmallTablet: s } = Object(a.useContext)(g),
          c = o.a.useRef(null)
        return (
          Object(a.useLayoutEffect)(() => {
            c.current && c.current.select()
          }, []),
          o.a.createElement(
            o.a.Fragment,
            null,
            (function () {
              if ('content' in e) return o.a.createElement('div', { className: S.label }, e.content)
              if ('html' in e)
                return o.a.createElement('div', { className: S.label, dangerouslySetInnerHTML: { __html: e.html } })
              return null
            })(),
            o.a.createElement(x.a, {
              inputClassName: S.input,
              autoComplete: 'no',
              size: s ? 'large' : void 0,
              reference: function (e) {
                ;(c.current = e), i && (i.current = e)
              },
              value: n,
              maxLength: t,
              onChange: function (e) {
                r(e.currentTarget.value)
              },
            })
          )
        )
      }
      function T(e) {
        return Boolean(e.trim())
      }
      function k(e) {
        const { buttonText: t, intentButton: n, actions: a } = e,
          o = [
            {
              name: 'ok',
              title: t || Object(r.t)('Ok'),
              intent: n,
              handler: ({ dialogClose: e }) => {
                e()
              },
            },
          ]
        return a && a.forEach((e) => o.push(e)), o
      }
      var _ = n('i8i4'),
        I = n.n(_)
      const D = new (n('E3Fn').a)()
      n.d(t, 'confirmModule', function () {
        return L
      }),
        n.d(t, 'renameModule', function () {
          return q
        }),
        n.d(t, 'warningModule', function () {
          return M
        }),
        n.d(t, 'showSimpleDialog', function () {
          return B
        })
      const L = function (e) {
          const {
              title: t,
              onClose: n = () => {},
              mainButtonText: a,
              mainButtonIntent: i,
              cancelButtonText: s,
              closeOnOutsideClick: c,
              onConfirm: l,
              onCancel: u,
            } = e,
            d = j(e)
          return o.a.createElement(
            C,
            Object.assign({}, d, {
              title: t || Object(r.t)('Confirmation'),
              onClose: n,
              actions: [
                { name: 'yes', title: a || Object(r.t)('Yes'), intent: i || 'success', handler: l },
                {
                  name: 'no',
                  title: s || Object(r.t)('No'),
                  appearance: 'stroke',
                  intent: 'default',
                  handler: (e) => {
                    u ? u(e) : e.dialogClose()
                  },
                },
              ],
              dataName: 'confirm-dialog',
              closeOnOutsideClick: c,
            })
          )
        },
        q = function (e) {
          const {
              title: t,
              maxLength: n,
              initValue: i,
              onClose: s = () => {},
              mainButtonText: c,
              mainButtonIntent: l,
              cancelButtonText: u,
              validator: d = T,
              onRename: m,
            } = e,
            p = Object(a.useRef)(null),
            [f, h] = Object(a.useState)(i || ''),
            [v, b] = Object(a.useState)(() => d(f)),
            g = j(e)
          return o.a.createElement(C, {
            title: t || Object(r.t)('Rename'),
            content: o.a.createElement(
              N,
              Object.assign({}, g, {
                nameInputRef: p,
                maxLength: n,
                value: f,
                onValueChange: function (e) {
                  h(e), b(d(e))
                },
              })
            ),
            onClose: s,
            actions: [
              {
                disabled: !v,
                name: 'save',
                title: c || Object(r.t)('Save'),
                intent: l || 'primary',
                handler: ({ dialogClose: e, innerManager: t }) =>
                  m({ newValue: f, focusInput: w, dialogClose: e, innerManager: t }),
              },
              {
                name: 'cancel',
                title: u || Object(r.t)('Cancel'),
                appearance: 'stroke',
                intent: 'default',
                handler: ({ dialogClose: e }) => {
                  e()
                },
              },
            ],
            dataName: 'rename-dialog',
          })
          function w() {
            p.current && p.current.focus()
          }
        },
        M = function (e) {
          const { title: t, closeOnOutsideClick: n, onClose: a = () => {} } = e,
            i = j(e)
          return o.a.createElement(
            C,
            Object.assign({}, i, {
              title: t || Object(r.t)('Warning'),
              onClose: a,
              actions: k(e),
              dataName: 'warning-dialog',
              closeOnOutsideClick: n,
            })
          )
        },
        B = function (e, t, n) {
          const { title: a } = e,
            r = `${a}_${'text' in e ? e.text : e.html}`
          if (D.isOpened(r)) return Object(h.ensureDefined)(D.getDialogPayload(r)).closeHandler
          const i = document.createElement('div'),
            s = () => {
              var t
              null === (t = e.onClose) || void 0 === t || t.call(e), I.a.unmountComponentAtNode(i), D.setAsClosed(r)
            }
          return (
            I.a.render(
              o.a.createElement(
                b.b.Provider,
                { value: n || null },
                o.a.createElement(t, Object.assign({}, e, { onClose: s }))
              ),
              i
            ),
            D.setAsOpened(r, { closeHandler: s }),
            s
          )
        }
    },
    G4Ee: function (e, t, n) {
      e.exports = {
        actionButton: 'actionButton-3wPv1Zy2',
        small: 'small-3wPv1Zy2',
        hiddenTitle: 'hiddenTitle-3wPv1Zy2',
      }
    },
    Iivm: function (e, t, n) {
      'use strict'
      var a = n('mrSG'),
        o = n('q1tI')
      const r = o.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          r = Object(a.a)(e, ['icon'])
        return o.createElement('span', Object.assign({}, r, { ref: t, dangerouslySetInnerHTML: { __html: n } }))
      })
      n.d(t, 'a', function () {
        return r
      })
    },
    O7m7: function (e, t, n) {},
    'PR+g': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('q1tI')
      const o = () => {
        const e = Object(a.useRef)(!1)
        return (
          Object(a.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1
              }
            ),
            []
          ),
          e
        )
      }
    },
    R5JZ: function (e, t, n) {
      'use strict'
      function a(e, t, n, a, o) {
        function r(o) {
          if (e > o.timeStamp) return
          const r = o.target
          void 0 !== n && null !== t && null !== r && r.ownerDocument === a && (t.contains(r) || n(o))
        }
        return (
          o.click && a.addEventListener('click', r, !1),
          o.mouseDown && a.addEventListener('mousedown', r, !1),
          o.touchEnd && a.addEventListener('touchend', r, !1),
          o.touchStart && a.addEventListener('touchstart', r, !1),
          () => {
            a.removeEventListener('click', r, !1),
              a.removeEventListener('mousedown', r, !1),
              a.removeEventListener('touchend', r, !1),
              a.removeEventListener('touchstart', r, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}'
      )
    },
    ijHL: function (e, t, n) {
      'use strict'
      function a(e) {
        return r(e, i)
      }
      function o(e) {
        return r(e, s)
      }
      function r(e, t) {
        const n = Object.entries(e).filter(t),
          a = {}
        for (const [o, r] of n) a[o] = r
        return a
      }
      function i(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return o
        })
    },
    mwqF: function (e, t, n) {
      'use strict'
      var a = n('mrSG'),
        o = n('q1tI'),
        r = n('TSYQ')
      function i(e, t) {
        const {
          intent: n = 'primary',
          size: a = 'm',
          appearance: o = 'default',
          useFullWidth: i = !1,
          tabIndex: s = 0,
          icon: c,
          className: l,
        } = t
        return r(
          l,
          e.button,
          e['size-' + a],
          e['intent-' + n],
          e['appearance-' + o],
          i && e['full-width'],
          -1 === s && e.noOutline,
          c && 's' !== a && e['with-icon']
        )
      }
      var s = n('2A9e')
      n('+l/S')
      function c(e) {
        const {
            className: t,
            intent: n,
            size: c,
            appearance: l,
            disabled: u,
            useFullWidth: d,
            reference: m,
            icon: p,
            children: f,
            tabIndex: h,
          } = e,
          v = Object(a.a)(e, [
            'className',
            'intent',
            'size',
            'appearance',
            'disabled',
            'useFullWidth',
            'reference',
            'icon',
            'children',
            'tabIndex',
          ]),
          b = i(s, { intent: n, size: c, appearance: l, disabled: u, useFullWidth: d, tabIndex: h, icon: p })
        return o.createElement(
          'button',
          Object.assign({ className: r(b, t), disabled: u, ref: m, tabIndex: h }, v),
          p && 's' !== c && o.createElement('span', { className: s.icon }, p),
          o.createElement('span', { className: s.content }, f)
        )
      }
      n.d(t, 'a', function () {
        return c
      })
    },
    tmL0: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('mrSG'),
        o = n('q1tI'),
        r = n.n(o),
        i = n('x0D+'),
        s = n('Eyy1'),
        c = n('qFKp')
      function l(e) {
        const { reference: t, children: n } = e,
          s = Object(a.a)(e, ['reference', 'children']),
          l = Object(o.useRef)(null),
          d = Object(o.useCallback)(
            (e) => {
              t && (t.current = e),
                c.CheckMobile.iOS() &&
                  (null !== l.current && Object(i.enableBodyScroll)(l.current),
                  (l.current = e),
                  null !== l.current && Object(i.disableBodyScroll)(l.current, { allowTouchMove: u(l) }))
            },
            [t]
          )
        return r.a.createElement('div', Object.assign({ ref: d }, s), n)
      }
      function u(e) {
        return (t) => {
          const n = Object(s.ensureNotNull)(e.current),
            a = document.activeElement
          return !n.contains(t) || (null !== a && n.contains(a) && a.contains(t))
        }
      }
    },
    uhCe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('ASyk')
      const o = {
        SmallHeight: a['small-height-breakpoint'],
        TabletSmall: a['tablet-small-breakpoint'],
        TabletNormal: a['tablet-normal-breakpoint'],
      }
    },
    'x0D+': function (e, t, n) {
      var a, o, r
      ;(o = [t]),
        void 0 ===
          (r =
            'function' ==
            typeof (a = function (e) {
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
                var a = {
                  get passive() {
                    n = !0
                  },
                }
                window.addEventListener('testPassive', null, a), window.removeEventListener('testPassive', null, a)
              }
              var o =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                r = [],
                i = !1,
                s = -1,
                c = void 0,
                l = void 0,
                u = function (e) {
                  return r.some(function (t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                  })
                },
                d = function (e) {
                  var t = e || window.event
                  return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                },
                m = function () {
                  setTimeout(function () {
                    void 0 !== l && ((document.body.style.paddingRight = l), (l = void 0)),
                      void 0 !== c && ((document.body.style.overflow = c), (c = void 0))
                  })
                }
              ;(e.disableBodyScroll = function (e, a) {
                if (o) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
                    )
                  if (
                    e &&
                    !r.some(function (t) {
                      return t.targetElement === e
                    })
                  ) {
                    var m = { targetElement: e, options: a || {} }
                    ;(r = [].concat(t(r), [m])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                      }),
                      (e.ontouchmove = function (t) {
                        var n, a, o, r
                        1 === t.targetTouches.length &&
                          ((a = e),
                          (r = (n = t).targetTouches[0].clientY - s),
                          !u(n.target) &&
                            ((a && 0 === a.scrollTop && 0 < r) ||
                            ((o = a) && o.scrollHeight - o.scrollTop <= o.clientHeight && r < 0)
                              ? d(n)
                              : n.stopPropagation()))
                      }),
                      i || (document.addEventListener('touchmove', d, n ? { passive: !1 } : void 0), (i = !0))
                  }
                } else {
                  ;(f = a),
                    setTimeout(function () {
                      if (void 0 === l) {
                        var e = !!f && !0 === f.reserveScrollBarGap,
                          t = window.innerWidth - document.documentElement.clientWidth
                        e &&
                          0 < t &&
                          ((l = document.body.style.paddingRight), (document.body.style.paddingRight = t + 'px'))
                      }
                      void 0 === c && ((c = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
                    })
                  var p = { targetElement: e, options: a || {} }
                  r = [].concat(t(r), [p])
                }
                var f
              }),
                (e.clearAllBodyScrollLocks = function () {
                  o
                    ? (r.forEach(function (e) {
                        ;(e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null)
                      }),
                      i && (document.removeEventListener('touchmove', d, n ? { passive: !1 } : void 0), (i = !1)),
                      (r = []),
                      (s = -1))
                    : (m(), (r = []))
                }),
                (e.enableBodyScroll = function (e) {
                  if (o) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                      )
                    ;(e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (r = r.filter(function (t) {
                        return t.targetElement !== e
                      })),
                      i &&
                        0 === r.length &&
                        (document.removeEventListener('touchmove', d, n ? { passive: !1 } : void 0), (i = !1))
                  } else
                    1 === r.length && r[0].targetElement === e
                      ? (m(), (r = []))
                      : (r = r.filter(function (t) {
                          return t.targetElement !== e
                        }))
                })
            })
              ? a.apply(t, o)
              : a) || (e.exports = r)
    },
    yKGJ: function (e, t, n) {
      e.exports = {
        popupDialog: 'popupDialog-35doN71j',
        wrap: 'wrap-35doN71j',
        main: 'main-35doN71j',
        small: 'small-35doN71j',
        title: 'title-35doN71j',
        content: 'content-35doN71j',
        html: 'html-35doN71j',
        footer: 'footer-35doN71j',
        close: 'close-35doN71j',
      }
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'
    },
  },
])
