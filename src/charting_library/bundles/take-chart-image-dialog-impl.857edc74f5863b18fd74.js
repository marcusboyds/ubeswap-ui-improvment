;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['take-chart-image-dialog-impl'],
  {
    '+EG+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var s = n('q1tI')
      class r extends s.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return s.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const o = s.createContext(null)
    },
    '1O6C': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var s = n('q1tI'),
        r = n('TSYQ'),
        o = n('+EG+'),
        i = n('jAh7'),
        a = n('ijHL'),
        c = n('aYmi')
      class l extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._manager = new i.OverlapManager()),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e)
            })
        }
        render() {
          const {
              rounded: e = !0,
              shadowed: t = !0,
              fullscreen: n = !1,
              darker: i = !1,
              className: l,
              backdrop: d,
            } = this.props,
            u = r(l, c.dialog, e && c.rounded, t && c.shadowed, n && c.fullscreen, i && c.darker),
            p = Object(a.b)(this.props),
            h = this.props.style
              ? Object.assign(Object.assign({}, this._createStyles()), this.props.style)
              : this._createStyles()
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              o.b.Provider,
              { value: this._manager },
              d && s.createElement('div', { onClick: this.props.onClickBackdrop, className: c.backdrop }),
              s.createElement(
                'div',
                Object.assign({}, p, {
                  className: u,
                  style: h,
                  ref: this.props.reference,
                  onFocus: this.props.onFocus,
                  onMouseDown: this.props.onMouseDown,
                  onMouseUp: this.props.onMouseUp,
                  onClick: this.props.onClick,
                  onKeyDown: this.props.onKeyDown,
                  tabIndex: -1,
                }),
                this.props.children
              )
            ),
            s.createElement(o.a, { reference: this._handleSlot })
          )
        }
        _createStyles() {
          const { bottom: e, left: t, width: n, right: s, top: r, zIndex: o, height: i } = this.props
          return { bottom: e, left: t, right: s, top: r, zIndex: o, maxWidth: n, height: i }
        }
      }
    },
    '6KyJ': function (e, t, n) {
      'use strict'
      var s,
        r = n('q1tI'),
        o = n('TSYQ'),
        i = n('K9GE'),
        a = n('YZ9j')
      n('O7m7')
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'), (e[(e.Appear = 1)] = 'Appear'), (e[(e.Active = 2)] = 'Active')
      })(s || (s = {}))
      class c extends r.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: s.Initial })
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = o(a.item, { [a[t]]: Boolean(t) })
          return r.createElement(
            'span',
            { className: o(a.loader, e, this._getStateClass()) },
            r.createElement('span', { className: n }),
            r.createElement('span', { className: n }),
            r.createElement('span', { className: n })
          )
        }
        componentDidMount() {
          this.setState({ state: s.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: s.Active })
            }, 2 * i.c))
        }
        componentWillUnmount() {
          this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null))
        }
        _getStateClass() {
          switch (this.state.state) {
            case s.Initial:
              return a['loader-initial']
            case s.Appear:
              return a['loader-appear']
            default:
              return ''
          }
        }
      }
      n.d(t, 'a', function () {
        return c
      })
    },
    '8MIK': function (e, t, n) {
      e.exports = {
        modal: 'modal-1aOR8tBW',
        content: 'content-1aOR8tBW',
        form: 'form-1aOR8tBW',
        copyForm: 'copyForm-1aOR8tBW',
        'input-container': 'input-container-1aOR8tBW',
        input: 'input-1aOR8tBW',
        copyBtn: 'copyBtn-1aOR8tBW',
        shadow: 'shadow-1aOR8tBW',
        actions: 'actions-1aOR8tBW',
        link: 'link-1aOR8tBW',
        socials: 'socials-1aOR8tBW',
        icon: 'icon-1aOR8tBW',
        socialsText: 'socialsText-1aOR8tBW',
      }
    },
    '8Rai': function (e, t, n) {
      'use strict'
      var s = n('q1tI')
      const r = function (e, { bubbles: t = !1, cancelable: n = !1, detail: s = null } = {}) {
        try {
          return new window.CustomEvent(e, { bubbles: t, cancelable: n, detail: s })
        } catch (r) {
          const o = document.createEvent('CustomEvent')
          return o.initCustomEvent(e, t, n, s), o
        }
      }
      var o = n('R5JZ')
      function i(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: i,
            touchStart: a,
            handler: c,
            reference: l,
            ownerDocument: d = document,
          } = e,
          u = Object(s.useRef)(null),
          p = Object(s.useRef)(new r('timestamp').timeStamp)
        return (
          Object(s.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: i, touchStart: a },
              s = l ? l.current : u.current
            return Object(o.a)(p.current, s, c, d, e)
          }, [t, n, i, a, c]),
          l || u
        )
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    AVTG: function (e, t, n) {
      'use strict'
      var s = n('q1tI'),
        r = n('TSYQ'),
        o = n('kgsH'),
        i = n('uo4K'),
        a = n('Iivm')
      function c(e) {
        const t = e.hideIcon ? null : s.createElement(a.a, { className: o.close, icon: i, onClick: e.onClose })
        return s.createElement(
          'div',
          { className: r(o.header, e.className), 'data-dragg-area': !0, ref: e.reference },
          e.children,
          t
        )
      }
      n('kQXJ')
      var l = n('XYXm')
      function d(e) {
        return s.createElement('div', { className: r(l.body, e.className), ref: e.reference }, e.children)
      }
      var u = n('8Rai'),
        p = n('cJj4')
      function h(e) {
        let t
        e.text
          ? (t = s.createElement('span', null, e.text))
          : e.html && (t = s.createElement('span', { dangerouslySetInnerHTML: { __html: e.html } }))
        const n = Object(u.a)({ mouseDown: !0, touchStart: !0, handler: e.onClickOutside })
        if (!t) return null
        const o = r(p.message, e.className, { [p.error]: e.isError })
        return s.createElement('div', { className: o, key: '0' }, s.createElement('span', { ref: n }, t))
      }
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return h
        })
    },
    AiMB: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return l
        })
      var s = n('q1tI'),
        r = n('i8i4'),
        o = n('e3/o'),
        i = n('jAh7'),
        a = n('+EG+')
      class c extends s.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = Object(o.guid)())
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
            r.createPortal(s.createElement(l.Provider, { value: this }, this.props.children), e)
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context ? Object(i.getRootOverlapManager)() : this.context
        }
      }
      c.contextType = a.b
      const l = s.createContext(null)
    },
    BHQn: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>'
    },
    GyvH: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width="22" height="15"><g fill="none" fill-rule="evenodd" stroke-width="2"><path stroke="#757575" d="M6.25 5.812L11 10.087l4.75-4.275M11 9.868V.315"/><path stroke="#ADAEB0" d="M21 10v4H1v-4"/></g><path d="M.008 12.47V9.994H1.96v3.003h18.095V9.988l.958.021.957.021.02 2.46.02 2.458H.008v-2.477z"/><path d="M8.642 9.27a673.518 673.518 0 0 0-2.658-2.396l-.369-.325.657-.716.658-.716 1.49 1.35c.819.741 1.525 1.348 1.57 1.348.054 0 .079-1.143.079-3.716V.382H11.946v3.717c0 2.129.029 3.716.067 3.716.037 0 .738-.607 1.558-1.349l1.491-1.35.508.543c.28.298.57.626.647.73l.14.187-2.632 2.366c-1.447 1.3-2.668 2.372-2.712 2.381-.044.01-1.111-.915-2.37-2.054z"/></svg>'
    },
    Iivm: function (e, t, n) {
      'use strict'
      var s = n('mrSG'),
        r = n('q1tI')
      const o = r.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          o = Object(s.a)(e, ['icon'])
        return r.createElement('span', Object.assign({}, o, { ref: t, dangerouslySetInnerHTML: { __html: n } }))
      })
      n.d(t, 'a', function () {
        return o
      })
    },
    O7m7: function (e, t, n) {},
    R5JZ: function (e, t, n) {
      'use strict'
      function s(e, t, n, s, r) {
        function o(r) {
          if (e > r.timeStamp) return
          const o = r.target
          void 0 !== n && null !== t && null !== o && o.ownerDocument === s && (t.contains(o) || n(r))
        }
        return (
          r.click && s.addEventListener('click', o, !1),
          r.mouseDown && s.addEventListener('mousedown', o, !1),
          r.touchEnd && s.addEventListener('touchend', o, !1),
          r.touchStart && s.addEventListener('touchstart', o, !1),
          () => {
            s.removeEventListener('click', o, !1),
              s.removeEventListener('mousedown', o, !1),
              s.removeEventListener('touchend', o, !1),
              s.removeEventListener('touchstart', o, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return s
      })
    },
    RgaO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var s = n('mrSG'),
        r = n('8Rai')
      function o(e) {
        const { children: t } = e,
          n = Object(s.a)(e, ['children'])
        return t(Object(r.a)(n))
      }
    },
    UJLh: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-2qEpRlNG',
        container: 'container-2qEpRlNG',
        backdrop: 'backdrop-2qEpRlNG',
        modal: 'modal-2qEpRlNG',
        dialog: 'dialog-2qEpRlNG',
      }
    },
    XYXm: function (e, t, n) {
      e.exports = { body: 'body-2IgbkgW8' }
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}'
      )
    },
    aYmi: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-UM6w7sFp',
        rounded: 'rounded-UM6w7sFp',
        shadowed: 'shadowed-UM6w7sFp',
        fullscreen: 'fullscreen-UM6w7sFp',
        darker: 'darker-UM6w7sFp',
        backdrop: 'backdrop-UM6w7sFp',
      }
    },
    cJj4: function (e, t, n) {
      e.exports = { message: 'message-2dEP78zc', error: 'error-2dEP78zc' }
    },
    fMMV: function (e, t, n) {
      'use strict'
      n.r(t)
      n('YFKU')
      var s = n('Wt0y'),
        r = (n('HbRj'), n('Kxc7')),
        o = n('wVAQ')
      async function i(e, t, n, s = {}) {
        var i
        const a = new FormData()
        if (void 0 !== s.previews) for (const r of s.previews) a.append('previews[]', r)
        void 0 !== s.cme && a.append('cme', String(s.cme)),
          void 0 !== s.wl && a.append('wl', String(s.wl)),
          void 0 !== s.onWidget && a.append('onWidget', String(s.onWidget)),
          s.isReport && a.append('isReport', String(s.isReport))
        const c = window.urlParams
        c && c.locale && a.append('language', c.locale)
        const l = e.activeChartWidget.value(),
          d = l.widgetCustomer()
        void 0 !== d && a.append('customer', d)
        let u = l.properties().childs().timezone.value()
        'exchange' === u &&
          (u = (null === (i = l.model().mainSeries().symbolInfo()) || void 0 === i ? void 0 : i.timezone) || u),
          a.append('timezone', u),
          a.append(
            'images',
            JSON.stringify(e.images(), (e, t) => (t instanceof HTMLCanvasElement ? null : t))
          ),
          (async function (e, t, n, s = {}) {
            const a = r.enabled('charting_library_base')
              ? s.snapshotUrl || 'https://www.tradingview.com/snapshot/'
              : '/snapshot/'
            try {
              const s = await Object(o.fetch)(a, { body: e, method: 'POST', credentials: 'same-origin' }),
                r = await s.text()
              s.ok ? t(r) : n()
            } catch (i) {
              n()
            }
          })(a, t, n, s)
      }
      var a = n('JWMC'),
        c = n('q1tI'),
        l = n('i8i4'),
        d = n('TSYQ'),
        u = n('1O6C'),
        p = n('uqKQ'),
        h = n('RgaO'),
        m = n('UJLh')
      class g extends c.PureComponent {
        constructor() {
          super(...arguments),
            (this._containerRef = null),
            (this._handleContainerRef = (e) => {
              this._containerRef = e
            })
        }
        componentDidMount() {
          var e
          this.props.autofocus && (null === (e = this._containerRef) || void 0 === e || e.focus())
        }
        render() {
          const { zIndex: e, onClickOutside: t, children: n, className: s } = this.props
          return c.createElement(
            'div',
            {
              ref: this._handleContainerRef,
              style: { zIndex: e },
              'data-dialog-name': this.props['data-dialog-name'],
              tabIndex: -1,
            },
            c.createElement('div', { className: m.backdrop }),
            c.createElement(
              'div',
              { className: m.wrap },
              c.createElement(
                'div',
                { className: m.container },
                c.createElement(h.a, { mouseDown: !0, touchStart: !0, handler: t }, (e) =>
                  c.createElement(
                    'div',
                    { className: m.modal, ref: e },
                    c.createElement(u.a, Object.assign({}, this.props, { className: d(s, m.dialog) }), n)
                  )
                )
              )
            )
          )
        }
      }
      g.defaultProps = { width: 500 }
      const f = Object(p.a)(g)
      var w = n('AVTG'),
        v = n('Iivm'),
        _ = n('wHCJ'),
        b = n('qsaw'),
        y = n('6KyJ')
      function E(e) {
        switch (e) {
          case 'default':
            return b.base
          case 'primary':
            return b.primary
          case 'secondary':
            return b.secondary
          case 'secondary-script':
            return b.secondaryScript
          case 'success':
            return b.success
          case 'warning':
            return b.warning
          case 'danger':
            return b.danger
          case 'link':
            return b.link
          default:
            return ''
        }
      }
      function x(e) {
        switch (e) {
          case 'xsmall':
            return b.xsmall
          case 'small':
            return b.small
          case 'large':
            return b.large
          default:
            return ''
        }
      }
      function C(e) {
        switch (e) {
          case 'ghost':
            return b.ghost
          default:
            return ''
        }
      }
      function S(e) {
        const {
            active: t = !0,
            children: n,
            className: s = '',
            disabled: r = !1,
            grouped: o = !1,
            growable: i = !1,
            onClick: a,
            reference: l,
            size: u,
            theme: p,
            type: h = 'default',
            loading: m = !1,
            withPadding: g = !0,
            title: f = '',
            disabledClassName: w,
            tabIndex: v = 0,
            target: _ = '',
            href: S = '',
            rounded: O = !1,
            name: k,
          } = e,
          T = d({
            [s]: Boolean(s),
            [b.button]: !0,
            [b.active]: t && !r,
            [w || b.disabled]: r,
            [b.grouped]: o,
            [b.growable]: i,
            [b.withPadding]: g,
            [x(u)]: Boolean(u),
            [C(p)]: Boolean(p),
            [E(h)]: !0,
            [b.rounded]: O,
          }),
          I = 'default' === h ? 'black' : 'white',
          N = { disabled: r, title: f, target: _, href: S }
        return c.createElement(
          'button',
          Object.assign({ name: k, className: T, tabIndex: v, onClick: m ? void 0 : a, ref: l }, N),
          c.createElement('span', { className: b.hiddenText }, n),
          m
            ? c.createElement('span', { className: b.loader }, c.createElement(y.a, { color: I }))
            : c.createElement('span', { className: b.text }, n)
        )
      }
      var O,
        k = n('jPOK')
      !(function (e) {
        function t(e, t) {
          return 'cme' === TradingView.widgetCustomer
            ? t + ' from cmegroup.com via @tradingview $' + e
            : '#' + e + ' chart ' + t + ' via https://www.tradingview.com'
        }
        function n(e = 'about:blank', t = 'snapshot_tweet') {
          const n = Math.round(screen.width / 2 - 275),
            s = Math.round(screen.height / 2 - 210)
          return window.open(
            e,
            t,
            `scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=550,height=420,\n\t\t\t\tleft=${n},top=${s}`
          )
        }
        ;(e.getStatus = t),
          (e.shareSnapshot = function (e) {
            const s = n()
            return {
              onFailure: () => {
                s.close()
              },
              onSuccess: (n) => {
                s.location.href = (function (e, n) {
                  return (
                    'https://twitter.com/intent/tweet?&text=' +
                    encodeURIComponent(
                      t(
                        e,
                        (function (e) {
                          return window.location.protocol + '//' + window.location.host + '/x/' + e + '/'
                        })(n)
                      )
                    )
                  )
                })(e, n)
              },
            }
          }),
          (e.shareSnapshotInstantly = function (e, s) {
            n(
              (function (e, n) {
                return 'https://twitter.com/intent/tweet?&text=' + encodeURIComponent(t(e, n))
              })(e, s)
            )
          })
      })(O || (O = {}))
      var T = n('ycI/'),
        I = n('Ialn'),
        N = n('FQhm'),
        U = n('ZjKI'),
        R = n('8MIK'),
        M = n('BHQn'),
        j = n('GyvH')
      class W extends c.Component {
        constructor(e) {
          super(e),
            (this._input = null),
            (this._hideMessages = () => {
              this.setState({ message: '', error: '' })
            }),
            (this._setInput = (e) => {
              this._input = e
            }),
            (this._select = () => {
              null !== this._input && this._input.select()
            }),
            (this._shareTwitter = () => {
              O.shareSnapshotInstantly(this.props.symbol || '', this.props.imageUrl || '')
            }),
            (this._onClose = () => {
              this.props.onClose && this.props.onClose(), (this._copyBtn = null)
            }),
            (this.state = { message: e.message, error: e.error })
        }
        componentDidMount() {
          N.subscribe(U.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._onClose, null)
        }
        componentWillUnmount() {
          N.unsubscribe(U.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._onClose, null)
        }
        componentWillReceiveProps(e) {
          this.setState({ message: e.message, error: e.error })
        }
        componentDidUpdate(e) {
          !e.imageUrl &&
            this.props.imageUrl &&
            setTimeout(() => {
              null !== this._input && (this._input.select(), this._input.focus())
            })
        }
        render() {
          const { imageUrl: e } = this.props,
            { message: t, error: n } = this.state,
            s = !e && !this.props.message && !this.props.error,
            r = d(R.copyBtn, !Object(I.isRtl)() && R.shadow)
          return c.createElement(
            f,
            {
              isOpened: this.props.isOpened,
              className: R.modal,
              onClickOutside: this._onClose,
              'data-dialog-type': 'take-snapshot-modal',
            },
            c.createElement(w.b, { onClose: this._onClose }, window.t('Image URL')),
            t && c.createElement(w.c, { text: t, isError: !1, onClickOutside: this._hideMessages }),
            n && c.createElement(w.c, { text: n, isError: !0, onClickOutside: this._hideMessages }),
            c.createElement(
              w.a,
              null,
              c.createElement(T.a, { keyCode: 27, handler: this._onClose }),
              c.createElement(
                'div',
                { className: R.content },
                s && c.createElement(k.a, { size: 'mini' }),
                c.createElement(
                  'div',
                  { className: R.form, style: { visibility: e ? 'visible' : 'hidden' } },
                  c.createElement(
                    'div',
                    { className: R.copyForm },
                    c.createElement(_.a, {
                      reference: this._setInput,
                      readonly: !0,
                      stretch: !0,
                      value: e || '',
                      onClick: this._select,
                      onFocus: this._select,
                      className: R['input-container'],
                      inputClassName: R.input,
                      removeRoundBorder: 6,
                      highlightRemoveRoundBorder: 6,
                    }),
                    c.createElement(
                      'div',
                      { ref: (e) => e && this._setupClipboard(e), 'data-clipboard-text': e, className: r },
                      c.createElement(S, { type: 'primary', theme: 'ghost' }, window.t('Copy'))
                    )
                  ),
                  c.createElement(
                    'div',
                    { className: R.actions },
                    c.createElement(
                      'a',
                      { className: R.link, href: e, target: '_blank' },
                      c.createElement(v.a, { icon: j }),
                      c.createElement('span', null, window.t('Save image'))
                    ),
                    c.createElement(
                      'span',
                      { className: R.socials, onClick: this._shareTwitter },
                      c.createElement(v.a, { className: R.icon, icon: M }),
                      c.createElement('span', { className: R.socialsText }, window.t('Tweet'))
                    )
                  )
                )
              )
            )
          )
        }
        _setupClipboard(e) {
          this._copyBtn ||
            ((this._copyBtn = e),
            n
              .e('clipboard')
              .then(n.t.bind(null, 'sxGJ', 7))
              .then(({ default: t }) => {
                const n = new t(e)
                n.on('success', () => {
                  TradingView.trackEvent('GUI', 'Copied Image Link'),
                    this.setState({ message: window.t('Copied to clipboard') })
                }),
                  n.on('error', () => {
                    this.setState({
                      message: window.t(
                        "Sorry, the Copy Link button doesn't work in your browser. Please select the link and copy it manually."
                      ),
                    })
                  })
              }))
        }
      }
      function B(e, t = {}, n) {
        let o
        function d(e) {
          o || ((o = document.createElement('div')), document.body.appendChild(o)), l.render(c.createElement(W, e), o)
        }
        function u() {
          d({ isOpened: !1 })
        }
        Object(a.trackEvent)('GUI', 'Get image button'),
          d({ isOpened: !1 }),
          i(
            e,
            (o) => {
              n && n(o)
              let i = ''
              i = r.enabled('charting_library_base')
                ? (t.snapshotUrl ? '' : 'https://www.tradingview.com/x/') + o
                : Object(s.isProd)()
                ? 'https://www.tradingview.com/x/' + o + '/'
                : window.location.protocol + '//' + window.location.host + '/x/' + o + '/'
              d({ isOpened: !0, onClose: u, imageUrl: i, symbol: e.activeChartWidget.value().symbolProperty().value() })
            },
            () => {
              d({ isOpened: !0, onClose: u, error: window.t('URL cannot be received') })
            },
            { onWidget: e.onWidget, snapshotUrl: t.snapshotUrl, onInvalidSnapshotImage: u }
          ),
          d({ isOpened: !0, onClose: u })
      }
      function D(e, t, n) {
        i(
          e,
          (e) => {
            n && n(e)
          },
          () => {
            console.warn(window.t('Error while trying to create snapshot.'))
          },
          { snapshotUrl: t.snapshotUrl }
        )
      }
      ;(W.defaultProps = { imageUrl: '' }),
        n.d(t, 'getImageOfChart', function () {
          return B
        }),
        n.d(t, 'getImageOfChartSilently', function () {
          return D
        })
    },
    ijHL: function (e, t, n) {
      'use strict'
      function s(e) {
        return o(e, i)
      }
      function r(e) {
        return o(e, a)
      }
      function o(e, t) {
        const n = Object.entries(e).filter(t),
          s = {}
        for (const [r, o] of n) s[r] = o
        return s
      }
      function i(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function a(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return r
        })
    },
    jAh7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'OverlapManager', function () {
          return o
        }),
        n.d(t, 'getRootOverlapManager', function () {
          return a
        })
      var s = n('Eyy1')
      class r {
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
          ;(this._storage = new r()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment())
        }
        setContainer(e) {
          const t = this._container,
            n = null === e ? this._document.createDocumentFragment() : e
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
            })
          })(t, n),
            (this._container = n)
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e)
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const n = this._windows.get(e)
          if (void 0 !== n) return n
          this.registerWindow(e)
          const s = this._document.createElement('div')
          if (
            ((s.style.position = t.position),
            (s.style.zIndex = this._index.toString()),
            (s.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length
            if (t.index >= e) this._container.appendChild(s)
            else if (t.index <= 0) this._container.insertBefore(s, this._container.firstChild)
            else {
              const e = this._container.childNodes[t.index]
              this._container.insertBefore(s, e)
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(s, this._container.firstChild)
              : this._container.appendChild(s)
          return this._windows.set(e, s), ++this._index, s
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
      const i = new WeakMap()
      function a(e = document) {
        const t = e.getElementById('overlap-manager-root')
        if (null !== t) return Object(s.ensureDefined)(i.get(t))
        {
          const t = new o(e),
            n = (function (e) {
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
          return i.set(n, t), t.setContainer(n), e.body.appendChild(n), t
        }
      }
    },
    jPOK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var s = n('q1tI'),
        r = n('TSYQ'),
        o = n('Owlf')
      n('SzKR')
      function i(e) {
        const t = r('tv-spinner', 'tv-spinner--shown', 'tv-spinner--size_' + (e.size || o.a))
        return s.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          s.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            s.createElement('div', { className: 'tv-spinner__background tv-spinner__width_element' }),
            s.createElement('div', {
              className: 'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            s.createElement('div', {
              className: 'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            })
          )
        )
      }
    },
    kQXJ: function (e, t, n) {
      e.exports = { footer: 'footer-16Va6-EJ' }
    },
    kgsH: function (e, t, n) {
      e.exports = { header: 'header-2ibjJG9Z', close: 'close-2ibjJG9Z' }
    },
    qsaw: function (e, t, n) {
      e.exports = {
        ghost: 'ghost-oST7Udg3',
        primary: 'primary-oST7Udg3',
        success: 'success-oST7Udg3',
        danger: 'danger-oST7Udg3',
        warning: 'warning-oST7Udg3',
        secondary: 'secondary-oST7Udg3',
        button: 'button-oST7Udg3',
        withPadding: 'withPadding-oST7Udg3',
        hiddenText: 'hiddenText-oST7Udg3',
        text: 'text-oST7Udg3',
        loader: 'loader-oST7Udg3',
        base: 'base-oST7Udg3',
        secondaryScript: 'secondaryScript-oST7Udg3',
        link: 'link-oST7Udg3',
        xsmall: 'xsmall-oST7Udg3',
        rounded: 'rounded-oST7Udg3',
        small: 'small-oST7Udg3',
        large: 'large-oST7Udg3',
        grouped: 'grouped-oST7Udg3',
        growable: 'growable-oST7Udg3',
        active: 'active-oST7Udg3',
        disabled: 'disabled-oST7Udg3',
      }
    },
    uo4K: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
    },
    uqKQ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var s = n('q1tI'),
        r = n('AiMB')
      function o(e) {
        return class extends s.PureComponent {
          render() {
            const { isOpened: t, root: n } = this.props
            if (!t) return null
            const o = s.createElement(e, Object.assign({}, this.props, { zIndex: 150 }))
            return 'parent' === n ? o : s.createElement(r.a, null, o)
          }
        }
      }
    },
    'ycI/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var s = n('q1tI')
      class r extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleKeyDown = (e) => {
              e.keyCode === this.props.keyCode && this.props.handler(e)
            })
        }
        componentDidMount() {
          document.addEventListener(this.props.eventType || 'keydown', this._handleKeyDown, !1)
        }
        componentWillUnmount() {
          document.removeEventListener(this.props.eventType || 'keydown', this._handleKeyDown, !1)
        }
        render() {
          return null
        }
      }
    },
  },
])
