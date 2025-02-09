;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    '++uw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('q1tI'),
        o = n('yqnI')
      const r = (e) => {
        const t = 'property' in e ? e.property : void 0,
          n = 'defaultValue' in e ? e.defaultValue : e.property.value(),
          [r, s] = Object(a.useState)(t ? t.value() : n)
        Object(a.useEffect)(() => {
          if (t) {
            const n = {}
            return (
              s(t.value()),
              t.subscribe(n, (t) => {
                const n = t.value()
                e.handler && e.handler(n), s(n)
              }),
              () => t.unsubscribeAll(n)
            )
          }
          return () => {}
        }, [t])
        return [
          r,
          (e) => {
            if (void 0 !== t) {
              const n = t.value()
              o.a.logNormal(`Changing property value from "${n}" to "${e}"`), t.setValue(e)
            }
          },
        ]
      }
    },
    '07LS': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('Q+1u'),
        s = n('fktV'),
        c = n('Q40t')
      function l(e) {
        return o.a.createElement(
          r.a.Row,
          null,
          o.a.createElement(
            r.a.Cell,
            {
              className: c.titleWrap,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              'data-section-name': e.name,
              checkableTitle: !0,
            },
            o.a.createElement(s.a, { title: e.title, name: 'is-enabled-' + e.name })
          )
        )
      }
    },
    '0W35': function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        o = n('17x9')
      class r extends a.PureComponent {
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
      function s(e) {
        var t
        return (
          ((t = class extends a.PureComponent {
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
              return a.createElement(
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
          }).contextTypes = { switchGroupContext: o.any.isRequired }),
          t
        )
      }
      ;(r.childContextTypes = { switchGroupContext: o.any.isRequired }),
        n.d(t, 'a', function () {
          return r
        }),
        n.d(t, 'b', function () {
          return s
        })
    },
    '4bOu': function (e, t, n) {
      e.exports = {
        colorPickerWrap: 'colorPickerWrap-3gSLMlhu',
        focused: 'focused-3gSLMlhu',
        readonly: 'readonly-3gSLMlhu',
        disabled: 'disabled-3gSLMlhu',
        'size-small': 'size-small-3gSLMlhu',
        'size-medium': 'size-medium-3gSLMlhu',
        'size-large': 'size-large-3gSLMlhu',
        'font-size-small': 'font-size-small-3gSLMlhu',
        'font-size-medium': 'font-size-medium-3gSLMlhu',
        'font-size-large': 'font-size-large-3gSLMlhu',
        'border-none': 'border-none-3gSLMlhu',
        shadow: 'shadow-3gSLMlhu',
        'border-thin': 'border-thin-3gSLMlhu',
        'border-thick': 'border-thick-3gSLMlhu',
        'intent-default': 'intent-default-3gSLMlhu',
        'intent-success': 'intent-success-3gSLMlhu',
        'intent-warning': 'intent-warning-3gSLMlhu',
        'intent-danger': 'intent-danger-3gSLMlhu',
        'intent-primary': 'intent-primary-3gSLMlhu',
        'corner-top-left': 'corner-top-left-3gSLMlhu',
        'corner-top-right': 'corner-top-right-3gSLMlhu',
        'corner-bottom-right': 'corner-bottom-right-3gSLMlhu',
        'corner-bottom-left': 'corner-bottom-left-3gSLMlhu',
        colorPicker: 'colorPicker-3gSLMlhu',
        swatch: 'swatch-3gSLMlhu',
        placeholderContainer: 'placeholderContainer-3gSLMlhu',
        placeholder: 'placeholder-3gSLMlhu',
        white: 'white-3gSLMlhu',
        opacitySwatch: 'opacitySwatch-3gSLMlhu',
        colorLine: 'colorLine-3gSLMlhu',
        thicknessContainer: 'thicknessContainer-3gSLMlhu',
        thicknessTitle: 'thicknessTitle-3gSLMlhu',
      }
    },
    '6ix9': function (e, t, n) {
      e.exports = {
        content: 'content-22S1W3v8',
        cell: 'cell-22S1W3v8',
        inner: 'inner-22S1W3v8',
        first: 'first-22S1W3v8',
        inlineCell: 'inlineCell-22S1W3v8',
        fill: 'fill-22S1W3v8',
        top: 'top-22S1W3v8',
        topCenter: 'topCenter-22S1W3v8',
        offset: 'offset-22S1W3v8',
        inlineRow: 'inlineRow-22S1W3v8',
        grouped: 'grouped-22S1W3v8',
        separator: 'separator-22S1W3v8',
        groupSeparator: 'groupSeparator-22S1W3v8',
        big: 'big-22S1W3v8',
        adaptive: 'adaptive-22S1W3v8',
        checkableTitle: 'checkableTitle-22S1W3v8',
      }
    },
    '7MId': function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        s = n.n(r),
        c = n('mrSG'),
        l = n('Eyy1'),
        i = n('/3z9'),
        u = n('9dlw'),
        d = n('SpAO'),
        p = n('htM8'),
        h = n('PN6A')
      function m(e) {
        const { button: t, children: n, className: r, onPopupClose: s } = e,
          m = Object(c.a)(e, ['button', 'children', 'className', 'onPopupClose']),
          [b, g] = Object(a.useState)(!1),
          [f, v] = Object(a.useState)(!1),
          [C, S] = Object(d.a)(),
          N = Object(a.useRef)(null)
        return o.a.createElement(
          'div',
          { className: r },
          o.a.createElement(
            'div',
            {
              tabIndex: e.disabled ? void 0 : -1,
              ref: N,
              onClick: E,
              onFocus: S.onFocus,
              onBlur: S.onBlur,
              onKeyDown: k,
            },
            'function' == typeof t ? t(f, C) : t
          ),
          o.a.createElement(
            u.a,
            {
              isOpened: f,
              onClose: y,
              position: function () {
                const e = Object(l.ensureNotNull)(N.current).getBoundingClientRect()
                return { x: e.left, y: e.top + e.height }
              },
              doNotCloseOn: N.current,
              onKeyDown: k,
            },
            o.a.createElement(h.a.Consumer, null, (e) =>
              o.a.createElement(p.a, Object.assign({}, m, { onToggleCustom: g, menu: e }))
            ),
            !b && n
          )
        )
        function E() {
          e.disabled || (v((e) => !e), g(!1))
        }
        function k(e) {
          switch (Object(i.hashFromEvent)(e)) {
            case 27:
              f && (e.preventDefault(), y())
          }
        }
        function y() {
          E(), Object(l.ensureNotNull)(N.current).focus(), s && s()
        }
      }
      var b = n('V3OP'),
        g = n('Tmoa'),
        f = n('wLjq'),
        v = (n('YFKU'), n('0W35')),
        C = n('95N5')
      const S = Object(v.b)(
        class extends a.PureComponent {
          constructor() {
            super(...arguments),
              (this._onChange = () => {
                this.props.onChange && this.props.onChange(this.props.value)
              })
          }
          render() {
            const { name: e, checked: t, value: n } = this.props,
              o = r(C.thicknessItem, { [C.checked]: t }),
              s = r(C.bar, { [C.checked]: t }),
              c = { borderTopWidth: parseInt(n) }
            return a.createElement(
              'div',
              { className: o },
              a.createElement('input', {
                type: 'radio',
                className: C.radio,
                name: e,
                value: n,
                onChange: this._onChange,
                checked: t,
              }),
              a.createElement('div', { className: s, style: c }, ' ')
            )
          }
        }
      )
      function N(e) {
        const { name: t, values: n, selectedValues: o, onChange: r } = e,
          s = n.map((e, t) => a.createElement(S, { key: t, value: e.toString() })),
          c = o.map((e) => e.toString())
        return a.createElement(
          'div',
          { className: C.wrap },
          a.createElement(
            v.a,
            {
              name: t,
              onChange: (e) => {
                r(parseInt(e))
              },
              values: c,
            },
            s
          )
        )
      }
      var E = n('85uA')
      const k = window.t('Thickness')
      function y(e) {
        return o.a.createElement(
          'div',
          { className: E.thicknessContainer },
          o.a.createElement('div', { className: E.thicknessTitle }, k),
          o.a.createElement(N, {
            name: 'color_picker_thickness_select',
            onChange: e.onChange,
            values: e.items,
            selectedValues: [e.value],
          })
        )
      }
      var w = n('4bOu')
      function x(e) {
        const {
            className: t,
            selectOpacity: n = void 0 !== e.opacity,
            thickness: a,
            color: r,
            disabled: c,
            opacity: l = 1,
            onColorChange: i,
            onOpacityChange: u,
            onThicknessChange: d,
            thicknessItems: p,
            onPopupClose: h,
          } = e,
          [g, f, v] = Object(b.a)()
        return o.a.createElement(
          m,
          {
            className: t,
            disabled: c,
            color: r,
            selectOpacity: n,
            opacity: l,
            selectCustom: !0,
            customColors: g,
            onColorChange: i,
            onOpacityChange: r ? u : void 0,
            onAddColor: f,
            onRemoveCustomColor: v,
            button: function (e, t) {
              const n = e || t,
                i = n ? 'primary' : 'default'
              return o.a.createElement(
                'div',
                {
                  className: s()(
                    w.colorPickerWrap,
                    w['intent-' + i],
                    w['border-thin'],
                    w['size-medium'],
                    n && w.highlight,
                    n && w.focused,
                    c && w.disabled
                  ),
                  'data-role': 'button',
                  'data-name': a ? 'color-with-thickness-select' : 'color-select',
                },
                o.a.createElement(
                  'div',
                  { className: s()(w.colorPicker, c && w.disabled) },
                  r
                    ? (function () {
                        const e = O(r, l),
                          t = l >= 0.95 && L(r)
                        return o.a.createElement(
                          'div',
                          { className: w.opacitySwatch },
                          o.a.createElement('div', {
                            style: { backgroundColor: e },
                            className: s()(w.swatch, t && w.white),
                          })
                        )
                      })()
                    : o.a.createElement(
                        'div',
                        { className: w.placeholderContainer },
                        o.a.createElement('div', { className: w.placeholder })
                      ),
                  a &&
                    o.a.createElement('span', {
                      className: s()(w.colorLine, L(r) && w.white),
                      style: { height: a, backgroundColor: O(r, l) },
                    })
                ),
                n && o.a.createElement('span', { className: w.shadow })
              )
            },
            onPopupClose: h,
          },
          a &&
            p &&
            o.a.createElement(y, {
              value: a,
              items: p,
              onChange: function (e) {
                d && d(e)
              },
            })
        )
      }
      function O(e, t) {
        return e ? Object(g.generateColor)(e, Object(g.alphaToTransparency)(t)) : '#000000'
      }
      function L(e) {
        return !!e && e.toLowerCase() === f.c
      }
      n.d(t, 'a', function () {
        return x
      })
    },
    '85uA': function (e, t, n) {
      e.exports = { thicknessContainer: 'thicknessContainer-2K1QSVfY', thicknessTitle: 'thicknessTitle-2K1QSVfY' }
    },
    '95N5': function (e, t, n) {
      e.exports = {
        wrap: 'wrap-kAIcH6Vi',
        thicknessItem: 'thicknessItem-kAIcH6Vi',
        checked: 'checked-kAIcH6Vi',
        radio: 'radio-kAIcH6Vi',
        bar: 'bar-kAIcH6Vi',
      }
    },
    E9Pn: function (e, t, n) {},
    F0Qt: function (e) {
      e.exports = JSON.parse(
        '{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","box":"box-3574HVnv","icon":"icon-2jsUbtec","noOutline":"noOutline-3VoWuntz","intent-danger":"intent-danger-1Sr9dowC","check":"check-382c8Fu1","dot":"dot-3gRd-7Qt"}'
      )
    },
    'P4l+': function (e, t, n) {},
    'Q+1u': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        s = n('ijHL'),
        c = n('6ix9')
      const l = o.a.createContext(!1)
      class i extends o.a.PureComponent {
        render() {
          return o.a.createElement('div', { ref: this.props.reference, className: c.content }, this.props.children)
        }
      }
      ;(i.InlineRowContext = l),
        (i.Row = function (e) {
          const { children: t } = e
          return Object(a.useContext)(l)
            ? o.a.createElement('span', { className: c.inlineRow }, t)
            : o.a.createElement(o.a.Fragment, null, t)
        }),
        (i.Cell = function (e) {
          const t = Object(a.useContext)(l),
            n = r(
              c.cell,
              e.offset && c.offset,
              e.grouped && c.grouped,
              t && c.inlineCell,
              'top' === e.verticalAlign && c.top,
              'topCenter' === e.verticalAlign && c.topCenter,
              'adaptive' === e.verticalAlign && c.adaptive,
              e.checkableTitle && c.checkableTitle,
              2 === e.colSpan && c.fill,
              'first' === e.placement && 2 !== e.colSpan && c.first,
              'last' === e.placement && 2 !== e.colSpan && c.last
            ),
            i = Object(s.b)(e)
          return o.a.createElement(
            'div',
            Object.assign({}, i, { className: n }),
            o.a.createElement('div', { className: r(c.inner, e.className) }, e.children)
          )
        }),
        (i.Separator = function (e) {
          return o.a.createElement(i.Row, null, o.a.createElement('div', { className: r(c.cell, c.separator, c.fill) }))
        }),
        (i.GroupSeparator = function (e) {
          const t = e.size || 0
          return o.a.createElement(
            i.Row,
            null,
            o.a.createElement('div', { className: r(c.cell, c.groupSeparator, c.fill, 1 === t && c.big) })
          )
        })
    },
    Q40t: function (e, t, n) {
      e.exports = { titleWrap: 'titleWrap-3OnZWCnE' }
    },
    WboT: function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        o = n.n(a),
        r = (n('EsMY'), n('mrSG')),
        s = n('TSYQ'),
        c = n('ldG2'),
        l = n('xADF'),
        i = n('dKnb'),
        u = n('jh7f'),
        d = n('VET0'),
        p = n('ZgM/')
      const h = { large: c.b.FontSizeLarge, medium: c.b.FontSizeMedium },
        m = { attachment: d.a.top.attachment, targetAttachment: d.a.top.targetAttachment, attachmentOffsetY: -4 }
      function b(e) {
        const {
            className: t,
            inputClassName: n,
            stretch: o = !0,
            errorMessage: c,
            fontSizeStyle: d = 'large',
            endSlot: b,
            button: g,
            error: f,
            warning: v,
            innerLabel: C,
            inputReference: S,
            children: N,
          } = e,
          E = Object(r.a)(e, [
            'className',
            'inputClassName',
            'stretch',
            'errorMessage',
            'fontSizeStyle',
            'endSlot',
            'button',
            'error',
            'warning',
            'innerLabel',
            'inputReference',
            'children',
          ]),
          k = f && void 0 !== c ? [c] : void 0,
          y = v && void 0 !== c ? [c] : void 0,
          w = s(p.inputContainer, h[d], t),
          x = C ? a.createElement(l.d, { className: p.innerLabel, interactive: !1 }, C) : void 0,
          O = b || g || N ? a.createElement(l.b, null, b, g, N) : void 0
        return a.createElement(
          i.a,
          Object.assign({}, E, {
            className: w,
            inputClassName: n,
            errors: k,
            warnings: y,
            hasErrors: f,
            hasWarnings: v,
            messagesPosition: u.a.Attached,
            customErrorsAttachment: m,
            messagesRoot: 'document',
            inheritMessagesWidthFromTarget: !0,
            disableMessagesRtlStyles: !0,
            iconHidden: !0,
            stretch: o,
            reference: S,
            startSlot: x,
            endSlot: O,
          })
        )
      }
      var g = n('YFKU'),
        f = n('Iivm'),
        v = n('R4+T'),
        C = n('uZsJ')
      function S(e) {
        const t = s(C.control, C.controlIncrease),
          n = s(C.control, C.controlDecrease)
        return a.createElement(
          a.Fragment,
          null,
          void 0 !== e.title && a.createElement('div', { className: C.title }, e.title),
          a.createElement(
            'div',
            { className: C.controlWrapper },
            (e.defaultButtonsVisible || e.title) &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  'button',
                  {
                    type: 'button',
                    tabIndex: -1,
                    'aria-label': Object(g.t)('Increase'),
                    className: t,
                    onClick: e.increaseValue,
                  },
                  a.createElement(f.a, { icon: v, className: C.controlIcon })
                ),
                a.createElement(
                  'button',
                  {
                    type: 'button',
                    tabIndex: -1,
                    'aria-label': Object(g.t)('Increase'),
                    className: n,
                    onClick: e.decreaseValue,
                  },
                  a.createElement(f.a, { icon: v, className: C.controlIcon })
                )
              )
          )
        )
      }
      var N = n('8d0Q'),
        E = n('SpAO'),
        k = n('3F0O'),
        y = n('/3z9')
      n.d(t, 'a', function () {
        return O
      })
      const w = [38],
        x = [40]
      function O(e) {
        const [t, n] = Object(N.b)(),
          [r, s] = Object(E.a)(),
          c = Object(k.a)(s.onFocus, e.onFocus),
          l = Object(k.a)(s.onBlur, e.onBlur),
          i = Object(a.useCallback)(
            (t) => {
              !e.disabled &&
                r &&
                (t.preventDefault(), t.deltaY < 0 ? e.onValueByStepChange(1) : e.onValueByStepChange(-1))
            },
            [r, e.disabled, e.onValueByStepChange]
          )
        return o.a.createElement(
          b,
          Object.assign({}, n, {
            name: e.name,
            pattern: e.pattern,
            borderStyle: e.borderStyle,
            fontSizeStyle: e.fontSizeStyle,
            value: e.value,
            className: e.className,
            inputClassName: e.inputClassName,
            button: (function () {
              const { button: n, forceShowControls: a, disabled: s, title: c } = e,
                l = !s && !Modernizr.mobiletouch && (a || r || t)
              return s
                ? void 0
                : o.a.createElement(
                    o.a.Fragment,
                    null,
                    null != n
                      ? n
                      : o.a.createElement(S, { increaseValue: u, decreaseValue: d, defaultButtonsVisible: l, title: c })
                  )
            })(),
            disabled: e.disabled,
            placeholder: e.placeholder,
            innerLabel: e.innerLabel,
            endSlot: e.endSlot,
            containerReference: e.containerReference,
            inputReference: e.inputReference,
            inputMode: e.inputMode,
            type: e.type,
            error: e.error,
            errorMessage: e.errorMessage,
            onClick: e.onClick,
            onFocus: c,
            onBlur: l,
            onChange: e.onValueChange,
            onKeyDown: function (t) {
              if (e.disabled || 0 !== Object(y.modifiersFromEvent)(t.nativeEvent)) return
              let n = w,
                a = x
              e.controlDecKeyCodes && (a = a.concat(e.controlDecKeyCodes))
              e.controlIncKeyCodes && (n = n.concat(e.controlIncKeyCodes))
              ;(a.includes(t.keyCode) || n.includes(t.keyCode)) &&
                (t.preventDefault(), e.onValueByStepChange(a.includes(t.keyCode) ? -1 : 1))
              e.onKeyDown && e.onKeyDown(t)
            },
            onWheelNoPassive: i,
            stretch: e.stretch,
            intent: e.intent,
            highlight: e.highlight,
            highlightRemoveRoundBorder: e.highlightRemoveRoundBorder,
          })
        )
        function u() {
          e.disabled || e.onValueByStepChange(1)
        }
        function d() {
          e.disabled || e.onValueByStepChange(-1)
        }
      }
    },
    'ZgM/': function (e, t, n) {
      e.exports = { innerLabel: 'innerLabel-21h1g6jU' }
    },
    aJjg: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
    },
    eG6P: function (e, t, n) {
      e.exports = { wrap: 'wrap-2tojvhF7' }
    },
    fV0y: function (e, t, n) {
      'use strict'
      var a = n('mrSG'),
        o = n('q1tI'),
        r = n('TSYQ'),
        s = n('0W35'),
        c = n('vCF3'),
        l = n('qibD')
      n('E9Pn')
      class i extends o.PureComponent {
        render() {
          const e = this.props,
            { inputClassName: t, labelClassName: n } = e,
            s = Object(a.a)(e, ['inputClassName', 'labelClassName']),
            i = r(this.props.className, l.checkbox, {
              [l.reverse]: Boolean(this.props.labelPositionReverse),
              [l.baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            u = r(l.label, n, { [l.disabled]: this.props.disabled })
          let d = null
          return (
            this.props.label &&
              (d = o.createElement('span', { className: u, title: this.props.title }, this.props.label)),
            o.createElement('label', { className: i }, o.createElement(c.a, Object.assign({}, s, { className: t })), d)
          )
        }
      }
      i.defaultProps = { value: 'on' }
      Object(s.b)(i)
      n.d(t, 'a', function () {
        return i
      })
    },
    fktV: function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        o = n.n(a),
        r = n('qFKp'),
        s = n('mrSG'),
        c = n('fV0y'),
        l = n('++uw')
      function i(e) {
        const { property: t } = e,
          n = Object(s.a)(e, ['property']),
          [a, r] = Object(l.a)({ property: t })
        return o.a.createElement(
          c.a,
          Object.assign({}, n, {
            name: 'toggle-enabled',
            checked: a,
            onChange: function () {
              r(!a)
            },
          })
        )
      }
      var u = n('xpzh'),
        d = n('vxCt')
      function p(e) {
        const { property: t, disabled: n, title: a, className: s, name: c } = e,
          l = o.a.createElement('span', { className: d.title }, a)
        return o.a.createElement(
          u.a,
          { className: s },
          t &&
            o.a.createElement(i, {
              name: c,
              className: d.checkbox,
              property: t,
              disabled: n,
              label: l,
              labelAlignBaseline: !r.isIE,
            }),
          !t && l
        )
      }
      n.d(t, 'a', function () {
        return p
      })
    },
    qibD: function (e) {
      e.exports = JSON.parse(
        '{"checkbox":"checkbox-3xZUD-2M","reverse":"reverse-3xeTx96y","label":"label-cyItEVpF","baseline":"baseline-6TXKro4X"}'
      )
    },
    uZsJ: function (e, t, n) {
      e.exports = {
        controlWrapper: 'controlWrapper-7ApHzdB4',
        hidden: 'hidden-7ApHzdB4',
        control: 'control-7ApHzdB4',
        controlIncrease: 'controlIncrease-7ApHzdB4',
        controlDecrease: 'controlDecrease-7ApHzdB4',
        controlIcon: 'controlIcon-7ApHzdB4',
        title: 'title-7ApHzdB4',
      }
    },
    vCF3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('q1tI'),
        o = n('TSYQ'),
        r = n('Iivm'),
        s = n('aJjg'),
        c = n('F0Qt')
      n('P4l+')
      function l(e) {
        const t = o(c.box, c['intent-' + e.intent], {
            [c.check]: !e.indeterminate,
            [c.dot]: Boolean(e.indeterminate),
            [c.noOutline]: -1 === e.tabIndex,
          }),
          n = o(c.wrapper, e.className)
        return a.createElement(
          'span',
          { className: n, title: e.title },
          a.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: c.input,
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
          a.createElement('span', { className: t }, a.createElement(r.a, { icon: s, className: c.icon }))
        )
      }
    },
    vxCt: function (e, t, n) {
      e.exports = { checkbox: 'checkbox-FNjK79Y1', title: 'title-FNjK79Y1' }
    },
    xpzh: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        s = n.n(r),
        c = n('eG6P')
      function l(e) {
        return o.a.createElement('div', { className: s()(c.wrap, e.className) }, e.children)
      }
    },
    yqnI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('txPx')
      const o = Object(a.getLogger)('Platform.GUI.PropertyDefinitionTrace')
    },
  },
])
