;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-market'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'
    },
    '+EG+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return a
        })
      var i = n('q1tI')
      class r extends i.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return i.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const a = i.createContext(null)
    },
    '+l/S': function (e, t, n) {},
    '/KDZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var i = n('q1tI')
      class r extends i.PureComponent {
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
    '0NLZ': function (e, t, n) {
      e.exports = { container: 'container-12vIMEmh' }
    },
    '2A9e': function (e) {
      e.exports = JSON.parse(
        '{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}'
      )
    },
    '2x13': function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-DggvOZTm',
        container: 'container-DggvOZTm',
        tab: 'tab-DggvOZTm',
        active: 'active-DggvOZTm',
        title: 'title-DggvOZTm',
        icon: 'icon-DggvOZTm',
        titleText: 'titleText-DggvOZTm',
        nested: 'nested-DggvOZTm',
        isTablet: 'isTablet-DggvOZTm',
        isMobile: 'isMobile-DggvOZTm',
      }
    },
    '8Rai': function (e, t, n) {
      'use strict'
      var i = n('q1tI')
      const r = function (e, { bubbles: t = !1, cancelable: n = !1, detail: i = null } = {}) {
        try {
          return new window.CustomEvent(e, { bubbles: t, cancelable: n, detail: i })
        } catch (r) {
          const a = document.createEvent('CustomEvent')
          return a.initCustomEvent(e, t, n, i), a
        }
      }
      var a = n('R5JZ')
      function s(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: s,
            touchStart: o,
            handler: c,
            reference: l,
            ownerDocument: u = document,
          } = e,
          d = Object(i.useRef)(null),
          m = Object(i.useRef)(new r('timestamp').timeStamp)
        return (
          Object(i.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: s, touchStart: o },
              i = l ? l.current : d.current
            return Object(a.a)(m.current, i, c, u, e)
          }, [t, n, s, o, c]),
          l || d
        )
      }
      n.d(t, 'a', function () {
        return s
      })
    },
    '9DSJ': function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        dialog: 'dialog-3kc5LZDR',
        dialogLibrary: 'dialogLibrary-3kc5LZDR',
        listContainer: 'listContainer-3kc5LZDR',
        scroll: 'scroll-3kc5LZDR',
        sidebarContainer: 'sidebarContainer-3kc5LZDR',
        noContentBlock: 'noContentBlock-3kc5LZDR',
      }
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
      var i = n('q1tI'),
        r = n('i8i4'),
        a = n('e3/o'),
        s = n('jAh7'),
        o = n('+EG+')
      class c extends i.PureComponent {
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
            r.createPortal(i.createElement(l.Provider, { value: this }, this.props.children), e)
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context ? Object(s.getRootOverlapManager)() : this.context
        }
      }
      c.contextType = o.b
      const l = i.createContext(null)
    },
    An2S: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'b', function () {
          return p
        })
      var i = n('mrSG'),
        r = n('q1tI'),
        a = n.n(r),
        s = n('TSYQ'),
        o = n.n(s),
        c = n('Iivm'),
        l = n('++0f'),
        u = n('2x13')
      function d(e) {
        return { isMobile: 'mobile' === e, isTablet: 'tablet' === e }
      }
      function m(e) {
        const { mode: t, className: n } = e,
          r = Object(i.a)(e, ['mode', 'className']),
          { isMobile: s, isTablet: c } = d(t),
          l = o()(u.container, c && u.isTablet, s && u.isMobile, n)
        return a.a.createElement('div', Object.assign({}, r, { className: l, 'data-role': 'dialog-sidebar' }))
      }
      function h(e) {
        return a.a.createElement('div', Object.assign({ className: u.wrapper }, e))
      }
      function p(e) {
        const { mode: t, title: n, icon: r, isActive: s, onClick: m } = e,
          h = Object(i.a)(e, ['mode', 'title', 'icon', 'isActive', 'onClick']),
          { isMobile: p, isTablet: f } = d(t)
        return a.a.createElement(
          'div',
          Object.assign({}, h, { className: o()(u.tab, f && u.isTablet, p && u.isMobile, s && u.active), onClick: m }),
          a.a.createElement(c.a, { className: u.icon, icon: r }),
          !f &&
            a.a.createElement(
              'span',
              { className: u.title },
              a.a.createElement('span', { className: u.titleText }, n),
              p && a.a.createElement(c.a, { className: u.nested, icon: l })
            )
        )
      }
    },
    Iivm: function (e, t, n) {
      'use strict'
      var i = n('mrSG'),
        r = n('q1tI')
      const a = r.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          a = Object(i.a)(e, ['icon'])
        return r.createElement('span', Object.assign({}, a, { ref: t, dangerouslySetInnerHTML: { __html: n } }))
      })
      n.d(t, 'a', function () {
        return a
      })
    },
    PMRz: function (e, t, n) {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        container: 'container-3Ywm3-oo',
        selected: 'selected-3Ywm3-oo',
        disabled: 'disabled-3Ywm3-oo',
        favorite: 'favorite-3Ywm3-oo',
        actions: 'actions-3Ywm3-oo',
        highlighted: 'highlighted-3Ywm3-oo',
        light: 'light-3Ywm3-oo',
        'highlight-animation-theme-light': 'highlight-animation-theme-light-3Ywm3-oo',
        dark: 'dark-3Ywm3-oo',
        'highlight-animation-theme-dark': 'highlight-animation-theme-dark-3Ywm3-oo',
        main: 'main-3Ywm3-oo',
        paddingLeft: 'paddingLeft-3Ywm3-oo',
        isActive: 'isActive-3Ywm3-oo',
        author: 'author-3Ywm3-oo',
        likes: 'likes-3Ywm3-oo',
      }
    },
    R5JZ: function (e, t, n) {
      'use strict'
      function i(e, t, n, i, r) {
        function a(r) {
          if (e > r.timeStamp) return
          const a = r.target
          void 0 !== n && null !== t && null !== a && a.ownerDocument === i && (t.contains(a) || n(r))
        }
        return (
          r.click && i.addEventListener('click', a, !1),
          r.mouseDown && i.addEventListener('mousedown', a, !1),
          r.touchEnd && i.addEventListener('touchend', a, !1),
          r.touchStart && i.addEventListener('touchstart', a, !1),
          () => {
            i.removeEventListener('click', a, !1),
              i.removeEventListener('mousedown', a, !1),
              i.removeEventListener('touchend', a, !1),
              i.removeEventListener('touchstart', a, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
    },
    cu5P: function (e, t, n) {
      e.exports = {
        title: 'title-1gYObTuJ',
        disabled: 'disabled-1gYObTuJ',
        icon: 'icon-1gYObTuJ',
        locked: 'locked-1gYObTuJ',
        open: 'open-1gYObTuJ',
        actionIcon: 'actionIcon-1gYObTuJ',
        selected: 'selected-1gYObTuJ',
        codeIcon: 'codeIcon-1gYObTuJ',
      }
    },
    fEjm: function (e, t, n) {
      e.exports = {
        favorite: 'favorite-I_fAY9V2',
        disabled: 'disabled-I_fAY9V2',
        active: 'active-I_fAY9V2',
        checked: 'checked-I_fAY9V2',
      }
    },
    iYOJ: function (e, t, n) {
      e.exports = {
        title: 'title-hq9up-8e',
        small: 'small-hq9up-8e',
        normal: 'normal-hq9up-8e',
        large: 'large-hq9up-8e',
      }
    },
    idtP: function (e, t, n) {
      e.exports = {
        container: 'container-39xfFXyr',
        image: 'image-39xfFXyr',
        title: 'title-39xfFXyr',
        description: 'description-39xfFXyr',
        button: 'button-39xfFXyr',
      }
    },
    ijHL: function (e, t, n) {
      'use strict'
      function i(e) {
        return a(e, s)
      }
      function r(e) {
        return a(e, o)
      }
      function a(e, t) {
        const n = Object.entries(e).filter(t),
          i = {}
        for (const [r, a] of n) i[r] = a
        return i
      }
      function s(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function o(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return r
        })
    },
    jPOK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var i = n('q1tI'),
        r = n('TSYQ'),
        a = n('Owlf')
      n('SzKR')
      function s(e) {
        const t = r('tv-spinner', 'tv-spinner--shown', 'tv-spinner--size_' + (e.size || a.a))
        return i.createElement(
          'div',
          { className: t, style: e.style, role: 'progressbar' },
          i.createElement(
            'div',
            { className: 'tv-spinner__spinner-layer' },
            i.createElement('div', { className: 'tv-spinner__background tv-spinner__width_element' }),
            i.createElement('div', {
              className: 'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
            }),
            i.createElement('div', {
              className: 'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
            })
          )
        )
      }
    },
    mwqF: function (e, t, n) {
      'use strict'
      var i = n('mrSG'),
        r = n('q1tI'),
        a = n('TSYQ')
      function s(e, t) {
        const {
          intent: n = 'primary',
          size: i = 'm',
          appearance: r = 'default',
          useFullWidth: s = !1,
          tabIndex: o = 0,
          icon: c,
          className: l,
        } = t
        return a(
          l,
          e.button,
          e['size-' + i],
          e['intent-' + n],
          e['appearance-' + r],
          s && e['full-width'],
          -1 === o && e.noOutline,
          c && 's' !== i && e['with-icon']
        )
      }
      var o = n('2A9e')
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
            icon: h,
            children: p,
            tabIndex: f,
          } = e,
          v = Object(i.a)(e, [
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
          g = s(o, { intent: n, size: c, appearance: l, disabled: u, useFullWidth: d, tabIndex: f, icon: h })
        return r.createElement(
          'button',
          Object.assign({ className: a(g, t), disabled: u, ref: m, tabIndex: f }, v),
          h && 's' !== c && r.createElement('span', { className: o.icon }, h),
          r.createElement('span', { className: o.content }, p)
        )
      }
      n.d(t, 'a', function () {
        return c
      })
    },
    pr86: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i = n('mrSG'),
        r = (n('YFKU'), n('q1tI')),
        a = n('TSYQ'),
        s = n('Iivm'),
        o = n('sg5d'),
        c = n('XfUw'),
        l = n('fEjm')
      const u = { add: window.t('Add to favorites'), remove: window.t('Remove from favorites') }
      function d(e) {
        const { className: t, isFilled: n, isActive: d, onClick: m } = e,
          h = Object(i.a)(e, ['className', 'isFilled', 'isActive', 'onClick'])
        return r.createElement(
          s.a,
          Object.assign({}, h, {
            className: a(l.favorite, 'apply-common-tooltip', n && l.checked, d && l.active, t),
            icon: n ? o : c,
            onClick: m,
            title: n ? u.remove : u.add,
          })
        )
      }
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
    },
    uhCe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var i = n('ASyk')
      const r = {
        SmallHeight: i['small-height-breakpoint'],
        TabletSmall: i['tablet-small-breakpoint'],
        TabletNormal: i['tablet-normal-breakpoint'],
      }
    },
    vbTm: function (e, t, n) {
      e.exports = { container: 'container-gb0TB1FN' }
    },
    vqb8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var i = n('q1tI')
      const r = (e) => {
        const t = 'watchedValue' in e ? e.watchedValue : void 0,
          n = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
          [r, a] = Object(i.useState)(t ? t.value() : n)
        return (
          Object(i.useEffect)(() => {
            if (t) {
              a(t.value())
              const e = (e) => a(e)
              return t.subscribe(e), () => t.unsubscribe(e)
            }
            return () => {}
          }, [t]),
          r
        )
      }
    },
    zbLM: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('q1tI'),
        r = n.n(i),
        a = n('i8i4'),
        s = n.n(a),
        o = n('YFKU'),
        c = n('mMWL'),
        l = n('CW80'),
        u = n('0YCj'),
        d = n.n(u),
        m = n('Kxc7')
      function h(e, t) {
        const n = e.title.toLowerCase(),
          i = t.title.toLowerCase()
        return n < i ? -1 : n > i ? 1 : 0
      }
      const p = { earning: new RegExp('EPS'), earnings: new RegExp('EPS'), 'trailing twelve months': new RegExp('TTM') }
      function f(e) {
        var t
        const {
            id: n,
            description: i,
            shortDescription: r,
            description_localized: a,
            is_hidden_study: s,
            version: c,
          } = e,
          l =
            m.enabled('graying_disabled_tools_enabled') &&
            (null === (t = window.ChartApiInstance) || void 0 === t
              ? void 0
              : t.studiesAccessController.isToolGrayed(r))
        return {
          id: n,
          title: a || Object(o.t)(i, { context: 'study' }),
          shortDescription: r,
          shortTitle: r,
          isStrategy: d.a.isScriptStrategy(e),
          isHidden: s,
          descriptor: { type: 'java', studyId: e.id },
          packageName: d.a.getPackageName(n),
          isGrayed: l,
          version: c,
        }
      }
      var v = n('TSYQ'),
        g = n.n(v),
        b = n('jPOK'),
        _ = n('g89m'),
        y = n('qFKp'),
        w = n('QHWU'),
        O = n('An2S'),
        E = n('mrSG'),
        k = n('0NLZ')
      function x(e) {
        const { reference: t, className: n } = e,
          i = Object(E.a)(e, ['reference', 'className'])
        return r.a.createElement(
          'div',
          Object.assign({ ref: t, className: g()(k.container, n) }, i, { 'data-role': 'dialog-content' })
        )
      }
      var S = n('cu5P')
      function C(e) {
        const { children: t, className: n, disabled: i } = e
        return r.a.createElement('span', { className: g()(S.title, i && S.disabled, n) }, t)
      }
      const j = r.a.createContext(null)
      var N = n('1LIl'),
        T = n('vqb8'),
        D = n('oiZD'),
        I = n('zM7N'),
        R = n('pr86'),
        L = n('/3z9'),
        Y = n('PMRz')
      function q(e) {
        const t = Object(i.useContext)(j),
          {
            style: n,
            layoutMode: a,
            item: s,
            query: o,
            regExpRules: c,
            isSelected: l,
            isHighlighted: u,
            reference: d,
            onClick: m,
            renderActions: h,
          } = e,
          { isFavorite: p, isStrategy: f, isLocked: v, public: b } = s,
          _ = void 0 !== p,
          y = F(m, s),
          w = Object(i.useCallback)((e) => e.stopPropagation(), []),
          O = (null == t ? void 0 : t.toggleFavorite) ? F(t.toggleFavorite, s) : void 0,
          E = Object(T.a)({ watchedValue: D.watchedTheme }) === I.a.Dark ? Y.dark : Y.light,
          k = g()(Y.container, s.isGrayed && Y.disabled, l && Y.selected, u && Y.highlighted, u && E)
        return r.a.createElement(
          'div',
          {
            ref: d,
            className: k,
            onClick: y,
            style: n,
            'data-role': 'list-item',
            'data-disabled': s.isGrayed,
            'data-title': s.title,
            'data-id': s.id,
          },
          r.a.createElement(
            'div',
            { className: g()(Y.main, !_ && Y.paddingLeft) },
            _ && r.a.createElement(R.a, { className: g()(Y.favorite, p && Y.isActive), isFilled: p, onClick: O }),
            r.a.createElement(
              C,
              { disabled: s.isGrayed },
              r.a.createElement(N.a, { queryString: o, rules: c, text: s.title })
            ),
            !1
          ),
          b &&
            r.a.createElement(
              'a',
              { href: b.authorLink, className: Y.author, target: '_blank', onClick: w },
              b.authorName
            ),
          'mobile' !== a && b && r.a.createElement('span', { className: Y.likes }, b.likesCount),
          !1
        )
      }
      function F(e, t) {
        return (n) => {
          const i = 0 === Object(L.modifiersFromEvent)(n) && 0 === n.button
          !n.defaultPrevented && e && i && (n.preventDefault(), e(t))
        }
      }
      var M = n('iYOJ')
      function P(e) {
        const { title: t, type: n, className: i } = e
        return r.a.createElement(
          'h3',
          {
            className: g()(M.title, 'Small' === n && M.small, 'Normal' === n && M.normal, 'Large' === n && M.large, i),
          },
          t
        )
      }
      var A = n('vbTm')
      function z(e) {
        const { style: t, children: n } = e
        return r.a.createElement('div', { style: t, className: A.container }, n)
      }
      var Z = n('Iivm'),
        J = n('mwqF'),
        G = n('idtP')
      function W(e) {
        const { className: t, icon: n, title: i, description: a, buttonText: s, buttonAction: o } = e
        return r.a.createElement(
          'div',
          { className: g()(G.container, t) },
          n && r.a.createElement(Z.a, { icon: n, className: G.image }),
          i && r.a.createElement('h3', { className: G.title }, i),
          a && r.a.createElement('p', { className: G.description }, a),
          s && o && r.a.createElement(J.a, { onClick: o, className: G.button }, s)
        )
      }
      function V(e) {
        const [t, n] = Object(i.useState)(null)
        function r(e) {
          return e.findIndex((e) => (null == t ? void 0 : t.id) === e.id)
        }
        return [
          t,
          n,
          function () {
            n(
              (function () {
                var n
                const i = r(e),
                  a = i === e.length - 1
                return null === t || -1 === i ? (null !== (n = e[0]) && void 0 !== n ? n : null) : a ? e[i] : e[i + 1]
              })()
            )
          },
          function () {
            n(
              (function () {
                var n
                const i = r(e)
                return null === t || 0 === i || -1 === i ? (null !== (n = e[0]) && void 0 !== n ? n : null) : e[i - 1]
              })()
            )
          },
        ]
      }
      var K = n('H9Gg'),
        B = n('9DSJ')
      function U(e) {
        const { reference: t, data: n, isOpened: a, onClose: s, applyStudy: c } = e,
          [l, u] = Object(i.useState)(''),
          d = Object(i.useMemo)(() => Object(K.a)(l, p), [l]),
          m = Object(i.useMemo)(
            () =>
              l
                ? Object(K.c)({
                    data: n,
                    rules: d,
                    queryString: l,
                    primaryKey: 'shortDescription',
                    secondaryKey: 'title',
                    optionalPrimaryKey: 'shortTitle',
                  })
                : n,
            [l, d, n]
          ),
          {
            highlightedItem: h,
            selectedItem: f,
            selectedNodeReference: v,
            scrollContainerRef: E,
            searchInputRef: k,
            onClickStudy: S,
            handleKeyDown: C,
          } = (function (e, t, n, r) {
            let a = 0
            const [s, o] = Object(i.useState)(null),
              c = Object(i.useRef)(null),
              l = Object(i.useRef)(null),
              [u, d, m, h] = V(t),
              p = Object(i.useRef)(null)
            return (
              Object(i.useEffect)(() => {
                e ? f(0) : d(null)
              }, [e]),
              Object(i.useEffect)(() => {
                void 0 !== r && (f(0), d(null))
              }, [r]),
              Object(i.useEffect)(
                () => (
                  s &&
                    (a = setTimeout(() => {
                      o(null)
                    }, 1500)),
                  () => {
                    clearInterval(a)
                  }
                ),
                [s]
              ),
              {
                highlightedItem: s,
                scrollContainerRef: c,
                selectedNodeReference: l,
                selectedItem: u,
                searchInputRef: p,
                onClickStudy: function (e) {
                  if (!n) return
                  n(e), d(e), o(e)
                },
                handleKeyDown: function (e) {
                  const [t, i] = (function (e, t) {
                    if (null === e.current || null === t.current) return [0, 0]
                    const n = e.current.getBoundingClientRect(),
                      i = t.current.getBoundingClientRect(),
                      { height: r } = n,
                      a = n.top - i.top,
                      s = n.bottom - i.bottom + r < 0 ? 0 : r,
                      o = a - r > 0 ? 0 : r,
                      { scrollTop: c } = t.current
                    return [c - o, c + s]
                  })(l, c)
                  40 === Object(L.hashFromEvent)(e) && (e.preventDefault(), m(), f(i))
                  38 === Object(L.hashFromEvent)(e) && (e.preventDefault(), h(), f(t))
                  if (13 === Object(L.hashFromEvent)(e) && u) {
                    if (!n) return
                    n(u), o(u)
                  }
                },
              }
            )
            function f(e) {
              null !== c.current && c.current.scrollTo && c.current.scrollTo(0, e)
            }
          })(a, m, c),
          j = '' === l && !m.length
        return (
          Object(i.useEffect)(() => {
            var e
            a || u(''), y.CheckMobile.any() || null === (e = k.current) || void 0 === e || e.focus()
          }, [a]),
          r.a.createElement(_.a, {
            isOpened: a,
            onClose: s,
            onClickOutside: s,
            className: g()(B.dialogLibrary),
            render: function () {
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(w.a, { reference: k, placeholder: Object(o.t)('Search'), onChange: N, onFocus: T }),
                r.a.createElement(
                  O.c,
                  null,
                  r.a.createElement(
                    x,
                    { reference: E, className: B.scroll },
                    j
                      ? r.a.createElement(b.a, null)
                      : m.length
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(z, null, r.a.createElement(P, { title: Object(o.t)('Script name') })),
                          m.map((e) => {
                            const t = (null == f ? void 0 : f.id) === e.id
                            return r.a.createElement(q, {
                              key: e.id,
                              item: e,
                              onClick: () => S(e),
                              query: l,
                              regExpRules: d,
                              reference: t ? v : void 0,
                              isSelected: (null == f ? void 0 : f.id) === e.id,
                              isHighlighted: (null == h ? void 0 : h.id) === e.id,
                            })
                          })
                        )
                      : r.a.createElement(W, {
                          className: B.noContentBlock,
                          description: Object(o.t)('No indicators matched your criteria.'),
                        })
                  )
                )
              )
            },
            title: Object(o.t)('Indicators'),
            dataName: 'indicators-dialog',
            onKeyDown: C,
            ref: t,
          })
        )
        function N(e) {
          u(e.target.value)
        }
        function T() {
          var e
          l.length > 0 && (null === (e = k.current) || void 0 === e || e.select())
        }
      }
      var H = n('FQhm'),
        Q = n('hY0g'),
        X = n.n(Q)
      n.d(t, 'IndicatorsLibraryContainer', function () {
        return $
      })
      class $ extends class {
        constructor(e) {
          ;(this._searchInputRef = r.a.createRef()),
            (this._dialog = r.a.createRef()),
            (this._visibility = new X.a(!1)),
            (this._container = document.createElement('div')),
            (this._isForceRender = !1),
            (this._parentSource = null),
            (this._isDestroyed = !1),
            (this._chartWidgetCollection = e)
        }
        isDestroyed() {
          return this._isDestroyed
        }
        visible() {
          return this._visibility.readonly()
        }
        resetAllStudies() {}
        updateFavorites() {}
        open(e) {
          ;(this._parentSource = null != e ? e : null),
            this._setProps({ isOpened: !0 }),
            this._visibility.setValue(!0),
            H.emit('indicators_dialog')
        }
        show() {
          this.open()
        }
        hide() {
          ;(this._parentSource = null), this._setProps({ isOpened: !1 }), this._visibility.setValue(!1)
        }
        destroy() {
          ;(this._isDestroyed = !0), s.a.unmountComponentAtNode(this._container)
        }
        _shouldPreventRender() {
          return this._isDestroyed || (!this._isForceRender && !this._getProps().value().isOpened)
        }
        _getRenderData() {
          return { props: this._getProps().value(), container: this._getContainer() }
        }
        _applyStudy(e) {
          var t, n
          e.isGrayed
            ? H.emit('onGrayedObjectClicked', { type: 'study', name: e.shortDescription })
            : (y.CheckMobile.any() || null === (t = this._searchInputRef.current) || void 0 === t || t.select(),
              (async function (e, t, n) {
                const i = t.descriptor
                if ('java' === i.type) {
                  const e = Object(l.tryFindStudyLineToolNameByStudyId)(i.studyId)
                  if (null !== e) return c.tool.setValue(e), null
                }
                const r = e.activeChartWidget.value()
                return r ? r.insertStudy(t.descriptor, n, t.shortDescription) : null
              })(this._chartWidgetCollection, e, null !== (n = this._parentSource) && void 0 !== n ? n : void 0).then(
                () => {
                  var e
                  y.CheckMobile.any() ||
                    ((null === document.activeElement ||
                      document.activeElement === document.body ||
                      (null !== this._dialog.current && this._dialog.current.contains(document.activeElement))) &&
                      (null === (e = this._searchInputRef.current) || void 0 === e || e.focus()))
                }
              ))
        }
        _setProps(e) {
          const t = this._getProps().value(),
            { isOpened: n } = t
          this._isForceRender = n && 'isOpened' in e && !e.isOpened
          const i = Object.assign(Object.assign({}, t), e)
          this._getProps().setValue(i)
        }
        _requestBuiltInJavaStudies() {
          return this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository().findAllJavaStudies()
        }
        _focus() {
          var e
          this._getProps().value().isOpened && (null === (e = this._dialog.current) || void 0 === e || e.focus())
        }
        _getContainer() {
          return this._container
        }
        _getDialog() {
          return this._dialog
        }
      } {
        constructor(e, t) {
          super(e),
            (this._studies = {}),
            (this._options = { onWidget: !1 }),
            (this._getStudies = (e) => this._studies[e] || []),
            t && (this._options = t),
            (this._props = new X.a({
              data: [],
              applyStudy: this._applyStudy.bind(this),
              isOpened: !1,
              reference: this._getDialog(),
              onClose: this.hide.bind(this),
            })),
            this._getProps().subscribe(this._render.bind(this)),
            this._init()
        }
        _getProps() {
          return this._props
        }
        async _init() {
          const e = await this._requestBuiltInJavaStudies()
          this._studies = (function (e) {
            const t = {}
            return (
              e.forEach((e) => {
                const { packageName: n } = e
                n in t ? t[n].push(e) : (t[n] = [e])
              }),
              t
            )
          })(
            (function (e, t = !0) {
              return e.filter((e) => {
                const n =
                  !!t ||
                  !(function (e) {
                    return e.isStrategy
                  })(e)
                return !e.isHidden && n
              })
            })(e.map(f))
          )
          const t = [...this._getStudies('tv-basicstudies'), ...this._getStudies('Script$STD')]
            .filter((e) => !e.isStrategy)
            .sort(h)
          this._setProps({ data: t })
        }
        _render() {
          if (this._shouldPreventRender()) return
          const { props: e, container: t } = this._getRenderData()
          s.a.render(r.a.createElement(U, Object.assign({}, e)), t)
        }
      }
    },
  },
])
