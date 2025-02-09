;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['currency-label-menu'],
  {
    '1sXn': function (e, t, n) {
      e.exports = { scrollWrap: 'scrollWrap-2-It3_hB' }
    },
    '20PO': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
    },
    '8bbt': function (e, t, n) {
      e.exports = {
        action: 'action-DhEzLCdX',
        hovered: 'hovered-DhEzLCdX',
        active: 'active-DhEzLCdX',
        label: 'label-DhEzLCdX',
        description: 'description-DhEzLCdX',
        small: 'small-DhEzLCdX',
        smallPadding: 'smallPadding-DhEzLCdX',
        centerAlign: 'centerAlign-DhEzLCdX',
        highlighted: 'highlighted-DhEzLCdX',
      }
    },
    '9agd': function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('q1tI'),
        i = n.n(o),
        a = n('i8i4'),
        r = n.n(a),
        c = n('mrSG'),
        s = n('/KDZ'),
        l = n('uhCe'),
        u = n('Iksw'),
        d = n('YFKU'),
        m = n('Iivm'),
        f = n('9dlw'),
        h = n('DTHj'),
        p = n('nPPD'),
        g = n('H9Gg'),
        v = n('KKsp'),
        b = n('cwLw')
      function E(e, t, n) {
        const o = e.reduce((e, t) => [...e, ...t.actions], [])
        return Object(g.c)({ data: o, rules: n, queryString: t, primaryKey: 'label', secondaryKey: 'description' })
      }
      var O = n('TSYQ'),
        C = n.n(O),
        j = n('1LIl'),
        S = n('8bbt')
      function w(e) {
        const {
            label: t,
            rules: n,
            search: a,
            description: r,
            onClick: c,
            onClose: s,
            isActive: l,
            isSmallSize: u,
          } = e,
          d = Object(o.useCallback)(() => {
            c(), s && s()
          }, [c, s])
        return i.a.createElement(
          'div',
          { className: C()(S.action, l && S.active, u && S.small, !r && S.smallPadding), onClick: d },
          i.a.createElement('div', { className: C()(S.label, u && S.small, !r && !u && S.centerAlign) }, m(t)),
          void 0 !== r && i.a.createElement('div', { className: C()(S.description, u && S.small) }, m(r))
        )
        function m(e) {
          return i.a.createElement(j.a, {
            text: e,
            rules: n,
            queryString: a,
            className: C()(l && S.highlighted, l && S.active),
          })
        }
      }
      var A = n('9e/V'),
        y = n('20PO'),
        x = n('Znkj'),
        L = n('1sXn')
      const T = Object(p.a)(h.a, L)
      function k(e) {
        const { title: t, sections: n, onClose: a } = e,
          r = Object(c.a)(e, ['title', 'sections', 'onClose']),
          [s, l] = Object(o.useState)(''),
          [u, h] = Object(o.useState)(() => n.reduce((e, t, n) => (t.name && (e[t.id] = !0), e), {})),
          p = Object(o.useMemo)(() => Object(g.a)(s), [s]),
          O = Object(o.useRef)(null)
        return i.a.createElement(
          f.a,
          Object.assign({}, r, {
            onClose: a,
            className: x.menu,
            theme: T,
            maxHeight: 233,
            isOpened: !0,
            onOpen: function () {
              var e
              null === (e = O.current) || void 0 === e || e.focus()
            },
          }),
          i.a.createElement(
            'div',
            { className: x.header },
            i.a.createElement('div', { className: x.title }, t),
            i.a.createElement(
              'div',
              { className: x.container },
              i.a.createElement(m.a, { icon: A, className: x.icon }),
              i.a.createElement('input', {
                size: 1,
                type: 'text',
                className: x.input,
                placeholder: Object(d.t)('Search'),
                autoComplete: 'off',
                'data-role': 'search',
                onChange: function (e) {
                  l(e.target.value)
                },
                value: s,
                ref: O,
              }),
              Boolean(s) &&
                i.a.createElement(m.a, {
                  icon: y,
                  className: x.clear,
                  onClick: function () {
                    l('')
                  },
                })
            )
          ),
          s
            ? E(n, s, p).map(C)
            : n.map((e, t) =>
                i.a.createElement(
                  i.a.Fragment,
                  { key: e.id },
                  Boolean(t) && i.a.createElement(v.a, null),
                  e.name
                    ? i.a.createElement(
                        b.a,
                        {
                          summary: e.name,
                          className: x.section,
                          open: u[e.id],
                          onStateChange: (t) => h(Object.assign(Object.assign({}, u), { [e.id]: t })),
                        },
                        e.actions.map(C)
                      )
                    : e.actions.map(C)
                )
              )
        )
        function C(e) {
          const { id: t } = e,
            n = Object(c.a)(e, ['id'])
          return i.a.createElement(w, Object.assign({ key: t, rules: p, search: s, onClose: a, isSmallSize: !0 }, n))
        }
      }
      var D = n('g89m'),
        N = n('QHWU'),
        _ = n('sYiF')
      function z(e) {
        const { title: t, onClose: n, sections: a } = e,
          [r, s] = Object(o.useState)(''),
          l = Object(o.useMemo)(() => Object(g.a)(r), [r])
        return i.a.createElement(D.a, {
          title: t,
          onClose: n,
          render: function () {
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(N.a, { placeholder: Object(d.t)('Search'), onChange: u }),
              i.a.createElement(
                'div',
                { className: _.container },
                r
                  ? E(a, r, l).map((e) => {
                      const { id: t, isActive: n } = e,
                        o = Object(c.a)(e, ['id', 'isActive'])
                      return i.a.createElement(w, Object.assign({ key: t, isActive: n, rules: l, search: r }, o))
                    })
                  : a.map((e, t) =>
                      i.a.createElement(
                        i.a.Fragment,
                        { key: e.id },
                        e.name && i.a.createElement('div', { className: _.section }, e.name),
                        e.actions.map((o, s) => {
                          const { id: u } = o,
                            d = Object(c.a)(o, ['id']),
                            m = s === e.actions.length - 1,
                            f = t === a.length - 1
                          return i.a.createElement(
                            i.a.Fragment,
                            { key: u },
                            i.a.createElement(w, Object.assign({ rules: l, search: r, onClose: n }, d)),
                            !f && m && i.a.createElement('div', { className: _.separator })
                          )
                        })
                      )
                    )
              )
            )
          },
          dataName: 'unit-conversion-dialog',
          draggable: !1,
          fullScreen: !0,
          isOpened: !0,
        })
        function u(e) {
          s(e.target.value)
        }
      }
      function B(e) {
        const { element: t } = e,
          n = Object(c.a)(e, ['element'])
        return i.a.createElement(s.a, { rule: l.a.TabletSmall }, (e) =>
          e
            ? i.a.createElement(z, Object.assign({}, n))
            : i.a.createElement(k, Object.assign({}, n, { onClickOutside: n.onClose, position: Object(u.e)(t, {}) }))
        )
      }
      function Y(e, t, n) {
        let o = document.createElement('div')
        const a = () => {
            null !== o && (r.a.unmountComponentAtNode(o), (o = null))
          },
          c = { title: e, sections: n, element: t, onClose: a }
        return r.a.render(i.a.createElement(B, Object.assign({}, c)), o), { close: a, isOpened: () => null !== o }
      }
      n.d(t, 'showUnitConversion', function () {
        return Y
      })
    },
    '9dlw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var o = n('mrSG'),
        i = n('q1tI'),
        a = n.n(i),
        r = n('i8i4'),
        c = n.n(r),
        s = (n('EsMY'), n('AiMB')),
        l = n('DTHj'),
        u = n('X0gx'),
        d = n('8Rai')
      function m(e) {
        const {
            controller: t,
            children: n,
            isOpened: r,
            closeOnClickOutside: m = !0,
            doNotCloseOn: f,
            onClickOutside: h,
            onClose: p,
          } = e,
          g = Object(o.a)(e, [
            'controller',
            'children',
            'isOpened',
            'closeOnClickOutside',
            'doNotCloseOn',
            'onClickOutside',
            'onClose',
          ]),
          v = Object(i.useContext)(u.a),
          b = Object(d.a)({
            handler: function (e) {
              h && h(e)
              if (!m) return
              if (f && e.target instanceof Node) {
                const t = c.a.findDOMNode(f)
                if (t instanceof Node && t.contains(e.target)) return
              }
              p()
            },
            mouseDown: !0,
            touchStart: !0,
          })
        return r
          ? a.a.createElement(
              s.a,
              { top: '0', left: '0', right: '0', bottom: '0', pointerEvents: 'none' },
              a.a.createElement(
                'span',
                { ref: b, style: { pointerEvents: 'auto' } },
                a.a.createElement(
                  l.b,
                  Object.assign({}, g, {
                    isOpened: r,
                    onClose: p,
                    onScroll: function (t) {
                      const { onScroll: n } = e
                      n && n(t)
                      t.stopPropagation()
                    },
                    customCloseDelegate: v,
                    ref: t,
                  }),
                  n
                )
              )
            )
          : null
      }
    },
    '9e/V': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M11.85 11.93A5.48 5.48 0 0 0 8 2.5a5.5 5.5 0 1 0 3.85 9.43zm0 0L16 16"/></svg>'
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      }
    },
    Iksw: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'e', function () {
          return l
        })
      var o,
        i,
        a,
        r,
        c = n('Eyy1')
      !(function (e) {
        ;(e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom')
      })(o || (o = {})),
        (function (e) {
          ;(e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right')
        })(i || (i = {})),
        (function (e) {
          ;(e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'), (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop')
        })(a || (a = {})),
        (function (e) {
          ;(e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'), (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft')
        })(r || (r = {}))
      const s = {
        verticalAttachEdge: o.Bottom,
        horizontalAttachEdge: i.Left,
        verticalDropDirection: a.FromTopToBottom,
        horizontalDropDirection: r.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
      }
      function l(e, t) {
        return (n, l) => {
          const u = Object(c.ensureNotNull)(e).getBoundingClientRect(),
            {
              verticalAttachEdge: d = s.verticalAttachEdge,
              verticalDropDirection: m = s.verticalDropDirection,
              horizontalAttachEdge: f = s.horizontalAttachEdge,
              horizontalDropDirection: h = s.horizontalDropDirection,
              horizontalMargin: p = s.horizontalMargin,
              verticalMargin: g = s.verticalMargin,
            } = t,
            v = d === o.Top ? -1 * g : g,
            b = f === i.Right ? u.right : u.left,
            E = d === o.Top ? u.top : u.bottom
          return { x: b - (h === r.FromRightToLeft ? n : 0) + p, y: E - (m === a.FromBottomToTop ? l : 0) + v }
        }
      }
    },
    KKsp: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var o = n('q1tI'),
        i = n('TSYQ'),
        a = n.n(i),
        r = n('NOPy')
      function c(e) {
        const { size: t = 'normal', className: n } = e
        return o.createElement('div', {
          className: a()(
            r.separator,
            'small' === t && r.small,
            'normal' === t && r.normal,
            'large' === t && r.large,
            n
          ),
        })
      }
    },
    'ML8+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var o = n('q1tI'),
        i = n('TSYQ'),
        a = n('Iivm'),
        r = n('cvzQ'),
        c = n('R4+T')
      function s(e) {
        const { dropped: t, className: n } = e
        return o.createElement(a.a, { className: i(n, r.icon, { [r.dropped]: t }), icon: c })
      }
    },
    NOPy: function (e, t, n) {
      e.exports = {
        separator: 'separator-eqcGT_ow',
        small: 'small-eqcGT_ow',
        normal: 'normal-eqcGT_ow',
        large: 'large-eqcGT_ow',
      }
    },
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    },
    R5JZ: function (e, t, n) {
      'use strict'
      function o(e, t, n, o, i) {
        function a(i) {
          if (e > i.timeStamp) return
          const a = i.target
          void 0 !== n && null !== t && null !== a && a.ownerDocument === o && (t.contains(a) || n(i))
        }
        return (
          i.click && o.addEventListener('click', a, !1),
          i.mouseDown && o.addEventListener('mousedown', a, !1),
          i.touchEnd && o.addEventListener('touchend', a, !1),
          i.touchStart && o.addEventListener('touchstart', a, !1),
          () => {
            o.removeEventListener('click', a, !1),
              o.removeEventListener('mousedown', a, !1),
              o.removeEventListener('touchend', a, !1),
              o.removeEventListener('touchstart', a, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return o
      })
    },
    Znkj: function (e, t, n) {
      e.exports = {
        menu: 'menu-__tSsAAY',
        header: 'header-__tSsAAY',
        title: 'title-__tSsAAY',
        container: 'container-__tSsAAY',
        icon: 'icon-__tSsAAY',
        clear: 'clear-__tSsAAY',
        input: 'input-__tSsAAY',
        highlighted: 'highlighted-__tSsAAY',
        active: 'active-__tSsAAY',
        section: 'section-__tSsAAY',
      }
    },
    aWqZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'currencyActions', function () {
          return a
        })
      var o = n('Eyy1'),
        i = n('YFKU')
      function a(e, t, n) {
        if (null === t || t.readOnly) return []
        const a = [],
          r = (e, t, n, o) => ({ id: e, label: t, isActive: n, onClick: o }),
          c = (t) => {
            e.setPriceScaleCurrency(n, t)
          },
          s = t.selectedCurrency,
          l = t.originalCurrencies,
          u = t.baseCurrencies,
          d = t.displayedValues,
          m = { id: 'first_section', actions: [] }
        if (l.size > 1) {
          const e = r('Mixed', Object(i.t)('Mixed'), null === t.selectedCurrency, () => c(null))
          m.actions.push(e)
        }
        const f = e.model().availableCurrencies()
        if (null !== s) {
          const e = r(s, Object(o.ensureDefined)(d.get(s)), !0, () => {})
          m.actions.push(e)
        }
        const h = f.filterConvertible(u, (e) => e !== s && l.has(e))
        for (const o of h) m.actions.push(r(o.id, o.code, t.selectedCurrency === o.id, () => c(o.id)))
        m.actions.length > 0 && a.push(m)
        const p = f.filterConvertible(u, (e) => e !== s && !l.has(e)),
          g = { id: 'second_section', actions: [] }
        for (const o of p) g.actions.push(r(o.id, o.code, t.selectedCurrency === o.id, () => c(o.id)))
        return g.actions.length > 0 && a.push(g), a
      }
    },
    cvzQ: function (e, t, n) {
      e.exports = { icon: 'icon-19OjtB6A', dropped: 'dropped-19OjtB6A' }
    },
    cwLw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var o = n('q1tI'),
        i = n.n(o),
        a = n('TSYQ'),
        r = n.n(a),
        c = n('ML8+'),
        s = n('fioS')
      function l(e) {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            'div',
            {
              className: r()(e.className, s.summary),
              onClick: function () {
                e.onStateChange && e.onStateChange(!e.open)
              },
              'data-open': e.open,
            },
            e.summary,
            i.a.createElement(c.a, { className: s.caret, dropped: Boolean(e.open) })
          ),
          e.open && e.children
        )
      }
    },
    fioS: function (e, t, n) {
      e.exports = { summary: 'summary-3UYGeClB', hovered: 'hovered-3UYGeClB', caret: 'caret-3UYGeClB' }
    },
    hpdS: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'unitActions', function () {
          return a
        })
      var o = n('Eyy1'),
        i = n('YFKU')
      function a(e, t, n) {
        if (null === t || 0 === t.availableGroups.size) return []
        const a = [],
          r = (e, t, n, o, i) => ({ id: e, label: t, isActive: o, onClick: i, description: n }),
          c = (t) => {
            e.setPriceScaleUnit(n, t)
          },
          s = t.selectedUnit,
          l = t.originalUnits,
          u = t.names,
          d = t.descriptions,
          m = { actions: [], id: 'first_section' }
        if (l.size > 1) {
          const e = r('Mixed', Object(i.t)('Mixed'), void 0, null === t.selectedUnit, () => c(null))
          m.actions.push(e)
        }
        const f = e.model().availableUnits()
        if (null !== s) {
          const e = r(s, Object(o.ensureDefined)(u.get(s)), Object(o.ensureDefined)(d.get(s)), !0, () => {})
          m.actions.push(e)
        }
        const h = f.unitsByGroups(t.availableGroups)
        for (const o of h)
          for (const e of o.units)
            e.id !== s && l.has(e.id) && m.actions.push(r(e.id, e.name, e.description, !1, () => c(e.id)))
        m.actions.length > 0 && a.push(m)
        const p = s && f.unitGroupById(s)
        if (null !== p)
          for (const o of h) {
            if (o.name !== p) continue
            const e = { id: o.name, actions: [], name: o.name }
            for (const t of o.units)
              t.id === s || l.has(t.id) || e.actions.push(r(t.id, t.name, t.description, !1, () => c(t.id)))
            e.actions.length > 0 && a.push(e)
          }
        for (const o of h) {
          if (o.name === p) continue
          const e = { id: o.name, actions: [], name: o.name }
          for (const t of o.units)
            t.id === s || l.has(t.id) || e.actions.push(r(t.id, t.name, t.description, !1, () => c(t.id)))
          e.actions.length > 0 && a.push(e)
        }
        return a
      }
    },
    ijHL: function (e, t, n) {
      'use strict'
      function o(e) {
        return a(e, r)
      }
      function i(e) {
        return a(e, c)
      }
      function a(e, t) {
        const n = Object.entries(e).filter(t),
          o = {}
        for (const [i, a] of n) o[i] = a
        return o
      }
      function r(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function c(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, 'b', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return i
        })
    },
    nPPD: function (e, t, n) {
      'use strict'
      function o(e, t, n = {}) {
        const o = Object.assign({}, t)
        for (const i of Object.keys(t)) {
          const a = n[i] || i
          a in e && (o[i] = [e[a], t[i]].join(' '))
        }
        return o
      }
      function i(e, t, n = {}) {
        return Object.assign({}, e, o(e, t, n))
      }
      n.d(t, 'b', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return i
        })
    },
    sYiF: function (e, t, n) {
      e.exports = { container: 'container-9xiUj6X_', separator: 'separator-9xiUj6X_', section: 'section-9xiUj6X_' }
    },
    uhCe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var o = n('ASyk')
      const i = {
        SmallHeight: o['small-height-breakpoint'],
        TabletSmall: o['tablet-small-breakpoint'],
        TabletNormal: o['tablet-normal-breakpoint'],
      }
    },
  },
])
