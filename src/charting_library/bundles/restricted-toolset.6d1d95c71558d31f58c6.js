;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['restricted-toolset', 'series-icons-map'],
  {
    '+KIV': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
    },
    '1Tx8': function (e, t, a) {
      e.exports = { button: 'button-mPM2q3lb', withText: 'withText-mPM2q3lb', withoutText: 'withoutText-mPM2q3lb' }
    },
    '1uoO': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>'
    },
    '23di': function (e, t, a) {
      e.exports = {
        wrap: 'wrap-3FnlLKfX',
        titleWrap: 'titleWrap-3FnlLKfX',
        indicators: 'indicators-3FnlLKfX',
        title: 'title-3FnlLKfX',
        icon: 'icon-3FnlLKfX',
        text: 'text-3FnlLKfX',
        titleTabletSmall: 'titleTabletSmall-3FnlLKfX',
        labelRow: 'labelRow-3FnlLKfX',
        label: 'label-3FnlLKfX',
      }
    },
    '2xRE': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>'
    },
    '3j+J': function (e, t, a) {
      e.exports = {
        wrapper: 'wrapper-2wbe1KZX',
        labelRow: 'labelRow-2wbe1KZX',
        label: 'label-2wbe1KZX',
        labelHint: 'labelHint-2wbe1KZX',
        labelOn: 'labelOn-2wbe1KZX',
      }
    },
    '4hTN': function (e, t, a) {
      e.exports = { value: 'value-2y-wa9jT', selected: 'selected-2y-wa9jT' }
    },
    '4pMH': function (e, t, a) {},
    '5ijr': function (e) {
      e.exports = JSON.parse(
        '{"switcherWrapper":"switcherWrapper-1wFH-_jm","size-small":"size-small-1gT-kZYO","size-large":"size-large-MOSirnj_","intent-select":"intent-select-2kut8F29","switcherThumbWrapper":"switcherThumbWrapper-2u191lDO","input":"input-J7QIcTTo","switcherTrack":"switcherTrack-2XruDVTa","intent-default":"intent-default-3soo5rvS","switcherThumb":"switcherThumb-2yuEucci","focus":"focus-uZMRkCO0"}'
      )
    },
    '6KyJ': function (e, t, a) {
      'use strict'
      var n,
        s = a('q1tI'),
        i = a('TSYQ'),
        o = a('K9GE'),
        l = a('YZ9j')
      a('O7m7')
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'), (e[(e.Appear = 1)] = 'Appear'), (e[(e.Active = 2)] = 'Active')
      })(n || (n = {}))
      class r extends s.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: n.Initial })
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            a = i(l.item, { [l[t]]: Boolean(t) })
          return s.createElement(
            'span',
            { className: i(l.loader, e, this._getStateClass()) },
            s.createElement('span', { className: a }),
            s.createElement('span', { className: a }),
            s.createElement('span', { className: a })
          )
        }
        componentDidMount() {
          this.setState({ state: n.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: n.Active })
            }, 2 * o.c))
        }
        componentWillUnmount() {
          this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null))
        }
        _getStateClass() {
          switch (this.state.state) {
            case n.Initial:
              return l['loader-initial']
            case n.Appear:
              return l['loader-appear']
            default:
              return ''
          }
        }
      }
      a.d(t, 'a', function () {
        return r
      })
    },
    '8RO/': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      }),
        a.d(t, 'b', function () {
          return i
        })
      var n = a('3ClC')
      function s(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter((e) => Object(n.isStudy)(e) && !Object(n.isESDStudy)(e))
            .map((e) => ({ id: e.metaInfo().id, description: e.title(!0, void 0, !0) })),
          interval: t,
        }
      }
      function i(e) {
        const t = new Map()
        return (
          e.forEach((e) => {
            const [a, n] = t.get(e.id) || [e.description, 0]
            t.set(e.id, [a, n + 1])
          }),
          Array.from(t.values())
            .map(([e, t]) => `${e}${t > 1 ? ' x ' + t : ''}`)
            .join(', ')
        )
      }
    },
    '9NBK': function (e, t, a) {
      e.exports = { item: 'item-2gtivim-', round: 'round-2gtivim-' }
    },
    ASyk: function (e, t, a) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      }
    },
    CX26: function (e, t, a) {
      e.exports = {
        form: 'form-9dAINdeN',
        interacting: 'interacting-9dAINdeN',
        input: 'input-9dAINdeN',
        menu: 'menu-9dAINdeN',
        add: 'add-9dAINdeN',
        hovered: 'hovered-9dAINdeN',
        hover: 'hover-9dAINdeN',
        wrap: 'wrap-9dAINdeN',
      }
    },
    EsZh: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SERIES_ICONS', function () {
          return d
        })
      var n = a('G2sT'),
        s = a('Jtxf'),
        i = a('pqsj'),
        o = a('1uoO'),
        l = a('FO3N'),
        r = a('t2Sj'),
        c = a('fD7T'),
        h = a('VgwI')
      const d = { 3: n, 0: s, 1: i, 8: o, 9: l, 2: r, 10: c, 12: h }
    },
    EvtC: function (e, t, a) {
      e.exports = { button: 'button-2YcRd2gv' }
    },
    FO3N: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>'
    },
    G2sT: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>'
    },
    GgvM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M21 7v4h1V6h-5v1z"/><path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"/><path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"/><path d="M16.854 16.146l5 5-.708.708-5-5z"/><g><path d="M7 21v-4H6v5h5v-1z"/><path d="M11.146 16.146l-5 5 .708.708 5-5z"/></g></g></svg>'
    },
    HBiQ: function (e, t, a) {
      e.exports = { button: 'button-2eVMAgh-', first: 'first-2eVMAgh-', last: 'last-2eVMAgh-' }
    },
    Jtxf: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>'
    },
    MB0Y: function (e, t, a) {
      'use strict'
      var n = a('q1tI'),
        s = a.n(n),
        i = a('TSYQ'),
        o = a.n(i),
        l = a('mrSG'),
        r = a('5ijr')
      a('4pMH')
      function c(e) {
        const { className: t = '', intent: a = 'default', size: n = 'small', disabled: s } = e
        return i(t, r.switcherWrapper, r['size-' + n], !s && r['intent-' + a])
      }
      class h extends n.PureComponent {
        render() {
          const e = this.props,
            { reference: t, size: a, intent: s } = e,
            o = Object(l.a)(e, ['reference', 'size', 'intent']),
            h = i(r.input, -1 !== this.props.tabIndex && r.focus)
          return n.createElement(
            'div',
            { className: c(this.props) },
            n.createElement('input', Object.assign({}, o, { type: 'checkbox', className: h, ref: t })),
            n.createElement(
              'div',
              { className: r.switcherThumbWrapper },
              n.createElement('div', { className: r.switcherTrack }),
              n.createElement('div', { className: r.switcherThumb })
            )
          )
        }
      }
      var d = a('ijHL'),
        u = a('OP2o')
      a.d(t, 'a', function () {
        return m
      }),
        a.d(t, 'b', function () {
          return v
        })
      const m = u
      function v(e) {
        const {
            className: t,
            checked: a,
            id: n,
            label: i,
            labelDescription: l,
            value: r,
            preventLabelHighlight: c,
            reference: m,
            switchReference: v,
            theme: p = u,
            disabled: b,
          } = e,
          g = o()(p.label, a && !c && p.labelOn),
          S = o()(t, p.wrapper, a && p.wrapperWithOnLabel)
        return s.a.createElement(
          'label',
          { className: S, htmlFor: n, ref: m },
          s.a.createElement(
            'div',
            { className: p.labelRow },
            s.a.createElement('div', { className: g }, i),
            l && s.a.createElement('div', { className: p.labelHint }, l)
          ),
          s.a.createElement(
            h,
            Object.assign(
              {
                disabled: b,
                className: p.switch,
                reference: v,
                checked: a,
                onChange: function (t) {
                  const a = t.target.checked
                  void 0 !== e.onChange && e.onChange(a)
                },
                value: r,
                tabIndex: -1,
                id: n,
              },
              Object(d.b)(e)
            )
          )
        )
      }
    },
    O7m7: function (e, t, a) {},
    OP2o: function (e, t, a) {
      e.exports = {
        wrapper: 'wrapper-1Eudat6L',
        hovered: 'hovered-1Eudat6L',
        labelRow: 'labelRow-1Eudat6L',
        label: 'label-1Eudat6L',
        labelHint: 'labelHint-1Eudat6L',
        labelOn: 'labelOn-1Eudat6L',
      }
    },
    Oy6E: function (e, t, a) {
      e.exports = { spinnerWrap: 'spinnerWrap-1dkAsm33' }
    },
    'QOH/': function (e, t, a) {
      e.exports = { button: 'button-1n0tF4SR', text: 'text-1n0tF4SR', uppercase: 'uppercase-1n0tF4SR' }
    },
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    },
    R5JZ: function (e, t, a) {
      'use strict'
      function n(e, t, a, n, s) {
        function i(s) {
          if (e > s.timeStamp) return
          const i = s.target
          void 0 !== a && null !== t && null !== i && i.ownerDocument === n && (t.contains(i) || a(s))
        }
        return (
          s.click && n.addEventListener('click', i, !1),
          s.mouseDown && n.addEventListener('mousedown', i, !1),
          s.touchEnd && n.addEventListener('touchend', i, !1),
          s.touchStart && n.addEventListener('touchstart', i, !1),
          () => {
            n.removeEventListener('click', i, !1),
              n.removeEventListener('mousedown', i, !1),
              n.removeEventListener('touchend', i, !1),
              n.removeEventListener('touchstart', i, !1)
          }
        )
      }
      a.d(t, 'a', function () {
        return n
      })
    },
    RGo6: function (e, t, a) {
      e.exports = {
        opened: 'opened-90gXp5JL',
        hover: 'hover-90gXp5JL',
        autoSaveWrapper: 'autoSaveWrapper-90gXp5JL',
        sharingWrapper: 'sharingWrapper-90gXp5JL',
        button: 'button-90gXp5JL',
        buttonSmallPadding: 'buttonSmallPadding-90gXp5JL',
        hintPlaceHolder: 'hintPlaceHolder-90gXp5JL',
        smallHintPlaceHolder: 'smallHintPlaceHolder-90gXp5JL',
        popupItemRowTabletSmall: 'popupItemRowTabletSmall-90gXp5JL',
      }
    },
    RYBj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>'
    },
    'S+Ii': function (e, t, a) {
      e.exports = { buttonUndo: 'buttonUndo-nGqa616C', buttonRedo: 'buttonRedo-nGqa616C' }
    },
    S0BX: function (e, t, a) {
      e.exports = {
        dropdown: 'dropdown-3UuXmxSn',
        label: 'label-3UuXmxSn',
        smallWidthTitle: 'smallWidthTitle-3UuXmxSn',
        smallWidthMenuItem: 'smallWidthMenuItem-3UuXmxSn',
        smallWidthWrapper: 'smallWidthWrapper-3UuXmxSn',
      }
    },
    SchQ: function (e, t, a) {
      e.exports = { button: 'button-2DZWpSVr', isDisabled: 'isDisabled-2DZWpSVr', text: 'text-2DZWpSVr' }
    },
    Sl3V: function (e, t, a) {
      e.exports = {
        menu: 'menu-N-Iyk8ip',
        menuSmallTablet: 'menuSmallTablet-N-Iyk8ip',
        menuItemHeaderTabletSmall: 'menuItemHeaderTabletSmall-N-Iyk8ip',
        menuItemHeader: 'menuItemHeader-N-Iyk8ip',
      }
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
    },
    UJ4t: function (e, t, a) {
      e.exports = { wrap: 'wrap-3jbioG5e' }
    },
    VgwI: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>'
    },
    XWsk: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>'
    },
    YEs3: function (e, t, a) {
      e.exports = { button: 'button-3HNCAKoZ', menu: 'menu-3HNCAKoZ' }
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}'
      )
    },
    aVq2: function (e, t, a) {
      e.exports = {
        button: 'button-2R6OKuTS',
        first: 'first-2R6OKuTS',
        last: 'last-2R6OKuTS',
        menu: 'menu-2R6OKuTS',
        dropdown: 'dropdown-2R6OKuTS',
        menuContent: 'menuContent-2R6OKuTS',
        section: 'section-2R6OKuTS',
        smallTabletSectionTitle: 'smallTabletSectionTitle-2R6OKuTS',
        addCustomInterval: 'addCustomInterval-2R6OKuTS',
        hovered: 'hovered-2R6OKuTS',
      }
    },
    cSDC: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a('YFKU')
      const s = [
        { name: '1', label: Object(n.t)('minutes', { context: 'interval' }) },
        { name: '1H', label: Object(n.t)('hours', { context: 'interval' }) },
        { name: '1D', label: Object(n.t)('days', { context: 'interval' }) },
        { name: '1W', label: Object(n.t)('weeks', { context: 'interval' }) },
        { name: '1M', label: Object(n.t)('months', { context: 'interval' }) },
      ]
    },
    cwLw: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      var n = a('q1tI'),
        s = a.n(n),
        i = a('TSYQ'),
        o = a.n(i),
        l = a('ML8+'),
        r = a('fioS')
      function c(e) {
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            'div',
            {
              className: o()(e.className, r.summary),
              onClick: function () {
                e.onStateChange && e.onStateChange(!e.open)
              },
              'data-open': e.open,
            },
            e.summary,
            s.a.createElement(l.a, { className: r.caret, dropped: Boolean(e.open) })
          ),
          e.open && e.children
        )
      }
    },
    fD7T: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>'
    },
    fESK: function (e, t, a) {
      e.exports = {
        labelRow: 'labelRow-2noQNU_F',
        toolbox: 'toolbox-2noQNU_F',
        description: 'description-2noQNU_F',
        descriptionTabletSmall: 'descriptionTabletSmall-2noQNU_F',
        item: 'item-2noQNU_F',
        titleItem: 'titleItem-2noQNU_F',
        titleItemTabletSmall: 'titleItemTabletSmall-2noQNU_F',
        itemTabletSmall: 'itemTabletSmall-2noQNU_F',
        itemLabelTabletSmall: 'itemLabelTabletSmall-2noQNU_F',
        wrap: 'wrap-2noQNU_F',
        hovered: 'hovered-2noQNU_F',
      }
    },
    fioS: function (e, t, a) {
      e.exports = { summary: 'summary-3UYGeClB', hovered: 'hovered-3UYGeClB', caret: 'caret-3UYGeClB' }
    },
    gla1: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a('q1tI')
      const s = () => {
        const [, e] = Object(n.useReducer)((e, t) => e + 1, 0)
        return e
      }
    },
    'i/MG': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return h
      })
      var n = a('mrSG'),
        s = (a('YFKU'), a('q1tI')),
        i = a('TSYQ'),
        o = a('Iivm'),
        l = a('To8B'),
        r = a('kXJy')
      const c = { remove: window.t('Remove') }
      function h(e) {
        const { className: t, isActive: a, onClick: h, title: d, hidden: u, 'data-name': m = 'remove-button' } = e,
          v = Object(n.a)(e, ['className', 'isActive', 'onClick', 'title', 'hidden', 'data-name'])
        return s.createElement(
          o.a,
          Object.assign({}, v, {
            'data-name': m,
            className: i(r.button, 'apply-common-tooltip', a && r.active, u && r.hidden, t),
            icon: l,
            onClick: h,
            title: d || c.remove,
          })
        )
      }
    },
    ijHL: function (e, t, a) {
      'use strict'
      function n(e) {
        return i(e, o)
      }
      function s(e) {
        return i(e, l)
      }
      function i(e, t) {
        const a = Object.entries(e).filter(t),
          n = {}
        for (const [s, i] of a) n[s] = i
        return n
      }
      function o(e) {
        const [t, a] = e
        return 0 === t.indexOf('data-') && 'string' == typeof a
      }
      function l(e) {
        return 0 === e[0].indexOf('aria-')
      }
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return s
        })
    },
    jKyl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>'
    },
    kXJy: function (e, t, a) {
      e.exports = {
        button: 'button-3B9fDLtm',
        disabled: 'disabled-3B9fDLtm',
        active: 'active-3B9fDLtm',
        hidden: 'hidden-3B9fDLtm',
      }
    },
    'koZ+': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>'
    },
    lAXe: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>'
    },
    miV2: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('Kxc7'),
        s = a('q1tI'),
        i = a.n(s),
        o = a('17x9'),
        l = a('dfhE'),
        r = a('EsZh'),
        c = a('pr86'),
        h = a('Iivm'),
        d = a('N5tr'),
        u = a('82wv'),
        m = a('mrSG'),
        v = a('TSYQ'),
        p = a.n(v),
        b = a('UJ4t')
      class g extends s.PureComponent {
        render() {
          const e = this.props,
            { children: t, className: a } = e,
            n = Object(m.a)(e, ['children', 'className'])
          return s.createElement('div', Object.assign({ className: v(a, b.wrap) }, n), t)
        }
      }
      var S = a('tU7i'),
        C = a('ijHL'),
        f = a('HBiQ')
      class _ extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleClick = () => {
              const { onClick: e, onClickArg: t } = this.props
              e && e(t)
            })
        }
        render() {
          const {
              isFirst: e,
              isLast: t,
              hint: a,
              text: n,
              icon: i,
              isActive: o,
              isDisabled: l,
              className: r,
            } = this.props,
            c = Object(C.b)(this.props)
          return s.createElement(
            S.b,
            Object.assign({}, c, {
              icon: i,
              text: n,
              title: a,
              isDisabled: l,
              isActive: o,
              isGrouped: !0,
              onClick: this._handleClick,
              className: v(r, f.button, { [f.first]: e, [f.last]: t }),
            })
          )
        }
      }
      var w = a('KKsp'),
        y = a('/KDZ'),
        k = a('uhCe'),
        x = a('dhVi'),
        O = a('1TxM'),
        E = a('YEs3')
      const M = {
        0: window.t('Bars'),
        1: window.t('Candles'),
        9: window.t('Hollow Candles'),
        8: window.t('Heikin Ashi'),
        2: window.t('Line'),
        3: window.t('Area'),
        10: window.t('Baseline'),
        12: window.t('High-Low'),
      }
      const T = { barsStyle: window.t("Bar's Style"), labels: M },
        I = Object(O.b)()
      class A extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleChangeStyle = (e) => {
              const { favorites: t, lastSelectedNotFavorite: a, activeStyle: n } = this.state
              this.setState({ activeStyle: e, lastSelectedNotFavorite: t.includes(n) ? a : n })
            }),
            (this._handleSelectStyle = (e) => {
              const { chartWidgetCollection: t } = this.context
              e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e)
            }),
            (this._handleClickFavorite = (e) => {
              this._isStyleFavorited(e) ? this._handleRemoveFavorite(e) : this._handleAddFavorite(e)
            }),
            Object(O.c)(t, { chartWidgetCollection: o.any.isRequired, favoriteChartStylesService: o.any.isRequired })
          const { chartWidgetCollection: a, favoriteChartStylesService: s } = t,
            i = a.activeChartStyle.value(),
            l = s.get()
          n.enabled('japanese_chart_styles')
          this.state = { activeStyle: i, favorites: l, styles: [0, 1, 9, 8, 2, 3, 10], japaneseStyles: [] }
          n.enabled('chart_style_hilo') && this.state.styles.push(12)
        }
        componentDidMount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } = this.context
          e.activeChartStyle.subscribe(this._handleChangeStyle),
            t.getOnChange().subscribe(this, this._handleChangeSettings)
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } = this.context
          e.activeChartStyle.unsubscribe(this._handleChangeStyle),
            t.getOnChange().unsubscribe(this, this._handleChangeSettings)
        }
        render() {
          const { isShownQuicks: e, displayMode: t = 'full', id: a } = this.props,
            { activeStyle: n, favorites: i, styles: o, japaneseStyles: c, lastSelectedNotFavorite: d } = this.state,
            m = 'small' !== t && e && 0 !== i.length,
            v = [...i]
          v.includes(n) ? void 0 !== d && v.push(d) : v.push(n)
          const p = m && v.length > 1
          return s.createElement(y.a, { rule: k.a.TabletSmall }, (e) => {
            const t = o.map((t) => this._renderPopupMenuItem(t, t === n, e)),
              i = c.map((t) => this._renderPopupMenuItem(t, t === n, e))
            return s.createElement(
              g,
              { id: a },
              p &&
                v.map((e, t) =>
                  s.createElement(_, {
                    className: E.button,
                    icon: r.SERIES_ICONS[e],
                    isActive: m && n === e,
                    key: t,
                    hint: T.labels[e],
                    isFirst: 0 === t,
                    isLast: t === v.length - 1,
                    onClick: m ? this._handleSelectStyle : void 0,
                    onClickArg: e,
                    'data-value': l.STYLE_SHORT_NAMES[e],
                  })
                ),
              s.createElement(
                u.a,
                {
                  arrow: Boolean(p),
                  content: p ? void 0 : s.createElement(g, null, s.createElement(h.a, { icon: r.SERIES_ICONS[n] })),
                  title: p ? T.barsStyle : T.labels[n],
                  className: E.menu,
                  isDrawer: e,
                },
                t,
                !!i.length && s.createElement(w.a, null),
                i
              )
            )
          })
        }
        _renderPopupMenuItem(e, t, a) {
          const { isFavoritingAllowed: n } = this.props,
            i = this._isStyleFavorited(e)
          return s.createElement(d.b, {
            key: e,
            theme: a ? x.a : void 0,
            icon: r.SERIES_ICONS[e],
            isActive: t,
            label: T.labels[e] || '',
            onClick: this._handleSelectStyle,
            onClickArg: e,
            showToolboxOnHover: !i,
            toolbox:
              n && s.createElement(c.a, { isActive: t, isFilled: i, onClick: () => this._handleClickFavorite(e) }),
            'data-value': l.STYLE_SHORT_NAMES[e],
          })
        }
        _handleChangeSettings(e) {
          this.setState({ lastSelectedNotFavorite: void 0, favorites: e })
        }
        _isStyleFavorited(e) {
          return -1 !== this.state.favorites.indexOf(e)
        }
        _handleAddFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: a } = this.context
          a.set([...t, e])
        }
        _handleRemoveFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: a } = this.context
          a.set(t.filter((t) => t !== e))
        }
      }
      A.contextType = I
      var N = a('YFKU'),
        R = a('1Tx8')
      const j = ['medium', 'small']
      function F(e) {
        const { text: t, className: a, displayMode: n, collapseWhen: i = j } = e,
          o = Object(m.a)(e, ['text', 'className', 'displayMode', 'collapseWhen']),
          l = !i.includes(n)
        return s.createElement(
          S.b,
          Object.assign({}, o, { text: l ? t : void 0, className: v(a, R.button, l ? R.withText : R.withoutText) })
        )
      }
      var z = a('JWMC'),
        H = a('RYBj')
      const L = { compare: window.t('Compare'), compareOrAddSymbol: window.t('Compare or Add Symbol') },
        W = Object(O.b)()
      class D extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ isActive: e })
            }),
            (this._handleClick = () => {
              Object(z.trackEvent)('GUI', 'Chart Header Toolbar', 'compare'),
                this.context.chartWidgetCollection.toggleAddCompareDialog().then((e) => {
                  null !== e &&
                    (e.on('afterOpen', () => this.setState({ isActive: !0 })),
                    e.on('beforeClose', () => this.setState({ isActive: !1 })))
                })
            }),
            Object(O.c)(t, { chartWidgetCollection: o.any.isRequired }),
            (this.state = { isActive: !1 }),
            (this._compareDialogRenderer = null)
        }
        componentDidMount() {
          var e
          null === (e = this._compareDialogRenderer) || void 0 === e || e.visible().subscribe(this._updateState)
        }
        componentWillUnmount() {
          var e
          null === (e = this._compareDialogRenderer) || void 0 === e || e.visible().unsubscribe(this._updateState)
        }
        render() {
          const { isActive: e } = this.state
          return s.createElement(
            F,
            Object.assign({}, this.props, {
              icon: H,
              isOpened: e,
              onClick: this._handleClick,
              text: L.compare,
              title: L.compareOrAddSymbol,
            })
          )
        }
      }
      D.contextType = W
      var P = a('p0W+'),
        V = a('GgvM')
      const U = { hint: window.t('Fullscreen mode') },
        K = Object(O.b)()
      class B extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidgetCollection: e } = this.context
              e.startFullscreen()
            }),
            Object(O.c)(t, { chartWidgetCollection: o.any.isRequired })
        }
        render() {
          const { className: e, id: t } = this.props
          return s.createElement(P.a, { id: t, icon: V, onClick: this._handleClick, title: U.hint, className: v(e) })
        }
      }
      B.contextType = K
      var G = a('Eyy1'),
        X = a('/DW5'),
        q = a('txPx')
      const Q = Object(q.getLogger)('FavoritesInfo')
      function J(e, t) {
        if (0 === e.length) return Promise.resolve([])
        Q.logNormal('Requesting favorites info')
        const a = [],
          n = new Map(),
          s = new Map(),
          i = new Map()
        return (
          e.forEach((e) => {
            switch (e.type) {
              case 'java':
                i.set(e.studyId, e)
                break
              case 'pine':
                isPublishedPineId(e.pineId) ? n.set(e.pineId, e) : s.set(e.pineId, e)
                break
              default:
                Object(G.assert)(!1, 'unknown favorite type ' + JSON.stringify(e))
            }
          }),
          0 !== i.size &&
            a.push(
              t
                .findAllJavaStudies()
                .then((e) => {
                  const t = new Map()
                  for (const a of e)
                    !a.is_hidden_study &&
                      i.has(a.id) &&
                      t.set(a.id, {
                        name: a.description,
                        localizedName: a.description_localized,
                        studyMarketShittyObject: a,
                      })
                  return t
                })
                .then((e) => {
                  const t = (function (e, t) {
                    const a = { items: [], notFoundItems: [] }
                    return (
                      e.forEach((e, n) => {
                        const s = t.get(n)
                        void 0 !== s ? a.items.push({ item: e, info: s }) : a.notFoundItems.push(e)
                      }),
                      a
                    )
                  })(i, e)
                  if (0 !== t.notFoundItems.length) {
                    const e = t.notFoundItems.map((e) => e.studyId)
                    Q.logWarn('Cannot find java scripts: ' + JSON.stringify(e))
                  }
                  return t.items
                })
            ),
          Promise.all(a).then(
            (e) => (Q.logNormal('Requesting favorites info finished'), e.reduce((e, t) => e.concat(t), []))
          )
        )
      }
      var Y = a('CW80'),
        Z = a('mMWL'),
        $ = a('6KyJ'),
        ee = a('Oy6E')
      function te(e) {
        return s.createElement('div', { className: ee.spinnerWrap }, s.createElement($.a, null))
      }
      var ae = a('sHKj')
      function ne(e) {
        return s.createElement('div', { className: v(e.className, ae.title) }, e.children)
      }
      var se = a('XWsk'),
        ie = a('S0BX')
      const oe = {
          text: window.t('Indicators'),
          hint: n.enabled('study_dialog_fundamentals_economy_addons')
            ? window.t('Indicators & Strategies')
            : window.t('Indicators'),
          favorites: window.t('Favorites'),
        },
        le = Object(X.b)({ keys: ['/'], text: '{0}' }),
        re = Object(O.b)()
      class ce extends i.a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._promise = null),
            (this._menu = i.a.createRef()),
            (this._setActiveState = (e) => {
              this.setState({ isActive: e })
            }),
            (this._handleClick = () => {
              const { studyMarket: e } = this.props
              this.setState({ isActive: !0 }, () => {
                e.visible().value() ? e.hide() : e.show()
              })
            }),
            (this._handleSelectIndicator = (e) => {
              e = Object(G.ensureDefined)(e)
              const { chartWidgetCollection: t } = this.context
              if ('java' === e.type) {
                const t = Object(Y.tryFindStudyLineToolNameByStudyId)(e.studyId)
                if (null !== t) return void Z.tool.setValue(t)
              }
              t.activeChartWidget.value().insertStudy(e)
            }),
            (this._handleFavoriteIndicatorsChange = () => {
              const { favoriteScriptsModel: e } = this.context,
                t = [...Object(G.ensureDefined)(e).favorites()]
              this.setState({ favorites: t }), this._clearCache()
            }),
            (this._handleMouseEnter = () => {
              this._prefetchFavorites()
            }),
            (this._handleWrapClick = () => {
              this._prefetchFavorites()
            }),
            (this._handleChangeActiveWidget = () => {
              this._clearCache()
            }),
            (this._clearCache = () => {
              ;(this._promise = null), this.setState({ infos: [] })
            }),
            Object(O.c)(t, { favoriteScriptsModel: o.any, chartWidgetCollection: o.any.isRequired })
          const { favoriteScriptsModel: a } = t,
            n = void 0 !== a ? a.favorites() : []
          this.state = { isActive: !1, isLoading: !1, favorites: n, infos: [] }
        }
        componentDidMount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: a } = this.context
          e.visible().subscribe(this._setActiveState),
            void 0 !== t &&
              (t.favoritesChanged().subscribe(this, this._handleFavoriteIndicatorsChange),
              a.activeChartWidget.subscribe(this._handleChangeActiveWidget))
        }
        componentWillUnmount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: a } = this.context
          e.visible().unsubscribe(this._setActiveState),
            void 0 !== t &&
              (t.favoritesChanged().unsubscribe(this, this._handleFavoriteIndicatorsChange),
              a.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)),
            (this._promise = null)
        }
        render() {
          const { isActive: e, favorites: t, isLoading: a } = this.state,
            { className: n, displayMode: s, id: o } = this.props,
            { chartWidgetCollection: l } = this.context
          return i.a.createElement(
            g,
            { id: o, onMouseEnter: this._handleMouseEnter, onClick: this._handleWrapClick },
            i.a.createElement(F, {
              displayMode: s,
              className: n,
              icon: se,
              isOpened: e,
              onClick: this._handleClick,
              text: oe.text,
              title: oe.hint,
              'data-role': 'button',
              'data-name': 'open-indicators-dialog',
              'data-tooltip-hotkey': le,
            }),
            t.length > 0 &&
              i.a.createElement(y.a, { rule: 'screen and (max-width: 428px)' }, (e) =>
                i.a.createElement(
                  u.a,
                  {
                    key: l.activeChartWidget.value().id(),
                    arrow: !0,
                    closeOnClickOutside: !0,
                    isDrawer: e,
                    drawerPosition: 'Bottom',
                    title: oe.favorites,
                    ref: this._menu,
                    'data-name': 'show-favorite-indicators',
                  },
                  i.a.createElement(
                    'div',
                    { className: p()(ie.dropdown, e && ie.smallWidthWrapper) },
                    i.a.createElement(ne, { className: e && ie.smallWidthTitle }, window.t('Favorite Indicators')),
                    a && i.a.createElement(te, null),
                    !a &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        this.state.infos.length > 0
                          ? this.state.infos.map((t) =>
                              i.a.createElement(d.b, {
                                className: p()(e && ie.smallWidthMenuItem),
                                theme: e ? x.a : void 0,
                                key: 'java' === t.item.type ? t.item.studyId : t.item.pineId,
                                onClick: this._handleSelectIndicator,
                                onClickArg: t.item,
                                label: i.a.createElement(
                                  'span',
                                  { className: p()(!e && ie.label, e && ie.smallWidthLabel, 'apply-overflow-tooltip') },
                                  he(t)
                                ),
                              })
                            )
                          : null !== this._promise &&
                              i.a.createElement(d.b, {
                                isDisabled: !0,
                                label: window.t('You have no Favorites Indicators yet'),
                              })
                      )
                  )
                )
              )
          )
        }
        _prefetchFavorites() {
          const { chartWidgetCollection: e } = this.context
          if (null !== this._promise || !window.is_authenticated) return
          const t = e.activeChartWidget.value().model()
          if (null === t) return
          const a = t.model().studyMetaInfoRepository()
          this.setState({ isLoading: !0 })
          const n = (this._promise = J(this.state.favorites, a).then((e) => {
            if (n !== this._promise) return
            ;(e = [...e].sort((e, t) => he(e).localeCompare(he(t)))),
              this.setState({ infos: e, isLoading: !1 }, () => {
                this._menu.current && this._menu.current.update()
              })
          }))
        }
      }
      function he(e) {
        return e.info.localizedName || Object(N.t)(e.info.name, { context: 'study' })
      }
      ce.contextType = re
      var de = a('PT1i'),
        ue = a('pPtI'),
        me = a('LxhU'),
        ve = a('4hTN')
      function pe(e) {
        return s.createElement('div', { className: v(ve.value, { [ve.selected]: e.isSelected }) }, e.value, e.metric)
      }
      var be = a('9dlw'),
        ge = a('ML8+'),
        Se = a('cSDC'),
        Ce = a('CX26')
      class fe extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._timeMenu = null),
            (this._setMenuRef = (e) => {
              this._timeMenu = e
            }),
            (this._handleChangeInput = (e) => {
              const { value: t } = e.currentTarget
              ;/^[0-9]*$/.test(t) && this.setState({ inputValue: t })
            }),
            (this._handleSelectTime = (e) => {
              this.setState({ selectedTime: e }), this._closeMenu()
            }),
            (this._handleClickAdd = () => {
              const { inputValue: e, selectedTime: t } = this.state
              this.props.onAdd(e, t)
            }),
            (this._toggleMenu = () => {
              this.state.isOpenedMenu ? this._closeMenu() : this._openMenu()
            }),
            (this._closeMenu = () => {
              this.props.onCloseMenu(), this.setState({ isOpenedMenu: !1 })
            }),
            (this._openMenu = () => {
              this.props.onOpenMenu(), this.setState({ isOpenedMenu: !0 })
            }),
            (this._getMenuPosition = () => {
              const e = Object(G.ensureNotNull)(this._timeMenu).getBoundingClientRect()
              return { overrideWidth: e.width, x: e.left, y: e.bottom + 1 }
            }),
            (this.state = { inputValue: '1', isOpenedMenu: !1, selectedTime: Se.a[0].name })
        }
        render() {
          const { inputValue: e, isOpenedMenu: t, menuWidth: a, selectedTime: n } = this.state
          return s.createElement(
            'div',
            { className: v(Ce.form, { [Ce.interacting]: t }) },
            s.createElement('input', {
              className: Ce.input,
              maxLength: 6,
              onChange: this._handleChangeInput,
              value: e,
            }),
            s.createElement(
              'div',
              { className: Ce.menu, onClick: this._toggleMenu, ref: this._setMenuRef },
              Se.a.find((e) => e.name === n).label,
              s.createElement(ge.a, { dropped: t })
            ),
            s.createElement('div', { className: Ce.add, onClick: this._handleClickAdd }, Object(N.t)('Add')),
            s.createElement(
              be.a,
              {
                doNotCloseOn: this,
                isOpened: t,
                minWidth: a,
                onClose: this._closeMenu,
                position: this._getMenuPosition,
              },
              Se.a.map((e) =>
                s.createElement(d.b, {
                  dontClosePopup: !0,
                  key: e.name,
                  label: e.label,
                  onClick: this._handleSelectTime,
                  onClickArg: e.name,
                })
              )
            )
          )
        }
      }
      a('EsMY')
      var _e = a('i/MG'),
        we = a('8d0Q'),
        ye = a('uPhS')
      function ke(e) {
        const {
            interval: t,
            hint: a,
            isActive: n,
            isDisabled: o,
            isFavorite: l,
            isSignaling: r,
            onClick: h,
            onClickRemove: u,
            onClickFavorite: m,
            isSmallTablet: v,
          } = e,
          b = Object(C.b)(e),
          [g, S] = Object(we.b)(),
          f = i.a.useCallback(() => u(t), [u, t]),
          _ = i.a.useCallback(() => m(t), [m, t]),
          w = Object(s.useRef)(null)
        return (
          Object(s.useEffect)(() => {
            var e
            r && v && (null === (e = w.current) || void 0 === e || e.scrollIntoView())
          }, [r, v]),
          i.a.createElement(
            'div',
            Object.assign({}, S, { ref: w }),
            i.a.createElement(
              d.b,
              Object.assign({}, b, {
                className: p()(v && ye.smallWidthMenuItem),
                theme: v ? x.a : void 0,
                isActive: n,
                isDisabled: o,
                isHovered: r,
                onClick: h,
                onClickArg: t,
                toolbox: (function () {
                  const { isRemovable: t, isFavoritingAllowed: a } = e,
                    s = i.a.createElement(_e.a, {
                      key: 'remove',
                      isActive: n,
                      hidden: !Modernizr.touch && !g,
                      onClick: f,
                    }),
                    r = i.a.createElement(c.a, { key: 'favorite', isActive: n, isFilled: l, onClick: _ })
                  return [t && s, !o && a && r]
                })(),
                showToolboxOnHover: !l,
                label: a,
              })
            )
          )
        )
      }
      const xe = {
        [me.ResolutionKind.Ticks]: window.t('Ticks', { context: 'interval_group_name' }),
        [me.ResolutionKind.Seconds]: window.t('Seconds', { context: 'interval_group_name' }),
        [me.ResolutionKind.Minutes]: window.t('Minutes', { context: 'interval_group_name' }),
        [me.SpecialResolutionKind.Hours]: window.t('Hours', { context: 'interval_group_name' }),
        [me.ResolutionKind.Days]: window.t('Days', { context: 'interval_group_name' }),
        [me.ResolutionKind.Weeks]: window.t('Weeks', { context: 'interval_group_name' }),
        [me.ResolutionKind.Months]: window.t('Months', { context: 'interval_group_name' }),
        [me.ResolutionKind.Range]: window.t('Ranges', { context: 'interval_group_name' }),
        [me.ResolutionKind.Invalid]: '',
      }
      function Oe(e, t = !1) {
        return { id: e, name: xe[e], items: [], mayOmitSeparator: t }
      }
      var Ee = a('cwLw'),
        Me = a('aIyQ'),
        Te = a.n(Me),
        Ie = a('X0gx'),
        Ae = a('tWVy'),
        Ne = a('aVq2')
      const Re = { openDialog: Object(N.t)('Open Interval Dialog'), timeInterval: Object(N.t)('Time Interval') },
        je = Object(X.b)({ keys: [','], text: Object(N.t)('Number or {0}') }),
        Fe = Object(O.b)(),
        ze = new Te.a(),
        He = i.a.lazy(async () => ({
          default: (
            await Promise.all([
              a.e(3),
              a.e(6),
              a.e(8),
              a.e(9),
              a.e(13),
              a.e(15),
              a.e(19),
              a.e(31),
              a.e(97),
              a.e(5),
              a.e(12),
              a.e(17),
              a.e(26),
              a.e('custom-intervals-add-dialog'),
            ]).then(a.bind(null, 'w9vS'))
          ).ToolWidgetIntervalsAddDialog,
        }))
      function Le(e) {
        {
          const t = me.Interval.parse(e)
          if (!Object(ue.isSecondsEnabled)() && t.isSeconds()) return !1
          if (!Object(ue.isTicksEnabled)() && t.isTicks()) return !1
        }
        return !0
      }
      class We extends i.a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._menu = i.a.createRef()),
            (this._renderChildren = (e, t) => [...this._createMenuItems(e, t), ...this._createIntervalForm(t)]),
            (this._handleChangeInterval = (e) => {
              const { activeInterval: t, lastNotQuicked: a } = this.state,
                n = this._getQuicks()
              this.setState({
                activeInterval: Object(ue.normalizeIntervalString)(e),
                lastNotQuicked: void 0 === t || n.includes(t) ? a : t,
              })
            }),
            (this._bindedForceUpdate = () => {
              this.forceUpdate()
            }),
            (this._handleCloseMenu = () => {
              this.setState({ isOpenedFormMenu: !1 })
            }),
            (this._handleOpenMenu = () => {
              this.setState({ isOpenedFormMenu: !0 })
            }),
            (this._handleSelectInterval = (e) => {
              void 0 !== e && e !== de.linking.interval.value() && this.context.chartWidgetCollection.setResolution(e),
                e && Object(z.trackEvent)('GUI', 'Time Interval', e)
            }),
            (this._handleClickFavorite = (e) => {
              ;(e = Object(G.ensureDefined)(e)),
                this._isIntervalFavorite(e) ? this._handleRemoveFavorite(e) : this._handleAddFavorite(e)
            }),
            (this._handleAddFavorite = (e) => {
              const { favorites: t } = this.state
              this.context.favoriteIntervalsService.set([...t, e])
            }),
            (this._handleRemoveFavorite = (e) => {
              const { favorites: t } = this.state
              this.context.favoriteIntervalsService.set(t.filter((t) => t !== e))
            }),
            (this._handleAddInterval = (e, t) => {
              const { intervalService: a } = this.context,
                n = a.add(e, t)
              n && this.setState({ lastAddedInterval: n })
            }),
            (this._handleRemoveInterval = (e) => {
              const { intervalService: t } = this.context
              e && (t.remove(e), this._handleRemoveFavorite(e))
            }),
            (this._getHandleSectionStateChange = (e) => (t) => {
              const { menuViewState: a } = this.state,
                { intervalsMenuViewStateService: n } = this.context
              n.set(Object.assign(Object.assign({}, a), { [e]: !t }))
            }),
            (this._handleOpenAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !0 })
            }),
            (this._handleCloseAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !1 })
            }),
            (this._handleGlobalClose = () => {
              const { isFake: e } = this.props,
                { isAddIntervalDialogOpened: t } = this.state
              e || t || ze.fire()
            }),
            Object(O.c)(t, {
              chartApiInstance: o.any.isRequired,
              favoriteIntervalsService: o.any.isRequired,
              intervalService: o.any.isRequired,
              intervalsMenuViewStateService: o.any.isRequired,
            })
          const {
            chartApiInstance: a,
            favoriteIntervalsService: s,
            intervalService: l,
            intervalsMenuViewStateService: r,
          } = t
          this._customIntervals = n.enabled('custom_resolutions')
          const c = de.linking.interval.value(),
            h = c && Object(ue.normalizeIntervalString)(c),
            d = s.get(),
            u = l.getCustomIntervals(),
            m = r.get()
          ;(this._defaultIntervals = a.defaultResolutions().filter(Le).map(ue.normalizeIntervalString)),
            (this.state = {
              isOpenedFormMenu: !1,
              activeInterval: h,
              favorites: d,
              customs: u,
              menuViewState: m,
              isAddIntervalDialogOpened: !1,
            })
        }
        componentDidMount() {
          const { favoriteIntervalsService: e, intervalService: t, intervalsMenuViewStateService: a } = this.context
          e.getOnChange().subscribe(this, this._handleChangeFavorites),
            a.getOnChange().subscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().subscribe(this, this._handleChangeCustoms),
            de.linking.interval.subscribe(this._handleChangeInterval),
            de.linking.intraday.subscribe(this._bindedForceUpdate),
            de.linking.seconds.subscribe(this._bindedForceUpdate),
            de.linking.ticks.subscribe(this._bindedForceUpdate),
            de.linking.supportedResolutions.subscribe(this._bindedForceUpdate),
            Ae.a.subscribe(this, this._handleGlobalClose)
        }
        componentWillUnmount() {
          const { favoriteIntervalsService: e, intervalService: t, intervalsMenuViewStateService: a } = this.context
          e.getOnChange().unsubscribe(this, this._handleChangeFavorites),
            a.getOnChange().unsubscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().unsubscribe(this, this._handleChangeCustoms),
            de.linking.interval.unsubscribe(this._handleChangeInterval),
            de.linking.intraday.unsubscribe(this._bindedForceUpdate),
            de.linking.seconds.unsubscribe(this._bindedForceUpdate),
            de.linking.ticks.unsubscribe(this._bindedForceUpdate),
            de.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate),
            Ae.a.unsubscribe(this, this._handleGlobalClose)
        }
        componentDidUpdate(e, t) {
          this.state.lastAddedInterval && setTimeout(() => this.setState({ lastAddedInterval: void 0 }), 400)
        }
        render() {
          const { isShownQuicks: e, id: t } = this.props,
            { activeInterval: a, customs: n, lastNotQuicked: s, isAddIntervalDialogOpened: o } = this.state,
            l = this._getQuicks(),
            r = Object(ue.sortResolutions)([...l])
          void 0 !== a && r.includes(a) ? void 0 !== s && r.push(s) : void 0 !== a && r.push(a)
          const c = (!(!e || 0 === l.length) || void 0) && r.length > 1,
            h = {},
            d = Object(ue.mergeResolutions)(this._defaultIntervals, n)
          ;(void 0 !== a ? d.concat(a) : d).filter(ue.isAvailable).forEach((e) => (h[e] = !0))
          const m = void 0 !== a ? Object(ue.getTranslatedResolutionModel)(a) : null
          return i.a.createElement(
            g,
            { id: t },
            c &&
              r.map((e, t) => {
                const n = Object(ue.getTranslatedResolutionModel)(e)
                return i.a.createElement(_, {
                  key: t,
                  className: v(Ne.button, { [Ne.first]: 0 === t, [Ne.last]: t === r.length - 1 }),
                  text: i.a.createElement(pe, {
                    value: n.mayOmitMultiplier ? void 0 : n.multiplier,
                    metric: n.shortKind,
                  }),
                  hint: n.hint,
                  isActive: a === e,
                  isDisabled: !h[e] && e !== s,
                  onClick: this._handleSelectInterval,
                  onClickArg: e,
                  'data-value': e,
                })
              }),
            i.a.createElement(y.a, { rule: k.a.TabletSmall }, (e) =>
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  Ie.a.Provider,
                  { value: ze },
                  i.a.createElement(
                    u.a,
                    {
                      arrow: Boolean(c),
                      closeOnClickOutside: !0,
                      content:
                        c || null === m
                          ? void 0
                          : i.a.createElement(
                              g,
                              { className: Ne.menuContent },
                              i.a.createElement(pe, {
                                value: m.mayOmitMultiplier ? void 0 : m.multiplier,
                                metric: m.shortKind,
                              })
                            ),
                      title: c || null === m ? Re.timeInterval : m.hint,
                      hotKey: c ? je : void 0,
                      className: Ne.menu,
                      ref: this._menu,
                      isDrawer: e,
                    },
                    i.a.createElement('div', { className: Ne.dropdown }, this._renderChildren(d, e))
                  )
                ),
                e &&
                  o &&
                  i.a.createElement(
                    i.a.Suspense,
                    { fallback: null },
                    i.a.createElement(He, {
                      onAdd: this._handleAddInterval,
                      onClose: this._handleCloseAddIntervalDialog,
                      onUnmount: this._handleCloseAddIntervalDialog,
                    })
                  )
              )
            )
          )
        }
        _createMenuItems(e, t) {
          const a = (function (e) {
            const t = Oe(me.ResolutionKind.Ticks),
              a = Oe(me.ResolutionKind.Seconds),
              n = Oe(me.ResolutionKind.Minutes),
              s = Oe(me.SpecialResolutionKind.Hours),
              i = Oe(me.ResolutionKind.Days),
              o = Oe(me.ResolutionKind.Range)
            return (
              e.forEach((e) => {
                const l = me.Interval.parse(e)
                l.isMinuteHours()
                  ? s.items.push(e)
                  : l.isMinutes()
                  ? Object(me.isHour)(Number(l.multiplier()))
                    ? s.items.push(e)
                    : n.items.push(e)
                  : l.isSeconds()
                  ? a.items.push(e)
                  : l.isDWM()
                  ? i.items.push(e)
                  : l.isRange()
                  ? o.items.push(e)
                  : l.isTicks() && t.items.push(e)
              }),
              [t, a, n, s, i, o].filter((e) => 0 !== e.items.length)
            )
          })(e).map((e, a, n) => this._renderResolutionsGroup(e, 1 === n.length, t))
          return (function (e) {
            let t = !1
            return e.filter((e, a, n) => {
              let s = !0
              return (
                e.type === w.a && ((0 !== a && a !== n.length - 1) || (s = !1), t && (s = !1)), (t = e.type === w.a), s
              )
            })
          })([].concat(...a))
        }
        _createIntervalForm(e) {
          if (this._customIntervals) {
            const t = e
              ? i.a.createElement(
                  'div',
                  { key: 'add-dialog', className: Ne.addCustomInterval, onClick: this._handleOpenAddIntervalDialog },
                  Object(N.t)('Add custom interval') + '…'
                )
              : i.a.createElement(fe, {
                  key: 'add-form',
                  onAdd: this._handleAddInterval,
                  onCloseMenu: this._handleCloseMenu,
                  onOpenMenu: this._handleOpenMenu,
                })
            return [i.a.createElement(w.a, { key: 'custom-interval-separator' }), t]
          }
          return []
        }
        _renderResolutionsGroup(e, t = !1, a) {
          const n = [],
            s = e.items.map((e) => this._renderPopupMenuItem(e, a))
          if (t) n.push(...s)
          else if (a) {
            const t = i.a.createElement(
              'div',
              { key: e.id },
              i.a.createElement('div', { className: Ne.smallTabletSectionTitle }, e.name),
              s
            )
            n.push(t)
          } else {
            const { intervalsMenuViewStateService: t } = this.context,
              { menuViewState: a } = this.state
            if (!t.isAllowed(e.id)) return []
            const o = i.a.createElement(
              Ee.a,
              {
                key: e.id,
                className: Ne.section,
                summary: e.name,
                open: !a[e.id],
                onStateChange: this._getHandleSectionStateChange(e.id),
              },
              s
            )
            n.push(o)
          }
          return (
            (!e.mayOmitSeparator || e.items.length > 1) &&
              (n.unshift(i.a.createElement(w.a, { key: 'begin-' + e.name })),
              n.push(i.a.createElement(w.a, { key: 'end-' + e.name }))),
            n
          )
        }
        _handleChangeFavorites(e) {
          this.setState({ lastNotQuicked: void 0, favorites: e })
        }
        _handleChangeCustoms(e) {
          this.setState({ customs: e })
        }
        _handleChangeMenuViewState(e) {
          this.setState({ menuViewState: e }, () => {
            this._menu.current && this._menu.current.update()
          })
        }
        _renderPopupMenuItem(e, t) {
          const { isFavoritingAllowed: a } = this.props,
            { activeInterval: n, lastAddedInterval: s } = this.state,
            o = e === n,
            l = Object(ue.isAvailable)(e),
            r = this._isIntervalFavorite(e),
            c = this._isIntervalDefault(e),
            h = Object(ue.getTranslatedResolutionModel)(e)
          return i.a.createElement(ke, {
            key: e,
            isSmallTablet: t,
            interval: e,
            hint: h.hint,
            isSignaling: s === e,
            isFavoritingAllowed: a,
            isDisabled: !l,
            isFavorite: r,
            isRemovable: !c,
            isActive: o,
            onClick: this._handleSelectInterval,
            onClickRemove: this._handleRemoveInterval,
            onClickFavorite: this._handleClickFavorite,
            'data-value': e,
          })
        }
        _isIntervalDefault(e) {
          return this._defaultIntervals.includes(e)
        }
        _isIntervalFavorite(e) {
          return this.state.favorites.includes(e)
        }
        _getQuicks(e) {
          return this.props.isShownQuicks && 'small' !== this.props.displayMode
            ? void 0 === e
              ? this.state.favorites
              : e
            : []
        }
      }
      We.contextType = Fe
      var De = a('sbT4'),
        Pe = a('lAXe')
      const Ve = { hint: window.t('Open chart in popup') },
        Ue = Object(O.b)()
      class Ke extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidgetCollection: e, windowMessageService: t, isFundamental: a } = this.context,
                n = e.activeChartWidget.value()
              n.withModel(null, () => {
                t.post(parent, 'openChartInPopup', {
                  symbol: n.model().mainSeries().actualSymbol(),
                  interval: n.model().mainSeries().interval(),
                  fundamental: a,
                })
              })
            }),
            Object(O.c)(t, {
              isFundamental: o.any,
              chartWidgetCollection: o.any.isRequired,
              windowMessageService: o.any.isRequired,
            })
        }
        render() {
          const { className: e } = this.props
          return s.createElement(P.a, {
            className: v(e, De.button),
            icon: Pe,
            onClick: this._handleClick,
            title: Ve.hint,
          })
        }
      }
      Ke.contextType = Ue
      var Be = a('uafl')
      const Ge = { hint: window.t('Chart Properties') },
        Xe = Object(O.b)()
      class qe extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidgetCollection: e } = this.context,
                t = e.activeChartWidget.value()
              Object(z.trackEvent)('GUI', 'Chart Header Toolbar', 'chart properties'), t.showGeneralChartProperties()
            }),
            Object(O.c)(t, { chartWidgetCollection: o.any.isRequired })
        }
        render() {
          return s.createElement(
            P.a,
            Object.assign({}, this.props, { icon: Be, title: Ge.hint, onClick: this._handleClick })
          )
        }
      }
      qe.contextType = Xe
      var Qe = a('lxNp'),
        Je = (a('bSeV'), a('//lZ')),
        Ye = a('9uLv'),
        Ze = a('nrMg')
      const $e = 'M21.5 21.5h-14a5 5 0 1 1 .42-9.983 7.5 7.5 0 0 1 14.57 2.106 4.002 4.002 0 0 1-.99 7.877z',
        et = 13.08991081237793,
        tt = {
          strokeDashOffset: 49.242997817993164,
          strokeDash: 49.866326904296876,
          strokeGap: et,
          strokeDashCheck: 0,
        },
        at = {
          strokeDashOffset: 62.956237716674806,
          strokeGap: 0,
          strokeDash: 62.956237716674806,
          strokeDashCheck: 200,
        }
      class nt extends s.PureComponent {
        constructor(e) {
          super(e), (this.state = tt)
        }
        componentDidMount() {
          'saved' === this.props.state ? this.setState(at) : this._goToNextState(this.props.state)
        }
        componentWillUnmount() {
          this._currentAnimation = void 0
        }
        componentWillReceiveProps(e) {
          this.props.state !== e.state && this._goToNextState(e.state)
        }
        render() {
          const { strokeDashOffset: e, strokeDash: t, strokeGap: a, strokeDashCheck: n } = this.state,
            { className: i, size: o, onClick: l, state: r, isHovered: c = !1 } = this.props,
            h = v(Ze.container, i, c && Ze.hovered, {
              [Ze.unsaved]: 'unsaved' === r,
              [Ze.saving]: 'saving' === r,
              [Ze.saved]: 'saved' === r,
            })
          return s.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              className: h,
              version: '1.1',
              width: o,
              height: o,
              viewBox: '0 0 28 28',
              onClick: l,
            },
            s.createElement(
              'g',
              { fill: 'none' },
              s.createElement('path', {
                className: Ze.dottedCloud,
                stroke: 'currentColor',
                strokeDasharray: '3.5,2.5',
                d: $e,
              }),
              s.createElement('path', {
                className: Ze.spinningCloud,
                stroke: 'currentColor',
                strokeDasharray: `${t} ${a}`,
                strokeDashoffset: e,
                d: $e,
              }),
              s.createElement('path', { className: Ze.arrowGap, d: 'M11 20h6v5h-6z' }),
              s.createElement(
                'g',
                { className: Ze.arrow, stroke: 'currentColor' },
                s.createElement('path', { strokeLinecap: 'square', d: 'M14.5 14.5v10' }),
                s.createElement('path', { d: 'M11 17l3.5-3.5L18 17' })
              ),
              s.createElement(
                'g',
                { className: Ze.check, stroke: 'currentColor' },
                s.createElement('path', { strokeDasharray: `${n}% ${200 - n}%`, d: 'M10 15l2.5 2.5L18 12' })
              )
            )
          )
        }
        _goToNextState(e) {
          switch (e) {
            case 'unsaved':
              this.setState(tt)
              break
            case 'saving':
              'unsaved' !== this.props.state && this.setState(tt),
                (this._currentAnimation = Promise.resolve(this._currentAnimation).then(() =>
                  this._createSpinAnimationWhile(() => 'saving' === this.props.state)
                ))
              break
            case 'saved':
              this._currentAnimation = Promise.resolve(this._currentAnimation)
                .then(this._createFillGapAnimation.bind(this))
                .then(this._createCheckAnimation.bind(this))
          }
        }
        _createSpinAnimationWhile(e) {
          return this._createSpinAnimation().then(() => (e() ? this._createSpinAnimationWhile(e) : Promise.resolve()))
        }
        _createSpinAnimation() {
          return new Promise((e) => {
            Object(Je.doAnimate)({
              onStep: (e, t) => {
                void 0 !== this._currentAnimation && this.setState({ strokeDashOffset: t })
              },
              onComplete: () => e(),
              from: 49.242997817993164,
              to: 111.57590644836426,
              easing: Ye.easingFunc.linear,
              duration: 1e3,
            })
          })
        }
        _createCheckAnimation() {
          return new Promise((e) => {
            Object(Je.doAnimate)({
              onStep: (e, t) => {
                void 0 !== this._currentAnimation && this.setState({ strokeDashCheck: Math.round(t) })
              },
              onComplete: () => e(),
              from: 0,
              to: 200,
              easing: Ye.easingFunc.linear,
              duration: 1e3,
            })
          })
        }
        _createFillGapAnimation() {
          return new Promise((e) => {
            Object(Je.doAnimate)({
              onStep: (e, t) => {
                void 0 !== this._currentAnimation &&
                  this.setState({
                    strokeDashOffset: 62.956237716674806 - t,
                    strokeGap: t,
                    strokeDash: 62.956237716674806 - t,
                  })
              },
              onComplete: () => e(),
              from: et,
              to: 0,
              easing: Ye.easingFunc.linear,
              duration: 200,
            })
          })
        }
      }
      var st = a('nPPD'),
        it = a('MB0Y'),
        ot = a('3j+J')
      Object(st.a)(it.a, ot)
      var lt = a('2uTr'),
        rt = a('+KIV'),
        ct = a('RGo6'),
        ht = a('SchQ'),
        dt = (a('OP2o'), a('v1bN'))
      const ut = n.enabled('widget'),
        mt = Object(st.a)(S.a, ht),
        vt = {
          copy: window.t('Copy'),
          makeCopy: window.t('Make a Copy'),
          newChartLayout: window.t('New Chart Layout'),
          loadChartLayout: Object(lt.appendEllipsis)(window.t('Load Chart Layout')),
          rename: Object(lt.appendEllipsis)(window.t('Rename')),
          renameChartLayout: window.t('Rename Chart Layout'),
          saveAs: Object(lt.appendEllipsis)(window.t('Make a Copy')),
          saveChartLayout: window.t('Save'),
          saveChartLayoutLong: window.t('Save all charts for all symbols and intervals on your layout'),
          manageChartLayouts: window.t('Manage Chart Layouts'),
        },
        pt = [],
        bt = Object(X.b)({ keys: ['Ctrl', 'S'], text: '{0} + {1}' })
      class gt extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._toolWidgetMenuRef = s.createRef()),
            (this._handleSaveHoverBegin = () => {
              this.setState({ iconHovered: !0 })
            }),
            (this._handleSaveHoverEnd = () => {
              this.setState({ iconHovered: !1 })
            }),
            (this.state = { iconHovered: !1 })
        }
        render() {
          const {
              id: e,
              isReadOnly: t,
              displayMode: a,
              isProcessing: n,
              title: i,
              chartId: o,
              wasChanges: l,
              onCloneChart: r,
              onSaveChart: c,
              hideMenu: d,
              isTabletSmall: m,
            } = this.props,
            { iconHovered: p } = this.state,
            b = !t && !d
          let S = 'saved'
          return (
            (!l && i) || (S = 'unsaved'),
            n && (S = 'saving'),
            s.createElement(
              g,
              null,
              t
                ? s.createElement(
                    g,
                    null,
                    s.createElement(F, {
                      id: e,
                      displayMode: a,
                      icon: s.createElement(h.a, { icon: rt }),
                      isDisabled: n,
                      onClick: r,
                      text: vt.copy,
                      title: vt.makeCopy,
                      onMouseEnter: this._handleSaveHoverBegin,
                      onMouseLeave: this._handleSaveHoverEnd,
                      collapseWhen: pt,
                    })
                  )
                : s.createElement(
                    g,
                    null,
                    s.createElement(F, {
                      id: e,
                      className: v(ct.button, b && ct.buttonSmallPadding),
                      displayMode: a,
                      icon: s.createElement(nt, { size: 28, state: S, isHovered: p }),
                      isDisabled: (o && !l) || n,
                      onClick: c,
                      text: i || vt.saveChartLayout,
                      title: vt.saveChartLayoutLong,
                      onMouseEnter: this._handleSaveHoverBegin,
                      onMouseLeave: this._handleSaveHoverEnd,
                      theme: mt,
                      collapseWhen: pt,
                      'data-tooltip-hotkey': ut ? '' : bt,
                    }),
                    b &&
                      s.createElement(
                        u.a,
                        {
                          ref: this._toolWidgetMenuRef,
                          className: 'js-save-load-menu-open-button',
                          arrow: !0,
                          isDrawer: m,
                          drawerPosition: 'Bottom',
                          title: vt.manageChartLayouts,
                        },
                        this._renderMenuItems(Boolean(m))
                      )
                  )
            )
          )
        }
        _renderMenuItems(e) {
          const {
              wasChanges: t,
              isProcessing: a,
              chartId: n,
              onSaveChartFromMenu: i,
              onRenameChart: o,
              onSaveAsChart: l,
              onLoadChart: r,
              onNewChart: c,
              isAutoSaveEnabled: h,
              autoSaveId: u,
              sharingId: m,
              onAutoSaveChanged: p,
              isSharingEnabled: b,
              onSharingChanged: g,
            } = this.props,
            S = e ? x.a : dt,
            C = e ? void 0 : 'Ctrl+S',
            f = []
          return (
            f.push(
              s.createElement(d.b, {
                key: 'save',
                isDisabled: Boolean(a || (!t && n)),
                label: vt.saveChartLayout,
                onClick: i,
                shortcut: C,
                labelRowClassName: v(e && ct.popupItemRowTabletSmall),
                theme: S,
              })
            ),
            void 0 !== n &&
              (e || f.push(s.createElement(w.a, { key: 'existing-chart-section-begin' })),
              f.push(
                s.createElement(d.b, {
                  key: 'rename',
                  label: vt.rename,
                  onClick: o,
                  labelRowClassName: v(e && ct.popupItemRowTabletSmall),
                  theme: S,
                }),
                s.createElement(d.b, {
                  key: 'save-as',
                  label: vt.saveAs,
                  onClick: l,
                  labelRowClassName: v(e && ct.popupItemRowTabletSmall),
                  theme: S,
                })
              )),
            f.push(s.createElement(w.a, { key: 'platform-section-begin' })),
            f.push(
              s.createElement(d.b, {
                key: 'load-chart',
                className: 'js-save-load-menu-item-load-chart',
                label: vt.loadChartLayout,
                onClick: r,
                labelRowClassName: v(e && ct.popupItemRowTabletSmall),
                theme: S,
                shortcut: Object(N.t)('Dot', { context: 'hotkey' }),
              })
            ),
            f
          )
        }
      }
      const St = Object(O.b)()
      class Ct extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._syncState = (e) => {
              this.setState(e)
            }),
            (this._onChangeHasChanges = (e) => {
              this.state.wasChanges !== e && this.setState({ wasChanges: e })
            }),
            (this._onChangeAutoSaveEnabled = (e) => {
              0
            }),
            (this._onChangeSharingEnabled = (e) => {
              this.setState({ isSharingEnabled: e })
            }),
            (this._onChangeTitle = (e) => {
              this.setState({ title: e })
            }),
            (this._onChangeId = (e) => {
              this.setState({ id: e })
            }),
            (this._onChartAboutToBeSaved = () => {
              this.setState({ isProcessing: !0 })
            }),
            (this._onChartSaved = () => {
              this.setState({ isProcessing: !1 })
            }),
            (this._handleAutoSaveEnabled = (e) => {
              0
            }),
            (this._handleSharingEnabled = (e) => {
              0
            }),
            (this._handleClickSave = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(), this._trackEvent('Save click')
            }),
            (this._handleClickSaveFromMenu = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(), this._trackEvent('Save From Menu')
            }),
            (this._handleClickClone = () => {
              this.context.saveChartService.cloneChart()
            }),
            (this._handleClickSaveAs = () => {
              this.context.saveChartService.saveChartAs(), this._trackEvent('Make a copy')
            }),
            (this._handleClickNew = () => {
              this._trackEvent('New chart layout')
            }),
            (this._handleClickLoad = () => {
              this.context.loadChartService.showLoadDialog(), this._trackEvent('Load chart layout')
            }),
            (this._handleHotkey = () => {
              this.context.loadChartService.showLoadDialog()
            }),
            (this._handleClickRename = () => {
              this.context.saveChartService.renameChart(), this._trackEvent('Rename')
            }),
            Object(O.c)(t, {
              chartWidgetCollection: o.any.isRequired,
              chartChangesWatcher: o.any.isRequired,
              saveChartService: o.any.isRequired,
              sharingChartService: o.any,
              loadChartService: o.any.isRequired,
            })
          const { chartWidgetCollection: a, chartChangesWatcher: n, saveChartService: s, sharingChartService: i } = t
          this.state = {
            isAuthenticated: window.is_authenticated,
            isProcessing: !1,
            id: a.metaInfo.id.value(),
            title: a.metaInfo.name.value(),
            wasChanges: n.hasChanges(),
            iconHovered: !1,
          }
        }
        componentDidMount() {
          const { chartSaver: e, isFake: t, stateSyncEmitter: a } = this.props,
            {
              chartWidgetCollection: n,
              chartChangesWatcher: s,
              saveChartService: i,
              sharingChartService: o,
            } = this.context
          t
            ? a.on('change', this._syncState)
            : (s.getOnChange().subscribe(this, this._onChangeHasChanges),
              n.metaInfo.name.subscribe(this._onChangeTitle),
              n.metaInfo.id.subscribe(this._onChangeId),
              (this._hotkeys = Object(Qe.createGroup)({ desc: 'Save/Load' })),
              this._hotkeys.add({ desc: window.t('Load Chart Layout'), handler: this._handleHotkey, hotkey: 190 }),
              e.chartSaved().subscribe(this, this._onChartSaved),
              e.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.subscribe(this, this._onLoginStateChange))
        }
        componentDidUpdate(e, t) {
          this.props.isFake || (t !== this.state && this.props.stateSyncEmitter.emit('change', this.state))
        }
        componentWillUnmount() {
          const { chartSaver: e, isFake: t, stateSyncEmitter: a } = this.props,
            {
              chartWidgetCollection: n,
              chartChangesWatcher: s,
              saveChartService: i,
              sharingChartService: o,
            } = this.context
          t
            ? a.off('change', this._syncState)
            : (s.getOnChange().unsubscribe(this, this._onChangeHasChanges),
              n.metaInfo.name.unsubscribe(this._onChangeTitle),
              n.metaInfo.id.unsubscribe(this._onChangeId),
              Object(G.ensureDefined)(this._hotkeys).destroy(),
              e.chartSaved().unsubscribe(this, this._onChartSaved),
              e.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.unsubscribe(this, this._onLoginStateChange))
        }
        render() {
          const { isReadOnly: e, displayMode: t, id: a, isFake: n } = this.props,
            {
              isProcessing: i,
              isAuthenticated: o,
              title: l,
              id: r,
              wasChanges: c,
              isAutoSaveEnabled: h,
              isSharingEnabled: d,
            } = this.state,
            u = {
              displayMode: t,
              isReadOnly: e,
              isAuthenticated: o,
              isProcessing: i,
              wasChanges: c,
              title: l,
              id: a,
              chartId: null !== r ? r : void 0,
              onCloneChart: this._handleClickClone,
              onSaveChart: this._handleClickSave,
              onSaveChartFromMenu: this._handleClickSaveFromMenu,
              onRenameChart: this._handleClickRename,
              onSaveAsChart: this._handleClickSaveAs,
              onLoadChart: this._handleClickLoad,
            }
          return s.createElement(y.a, { rule: k.a.TabletSmall }, (e) =>
            s.createElement(gt, Object.assign({}, u, { isTabletSmall: e }))
          )
        }
        _onLoginStateChange() {
          this.setState({ isAuthenticated: window.is_authenticated })
        }
        _trackEvent(e) {
          0
        }
      }
      Ct.contextType = St
      var ft = a('FQhm')
      const _t = { takeSnapshot: window.t('Take a snapshot') },
        wt = Object(X.b)({ keys: ['Alt', 'S'], text: '{0} + {1}' }),
        yt = Object(O.b)()
      var kt = a('koZ+')
      const xt =
        ((Ot = (e) =>
          s.createElement(S.b, {
            id: e.id,
            className: e.className,
            isDisabled: e.isProcessing,
            onClick: e.onClick,
            title: e.tooltip,
            'data-tooltip-hotkey': e.hotkey,
            icon: kt,
          })),
        ((Et = class extends s.PureComponent {
          constructor(e, t) {
            super(e, t),
              (this._handleClick = (e) => {
                if (!n.enabled('show_dialog_on_snapshot_ready')) {
                  if (this.state.isProcessing) return
                  this.setState({ isProcessing: !0 }),
                    ft.subscribe('onScreenshotReady', () => this.setState({ isProcessing: !1 }), null, !0)
                }
                this.context.chartWidgetCollection.takeScreenshot()
              }),
              Object(O.c)(t, { chartWidgetCollection: o.any.isRequired }),
              (this.state = { isProcessing: !1 })
          }
          render() {
            const { className: e, id: t } = this.props,
              { isProcessing: a } = this.state
            return s.createElement(Ot, {
              id: t,
              className: e,
              isProcessing: a,
              onClick: this._handleClick,
              tooltip: _t.takeSnapshot,
              hotkey: wt,
            })
          }
        }).contextType = yt),
        Et)
      var Ot,
        Et,
        Mt = a('/3z9'),
        Tt = a('FA0h'),
        It = a('h24c'),
        At = a('os48')
      function Nt(e) {
        const { className: t, children: a } = e
        return i.a.createElement('div', { className: p()(At.footer, t) }, a)
      }
      var Rt = a('QOH/')
      const jt = Object(st.a)(S.a, Rt)
      class Ft extends i.a.PureComponent {
        constructor(e) {
          super(e),
            (this._promise = null),
            (this._openSymbolSearchDialog = (e) => {
              if (Object(Mt.modifiersFromEvent)(e) === Mt.Modifiers.Alt)
                return void navigator.clipboard.writeText(this.state.symbol)
              const t = (this._promise = Object(Tt.a)().then((e) => {
                t === this._promise &&
                  (e.showDefaultSearchDialog({
                    defaultValue: this._isSpread(this.state.symbol) ? this.state.symbol : this.state.shortName,
                    showSpreadActions: Object(It.canShowSpreadActions)() && this.props.isActionsVisible,
                    source: 'searchBar',
                    footer: Modernizr.mobiletouch
                      ? void 0
                      : i.a.createElement(
                          Nt,
                          null,
                          Object(N.t)('Simply start typing while on the chart to pull up this search box')
                        ),
                  }),
                  Object(z.trackEvent)('GUI', 'SS', 'main search'))
              }))
            }),
            (this._isSpread = (e) => !1),
            (this._onSymbolChanged = () => {
              this.setState({ symbol: de.linking.symbol.value(), shortName: zt() })
            }),
            (this.state = { symbol: de.linking.symbol.value(), shortName: zt() })
        }
        componentDidMount() {
          de.linking.seriesShortSymbol.subscribe(this._onSymbolChanged), Object(Tt.a)()
        }
        componentWillUnmount() {
          de.linking.seriesShortSymbol.unsubscribe(this._onSymbolChanged), (this._promise = null)
        }
        render() {
          const { id: e, className: t } = this.props
          return i.a.createElement(S.b, {
            id: e,
            className: v(t, n.enabled('uppercase_instrument_names') && Rt.uppercase),
            theme: jt,
            text: this.state.shortName,
            title: Object(N.t)('Symbol Search'),
            onClick: this._openSymbolSearchDialog,
          })
        }
      }
      function zt() {
        return de.linking.seriesShortSymbol.value() || de.linking.symbol.value() || ''
      }
      var Ht = a('9NBK')
      class Lt extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleClick = (e) => {
              e.stopPropagation()
              const { onApply: t, item: a } = this.props
              t(a)
            })
        }
        render() {
          const { className: e, item: t } = this.props
          return s.createElement(
            'div',
            { className: v(e, Ht.item, 'apply-common-tooltip'), onClick: this._handleClick, title: t.name },
            s.createElement('div', { className: Ht.round }, t.name.length > 0 ? t.name[0].toUpperCase() : ' ')
          )
        }
      }
      var Wt = a('8RO/'),
        Dt = a('s0T6')
      function Pt(e) {
        return s.createElement('div', { className: v(Dt.description, e.className) }, e.children)
      }
      var Vt = a('fESK')
      const Ut = Object(st.a)(d.a, { labelRow: Vt.labelRow, toolbox: Vt.toolbox, item: Vt.titleItem }),
        Kt = Object(st.a)(d.a, { labelRow: Vt.labelRow, toolbox: Vt.toolbox, item: Vt.titleItemTabletSmall }),
        Bt = Object(st.a)(d.a, { item: Vt.item }),
        Gt = Object(st.a)(d.a, { item: Vt.itemTabletSmall })
      function Xt(e) {
        const {
            item: t,
            onApply: a,
            onRemove: n,
            onFavor: o,
            favorite: l,
            isFavoritingAllowed: r,
            isTabletSmall: h,
          } = e,
          [u, m] = Object(we.b)(),
          v = t.meta_info,
          b = v ? Object(Wt.b)(v.indicators) : void 0,
          g = h ? Kt : Ut,
          S = h ? Gt : Bt,
          C = Object(s.useCallback)(() => a(t), [a, t]),
          f = Object(s.useCallback)(() => n(t), [n, t]),
          _ = Object(s.useCallback)(() => {
            o && o(t)
          }, [o, t])
        return i.a.createElement(
          'div',
          Object.assign({}, m, {
            className: Vt.wrap,
            'data-name': t.name,
            'data-id': t.id,
            'data-is-default': Boolean(t.is_default),
          }),
          i.a.createElement(d.b, {
            theme: g,
            label: t.name,
            labelRowClassName: p()(h && Vt.itemLabelTabletSmall),
            isHovered: u,
            showToolboxOnHover: !l && !u,
            onClick: C,
            toolbox: i.a.createElement(
              i.a.Fragment,
              null,
              !t.is_default && i.a.createElement(_e.a, { key: 'remove', hidden: !Modernizr.touch && !u, onClick: f }),
              Boolean(o) && r && i.a.createElement(c.a, { key: 'favorite', isFilled: Boolean(l), onClick: _ })
            ),
          }),
          b &&
            i.a.createElement(d.b, {
              theme: S,
              label: i.a.createElement(Pt, { className: p()(Vt.description, h && Vt.descriptionTabletSmall) }, b),
              onClick: C,
              isHovered: u,
            })
        )
      }
      var qt = a('jKyl'),
        Qt = a('23di')
      const Jt = Object(st.a)(d.a, Qt),
        Yt = { text: Object(lt.appendEllipsis)(window.t('Save Indicator template')) }
      function Zt(e) {
        const { onClick: t, isTabletSmall: a } = e
        return i.a.createElement(d.b, {
          theme: Jt,
          className: Qt.wrap,
          label: i.a.createElement(
            'div',
            { className: Qt.titleWrap },
            i.a.createElement(
              'div',
              { className: p()(Qt.title, a && Qt.titleTabletSmall) },
              i.a.createElement(h.a, { className: Qt.icon, icon: qt }),
              i.a.createElement('div', { className: Qt.text }, Yt.text)
            )
          ),
          onClick: t,
        })
      }
      var $t = a('gla1'),
        ea = a('PN6A')
      const ta = i.a.createContext(null)
      var aa = a('Sl3V')
      function na(e) {
        const {
            templates: t,
            favorites: a,
            onTemplateSave: n,
            onTemplateRemove: o,
            onTemplateSelect: l,
            onTemplateFavorite: r,
            isTabletSmall: c,
            isLoading: h,
          } = e,
          d = Object(s.useMemo)(() => t.filter((e) => e.is_default), [t]),
          u = Object(s.useMemo)(() => t.filter((e) => !e.is_default), [t]),
          m = Object(s.useMemo)(() => new Set(a.map((e) => e.name)), [a]),
          v = Object(s.useContext)(ta),
          b = Object(s.useContext)(ea.a),
          g = Object($t.a)()
        Object(s.useEffect)(() => {
          if (null !== v) {
            const e = {}
            return (
              v.getOnChange().subscribe(e, () => {
                g(), b && b.update()
              }),
              () => v.getOnChange().unsubscribeAll(e)
            )
          }
          return () => {}
        }, [])
        const S = (e) =>
          i.a.createElement(Xt, {
            key: e.name,
            item: e,
            isFavoritingAllowed: Boolean(r),
            favorite: m.has(e.name),
            onApply: l,
            onFavor: r,
            onRemove: o,
            isTabletSmall: c,
          })
        return i.a.createElement(
          'div',
          { className: p()(aa.menu, c && aa.menuSmallTablet) },
          i.a.createElement(Zt, { onClick: n, isTabletSmall: c }),
          h && i.a.createElement(i.a.Fragment, null, i.a.createElement(w.a, null), i.a.createElement(te, null)),
          !h &&
            (c
              ? i.a.createElement(sa, { defaults: d, customs: u, render: S })
              : i.a.createElement(ia, { defaults: d, customs: u, render: S, state: v }))
        )
      }
      function sa(e) {
        const { defaults: t, customs: a, render: n } = e
        return i.a.createElement(
          i.a.Fragment,
          null,
          a.length > 0 &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(w.a, null),
              i.a.createElement(ne, { className: aa.menuItemHeaderTabletSmall }, Object(N.t)('My templates')),
              a.map(n)
            ),
          t.length > 0 &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(w.a, null),
              i.a.createElement(ne, { className: aa.menuItemHeaderTabletSmall }, Object(N.t)('Default templates')),
              t.map(n)
            )
        )
      }
      function ia(e) {
        const { defaults: t, customs: a, render: n, state: s } = e
        return i.a.createElement(
          i.a.Fragment,
          null,
          a.length > 0 &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(w.a, null),
              i.a.createElement(ne, { className: aa.menuItemHeader }, Object(N.t)('My templates')),
              a.map(n)
            ),
          a.length > 0 &&
            t.length > 0 &&
            s &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(w.a, null),
              i.a.createElement(
                Ee.a,
                {
                  summary: Object(N.t)('Default templates'),
                  open: !s.get().defaultsCollapsed,
                  onStateChange: (e) => s.set({ defaultsCollapsed: !e }),
                },
                t.map(n)
              )
            ),
          0 === a.length &&
            t.length > 0 &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(w.a, null),
              i.a.createElement(ne, { className: aa.menuItemHeader }, Object(N.t)('Default templates')),
              t.map(n)
            )
        )
      }
      var oa = a('hY0g'),
        la = a.n(oa)
      class ra {
        constructor(e, t) {
          var a, s
          ;(this._isFavoriteEnabled = n.enabled('items_favoriting')),
            (this.handleFavorTemplate = (e) => {
              if (!this._isFavoriteEnabled) return
              const { name: t } = e
              this._isTemplateFavorite(t) ? this._removeFavoriteTemplate(t) : this._addFavoriteTemplate(t)
            }),
            (this.handleDropdownOpen = () => {
              this._setState({ isLoading: !0 }),
                this._studyTemplates.invalidate(),
                this._studyTemplates.refreshStudyTemplateList(() => this._setState({ isLoading: !1 }))
            }),
            (this.handleApplyTemplate = (e) => {
              this._studyTemplates.applyTemplate(e.name)
            }),
            (this.handleRemoveTemplate = (e) => {
              this._studyTemplates.deleteStudyTemplate(e.name)
            }),
            (this.handleSaveTemplate = () => {
              this._studyTemplates.showSaveAsDialog()
            }),
            (this._studyTemplates = e),
            (this._favoriteStudyTemplatesService = t)
          const i = (null === (a = this._favoriteStudyTemplatesService) || void 0 === a ? void 0 : a.get()) || [],
            o = this._studyTemplates.list()
          ;(this._state = new la.a({ isLoading: !1, studyTemplatesList: o, favorites: i })),
            this._studyTemplates.getOnChange().subscribe(this, this._handleTemplatesChange),
            this._studyTemplates.refreshStudyTemplateList(),
            this._isFavoriteEnabled &&
              (null === (s = this._favoriteStudyTemplatesService) ||
                void 0 === s ||
                s.getOnChange().subscribe(this, this._handleFavoritesChange))
        }
        destroy() {
          var e
          this._studyTemplates.getOnChange().unsubscribe(this, this._handleTemplatesChange),
            this._isFavoriteEnabled &&
              (null === (e = this._favoriteStudyTemplatesService) ||
                void 0 === e ||
                e.getOnChange().unsubscribe(this, this._handleFavoritesChange))
        }
        state() {
          return this._state.readonly()
        }
        _setState(e) {
          this._state.setValue(Object.assign(Object.assign({}, this._state.value()), e))
        }
        _handleTemplatesChange() {
          this._setState({ studyTemplatesList: this._studyTemplates.list() })
        }
        _handleFavoritesChange(e) {
          this._isFavoriteEnabled && this._setState({ favorites: e })
        }
        _removeFavoriteTemplate(e) {
          var t
          const { favorites: a } = this._state.value()
          null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set(a.filter((t) => t !== e))
        }
        _addFavoriteTemplate(e) {
          var t
          const { favorites: a } = this._state.value()
          null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set([...a, e])
        }
        _isTemplateFavorite(e) {
          const { favorites: t } = this._state.value()
          return t.includes(e)
        }
      }
      var ca = a('zgWb'),
        ha = a('yGrx')
      const da = { title: Object(N.t)('Templates'), tooltip: Object(N.t)('Indicator Templates') },
        ua = Object(O.b)()
      class ma extends i.a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState(Object.assign(Object.assign({}, e), { isActive: this.state.isActive }))
            }),
            (this._handleApplyTemplate = (e) => {
              this._handleClose(), this._model.handleApplyTemplate(e)
            }),
            (this._handleRemoveTemplate = (e) => {
              this._handleClose(), this._model.handleRemoveTemplate(e)
            }),
            (this._handleClose = () => {
              this._handleToggleDropdown(!1)
            }),
            (this._handleToggleDropdown = (e) => {
              const { isActive: t } = this.state,
                a = 'boolean' == typeof e ? e : !t
              this.setState({ isActive: a })
            }),
            Object(O.c)(t, {
              favoriteStudyTemplatesService: o.any,
              studyTemplates: o.any.isRequired,
              templatesMenuViewStateService: o.any,
            })
          const { favoriteStudyTemplatesService: a, studyTemplates: n } = t
          ;(this._model = new ra(n, a)),
            (this.state = Object.assign(Object.assign({}, this._model.state().value()), { isActive: !1 }))
        }
        componentDidMount() {
          this._model.state().subscribe(this._updateState)
        }
        componentWillUnmount() {
          this._model.state().unsubscribe(this._updateState), this._model.destroy()
        }
        render() {
          const { studyTemplatesList: e, favorites: t } = this.state,
            { isShownQuicks: a, className: n, displayMode: s, id: o } = this.props
          return i.a.createElement(
            ta.Provider,
            { value: this.context.templatesMenuViewStateService || null },
            i.a.createElement(va, {
              id: o,
              className: n,
              mode: s,
              templates: e,
              favorites: t,
              onMenuOpen: this._model.handleDropdownOpen,
              onTemplateFavorite: a ? this._model.handleFavorTemplate : void 0,
              onTemplateSelect: this._handleApplyTemplate,
              onTemplateRemove: this._handleRemoveTemplate,
              onTemplateSave: this._model.handleSaveTemplate,
            })
          )
        }
      }
      function va(e) {
        const {
            id: t,
            className: a,
            mode: n,
            favorites: s,
            templates: o,
            isMenuOpen: l,
            onTemplateSelect: r,
            onTemplateSave: c,
            onTemplateFavorite: h,
            onTemplateRemove: d,
          } = e,
          m = p()(a, ha.wrap, { [ha.full]: 'full' === n, [ha.medium]: 'medium' === n }),
          v = o.filter((e) => s.includes(e.name)),
          b = 'small' !== n && h && v.length > 0
        return i.a.createElement(
          g,
          { id: t, className: m },
          i.a.createElement(y.a, { rule: k.a.TabletSmall }, (t) =>
            i.a.createElement(
              u.a,
              {
                onOpen: e.onMenuOpen,
                isDrawer: t,
                drawerPosition: 'Bottom',
                arrow: !1,
                content: i.a.createElement(F, {
                  className: p()(b && ha.buttonWithFavorites),
                  displayMode: n,
                  isOpened: l,
                  icon: ca,
                  text: da.title,
                  title: da.tooltip,
                  forceInteractive: !0,
                }),
              },
              i.a.createElement(na, {
                onTemplateSave: c,
                onTemplateSelect: r,
                onTemplateRemove: d,
                onTemplateFavorite: h,
                templates: o,
                favorites: v,
                isTabletSmall: t,
              })
            )
          ),
          b && i.a.createElement(pa, { favorites: v, onTemplateSelect: r })
        )
      }
      function pa(e) {
        return i.a.createElement(
          i.a.Fragment,
          null,
          e.favorites.map((t, a, n) =>
            i.a.createElement(Lt, {
              key: t.name,
              item: t,
              onApply: e.onTemplateSelect,
              className: p()({ [ha.first]: 0 === a, [ha.last]: a === n.length - 1 }),
            })
          )
        )
      }
      ma.contextType = ua
      a('HbRj')
      var ba = a('S+Ii'),
        ga = a('bQ7Y'),
        Sa = a('wnRL'),
        Ca = a('2xRE')
      const fa = { undoHint: window.t('Undo {0}'), redoHint: window.t('Redo {0}') },
        _a = {
          undoHotKey: Object(X.b)({ keys: ['Ctrl', 'Z'], text: '{0} + {1}' }),
          redoHotKey: Object(X.b)({ keys: ['Ctrl', 'Y'], text: '{0} + {1}' }),
        },
        wa = Object(st.b)(ga, ba, { buttonUndo: 'button', buttonRedo: 'button' }),
        ya = Object.assign(Object.assign({}, ga), { button: wa.buttonUndo }),
        ka = Object.assign(Object.assign({}, ga), { button: wa.buttonRedo }),
        xa = Object(O.b)()
      class Oa extends s.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._batched = null),
            (this._handleClickUndo = () => {
              Object(z.trackEvent)('GUI', 'Undo')
              const { chartWidgetCollection: e } = this.context
              e.undoHistory.undo()
            }),
            (this._handleClickRedo = () => {
              Object(z.trackEvent)('GUI', 'Redo')
              const { chartWidgetCollection: e } = this.context
              e.undoHistory.redo()
            }),
            Object(O.c)(t, { chartWidgetCollection: o.any.isRequired }),
            (this.state = this._getStateFromUndoHistory())
        }
        componentDidMount() {
          const { chartWidgetCollection: e } = this.context
          e.undoHistory.redoStack().onChange().subscribe(this, this._onChangeStack),
            e.undoHistory.undoStack().onChange().subscribe(this, this._onChangeStack)
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e } = this.context
          e.undoHistory.redoStack().onChange().unsubscribe(this, this._onChangeStack),
            e.undoHistory.undoStack().onChange().unsubscribe(this, this._onChangeStack),
            (this._batched = null)
        }
        render() {
          const { id: e } = this.props,
            { isEnabledRedo: t, isEnabledUndo: a, redoStack: n, undoStack: i } = this.state
          return s.createElement(
            g,
            { id: e },
            s.createElement(S.b, {
              icon: Sa,
              isDisabled: !a,
              onClick: this._handleClickUndo,
              title: a ? fa.undoHint.format(i) : void 0,
              'data-tooltip-hotkey': a ? _a.undoHotKey : void 0,
              theme: ya,
            }),
            s.createElement(S.b, {
              icon: Ca,
              isDisabled: !t,
              onClick: this._handleClickRedo,
              title: t ? fa.redoHint.format(n) : void 0,
              'data-tooltip-hotkey': t ? _a.redoHotKey : void 0,
              theme: ka,
            })
          )
        }
        _onChangeStack() {
          null === this._batched &&
            (this._batched = Promise.resolve().then(() => {
              if (null === this._batched) return
              this._batched = null
              const e = this._getStateFromUndoHistory()
              this.setState(e)
            }))
        }
        _getStateFromUndoHistory() {
          const { chartWidgetCollection: e } = this.context,
            t = e.undoHistory.undoStack(),
            a = e.undoHistory.redoStack(),
            n = a.head(),
            s = t.head()
          return {
            isEnabledRedo: !a.isEmpty(),
            isEnabledUndo: !t.isEmpty(),
            redoStack: n ? n.text() : '',
            undoStack: s ? s.text() : '',
          }
        }
      }
      Oa.contextType = xa
      var Ea = a('i8i4'),
        Ma = a('cvc5')
      class Ta extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._ref = null),
            (this._update = () => {
              this.forceUpdate()
            }),
            (this._setRef = (e) => {
              this._ref = e
            }),
            (this._handleMeasure = ({ width: e }) => {
              this.props.width.setValue(e)
            })
        }
        componentDidMount() {
          const { element: e, isFake: t, width: a } = this.props
          if (t) a.subscribe(this._update)
          else {
            const t = Object(G.ensureNotNull)(this._ref)
            Ea.findDOMNode(t).appendChild(e)
          }
        }
        componentWillUnmount() {
          const { width: e, isFake: t } = this.props
          t && e.unsubscribe(this._update)
        }
        render() {
          const { isFake: e = !1, width: t } = this.props
          return s.createElement(
            Ma,
            { shouldMeasure: !e, whitelist: ['width'], onMeasure: this._handleMeasure },
            s.createElement(g, { ref: this._setRef, style: e ? { width: t.value() } : void 0 })
          )
        }
      }
      function Ia() {
        return {
          Bars: n.enabled('header_chart_type') ? A : void 0,
          Compare: n.enabled('header_compare') ? D : void 0,
          Custom: Ta,
          Fullscreen: n.enabled('header_fullscreen_button') ? B : void 0,
          Indicators: n.enabled('header_indicators') ? ce : void 0,
          Intervals: n.enabled('header_resolutions') ? We : void 0,
          OpenPopup: Ke,
          Properties: n.enabled('header_settings') && n.enabled('show_chart_property_page') ? qe : void 0,
          SaveLoad: n.enabled('header_saveload') ? Ct : void 0,
          Screenshot: n.enabled('header_screenshot') ? xt : void 0,
          SymbolSearch: n.enabled('header_symbol_search') ? Ft : void 0,
          Templates: n.enabled('study_templates') ? ma : void 0,
          UndoRedo: n.enabled('header_undo_redo') ? Oa : void 0,
          Layout: void 0,
        }
      }
      a.d(t, 'getRestrictedToolSet', function () {
        return Ia
      })
    },
    nPPD: function (e, t, a) {
      'use strict'
      function n(e, t, a = {}) {
        const n = Object.assign({}, t)
        for (const s of Object.keys(t)) {
          const i = a[s] || s
          i in e && (n[s] = [e[i], t[s]].join(' '))
        }
        return n
      }
      function s(e, t, a = {}) {
        return Object.assign({}, e, n(e, t, a))
      }
      a.d(t, 'b', function () {
        return n
      }),
        a.d(t, 'a', function () {
          return s
        })
    },
    nrMg: function (e, t, a) {
      e.exports = {
        dottedCloud: 'dottedCloud-3RnJMRVd',
        check: 'check-3RnJMRVd',
        spinningCloud: 'spinningCloud-3RnJMRVd',
        arrow: 'arrow-3RnJMRVd',
        arrowGap: 'arrowGap-3RnJMRVd',
        container: 'container-3RnJMRVd',
        unsaved: 'unsaved-3RnJMRVd',
        hovered: 'hovered-3RnJMRVd',
        saving: 'saving-3RnJMRVd',
        saved: 'saved-3RnJMRVd',
      }
    },
    os48: function (e, t, a) {
      e.exports = { footer: 'footer-3r-9t_XG' }
    },
    'p0W+': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('mrSG'),
        s = a('q1tI'),
        i = a('TSYQ'),
        o = a('tU7i'),
        l = a('EvtC')
      const r = s.forwardRef((e, t) => {
        const { className: a } = e,
          r = Object(n.a)(e, ['className'])
        return s.createElement(o.b, Object.assign({}, r, { ref: t, className: i(a, l.button) }))
      })
    },
    pqsj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>'
    },
    s0T6: function (e, t, a) {
      e.exports = { description: 'description-2U1ZnBls' }
    },
    sHKj: function (e, t, a) {
      e.exports = { title: 'title-2VoDfDWK' }
    },
    sbT4: function (e, t, a) {
      e.exports = { button: 'button-2twPcS_V' }
    },
    t2Sj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>'
    },
    uPhS: function (e, t, a) {
      e.exports = { smallWidthMenuItem: 'smallWidthMenuItem-2BP6_jxN' }
    },
    uafl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>'
    },
    uhCe: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a('ASyk')
      const s = {
        SmallHeight: n['small-height-breakpoint'],
        TabletSmall: n['tablet-small-breakpoint'],
        TabletNormal: n['tablet-normal-breakpoint'],
      }
    },
    wnRL: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>'
    },
    yGrx: function (e, t, a) {
      e.exports = {
        wrap: 'wrap-13GsG5XA',
        full: 'full-13GsG5XA',
        first: 'first-13GsG5XA',
        last: 'last-13GsG5XA',
        medium: 'medium-13GsG5XA',
        buttonWithFavorites: 'buttonWithFavorites-13GsG5XA',
      }
    },
    zgWb: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M6 12l3.88-4.31a1 1 0 0 1 1.35-.13l5.07 3.9a1 1 0 0 0 1.32-.08L23 6M6.5 22v-4m4 4v-8m4 8v-6m4 6v-4m4 4v-8"/></svg>'
    },
  },
])
