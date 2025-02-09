;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-template-dialog'],
  {
    '+EG+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return o
        })
      var s = n('q1tI')
      class i extends s.Component {
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
    '/KDZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var s = n('q1tI')
      class i extends s.PureComponent {
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
    '0W35': function (e, t, n) {
      'use strict'
      var s = n('q1tI'),
        i = n('17x9')
      class o extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._subscriptions = new Set()),
            (this._getName = () => this.props.name),
            (this._getValues = () => this.props.values),
            (this._getOnChange = () => this.props.onChange),
            (this._subscribe = (e) => {
              this._subscriptions.add(e)
            }),
            (this._unsubscribe = (e) => {
              this._subscriptions.delete(e)
            })
        }
        getChildContext() {
          return {
            switchGroupContext: {
              getName: this._getName,
              getValues: this._getValues,
              getOnChange: this._getOnChange,
              subscribe: this._subscribe,
              unsubscribe: this._unsubscribe,
            },
          }
        }
        render() {
          return this.props.children
        }
        componentDidUpdate(e) {
          this._notify(this._getUpdates(this.props.values, e.values))
        }
        _notify(e) {
          this._subscriptions.forEach((t) => t(e))
        }
        _getUpdates(e, t) {
          return [...t, ...e].filter((n) => (t.includes(n) ? !e.includes(n) : e.includes(n)))
        }
      }
      function r(e) {
        var t
        return (
          ((t = class extends s.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e) => {
                  this.context.switchGroupContext.getOnChange()(e)
                }),
                (this._onUpdate = (e) => {
                  e.includes(this.props.value) && this.forceUpdate()
                })
            }
            componentDidMount() {
              this.context.switchGroupContext.subscribe(this._onUpdate)
            }
            render() {
              return s.createElement(
                e,
                Object.assign({}, this.props, {
                  name: this._getName(),
                  onChange: this._onChange,
                  checked: this._isChecked(),
                })
              )
            }
            componentWillUnmount() {
              this.context.switchGroupContext.unsubscribe(this._onUpdate)
            }
            _getName() {
              return this.context.switchGroupContext.getName()
            }
            _isChecked() {
              return this.context.switchGroupContext.getValues().includes(this.props.value)
            }
          }).contextTypes = { switchGroupContext: i.any.isRequired }),
          t
        )
      }
      ;(o.childContextTypes = { switchGroupContext: i.any.isRequired }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'b', function () {
          return r
        })
    },
    '6KyJ': function (e, t, n) {
      'use strict'
      var s,
        i = n('q1tI'),
        o = n('TSYQ'),
        r = n('K9GE'),
        a = n('YZ9j')
      n('O7m7')
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'), (e[(e.Appear = 1)] = 'Appear'), (e[(e.Active = 2)] = 'Active')
      })(s || (s = {}))
      class c extends i.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: s.Initial })
        }
        render() {
          const { className: e, color: t = 'black' } = this.props,
            n = o(a.item, { [a[t]]: Boolean(t) })
          return i.createElement(
            'span',
            { className: o(a.loader, e, this._getStateClass()) },
            i.createElement('span', { className: n }),
            i.createElement('span', { className: n }),
            i.createElement('span', { className: n })
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
    '8RO/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return o
        })
      var s = n('3ClC')
      function i(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter((e) => Object(s.isStudy)(e) && !Object(s.isESDStudy)(e))
            .map((e) => ({ id: e.metaInfo().id, description: e.title(!0, void 0, !0) })),
          interval: t,
        }
      }
      function o(e) {
        const t = new Map()
        return (
          e.forEach((e) => {
            const [n, s] = t.get(e.id) || [e.description, 0]
            t.set(e.id, [n, s + 1])
          }),
          Array.from(t.values())
            .map(([e, t]) => `${e}${t > 1 ? ' x ' + t : ''}`)
            .join(', ')
        )
      }
    },
    '8Rai': function (e, t, n) {
      'use strict'
      var s = n('q1tI')
      const i = function (e, { bubbles: t = !1, cancelable: n = !1, detail: s = null } = {}) {
        try {
          return new window.CustomEvent(e, { bubbles: t, cancelable: n, detail: s })
        } catch (i) {
          const o = document.createEvent('CustomEvent')
          return o.initCustomEvent(e, t, n, s), o
        }
      }
      var o = n('R5JZ')
      function r(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: r,
            touchStart: a,
            handler: c,
            reference: l,
            ownerDocument: u = document,
          } = e,
          h = Object(s.useRef)(null),
          p = Object(s.useRef)(new i('timestamp').timeStamp)
        return (
          Object(s.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: r, touchStart: a },
              s = l ? l.current : h.current
            return Object(o.a)(p.current, s, c, u, e)
          }, [t, n, r, a, c]),
          l || h
        )
      }
      n.d(t, 'a', function () {
        return r
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
      var s = n('q1tI'),
        i = n('i8i4'),
        o = n('e3/o'),
        r = n('jAh7'),
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
            i.createPortal(s.createElement(l.Provider, { value: this }, this.props.children), e)
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context ? Object(r.getRootOverlapManager)() : this.context
        }
      }
      c.contextType = a.b
      const l = s.createContext(null)
    },
    E9Pn: function (e, t, n) {},
    F0Qt: function (e) {
      e.exports = JSON.parse(
        '{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","box":"box-3574HVnv","icon":"icon-2jsUbtec","noOutline":"noOutline-3VoWuntz","intent-danger":"intent-danger-1Sr9dowC","check":"check-382c8Fu1","dot":"dot-3gRd-7Qt"}'
      )
    },
    FaeL: function (e, t, n) {
      e.exports = {
        autocomplete: 'autocomplete-2wlTLOUu',
        caret: 'caret-2wlTLOUu',
        icon: 'icon-2wlTLOUu',
        suggestions: 'suggestions-2wlTLOUu',
        suggestion: 'suggestion-2wlTLOUu',
        noResults: 'noResults-2wlTLOUu',
        selected: 'selected-2wlTLOUu',
        opened: 'opened-2wlTLOUu',
      }
    },
    IDfV: function (e, t, n) {
      'use strict'
      n.r(t)
      var s,
        i = n('Eyy1'),
        o = n('YFKU'),
        r = n('q1tI'),
        a = n.n(r),
        c = n('i8i4'),
        l = (n('HbRj'), n('TSYQ')),
        u = n('fV0y'),
        h = n('ML8+'),
        p = n('xADF'),
        d = n('wHCJ'),
        m = n('RgaO')
      n('mrSG')
      !(function (e) {
        ;(e[(e.Enter = 13)] = 'Enter'),
          (e[(e.Space = 32)] = 'Space'),
          (e[(e.Backspace = 8)] = 'Backspace'),
          (e[(e.DownArrow = 40)] = 'DownArrow'),
          (e[(e.UpArrow = 38)] = 'UpArrow'),
          (e[(e.RightArrow = 39)] = 'RightArrow'),
          (e[(e.LeftArrow = 37)] = 'LeftArrow'),
          (e[(e.Escape = 27)] = 'Escape'),
          (e[(e.Tab = 9)] = 'Tab')
      })(s || (s = {}))
      var g = n('FaeL')
      function b(e, t) {
        return '' === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase())
      }
      class v extends r.PureComponent {
        constructor(e) {
          if (
            (super(e),
            (this._setInputRef = (e) => {
              e &&
                ((this._inputElement = e),
                this.props.setupHTMLInput && this.props.setupHTMLInput(e),
                this._inputElement.addEventListener('keyup', this._handleKeyUpEnter))
            }),
            (this._handleCaretClick = () => {
              this.state.isOpened
                ? this.props.preventOnFocusOpen && this._focus()
                : this.props.preventOnFocusOpen
                ? this._open()
                : this._focus()
            }),
            (this._handleOutsideClick = () => {
              const { allowUserDefinedValues: e, value: t, onChange: n } = this.props,
                { queryValue: s } = this.state
              e ? n && s !== t && n(s) : this.setState(this._valueToQuery(t)), this._close()
            }),
            (this._handleFocus = (e) => {
              this.props.preventOnFocusOpen || this._open(), this.props.onFocus && this.props.onFocus(e)
            }),
            (this._handleChange = (e) => {
              const {
                  preventSearchOnEmptyQuery: t,
                  allowUserDefinedValues: n,
                  onChange: s,
                  onSuggestionsOpen: i,
                  onSuggestionsClose: o,
                } = this.props,
                r = e.currentTarget.value
              if (t && '' === r) this.setState({ queryValue: r, isOpened: !1, active: void 0 }), o && o()
              else {
                const e = this._suggestions(r),
                  t = Object.keys(e).length > 0
                this.setState({ queryValue: r, isOpened: t, active: n ? void 0 : this._getActiveKeyByValue(r) }),
                  t && i && i()
              }
              n && s && s(r)
            }),
            (this._handleItemClick = (e) => {
              const t = e.currentTarget.id
              this.setState({ queryValue: this._source()[t] }),
                this.props.onChange && this.props.onChange(t),
                this._close()
            }),
            (this._handleKeyDown = (e) => {
              if (-1 === [s.DownArrow, s.UpArrow, s.Enter, s.Escape].indexOf(e.which)) return
              const { allowUserDefinedValues: t, value: n, onChange: i, onSuggestionsOpen: o } = this.props,
                { active: r, isOpened: a, queryValue: c } = this.state
              a && (e.preventDefault(), e.stopPropagation())
              const l = this._suggestions(c)
              switch (e.which) {
                case s.DownArrow:
                case s.UpArrow:
                  const u = Object.keys(l)
                  if (!a && u.length && e.which === s.DownArrow) {
                    this.setState({ isOpened: !0, active: u[0] }), o && o()
                    break
                  }
                  let h
                  if (void 0 === r) {
                    if (e.which === s.UpArrow) {
                      this._close()
                      break
                    }
                    h = 0
                  } else h = u.indexOf(r) + (e.which === s.UpArrow ? -1 : 1)
                  h < 0 && (h = 0), h > u.length - 1 && (h = u.length - 1)
                  const p = u[h]
                  this.setState({ active: p })
                  const d = document.getElementById(p)
                  d && this._scrollIfNotVisible(d, this._suggestionsElement)
                  break
                case s.Escape:
                  this._close(), a || this._blur()
                  break
                case s.Enter:
                  let m = r
                  t && (a && m ? this.setState(this._valueToQuery(m)) : (m = c)),
                    void 0 !== m &&
                      (this._close(), a || this._blur(), m !== n ? i && i(m) : this.setState(this._valueToQuery(m)))
              }
            }),
            (this._setSuggestionsRef = (e) => {
              e && (this._suggestionsElement = e)
            }),
            (this._scrollIfNotVisible = (e, t) => {
              const n = t.scrollTop,
                s = t.scrollTop + t.clientHeight,
                i = e.offsetTop,
                o = i + e.clientHeight
              i <= n ? e.scrollIntoView(!0) : o >= s && e.scrollIntoView(!1)
            }),
            !((e) => Array.isArray(e.source) || !e.allowUserDefinedValues)(e))
          )
            throw new Error('allowUserDefinedProps === true cay only be used if source is array')
          this.state = Object.assign({ isOpened: !1, active: e.value }, this._valueToQuery(e.value))
        }
        componentWillReceiveProps(e) {
          const { allowUserDefinedValues: t, value: n } = e
          if (n === this.props.value && this.state.isOpened) return
          const s = t ? n : '' === n ? '' : this._source()[n] || this.state.queryValue
          this.setState({ queryValue: s, active: n })
        }
        componentWillUnmount() {
          this._inputElement && this._inputElement.removeEventListener('keyup', this._handleKeyUpEnter)
        }
        render() {
          return r.createElement(m.a, { handler: this._handleOutsideClick, click: !0 }, (e) =>
            r.createElement(
              'div',
              { className: l(g.autocomplete, { [g.opened]: this.state.isOpened }, 'js-dialog-skip-escape'), ref: e },
              r.createElement(d.a, {
                name: this.props.name,
                endSlot: Object.keys(this._suggestions(this.state.queryValue)).length
                  ? r.createElement(
                      p.b,
                      null,
                      r.createElement(
                        'span',
                        { className: g.caret, onClick: this._handleCaretClick },
                        r.createElement(h.a, { className: g.icon, dropped: this.state.isOpened })
                      )
                    )
                  : void 0,
                maxLength: this.props.maxLength,
                reference: this._setInputRef,
                stretch: !0,
                placeholder: this.props.placeholder,
                value: this.state.queryValue,
                intent: this.props.error ? 'danger' : void 0,
                onChange: this._handleChange,
                onFocus: this._handleFocus,
                onBlur: this.props.onBlur,
                onMouseOver: this.props.onMouseOver,
                onMouseOut: this.props.onMouseOut,
                onKeyDown: this._handleKeyDown,
                autoComplete: 'off',
              }),
              this._renderSuggestions()
            )
          )
        }
        _focus() {
          this._inputElement.focus()
        }
        _blur() {
          this._inputElement.blur()
        }
        _open() {
          const { onSuggestionsOpen: e } = this.props
          this._focus(), this.setState({ isOpened: !0 }), e && e()
        }
        _close() {
          const { onSuggestionsClose: e } = this.props
          this.setState({ isOpened: !1, active: void 0 }), e && e()
        }
        _source() {
          let e = {}
          return (
            Array.isArray(this.props.source)
              ? this.props.source.forEach((t) => {
                  e[t] = t
                })
              : (e = this.props.source),
            e
          )
        }
        _suggestions(e) {
          const { filter: t = b } = this.props,
            n = this._source(),
            s = {}
          return (
            Object.keys(n)
              .filter((s) => t(e, n[s]))
              .forEach((e) => (s[e] = n[e])),
            s
          )
        }
        _renderSuggestions() {
          const e = this._suggestions(this.state.queryValue),
            t = Object.keys(e).map((t) => {
              const n = l(g.suggestion, { [g.selected]: this.state.active === t })
              return r.createElement('li', { id: t, key: t, className: n, onClick: this._handleItemClick }, e[t])
            }),
            n = r.createElement('li', { className: g.noResults }, window.t('No results found'))
          return !t.length && this.props.noEmptyText
            ? null
            : r.createElement('ul', { className: g.suggestions, ref: this._setSuggestionsRef }, t.length ? t : n)
        }
        _handleKeyUpEnter(e) {
          e.which === s.Enter && e.stopImmediatePropagation()
        }
        _getActiveKeyByValue(e) {
          const { filter: t = b } = this.props,
            n = this._suggestions(e),
            s = Object.keys(n)
          for (const i of s) if (t(e, n[i])) return i
          return s[0]
        }
        _valueToQuery(e) {
          return { queryValue: this._source()[e] || '' }
        }
      }
      var f = n('Iivm'),
        _ = n('ycFu'),
        w = n('+EG+'),
        S = n('6KyJ'),
        y = n('tz2P')
      function O(e) {
        const { isLoading: t } = e
        return a.a.createElement(
          'span',
          { className: t ? y.loading : void 0 },
          window.t('Save'),
          t && a.a.createElement(S.a, { color: 'white' })
        )
      }
      class C extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._dialogRef = r.createRef()),
            (this._manager = null),
            (this._handleSubmit = () => {
              this.setState({ isLoading: !0 }), this.props.onSubmit(this)
            }),
            (this.state = { isLoading: !1 })
        }
        render() {
          const { isOpened: e, saveDisabled: t, title: n, onClose: s } = this.props
          return r.createElement(_.a, {
            ref: this._dialogRef,
            onClose: s,
            onSubmit: this._handleSubmit,
            onCancel: s,
            onClickOutside: s,
            isOpened: e,
            title: n,
            dataName: 'save-rename-dialog',
            render: this._renderDialogBody(),
            defaultActionOnClose: 'none',
            submitButtonText: r.createElement(O, { isLoading: this.state.isLoading }),
            submitButtonDisabled: t,
          })
        }
        focus() {
          Object(i.ensureNotNull)(this._dialogRef.current).focus()
        }
        manager() {
          return this._manager
        }
        submit() {
          this.props.onSubmit(this)
        }
        close() {
          this.props.onClose()
        }
        dropLoading() {
          this.setState({ isLoading: !1 })
        }
        _renderDialogBody() {
          return () => r.createElement(w.b.Consumer, null, (e) => ((this._manager = e), this.props.children))
        }
      }
      var E = n('xJ0h'),
        x = n('j+m7')
      const T = window.t('Template name'),
        L = window.t('Saved indicators'),
        k = window.t('Remember Symbol'),
        N = window.t('Remember Interval')
      function I(e) {
        const {
            title: t,
            saveSymbolHintText: n,
            saveIntervalHintText: s,
            indicatorsText: o,
            source: c,
            onClose: h,
            onSubmit: p,
          } = e,
          [d, m] = Object(r.useState)(''),
          [g, b] = Object(r.useState)(!1),
          [_, w] = Object(r.useState)(!1),
          [S, y] = Object(r.useState)(!1),
          O = Object(r.useRef)(null),
          I = Object(r.useRef)(null)
        return (
          Object(r.useEffect)(() => {
            Object(i.ensureNotNull)(I.current).focus()
          }, []),
          a.a.createElement(
            C,
            {
              ref: O,
              isOpened: !0,
              saveDisabled: !d,
              title: t,
              onClose: h,
              onSubmit: function (e) {
                p({ title: d, saveSymbol: g, saveInterval: _ }, e)
              },
            },
            a.a.createElement(
              'div',
              { className: l(x.container, S && x.withSuggestions) },
              a.a.createElement('div', { className: x.title }, T),
              a.a.createElement(
                'div',
                { className: x.autocomplete },
                a.a.createElement(v, {
                  maxLength: 64,
                  value: d,
                  onChange: m,
                  onBlur: function () {
                    Object(i.ensureNotNull)(O.current).focus()
                  },
                  source: c,
                  allowUserDefinedValues: !0,
                  preventOnFocusOpen: !0,
                  noEmptyText: !0,
                  preventSearchOnEmptyQuery: !0,
                  filter: function (e, t) {
                    return Boolean('' === e || (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())))
                  },
                  setupHTMLInput: function (e) {
                    I.current = e
                  },
                  onSuggestionsOpen: function () {
                    y(!0)
                  },
                  onSuggestionsClose: function () {
                    y(!1)
                  },
                })
              ),
              a.a.createElement(
                'div',
                { className: x.saveSymbol },
                a.a.createElement(u.a, {
                  label: a.a.createElement(
                    'span',
                    { className: x.hintLabel },
                    k,
                    a.a.createElement(f.a, { icon: E, className: l(x.hintMark, 'apply-common-tooltip'), title: n })
                  ),
                  onChange: function () {
                    b(!g), Object(i.ensureNotNull)(O.current).focus()
                  },
                  checked: g,
                })
              ),
              a.a.createElement(
                'div',
                { className: x.saveInterval },
                a.a.createElement(u.a, {
                  label: a.a.createElement(
                    'span',
                    { className: x.hintLabel },
                    N,
                    a.a.createElement(f.a, { icon: E, className: l(x.hintMark, 'apply-common-tooltip'), title: s })
                  ),
                  onChange: function () {
                    w(!_), Object(i.ensureNotNull)(O.current).focus()
                  },
                  checked: _,
                })
              ),
              a.a.createElement('div', { className: x.title }, L),
              a.a.createElement('div', { className: l(x.indicators, S && x.withSuggestions) }, o)
            )
          )
        )
      }
      var j = n('FQhm'),
        A = n('ZjKI')
      class D {
        constructor(e) {
          ;(this._container = document.createElement('div')),
            (this.close = () => {
              this.unmount(), this._onClose && this._onClose()
            }),
            (this.unmount = () => {
              j.unsubscribe(A.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this.unmount, null),
                c.unmountComponentAtNode(this._container)
            }),
            (this._title = e.title),
            (this._saveSymbolHintText = e.saveSymbolHintText),
            (this._saveIntervalHintText = e.saveIntervalHintText),
            (this._indicatorsText = e.indicatorsText),
            (this._source = e.source),
            (this._onSubmit = e.onSubmit),
            (this._onClose = e.onClose),
            j.subscribe(A.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this.unmount, null)
        }
        mount() {
          c.render(
            a.a.createElement(I, {
              title: this._title,
              saveSymbolHintText: this._saveSymbolHintText,
              saveIntervalHintText: this._saveIntervalHintText,
              indicatorsText: this._indicatorsText,
              source: this._source,
              onClose: this.close,
              onSubmit: this._onSubmit,
            }),
            this._container
          )
        }
        destroy() {
          this.unmount()
        }
        show() {
          this.mount()
        }
      }
      var U = n('zUrt'),
        V = n('fZEr'),
        R = n('xDuj'),
        q = n('8RO/')
      n.d(t, 'StudyTemplateSaver', function () {
        return Q
      })
      const F = Object(o.t)('Save Indicator Template'),
        M = Object(o.t)(
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied'
        ),
        P = Object(o.t)(
          'Selecting this option will set the {interval} interval on the chart when this template is applied'
        ),
        B = Object(o.t)("Study Template '{templateName}' already exists. Do you really want to replace it?")
      function H(e, t, n) {
        const s = () => {
          U.backend.invalidateStudyTemplatesList(), U.backend.getStudyTemplatesList().then(t)
        }
        U.backend.saveStudyTemplate(e).then(s)
      }
      class Q {
        constructor(e) {
          ;(this._dialog = null),
            (this._onSave = (e) => {
              this._options.onSave(e), this._close()
            }),
            (this._showSaveDialog = async () => {
              const e = this._controller.model().mainSeries().symbol(),
                t = this._controller.model().mainSeries().interval(),
                n = await this._getActualTemplateList()
              await this._showTemplateSaveRenameDialog(n, e, t)
            }),
            (this._close = () => {
              this._dialog && (this._dialog.destroy(), (this._dialog = null))
            }),
            (this._options = e),
            (this._controller = e.controller)
        }
        show() {
          window.runOrSignIn(this._showSaveDialog, { source: 'Study templates save as', sourceMeta: 'Chart' })
        }
        _prepareData(e, t, n) {
          const s = this._controller.model().studyTemplate(t, n)
          return { name: e, content: JSON.stringify(s), meta_info: Object(q.a)(this._controller, s.interval) }
        }
        _doSave(e, t, n) {
          const { title: s, saveSymbol: i, saveInterval: o } = t
          if (!s) return
          const r = n.manager() || void 0,
            a = this._prepareData(s, i, o)
          if (e.find((e) => e.name === s)) {
            const e = (e) => {
              e ? H(a, this._onSave) : (n.focus(), n.dropLoading())
            }
            ;(function (e, t) {
              return new Promise((n) =>
                Object(V.a)(
                  {
                    text: B.format({ templateName: e }),
                    onConfirm: ({ dialogClose: e }) => {
                      n(!0), e()
                    },
                    onClose: () => n(!1),
                  },
                  t
                )
              )
            })(s, r).then(e)
          } else {
            H(a, this._onSave)
          }
        }
        _getActualTemplateList() {
          return U.backend.invalidateStudyTemplatesList(), U.backend.getStudyTemplatesList()
        }
        _showTemplateSaveRenameDialog(e, t, n) {
          const s = Object(q.a)(this._controller)
          ;(this._dialog = new D({
            source: e.map((e) => e.name),
            title: F,
            saveSymbolHintText: M.format({ symbol: t }),
            saveIntervalHintText: P.format({ interval: Object(R.translatedIntervalString)(n) }),
            indicatorsText: Object(q.b)(s.indicators),
            onSubmit: (t, n) => this._doSave(e, t, n),
            onClose: this._close,
          })).show()
        }
      }
    },
    Iivm: function (e, t, n) {
      'use strict'
      var s = n('mrSG'),
        i = n('q1tI')
      const o = i.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          o = Object(s.a)(e, ['icon'])
        return i.createElement('span', Object.assign({}, o, { ref: t, dangerouslySetInnerHTML: { __html: n } }))
      })
      n.d(t, 'a', function () {
        return o
      })
    },
    'ML8+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var s = n('q1tI'),
        i = n('TSYQ'),
        o = n('Iivm'),
        r = n('cvzQ'),
        a = n('R4+T')
      function c(e) {
        const { dropped: t, className: n } = e
        return s.createElement(o.a, { className: i(n, r.icon, { [r.dropped]: t }), icon: a })
      }
    },
    O7m7: function (e, t, n) {},
    'P4l+': function (e, t, n) {},
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    },
    R5JZ: function (e, t, n) {
      'use strict'
      function s(e, t, n, s, i) {
        function o(i) {
          if (e > i.timeStamp) return
          const o = i.target
          void 0 !== n && null !== t && null !== o && o.ownerDocument === s && (t.contains(o) || n(i))
        }
        return (
          i.click && s.addEventListener('click', o, !1),
          i.mouseDown && s.addEventListener('mousedown', o, !1),
          i.touchEnd && s.addEventListener('touchend', o, !1),
          i.touchStart && s.addEventListener('touchstart', o, !1),
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
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}'
      )
    },
    aJjg: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
    },
    cvzQ: function (e, t, n) {
      e.exports = { icon: 'icon-19OjtB6A', dropped: 'dropped-19OjtB6A' }
    },
    fV0y: function (e, t, n) {
      'use strict'
      var s = n('mrSG'),
        i = n('q1tI'),
        o = n('TSYQ'),
        r = n('0W35'),
        a = n('vCF3'),
        c = n('qibD')
      n('E9Pn')
      class l extends i.PureComponent {
        render() {
          const e = this.props,
            { inputClassName: t, labelClassName: n } = e,
            r = Object(s.a)(e, ['inputClassName', 'labelClassName']),
            l = o(this.props.className, c.checkbox, {
              [c.reverse]: Boolean(this.props.labelPositionReverse),
              [c.baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            u = o(c.label, n, { [c.disabled]: this.props.disabled })
          let h = null
          return (
            this.props.label &&
              (h = i.createElement('span', { className: u, title: this.props.title }, this.props.label)),
            i.createElement('label', { className: l }, i.createElement(a.a, Object.assign({}, r, { className: t })), h)
          )
        }
      }
      l.defaultProps = { value: 'on' }
      Object(r.b)(l)
      n.d(t, 'a', function () {
        return l
      })
    },
    ijHL: function (e, t, n) {
      'use strict'
      function s(e) {
        return o(e, r)
      }
      function i(e) {
        return o(e, a)
      }
      function o(e, t) {
        const n = Object.entries(e).filter(t),
          s = {}
        for (const [i, o] of n) s[i] = o
        return s
      }
      function r(e) {
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
          return i
        })
    },
    'j+m7': function (e, t, n) {
      e.exports = {
        container: 'container-1FV_LSwA',
        withSuggestions: 'withSuggestions-1FV_LSwA',
        title: 'title-1FV_LSwA',
        autocomplete: 'autocomplete-1FV_LSwA',
        saveSymbol: 'saveSymbol-1FV_LSwA',
        saveInterval: 'saveInterval-1FV_LSwA',
        indicators: 'indicators-1FV_LSwA',
        hintLabel: 'hintLabel-1FV_LSwA',
        hintMark: 'hintMark-1FV_LSwA',
      }
    },
    qibD: function (e) {
      e.exports = JSON.parse(
        '{"checkbox":"checkbox-3xZUD-2M","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X"}'
      )
    },
    tz2P: function (e, t, n) {
      e.exports = { loading: 'loading-20Nb4yny' }
    },
    uhCe: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var s = n('ASyk')
      const i = {
        SmallHeight: s['small-height-breakpoint'],
        TabletSmall: s['tablet-small-breakpoint'],
        TabletNormal: s['tablet-normal-breakpoint'],
      }
    },
    vCF3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var s = n('q1tI'),
        i = n('TSYQ'),
        o = n('Iivm'),
        r = n('aJjg'),
        a = n('F0Qt')
      n('P4l+')
      function c(e) {
        const t = i(a.box, a['intent-' + e.intent], {
            [a.check]: !e.indeterminate,
            [a.dot]: Boolean(e.indeterminate),
            [a.noOutline]: -1 === e.tabIndex,
          }),
          n = i(a.wrapper, e.className)
        return s.createElement(
          'span',
          { className: n, title: e.title },
          s.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: a.input,
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
          s.createElement('span', { className: t }, s.createElement(o.a, { icon: r, className: a.icon }))
        )
      }
    },
    xJ0h: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'
    },
  },
])
