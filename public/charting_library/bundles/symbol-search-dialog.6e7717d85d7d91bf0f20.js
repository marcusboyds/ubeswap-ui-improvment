;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbol-search-dialog'],
  {
    '+5L9': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
    },
    '+EG+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return a
        })
      var r = n('q1tI')
      class o extends r.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return r.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const a = r.createContext(null)
    },
    '+wZE': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        c = n('TSYQ'),
        s = n.n(c),
        i = n('Iivm'),
        l = n('WcWV')
      function u(e) {
        const { className: t, disabled: n } = e,
          o = Object(r.a)(e, ['className', 'disabled'])
        return a.a.createElement(i.a, Object.assign({ className: s()(l.button, n && l.disabled, t) }, o))
      }
    },
    '/KDZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('q1tI')
      class o extends r.PureComponent {
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
    '32FQ': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 9.5a.5.5 0 0 0 1 0V7.02A6.5 6.5 0 0 1 20.98 13H18.5a.5.5 0 0 0 0 1h2.48A6.5 6.5 0 0 1 15 19.98V17.5a.5.5 0 0 0-1 0v2.48A6.5 6.5 0 0 1 8.02 14h2.48a.5.5 0 0 0 0-1H8.02A6.5 6.5 0 0 1 14 7.02V9.5zm1-3.48V4.5a.5.5 0 0 0-1 0v1.52A7.5 7.5 0 0 0 7.02 13H5.5a.5.5 0 0 0 0 1h1.52A7.5 7.5 0 0 0 14 20.98v1.52a.5.5 0 0 0 1 0v-1.52A7.5 7.5 0 0 0 21.98 14h1.52a.5.5 0 0 0 0-1h-1.52A7.5 7.5 0 0 0 15 6.02z"/></svg>'
    },
    '6rj1': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 121" width="120" height="121" fill="none"><path fill="#F0F3FA" fill-rule="evenodd" clip-rule="evenodd" d="M26.01 81.72c10.54 13.42 34.92 11.87 54.46-3.47 19.55-15.34 26.85-38.66 16.31-52.08-10.54-13.42-34.92-11.87-54.46 3.47-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.89-2.57 3.06-4.53 3.48a9.7 9.7 0 0 0-3.96 1.86C10.5 63.57 9.91 70.26 13.64 75a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="url(#as2qxyr1y)" fill-rule="evenodd" clip-rule="evenodd" d="M38.3 46.18c1.8 3.43 12.08 10.65 25.62 16.89 6.36 2.93 12.38 5.3 17.37 6.92a172.7 172.7 0 0 0-18-12.68C48.7 48.2 38.32 44.9 38.32 44.9c-.18.3-.19.72-.01 1.27z"/><path stroke="#1E222D" stroke-width="1.5" d="M96.25 82.01c-.19.3-.54.55-1.17.7a7.8 7.8 0 0 1-2.56.08c-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.12-24.64-13.05-9.12-5.94-16.82-12.1-21.92-17.26-2.55-2.58-4.41-4.89-5.48-6.76a7.8 7.8 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.29.54-.54 1.17-.7a7.79 7.79 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.13 24.64 13.06 9.12 5.93 16.82 12.1 21.92 17.25 2.55 2.59 4.42 4.89 5.48 6.76.54.94.85 1.73.96 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M38.96 45.25c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52c2.16 1.3 4.4 2.68 6.66 4.16 10.56 6.87 19.12 13.85 22.97 18.44"/><path stroke="#1E222D" stroke-width="1.5" d="M93.79 76.21c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M84.96 31.87a6.08 6.08 0 0 1-2.58 2.29c-.9.39-1.69.35-2.23 0s-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.28 6.08 6.08 0 0 1 2.58-2.3c.9-.39 1.69-.35 2.23 0 .54.36.9 1.05.9 2.04.01.99-.32 2.17-1.05 3.29z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="1.5" d="M52.7 34.25c1.25-.31 4.56-1.32 8.92-1.3M90.14 94.7c-3.64-.05-15.75-.08-30.14-.08s-26.5.03-30.14.08M34.7 69.95l5.77 5.33M42.05 66.68l.84 3.27"/><defs><linearGradient gradientUnits="userSpaceOnUse" x1="59.73" x2="59.73" y1="44.91" y2="69.99" id="as2qxyr1y"><stop stop-color="#2196F3"/><stop offset="1" stop-color="#2196F3"/></linearGradient></defs></svg>'
    },
    '8Rai': function (e, t, n) {
      'use strict'
      var r = n('q1tI')
      const o = function (e, { bubbles: t = !1, cancelable: n = !1, detail: r = null } = {}) {
        try {
          return new window.CustomEvent(e, { bubbles: t, cancelable: n, detail: r })
        } catch (o) {
          const a = document.createEvent('CustomEvent')
          return a.initCustomEvent(e, t, n, r), a
        }
      }
      var a = n('R5JZ')
      function c(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: c,
            touchStart: s,
            handler: i,
            reference: l,
            ownerDocument: u = document,
          } = e,
          d = Object(r.useRef)(null),
          p = Object(r.useRef)(new o('timestamp').timeStamp)
        return (
          Object(r.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: c, touchStart: s },
              r = l ? l.current : d.current
            return Object(a.a)(p.current, r, i, u, e)
          }, [t, n, c, s, i]),
          l || d
        )
      }
      n.d(t, 'a', function () {
        return c
      })
    },
    '8q1k': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M3 10l7-7M3 3l7 7"/></svg>'
    },
    AiMB: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return l
        })
      var r = n('q1tI'),
        o = n('i8i4'),
        a = n('e3/o'),
        c = n('jAh7'),
        s = n('+EG+')
      class i extends r.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = Object(a.guid)())
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
            o.createPortal(r.createElement(l.Provider, { value: this }, this.props.children), e)
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context ? Object(c.getRootOverlapManager)() : this.context
        }
      }
      i.contextType = s.b
      const l = r.createContext(null)
    },
    E3Fn: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      class r {
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
    EBrf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'splitThousands', function () {
          return o
        })
      var r = n('ivNn')
      function o(e, t = '&nbsp;') {
        let n = e + ''
        ;-1 !== n.indexOf('e') &&
          (n = (function (e) {
            return Object(r.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '')
          })(Number(e)))
        const o = n.split('.')
        return o[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (o[1] ? '.' + o[1] : '')
      }
    },
    F0Qt: function (e) {
      e.exports = JSON.parse(
        '{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","box":"box-3574HVnv","icon":"icon-2jsUbtec","noOutline":"noOutline-3VoWuntz","intent-danger":"intent-danger-1Sr9dowC","check":"check-382c8Fu1","dot":"dot-3gRd-7Qt"}'
      )
    },
    G4pG: function (e, t, n) {
      e.exports = { flagWrap: 'flagWrap-1Xy6iEIs', icon: 'icon-1Xy6iEIs', text: 'text-1Xy6iEIs' }
    },
    GWR5: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-2TpXRNRX',
        libAllExchange: 'libAllExchange-2TpXRNRX',
        container: 'container-2TpXRNRX',
        iconWrap: 'iconWrap-2TpXRNRX',
        icon: 'icon-2TpXRNRX',
        title: 'title-2TpXRNRX',
        highlighted: 'highlighted-2TpXRNRX',
        description: 'description-2TpXRNRX',
        mobile: 'mobile-2TpXRNRX',
        allExchange: 'allExchange-2TpXRNRX',
        desktop: 'desktop-2TpXRNRX',
        allExchangesIcon: 'allExchangesIcon-2TpXRNRX',
        selected: 'selected-2TpXRNRX',
        titleWithoutDesc: 'titleWithoutDesc-2TpXRNRX',
        textBlock: 'textBlock-2TpXRNRX',
        bordered: 'bordered-2TpXRNRX',
      }
    },
    GcSm: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('mrSG'),
        o = n('PT1i'),
        a = n('h24c'),
        c = n('q1tI'),
        s = n.n(c),
        i = n('i8i4'),
        l = n('+EG+')
      const u = s.a.createContext(null)
      var d = n('E3Fn'),
        p = n('TSYQ'),
        h = n.n(p),
        m = n('Eyy1'),
        f = n('YFKU'),
        b = n('Vdly'),
        v = (n('+GxX'), n('Kxc7'))
      const g = v.enabled('charting_library_base')
          ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/
          : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
        y = /[+\-/*]/,
        E = {
          number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
          incompleteNumber: /\./,
          symbol: g,
          incompleteSymbol: /'[^']*/,
          separatorPrefix: '###',
          openBrace: '(',
          closeBrace: ')',
          plus: '+',
          minus: '-',
          multiply: '*',
          divide: '/',
          power: '^',
          whitespace: /[\0-\x20\s]+/,
          unparsed: null,
        },
        w = new RegExp(
          Object.values(E)
            .map((e) => {
              return null === e
                ? ''
                : `(${'string' == typeof e ? ((t = e), t.replace(/[\^$()[\]{}*+?|\\]/g, '\\$&')) : e.source})`
              var t
            })
            .filter((e) => '' !== e)
            .concat('.')
            .join('|'),
          'g'
        )
      function x(e) {
        if (!e) return []
        const t = [],
          n = Object.keys(E)
        let r
        for (; (r = w.exec(e)); ) {
          let e = !1
          for (let o = n.length; o--; )
            if (r[o + 1]) {
              n[o] && t.push({ value: r[o + 1], type: n[o], precedence: 0, offset: r.index }), (e = !0)
              break
            }
          e || t.push({ value: r[0], type: 'unparsed', precedence: 0, offset: r.index })
        }
        return t
      }
      function k(e) {
        b.setValue('symboledit.exchangefilter', e.value)
      }
      function O(e) {
        return '' === e.value
      }
      function N() {
        const e = S()
        return e.find(O) || e[0] || null
      }
      function S() {
        return window.ChartApiInstance.supportedExchangesList().map((e) =>
          Object.assign(Object.assign({}, e), { country: '', providerId: '', flag: '' })
        )
      }
      function C() {
        return window.ChartApiInstance.supportedSymbolsTypes()
      }
      function I(e) {
        const t = { braceBalance: 0, currentState: 'var', warnings: [], errors: [] }
        if (v.enabled('charting_library_base') && !v.enabled('show_spread_operators')) return t
        let n = 'init'
        const r = []
        for (let o = 0; o < e.length; o++) {
          const a = e[o]
          if ('whitespace' !== a.type) {
            if ('incompleteSymbol' === a.type || 'incompleteNumber' === a.type) {
              const n = o !== e.length - 1,
                r = { status: n ? 'error' : 'incomplete', reason: 'incomplete_token', offset: a.offset, token: a }
              if ((n ? t.errors.push(r) : t.warnings.push(r), n)) continue
            }
            switch (a.type) {
              case 'symbol':
              case 'number':
                if ('var' === n) {
                  t.errors.push({ status: 'error', reason: 'unexpected_token', offset: a.offset, token: a })
                  continue
                }
                n = 'var'
                break
              case 'plus':
              case 'minus':
              case 'multiply':
              case 'divide':
              case 'power':
                if ('var' !== n) {
                  t.errors.push({ status: 'error', reason: 'unexpected_token', offset: a.offset, token: a })
                  continue
                }
                n = 'operator'
                break
              case 'openBrace':
                if ('var' === n) {
                  t.errors.push({ status: 'error', reason: 'unexpected_token', offset: a.offset, token: a })
                  continue
                }
                r.push(a), (n = 'init')
                break
              case 'closeBrace':
                if ('var' !== n) {
                  t.errors.push({ status: 'error', reason: 'unexpected_token', offset: a.offset, token: a })
                  continue
                }
                r.pop() || t.errors.push({ status: 'error', reason: 'unbalanced_brace', offset: a.offset, token: a }),
                  (n = 'var')
                break
              case 'unparsed':
                t.errors.push({ status: 'error', reason: 'unparsed_entity', offset: a.offset, token: a })
            }
          }
        }
        for (
          t.braceBalance = r.length, 'var' !== n && t.warnings.push({ status: 'incomplete', token: e[e.length - 1] });
          r.length;

        ) {
          const e = r.pop()
          e && t.warnings.push({ status: 'incomplete', reason: 'unbalanced_brace', offset: e.offset, token: e })
        }
        return (t.currentState = n), t
      }
      function j(e) {
        const t = (function (e) {
          let t,
            n = 0,
            r = 0
          for (let o = 0; o < e.length; o++) {
            const a = e[o]
            if ('whitespace' !== a.type)
              switch (n) {
                case 0:
                  if ('number' !== a.type || 1 != +a.value) return []
                  n = 1
                  break
                case 1:
                  if (1 !== n || 'divide' !== a.type) return []
                  ;(n = 2), (t = o + 1)
                  break
                case 2:
                  if ('openBrace' === a.type) (n = 3), (r = 1)
                  else if (R(a.type)) return []
                  break
                case 3:
                  'openBrace' === a.type ? r++ : 'closeBrace' === a.type && (r--, r <= 0 && (n = 2))
              }
          }
          return e.slice(t)
        })(e)
        return t.length ? M(t) : M(x('1/(' + T(e) + ')'))
      }
      function T(e) {
        return e.reduce((e, t) => ('symbol' === t.type && y.test(t.value) ? e + `'${t.value}'` : e + t.value), '')
      }
      function R(e) {
        return 'plus' === e || 'minus' === e || 'multiply' === e || 'divide' === e || 'power' === e
      }
      function _(e) {
        return e.length > 1 && e.some((e) => R(e.type))
      }
      function M(e) {
        e = (function (e) {
          const t = []
          for (const n of e) 'whitespace' !== n.type && t.push(n)
          return t
        })(e)
        const t = [],
          n = []
        let r
        for (let o = 0; o < e.length; o++) {
          const a = e[o]
          switch (a.type) {
            case 'plus':
            case 'minus':
            case 'multiply':
            case 'divide':
            case 'power':
              n.length && n[n.length - 1].minPrecedence > a.precedence && (n[n.length - 1].minPrecedence = a.precedence)
              break
            case 'openBrace':
              ;(r = { minPrecedence: 1 / 0, openBraceIndex: o }), n.push(r)
              break
            case 'closeBrace': {
              if (((r = n.pop()), !r)) break
              const a = e[r.openBraceIndex - 1],
                c = e[o + 1],
                s = a && ('plus' === a.type || 'multiply' === a.type)
              ;(!R(null == c ? void 0 : c.type) || (null == c ? void 0 : c.precedence) <= r.minPrecedence) &&
                (!R(null == a ? void 0 : a.type) ||
                  (null == a ? void 0 : a.precedence) < (null == r ? void 0 : r.minPrecedence) ||
                  ((null == a ? void 0 : a.precedence) === (null == r ? void 0 : r.minPrecedence) && s)) &&
                (t.unshift(r.openBraceIndex),
                t.push(o),
                n.length &&
                  n[n.length - 1].minPrecedence > r.minPrecedence &&
                  (n[n.length - 1].minPrecedence = r.minPrecedence))
            }
          }
        }
        for (let o = t.length; o--; ) e.splice(t[o], 1)
        return e
      }
      function D(e) {
        return M(x(e)).reduce((e, t) => {
          if ('symbol' !== t.type) return e + t.value
          const [, n] = A(t)
          return n ? e + n : e
        }, '')
      }
      function L(e) {
        const t = (function (e) {
          const t = x(e),
            n = []
          return (
            t.forEach((e) => {
              if ('symbol' !== e.type) return
              const [t] = A(e)
              t && n.push(t)
            }),
            n
          )
        })(e)
        if (1 === t.length) return t[0]
      }
      function A(e) {
        const t = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i.exec(e.value)
        return null === t ? [void 0, void 0] : [t[1], t[2]]
      }
      function W(e, t, n, r, o) {
        const a = e.value,
          [c, s] = B(e, n),
          i = (function (e, t, n) {
            let r
            return (r = n || t ? (n || t) + ':' + e : e), r.replace(/<\/?[^>]+(>|$)/g, '')
          })(t, r, o),
          l = y.test(i) ? `'${i}'` : i
        return [a.substr(0, s) + l + a.substr(s + c.length), s + l.length]
      }
      function B(e, t) {
        const { value: n, selectionStart: r } = e,
          o = x(t ? n.toUpperCase() : n),
          a = (function (e, t) {
            for (let n = 0; n < e.length; n++) {
              const r = e[n],
                o = 'symbol' === r.type || 'incompleteSymbol' === r.type || 'number' === r.type
              if (r.offset <= t && t <= r.offset + r.value.length && o) return r
            }
            return null
          })(o, r || 0)
        return [(null == a ? void 0 : a.value) || '', a ? a.offset : n.length, o]
      }
      var P = n('SAe1'),
        V = n('uhCe'),
        z = n('g89m'),
        F = n('Iivm')
      const Z = s.a.createContext(null)
      var G = n('QHWU'),
        X = n('UN6M')
      function q(e) {
        const { children: t, className: n } = e
        return s.a.createElement(
          'div',
          { className: h()(X.container, n) },
          s.a.createElement('div', { className: X.childrenWrapper }, t)
        )
      }
      var Q = n('1LIl'),
        H = n('H9Gg'),
        K = n('wy57'),
        U = n('GWR5')
      function Y(e) {
        const {
            country: t,
            providerId: n,
            flag: r,
            title: o,
            description: a,
            isActive: i,
            isAllExchanges: l,
            isMobile: u,
            onClick: d,
            queryString: p,
          } = e,
          m = Object(c.useMemo)(() => Object(H.a)(p), [p]),
          f = a && !l,
          b = h()(
            U.container,
            u ? U.mobile : U.desktop,
            i && U.selected,
            l && U.allExchange,
            l && U.libAllExchange,
            !l && u && U.bordered
          )
        return s.a.createElement(
          'div',
          { className: h()(!u && U.wrap, l && U.libAllExchange), onClick: d },
          s.a.createElement(
            'div',
            { className: b },
            s.a.createElement(
              'div',
              { className: U.iconWrap },
              !!l && s.a.createElement(F.a, { className: h()(U.icon, U.allExchangesIcon), icon: K })
            ),
            s.a.createElement(
              'div',
              { className: U.textBlock },
              s.a.createElement(
                'div',
                { className: h()(U.title, !f && !u && U.titleWithoutDesc) },
                s.a.createElement(Q.a, { className: h()(i && U.highlighted), queryString: p, text: o, rules: m })
              ),
              f &&
                s.a.createElement(
                  'div',
                  { className: U.description },
                  s.a.createElement(Q.a, { className: U.highlighted, queryString: p, rules: m, text: a })
                )
            )
          )
        )
      }
      var J = n('vqb8'),
        $ = n('tCqQ'),
        ee = n('oiZD'),
        te = n('zM7N')
      const ne = s.a.createContext(null)
      var re = n('poJS'),
        oe = n('6rj1'),
        ae = n('Iruf')
      const ce = { emptyTextClassName: ae.emptyText }
      function se(e) {
        const { exchanges: t } = e,
          {
            selectedExchange: n,
            setSelectedExchange: r,
            setMode: o,
            isMobile: a,
            emptyState: i,
            autofocus: l,
          } = Object($.a)(Z),
          u = Object(J.a)({ watchedValue: ee.watchedTheme }) === te.a.Dark ? re : oe,
          [d, p] = Object(c.useState)(''),
          b = Object(c.useCallback)(
            (e) => e.name.toLowerCase().includes(d.toLowerCase()) || e.desc.toLowerCase().includes(d.toLowerCase()),
            [d]
          ),
          v = Object(c.useMemo)(() => [[...t]], [t]),
          g = Object(c.useMemo)(() => {
            const e = v.filter((e) => e.some(b))
            return e
          }, [v, b]),
          y = Object(m.ensureNotNull)(n).value,
          E = Object(c.useRef)(null),
          w = Object(c.useRef)(null)
        Object(c.useLayoutEffect)(() => {
          var e
          l && (null === (e = null == E ? void 0 : E.current) || void 0 === e || e.focus())
        }, [])
        const x = i
          ? s.a.createElement(i, null)
          : s.a.createElement(
              q,
              { className: ae.noResultsDesktop },
              s.a.createElement(F.a, { icon: u }),
              s.a.createElement('div', { className: ae.emptyText }, Object(f.t)('No exchanges match your criteria'))
            )
        return s.a.createElement(
          ne.Provider,
          { value: ce },
          s.a.createElement(G.a, {
            placeholder: Object(f.t)('Search'),
            onChange: function (e) {
              p(e.target.value), w && w.current && (w.current.scrollTop = 0)
            },
            reference: E,
          }),
          g.length
            ? s.a.createElement(
                'div',
                {
                  ref: w,
                  className: h()(ae.contentList, !a && ae.contentListDesktop),
                  onTouchStart: function () {
                    var e
                    null === (e = E.current) || void 0 === e || e.blur()
                  },
                },
                g.map((e) => {
                  const { name: t, group: n } = e[0]
                  return s.a.createElement(
                    s.a.Fragment,
                    { key: t },
                    !1,
                    s.a.createElement(
                      'div',
                      { className: h()(ae.exchangeItemsContainer, !a && ae.exchangeItemsContainerDesktop) },
                      e.filter(b).map((e) => {
                        const t = O(e)
                        return s.a.createElement(Y, {
                          key: e.desc,
                          country: e.country,
                          flag: e.flag,
                          providerId: e.providerId,
                          title: t ? Object(f.t)('All Exchanges') : e.name,
                          description: e.desc,
                          isActive: e.value === y,
                          isAllExchanges: t,
                          isMobile: a,
                          queryString: d,
                          onClick: N.bind(null, e),
                        })
                      })
                    )
                  )
                })
              )
            : x
        )
        function N(e) {
          r(e), k(e), o('symbolSearch')
        }
      }
      var ie = n('G4pG')
      function le(e) {
        const {
            mode: t,
            setMode: n,
            searchRef: r,
            cachedInputValue: o,
            selectedExchange: a,
            upperCaseEnabled: i,
          } = Object(m.ensureNotNull)(Object(c.useContext)(Z)),
          l = Object(m.ensureNotNull)(a),
          u = 'symbolSearch' === t,
          d = O(l),
          { country: p, providerId: b, flag: v } = l
        return u
          ? s.a.createElement(
              'div',
              {
                className: h()(ie.flagWrap, !d && ie.text, 'apply-common-tooltip'),
                title: Object(f.t)('Select exchange'),
                onClick: function () {
                  r.current && (o.current = i ? r.current.value.toUpperCase() : r.current.value)
                  n('exchange')
                },
              },
              d ? s.a.createElement(F.a, { className: ie.icon, icon: K }) : s.a.createElement('span', null, l.value)
            )
          : null
      }
      var ue, de, pe, he, me, fe, be, ve, ge, ye, Ee
      n('Wt0y'), n('wVAQ'), n('ivNn'), n('nc0P')
      !(function (e) {
        ;(e[(e.CONNECTED = 1)] = 'CONNECTED'),
          (e[(e.CONNECTING = 2)] = 'CONNECTING'),
          (e[(e.DISCONNECTED = 3)] = 'DISCONNECTED'),
          (e[(e.ERROR = 4)] = 'ERROR')
      })(ue || (ue = {})),
        (function (e) {
          ;(e[(e.LIMIT = 1)] = 'LIMIT'),
            (e[(e.MARKET = 2)] = 'MARKET'),
            (e[(e.STOP = 3)] = 'STOP'),
            (e[(e.STOPLIMIT = 4)] = 'STOPLIMIT')
        })(de || (de = {})),
        (function (e) {
          ;(e[(e.BUY = 1)] = 'BUY'), (e[(e.SELL = -1)] = 'SELL')
        })(pe || (pe = {})),
        (function (e) {
          ;(e[(e.CANCELED = 1)] = 'CANCELED'),
            (e[(e.FILLED = 2)] = 'FILLED'),
            (e[(e.INACTIVE = 3)] = 'INACTIVE'),
            (e[(e.PLACING = 4)] = 'PLACING'),
            (e[(e.REJECTED = 5)] = 'REJECTED'),
            (e[(e.WORKING = 6)] = 'WORKING')
        })(he || (he = {})),
        (function (e) {
          ;(e[(e.ALL = 0)] = 'ALL'),
            (e[(e.CANCELED = 1)] = 'CANCELED'),
            (e[(e.FILLED = 2)] = 'FILLED'),
            (e[(e.INACTIVE = 3)] = 'INACTIVE'),
            (e[(e.REJECTED = 5)] = 'REJECTED'),
            (e[(e.WORKING = 6)] = 'WORKING')
        })(me || (me = {})),
        (function (e) {
          ;(e[(e.ORDER = 1)] = 'ORDER'), (e[(e.POSITION = 2)] = 'POSITION')
        })(fe || (fe = {})),
        (function (e) {
          ;(e[(e.LIMITPRICE = 1)] = 'LIMITPRICE'),
            (e[(e.STOPPRICE = 2)] = 'STOPPRICE'),
            (e[(e.TAKEPROFIT = 3)] = 'TAKEPROFIT'),
            (e[(e.STOPLOSS = 4)] = 'STOPLOSS')
        })(be || (be = {})),
        (function (e) {
          ;(e[(e.ERROR = 0)] = 'ERROR'), (e[(e.SUCCESS = 1)] = 'SUCCESS')
        })(ve || (ve = {})),
        (function (e) {
          ;(e.Information = 'information'), (e.Warning = 'warning'), (e.Error = 'error')
        })(ge || (ge = {})),
        (function (e) {
          ;(e.Demo = 'demo'), (e.Live = 'live')
        })(ye || (ye = {})),
        (function (e) {
          ;(e[(e.LogOut = 0)] = 'LogOut'),
            (e[(e.FailedRestoring = 1)] = 'FailedRestoring'),
            (e[(e.Offline = 2)] = 'Offline'),
            (e[(e.APIError = 3)] = 'APIError'),
            (e[(e.TwoFactorRequired = 4)] = 'TwoFactorRequired')
        })(Ee || (Ee = {}))
      n('EBrf'), n('ogJP')
      var we = n('txPx')
      n('25b6')
      Error
      Object(we.getLogger)('Trading.Utils')
      Object(f.t)('Failed to login')
      function xe(e) {
        return e.hasOwnProperty('exchange')
      }
      async function ke(e) {
        return new Promise((t) => {
          window.ChartApiInstance.searchSymbols(
            e.text || '',
            e.exchange || '',
            e.type || '',
            '',
            !1,
            !0,
            '',
            !0,
            '',
            (e) => {
              t(e)
            }
          )
        })
      }
      var Oe = n('jPOK'),
        Ne = n('K5cv'),
        Se = n('mHCH')
      function Ce(e) {
        const { children: t, onClick: n, isActive: r, activeColor: o, className: a } = e
        return s.a.createElement(
          'div',
          {
            className: h()(Se.bubble, r && Se.active, o && Se[o], a),
            onClick: n,
            onMouseDown: function (e) {
              e.preventDefault()
            },
          },
          t
        )
      }
      var Ie = n('vCF3'),
        je = n('UEVQ')
      function Te(e) {
        const {
          className: t,
          itemClassName: n,
          items: r,
          getItemTitle: o,
          getItemKey: a,
          checkItemIsActive: c,
          getItemColor: i,
          onBubbleClick: l,
          multiline: u,
          brokerTitle: d,
          checked: h,
          onCheckboxChange: m,
        } = e
        return s.a.createElement(
          'div',
          { className: p(t, je.bubbles, u && je.multiLine) },
          r.map((e, t) =>
            s.a.createElement(
              Ce,
              {
                key: a ? a(e) : t,
                className: p(je.bubble, n),
                onClick: function () {
                  l(e)
                },
                isActive: !!c && c(e),
                activeColor: i ? i(e) : void 0,
              },
              o(e)
            )
          ),
          d &&
            s.a.createElement(
              'label',
              {
                className: p('apply-common-tooltip', je.checkboxWrap),
                title: Object(f.t)('Show the markets you can place an order with {brokerName}').replace(
                  '{brokerName}',
                  d
                ),
              },
              s.a.createElement(Ie.a, { checked: h, value: h ? 'on' : 'off', onChange: m }),
              s.a.createElement('span', { className: je.label }, d)
            )
        )
      }
      var Re = n('iR1w'),
        _e = n('cvc5'),
        Me = n.n(_e),
        De = n('Ialn'),
        Le = n('h9B/')
      function Ae(e) {
        const {
            onTouchMove: t,
            listRef: n,
            className: r,
            listWrapRef: o,
            virtualListKey: a,
            items: i,
            getItemSize: l,
          } = e,
          { mode: u, isSmallWidth: d, handleListWidth: p } = Object(m.ensureNotNull)(Object(c.useContext)(Z)),
          [f, b] = Object(c.useState)(null),
          v = Object(c.useCallback)(
            (e) => {
              const { index: t, style: n } = e
              return s.a.createElement('div', { style: n }, i[t])
            },
            [i]
          ),
          g = Object(c.useCallback)((e) => Object(m.ensure)(i[e].key), [i])
        return s.a.createElement(
          Me.a,
          {
            onMeasure: function (e) {
              b(e.height), p(e.width)
            },
          },
          s.a.createElement(
            'div',
            { ref: o, className: h()(Le.wrap, r), onTouchMove: t },
            'watchlist' === u && null !== f
              ? s.a.createElement(Re.b, {
                  key: a,
                  ref: n,
                  className: Le.listContainer,
                  width: '100%',
                  height: f,
                  itemCount: i.length,
                  itemSize: l,
                  children: v,
                  itemKey: g,
                  overscanCount: 20,
                  direction: Object(De.isRtl)() ? 'rtl' : 'ltr',
                })
              : s.a.createElement('div', { className: h()(Le.listContainer, d && Le.multiLineItemsContainer) }, i)
          )
        )
      }
      var We = n('JWMC'),
        Be = n('/3z9'),
        Pe = n('FZIs'),
        Ve = n('+5L9'),
        ze = n('eIOu')
      function Fe(e) {
        const {
            dangerousTitleHTML: t,
            title: n,
            dangerousDescriptionHTML: r,
            description: o,
            searchToken: a,
            exchangeName: i,
            marketType: l,
            onClick: u,
            isSelected: d,
            isEod: p = !1,
            isActive: f = !1,
            isOffset: b = !1,
            invalid: v = !1,
            isHighlighted: g = !1,
            hideExchange: y = !1,
            onExpandClick: E,
            isExpanded: w,
            hoverComponent: x,
            country: k,
            providerId: O,
            type: N,
            flag: S,
            itemRef: C,
            onMouseOut: I,
            onMouseOver: j,
            className: T,
            actions: R,
          } = e,
          { isSmallWidth: _, isMobile: M } = Object(m.ensureNotNull)(Object(c.useContext)(Z)),
          D = Boolean(x),
          L = !v && !y && (M || !D),
          A = Object(J.a)({ watchedValue: ee.watchedTheme }) === Pe.a.Dark ? ze.dark : ze.light,
          W = x
        return s.a.createElement(
          'div',
          {
            className: h()(
              ze.itemRow,
              _ && ze.multiLine,
              g && ze.highlighted,
              g && A,
              d && ze.selected,
              f && ze.active,
              v && ze.invalid,
              !M && Modernizr.mobiletouch && D && ze.hover,
              T
            ),
            onClick: function (e, t) {
              if (!e || t.defaultPrevented) return
              t.preventDefault(), e(t)
            }.bind(null, u),
            'data-role': e['data-role'] || 'list-item',
            'data-active': f,
            onMouseOut: I,
            onMouseOver: j,
          },
          s.a.createElement(
            'div',
            { ref: C, className: h()(ze.itemInfoCell, ze.cell, b && ze.offset) },
            s.a.createElement(
              'div',
              {
                className: ze.expandHandleWrap,
                onClick: function (e) {
                  if (!E || e.defaultPrevented) return
                  e.preventDefault(), E(e)
                },
              },
              E && s.a.createElement(F.a, { className: h()(ze.expandHandle, w && ze.expanded), icon: Ve })
            ),
            s.a.createElement(
              'div',
              { className: ze.description },
              n &&
                s.a.createElement(
                  'div',
                  {
                    className: h()(ze.symbolTitle, f && ze.active, v && ze.invalid, !r && ze.noDescription),
                    'data-name': 'list-item-title',
                  },
                  'string' == typeof n && a
                    ? s.a.createElement(Q.a, {
                        className: ze.highlightedText,
                        text: n,
                        queryString: a,
                        rules: Object(H.a)(a),
                      })
                    : n,
                  p && s.a.createElement('span', { className: ze.dataMode }, 'E')
                ),
              !n &&
                t &&
                s.a.createElement(
                  'div',
                  { className: h()(ze.symbolTitle, f && ze.active, v && ze.invalid), 'data-name': 'list-item-title' },
                  s.a.createElement('span', { dangerouslySetInnerHTML: { __html: t } }),
                  p && s.a.createElement('span', { className: ze.dataMode }, 'E')
                ),
              _ && B()
            )
          ),
          !_ && B(),
          W ? s.a.createElement(W, Object.assign({}, e, { className: ze.cell })) : null,
          L &&
            s.a.createElement(
              'div',
              { className: h()(ze.exchangeCell, ze.cell) },
              s.a.createElement(
                'div',
                { className: h()(ze.exchangeDescription) },
                s.a.createElement('div', { className: h()(ze.marketType, f && ze.active) }, l),
                s.a.createElement('div', { className: h()(ze.exchangeName, f && ze.active) }, i)
              ),
              !1
            ),
          s.a.createElement('div', { className: h()(ze.cell, Boolean(R) && ze.actionsCell) }, R)
        )
        function B() {
          if (v) return null
          const e = h()(
            ze.symbolDescription,
            !_ && ze.cell,
            f && ze.active,
            !Modernizr.mobiletouch && 'apply-overflow-tooltip apply-overflow-tooltip--allow-text'
          )
          return o
            ? s.a.createElement(
                'div',
                { className: e },
                a
                  ? s.a.createElement(Q.a, {
                      className: ze.highlightedText,
                      text: o,
                      queryString: a,
                      rules: Object(H.a)(a),
                    })
                  : o
              )
            : r
            ? s.a.createElement('div', { className: e, dangerouslySetInnerHTML: { __html: r } })
            : null
        }
      }
      var Ze = n('tU7i'),
        Ge = n('ZrzP'),
        Xe = n('XDHQ'),
        qe = n('Y8Rb'),
        Qe = n('8q1k'),
        He = n('OWoh'),
        Ke = n('anmh'),
        Ue = n('Pdm7')
      function Ye(e) {
        var t
        const { state: n, update: r } = e,
          { searchRef: o, forceUpdate: a, upperCaseEnabled: i } = Object(m.ensureNotNull)(Object(c.useContext)(Z)),
          l = x(null === (t = o.current) || void 0 === t ? void 0 : t.value),
          u = I(l)
        let d = [
          { icon: Ge, insert: '/', type: 'binaryOp', name: 'division' },
          { icon: Xe, insert: '-', type: 'binaryOp', name: 'subtraction' },
          { icon: qe, insert: '+', type: 'binaryOp', name: 'addition' },
          { icon: Qe, insert: '*', type: 'binaryOp', name: 'multiplication' },
        ]
        return (
          v.enabled('hide_exponentiation_spread_operator') ||
            (d = d.concat([{ icon: He, insert: '^', type: 'binaryOp', name: 'exponentiation' }])),
          v.enabled('hide_reciprocal_spread_operator') ||
            (d = d.concat([
              {
                icon: Ke,
                type: 'complete',
                name: '1/x',
                callback: () => {
                  !o.current || u.errors.length || u.warnings.length || ((o.current.value = T(j(l))), a())
                },
              },
            ])),
          s.a.createElement(
            'div',
            { className: Ue.actions },
            d.map((e) =>
              s.a.createElement(Ze.b, {
                className: Ue.actionButton,
                icon: e.icon,
                key: e.name,
                isDisabled: Je(e, u),
                onClick: () =>
                  (function (e) {
                    var t
                    if (!Je(e, u)) {
                      if (e.insert && o.current) {
                        const t = o.current.value + e.insert
                        ;(o.current.value = t), o.current.setSelectionRange(t.length, t.length)
                        const [c, , s] = B(o.current, i)
                        n.current &&
                          ((n.current.selectedIndexValue = -1),
                          (n.current.searchSpreadsValue = _(s)),
                          (n.current.searchTokenValue = c)),
                          a(),
                          r()
                      }
                      e.callback && e.callback(),
                        null === (t = o.current) || void 0 === t || t.focus(),
                        Object(We.trackEvent)('GUI', 'SS', e.name)
                    }
                  })(e),
              })
            )
          )
        )
      }
      function Je(e, t) {
        let n = !1
        if (!t.errors.length)
          switch (e.type) {
            case 'binaryOp':
              n = 'var' === t.currentState
              break
            case 'openBrace':
              n = 'var' !== t.currentState
              break
            case 'closeBrace':
              n = 'var' === t.currentState && t.braceBalance > 0
              break
            case 'complete':
              n = !t.errors.length && !t.warnings.length
          }
        return !n
      }
      var $e = n('mdyz')
      N()
      function et(e) {
        const {
            mode: t,
            setMode: n,
            setSelectedIndex: r,
            isMobile: o,
            selectedExchange: a,
            setSelectedExchange: l,
            selectedSymbolType: u,
            setSelectedSymbolType: d,
            setRenderSymbolSearchList: p,
            searchRef: m,
            cachedInputValue: b,
            setSearchSpreads: g,
            showSpreadActions: y,
            selectedItem: E,
            onSearchFeedReady: w,
            forceUpdate: x,
            placeholder: k,
            initialScreen: O,
            footer: N,
            symbolTypes: S,
            feedItems: C,
            contentItem: I,
            searchInput: j,
            emptyState: T,
            upperCaseEnabled: R,
          } = Object($.a)(Z),
          M = Object(J.a)({ watchedValue: ee.watchedTheme }) === te.a.Dark ? re : oe,
          A = Object(c.useRef)(t)
        A.current = t
        const P = Object(c.useRef)(Ge()),
          V = Object(c.useRef)(null),
          [z, X] = Object(c.useState)(0),
          [Q, H] = Object(c.useState)('noop'),
          K = Object(c.useRef)(0),
          [U, Y] = Object(c.useState)(b.current),
          ae = Object(c.useRef)(null),
          ce = Object(c.useRef)(null),
          se = Object(c.useRef)({ selectedIndexValue: -1, searchTokenValue: '', searchSpreadsValue: !0 }),
          ie = Object(c.useRef)(null),
          le = Object(c.useRef)(null),
          ue = Object(c.useRef)(null),
          {
            brokerId: de,
            brokerTitle: pe,
            isBrokerChecked: he = !1,
            setIsBrokerChecked: me = () => {},
            unhideSymbolSearchGroups: fe = '',
          } = { brokerId: void 0, brokerTitle: void 0 }
        Object(c.useEffect)(() => {
          ;(null == m ? void 0 : m.current) && Y(m.current.value)
        }, []),
          Object(c.useEffect)(() => {
            const e = m.current
            if (e)
              return (
                e.addEventListener('input', _e),
                e.addEventListener('focus', Ve),
                e.addEventListener('select', Re),
                e.addEventListener('click', Re),
                e.addEventListener('keyup', ze),
                () => {
                  e &&
                    (e.removeEventListener('input', _e),
                    e.removeEventListener('focus', Ve),
                    e.removeEventListener('select', Re),
                    e.removeEventListener('click', Re),
                    e.removeEventListener('keyup', ze))
                }
              )
          }, []),
          Object(c.useEffect)(() => {
            ;(Boolean(O) && '' === U.trim()) ||
              (De(U, u, null == a ? void 0 : a.value), ae.current && (ae.current.scrollTop = 0))
          }, [U, u, a, he, O]),
          Object(c.useEffect)(() => {
            if (!E || !m.current) return
            if (!v.enabled('show_spread_operators')) return (m.current.value = E.symbol), void x()
            const e = xe(E) ? E.exchange : E.parent.exchange,
              [t, n] = W(m.current, E.symbol, R, e, E.prefix)
            ;(m.current.value = t), m.current.setSelectionRange(n, n), x()
          }, [E])
        const be = null != I ? I : Fe,
          ve = Object(c.useMemo)(
            () => C.map((e) => s.a.createElement(be, Object.assign({}, e, { searchToken: U }))),
            [C]
          ),
          ge = Object(c.useCallback)((e) => (w ? w(e) : e), [w]),
          ye = 'symbolSearch' === t && 'good' === Q,
          Ee = null != O ? O : 'div',
          we = Boolean(O) && 'symbolSearch' !== t,
          Se = null != j ? j : G.a,
          Ce = Object(c.useMemo)(
            () => ({
              listRef: ce,
              resetRecommends: Pe,
              updateRecommends: De,
              searchToken: U,
              emptyTextClassName: $e.emptyText,
              isBrokerChecked: he,
              symbolSearchState: Q,
              currentMode: A,
            }),
            [ce, U, he, Q, A]
          ),
          Ie = T
            ? s.a.createElement(T, null)
            : s.a.createElement(
                q,
                { className: $e.noResultsDesktop },
                s.a.createElement(F.a, { icon: M }),
                s.a.createElement('div', { className: $e.emptyText }, Object(f.t)('No symbols match your criteria'))
              )
        return s.a.createElement(
          ne.Provider,
          { value: Ce },
          s.a.createElement(
            Se,
            { reference: m, className: h()($e.search, R && $e.upperCase), placeholder: k || Object(f.t)('Search') },
            y && s.a.createElement(Ye, { state: se, update: Me })
          ),
          we
            ? s.a.createElement(Ee, null)
            : s.a.createElement(
                s.a.Fragment,
                null,
                'symbolSearch' === t &&
                  s.a.createElement(
                    s.a.Fragment,
                    null,
                    S.length > 0 &&
                      s.a.createElement(Te, {
                        items: S,
                        getItemTitle: (e) => e.name,
                        getItemKey: (e) => e.value,
                        checkItemIsActive: (e) => e.value === u,
                        onBubbleClick: function (e) {
                          const { value: t } = e
                          d(t), r(-1), tt(t)
                        },
                        multiline: !o,
                        brokerTitle: pe,
                        checked: he,
                        onCheckboxChange: function (e) {
                          me('on' !== e)
                        },
                      }),
                    'loading' === Q &&
                      s.a.createElement('div', { className: $e.spinnerWrap }, s.a.createElement(Oe.a, null)),
                    !1,
                    'empty' === Q && Ie
                  ),
                s.a.createElement(Ae, {
                  className: h()(!ye && $e.hidden),
                  listRef: ce,
                  listWrapRef: ae,
                  onTouchMove: function () {
                    var e
                    null === (e = m.current) || void 0 === e || e.blur()
                  },
                  items: ve,
                  getItemSize: () => 52,
                })
              ),
          N
        )
        function je() {
          if (!m.current) return
          const [e, t, n] = B(m.current, R)
          ;(K.current = t),
            (se.current = { selectedIndexValue: -1, searchSpreadsValue: _(n), searchTokenValue: e }),
            ie.current || (ie.current = setTimeout(Me, 0))
        }
        function Re() {
          if (!m.current) return
          const [, e] = B(m.current, R)
          e !== K.current && je()
        }
        function _e() {
          v.enabled('show_spread_operators')
            ? je()
            : m.current &&
              ((se.current = { selectedIndexValue: -1, searchSpreadsValue: !1, searchTokenValue: m.current.value }),
              ie.current || (ie.current = setTimeout(Me, 0)))
        }
        function Me() {
          const { selectedIndexValue: e, searchTokenValue: t, searchSpreadsValue: n } = se.current
          ;(ie.current = null),
            Object(i.unstable_batchedUpdates)(() => {
              g(n), r(e), Y(R ? t.toUpperCase() : t)
            })
        }
        function De(e, t, n) {
          'noop' === Q
            ? H('loading')
            : (Ze(),
              (le.current = setTimeout(() => {
                H('loading')
              }, 500))),
            V.current && Xe()
          const r = (V.current = (function (e, t, n) {
            var r, o
            ue.current && clearTimeout(ue.current)
            const c = v.enabled('show_spread_operators')
                ? D(e)
                : null === (r = m.current) || void 0 === r
                ? void 0
                : r.value,
              s = v.enabled('show_spread_operators') ? L(e) || n : null == a ? void 0 : a.value,
              i = {
                serverHighlight: !1,
                text: c,
                exchange: s,
                type: t,
                lang: window.language || '',
                brokerId: de,
                onlyTradable: Boolean(de) && he,
                unhideSymbolSearchGroups: fe,
                signal: null === (o = null == P ? void 0 : P.current) || void 0 === o ? void 0 : o.signal,
              },
              l = Object(Ne.getSearchRequestDelay)()
            return void 0 !== l
              ? new Promise((e) => {
                  ue.current = setTimeout(() => {
                    ke(i)
                      .then((t) => e(t))
                      .catch(Le)
                  }, l)
                })
              : ke(i)
          })(e, t, n)
            .then((e) => {
              if (r === V.current) {
                if (
                  !(e = ge(
                    (function (e, t = window.ChartApiInstance.symbolsGrouping()) {
                      var n
                      const r = {},
                        o = []
                      for (let a = 0; a < e.length; ++a) {
                        const c = e[a]
                        if (c.prefix || Array.isArray(c.contracts)) return e
                        const s = t[c.type]
                        if (void 0 === s) {
                          o.push(c)
                          continue
                        }
                        const i = s.exec(c.symbol)
                        if (i) {
                          const e = i[1]
                          let t
                          r.hasOwnProperty(e)
                            ? (t = r[e])
                            : ((t = o.length),
                              (r[e] = t),
                              o.push({
                                type: c.type,
                                symbol: e,
                                exchange: c.exchange,
                                description: c.description,
                                full_name: c.exchange + ':' + e,
                                contracts: [],
                              })),
                            null === (n = o[t].contracts) || void 0 === n || n.push(c)
                        } else o.push(c)
                      }
                      return o
                    })(e)
                  )).length
                )
                  return Ze(), void H('empty')
                Ze(), p(e), H('good')
              }
            })
            .catch(Le))
        }
        function Le(e) {
          if ('AbortError' !== e.name) throw e
        }
        function Pe() {
          ;(V.current = null), H('empty'), Y(''), g(!1), Ze()
        }
        function Ve() {
          'watchlist' === A.current &&
            (n('symbolSearch'), Object(We.trackEvent)('Watchlist', 'Mobile SS', 'Go to SS page'))
        }
        function ze(e) {
          switch (Object(Be.hashFromEvent)(e)) {
            case 37:
            case 39:
              Re()
          }
        }
        function Ze() {
          le.current && clearTimeout(le.current)
        }
        function Ge() {
          try {
            return new AbortController()
          } catch (e) {
            return null
          }
        }
        function Xe() {
          P && P.current && (P.current.abort(), (P.current = Ge()))
        }
      }
      function tt(e) {
        b.setValue('symboledit.filter', e)
      }
      var nt = n('U0JK'),
        rt = n('hYF9')
      function ot() {
        const { setMode: e, isMobile: t } = Object(m.ensureNotNull)(Object(c.useContext)(Z))
        return s.a.createElement(F.a, {
          className: h()(rt.backButton, !t && rt.desktop),
          icon: nt,
          onClick: function () {
            e('symbolSearch')
          },
        })
      }
      var at,
        ct = n('w3Pp')
      !(function (e) {
        function t(e) {
          return e.pro_name
        }
        ;(e.fromQuotesResponse = function (e) {
          const { values: n, symbolname: r, status: o } = e
          return 'error' === o && r ? r : t(n)
        }),
          (e.fromQuotes = t),
          (e.fromSymbolSearchResult = function (e, t) {
            {
              const { ticker: n, full_name: r } = null != t ? t : e
              return v.enabled('pay_attention_to_ticker_not_symbol')
                ? Object(m.ensureDefined)(null != n ? n : r)
                : Object(m.ensureDefined)(r)
            }
          }),
          (e.fromSymbolInfo = function (e) {
            return e.pro_name
          })
      })(at || (at = {}))
      var st = n('ozXl')
      const it = S(),
        lt = N(),
        ut = v.enabled('uppercase_instrument_names')
      function dt(e) {
        const {
            onClose: t,
            initialMode: n,
            defaultValue: r = '',
            showSpreadActions: o,
            selectSearchOnInit: a = !0,
            onSearchComplete: i,
            onSearchFeedReady: l,
            dialogTitle: u = Object(f.t)('Symbol Search'),
            placeholder: d,
            fullscreen: p,
            initialScreen: g,
            wrapper: y,
            dialog: E,
            contentItem: w,
            footer: k,
            symbolTypes: O = C(),
            searchInput: N,
            emptyState: S,
            autofocus: j,
            dialogWidth: T,
          } = e,
          [R, _] = Object(c.useState)(n),
          M = Object(c.useRef)(r),
          [D, L] = Object(c.useState)(ft),
          [A, B] = Object(c.useState)(function () {
            const e = b.getValue('symboledit.filter', '')
            if (O.find((t) => t.value === e)) return e
            return ''
          }),
          [F, G] = Object(c.useState)([]),
          [X, q] = Object(c.useState)(!1),
          [Q, H] = Object(c.useState)(-1),
          K = Object(c.useRef)(null),
          [U, Y] = Object(c.useState)(!1),
          [J, $] = Object(c.useState)(0),
          [ee, te] = Object(c.useState)(new Set()),
          { brokerId: ne, unhideSymbolSearchGroups: re = '', displayBrokerSymbol: oe = !1 } = { brokerId: void 0 }
        Object(c.useLayoutEffect)(() => {
          var e
          ;(null == K ? void 0 : K.current) &&
            !(null === (e = null == K ? void 0 : K.current) || void 0 === e ? void 0 : e.value) &&
            ('compare' !== R && (K.current.value = M.current), j && K.current.focus())
        }, [R]),
          Object(c.useEffect)(() => {
            ;(null == K ? void 0 : K.current) && a && j && K.current.select()
          }, [])
        const ae = Object(c.useMemo)(
            () =>
              F.reduce((e, t) => {
                const n = mt(t),
                  r = ee.has(n)
                return (
                  e.push(t),
                  r &&
                    t.contracts &&
                    e.push(...t.contracts.map((e) => Object.assign(Object.assign({}, e), { parent: t }))),
                  e
                )
              }, []),
            [F, ee]
          ),
          ce = Object(c.useRef)(null)
        Object(c.useEffect)(() => {
          var e
          ;-1 !== Q && (null === (e = ce.current) || void 0 === e || e.scrollIntoView({ block: 'nearest' }))
        }, [Q, ce])
        const ie = Object(c.useMemo)(
            () =>
              ae.map((e, t) => {
                var n, r, o, a
                if (xe(e)) {
                  const o = mt(e),
                    a = e.contracts ? ee.has(o) : void 0,
                    c = t === Q
                  return {
                    key: t,
                    id: o,
                    title: ht(e, oe),
                    description: e.description,
                    isOffset: !1,
                    onClick: fe.bind(null, e),
                    providerId: e.provider_id,
                    country: null === (n = e.country) || void 0 === n ? void 0 : n.toLocaleLowerCase(),
                    type: e.type,
                    exchangeName: e.exchange,
                    marketType: Object(ct.marketType)(e.type, e.typespecs),
                    isEod: null === (r = e.params) || void 0 === r ? void 0 : r.includes('eod'),
                    isExpanded: a,
                    onExpandClick: e.contracts ? be.bind(null, o) : void 0,
                    fullSymbolName: at.fromSymbolSearchResult(e),
                    itemRef: c ? ce : void 0,
                    isSelected: t === Q,
                  }
                }
                {
                  const { parent: n } = e,
                    r = mt(n),
                    c = t === Q
                  return {
                    key: t,
                    id: r + e.symbol,
                    dangerousTitleHTML: ht(e, oe),
                    dangerousDescriptionHTML: `${n.description} (${e.description})`,
                    isOffset: !0,
                    isEod: null === (o = e.params) || void 0 === o ? void 0 : o.includes('eod'),
                    onClick: ve.bind(null, e.parent, e),
                    providerId: n.provider_id,
                    country: null === (a = n.country) || void 0 === a ? void 0 : a.toLowerCase(),
                    type: n.type,
                    exchangeName: n.exchange,
                    marketType: Object(ct.marketType)(n.type, e.typespecs),
                    fullSymbolName: at.fromSymbolSearchResult(e.parent, e),
                    itemRef: c ? ce : void 0,
                    isSelected: c,
                  }
                }
              }),
            [F, ee, R, Q]
          ),
          ue = (e, n) => ({
            mode: R,
            setMode: _,
            selectedExchange: D,
            setSelectedExchange: L,
            selectedSymbolType: A,
            setSelectedSymbolType: B,
            selectedIndex: Q,
            setSelectedIndex: H,
            onClose: t,
            setRenderSymbolSearchList: G,
            searchRef: K,
            cachedInputValue: M,
            searchSpreads: X,
            setSearchSpreads: q,
            handleListWidth: ge,
            isSmallWidth: U,
            feedItems: ie,
            isMobile: e,
            showSpreadActions: o,
            selectSearchOnInit: a,
            isTablet: n,
            selectedItem: ae[Q],
            onSearchFeedReady: l,
            forceUpdate: me,
            placeholder: d,
            initialScreen: g,
            toggleExpand: be,
            openedItems: ee,
            onSubmit: we,
            onSearchComplete: i,
            footer: k,
            symbolTypes: O,
            contentItem: w,
            searchInput: N,
            emptyState: S,
            autofocus: j,
            upperCaseEnabled: ut,
          }),
          de = D && it.length > 1 && !0,
          pe =
            de && 'exchange' === R
              ? {
                  title: Object(f.t)('Exchange'),
                  dataName: 'exchanges-search',
                  render: () => s.a.createElement(se, { exchanges: it }),
                  additionalHeaderElement: s.a.createElement(ot, null),
                  additionalElementPos: 'before',
                }
              : {
                  title: u,
                  dataName: 'symbol-search-items-dialog',
                  render: () => s.a.createElement(et, null),
                  additionalHeaderElement: de ? s.a.createElement(le, null) : void 0,
                  additionalElementPos: 'after',
                },
          he = null != y ? y : 'div'
        return s.a.createElement(
          he,
          null,
          s.a.createElement(P.a, { rules: V.a }, ({ TabletSmall: e, TabletNormal: n }) =>
            s.a.createElement(
              Z.Provider,
              { value: ue(e, n) },
              E
                ? (function () {
                    const e = Object(m.ensureDefined)(E)
                    return s.a.createElement(e, Object.assign({}, pe, { onClickOutside: t, onClose: t, isOpened: !0 }))
                  })()
                : (function (e, n) {
                    return s.a.createElement(
                      z.a,
                      Object.assign(
                        {
                          className: h()(st.dialog, !e && (n ? st.tabletDialog : st.desktopDialog)),
                          fullScreen: p,
                          onKeyDown: Ee,
                          onClickOutside: t,
                          onClose: t,
                          backdrop: !0,
                          isOpened: !0,
                          draggable: !1,
                        },
                        pe
                      )
                    )
                  })(e, n)
            )
          )
        )
        function me() {
          $(J + 1)
        }
        function fe(e) {
          e.contracts ? be(mt(e)) : ve(e)
        }
        function be(e) {
          const t = new Set(ee)
          t.has(e) ? t.delete(e) : t.add(e), te(t)
        }
        function ve(e, n) {
          const r = n || e,
            { exchange: o } = e
          if (v.enabled('show_spread_operators')) {
            const { symbol: e, prefix: t } = r
            if (X) return ye(e, o, t), void me()
            if (K.current && K.current.value.includes(',')) return void ye(e, o, t)
          }
          const a = [{ resolved: !0, symbol: at.fromSymbolSearchResult(e, n), result: r }]
          i(a), t()
        }
        function ge(e) {
          Y('fixed' === T || e <= 640)
        }
        function ye(e, t, n) {
          if (!K.current) return
          const [r, o] = W(K.current, e, ut, t, n)
          ;(K.current.value = r), K.current.setSelectionRange(o, o), K.current.focus()
        }
        function Ee(e) {
          switch (Object(Be.hashFromEvent)(e)) {
            case 38:
              if ((e.preventDefault(), 0 === Q)) return
              if (-1 === Q) return void H(0)
              H(Q - 1)
              break
            case 40:
              if ((e.preventDefault(), Q === ie.length - 1)) return
              H(Q + 1)
              break
            case 37: {
              if (-1 === Q) return
              const t = ie[Q],
                { id: n, isOffset: r, onExpandClick: o } = t
              !r && n && ee.has(n) && Boolean(o) && (e.preventDefault(), be(n))
              break
            }
            case 39: {
              if (-1 === Q) return
              const t = ie[Q],
                { id: n, isOffset: r, onExpandClick: o } = t
              !r && n && !ee.has(n) && Boolean(o) && (e.preventDefault(), be(n))
              break
            }
            case 13:
              we(!0)
              break
            case 27:
              e.preventDefault(), t()
          }
        }
        function we(e) {
          if (!K.current) return
          const n = K.current.value
          if (v.enabled('show_spread_operators') && X && n) {
            if (n.includes(',')) {
              const r = bt(n)
              if (r.some((e) => !Oe(e))) return
              return i(r.map(pt)), void (e && t())
            }
            if (!Oe(n)) return
            return i([{ symbol: ut ? n.toUpperCase() : n, resolved: !1 }]), void (e && t())
          }
          if (n.includes(',')) return i(bt(n).map(pt)), void (e && t())
          if (-1 !== Q) {
            ie[Q].onClick()
          } else {
            const r = ut ? n.toUpperCase() : n
            if (r && '' !== r.trim()) {
              const e = bt(r)
              if (void 0 !== ne && -1 === r.indexOf(':'))
                (function (e) {
                  let t = !1
                  return Promise.all(
                    e.map((e) =>
                      -1 !== e.indexOf(':') || t
                        ? Promise.resolve({ symbol: e, resolved: !1 })
                        : ((t = !0),
                          (function (e) {
                            return new Promise((t) => {
                              ke({
                                strictMatch: !0,
                                serverHighlight: !1,
                                text: e,
                                lang: window.language || '',
                                brokerId: ne,
                                onlyTradable: !0,
                                unhideSymbolSearchGroups: re,
                              }).then((n) => {
                                if (n.length) {
                                  const e = n[0],
                                    { contracts: r } = e,
                                    o = r && r.length > 0 ? r[0] : void 0,
                                    a = e.prefix || e.exchange,
                                    c = o ? o.symbol : e.symbol
                                  if (a && c)
                                    return void t({ symbol: at.fromSymbolSearchResult(e, o), resolved: !0, result: e })
                                }
                                t({ symbol: e, resolved: !1 })
                              })
                            })
                          })(e))
                    )
                  )
                })(e).then((e) => i(e))
              else {
                const t = e.map(pt)
                i(t)
              }
            }
            e && t()
          }
        }
        function Oe(e) {
          const t = I(x(e))
          if (t.errors.length || t.warnings.length) return !1
          const n = ie[Q]
          return !n || void 0 === n.isExpanded || (n.onClick(), !1)
        }
      }
      function pt(e) {
        return { symbol: ut ? e.toUpperCase() : e, resolved: !1 }
      }
      function ht(e, t) {
        const { broker_symbol: n, symbol: r } = e
        return `${r}${t && n ? ` (${n})` : ''}`
      }
      function mt(e) {
        return e.symbol + e.exchange + e.description
      }
      function ft() {
        const e = b.getValue('symboledit.exchangefilter', '')
        return it.find((t) => t.value === e) || lt
      }
      function bt(e) {
        return e
          .split(',')
          .map((e) => e.trim())
          .filter((e) => '' !== e)
      }
      const vt = new d.a()
      function gt(e) {
        const {
          initialMode: t = 'symbolSearch',
          autofocus: n = !0,
          defaultValue: r,
          showSpreadActions: o,
          selectSearchOnInit: a,
          onSearchComplete: c,
          onSearchFeedReady: d,
          dialogTitle: p,
          placeholder: h,
          fullscreen: m,
          initialScreen: f,
          wrapper: b,
          dialog: v,
          contentItem: g,
          onClose: y,
          footer: E,
          symbolTypes: w,
          searchInput: x,
          emptyState: k,
          dialogWidth: O = 'auto',
          manager: N,
        } = e
        if (vt.isOpened('symbolSearch')) return
        const S = document.createElement('div'),
          C = s.a.createElement(
            l.b.Provider,
            { value: null != N ? N : null },
            s.a.createElement(
              u.Provider,
              { value: null },
              s.a.createElement(dt, {
                onClose: I,
                initialMode: t,
                defaultValue: r,
                showSpreadActions: o,
                onSearchFeedReady: d,
                selectSearchOnInit: a,
                onSearchComplete: c,
                dialogTitle: p,
                placeholder: h,
                fullscreen: m,
                initialScreen: f,
                wrapper: b,
                dialog: v,
                contentItem: g,
                footer: E,
                symbolTypes: w,
                searchInput: x,
                emptyState: k,
                autofocus: n,
                dialogWidth: O,
              })
            )
          )
        function I() {
          i.unmountComponentAtNode(S), vt.setAsClosed('symbolSearch'), y && y()
        }
        return i.render(C, S), vt.setAsOpened('symbolSearch'), { close: I }
      }
      var yt = n('mNbo')
      n('qFKp')
      const Et = s.a.createContext(null)
      var wt = n('+wZE'),
        xt = n('nbir'),
        kt = n('lIPv'),
        Ot = n('32FQ')
      function Nt(e) {
        const { isSelected: t, existInWatchlist: n, findInWatchlist: r, addToWatchlist: o, removeFromWatchlist: a } = e,
          { selectedAction: i } = Object(m.ensureNotNull)(Object(c.useContext)(Et))
        return s.a.createElement(
          s.a.Fragment,
          null,
          n
            ? s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(wt.a, {
                  className: h()(ze.action, ze.removeAction, t && 2 === i && ze.selected, 'apply-common-tooltip'),
                  onClick: a,
                  icon: xt,
                  title: Object(f.t)('Remove from Watchlist'),
                }),
                s.a.createElement(wt.a, {
                  className: h()(ze.action, ze.targetAction, t && 1 === i && ze.selected, 'apply-common-tooltip'),
                  onClick: r,
                  icon: Ot,
                  title: Object(f.t)('Go to symbol'),
                })
              )
            : s.a.createElement(wt.a, {
                className: h()(ze.action, ze.addAction, t && 0 === i && ze.selected, 'apply-common-tooltip'),
                onClick: o,
                icon: kt,
                title: Object(f.t)('Add to Watchlist'),
              })
        )
      }
      function St(e, t) {
        window.runOrSignIn(e, t)
      }
      function Ct(e) {
        const {
            addToWatchlist: t,
            removeFromWatchlist: n,
            findInWatchlist: o,
            existInWatchlist: a,
            isSelected: i,
            fullSymbolName: l,
          } = e,
          u = Object(r.a)(e, [
            'addToWatchlist',
            'removeFromWatchlist',
            'findInWatchlist',
            'existInWatchlist',
            'isSelected',
            'fullSymbolName',
          ]),
          { onClose: d, searchRef: p, searchSpreads: h } = Object(m.ensureNotNull)(Object(c.useContext)(Z)),
          {
            setSelectedAction: f,
            isSpreadOrMultipleMode: b,
            addAfter: v,
            clearTargetSymbol: g,
            highlighted: y,
            highlight: E,
          } = Object(m.ensureNotNull)(Object(c.useContext)(Et)),
          w = b(h, p)
        return (
          Object(c.useLayoutEffect)(() => {
            i && f(void 0 !== a ? (a ? 2 : 0) : null)
          }, [i, a]),
          s.a.createElement(
            Fe,
            Object.assign({}, u, {
              fullSymbolName: l,
              onClick: w
                ? e.onClick
                : function (r) {
                    if (void 0 === l) return
                    if (void 0 === a) return void Object(m.ensureDefined)(e.onClick)(r)
                    a
                      ? (n('watchlist-widget', l), k('watchlist remove click', r), v === l && g())
                      : (St(
                          () => {
                            t('watchlist-widget', [l], v), e.id && E(e.id)
                          },
                          { source: 'add symbol to watchlist' }
                        ),
                        k('watchlist add click', r))
                    x(r)
                  },
              isHighlighted: y === e.id,
              isSelected: i,
              actions:
                void 0 === a || w
                  ? void 0
                  : s.a.createElement(Nt, {
                      isSelected: i,
                      existInWatchlist: a,
                      addToWatchlist: function (n) {
                        if ((n.stopPropagation(), void 0 === l)) return
                        St(
                          () => {
                            t('watchlist-widget', [l], v), e.id && E(e.id)
                          },
                          { source: 'add symbol to watchlist' }
                        ),
                          x(n),
                          k('watchlist add button', n)
                      },
                      removeFromWatchlist: function (e) {
                        if ((e.stopPropagation(), void 0 === l)) return
                        n('watchlist-widget', l), x(e), k('watchlist remove button', e), v === l && g()
                      },
                      findInWatchlist: function (e) {
                        if ((e.stopPropagation(), void 0 === l)) return
                        o('watchlist-widget', l), d(), k('watchlist goto button')
                      },
                    }),
            })
          )
        )
        function x(e) {
          var t
          Object(Be.modifiersFromEvent)(e) === Be.Modifiers.Shift
            ? d()
            : Modernizr.mobiletouch || null === (t = p.current) || void 0 === t || t.select()
        }
        function k(e, t) {
          let n = e
          t && Object(Be.modifiersFromEvent)(t) === Be.Modifiers.Shift && (n += ' shift'),
            Object(We.trackEvent)('GUI', 'SS', n)
        }
      }
      var It = n('JkYd')
      function jt(e) {
        const { addToWatchlist: t, removeFromWatchlist: n, findInWatchlist: o } = e,
          a = Object(r.a)(e, ['addToWatchlist', 'removeFromWatchlist', 'findInWatchlist']),
          {
            feedItems: i,
            searchRef: l,
            searchSpreads: u,
            openedItems: d,
            selectedIndex: p,
            toggleExpand: f,
            onSubmit: b,
            setSelectedIndex: v,
            onClose: g,
            isMobile: y,
            isTablet: E,
          } = Object(m.ensureNotNull)(Object(c.useContext)(Z)),
          {
            selectedAction: w,
            setSelectedAction: x,
            isSpreadOrMultipleMode: k,
            addAfter: O,
            clearTargetSymbol: N,
            highlight: S,
          } = Object(m.ensureNotNull)(Object(c.useContext)(Et)),
          C = i[p]
        return s.a.createElement(
          z.a,
          Object.assign({}, a, {
            className: h()(It.dialog, !y && (E ? It.tabletDialog : It.desktopDialog)),
            dataName: 'watchlist-symbol-search-dialog',
            onKeyDown: function (e) {
              var t
              switch (Object(Be.hashFromEvent)(e)) {
                case 38:
                  if ((e.preventDefault(), 0 === p)) return
                  if (-1 === p) return void v(0)
                  v(p - 1)
                  break
                case 40:
                  if ((e.preventDefault(), p === i.length - 1)) return
                  v(p + 1)
                  break
                case 37: {
                  if (!C) return
                  const { id: t, isOffset: n, onExpandClick: r } = C
                  if (!n && t && Boolean(r) && d.has(t)) return e.preventDefault(), void f(t)
                  1 === w && (e.preventDefault(), x(2))
                  break
                }
                case 39: {
                  if (!C) return
                  const { id: t, isOffset: n, onExpandClick: r } = C
                  if (!n && t && Boolean(r) && !d.has(t)) return e.preventDefault(), void f(t)
                  2 === w && (e.preventDefault(), x(1))
                  break
                }
                case 13:
                  if (k(u, l)) return void b(!0)
                  C ? I(!1) : b(!1), null === (t = l.current) || void 0 === t || t.select()
                  break
                case 13 + Be.Modifiers.Shift:
                  if (k(u, l)) return void b(!0)
                  C ? I(!0) : b(!0)
                  break
                case 27:
                  e.preventDefault(), g()
              }
            },
            backdrop: !0,
            draggable: !1,
          })
        )
        function I(e) {
          if (!C || void 0 === C.fullSymbolName) return
          const { fullSymbolName: r, isOffset: a, id: c, onExpandClick: s } = C
          if (!a && c && Boolean(s)) f(c)
          else {
            switch (w) {
              case 0:
                St(
                  () => {
                    t('watchlist-widget', [r], O), C.id && S(C.id)
                  },
                  { source: 'add symbol to watchlist' }
                )
                break
              case 1:
                return o('watchlist-widget', r), void g()
              case 2:
                n('watchlist-widget', r), O === r && N()
            }
            e && g()
          }
        }
      }
      n.d(t, 'showDefaultSearchDialog', function () {
        return Tt
      }),
        n.d(t, 'showSymbolSearchItemsDialog', function () {
          return gt
        }),
        n.d(t, 'SymbolSearchWatchlistDialogContentItem', function () {
          return Ct
        }),
        n.d(t, 'SymbolSearchWatchlistDialog', function () {
          return jt
        })
      !Object(yt.a)('any') && window.matchMedia('(min-width: 602px) and (min-height: 445px)').matches
      function Tt(e) {
        const { defaultValue: t, showSpreadActions: n, source: c } = e,
          s = Object(r.a)(e, ['defaultValue', 'showSpreadActions', 'source']),
          i = Object.assign(Object.assign({}, s), {
            showSpreadActions: null != n ? n : Object(a.canShowSpreadActions)(),
            onSearchComplete: (e) => {
              o.linking.symbol.setValue(e[0].symbol)
            },
          })
        gt(Object.assign(Object.assign({}, i), { defaultValue: t }))
      }
    },
    Iivm: function (e, t, n) {
      'use strict'
      var r = n('mrSG'),
        o = n('q1tI')
      const a = o.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          a = Object(r.a)(e, ['icon'])
        return o.createElement('span', Object.assign({}, a, { ref: t, dangerouslySetInnerHTML: { __html: n } }))
      })
      n.d(t, 'a', function () {
        return a
      })
    },
    Iruf: function (e, t, n) {
      e.exports = {
        container: 'container-oVVv2l_M',
        contentList: 'contentList-oVVv2l_M',
        contentListDesktop: 'contentListDesktop-oVVv2l_M',
        exchangeItemsContainer: 'exchangeItemsContainer-oVVv2l_M',
        exchangeItemsContainerDesktop: 'exchangeItemsContainerDesktop-oVVv2l_M',
        groupTitleDesktop: 'groupTitleDesktop-oVVv2l_M',
        emptyText: 'emptyText-oVVv2l_M',
        noResultsDesktop: 'noResultsDesktop-oVVv2l_M',
      }
    },
    JkYd: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-19oA2XwG',
        tabletDialog: 'tabletDialog-19oA2XwG',
        desktopDialog: 'desktopDialog-19oA2XwG',
      }
    },
    OWoh: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M3 7l3.5-3.5L10 7"/></svg>'
    },
    'P4l+': function (e, t, n) {},
    Pdm7: function (e, t, n) {
      e.exports = { actions: 'actions-3cho5KDh', actionButton: 'actionButton-3cho5KDh' }
    },
    SAe1: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('q1tI'),
        o = n('rzV7'),
        a = n.n(o)
      class c extends r.Component {
        constructor(e) {
          super(e),
            (this._handleMediaChange = () => {
              const e = i(this.state.queries, (e, t) => t.matches)
              let t = !1
              for (const n in e)
                if (e.hasOwnProperty(n) && this.state.matches[n] !== e[n]) {
                  t = !0
                  break
                }
              t && this.setState({ matches: e })
            })
          const { rules: t } = this.props
          this.state = s(t)
        }
        shouldComponentUpdate(e, t) {
          return !a()(e, this.props) || !a()(t.rules, this.state.rules) || !a()(t.matches, this.state.matches)
        }
        componentDidMount() {
          this._migrate(null, this.state.queries)
        }
        componentDidUpdate(e, t) {
          a()(e.rules, this.props.rules) || this._migrate(t.queries, this.state.queries)
        }
        componentWillUnmount() {
          this._migrate(this.state.queries, null)
        }
        render() {
          return this.props.children(this.state.matches)
        }
        static getDerivedStateFromProps(e, t) {
          if (a()(e.rules, t.rules)) return null
          const { rules: n } = e
          return s(n)
        }
        _migrate(e, t) {
          null !== e &&
            i(e, (e, t) => {
              t.removeListener(this._handleMediaChange)
            }),
            null !== t &&
              i(t, (e, t) => {
                t.addListener(this._handleMediaChange)
              })
        }
      }
      function s(e) {
        const t = i(e, (e, t) => window.matchMedia(t))
        return { queries: t, matches: i(t, (e, t) => t.matches), rules: Object.assign({}, e) }
      }
      function i(e, t) {
        const n = {}
        for (const r in e) e.hasOwnProperty(r) && (n[r] = t(r, e[r]))
        return n
      }
    },
    U0JK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>'
    },
    UEVQ: function (e, t, n) {
      e.exports = {
        bubbles: 'bubbles-1cEBkyVM',
        multiLine: 'multiLine-1cEBkyVM',
        bubble: 'bubble-1cEBkyVM',
        checkboxWrap: 'checkboxWrap-1cEBkyVM',
        label: 'label-1cEBkyVM',
      }
    },
    UN6M: function (e, t, n) {
      e.exports = { childrenWrapper: 'childrenWrapper-th__KurO', container: 'container-th__KurO' }
    },
    WcWV: function (e, t, n) {
      e.exports = { button: 'button-2zRC9WmY', disabled: 'disabled-2zRC9WmY' }
    },
    XDHQ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M2.5 6.5h8"/></svg>'
    },
    Y8Rb: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M2.5 6.5h8m-4-4v8"/></svg>'
    },
    ZrzP: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-linecap="square" d="M2.5 6.5h9"/><circle fill="currentColor" cx="7" cy="3" r="1"/><circle fill="currentColor" cx="7" cy="10" r="1"/></svg>'
    },
    aJjg: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
    },
    anmh: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="round" d="M3.5 10V2.5L1 5"/><path stroke-linecap="square" d="M1.5 10.5h4"/><path d="M8 12l3-11"/></g></svg>'
    },
    bQ7Y: function (e, t, n) {
      e.exports = {
        button: 'button-2Vpz_LXc',
        hover: 'hover-2Vpz_LXc',
        isInteractive: 'isInteractive-2Vpz_LXc',
        isGrouped: 'isGrouped-2Vpz_LXc',
        isActive: 'isActive-2Vpz_LXc',
        isOpened: 'isOpened-2Vpz_LXc',
        isDisabled: 'isDisabled-2Vpz_LXc',
        text: 'text-2Vpz_LXc',
        icon: 'icon-2Vpz_LXc',
      }
    },
    eIOu: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        itemRow: 'itemRow-ZzQNZGNo',
        multiLine: 'multiLine-ZzQNZGNo',
        cell: 'cell-ZzQNZGNo',
        itemInfoCell: 'itemInfoCell-ZzQNZGNo',
        description: 'description-ZzQNZGNo',
        symbolDescription: 'symbolDescription-ZzQNZGNo',
        flag: 'flag-ZzQNZGNo',
        exchangeDescription: 'exchangeDescription-ZzQNZGNo',
        marketType: 'marketType-ZzQNZGNo',
        exchangeName: 'exchangeName-ZzQNZGNo',
        expandHandleWrap: 'expandHandleWrap-ZzQNZGNo',
        expandHandle: 'expandHandle-ZzQNZGNo',
        hover: 'hover-ZzQNZGNo',
        selected: 'selected-ZzQNZGNo',
        active: 'active-ZzQNZGNo',
        highlighted: 'highlighted-ZzQNZGNo',
        light: 'light-ZzQNZGNo',
        'highlight-animation-theme-light': 'highlight-animation-theme-light-ZzQNZGNo',
        dark: 'dark-ZzQNZGNo',
        'highlight-animation-theme-dark': 'highlight-animation-theme-dark-ZzQNZGNo',
        offset: 'offset-ZzQNZGNo',
        exchangeCell: 'exchangeCell-ZzQNZGNo',
        expanded: 'expanded-ZzQNZGNo',
        symbolTitle: 'symbolTitle-ZzQNZGNo',
        invalid: 'invalid-ZzQNZGNo',
        noDescription: 'noDescription-ZzQNZGNo',
        highlightedText: 'highlightedText-ZzQNZGNo',
        icon: 'icon-ZzQNZGNo',
        dataMode: 'dataMode-ZzQNZGNo',
        actionsCell: 'actionsCell-ZzQNZGNo',
        action: 'action-ZzQNZGNo',
        targetAction: 'targetAction-ZzQNZGNo',
        removeAction: 'removeAction-ZzQNZGNo',
        addAction: 'addAction-ZzQNZGNo',
      }
    },
    'h9B/': function (e, t, n) {
      e.exports = {
        wrap: 'wrap-2WiKHt6t',
        listContainer: 'listContainer-2WiKHt6t',
        multiLineItemsContainer: 'multiLineItemsContainer-2WiKHt6t',
      }
    },
    hYF9: function (e, t, n) {
      e.exports = { backButton: 'backButton-P2GOgq9R', desktop: 'desktop-P2GOgq9R' }
    },
    jPOK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('q1tI'),
        o = n('TSYQ'),
        a = n('Owlf')
      n('SzKR')
      function c(e) {
        const t = o('tv-spinner', 'tv-spinner--shown', 'tv-spinner--size_' + (e.size || a.a))
        return r.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          r.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            r.createElement('div', { className: 'tv-spinner__background tv-spinner__width_element' }),
            r.createElement('div', {
              className: 'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            r.createElement('div', {
              className: 'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            })
          )
        )
      }
    },
    lIPv: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.9 14.1V22h1.2v-7.9H23v-1.2h-7.9V5h-1.2v7.9H6v1.2h7.9z"/></svg>'
    },
    mHCH: function (e, t, n) {
      e.exports = {
        bubble: 'bubble-3MTPKAgt',
        active: 'active-3MTPKAgt',
        red: 'red-3MTPKAgt',
        blue: 'blue-3MTPKAgt',
        green: 'green-3MTPKAgt',
        orange: 'orange-3MTPKAgt',
        purple: 'purple-3MTPKAgt',
        cyan: 'cyan-3MTPKAgt',
        pink: 'pink-3MTPKAgt',
      }
    },
    mdyz: function (e, t, n) {
      e.exports = {
        search: 'search-Hsmn_0WX',
        upperCase: 'upperCase-Hsmn_0WX',
        spinnerWrap: 'spinnerWrap-Hsmn_0WX',
        emptyText: 'emptyText-Hsmn_0WX',
        noResultsDesktop: 'noResultsDesktop-Hsmn_0WX',
        hidden: 'hidden-Hsmn_0WX',
      }
    },
    nbir: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M8 8l13 13m0-13L8 21"/></svg>'
    },
    ozXl: function (e, t, n) {
      e.exports = {
        dialog: 'dialog-1LLxyYSM',
        tabletDialog: 'tabletDialog-1LLxyYSM',
        desktopDialog: 'desktopDialog-1LLxyYSM',
      }
    },
    poJS: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 121" width="120" height="121" fill="none"><g clip-path="url(#afzoeckcd)"><path fill="#2A2E39" fill-rule="evenodd" clip-rule="evenodd" d="M26.01 81.72c10.54 13.42 34.92 11.87 54.46-3.47 19.55-15.34 26.85-38.66 16.31-52.08-10.54-13.42-34.92-11.87-54.46 3.47-9.2 7.22-15.68 16.2-18.87 25.09-.68 1.89-2.57 3.06-4.53 3.48a9.7 9.7 0 0 0-3.96 1.86C10.5 63.57 9.91 70.26 13.64 75a11.24 11.24 0 0 0 7.82 4.31 6.2 6.2 0 0 1 4.55 2.4z"/><path fill="#1976D2" fill-rule="evenodd" clip-rule="evenodd" d="M38.3 46.18c1.8 3.43 12.08 10.65 25.62 16.89 6.36 2.93 12.38 5.3 17.37 6.92a172.71 172.71 0 0 0-18-12.68C48.7 48.2 38.32 44.9 38.32 44.9c-.18.3-.19.72-.01 1.27z"/><path stroke="#B2B5BE" stroke-width="1.5" d="M96.25 82.01c-.19.3-.54.55-1.17.7a7.8 7.8 0 0 1-2.56.08c-2.14-.22-5-1-8.4-2.28-6.78-2.57-15.53-7.12-24.64-13.05-9.12-5.94-16.82-12.1-21.92-17.26-2.55-2.58-4.41-4.89-5.48-6.76a7.8 7.8 0 0 1-.96-2.37c-.12-.64-.03-1.06.16-1.35.2-.29.54-.54 1.17-.7a7.79 7.79 0 0 1 2.56-.08c2.14.22 5 1 8.4 2.28 6.78 2.57 15.53 7.13 24.64 13.06 9.12 5.93 16.82 12.1 21.92 17.25 2.55 2.59 4.42 4.89 5.48 6.76.54.94.85 1.73.96 2.37.12.64.03 1.06-.16 1.35z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M38.96 45.25c1.99.57 4.47 1.55 7.3 2.86l12.2 6.52c2.16 1.3 4.4 2.68 6.66 4.16 10.56 6.87 19.12 13.85 22.97 18.44"/><path stroke="#B2B5BE" stroke-width="1.5" d="M93.79 76.21c6.77-14.14 1.41-32-13.05-41.42-14.46-9.41-32.96-7.09-43.15 4.83M84.96 31.87a6.08 6.08 0 0 1-2.58 2.29c-.9.39-1.69.35-2.23 0s-.9-1.05-.9-2.04a6.08 6.08 0 0 1 1.05-3.28 6.08 6.08 0 0 1 2.58-2.3c.9-.39 1.69-.35 2.23 0 .54.36.9 1.05.9 2.04.01.99-.32 2.17-1.05 3.29z"/><path stroke="#B2B5BE" stroke-linecap="round" stroke-width="1.5" d="M52.7 34.25c1.25-.31 4.56-1.32 8.92-1.3M90.14 94.7c-3.64-.05-15.75-.08-30.14-.08s-26.5.03-30.14.08M34.7 69.95l5.77 5.33M42.05 66.68l.84 3.27"/></g><defs><clipPath id="afzoeckcd"><path fill="#fff" d="M10 10.62h100v100H10v-100z"/></clipPath></defs></svg>'
    },
    rzV7: function (e, t, n) {
      'use strict'
      var r = Object.prototype.hasOwnProperty
      function o(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
      }
      e.exports = function (e, t) {
        if (o(e, t)) return !0
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1
        var n = Object.keys(e),
          a = Object.keys(t)
        if (n.length !== a.length) return !1
        for (var c = 0; c < n.length; c++) if (!r.call(t, n[c]) || !o(e[n[c]], t[n[c]])) return !1
        return !0
      }
    },
    tCqQ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('q1tI'),
        o = n('Eyy1')
      function a(e) {
        return Object(o.ensureNotNull)(Object(r.useContext)(e))
      }
    },
    tU7i: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return l
        })
      var r = n('mrSG'),
        o = n('q1tI'),
        a = n('TSYQ'),
        c = n('Iivm'),
        s = n('bQ7Y')
      const i = s,
        l = o.forwardRef((e, t) => {
          const {
              icon: n,
              isActive: i,
              isOpened: l,
              isDisabled: u,
              isGrouped: d,
              isHovered: p,
              onClick: h,
              text: m,
              textBeforeIcon: f,
              title: b,
              theme: v = s,
              className: g,
              forceInteractive: y,
              'data-name': E,
            } = e,
            w = Object(r.a)(e, [
              'icon',
              'isActive',
              'isOpened',
              'isDisabled',
              'isGrouped',
              'isHovered',
              'onClick',
              'text',
              'textBeforeIcon',
              'title',
              'theme',
              'className',
              'forceInteractive',
              'data-name',
            ]),
            x = a(g, v.button, b && 'apply-common-tooltip', {
              [v.isActive]: i,
              [v.isOpened]: l,
              [v.isInteractive]: (y || Boolean(h)) && !u,
              [v.isDisabled]: u,
              [v.isGrouped]: d,
              [v.hover]: p,
            }),
            k =
              n &&
              ('string' == typeof n
                ? o.createElement(c.a, { className: v.icon, icon: n })
                : o.cloneElement(n, { className: a(v.icon, n.props.className) }))
          return o.createElement(
            'div',
            Object.assign({}, w, {
              ref: t,
              'data-role': 'button',
              className: x,
              onClick: u ? void 0 : h,
              title: b,
              'data-name': E,
            }),
            f && m && o.createElement('div', { className: a('js-button-text', v.text) }, m),
            k,
            !f && m && o.createElement('div', { className: a('js-button-text', v.text) }, m)
          )
        })
    },
    vCF3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('q1tI'),
        o = n('TSYQ'),
        a = n('Iivm'),
        c = n('aJjg'),
        s = n('F0Qt')
      n('P4l+')
      function i(e) {
        const t = o(s.box, s['intent-' + e.intent], {
            [s.check]: !e.indeterminate,
            [s.dot]: Boolean(e.indeterminate),
            [s.noOutline]: -1 === e.tabIndex,
          }),
          n = o(s.wrapper, e.className)
        return r.createElement(
          'span',
          { className: n, title: e.title },
          r.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: s.input,
            type: 'checkbox',
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange && e.onChange(e.value)
            },
            ref: e.reference,
          }),
          r.createElement('span', { className: t }, r.createElement(a.a, { icon: c, className: s.icon }))
        )
      }
    },
    vqb8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('q1tI')
      const o = (e) => {
        const t = 'watchedValue' in e ? e.watchedValue : void 0,
          n = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
          [o, a] = Object(r.useState)(t ? t.value() : n)
        return (
          Object(r.useEffect)(() => {
            if (t) {
              a(t.value())
              const e = (e) => a(e)
              return t.subscribe(e), () => t.unsubscribe(e)
            }
            return () => {}
          }, [t]),
          o
        )
      }
    },
    w3Pp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'marketType', function () {
          return i
        })
      var r = n('YFKU')
      n('HbRj')
      const o = new Map(),
        a = { context: 'market_type' },
        c = {
          cfd: Object(r.t)('cfd', a),
          bitcoin: Object(r.t)('crypto', a),
          crypto: Object(r.t)('crypto', a),
          dr: Object(r.t)('dr', a),
          forex: Object(r.t)('forex', a),
          futures: Object(r.t)('futures', a),
          index: Object(r.t)('index', a),
          stock: Object(r.t)('stock', a),
        },
        s = new Set(['cfd', 'spreadbet', 'defi'])
      function i(e, t = []) {
        const n = t.filter((e) => s.has(e)),
          i = `${e}_${n.sort().join('_')}`,
          l = o.get(i)
        if (void 0 !== l) return l
        const u = t.length ? Object(r.t)(e, a) + ' ' + n.join(' ') : c[e] || e
        return o.set(i, u), u
      }
    },
    wy57: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M2.5 14.5c1.68-1.26 3.7-2 6.5-2s4.91.74 6.5 2m-13-11c1.68 1.26 3.7 2 6.5 2s4.91-.74 6.5-2"/><circle stroke="currentColor" cx="9" cy="9" r="8.5"/><path stroke="currentColor" d="M13.5 9c0 2.42-.55 4.58-1.4 6.12-.87 1.56-1.98 2.38-3.1 2.38s-2.23-.82-3.1-2.38c-.85-1.54-1.4-3.7-1.4-6.12s.55-4.58 1.4-6.12C6.77 1.32 7.88.5 9 .5s2.23.82 3.1 2.38c.85 1.54 1.4 3.7 1.4 6.12z"/></svg>'
    },
  },
])
