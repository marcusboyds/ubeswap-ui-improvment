;(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    '20PO': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
    },
    '38fQ': function (e, t, n) {
      e.exports = { separator: 'separator-LcIsiH9i' }
    },
    '6KyJ': function (e, t, n) {
      'use strict'
      var s,
        o = n('q1tI'),
        a = n('TSYQ'),
        r = n('K9GE'),
        i = n('YZ9j')
      n('O7m7')
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'), (e[(e.Appear = 1)] = 'Appear'), (e[(e.Active = 2)] = 'Active')
      })(s || (s = {}))
      class l extends o.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: s.Initial })
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = a(i.item, { [i[t]]: Boolean(t) })
          return o.createElement(
            'span',
            { className: a(i.loader, e, this._getStateClass()) },
            o.createElement('span', { className: n }),
            o.createElement('span', { className: n }),
            o.createElement('span', { className: n })
          )
        }
        componentDidMount() {
          this.setState({ state: s.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: s.Active })
            }, 2 * r.c))
        }
        componentWillUnmount() {
          this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null))
        }
        _getStateClass() {
          switch (this.state.state) {
            case s.Initial:
              return i['loader-initial']
            case s.Appear:
              return i['loader-appear']
            default:
              return ''
          }
        }
      }
      n.d(t, 'a', function () {
        return l
      })
    },
    Gpmm: function (e, t, n) {
      e.exports = { row: 'row-3B5H2q5m', line: 'line-3B5H2q5m', hint: 'hint-3B5H2q5m' }
    },
    IAAr: function (e, t, n) {
      'use strict'
      var s = n('q1tI'),
        o = n('zRdu'),
        a = n('Gpmm')
      function r(e) {
        return s.createElement(
          'tr',
          { className: a.row },
          s.createElement('td', null, s.createElement('div', { className: a.line })),
          s.createElement(
            'td',
            null,
            s.createElement('div', { className: a.line }),
            e.hint ? s.createElement('div', { className: a.hint }, e.hint) : null
          )
        )
      }
      var i = n('ycgn'),
        l = n('TSYQ'),
        c = n('euMy'),
        u = n('hn2c')
      n('EsMY')
      var h = n('L/Ed'),
        m = n('i/MG'),
        d = n('qFKp'),
        p = n('w+Rv')
      class v extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleMouseOver = (e) => {
              ;(function (e) {
                const t = e.sourceCapabilities
                let n = t && t.firesTouchEvents
                return void 0 === n && (n = Modernizr.touch), n
              })(e.nativeEvent) ||
                (this.props.onMouseOver && this.props.onMouseOver())
            }),
            (this._handleClickToolbox = (e) => {
              e.stopPropagation(), this.props.onClickToolbox && this.props.onClickToolbox()
            })
        }
        render() {
          const { hasSubItems: e, shortcutHint: t, hint: n } = this.props
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              'tr',
              {
                className: l(
                  i.item,
                  !this.props.noInteractive && i.interactive,
                  this.props.hovered && i.hovered,
                  this.props.disabled && i.disabled,
                  this.props.active && i.active
                ),
                onClick: this.props.onClick,
                onMouseOver: this._handleMouseOver,
                ref: this.props.reference,
                'data-action-name': this.props.actionName,
              },
              s.createElement('td', { className: l(i.iconCell), 'data-icon-cell': !0 }, this._icon()),
              s.createElement(
                'td',
                null,
                s.createElement(
                  'div',
                  { className: i.content },
                  s.createElement(
                    'span',
                    { className: l(i.label, this.props.checked && i.checked), 'data-label': !0 },
                    this.props.label
                  ),
                  this._toolbox(),
                  e &&
                    s.createElement('span', {
                      className: i.arrowIcon,
                      dangerouslySetInnerHTML: { __html: u },
                      'data-submenu-arrow': !0,
                    }),
                  !e && t && !d.CheckMobile.any() && s.createElement(p.a, { text: t }),
                  !e && !t && n && s.createElement(p.a, { text: n })
                )
              )
            ),
            s.createElement('tr', { className: i.subMenu }, s.createElement('td', null, this.props.children))
          )
        }
        _icon() {
          if (this.props.checkable) {
            if (this.props.checked) {
              const e = !this.props.icon && !this.props.iconChecked,
                t = this.props.iconChecked || this.props.icon || c
              return s.createElement('span', {
                className: l(i.icon, e && i.checkmark),
                dangerouslySetInnerHTML: { __html: t },
                'data-icon-checkmark': e,
              })
            }
            return this.props.icon
              ? s.createElement('span', { className: i.icon, dangerouslySetInnerHTML: { __html: this.props.icon } })
              : s.createElement('span', { className: i.icon })
          }
          return this.props.icon
            ? s.createElement('span', { className: i.icon, dangerouslySetInnerHTML: { __html: this.props.icon } })
            : null
        }
        _toolbox() {
          return this.props.toolbox
            ? s.createElement(
                'span',
                {
                  className: l(i.toolbox, this.props.showToolboxOnHover && i.showToolboxOnHover),
                  onClick: this._handleClickToolbox,
                  'data-toolbox': !0,
                },
                this._renderToolboxContent()
              )
            : null
        }
        _renderToolboxContent() {
          if (this.props.toolbox)
            switch (this.props.toolbox.type) {
              case h.ToolboxType.Delete:
                return s.createElement(m.a, { onClick: this.props.toolbox.action })
            }
          return null
        }
      }
      var f = n('xRqE'),
        b = n('tWVy'),
        S = n('JWMC'),
        _ = n('Ialn')
      var E = n('dxYz'),
        C = n('Eyy1')
      class g extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._itemRef = null),
            (this._menuElementRef = s.createRef()),
            (this._menuRef = null),
            (this._handleClick = (e) => {
              e.isDefaultPrevented() ||
                this.state.disabled ||
                (this._hasSubItems()
                  ? this._showSubMenu()
                  : (this.state.doNotCloseOnClick || Object(b.b)(), this.props.action.execute(), this._trackEvent()))
            }),
            (this._handleClickToolbox = () => {
              Object(b.b)()
            }),
            (this._handleItemMouseOver = () => {
              this._showSubMenu(), this._setCurrentContextValue()
            }),
            (this._handleMenuMouseOver = () => {
              this._setCurrentContextValue()
            }),
            (this._showSubMenu = () => {
              this.props.onShowSubMenu(this.props.action)
            }),
            (this._calcSubMenuPos = (e) =>
              (function (e, t, n = { x: 0, y: 10 }) {
                if (t) {
                  const { left: n, right: s, top: o } = t.getBoundingClientRect(),
                    a = document.documentElement.clientWidth,
                    r = { x: n - e, y: o },
                    i = { x: s, y: o }
                  return Object(_.isRtl)() ? (n <= e ? i : r) : a - s >= e ? i : r
                }
                return n
              })(e, this._itemRef)),
            (this._updateState = (e) => {
              this.setState(e.getState())
            }),
            (this._setItemRef = (e) => {
              this._itemRef = e
            }),
            (this._handleMenuRef = (e) => {
              this._menuRef = e
            }),
            (this.state = Object.assign({}, this.props.action.getState()))
        }
        componentDidMount() {
          var e
          this.props.action.onUpdate().subscribe(this, this._updateState),
            this.state.subItems.length &&
              (this._unsubscribe =
                null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.registerSubmenu(
                      this.props.action.id,
                      (e) =>
                        Object(C.ensureNotNull)(this._itemRef).contains(e) ||
                        (null !== this._menuElementRef.current && this._menuElementRef.current.contains(e))
                    ))
        }
        componentDidUpdate(e, t) {
          t.subItems !== this.state.subItems && null !== this._menuRef && this._menuRef.update()
        }
        componentWillUnmount() {
          this.props.action.onUpdate().unsubscribe(this, this._updateState), this._unsubscribe && this._unsubscribe()
        }
        render() {
          var e
          const t = (null === (e = this.context) || void 0 === e ? void 0 : e.current)
            ? this.context.current === this.props.action.id
            : this.props.isSubMenuOpened
          return s.createElement(
            v,
            Object.assign(
              {
                reference: this._setItemRef,
                onClick: this._handleClick,
                onClickToolbox: this._handleClickToolbox,
                onMouseOver: this._handleItemMouseOver,
                hovered: t,
                hasSubItems: this._hasSubItems(),
                actionName: this.state.name,
              },
              this.state
            ),
            s.createElement(f.a, {
              isOpened: t,
              items: this.state.subItems,
              position: this._calcSubMenuPos,
              menuStatName: this.props.menuStatName,
              parentStatName: this._getStatName(),
              menuElementReference: this._menuElementRef,
              onMouseOver: this.state.subItems.length ? this._handleMenuMouseOver : void 0,
              ref: this._handleMenuRef,
            })
          )
        }
        _setCurrentContextValue() {
          var e
          this.state.subItems.length &&
            (null === (e = this.context) || void 0 === e || e.setCurrent(this.props.action.id))
        }
        _hasSubItems() {
          return this.state.subItems.length > 0
        }
        _trackEvent() {
          const e = this._getStatName()
          Object(S.trackEvent)('ContextMenuClick', this.props.menuStatName || '', e)
        }
        _getStatName() {
          return [this.props.parentStatName, this.state.statName].filter((e) => Boolean(e)).join('.')
        }
      }
      g.contextType = E.a
      var w = n('6KyJ'),
        x = n('X64X')
      function k(e) {
        return s.createElement(v, {
          label: s.createElement(
            'div',
            { className: x.loaderWrap },
            s.createElement(w.a, { className: x.loader, color: 'gray' })
          ),
          noInteractive: !0,
          onMouseOver: e.onMouseOver,
        })
      }
      function O(e) {
        return s.createElement(v, { label: e.label, noInteractive: !0, disabled: !0, onMouseOver: e.onMouseOver })
      }
      var y = n('4O8T'),
        M = n.n(y)
      class N extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._loadEmitter = new M.a()),
            (this._onDone = () => {
              this.setState({ loaded: !0, failed: !1 }, this._updateMenu)
            }),
            (this._onFail = (e) => {
              this.setState({ failed: !0, error: e }, this._updateMenu)
            }),
            (this._updateMenu = () => {
              this.props.menu && this.props.menu.update()
            }),
            (this._handleMouseOver = () => {
              this.props.onShowSubMenu(this.props.action)
            }),
            (this.state = { loaded: this.props.action.isLoaded(), failed: !1, error: '' })
        }
        componentDidMount() {
          this._loadEmitter.on('done', this._onDone), this._loadEmitter.on('fail', this._onFail), this._load()
        }
        componentWillUnmount() {
          this._loadEmitter.removeEvent('done'), this._loadEmitter.removeEvent('fail')
        }
        render() {
          return this.state.failed
            ? s.createElement(O, { label: this.state.error, onMouseOver: this._handleMouseOver })
            : this.state.loaded
            ? s.createElement(g, Object.assign({}, this.props))
            : s.createElement(k, { onMouseOver: this._handleMouseOver })
        }
        _load() {
          this.props.action
            .loadOptions()
            .then(() => {
              this._loadEmitter.emit('done')
            })
            .catch((e) => {
              this._loadEmitter.emit('fail', e)
            })
        }
      }
      var I = n('PN6A')
      n.d(t, 'a', function () {
        return T
      })
      class T extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._handleShowSubMenu = (e) => {
              const t = e.getState()
              this.setState({ showSubMenuOf: t.subItems.length ? e : void 0 })
            }),
            (this.state = {})
        }
        render() {
          return s.createElement(
            'table',
            null,
            s.createElement(
              'tbody',
              null,
              this.props.items.map((e) => this._item(e))
            )
          )
        }
        static getDerivedStateFromProps(e, t) {
          return !e.parentIsOpened && t.showSubMenuOf ? { showSubMenuOf: void 0 } : null
        }
        _item(e) {
          switch (e.type) {
            case o.a.Separator:
              return s.createElement(r, { key: e.id, hint: e.getHint() })
            case o.a.Action:
              return s.createElement(g, {
                key: e.id,
                action: e,
                onShowSubMenu: this._handleShowSubMenu,
                isSubMenuOpened: this.state.showSubMenuOf === e,
                menuStatName: this.props.menuStatName,
                parentStatName: this.props.parentStatName,
              })
            case o.a.ActionAsync:
              return s.createElement(I.a.Consumer, { key: e.id }, (t) =>
                s.createElement(N, {
                  action: e,
                  onShowSubMenu: this._handleShowSubMenu,
                  isSubMenuOpened: this.state.showSubMenuOf === e,
                  menuStatName: this.props.menuStatName,
                  parentStatName: this.props.parentStatName,
                  menu: t,
                })
              )
            default:
              return null
          }
        }
      }
    },
    'J+f8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var s = n('q1tI')
      const o = s.createContext(!1)
    },
    O7m7: function (e, t, n) {},
    'PR+g': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var s = n('q1tI')
      const o = () => {
        const e = Object(s.useRef)(!1)
        return (
          Object(s.useEffect)(
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
    RgaO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var s = n('mrSG'),
        o = n('8Rai')
      function a(e) {
        const { children: t } = e,
          n = Object(s.a)(e, ['children'])
        return t(Object(o.a)(n))
      }
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
    },
    X64X: function (e, t, n) {
      e.exports = { loaderWrap: 'loaderWrap-2SapxxDI', loader: 'loader-2SapxxDI' }
    },
    XXQ5: function (e, t, n) {
      e.exports = {
        item: 'item-1-SF84yU',
        emptyIcons: 'emptyIcons-1-SF84yU',
        loading: 'loading-1-SF84yU',
        disabled: 'disabled-1-SF84yU',
        interactive: 'interactive-1-SF84yU',
        hovered: 'hovered-1-SF84yU',
        icon: 'icon-1-SF84yU',
        label: 'label-1-SF84yU',
        fullWidth: 'fullWidth-1-SF84yU',
        title: 'title-1-SF84yU',
        nested: 'nested-1-SF84yU',
        shortcut: 'shortcut-1-SF84yU',
        remove: 'remove-1-SF84yU',
      }
    },
    Xy1d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
    },
    Xzy5: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}'
      )
    },
    euMy: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path fill="currentColor" d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>'
    },
    fwrW: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'
    },
    'i/MG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var s = n('mrSG'),
        o = (n('YFKU'), n('q1tI')),
        a = n('TSYQ'),
        r = n('Iivm'),
        i = n('To8B'),
        l = n('kXJy')
      const c = { remove: window.t('Remove') }
      function u(e) {
        const { className: t, isActive: n, onClick: u, title: h, hidden: m, 'data-name': d = 'remove-button' } = e,
          p = Object(s.a)(e, ['className', 'isActive', 'onClick', 'title', 'hidden', 'data-name'])
        return o.createElement(
          r.a,
          Object.assign({}, p, {
            'data-name': d,
            className: a(l.button, 'apply-common-tooltip', n && l.active, m && l.hidden, t),
            icon: i,
            onClick: u,
            title: h || c.remove,
          })
        )
      }
    },
    kXJy: function (e, t, n) {
      e.exports = {
        button: 'button-3B9fDLtm',
        disabled: 'disabled-3B9fDLtm',
        active: 'active-3B9fDLtm',
        hidden: 'hidden-3B9fDLtm',
      }
    },
    l4ku: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var s = n('q1tI'),
        o = n.n(s),
        a = n('TSYQ'),
        r = n('Iivm'),
        i = n('6KyJ'),
        l = n('J+f8'),
        c = n('w+Rv'),
        u = n('Xy1d'),
        h = n('Xzy5'),
        m = n('20PO'),
        d = n('XXQ5')
      function p(e) {
        const {
            isTitle: t,
            isLoading: n,
            isHovered: p,
            active: v,
            checkable: f,
            disabled: b,
            checked: S,
            icon: _,
            iconChecked: E,
            hint: C,
            subItems: g,
            label: w,
            onClick: x,
            children: k,
            toolbox: O,
            fullWidthLabel: y,
          } = e,
          M = Object(s.useContext)(l.a),
          N = !!g.length
        return n
          ? o.a.createElement('li', { className: a(d.item, d.loading) }, o.a.createElement(i.a, { color: 'gray' }))
          : o.a.createElement(
              'li',
              {
                className: a(
                  d.item,
                  d.interactive,
                  t && d.title,
                  b && d.disabled,
                  p && d.hovered,
                  v && d.active,
                  M && d.emptyIcons
                ),
                onClick: x,
              },
              o.a.createElement(r.a, {
                className: a(d.icon),
                icon: (function () {
                  if (f && S) return E || _ || u
                  return _
                })(),
              }),
              o.a.createElement('span', { className: a(d.label, y && d.fullWidth) }, w),
              !!O &&
                o.a.createElement(r.a, {
                  onClick: function () {
                    O && O.action()
                  },
                  className: d.remove,
                  icon: m,
                }),
              !N && C && o.a.createElement(c.a, { className: d.shortcut, text: C }),
              N && o.a.createElement(r.a, { className: d.nested, icon: h }),
              k
            )
      }
    },
    t3rk: function (e, t, n) {
      e.exports = { menu: 'menu-1Jmy26Oy' }
    },
    'w+Rv': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var s = n('q1tI'),
        o = n('TSYQ'),
        a = n.n(o),
        r = n('ycgn')
      function i(e) {
        const { text: t = '', className: n } = e
        return s.createElement('span', { className: a()(r.shortcut, n) }, t)
      }
    },
    xRqE: function (e, t, n) {
      'use strict'
      var s = n('mrSG'),
        o = n('q1tI'),
        a = n.n(o),
        r = n('DTHj'),
        i = n('RgaO'),
        l = n('ycI/'),
        c = n('TSYQ'),
        u = n('IAAr'),
        h = n('mkWe'),
        m = n('/KDZ'),
        d = n('zRdu'),
        p = n('38fQ')
      function v(e) {
        return a.a.createElement('li', { className: p.separator })
      }
      var f = n('l4ku'),
        b = n('Sn4D'),
        S = n('tWVy')
      function _(e) {
        const { action: t, isLoading: n } = e,
          [s, r] = Object(o.useState)(t.getState()),
          [i, l] = Object(o.useState)(!1),
          c = () => r(t.getState()),
          u = !!s.subItems.length,
          h = u && i
        return (
          Object(o.useEffect)(() => {
            n || r(t.getState())
          }, [n]),
          Object(o.useEffect)(
            () => (
              t.onUpdate().subscribe(null, c),
              () => {
                t.onUpdate().unsubscribe(null, c)
              }
            ),
            []
          ),
          a.a.createElement(
            f.a,
            Object.assign({}, s, {
              onClick: function (e) {
                if (s.disabled || e.defaultPrevented) return
                if (u) return void l(!0)
                s.doNotCloseOnClick || Object(S.b)()
                t.execute()
              },
              isLoading: n,
              isHovered: h,
            }),
            h &&
              a.a.createElement(
                b.a,
                { onClose: m, position: 'Bottom' },
                a.a.createElement(x, { items: s.subItems, parentAction: t, closeNested: m })
              )
          )
        )
        function m(e) {
          e && e.preventDefault(), l(!1)
        }
      }
      var E = n('PR+g')
      function C(e) {
        const { action: t } = e,
          [n, s] = Object(o.useState)(t.isLoaded()),
          [r, i] = Object(o.useState)(!1),
          l = Object(E.a)()
        return (
          Object(o.useEffect)(() => {
            t.loadOptions()
              .then(() => {
                l.current && (s(!0), i(!1))
              })
              .catch(() => {
                l.current && i(!0)
              })
          }, []),
          a.a.createElement(_, { isLoading: !n || r, action: t })
        )
      }
      var g = n('J+f8'),
        w = n('fwrW')
      function x(e) {
        const { items: t, parentAction: n, closeNested: s } = e,
          o = !n && t.every((e) => !(e.type !== d.a.Separator && (e.getState().icon || e.getState().checkable)))
        return a.a.createElement(
          g.a.Provider,
          { value: o },
          a.a.createElement(
            'ul',
            null,
            n &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(f.a, {
                  label: n.getState().label,
                  isTitle: !0,
                  active: !1,
                  disabled: !1,
                  subItems: [],
                  checkable: !1,
                  checked: !1,
                  doNotCloseOnClick: !1,
                  icon: w,
                  onClick: s,
                }),
                a.a.createElement(v, null)
              ),
            t.map((e) => {
              switch (e.type) {
                case d.a.Action:
                  return a.a.createElement(_, { key: e.id, action: e })
                case d.a.Separator:
                  return a.a.createElement(v, { key: e.id })
                case d.a.ActionAsync:
                  return a.a.createElement(C, { key: e.id, action: e })
                default:
                  return null
              }
            })
          )
        )
      }
      const k = o.createContext(!1)
      var O = n('t3rk')
      n.d(t, 'a', function () {
        return y
      })
      class y extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._menuRef = o.createRef()),
            (this._handleClose = () => {
              this.props.onClose && this.props.onClose()
            }),
            (this._handleOutsideClickClose = (e) => {
              const { doNotCloseOn: t, onClose: n } = this.props
              !n || (void 0 !== t && t.contains(e.target)) || n()
            }),
            (this._handleFocusOnOpen = () => {
              var e, t
              ;(null === (e = this.props.menuElementReference) || void 0 === e ? void 0 : e.current) &&
                this.props.takeFocus &&
                (null === (t = this.props.menuElementReference) ||
                  void 0 === t ||
                  t.current.focus({ preventScroll: !0 }))
            }),
            (this.state = {})
        }
        render() {
          const e = this.props,
            {
              isOpened: t,
              onClose: n,
              items: a,
              doNotCloseOn: d,
              menuStatName: p,
              parentStatName: v,
              takeFocus: f,
            } = e,
            S = Object(s.a)(e, [
              'isOpened',
              'onClose',
              'items',
              'doNotCloseOn',
              'menuStatName',
              'parentStatName',
              'takeFocus',
            ])
          return t
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(l.a, { keyCode: 27, eventType: 'keyup', handler: this._handleClose }),
                o.createElement(
                  h.b,
                  null,
                  o.createElement(m.a, { rule: 'screen and (max-width: 428px)' }, (e) =>
                    this._isDrawer(e)
                      ? o.createElement(
                          b.a,
                          { onClose: this._handleClose, position: 'Bottom', 'data-name': S['data-name'] },
                          o.createElement(k.Provider, { value: e }, o.createElement(x, { items: a }))
                        )
                      : o.createElement(
                          i.a,
                          {
                            handler: this._handleOutsideClickClose,
                            mouseDown: !0,
                            touchStart: !0,
                            reference: this.props.menuElementReference,
                          },
                          (e) =>
                            o.createElement(
                              r.b,
                              Object.assign({}, S, {
                                reference: e,
                                isOpened: this.props.isOpened,
                                className: c(O.menu, 'context-menu'),
                                onClose: this._handleClose,
                                noMomentumBasedScroll: !0,
                                ref: this._menuRef,
                                tabIndex: f ? -1 : void 0,
                                onOpen: this._handleFocusOnOpen,
                              }),
                              o.createElement(u.a, { items: a, menuStatName: p, parentStatName: v, parentIsOpened: t })
                            )
                        )
                  )
                )
              )
            : null
        }
        update() {
          this._menuRef.current && this._menuRef.current.update()
        }
        _isDrawer(e) {
          return void 0 === this.props.mode ? e : 'drawer' === this.props.mode
        }
      }
    },
    'ycI/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var s = n('q1tI')
      class o extends s.PureComponent {
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
    ycgn: function (e, t, n) {
      e.exports = {
        item: 'item-f5BaKrKq',
        interactive: 'interactive-f5BaKrKq',
        hovered: 'hovered-f5BaKrKq',
        disabled: 'disabled-f5BaKrKq',
        active: 'active-f5BaKrKq',
        shortcut: 'shortcut-f5BaKrKq',
        iconCell: 'iconCell-f5BaKrKq',
        icon: 'icon-f5BaKrKq',
        checkmark: 'checkmark-f5BaKrKq',
        content: 'content-f5BaKrKq',
        label: 'label-f5BaKrKq',
        checked: 'checked-f5BaKrKq',
        toolbox: 'toolbox-f5BaKrKq',
        showToolboxOnHover: 'showToolboxOnHover-f5BaKrKq',
        arrowIcon: 'arrowIcon-f5BaKrKq',
        subMenu: 'subMenu-f5BaKrKq',
      }
    },
  },
])
