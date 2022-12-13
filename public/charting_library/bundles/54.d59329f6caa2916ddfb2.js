;(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    '+8gn': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return l
        })
      var s = n('q1tI'),
        o = n('Eyy1'),
        r = n('txPx')
      const i = Object(r.getLogger)('Platform.GUI.StudyInputPropertyContainer'),
        a = s.createContext(null)
      class l extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._setValue = (e, t, n) => {
              const { property: s, model: r } = this.props,
                a = Object(o.ensureDefined)(s.child(e))
              i.logNormal(`Changing property "${e}" value from "${s.value()}" to "${t}"`),
                r.setProperty(a, t, 'Change ' + n)
            })
          const { property: t } = e,
            n = {}
          t.childNames().forEach((e) => {
            const s = Object(o.ensureDefined)(t.child(e))
            n.hasOwnProperty(e) || (n[e] = s.value())
          }),
            (this.state = n)
        }
        componentDidMount() {
          const { property: e } = this.props
          e.childNames().forEach((t) => {
            Object(o.ensureDefined)(e.child(t)).subscribe(this, (e) => {
              const n = e.value()
              i.logNormal(`Property "${t}" updated to value "${n}"`), this.setState({ [t]: n })
            })
          })
        }
        componentWillUnmount() {
          const { property: e } = this.props
          e.childNames().forEach((t) => {
            Object(o.ensureDefined)(e.child(t)).unsubscribeAll(this)
          })
        }
        render() {
          const { study: e, model: t, children: n } = this.props,
            o = { study: e, model: t, values: this.state, setValue: this._setValue }
          return s.createElement(a.Provider, { value: o }, n)
        }
      }
    },
    '5Ssy': function (e, t, n) {
      'use strict'
      var s,
        o = n('YFKU'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('+8gn'),
        l = n('Q+1u'),
        c = n('0W35'),
        u = n('TSYQ'),
        p = n('b8Mn')
      n('GZ2k')
      const h = Object(c.b)(
        (((s = class extends r.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value)
              })
          }
          render() {
            const e = u(this.props.className, p.radio, { [p.reverse]: Boolean(this.props.labelPositionReverse) }),
              t = u(p.label, { [p.disabled]: this.props.disabled }),
              n = u(p.box, { [p.noOutline]: -1 === this.props.tabIndex })
            let s = null
            return (
              this.props.label && (s = r.createElement('span', { className: t }, this.props.label)),
              r.createElement(
                'label',
                { className: e },
                r.createElement(
                  'span',
                  { className: p.wrapper, title: this.props.title },
                  r.createElement('input', {
                    id: this.props.id,
                    tabIndex: this.props.tabIndex,
                    autoFocus: this.props.autoFocus,
                    role: this.props.role,
                    className: p.input,
                    type: 'radio',
                    name: this.props.name,
                    checked: this.props.checked,
                    disabled: this.props.disabled,
                    value: this.props.value,
                    onChange: this._onChange,
                    ref: this.props.reference,
                  }),
                  r.createElement('span', { className: n })
                ),
                s
              )
            )
          }
        }).defaultProps = { value: 'on' }),
        s)
      )
      var d = n('Eyy1'),
        m = n('fV01'),
        b = n('HfwS'),
        f = n('qzWo'),
        g = n('tDS2')
      function v(e) {
        const { children: t, input: n, disabled: s, onChange: u, grouped: p, tooltip: m } = e,
          v = Object(r.useContext)(a.b),
          { values: C, setValue: _ } = Object(d.ensureNotNull)(v),
          O = C[n.id],
          [E, S] = Object(r.useState)(O ? 'another-symbol' : 'main-symbol'),
          j = Object(r.useRef)(null)
        return i.a.createElement(
          c.a,
          {
            name: 'symbol-source-' + n.id,
            values: [E],
            onChange: function (e) {
              S(e), 'main-symbol' === e ? Object(b.b)(_)('', n.id, n.name) : j && j.current && j.current.updateSymbol()
            },
          },
          i.a.createElement(
            l.a.Row,
            null,
            i.a.createElement(
              l.a.Cell,
              { colSpan: 2, placement: 'first', grouped: p },
              i.a.createElement(h, {
                value: 'main-symbol',
                className: g.checkbox,
                disabled: s,
                label: i.a.createElement(
                  'span',
                  { className: g.label },
                  Object(o.t)('Main chart symbol', { context: 'input' })
                ),
              })
            )
          ),
          i.a.createElement(
            l.a.Row,
            null,
            i.a.createElement(
              l.a.Cell,
              { placement: 'first', grouped: p },
              i.a.createElement(h, {
                value: 'another-symbol',
                className: g.checkbox,
                disabled: s,
                label: i.a.createElement(
                  'span',
                  { className: g.label },
                  Object(o.t)('Another symbol', { context: 'input' })
                ),
              })
            ),
            i.a.createElement(
              l.a.Cell,
              { placement: 'last', grouped: p },
              t ||
                i.a.createElement(
                  y,
                  Object.assign(
                    {},
                    { reference: j },
                    {
                      input: Object(d.ensureDefined)(n),
                      onChange: u,
                      disabled: s || 'main-symbol' === E,
                      autofocus: 'another-symbol' === E,
                      hasTooltip: Boolean(m),
                    }
                  )
                ),
              m && i.a.createElement(f.a, { title: m })
            )
          )
        )
      }
      const y = Object(b.a)(function (e) {
        const t = Object(r.useContext)(a.b),
          { study: n } = Object(d.ensureNotNull)(t),
          { value: s = '', reference: o } = e
        return i.a.createElement(
          m.b,
          Object.assign({}, e, { allowEmpty: !0, value: Object(m.c)(s, n), study: n, ref: o })
        )
      })
      var C = n('h5Dg')
      class _ extends r.PureComponent {
        render() {
          const { label: e, input: t, tooltip: n } = this.props
          return r.createElement(
            l.a.Row,
            null,
            r.createElement(
              l.a.Cell,
              { placement: 'first', colSpan: 2 },
              r.createElement(C.a, { label: e, input: t, hasTooltip: Boolean(n) }),
              n && r.createElement(f.a, { title: n })
            )
          )
        }
      }
      var O = n('rJEJ')
      function E(e) {
        const { input: t, tooltip: n } = e
        return 'symbol' === t.type && t.optional
          ? r.createElement(v, { input: t, tooltip: n })
          : 'bool' === t.type
          ? r.createElement(_, { label: Object(o.t)(t.name, { context: 'input' }), input: t, tooltip: n })
          : r.createElement(O.a, {
              labelAlign: (function (e) {
                switch (e) {
                  case 'session':
                    return 'adaptive'
                  case 'time':
                    return 'topCenter'
                  default:
                    return
                }
              })(t.type),
              input: t,
              tooltip: n,
            })
      }
      var S = n('07LS'),
        j = n('MALe')
      function w(e) {
        const { content: t } = e
        let n
        return r.createElement(
          l.a.InlineRowContext.Provider,
          { value: !0 },
          r.createElement(
            'div',
            { className: j.inlineRow },
            t.children.map(
              (e, s) => (
                void 0 !== e.tooltip && (n = e.tooltip),
                r.createElement(E, { key: e.id, input: e, tooltip: s === t.children.length - 1 ? n : void 0 })
              )
            )
          )
        )
      }
      function T(e) {
        return e.hasOwnProperty('groupType')
      }
      function x(e, t, n, s, o) {
        if (s.has(n)) Object(d.ensureDefined)(s.get(n)).children.push(e)
        else {
          const r = { id: n, groupType: t, children: [e] }
          s.set(n, r), o.push(r)
        }
      }
      var N = n('Jt4T')
      function P(e) {
        const { content: t } = e
        return T(t)
          ? T((n = t)) && 'inline' === n.groupType
            ? r.createElement(w, { content: t })
            : r.createElement(
                r.Fragment,
                null,
                r.createElement('div', { className: N.titleWrap }, r.createElement(S.a, { title: t.id, name: t.id })),
                t.children.map((e) =>
                  T(e)
                    ? r.createElement(w, { key: e.id, content: e })
                    : r.createElement(E, { key: e.id, input: e, tooltip: e.tooltip })
                ),
                r.createElement('div', { className: N.groupFooter })
              )
          : r.createElement(E, { input: t, tooltip: t.tooltip })
        var n
      }
      n.d(t, 'a', function () {
        return R
      })
      const k = { offset: window.t('Offset') }
      class R extends i.a.PureComponent {
        render() {
          const { reference: e, inputs: t, property: n, study: s, model: o } = this.props,
            { offset: r, offsets: a } = n
          return i.a.createElement(
            l.a,
            { reference: e },
            i.a.createElement(I, { study: s, model: o, property: n.inputs, inputs: t }),
            r && this._createOffsetSection(r),
            a &&
              a.childNames().map((e) => {
                const t = a.childs()[e]
                return this._createOffsetSection(t)
              })
          )
        }
        _createOffsetSection(e) {
          const t = e.childs()
          return i.a.createElement(I, {
            key: 'offset_' + t.title.value(),
            study: this.props.study,
            model: this.props.model,
            inputs: [V(t)],
            property: e,
          })
        }
      }
      function I(e) {
        const { study: t, model: n, inputs: s, property: o } = e,
          l = Object(r.useMemo)(
            () =>
              (function (e) {
                const t = [],
                  n = new Map(),
                  s = new Map()
                return (
                  s.set(void 0, new Map()),
                  e.forEach((e) => {
                    const { group: o, inline: r } = e
                    if (void 0 !== o || void 0 !== r)
                      if (void 0 !== o)
                        if (void 0 !== r)
                          if (n.has(o)) {
                            const t = Object(d.ensureDefined)(n.get(o))
                            let i
                            s.has(t) ? (i = Object(d.ensureDefined)(s.get(t))) : ((i = new Map()), s.set(t, i)),
                              x(e, 'inline', r, i, t.children)
                          } else {
                            const i = { id: r, groupType: 'inline', children: [e] },
                              a = { id: o, groupType: 'group', children: [i] },
                              l = new Map()
                            l.set(r, i), s.set(a, l), n.set(o, a), t.push(a)
                          }
                        else x(e, 'group', o, n, t)
                      else {
                        const n = Object(d.ensureDefined)(s.get(void 0))
                        x(e, 'inline', Object(d.ensureDefined)(r), n, t)
                      }
                    else t.push(e)
                  }),
                  t
                )
              })(s),
            [s]
          )
        return i.a.createElement(
          a.a,
          { property: o, study: t, model: n },
          l.map((e) => i.a.createElement(P, { key: e.id, content: e }))
        )
      }
      function V(e) {
        return {
          id: 'val',
          name: e.title.value() || k.offset,
          defval: e.val.value(),
          type: 'integer',
          min: e.min.value(),
          max: e.max.value(),
        }
      }
    },
    '5YG5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('CW80')
      var s = n('3ClC')
      function o(e) {
        if (Object(s.isStudy)(e)) return e
        if ('isInputsStudy' in e) return e
        throw new TypeError('Unsupported source type.')
      }
    },
    EBrf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'splitThousands', function () {
          return o
        })
      var s = n('ivNn')
      function o(e, t = '&nbsp;') {
        let n = e + ''
        ;-1 !== n.indexOf('e') &&
          (n = (function (e) {
            return Object(s.fixComputationError)(e)
              .toFixed(10)
              .replace(/\.?0+$/, '')
          })(Number(e)))
        const o = n.split('.')
        return o[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (o[1] ? '.' + o[1] : '')
      }
    },
    GZ2k: function (e, t, n) {},
    HGyE: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return u
        })
      var s = n('q1tI'),
        o = n('TSYQ'),
        r = n.n(o),
        i = n('PECq'),
        a = n('HfwS'),
        l = n('tDS2')
      class c extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props
              s(e, t, n)
            })
        }
        render() {
          const {
              input: { id: e, defval: t, options: n, optionsTitles: o },
              value: a,
              disabled: c,
              hasTooltip: u,
            } = this.props,
            p = n.map((e) => {
              const t = o && o[e] ? o[e] : e
              return { value: e, content: window.t(t, { context: 'input' }) }
            }),
            h = void 0 !== a && n.includes(a) ? a : t
          return s.createElement(i.a, {
            id: e,
            className: r()(l.input, u && l.hasTooltip),
            menuClassName: l.dropdownMenu,
            value: h,
            items: p,
            onChange: this._onChange,
            disabled: c,
          })
        }
      }
      const u = Object(a.a)(c)
    },
    HfwS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var s = n('q1tI'),
        o = n('+8gn')
      function r(e) {
        var t
        return (
          ((t = class extends s.PureComponent {
            constructor() {
              super(...arguments),
                (this._getTimezoneName = (e) => {
                  const t = e.model().timezone()
                  if ('exchange' !== t) return t
                  const n = e.model().mainSeries().symbolInfo()
                  return null == n ? void 0 : n.timezone
                }),
                (this._onChange = (e, t, n) => {
                  const { setValue: s } = this.context,
                    { onChange: o } = this.props
                  i(s, o)(e, t, n)
                })
            }
            render() {
              const { input: t } = this.props,
                { values: n, model: o } = this.context
              return s.createElement(
                e,
                Object.assign({}, this.props, {
                  value: n[t.id],
                  tzName: this._getTimezoneName(o),
                  onChange: this._onChange,
                })
              )
            }
          }).contextType = o.b),
          t
        )
      }
      function i(e, t) {
        return (n, s, o) => {
          e(s, n, o), t && t(n, s, o)
        }
      }
    },
    HyYY: function (e, t, n) {
      e.exports = { icon: 'icon-3oPFhRYI' }
    },
    Jt4T: function (e, t, n) {
      e.exports = { titleWrap: 'titleWrap-24p2N42k', groupFooter: 'groupFooter-24p2N42k' }
    },
    KJt4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return r
        })
      var s = n('q1tI')
      const o = s.createContext(null)
      function r(e, t) {
        return s.createElement(o.Consumer, null, (n) =>
          n ? s.createElement(e, Object.assign({}, Object.assign({ model: n }, t))) : null
        )
      }
    },
    MALe: function (e, t, n) {
      e.exports = { inlineRow: 'inlineRow-3IOXimxZ' }
    },
    PjdP: function (e, t, n) {
      'use strict'
      var s = n('q1tI'),
        o = n('kk0y'),
        r = n('YS4w'),
        i = n('h5Dg'),
        a = n('TSYQ'),
        l = n.n(a),
        c = n('wHCJ'),
        u = n('HfwS'),
        p = n('Yi2Q'),
        h = n('tDS2')
      class d extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props
              s(e.currentTarget.value, t, n)
            })
        }
        render() {
          const {
            input: { defval: e },
            value: t,
            disabled: n,
            onBlur: o,
            onKeyDown: r,
            hasTooltip: i,
          } = this.props
          return s.createElement(c.a, {
            className: l()(h.input, i && h.hasTooltip),
            value: void 0 === t ? e : t,
            onChange: this._onChange,
            onBlur: o,
            onKeyDown: r,
            disabled: n,
          })
        }
      }
      const m = Object(p.a)(d),
        b = Object(u.a)(m)
      var f = n('fV01'),
        g = n('Eyy1'),
        v = n('XDrA'),
        y = n('qZIh')
      function C(e = '') {
        const [, t = '', n = '', s = '', o = ''] = Array.from(e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || [])
        return [`${t}:${n}`, `${s}:${o}`]
      }
      class _ extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._onStartPick = (e) => {
              this.setState({ startTime: e }, this._onChange)
            }),
            (this._onEndPick = (e) => {
              this.setState({ endTime: e }, this._onChange)
            }),
            (this._onChange = () => {
              const {
                  input: { id: e, name: t },
                  onChange: n,
                } = this.props,
                { startTime: s, endTime: o } = this.state
              n(s.replace(':', '') + '-' + o.replace(':', ''), e, t)
            })
          const t = e.value || e.input.defval,
            [n, s] = C(t)
          this.state = { prevValue: t, startTime: n, endTime: s }
        }
        render() {
          const { startTime: e, endTime: t } = this.state,
            { hasTooltip: n } = this.props
          return s.createElement(
            v.a,
            { className: l()(n && h.hasTooltip) },
            s.createElement(
              'div',
              { className: h.sessionStart },
              s.createElement(y.a, {
                className: l()(h.input, h.sessionInputContainer),
                name: 'start',
                value: Object(g.ensureDefined)(e),
                onChange: this._onStartPick,
              }),
              s.createElement('span', { className: h.sessionDash }, ' — ')
            ),
            s.createElement(
              'div',
              { className: h.sessionEnd },
              s.createElement(y.a, {
                className: l()(h.input, h.sessionInputContainer),
                name: 'end',
                value: Object(g.ensureDefined)(t),
                onChange: this._onEndPick,
              })
            )
          )
        }
        static getDerivedStateFromProps(e, t) {
          if (e.value === t.prevValue) return t
          const [n, s] = C(e.value)
          return { prevValue: e.value, startTime: n, endTime: s }
        }
      }
      const O = Object(u.a)(_)
      var E = n('YFKU'),
        S = n('Kxc7'),
        j = n('0YCj'),
        w = n.n(j),
        T = n('+8gn'),
        x = n('HGyE'),
        N = n('5YG5')
      const P = {
        open: window.t('open'),
        high: window.t('high'),
        low: window.t('low'),
        close: window.t('close'),
        hl2: window.t('hl2'),
        hlc3: window.t('hlc3'),
        ohlc4: window.t('ohlc4'),
      }
      class k extends s.PureComponent {
        render() {
          const { input: e } = this.props,
            { study: t, model: n } = this.context
          let o = Object.assign({}, P)
          const r = Object(N.a)(t)
          if (t && this._isStudy(t) && t.isChildStudy()) {
            const t = r.parentSource(),
              n = t.title(),
              s = w.a.getChildSourceInputTitles(e, t.metaInfo(), n)
            o = Object.assign(Object.assign({}, o), s)
          }
          if (
            S.enabled('study_on_study') &&
            t &&
            this._isStudy(t) &&
            (t.isChildStudy() || w.a.canBeChild(t.metaInfo()))
          ) {
            const e = [t, ...r.getAllChildren()]
            n.model()
              .allStudies()
              .filter((t) => t.canHaveChildren() && !e.includes(t))
              .forEach((e) => {
                const t = e.title(!0, void 0, !0),
                  n = e.sourceId() || '#' + e.id(),
                  s = e.metaInfo(),
                  r = s.styles,
                  i = s.plots || []
                if (1 === i.length) o[n + '$0'] = t
                else if (i.length > 1) {
                  const e = i.reduce((e, s, o) => {
                    if (!w.a.canPlotBeSourceOfChildStudy(s.type)) return e
                    let i
                    try {
                      i = Object(g.ensureDefined)(Object(g.ensureDefined)(r)[s.id]).title
                    } catch (a) {
                      i = s.id
                    }
                    return Object.assign(Object.assign({}, e), { [`${n}$${o}`]: `${t}: ${i}` })
                  }, {})
                  o = Object.assign(Object.assign({}, o), e)
                }
              })
          }
          const i = Object.assign(Object.assign({}, e), { type: 'text', options: Object.keys(o), optionsTitles: o })
          return s.createElement(x.a, Object.assign({}, this.props, { input: i }))
        }
        _isStudy(e) {
          return !e.hasOwnProperty('isInputsStudy')
        }
      }
      k.contextType = T.b
      var R = n('LxhU'),
        I = n('pPtI'),
        V = n('PECq')
      const D = void 0,
        B = ['1', '3', '5', '15', '30', '45', '60', '120', '180', '240', '1D', '1W', '1M']
      class M extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props
              s(e, t, n)
            })
        }
        render() {
          const { input: e, value: t, disabled: n, hasTooltip: o } = this.props,
            r = R.Interval.parse(void 0 === t ? e.defval : t),
            i = r.multiplier()
          let a = r.value()
          const c = D ? D.get().filter((e) => !R.Interval.parse(e).isRange()) : [],
            u = Object(I.mergeResolutions)(B, c)
          return (
            u.unshift(''),
            (i && u.includes(a)) || (a = u[0]),
            s.createElement(V.a, {
              id: e.id,
              className: l()(h.input, h.resolution, o && h.hasTooltip),
              menuClassName: l()(h.dropdownMenu, h.resolution),
              items:
                ((p = u),
                p.map((e) => ({
                  value: e,
                  content: '' === e ? Object(E.t)('Same as chart') : Object(I.getTranslatedResolutionModel)(e).hint,
                }))),
              value: a,
              onChange: this._onChange,
              disabled: n,
            })
          )
          var p
        }
      }
      const W = Object(u.a)(M)
      var q = n('lkVX'),
        Y = n('Z1Tk')
      class z extends s.PureComponent {
        render() {
          return s.createElement(T.b.Consumer, null, (e) => (e ? this._getColorInputWithContext(e) : null))
        }
        _getColorInputWithContext(e) {
          var t
          const {
              input: { id: n },
              disabled: o,
              hasTooltip: r,
            } = this.props,
            { model: i, study: a } = e
          if ('properties' in a || 'tempProperties' in a) {
            const e =
              'properties' in a
                ? a.properties().inputs[n]
                : null === (t = a.tempProperties) || void 0 === t
                ? void 0
                : t.inputs.child(n)
            return s.createElement(
              Y.a,
              { model: i, property: e },
              s.createElement(q.a, { className: l()(r && h.hasTooltip), color: e, disabled: o })
            )
          }
          return null
        }
      }
      n.d(t, 'a', function () {
        return F
      })
      class F extends s.PureComponent {
        render() {
          const { input: e, disabled: t, onChange: n, tzName: a, hasTooltip: l } = this.props
          if (
            ['text', 'integer', 'float', 'price', 'session', 'resolution'].includes((c = e).type) &&
            c.hasOwnProperty('options')
          )
            return s.createElement(x.a, { input: e, disabled: t, onChange: n, hasTooltip: l })
          var c
          switch (e.type) {
            case 'integer':
              return s.createElement(o.a, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'float':
            case 'price':
              return s.createElement(r.a, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'bool':
              return s.createElement(i.a, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'text':
              return s.createElement(b, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'symbol':
              return s.createElement(f.a, {
                input: e,
                disabled: t,
                onChange: n,
                hasTooltip: l,
              })
            case 'session':
              return s.createElement(O, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'source':
              return s.createElement(k, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'resolution':
              return s.createElement(W, { input: e, disabled: t, onChange: n, hasTooltip: l })
            case 'time':
              return null
            case 'color':
              return s.createElement(z, { input: e, disabled: t, onChange: n, hasTooltip: l })
            default:
              return null
          }
        }
      }
    },
    S0KV: function (e, t, n) {
      'use strict'
      function s(e) {
        return Array.isArray(e) ? e[0].value() : e.value()
      }
      function o(e, t) {
        if (Array.isArray(e)) for (const n of e) t(n)
        else t(e)
      }
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'b', function () {
          return o
        })
    },
    UYhW: function (e, t, n) {
      'use strict'
      var s = n('q1tI'),
        o = n.n(s),
        r = n('Eyy1'),
        i = (n('YFKU'), n('WboT')),
        a = n('EBrf'),
        l = n('Ialn')
      var c = n('zXvd'),
        u = n('nc0P'),
        p = n('Hr11')
      const h = window.t('Number format is invalid.'),
        d = window.t('Specified value is less than the instrument minimum.'),
        m = window.t('Specified value is more than the instrument maximum.'),
        b = new (class {
          constructor(e = ' ') {
            this._divider = e
          }
          format(e) {
            const t = Object(a.splitThousands)(e, this._divider)
            return Object(l.isRtl)() ? Object(l.startWithLTR)(t) : t
          }
          parse(e) {
            const t = Object(l.stripLTRMarks)(e).split(this._divider).join(''),
              n = Number(t)
            return isNaN(n) || /e/i.test(t) ? { res: !1 } : { res: !0, value: n, suggest: this.format(n) }
          }
        })(),
        f = /^-?[0-9]*$/,
        g = 9e15
      class v extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._onFocus = (e) => {
              this.setState({ focused: !0 }), this.props.onFocus && this.props.onFocus(e)
            }),
            (this._onBlur = (e) => {
              this.setState({ displayValue: y(this.props, this.props.value), focused: !1 }),
                this.props.errorHandler && this.props.errorHandler(!1),
                this.props.onBlur && this.props.onBlur(e)
            }),
            (this._onValueChange = (e) => {
              const t = e.target.value
              if (
                (void 0 !== this.props.onEmptyString && '' === t && this.props.onEmptyString(),
                'integer' === this.props.mode && !f.test(t))
              )
                return
              const n = C(t, this.props.formatter),
                s = n.res ? this._checkValueBoundaries(n.value) : { value: !1 },
                o = n.res && !s.value,
                r = n.res && n.suggest && !this.state.focused ? n.suggest : t,
                i = o && s.msg ? s.msg : h
              this.setState({ displayValue: r, errorMsg: i }),
                n.res && s.value && this.props.onValueChange(n.value, 'input'),
                this.props.errorHandler && this.props.errorHandler(!n.res || o)
            }),
            (this._onValueByStepChange = (e) => {
              const { roundByStep: t = !0, step: n = 1, formatter: s } = this.props,
                o = C(this.state.displayValue, s)
              let r = n
              if (o.res) {
                const s = new u.Big(o.value),
                  i = new u.Big(n),
                  a = s.mod(i)
                let l = s.plus(e * n)
                !a.eq(0) && t && (l = l.plus((e > 0 ? 0 : 1) * n).minus(a)), (r = Number(l))
              }
              this._checkValueBoundaries(r).value &&
                (this.setState({ displayValue: y(this.props, r) }), this.props.onValueChange(r, 'step')),
                this.props.errorHandler && this.props.errorHandler(!1)
            })
          const { value: t } = e
          this.state = { value: t, displayValue: y(e, t), focused: !1, errorMsg: h }
        }
        render() {
          return o.a.createElement(i.a, {
            inputMode: this.props.inputMode,
            borderStyle: this.props.borderStyle,
            fontSizeStyle: this.props.fontSizeStyle,
            value: this.state.displayValue,
            forceShowControls: this.props.forceShowControls,
            className: this.props.className,
            inputClassName: this.props.inputClassName,
            button: this.props.button,
            placeholder: this.props.placeholder,
            innerLabel: this.props.innerLabel,
            endSlot: this.props.endSlot,
            disabled: this.props.disabled,
            error: this.props.error,
            errorMessage: this.props.errorMessage || this.state.errorMsg,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this.props.inputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
            controlDecKeyCodes: this.props.controlDecKeyCodes,
            controlIncKeyCodes: this.props.controlIncKeyCodes,
            title: this.props.title,
            intent: this.props.intent,
            highlight: this.props.highlight,
            highlightRemoveRoundBorder: this.props.highlightRemoveRoundBorder,
            stretch: this.props.stretch,
          })
        }
        getClampedValue() {
          const { min: e = -1 / 0, max: t = g } = this.props,
            n = C(this.state.displayValue, this.props.formatter)
          return n.res ? Object(p.clamp)(n.value, e, t) : null
        }
        static getDerivedStateFromProps(e, t) {
          const { alwaysUpdateValueFromProps: n, value: s } = e
          return (t.focused && !n) || t.value === s ? null : { value: s, displayValue: y(e, s) }
        }
        _checkValueBoundaries(e) {
          const { min: t = -1 / 0, max: n = g } = this.props,
            s = (function (e, t, n) {
              const s = e >= t,
                o = e <= n
              return { passMin: s, passMax: o, pass: s && o, clamped: Object(p.clamp)(e, t, n) }
            })(e, t, n),
            o = s.passMax ? (s.passMin ? void 0 : d) : m
          return { value: s.pass, msg: o }
        }
      }
      function y(e, t) {
        const { useFormatter: n = !0, formatter: s, mode: o } = e
        return n && 'integer' !== o
          ? (function (e, t = b) {
              return null !== e ? t.format(e) : ''
            })(t, s)
          : (function (e) {
              if (null === e) return ''
              return c.NumericFormatter.formatNoE(e)
            })(t)
      }
      function C(e, t = b) {
        return t.parse ? t.parse(e) : { res: !1, error: 'Formatter does not support parse' }
      }
      var _ = n('qFKp')
      n.d(t, 'a', function () {
        return O
      })
      class O extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._handleContainerRef = (e) => (this._container = e)),
            (this._onChange = (e, t) => {
              const {
                input: { id: n, name: s },
                onChange: o,
                onBlur: r,
              } = this.props
              o(e, n, s), 'step' === t && r && r()
            }),
            (this._onBlur = (e) => {
              const { onBlur: t } = this.props
              if (t) {
                const n = Object(r.ensureNotNull)(this._container)
                n.contains(document.activeElement) || n.contains(e.relatedTarget) || t()
              }
            })
        }
        render() {
          const {
            input: { defval: e, min: t, max: n, step: o },
            value: r,
            disabled: i,
            onKeyDown: a,
            className: l,
            mode: c,
            stretch: u,
          } = this.props
          return s.createElement(v, {
            className: l,
            value: Number(void 0 === r ? e : r),
            min: t,
            max: n,
            step: o,
            mode: c,
            onBlur: this._onBlur,
            onValueChange: this._onChange,
            onKeyDown: a,
            disabled: i,
            containerReference: this._handleContainerRef,
            inputMode: _.CheckMobile.iOS() ? void 0 : 'numeric',
            fontSizeStyle: 'medium',
            roundByStep: !1,
            stretch: u,
          })
        }
      }
    },
    XDrA: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var s = n('q1tI'),
        o = n.n(s),
        r = n('TSYQ'),
        i = n('Q+1u'),
        a = n('tDS2')
      function l(e) {
        const { className: t } = e,
          n = Object(s.useContext)(i.a.InlineRowContext)
        return o.a.createElement('div', { className: r(a.inputGroup, n && a.inlineGroup, t) }, e.children)
      }
    },
    YS4w: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return h
        })
      var s = n('q1tI'),
        o = n('TSYQ'),
        r = n.n(o),
        i = n('UYhW'),
        a = n('HfwS'),
        l = n('Yi2Q'),
        c = n('tDS2')
      class u extends s.PureComponent {
        render() {
          const { hasTooltip: e } = this.props
          return s.createElement(
            i.a,
            Object.assign({}, this.props, { className: r()(c.input, e && c.hasTooltip), stretch: !1 })
          )
        }
      }
      const p = Object(l.a)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        h = Object(a.a)(p)
    },
    Yi2Q: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var s = n('q1tI')
      const o = { blur: 0, commit: 0, change: 1 / 0 }
      function r(e, t = o) {
        return class extends s.PureComponent {
          constructor(e) {
            super(e),
              (this._onChange = (e, n, s) => {
                const o = t.change
                o
                  ? (clearTimeout(this._timeout),
                    this.setState({ value: e }, () => {
                      o !== 1 / 0 && (this._timeout = setTimeout(() => this._flush(), o))
                    }))
                  : this._flush(e)
              }),
              (this._onBlur = () => {
                this._debounce(t.blur)
                const { onBlur: e } = this.props
                e && e()
              }),
              (this._onKeyDown = (e) => {
                13 === e.keyCode && this._debounce(t.commit)
              }),
              (this.state = { prevValue: e.value, value: e.value })
          }
          componentWillUnmount() {
            this._flush()
          }
          render() {
            const { value: t } = this.state
            return s.createElement(
              e,
              Object.assign({}, this.props, {
                value: t,
                onChange: this._onChange,
                onBlur: this._onBlur,
                onKeyDown: this._onKeyDown,
              })
            )
          }
          static getDerivedStateFromProps(e, t) {
            return e.value === t.prevValue ? t : { prevValue: e.value, value: e.value }
          }
          _debounce(e) {
            e
              ? (clearTimeout(this._timeout), e !== 1 / 0 && (this._timeout = setTimeout(() => this._flush(), e)))
              : this.setState((e) => {
                  this._flush(e.value)
                })
          }
          _flush(e) {
            const {
                input: { id: t, name: n },
                onChange: s,
              } = this.props,
              { prevValue: o, value: r } = this.state
            clearTimeout(this._timeout)
            const i = void 0 !== e ? e : r
            void 0 !== i && i !== o && s(i, t, n)
          }
        }
      }
    },
    Z1Tk: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return a
        })
      var s = n('q1tI'),
        o = n('KJt4')
      const r = s.createContext(null)
      class i extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._setValue = (e, t, n) => {
              const { model: s } = this.props
              s.setProperty(e, t, n)
            })
        }
        componentDidMount() {
          const { property: e } = this.props
          e.subscribe(this, () => this.forceUpdate())
        }
        componentWillUnmount() {
          const { property: e } = this.props
          e.unsubscribeAll(this)
        }
        render() {
          const e = { setValue: this._setValue }
          return s.createElement(r.Provider, { value: e }, this.props.children)
        }
      }
      function a(e, t) {
        return Object(o.b)(
          ({ model: n }) =>
            s.createElement(i, { model: n, property: t.property }, s.createElement(e, Object.assign({}, t))),
          t
        )
      }
    },
    b8Mn: function (e) {
      e.exports = JSON.parse(
        '{"radio":"radio-1cZENBYk","input":"input-303BGOua","box":"box-3rMRS-wv","reverse":"reverse-39E2s_WA","label":"label-3Xg_J0oJ","wrapper":"wrapper-1Law0ttl","noOutline":"noOutline-3-BkNnru"}'
      )
    },
    fV01: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return C
        })
      var s = n('q1tI'),
        o = n.n(s),
        r = n('TSYQ'),
        i = n.n(r),
        a = n('Eyy1'),
        l = n('wHCJ'),
        c = n('jAh7'),
        u = n('+EG+'),
        p = n('RgaO'),
        h = n('e3/o'),
        d = n('pZll'),
        m = n('+8gn'),
        b = n('HfwS'),
        f = n('5YG5'),
        g = n('tDS2')
      function v(e, t) {
        const n = Object(f.a)(t).resolvedSymbolInfoBySymbol(e)
        return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e
      }
      class y extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._input = null),
            (this._popup = null),
            (this._uuid = Object(h.guid)()),
            (this._updateSymbolName = () => {
              this._onSetSymbol(this.state.value)
            }),
            (this._onSetSymbol = (e) => {
              const { study: t } = this.props,
                n = v(e, t),
                {
                  input: { id: s, name: o },
                  onChange: r,
                } = this.props
              r(n, s, o), this.setState({ value: n })
            }),
            (this._refInput = (e) => {
              this._input = e
            }),
            (this._handleOutsideClick = (e) => {
              null !== this._input &&
                document.activeElement === this._input &&
                e.target instanceof Node &&
                null !== this._popup &&
                !this._popup.contains(e.target) &&
                this._input.blur()
            })
          const { study: t, value: n } = e
          ;(this._adapter = Object(f.a)(t)), (this.state = { value: n || '', expanded: !1 })
        }
        componentDidMount() {
          const e = this.context || Object(c.getRootOverlapManager)()
          Object(d.symbolSearchUIService)().bindToInput(Object(a.ensureNotNull)(this._input), {
            syncWithChartWidget: !1,
            syncOnBlur: !0,
            callback: this._onSetSymbol,
            onPopupOpen: (t) => {
              ;(this._popup = e.ensureWindow(this._uuid)), this.setState({ expanded: !0 }), t.appendTo(this._popup)
            },
            onPopupClose: () => {
              ;(this._popup = null),
                this.setState({ expanded: !1 }),
                e.removeWindow(this._uuid),
                this._input && this._input.focus()
            },
            keepFocus: !0,
          }),
            this._adapter.symbolsResolved().subscribe(this, this._updateSymbolName)
        }
        componentDidUpdate(e) {
          const { autofocus: t } = this.props
          e.autofocus !== t && t && this._input && this._input.focus()
        }
        componentWillUnmount() {
          this._adapter.symbolsResolved().unsubscribe(this, this._updateSymbolName)
        }
        render() {
          const { disabled: e, hasTooltip: t } = this.props,
            { value: n, expanded: s } = this.state
          return o.a.createElement(p.a, { mouseDown: !0, touchStart: !0, handler: this._handleOutsideClick }, (r) =>
            o.a.createElement(l.a, {
              className: i()(g.input, g.symbol, t && g.hasTooltip),
              defaultValue: n,
              disabled: e,
              reference: this._refInput,
              containerReference: r,
              'data-haspopup': !0,
              'data-expanded': s,
            })
          )
        }
        updateSymbol() {
          this._onSetSymbol(this.state.value)
        }
      }
      y.contextType = u.b
      const C = Object(b.a)(function (e) {
        const t = Object(s.useContext)(m.b),
          { study: n } = Object(a.ensureNotNull)(t),
          {
            input: { defval: r },
            value: i,
          } = e
        return o.a.createElement(y, Object.assign({}, e, { value: v(i || r || '', n), study: n }))
      })
    },
    h5Dg: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      }),
        n.d(t, 'a', function () {
          return p
        })
      var s = n('q1tI'),
        o = n('fV0y'),
        r = n('TSYQ'),
        i = n.n(r),
        a = n('qFKp'),
        l = n('HfwS'),
        c = n('tDS2')
      class u extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = () => {
              const {
                input: { id: e, name: t },
                value: n,
                onChange: s,
              } = this.props
              s(!n, e, t)
            })
        }
        render() {
          const {
              input: { defval: e },
              value: t,
              disabled: n,
              label: r,
              hasTooltip: l,
            } = this.props,
            u = void 0 === t ? e : t
          return s.createElement(o.a, {
            className: i()(c.checkbox, l && c.hasTooltip),
            disabled: n,
            checked: u,
            onChange: this._onChange,
            label: s.createElement('span', { className: c.label }, r),
            labelAlignBaseline: !a.isIE,
          })
        }
      }
      const p = Object(l.a)(u)
    },
    kk0y: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return h
        })
      var s = n('q1tI'),
        o = n('TSYQ'),
        r = n.n(o),
        i = n('HfwS'),
        a = n('Yi2Q'),
        l = n('UYhW'),
        c = n('tDS2')
      class u extends s.PureComponent {
        render() {
          const { hasTooltip: e } = this.props
          return s.createElement(
            l.a,
            Object.assign({}, this.props, { mode: 'integer', className: r()(c.input, e && c.hasTooltip), stretch: !1 })
          )
        }
      }
      const p = Object(a.a)(u, { change: 1 / 0, commit: 0, blur: 0 }),
        h = Object(i.a)(p)
    },
    lkVX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      n('YFKU')
      var s = n('q1tI'),
        o = n.n(s),
        r = n('eJTA'),
        i = n('Tmoa'),
        a = n('Z1Tk'),
        l = n('7MId'),
        c = n('S0KV'),
        u = n('JWMC')
      const p = window.t('Change Thickness'),
        h = window.t('Change Color'),
        d = window.t('Change Opacity'),
        m = [1, 2, 3, 4]
      class b extends o.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._trackEventLabel = null),
            (this._getTransparencyValue = () => {
              const { transparency: e } = this.props
              return e ? e.value() : 0
            }),
            (this._getOpacityValue = () => {
              const { color: e } = this.props,
                t = Object(c.a)(e)
              if (t)
                return Object(i.isHexColor)(t)
                  ? Object(i.transparencyToAlpha)(this._getTransparencyValue())
                  : Object(r.parseRgba)(t)[3]
            }),
            (this._getColorValueInHex = () => {
              const { color: e } = this.props,
                t = Object(c.a)(e)
              return t ? (Object(i.isHexColor)(t) ? t : Object(r.rgbToHexString)(Object(r.parseRgb)(t))) : null
            }),
            (this._onThicknessChange = (e) => {
              const { thickness: t } = this.props
              void 0 !== t && this._setProperty(t, e, p)
            }),
            (this._onColorChange = (e) => {
              const { color: t, isPaletteColor: n } = this.props,
                s = Object(c.a)(t)
              let o = 0
              s &&
                (o = Object(i.isHexColor)(s)
                  ? this._getTransparencyValue()
                  : Object(i.alphaToTransparency)(Object(r.parseRgba)(s)[3])),
                this._setProperty(t, Object(i.generateColor)(String(e), o, !0), h),
                (this._trackEventLabel = 'Plot color > ' + (n ? 'Palette' : 'Single'))
            }),
            (this._onOpacityChange = (e) => {
              const { color: t } = this.props,
                n = Object(c.a)(t)
              this._setProperty(t, Object(i.generateColor)(n, Object(i.alphaToTransparency)(e), !0), d)
            }),
            (this._onPopupClose = () => {
              this._trackEventLabel &&
                (Object(u.trackEvent)('GUI', 'Study settings', this._trackEventLabel), (this._trackEventLabel = null))
            })
        }
        componentWillUnmount() {
          this._onPopupClose()
        }
        render() {
          const { selectOpacity: e = !0, disabled: t, className: n } = this.props
          return o.a.createElement(l.a, {
            className: n,
            disabled: t,
            color: this._getColorValueInHex(),
            selectOpacity: e,
            opacity: this._getOpacityValue(),
            thickness: this._getThicknessValue(),
            thicknessItems: m,
            onColorChange: this._onColorChange,
            onOpacityChange: this._onOpacityChange,
            onThicknessChange: this._onThicknessChange,
            onPopupClose: this._onPopupClose,
          })
        }
        _getThicknessValue() {
          const { thickness: e } = this.props
          return e ? Object(c.a)(e) : void 0
        }
        _setProperty(e, t, n) {
          const { setValue: s } = this.context
          Object(c.b)(e, (e) => s(e, t, n))
        }
      }
      b.contextType = a.b
    },
    qzWo: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var s = n('q1tI'),
        o = n.n(s),
        r = n('TSYQ'),
        i = n.n(r),
        a = n('Iivm'),
        l = n('+6II'),
        c = n('HyYY'),
        u = n('xJ0h')
      function p() {
        document.removeEventListener('scroll', p), document.removeEventListener('touchstart', p), Object(l.hide)()
      }
      function h(e) {
        Modernizr.mobiletouch &&
          (Object(l.showOnElement)(e.currentTarget, { tooltipDelay: 0 }),
          document.addEventListener('scroll', p),
          document.addEventListener('touchstart', p))
      }
      function d(e) {
        const { title: t } = e
        return o.a.createElement(a.a, { icon: u, className: i()('apply-common-tooltip', c.icon), title: t, onClick: h })
      }
    },
    rJEJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('YFKU')
      var s = n('q1tI'),
        o = n('Eyy1'),
        r = n('PjdP'),
        i = n('Q+1u'),
        a = n('qzWo')
      class l extends s.PureComponent {
        render() {
          const {
            label: e,
            children: t,
            input: n,
            disabled: l,
            onChange: c,
            labelAlign: u,
            grouped: p,
            tooltip: h,
          } = this.props
          return s.createElement(
            i.a.Row,
            null,
            s.createElement(
              i.a.Cell,
              { placement: 'first', verticalAlign: u, grouped: p },
              void 0 !== e ? e : window.t(Object(o.ensureDefined)(n).name, { context: 'input' })
            ),
            s.createElement(
              i.a.Cell,
              { placement: 'last', grouped: p },
              t ||
                s.createElement(r.a, {
                  input: Object(o.ensureDefined)(n),
                  onChange: c,
                  disabled: l,
                  hasTooltip: Boolean(h),
                }),
              h && s.createElement(a.a, { title: h })
            )
          )
        }
      }
    },
    tDS2: function (e, t, n) {
      e.exports = {
        input: 'input-1zfqRRWX',
        resolution: 'resolution-1zfqRRWX',
        symbol: 'symbol-1zfqRRWX',
        checkbox: 'checkbox-1zfqRRWX',
        label: 'label-1zfqRRWX',
        dropdownMenu: 'dropdownMenu-1zfqRRWX',
        sessionStart: 'sessionStart-1zfqRRWX',
        sessionEnd: 'sessionEnd-1zfqRRWX',
        sessionInputContainer: 'sessionInputContainer-1zfqRRWX',
        sessionDash: 'sessionDash-1zfqRRWX',
        inputGroup: 'inputGroup-1zfqRRWX',
        inlineGroup: 'inlineGroup-1zfqRRWX',
        hasTooltip: 'hasTooltip-1zfqRRWX',
      }
    },
    xJ0h: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'
    },
  },
])
