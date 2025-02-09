;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['drawing-toolbar'],
  {
    '5f7t': function (e, t, o) {
      'use strict'
      o.r(t)
      var i = o('q1tI'),
        n = o.n(i),
        s = o('i8i4'),
        a = o('Eyy1'),
        l = o('YFKU'),
        r = (o('EsMY'), o('TSYQ')),
        c = o.n(r),
        d = o('Vdly'),
        h = o('Kxc7'),
        u = o('mMWL'),
        m = o('zL3Q'),
        b = o('FQhm'),
        p = o('aIyQ'),
        g = o.n(p),
        v = o('qFKp'),
        _ = (o('mNbo'), o('MP+M'))
      class w {
        constructor(e) {
          this._drawingsAccess = e || { tools: [], type: 'black' }
        }
        isToolEnabled(e) {
          const t = this._findTool(e)
          return !(!t || !t.grayed) || ('black' === this._drawingsAccess.type ? !t : !!t)
        }
        isToolGrayed(e) {
          const t = this._findTool(e)
          return Boolean(t && t.grayed)
        }
        _findTool(e) {
          return this._drawingsAccess.tools.find((t) => t.name === e)
        }
      }
      var T = o('/3z9'),
        C = o('+GxX')
      const S = [
        {
          id: 'linetool-group-cursors',
          title: window.t('Cursors'),
          items: [{ name: 'cursor' }, { name: 'dot' }, { name: 'arrow' }, { name: 'eraser' }],
        },
        {
          id: 'linetool-group-trend-line',
          title: window.t('Trend Line Tools'),
          items: [
            { name: 'LineToolTrendLine', hotkeyHash: T.Modifiers.Alt + 84 },
            { name: 'LineToolInfoLine' },
            { name: 'LineToolTrendAngle' },
            null,
            { name: 'LineToolHorzLine', hotkeyHash: T.Modifiers.Alt + 72 },
            { name: 'LineToolHorzRay' },
            { name: 'LineToolVertLine', hotkeyHash: T.Modifiers.Alt + 86 },
            { name: 'LineToolCrossLine', hotkeyHash: T.Modifiers.Alt + 67 },
            { name: 'LineToolArrow' },
            { name: 'LineToolRay' },
            { name: 'LineToolExtended' },
            { name: 'LineToolParallelChannel' },
            { name: 'LineToolDisjointAngle' },
            { name: 'LineToolFlatBottom' },
            null,
          ].filter(Boolean),
        },
        {
          id: 'linetool-group-gann-and-fibonacci',
          title: window.t('Gann and Fibonacci Tools'),
          items: [
            { name: 'LineToolPitchfork' },
            { name: 'LineToolSchiffPitchfork2' },
            { name: 'LineToolSchiffPitchfork' },
            { name: 'LineToolInsidePitchfork' },
            { name: 'LineToolPitchfan' },
            { name: 'LineToolGannSquare' },
            { name: 'LineToolGannComplex' },
            { name: 'LineToolGannFixed' },
            { name: 'LineToolGannFan' },
            { name: 'LineToolFibRetracement', hotkeyHash: T.Modifiers.Alt + 70 },
            { name: 'LineToolTrendBasedFibExtension' },
            { name: 'LineToolFibSpeedResistanceFan' },
            { name: 'LineToolFibTimeZone' },
            { name: 'LineToolTrendBasedFibTime' },
            { name: 'LineToolFibCircles' },
            { name: 'LineToolFibSpiral' },
            { name: 'LineToolFibSpeedResistanceArcs' },
            { name: 'LineToolFibWedge' },
            { name: 'LineToolFibChannel' },
          ],
        },
        {
          id: 'linetool-group-geometric-shapes',
          title: window.t('Geometric Shapes'),
          items: [
            { name: 'LineToolBrush' },
            { name: 'LineToolHighlighter' },
            { name: 'LineToolPath' },
            { name: 'LineToolRectangle' },
            { name: 'LineToolRotatedRectangle' },
            { name: 'LineToolEllipse' },
            { name: 'LineToolTriangle' },
            { name: 'LineToolPolyline' },
            { name: 'LineToolBezierQuadro' },
            { name: 'LineToolBezierCubic' },
            { name: 'LineToolArc' },
          ],
        },
        {
          id: 'linetool-group-annotation',
          title: window.t('Annotation Tools'),
          items: [
            { name: 'LineToolText' },
            { name: 'LineToolTextAbsolute' },
            { name: 'LineToolNote' },
            { name: 'LineToolNoteAbsolute' },
            { name: 'LineToolSignpost' },
            { name: 'LineToolCallout' },
            { name: 'LineToolBalloon' },
            { name: 'LineToolPriceLabel' },
            { name: 'LineToolPriceNote' },
            { name: 'LineToolArrowMarker' },
            { name: 'LineToolArrowMarkLeft' },
            { name: 'LineToolArrowMarkRight' },
            { name: 'LineToolArrowMarkUp' },
            { name: 'LineToolArrowMarkDown' },
            { name: 'LineToolFlagMark' },
          ].filter(Boolean),
        },
        {
          id: 'linetool-group-patterns',
          title: window.t('Patterns'),
          items: [
            { name: 'LineTool5PointsPattern' },
            { name: 'LineToolCypherPattern' },
            { name: 'LineToolABCD' },
            { name: 'LineToolTrianglePattern' },
            { name: 'LineToolThreeDrivers' },
            { name: 'LineToolHeadAndShoulders' },
            { name: 'LineToolElliottImpulse' },
            { name: 'LineToolElliottTriangle' },
            { name: 'LineToolElliottTripleCombo' },
            { name: 'LineToolElliottCorrection' },
            { name: 'LineToolElliottDoubleCombo' },
            { name: 'LineToolCircleLines' },
            { name: 'LineToolTimeCycles' },
            { name: 'LineToolSineLine' },
          ],
        },
        {
          id: 'linetool-group-prediction-and-measurement',
          title: window.t('Prediction and Measurement Tools'),
          items: [
            { name: 'LineToolRiskRewardLong' },
            { name: 'LineToolRiskRewardShort' },
            { name: 'LineToolPrediction' },
            { name: 'LineToolDateRange' },
            { name: 'LineToolPriceRange' },
            { name: 'LineToolDateAndPriceRange' },
            { name: 'LineToolBarsPattern' },
            Object(C.isFeatureEnabled)('remove-line-tool-ghost-feed') ? null : { name: 'LineToolGhostFeed' },
            { name: 'LineToolProjection' },
            null,
          ].filter(Boolean),
        },
      ]
      var y = o('OiSa'),
        f = o('cvc5'),
        k = o('Iivm'),
        O = o('//lZ'),
        D = o('9uLv'),
        E = o('uJ8n'),
        L = o('Vike')
      class M extends n.a.PureComponent {
        constructor(e) {
          super(e),
            (this._scroll = null),
            (this._handleScrollTop = () => {
              this.animateTo(Math.max(0, this.currentPosition() - (this.state.heightWrap - 50)))
            }),
            (this._handleScrollBot = () => {
              this.animateTo(
                Math.min(
                  (this.state.heightContent || 0) - (this.state.heightWrap || 0),
                  this.currentPosition() + (this.state.heightWrap - 50)
                )
              )
            }),
            (this._handleResizeWrap = ({ height: e }) => {
              this.setState({ heightWrap: e })
            }),
            (this._handleResizeContent = ({ height: e }) => {
              this.setState({ heightContent: e })
            }),
            (this._handleScroll = () => {
              const { onScroll: e } = this.props
              e && e(this.currentPosition(), this.isAtTop(), this.isAtBot()), this._checkButtonsVisibility()
            }),
            (this._checkButtonsVisibility = () => {
              const { isVisibleTopButton: e, isVisibleBotButton: t } = this.state,
                o = this.isAtTop(),
                i = this.isAtBot()
              o || e ? o && e && this.setState({ isVisibleTopButton: !1 }) : this.setState({ isVisibleTopButton: !0 }),
                i || t ? i && t && this.setState({ isVisibleBotButton: !1 }) : this.setState({ isVisibleBotButton: !0 })
            }),
            (this.state = { heightContent: 0, heightWrap: 0, isVisibleBotButton: !1, isVisibleTopButton: !1 })
        }
        componentDidMount() {
          this._checkButtonsVisibility()
        }
        componentDidUpdate(e, t) {
          ;(t.heightWrap === this.state.heightWrap && t.heightContent === this.state.heightContent) ||
            this._handleScroll()
        }
        currentPosition() {
          return this._scroll ? this._scroll.scrollTop : 0
        }
        isAtTop() {
          return this.currentPosition() <= 1
        }
        isAtBot() {
          return this.currentPosition() + this.state.heightWrap >= this.state.heightContent - 1
        }
        animateTo(e, t = D.dur) {
          const o = this._scroll
          o &&
            Object(O.doAnimate)({
              onStep(e, t) {
                o.scrollTop = t
              },
              from: o.scrollTop,
              to: Math.round(e),
              easing: D.easingFunc.easeInOutCubic,
              duration: t,
            })
        }
        render() {
          const {
              children: e,
              isVisibleScrollbar: t,
              isVisibleFade: o,
              isVisibleButtons: i,
              onMouseOver: s,
              onMouseOut: a,
            } = this.props,
            { heightContent: l, heightWrap: r, isVisibleBotButton: d, isVisibleTopButton: h } = this.state
          return n.a.createElement(
            f,
            { whitelist: ['height'], onMeasure: this._handleResizeWrap },
            n.a.createElement(
              'div',
              { className: E.wrap, onMouseOver: s, onMouseOut: a },
              n.a.createElement(
                'div',
                {
                  className: c()(E.scrollWrap, { [E.noScrollBar]: !t }),
                  onScroll: this._handleScroll,
                  ref: (e) => (this._scroll = e),
                },
                n.a.createElement(
                  f,
                  { onMeasure: this._handleResizeContent, whitelist: ['height'] },
                  n.a.createElement('div', { className: E.content }, e)
                )
              ),
              o && n.a.createElement('div', { className: c()(E.fadeTop, { [E.isVisible]: h && l > r }) }),
              o && n.a.createElement('div', { className: c()(E.fadeBot, { [E.isVisible]: d && l > r }) }),
              i &&
                n.a.createElement(
                  'div',
                  { className: c()(E.scrollTop, { [E.isVisible]: h && l > r }), onClick: this._handleScrollTop },
                  n.a.createElement(
                    'div',
                    { className: E.iconWrap },
                    n.a.createElement(k.a, { icon: L, className: E.icon })
                  )
                ),
              i &&
                n.a.createElement(
                  'div',
                  { className: c()(E.scrollBot, { [E.isVisible]: d && l > r }), onClick: this._handleScrollBot },
                  n.a.createElement(
                    'div',
                    { className: E.iconWrap },
                    n.a.createElement(k.a, { icon: L, className: E.icon })
                  )
                )
            )
          )
        }
      }
      M.defaultProps = { isVisibleScrollbar: !0 }
      var N = o('lxNp'),
        A = o('tWVy'),
        j = o('4rU7')
      function B(e) {
        const { id: t, action: o, isActive: n, isHidden: s, isTransparent: a, toolName: l } = e
        return i.createElement(j.a, {
          id: t,
          icon: _.a[l].icon,
          isActive: n,
          isHidden: s,
          isTransparent: a,
          onClick: o,
          title: _.a[l].localizedName,
          'data-name': l,
        })
      }
      var V = o('wZIs')
      const W = [
        61536, 61537, 61538, 61539, 61725, 61726, 61575, 61576, 61796, 61797, 61779, 61780, 61781, 61782, 61783, 61784,
        61785, 61786, 61440, 61441, 61442, 61444, 61445, 61446, 61447, 61448, 61452, 61453, 61454, 61456, 61457, 61458,
        61459, 61460, 61461, 61463, 61464, 61466, 61467, 61469, 61470, 61473, 61475, 61476, 61488, 61502, 61504, 61505,
        61507, 61510, 61523, 61524, 61525, 61526, 61527, 61528, 61529, 61530, 61531, 61532, 61533, 61534, 61540, 61541,
        61542, 61543, 61544, 61545, 61546, 61547, 61548, 61550, 61552, 61553, 61554, 61555, 61557, 61558, 61559, 61560,
        61565, 61566, 61568, 61572, 61574, 61578, 61588, 61597, 61601, 61602, 61603, 61604, 61605, 61606, 61607, 61608,
        61609, 61610, 61611, 61616, 61617, 61635, 61648, 61649, 61654, 61655, 61656, 61657, 61658, 61659, 61666, 61667,
        61669, 61670, 61671, 61672, 61673, 61675, 61681, 61682, 61683, 61684, 61696, 61697, 61698, 61699, 61700, 61701,
        61702, 61703, 61704, 61705, 61706, 61707, 61708, 61712, 61713, 61714, 61715, 61720, 61721, 61722, 61731, 61732,
        61736, 61737, 61738, 61746, 61747, 61748, 61749, 61751, 61752, 61753, 61754, 61757, 61758, 61760, 61764, 61768,
        61769, 61770, 61771, 61772, 61773, 61774, 61776, 61777, 61778, 61799, 61811, 61812, 61813, 61814, 61815, 61816,
        61817, 61818, 61819, 61820, 61821, 61826, 61827, 61828, 61829, 61830, 61831, 61832, 61836, 61838, 61840, 61842,
        61845,
      ]
      var P = o('9dlw'),
        F = o('ijHL'),
        x = o('Sn4D'),
        U = o('hn2c'),
        z = o('KmEK')
      class I extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._toggleDropdown = (e) => {
              this.setState({ isOpened: void 0 !== e ? e : !this.state.isOpened })
            }),
            (this._handleClose = () => {
              this._toggleDropdown(!1)
            }),
            (this._getDropdownPosition = () => {
              if (!this._control) return { x: 0, y: 0 }
              const e = this._control.getBoundingClientRect()
              return { x: e.left + e.width + 1, y: e.top - 6 }
            }),
            (this._handleClickArrow = () => {
              this._toggleDropdown()
            }),
            (this._handleTouchStart = () => {
              this.props.onClickButton(), this._toggleDropdown()
            }),
            (this._handlePressStart = () => {
              if (Modernizr.mobiletouch && !this.props.checkable) this._longPressDelay || this.props.onClickButton()
              else {
                if (this._doubleClickDelay)
                  return (
                    clearTimeout(this._doubleClickDelay), delete this._doubleClickDelay, void this._toggleDropdown(!0)
                  )
                this._doubleClickDelay = setTimeout(() => {
                  delete this._doubleClickDelay, this._longPressDelay || this.props.onClickButton()
                }, 175)
              }
              this._longPressDelay = setTimeout(() => {
                delete this._longPressDelay, this._toggleDropdown(!0)
              }, 300)
            }),
            (this._cancelAllTimeouts = () => {
              clearTimeout(this._longPressDelay),
                delete this._longPressDelay,
                clearTimeout(this._doubleClickDelay),
                delete this._doubleClickDelay
            }),
            (this._handleTouchPressEnd = (e) => {
              e.cancelable && e.preventDefault(), this._handlePressEnd()
            }),
            (this._handlePressEnd = () => {
              this._longPressDelay &&
                (clearTimeout(this._longPressDelay),
                delete this._longPressDelay,
                this.state.isOpened
                  ? this._toggleDropdown(!1)
                  : this.props.checkable || this.state.isOpened || !this.props.isActive || Modernizr.mobiletouch
                  ? this._doubleClickDelay || this.props.onClickButton()
                  : this._toggleDropdown(!0))
            }),
            (this.state = { isOpened: !1 })
        }
        render() {
          const {
              buttonActiveClass: e,
              buttonClass: t,
              buttonIcon: o,
              buttonTitle: n,
              buttonHotKey: s,
              dropdownTooltip: a,
              children: l,
              isActive: c,
              isGrayed: d,
              onClickWhenGrayed: h,
              checkable: u,
              isSmallTablet: m,
            } = this.props,
            { isOpened: b } = this.state,
            p = Object(F.b)(this.props)
          return i.createElement(
            'div',
            {
              className: r(z.dropdown, { [z.isGrayed]: d, [z.isActive]: c, [z.isOpened]: b }),
              onClick: d ? h : void 0,
            },
            i.createElement(
              'div',
              Object.assign({}, p, { ref: (e) => (this._control = e), className: z.control }),
              i.createElement(
                'div',
                Object.assign({}, this._getButtonHandlers(), {
                  className: r(z.buttonWrap, { 'apply-common-tooltip common-tooltip-vertical': Boolean(n || s) }),
                  'data-tooltip-hotkey': s,
                  'data-tooltip-delay': 1500,
                  'data-role': 'button',
                  title: n,
                }),
                i.createElement(j.a, {
                  activeClass: e,
                  className: t,
                  icon: o,
                  isActive: c,
                  isGrayed: d,
                  isTransparent: !u,
                })
              ),
              !d &&
                !Modernizr.mobiletouch &&
                i.createElement(
                  'div',
                  {
                    className: r(z.arrow, a && 'apply-common-tooltip common-tooltip-vertical'),
                    title: a,
                    onClick: this._handleClickArrow,
                    'data-role': 'menu-handle',
                  },
                  i.createElement(k.a, { className: z.arrowIcon, icon: U })
                )
            ),
            !d &&
              (m
                ? b && i.createElement(x.a, { onClose: this._handleClose, position: 'Bottom' }, l)
                : i.createElement(
                    P.a,
                    {
                      doNotCloseOn: this,
                      isOpened: b,
                      onClose: this._handleClose,
                      position: this._getDropdownPosition,
                    },
                    l
                  ))
          )
        }
        _getButtonHandlers() {
          const { isGrayed: e, checkable: t } = this.props
          return e
            ? {}
            : Modernizr.mobiletouch
            ? t
              ? {
                  onTouchStart: this._handlePressStart,
                  onTouchEnd: this._handleTouchPressEnd,
                  onTouchMove: this._cancelAllTimeouts,
                }
              : { onClick: this._handleTouchStart }
            : { onMouseDown: this._handlePressStart, onMouseUp: this._handlePressEnd }
        }
      }
      var R = o('KKsp'),
        G = o('EA32')
      const H = { icon: window.t('Icon'), dropdownTooltip: window.t('Icons') }
      class K extends i.Component {
        constructor(e) {
          super(e),
            (this._renderItem = (e, t) => {
              const { isSmallTablet: o } = this.props,
                n = c()(
                  G.item,
                  o && G.smallTablet,
                  t && o && this.state.isActive && e === this.state.current && G.active
                )
              return i.createElement(
                'div',
                {
                  className: n,
                  key: e,
                  onClick: () => {
                    this._handleSelect(e), Object(A.b)()
                  },
                },
                String.fromCharCode(e)
              )
            }),
            (this._onChangeDrawingState = () => {
              this.setState({ isActive: this._isActive() })
            }),
            (this._handleSelect = (e) => {
              Object(V.saveDefaults)(
                'linetoolicon',
                Object.assign(Object.assign({}, Object(V.defaults)('linetoolicon')), { icon: e })
              ),
                u.iconTool.setValue(e),
                u.tool.setValue('LineToolIcon')
              let { recents: t } = this.state
              const o = t.indexOf(e)
              ;-1 !== o && t.splice(o, 1),
                (t = [e, ...t.slice(0, 9)]),
                Object(d.setJSON)('linetoolicon.recenticons', t),
                this.setState({ current: e, recents: t })
            }),
            (this.state = {
              current: Object(V.defaults)('linetoolicon').icon,
              recents: Object(d.getJSON)('linetoolicon.recenticons') || [],
            })
        }
        componentDidMount() {
          u.tool.subscribe(this._onChangeDrawingState), d.onSync.subscribe(this, this._onSyncSettings)
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChangeDrawingState), d.onSync.unsubscribe(this, this._onSyncSettings)
        }
        render() {
          const { isGrayed: e, toolName: t, isSmallTablet: o } = this.props,
            { current: n, isActive: s, recents: a } = this.state,
            l = Object(F.b)(this.props),
            r = c()(G.wrap, o && G.smallTablet)
          return i.createElement(
            I,
            Object.assign(
              {
                buttonClass: G.button,
                buttonIcon: i.createElement('div', { className: G.buttonIcon }, String.fromCharCode(n || W[0])),
                buttonTitle: H.icon,
                dropdownTooltip: H.dropdownTooltip,
                isActive: s,
                isGrayed: e,
                isSmallTablet: o,
                onClickButton: () => this._handleSelect(n || W[0]),
                onClickWhenGrayed: () =>
                  Object(b.emit)('onGrayedObjectClicked', { type: 'drawing', name: _.a[t].localizedName }),
              },
              l
            ),
            a &&
              i.createElement(
                i.Fragment,
                null,
                o && i.createElement('div', { className: G.title }, window.t('Recently used')),
                i.createElement(
                  'div',
                  { className: r },
                  a.map((e) => this._renderItem(e, !0))
                ),
                i.createElement(R.a, { className: c()(o && G.separator) })
              ),
            i.createElement(
              'div',
              { key: 'all', className: r },
              W.map((e) => this._renderItem(e))
            )
          )
        }
        _isActive() {
          return u.tool.value() === this.props.toolName
        }
        _onSyncSettings() {
          this.setState({ recents: Object(d.getJSON)('linetoolicon.recenticons') })
        }
      }
      var q = o('Ocx9')
      class Y extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              this.props.saveDefaultOnChange && Object(q.saveDefaultProperties)(!0)
              const e = !this.props.property.value()
              this.props.property.setValue(e),
                this.props.saveDefaultOnChange && Object(q.saveDefaultProperties)(!1),
                this.props.onClick && this.props.onClick(e)
            }),
            (this.state = { isActive: this.props.property.value() })
        }
        componentDidMount() {
          this.props.property.subscribe(this, this._onChange)
        }
        componentWillUnmount() {
          this.props.property.unsubscribe(this, this._onChange)
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = _.a[e]
          return i.createElement(j.a, {
            icon: t && o.iconActive ? o.iconActive : o.icon,
            isActive: t,
            onClick: this._handleClick,
            title: o.localizedName,
            buttonHotKey: o.hotKey,
            'data-name': e,
          })
        }
        _onChange(e) {
          this.setState({ isActive: e.value() })
        }
      }
      class J extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              u.tool.setValue(this.props.toolName)
            }),
            (this._onChange = () => {
              this.setState({ isActive: u.tool.value() === this.props.toolName })
            }),
            (this.state = { isActive: u.tool.value() === this.props.toolName })
        }
        componentDidMount() {
          u.tool.subscribe(this._onChange)
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChange)
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = _.a[e]
          return i.createElement(j.a, {
            icon: _.a[e].icon,
            isActive: t,
            isTransparent: !0,
            onClick: this._handleClick,
            title: o.localizedName,
            buttonHotKey: o.hotKey,
            'data-name': e,
          })
        }
      }
      class Q extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._boundUndoModel = null),
            (this._handleClick = () => {
              const e = this._activeChartWidget().model()
              e && e.zoomFromViewport()
            }),
            (this._syncUnzoomButton = () => {
              const e = this._activeChartWidget(),
                t = e.model()
              let o = !1
              t
                ? (this._boundUndoModel !== t &&
                    (this._boundUndoModel &&
                      this._boundUndoModel.zoomStack().onChange().unsubscribe(null, this._syncUnzoomButton),
                    t.zoomStack().onChange().subscribe(null, this._syncUnzoomButton),
                    (this._boundUndoModel = t)),
                  (o = !t.zoomStack().isEmpty()))
                : e.withModel(null, this._syncUnzoomButton),
                this.setState({ isVisible: o })
            }),
            (this.state = { isVisible: !1 })
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(this._syncUnzoomButton, { callWithLast: !0 })
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._syncUnzoomButton)
        }
        render() {
          return this.state.isVisible
            ? i.createElement(B, { action: this._handleClick, isTransparent: !0, toolName: 'zoom-out' })
            : i.createElement('div', null)
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value()
        }
      }
      var X = o('b2d7'),
        Z = o('pr86'),
        $ = o('N5tr'),
        ee = o('dhVi')
      class te extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._onChangeDrawingState = () => {
              const e = this._getActiveToolIndex()
              this.setState({ current: -1 !== e ? e : this.state.current, isActive: -1 !== e })
            }),
            (this._handleClickButton = () => {
              if (v.CheckMobile.any()) return
              const e = this._getCurrentToolName()
              this._selectTool(e)
            }),
            (this._handleClickItem = (e) => {
              this._selectTool(e)
            }),
            (this._handleGrayedClick = (e) => {
              Object(b.emit)('onGrayedObjectClicked', { type: 'drawing', name: _.a[e].localizedName })
            }),
            (this._handleClickFavorite = (e) => {
              this.state.favState && this.state.favState[e] ? X.a.removeFavorite(e) : X.a.addFavorite(e)
            }),
            (this._onAddFavorite = (e) => {
              this.setState({ favState: Object.assign(Object.assign({}, this.state.favState), { [e]: !0 }) })
            }),
            (this._onRemoveFavorite = (e) => {
              this.setState({ favState: Object.assign(Object.assign({}, this.state.favState), { [e]: !1 }) })
            }),
            (this._onSyncFavorites = () => {
              this.setState({ favState: this._composeFavState() })
            })
          const t = this._getActiveToolIndex()
          this.state = {
            current: -1 === t ? this._firstNonGrayedTool() : t,
            favState: this._composeFavState(),
            isActive: -1 !== t,
          }
        }
        componentDidMount() {
          u.tool.subscribe(this._onChangeDrawingState),
            X.a.favoriteAdded.subscribe(null, this._onAddFavorite),
            X.a.favoriteRemoved.subscribe(null, this._onRemoveFavorite),
            X.a.favoritesSynced.subscribe(null, this._onSyncFavorites)
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChangeDrawingState),
            X.a.favoriteAdded.unsubscribe(null, this._onAddFavorite),
            X.a.favoriteRemoved.unsubscribe(null, this._onRemoveFavorite),
            X.a.favoritesSynced.unsubscribe(null, this._onSyncFavorites)
        }
        componentDidUpdate(e, t) {
          e.lineTools !== this.props.lineTools && this.setState({ favState: this._composeFavState() })
        }
        render() {
          const { favoriting: e, grayedTools: t, lineTools: o, dropdownTooltip: n, isSmallTablet: s } = this.props,
            { current: a, favState: l, isActive: r } = this.state,
            c = this._getCurrentToolName(),
            d = _.a[c],
            h = this._showShortcuts(),
            u = Object(F.b)(this.props)
          return i.createElement(
            'span',
            null,
            i.createElement(
              I,
              Object.assign(
                {
                  buttonIcon: d.icon,
                  buttonTitle: d.localizedName,
                  buttonHotKey: d.hotKey,
                  dropdownTooltip: n,
                  isActive: r,
                  onClickButton: this._handleClickButton,
                  isSmallTablet: s,
                },
                u
              ),
              o.map((o, n) => {
                const c = o.name,
                  d = _.a[c],
                  u = t[c]
                return i.createElement($.b, {
                  key: c,
                  'data-name': o.name,
                  theme: s ? ee.a : void 0,
                  dontClosePopup: u,
                  forceShowShortcuts: h,
                  shortcut: !s && o.hotkeyHash ? Object(T.humanReadableHash)(o.hotkeyHash) : void 0,
                  icon: d.icon,
                  isActive: r && a === n,
                  appearAsDisabled: u,
                  label: d.localizedName,
                  onClick: u ? this._handleGrayedClick : this._handleClickItem,
                  onClickArg: c,
                  showToolboxOnHover: !l[c],
                  toolbox:
                    e && !u
                      ? i.createElement(Z.a, {
                          isActive: r && a === n,
                          isFilled: l[c],
                          onClick: () => this._handleClickFavorite(c),
                        })
                      : void 0,
                })
              })
            )
          )
        }
        _getCurrentToolName() {
          const { current: e } = this.state,
            { lineTools: t } = this.props
          return t[e || 0].name
        }
        _firstNonGrayedTool() {
          const { grayedTools: e, lineTools: t } = this.props
          return t.findIndex((t) => !e[t.name])
        }
        _getActiveToolIndex() {
          return this.props.lineTools.findIndex((e) => e.name === u.tool.value())
        }
        _showShortcuts() {
          return this.props.lineTools.some((e) => 'shortcut' in e)
        }
        _selectTool(e) {
          u.tool.setValue(e)
        }
        _composeFavState() {
          const e = {}
          return (
            this.props.lineTools.forEach((t) => {
              e[t.name] = X.a.isFavorite(t.name)
            }),
            e
          )
        }
      }
      var oe = o('JWMC'),
        ie = o('nPPD'),
        ne = o('FTBN')
      const se = Object(ie.a)($.a, ne),
        ae = {
          all: window.t('Remove Drawings & Indicators'),
          drawings: window.t('Remove Drawings'),
          studies: window.t('Remove Indicators'),
        }
      class le extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleRemoveToolClick = () => {
              Modernizr.mobiletouch || this._handleRemoveDrawings()
            }),
            (this._handleRemoveDrawings = () => {
              Object(oe.trackEvent)('GUI', 'Chart Left Toolbar', 'remove drawing'),
                this.props.chartWidgetCollection.activeChartWidget.value().removeAllDrawingTools()
            }),
            (this._handleRemoveStudies = () => {
              Object(oe.trackEvent)('GUI', 'Chart Left Toolbar', 'remove indicator'),
                this.props.chartWidgetCollection.activeChartWidget.value().removeAllStudies()
            }),
            (this._handleRemoveAll = () => {
              Object(oe.trackEvent)('GUI', 'Chart Left Toolbar', 'remove all'),
                this.props.chartWidgetCollection.activeChartWidget.value().removeAllStudiesDrawingTools()
            })
        }
        render() {
          const e = this.props.isSmallTablet ? se : void 0
          return i.createElement(
            I,
            {
              buttonIcon: _.a[this.props.toolName].icon,
              buttonTitle: ae.drawings,
              onClickButton: this._handleRemoveToolClick,
              isSmallTablet: this.props.isSmallTablet,
              'data-name': this.props.toolName,
            },
            i.createElement($.b, {
              'data-name': 'remove-drawing-tools',
              label: ae.drawings,
              onClick: this._handleRemoveDrawings,
              theme: e,
            }),
            i.createElement($.b, {
              'data-name': 'remove-studies',
              label: ae.studies,
              onClick: this._handleRemoveStudies,
              theme: e,
            }),
            i.createElement($.b, { 'data-name': 'remove-all', label: ae.all, onClick: this._handleRemoveAll, theme: e })
          )
        }
      }
      var re = o('Ijvb')
      function ce(e) {
        const { hideDrawingsProperty: t, hideIndicatorsProperty: o, isSmallTablet: s } = e,
          [a, r] = Object(i.useState)(() => d.getValue('ChartToolsHideMode', 'drawings')),
          [c, h] = Object(i.useState)(() => t.value()),
          [u, m] = Object(i.useState)(() => o.value())
        Object(i.useEffect)(() => {
          const e = v('drawings', h),
            i = v('indicators', m)
          return (
            t.subscribe(null, e),
            o.subscribe(null, i),
            () => {
              t.unsubscribe(null, e), o.unsubscribe(null, i)
            }
          )
        }, [])
        const b = _.a.hideAllDrawings,
          p = c || u,
          g = s ? se : void 0
        return n.a.createElement(
          I,
          {
            buttonIcon: (function () {
              switch (a) {
                case 'drawings':
                  return c ? re.a.hideAllDrawingToolsActive : re.a.hideAllDrawingTools
                case 'indicators':
                  return u ? re.a.hideAllIndicatorsActive : re.a.hideAllIndicators
                default:
                  return c && u ? re.a.hideAllDrawingsActive : re.a.hideAllDrawings
              }
            })(),
            buttonTitle: (function () {
              switch (a) {
                case 'drawings':
                  return p ? Object(l.t)('Show all drawings') : Object(l.t)('Hide all drawings')
                case 'indicators':
                  return p ? Object(l.t)('Show all indicators') : Object(l.t)('Hide all indicators')
                default:
                  return p
                    ? Object(l.t)('Show all drawings and indicators')
                    : Object(l.t)('Hide all drawings and indicators')
              }
            })(),
            buttonHotKey: b.hotKey,
            onClickButton: function () {
              switch (a) {
                case 'drawings':
                  de(t)
                  break
                case 'indicators':
                  de(o)
                  break
                default:
                  de(t), de(o)
              }
            },
            isSmallTablet: s,
            isActive: p,
            checkable: !0,
            'data-name': 'hide-all',
            'data-type': {
              drawings: 'hide-drawing-tools',
              indicators: 'hide-indicators',
              all: 'hide-drawings-and-indicators',
            }[a],
          },
          n.a.createElement($.b, {
            label: Object(l.t)('Hide drawings'),
            isActive: c && !u,
            onClick: function () {
              const e = 'all' === a || !c
              o.setValue(!1), t.setValue(e), w('drawings'), he('hide drawings', e)
            },
            'data-name': 'hide-drawing-tools',
            theme: g,
          }),
          n.a.createElement($.b, {
            label: Object(l.t)('Hide indicators'),
            isActive: !c && u,
            onClick: function () {
              const e = 'all' === a || !u
              t.setValue(!1), o.setValue(e), w('indicators'), he('hide indicators', e)
            },
            'data-name': 'hide-indicators',
            theme: g,
          }),
          n.a.createElement($.b, {
            label: Object(l.t)('Hide drawings & indicators'),
            isActive: c && u,
            onClick: function () {
              const e = !(c && u)
              t.setValue(e), o.setValue(e), w('all'), he('hide drawings and indicators', e)
            },
            'data-name': 'hide-drawings-and-indicators',
            theme: g,
          })
        )
        function v(e, t) {
          return (e) => t(e.value())
        }
        function w(e) {
          r(e), d.setValue('ChartToolsHideMode', e)
        }
      }
      function de(e) {
        e.setValue(!e.value())
      }
      function he(e, t) {
        Object(oe.trackEvent)('GUI', 'Chart Left Toolbar', `${e} ${t ? 'on' : 'off'}`)
      }
      var ue = o('g5Qf'),
        me = o('85c9')
      const be = window.t('Show Favorite Drawing Tools Toolbar')
      class pe extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._instance = null),
            (this._promise = null),
            (this._bindedForceUpdate = () => this.forceUpdate()),
            (this._handleClick = () => {
              null !== this._instance && (this._instance.isVisible() ? this._instance.hide() : this._instance.show())
            })
        }
        componentDidMount() {
          const e = (this._promise = Object(a.ensureNotNull)(Object(ue.getFavoriteDrawingToolbarPromise)()))
          e.then((t) => {
            this._promise === e &&
              ((this._instance = t),
              this._instance.canBeShown().subscribe(this._bindedForceUpdate),
              this._instance.visibility().subscribe(this._bindedForceUpdate),
              this.forceUpdate())
          })
        }
        componentWillUnmount() {
          ;(this._promise = null),
            null !== this._instance &&
              (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate),
              this._instance.visibility().unsubscribe(this._bindedForceUpdate),
              (this._instance = null))
        }
        render() {
          return null !== this._instance && this._instance.canBeShown().value()
            ? i.createElement(j.a, {
                id: this.props.id,
                icon: me,
                isActive: this._instance.isVisible(),
                onClick: this._handleClick,
                title: be,
              })
            : null
        }
      }
      var ge,
        ve = o('4o++')
      !(function (e) {
        ;(e.Screenshot = 'drawing-toolbar-screenshot'),
          (e.FavoriteDrawings = 'drawing-toolbar-favorite-drawings'),
          (e.ObjectTree = 'drawing-toolbar-object-tree')
      })(ge || (ge = {}))
      var _e = o('8d0Q'),
        we = o('XAms'),
        Te = o('7RN7'),
        Ce = o('X0gx'),
        Se = o('Wz44')
      const ye = Se,
        fe = 'http://www.w3.org/2000/svg'
      function ke(e) {
        const { direction: t, theme: o = Se } = e
        return i.createElement(
          'svg',
          {
            xmlns: fe,
            width: '9',
            height: '27',
            viewBox: '0 0 9 27',
            className: r(o.container, 'right' === t ? o.mirror : null),
            onContextMenu: we.a,
          },
          i.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            i.createElement('path', {
              className: o.background,
              d: 'M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z',
            }),
            i.createElement('path', { className: o.arrow, d: 'M5.5 10l-2 3.5 2 3.5' })
          )
        )
      }
      var Oe = o('ybOa')
      const De = Object(ie.a)(ye, Oe),
        Ee = { hide: window.t('Hide Drawings Toolbar'), show: window.t('Show Drawings Toolbar') }
      class Le extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._toggleVisibility = () => {
              y.isDrawingToolbarVisible.setValue(!y.isDrawingToolbarVisible.value())
            })
        }
        render() {
          const { toolbarVisible: e } = this.props
          return i.createElement(
            'div',
            {
              className: r(De.toggleButton, 'apply-common-tooltip common-tooltip-vertical', !e && De.collapsed),
              onClick: this._toggleVisibility,
              title: e ? Ee.hide : Ee.show,
            },
            i.createElement(ke, { direction: e ? 'left' : 'right', theme: e ? void 0 : De })
          )
        }
      }
      var Me = o('mkWe'),
        Ne = o('uhCe'),
        Ae = o('/KDZ')
      const je = { chartWidgetCollection: o('17x9').any.isRequired }
      var Be = o('1TxM'),
        Ve = o('JQKp')
      const We = { weakMagnet: window.t('Weak Magnet'), strongMagnet: window.t('Strong Magnet') },
        Pe = Object(v.onWidget)(),
        Fe = new g.a(),
        xe = oe.trackEvent.bind(null, 'GUI', 'Chart Left Toolbar'),
        Ue = (e, t) => xe(`${e} ${t ? 'on' : 'off'}`)
      function ze() {
        const e = !u.properties().childs().magnet.value()
        Ue('magnet mode', e),
          Object(q.saveDefaultProperties)(!0),
          u.properties().childs().magnet.setValue(e),
          Object(q.saveDefaultProperties)(!1)
      }
      function Ie() {
        Object(oe.trackEvent)('GUI', 'Magnet mode', 'Weak'),
          Object(q.saveDefaultProperties)(!0),
          u.properties().childs().magnetMode.setValue(ve.MagnetMode.WeakMagnet),
          u.properties().childs().magnet.setValue(!0),
          Object(q.saveDefaultProperties)(!1)
      }
      function Re() {
        Object(oe.trackEvent)('GUI', 'Magnet mode', 'Strong'),
          Object(q.saveDefaultProperties)(!0),
          u.properties().childs().magnetMode.setValue(ve.MagnetMode.StrongMagnet),
          u.properties().childs().magnet.setValue(!0),
          Object(q.saveDefaultProperties)(!1)
      }
      class Ge extends i.PureComponent {
        constructor(e) {
          var t
          super(e),
            (this._grayedTools = {}),
            (this._handleDrawingClick = (e) => {
              Ue('drawing mode', e)
            }),
            (this._handleLockClick = (e) => {
              Ue('lock all drawing', e)
            }),
            (this._handleSyncClick = (e) => {
              Ue('sync', e)
            }),
            (this._handleMouseOver = (e) => {
              Object(_e.a)(e) && this.setState({ isHovered: !0 })
            }),
            (this._handleMouseOut = (e) => {
              Object(_e.a)(e) && this.setState({ isHovered: !1 })
            }),
            (this._handleChangeVisibility = (e) => {
              this.setState({ isVisible: e })
            }),
            (this._handleEsc = () => {
              u.resetToCursor(!0)
            }),
            (this._updateMagnetEnabled = () => {
              const e = { magnet: Object(m.a)().value() }
              this.setState(e)
            }),
            (this._updateMagnetMode = () => {
              const e = { magnetMode: Object(m.b)().value() }
              this.setState(e)
            }),
            (this._handleWidgetbarSettled = (e) => {
              var t
              this.setState({
                isWidgetbarVisible: null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value(),
                widgetbarSettled: e,
              })
            }),
            (this._handleWidgetbarVisible = (e) => {
              this.setState({ isWidgetbarVisible: e })
            }),
            u.init(),
            (this._toolsFilter = new w(this.props.drawingsAccess)),
            (this._filteredLineTools = S.map((e) => ({
              id: e.id,
              title: e.title,
              items: e.items.filter((e) => this._toolsFilter.isToolEnabled(_.a[e.name].localizedName)),
            })).filter((e) => 0 !== e.items.length)),
            this._filteredLineTools.forEach((e) =>
              e.items.forEach((e) => {
                this._grayedTools[e.name] = this._toolsFilter.isToolGrayed(_.a[e.name].localizedName)
              })
            ),
            (this.state = {
              isHovered: !1,
              isVisible: y.isDrawingToolbarVisible.value(),
              isWidgetbarVisible: Boolean(
                null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value()
              ),
              widgetbarSettled: void 0 !== window.widgetbar,
              magnet: u.properties().childs().magnet.value(),
              magnetMode: u.properties().childs().magnetMode.value(),
            }),
            (this._features = {
              favoriting: !Pe && h.enabled('items_favoriting'),
              multicharts: h.enabled('support_multicharts'),
              tools: !Pe || h.enabled('charting_library_base'),
            }),
            (this._registry = { chartWidgetCollection: this.props.chartWidgetCollection }),
            this._negotiateResizer()
        }
        componentDidMount() {
          var e
          y.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility),
            A.a.subscribe(this, this._handleGlobalClose),
            Object(m.a)().subscribe(this._updateMagnetEnabled),
            Object(m.b)().subscribe(this._updateMagnetMode),
            (this._tool = u.tool.spawn()),
            this._tool.subscribe(this._updateHotkeys.bind(this)),
            this._initHotkeys(),
            this.props.widgetbarSettled &&
              (this.props.widgetbarSettled.subscribe(this, this._handleWidgetbarSettled),
              v.CheckMobile.any() &&
                (null === (e = window.widgetbar) ||
                  void 0 === e ||
                  e.visible().subscribe(this._handleWidgetbarVisible)))
        }
        componentWillUnmount() {
          var e
          null === (e = window.widgetbar) || void 0 === e || e.visible().unsubscribe(this._handleWidgetbarVisible),
            y.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility),
            A.a.unsubscribe(this, this._handleGlobalClose),
            Object(m.a)().unsubscribe(this._updateMagnetEnabled),
            Object(m.b)().unsubscribe(this._updateMagnetMode),
            this._tool.destroy(),
            this._hotkeys.destroy()
        }
        componentDidUpdate(e, t) {
          var o
          const { isVisible: i, widgetbarSettled: n } = this.state
          i !== t.isVisible &&
            (b.emit('toggle_sidebar', !i),
            d.setValue('ChartDrawingToolbarWidget.visible', i),
            this._negotiateResizer()),
            t.widgetbarSettled !== n &&
              n &&
              v.CheckMobile.any() &&
              (null === (o = window.widgetbar) || void 0 === o || o.visible().subscribe(this._handleWidgetbarVisible))
        }
        render() {
          const { bgColor: e, chartWidgetCollection: t, readOnly: o } = this.props,
            { isHovered: n, isVisible: s, magnet: a, magnetMode: l } = this.state,
            c = { backgroundColor: e && '#' + e }
          let d
          d = i.createElement(Le, { toolbarVisible: s })
          const m = () => !!this._features.tools && !!h.enabled('show_object_tree')
          return i.createElement(
            Be.a,
            { validation: je, value: this._registry },
            i.createElement(
              Ce.a.Provider,
              { value: Fe },
              i.createElement(
                Me.b,
                null,
                i.createElement(Ae.a, { rule: Ne.a.TabletSmall }, (e) =>
                  i.createElement(
                    'div',
                    {
                      id: 'drawing-toolbar',
                      className: r(Ve.drawingToolbar, { [Ve.isHidden]: !s }),
                      style: c,
                      onClick: this.props.onClick,
                      onContextMenu: we.b,
                    },
                    i.createElement(
                      M,
                      {
                        onScroll: this._handleGlobalClose,
                        isVisibleFade: Modernizr.mobiletouch,
                        isVisibleButtons: !Modernizr.mobiletouch && n,
                        isVisibleScrollbar: !1,
                        onMouseOver: this._handleMouseOver,
                        onMouseOut: this._handleMouseOut,
                      },
                      i.createElement(
                        'div',
                        { className: Ve.inner },
                        !o &&
                          i.createElement(
                            'div',
                            { className: Ve.group, style: c },
                            this._filteredLineTools.map((o, n) =>
                              i.createElement(te, {
                                'data-name': o.id,
                                chartWidgetCollection: t,
                                favoriting: this._features.favoriting,
                                grayedTools: this._grayedTools,
                                key: n,
                                dropdownTooltip: o.title,
                                lineTools: o.items,
                                isSmallTablet: e,
                              })
                            ),
                            this._toolsFilter.isToolEnabled('Font Icons') &&
                              i.createElement(K, {
                                'data-name': 'linetool-group-font-icons',
                                isGrayed: this._grayedTools['Font Icons'],
                                toolName: 'LineToolIcon',
                                isSmallTablet: e,
                              })
                          ),
                        !o &&
                          i.createElement(
                            'div',
                            { className: Ve.group, style: c },
                            i.createElement(J, { toolName: 'measure' }),
                            i.createElement(J, { toolName: 'zoom' }),
                            i.createElement(Q, { chartWidgetCollection: t })
                          ),
                        !o &&
                          i.createElement(
                            'div',
                            { className: Ve.group, style: c },
                            i.createElement(
                              I,
                              {
                                'data-name': 'magnet-button',
                                buttonIcon: l === ve.MagnetMode.StrongMagnet ? re.a.strongMagnet : re.a.magnet,
                                buttonTitle: _.a.magnet.localizedName,
                                isActive: a,
                                onClickButton: ze,
                                buttonHotKey: _.a.magnet.hotKey,
                                checkable: !0,
                                isSmallTablet: e,
                              },
                              i.createElement($.b, {
                                key: 'weakMagnet',
                                className: e ? Ve.popupMenuItem : void 0,
                                'data-name': 'weakMagnet',
                                icon: re.a.magnet,
                                isActive: a && l !== ve.MagnetMode.StrongMagnet,
                                label: We.weakMagnet,
                                onClick: Ie,
                              }),
                              i.createElement($.b, {
                                key: 'strongMagnet',
                                className: e ? Ve.popupMenuItem : void 0,
                                'data-name': 'strongMagnet',
                                icon: re.a.strongMagnet,
                                isActive: a && l === ve.MagnetMode.StrongMagnet,
                                label: We.strongMagnet,
                                onClick: Re,
                              })
                            ),
                            this._features.tools &&
                              i.createElement(Y, {
                                property: u.properties().childs().stayInDrawingMode,
                                saveDefaultOnChange: !0,
                                toolName: 'drawginmode',
                                onClick: this._handleDrawingClick,
                              }),
                            this._features.tools &&
                              i.createElement(Y, {
                                property: u.lockDrawings(),
                                toolName: 'lockAllDrawings',
                                onClick: this._handleLockClick,
                              }),
                            this._features.tools &&
                              i.createElement(ce, {
                                isSmallTablet: e,
                                hideDrawingsProperty: u.hideAllDrawings(),
                                hideIndicatorsProperty: u.hideAllIndicators(),
                              }),
                            !1
                          ),
                        !o &&
                          this._features.tools &&
                          i.createElement(
                            'div',
                            { className: Ve.group, style: c },
                            i.createElement(le, {
                              chartWidgetCollection: t,
                              isSmallTablet: e,
                              toolName: 'removeAllDrawingTools',
                            })
                          ),
                        i.createElement('div', { className: Ve.fill, style: c }),
                        !o &&
                          (this._features.tools || !1) &&
                          i.createElement(
                            'div',
                            { className: r(Ve.group, Ve.lastGroup), style: c },
                            !1,
                            this._features.tools &&
                              this._features.favoriting &&
                              i.createElement(pe, { id: ge.FavoriteDrawings }),
                            m() &&
                              i.createElement(B, {
                                id: ge.ObjectTree,
                                action: () => this._activeChartWidget().showObjectsTreeDialog(),
                                toolName: 'showObjectsTree',
                              })
                          )
                      )
                    ),
                    d
                  )
                )
              )
            )
          )
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value()
        }
        _negotiateResizer() {
          const e = Te.a
          this.props.resizerBridge.negotiateWidth(this.state.isVisible ? Te.b : e)
        }
        _handleGlobalClose() {
          Fe.fire()
        }
        _updateHotkeys() {
          this._hotkeys.promote()
        }
        _initHotkeys() {
          ;(this._hotkeys = N.createGroup({ desc: 'Drawing Toolbar' })),
            this._hotkeys.add({
              desc: 'Reset',
              hotkey: 27,
              handler: () => this._handleEsc(),
              isDisabled: () => u.toolIsCursor(u.tool.value()),
            })
        }
      }
      o.d(t, 'DrawingToolbarRenderer', function () {
        return He
      })
      class He {
        constructor(e, t) {
          ;(this._component = null),
            (this._handleRef = (e) => {
              this._component = e
            }),
            (this._container = e),
            s.render(i.createElement(Ge, Object.assign({}, t, { ref: this._handleRef })), this._container)
        }
        destroy() {
          s.unmountComponentAtNode(this._container)
        }
        getComponent() {
          return Object(a.ensureNotNull)(this._component)
        }
      }
    },
    '85c9': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>'
    },
    EA32: function (e, t, o) {
      e.exports = {
        wrap: 'wrap-2qy9YC6D',
        smallTablet: 'smallTablet-2qy9YC6D',
        buttonIcon: 'buttonIcon-2qy9YC6D',
        item: 'item-2qy9YC6D',
        hovered: 'hovered-2qy9YC6D',
        active: 'active-2qy9YC6D',
        title: 'title-2qy9YC6D',
        separator: 'separator-2qy9YC6D',
        button: 'button-2qy9YC6D',
      }
    },
    FTBN: function (e, t, o) {
      e.exports = { item: 'item-3NgvBqLJ', label: 'label-3NgvBqLJ' }
    },
    JQKp: function (e, t, o) {
      e.exports = {
        drawingToolbar: 'drawingToolbar-2_so5thS',
        isHidden: 'isHidden-2_so5thS',
        inner: 'inner-2_so5thS',
        popupMenuItem: 'popupMenuItem-2_so5thS',
        group: 'group-2_so5thS',
        noGroupPadding: 'noGroupPadding-2_so5thS',
        lastGroup: 'lastGroup-2_so5thS',
        fill: 'fill-2_so5thS',
        separator: 'separator-2_so5thS',
      }
    },
    KmEK: function (e, t, o) {
      e.exports = {
        dropdown: 'dropdown-191zO2Od',
        buttonWrap: 'buttonWrap-191zO2Od',
        control: 'control-191zO2Od',
        arrow: 'arrow-191zO2Od',
        arrowIcon: 'arrowIcon-191zO2Od',
        isOpened: 'isOpened-191zO2Od',
        hover: 'hover-191zO2Od',
        isGrayed: 'isGrayed-191zO2Od',
      }
    },
    Sn4D: function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return b
      })
      var i = o('q1tI'),
        n = o.n(i),
        s = o('Eyy1'),
        a = o('TSYQ'),
        l = o('x0D+'),
        r = o('Nkvk'),
        c = o('AiMB'),
        d = o('mkWe'),
        h = o('qFKp'),
        u = o('X0gx'),
        m = o('sHQ4')
      function b(e) {
        const { position: t, onClose: o, children: b, className: p, theme: g = m } = e,
          v = Object(s.ensureNotNull)(Object(i.useContext)(d.a)),
          [_, w] = Object(i.useState)(0),
          T = Object(i.useRef)(null),
          C = Object(i.useContext)(u.a)
        return (
          Object(i.useEffect)(() => {
            var e
            return (
              null === (e = T.current) || void 0 === e || e.focus({ preventScroll: !0 }),
              C.subscribe(v, o),
              Object(r.setFixedBodyState)(!0),
              h.CheckMobile.iOS() && Object(l.disableBodyScroll)(Object(s.ensureNotNull)(T.current)),
              w(v.addDrawer()),
              () => {
                C.unsubscribe(v, o)
                const e = v.removeDrawer()
                h.CheckMobile.iOS() && Object(l.enableBodyScroll)(Object(s.ensureNotNull)(T.current)),
                  0 === e && Object(r.setFixedBodyState)(!1)
              }
            )
          }, []),
          n.a.createElement(
            c.a,
            null,
            n.a.createElement(
              'div',
              { className: a(m.wrap, m['position' + t]) },
              _ === v.currentDrawer && n.a.createElement('div', { className: m.backdrop, onClick: o }),
              n.a.createElement(
                'div',
                {
                  className: a(m.drawer, g.drawer, m['position' + t], p),
                  ref: function (e) {
                    T.current = e
                  },
                  tabIndex: -1,
                  onScroll: function (e) {
                    e.stopPropagation()
                  },
                  'data-name': e['data-name'],
                },
                b
              )
            )
          )
        )
      }
    },
    Vike: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
    },
    Wz44: function (e, t, o) {
      e.exports = {
        container: 'container-3CL4Geq2',
        mirror: 'mirror-3CL4Geq2',
        background: 'background-3CL4Geq2',
        arrow: 'arrow-3CL4Geq2',
      }
    },
    mkWe: function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return s
      }),
        o.d(t, 'a', function () {
          return a
        })
      var i = o('q1tI'),
        n = o.n(i)
      class s extends n.a.PureComponent {
        constructor(e) {
          super(e),
            (this._addDrawer = () => {
              const e = this.state.currentDrawer + 1
              return this.setState({ currentDrawer: e }), e
            }),
            (this._removeDrawer = () => {
              const e = this.state.currentDrawer - 1
              return this.setState({ currentDrawer: e }), e
            }),
            (this.state = { currentDrawer: 0 })
        }
        render() {
          return n.a.createElement(
            a.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.currentDrawer,
              },
            },
            this.props.children
          )
        }
      }
      const a = n.a.createContext(null)
    },
    sHQ4: function (e, t, o) {
      e.exports = {
        wrap: 'wrap-164vy-kj',
        positionBottom: 'positionBottom-164vy-kj',
        backdrop: 'backdrop-164vy-kj',
        drawer: 'drawer-164vy-kj',
        positionLeft: 'positionLeft-164vy-kj',
      }
    },
    uJ8n: function (e, t, o) {
      e.exports = {
        wrap: 'wrap-379NmUSU',
        scrollWrap: 'scrollWrap-379NmUSU',
        noScrollBar: 'noScrollBar-379NmUSU',
        content: 'content-379NmUSU',
        icon: 'icon-379NmUSU',
        scrollBot: 'scrollBot-379NmUSU',
        scrollTop: 'scrollTop-379NmUSU',
        isVisible: 'isVisible-379NmUSU',
        iconWrap: 'iconWrap-379NmUSU',
        fadeBot: 'fadeBot-379NmUSU',
        fadeTop: 'fadeTop-379NmUSU',
      }
    },
    ybOa: function (e, t, o) {
      e.exports = {
        toggleButton: 'toggleButton-3zv4iS2j',
        collapsed: 'collapsed-3zv4iS2j',
        background: 'background-3zv4iS2j',
        arrow: 'arrow-3zv4iS2j',
      }
    },
  },
])
