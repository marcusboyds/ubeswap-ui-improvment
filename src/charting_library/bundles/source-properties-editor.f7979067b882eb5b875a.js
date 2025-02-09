;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['source-properties-editor'],
  {
    '5VK0': function (e, t, s) {
      e.exports = {
        scrollWrap: 'scrollWrap-1KEqJy8_',
        tabsWrap: 'tabsWrap-1KEqJy8_',
        tabs: 'tabs-1KEqJy8_',
        tab: 'tab-1KEqJy8_',
        withHover: 'withHover-1KEqJy8_',
        headerBottomSeparator: 'headerBottomSeparator-1KEqJy8_',
      }
    },
    '5o6O': function (e, t, s) {
      e.exports = {
        tabs: 'tabs-3I2ohC86',
        tab: 'tab-3I2ohC86',
        noBorder: 'noBorder-3I2ohC86',
        disabled: 'disabled-3I2ohC86',
        active: 'active-3I2ohC86',
        defaultCursor: 'defaultCursor-3I2ohC86',
        slider: 'slider-3I2ohC86',
        content: 'content-3I2ohC86',
      }
    },
    CbZh: function (e, t, s) {
      'use strict'
      s.r(t)
      s('YFKU')
      var i = s('q1tI'),
        o = s.n(i),
        n = s('i8i4'),
        a = s('FQhm'),
        r = s('Eyy1'),
        l = (s('bSeV'), s('qFKp')),
        c = s('Vdly'),
        u = s.n(c),
        d = s('ycFu'),
        h = s('tWVy'),
        m = s('aDg1'),
        p = (s('/MKj'), s('Iivm')),
        b = s('K+KL'),
        _ = s('/KDZ'),
        f = (s('EsMY'), s('N5tr')),
        g = s('i/MG'),
        v = s('8d0Q'),
        C = s('lpmA')
      function I(e) {
        const { name: t, onRemove: s, onClick: o } = e,
          [n, a] = Object(v.b)(),
          r = i.useCallback(() => o(t), [o, t]),
          l = i.useCallback(() => {
            s && s(t)
          }, [s, t])
        return i.createElement(
          'div',
          Object.assign({}, a),
          i.createElement(f.b, {
            className: C.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: r,
            toolbox: s && i.createElement(g.a, { hidden: !Modernizr.mobiletouch && !n, onClick: l }),
          })
        )
      }
      var T = s('HWhk')
      function E(e) {
        const { model: t, source: s } = e
        return o.a.createElement(_.a, { rule: 'screen and (max-width: 768px)' }, (e) =>
          o.a.createElement(
            b.a,
            {
              className: !e && C.themesButtonText,
              hideArrowButton: e,
              buttonChildren: e
                ? o.a.createElement(p.a, { className: C.themesButtonIcon, icon: T })
                : window.t('Template'),
            },
            o.a.createElement(I, { onClick: i, name: window.t('Apply Defaults') })
          )
        )
        function i() {
          t.restorePropertiesForSource(s)
        }
      }
      function P(e) {
        return o.a.createElement(E, Object.assign({}, e))
      }
      var y = s('tmL0'),
        S = s('CW80'),
        w = s('vHME'),
        x = s('3ClC'),
        A = s('qJq3'),
        B = s('Ss5c'),
        D = s('GVHu'),
        N = s('ybVX')
      const k = {
          'Elliott Impulse Wave (12345)Degree': 'normal',
          'Elliott Triangle Wave (ABCDE)Degree': 'normal',
          'Elliott Triple Combo Wave (WXYXZ)Degree': 'normal',
          'Elliott Correction Wave (ABC)Degree': 'normal',
          'Elliott Double Combo Wave (WXY)Degree': 'normal',
          BarsPatternMode: 'normal',
          StudyInputSource: 'normal',
        },
        K = {
          TextText: 'big',
          AnchoredTextText: 'big',
          NoteText: 'big',
          AnchoredNoteText: 'big',
          CalloutText: 'big',
          BalloonText: 'big',
        }
      var R = s('Q+1u'),
        q = s('bvfV')
      function M(e) {
        return i.createElement(
          N.a.Provider,
          { value: K },
          i.createElement(
            N.b.Provider,
            { value: k },
            e.page &&
              i.createElement(
                R.a,
                { reference: e.pageRef, key: e.tableKey },
                e.page.definitions.value().map((e) => i.createElement(q.a, { key: e.id, definition: e }))
              )
          )
        )
      }
      var W = s('ttKw')
      class O extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._activePageRef = i.createRef()),
            (this._getActionPageById = (e) => {
              if (!e) return
              const { pages: t } = this.props
              return t.find((t) => t.id.toLowerCase() === e.toLowerCase())
            }),
            (this._onChangeActivePageDefinitions = () => {
              this.setState({ tableKey: Date.now() }, () => {
                this._requestResize && this._requestResize()
              })
            }),
            (this._renderFooterLeft = () => {
              const { source: e, model: t } = this.props
              return Object(S.isLineTool)(e)
                ? i.createElement(P, { source: e, model: t })
                : i.createElement(
                    _.a,
                    { rule: 'screen and (max-width: 428px)' },
                    (s) =>
                      Object(x.isStudy)(e) &&
                      i.createElement(w.a, {
                        model: t,
                        source: e,
                        mode: s ? 'compact' : 'normal',
                      })
                  )
            }),
            (this._subscribe = (e) => {
              e && e.definitions.subscribe(this._onChangeActivePageDefinitions)
            }),
            (this._unsubscribe = (e) => {
              e && e.definitions.unsubscribe(this._onChangeActivePageDefinitions)
            }),
            (this._getActiveTabSettingsName = () => {
              const { source: e } = this.props
              return e instanceof A.Series
                ? 'properties_dialog.active_tab.chart'
                : e instanceof B.LineDataSource
                ? 'properties_dialog.active_tab.drawing'
                : e instanceof D.Study
                ? 'properties_dialog.active_tab.study'
                : ''
            }),
            (this._handleSelectPage = (e) => {
              const { activePageId: t } = this.state,
                s = this._getActionPageById(t),
                i = this._getActionPageById(e),
                o = this._getActiveTabSettingsName()
              t !== e &&
                (this._unsubscribe(s),
                o && u.a.setValue(o, e),
                this._subscribe(i),
                this.setState({ activePageId: e, tableKey: Date.now() }, () => {
                  this._requestResize && this._requestResize(), this._focusActivePageFirstTextInput()
                }))
            }),
            (this._handleScroll = () => {
              h.a.fire()
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this._closePopupDialog()
            }),
            (this._closePopupDialog = () => {
              window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.refresh(), this.props.onClose()
            })
          const { pages: t } = this.props
          let s
          if (this._getActionPageById(this.props.activePageId)) s = Object(r.ensureDefined)(this.props.activePageId)
          else {
            const e = u.a.getValue(this._getActiveTabSettingsName(), ''),
              i = this._getActionPageById(e)
            s = i ? i.id : t[0].id
          }
          ;(this.state = { activePageId: s, tableKey: Date.now() }),
            window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.hide()
        }
        componentDidMount() {
          const { activePageId: e } = this.state,
            t = this._getActionPageById(e)
          this._focusActivePageFirstTextInput(), this._subscribe(t)
        }
        componentWillUnmount() {
          const { activePageId: e } = this.props,
            t = this._getActionPageById(e)
          clearTimeout(this._timeout), this._unsubscribe(t)
        }
        render() {
          var e
          const { source: t, onCancel: s } = this.props,
            { activePageId: o } = this.state,
            n = (null === (e = t.properties().title) || void 0 === e ? void 0 : e.value()) || t.title()
          return i.createElement(d.a, {
            dataName: 'source-properties-editor',
            title: n,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: s,
            onClickOutside: this._handleSubmit,
            onClose: this._closePopupDialog,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(o),
            submitOnEnterKey: !1,
          })
        }
        _renderChildren(e) {
          return ({ requestResize: t }) => {
            this._requestResize = t
            const { pages: s } = this.props,
              o = {
                allIds: s.map((e) => e.id),
                byId: s.reduce((e, t) => Object.assign(Object.assign({}, e), { [t.id]: { title: t.title } }), {}),
              },
              n = s.find((t) => t.id === e)
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(m.a, { activeTabId: e, onSelect: this._handleSelectPage, tabs: o }),
              i.createElement(
                y.a,
                { className: W.scrollable, onScroll: this._handleScroll },
                i.createElement(M, { page: n, pageRef: this._activePageRef, tableKey: this.state.tableKey })
              )
            )
          }
        }
        _focusActivePageFirstTextInput() {
          if (!l.CheckMobile.any() && this._activePageRef.current) {
            const e = this._activePageRef.current.querySelector('input[type=text],textarea')
            e &&
              (this._timeout = setTimeout(() => {
                e.focus()
              }, 0))
          }
        }
      }
      var V = s('sQaR')
      s.d(t, 'SourcePropertiesEditorRenderer', function () {
        return j
      })
      class j extends V.a {
        constructor(e) {
          super(),
            (this._timeout = null),
            (this._handleClose = () => {
              n.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                this._onClose && this._onClose(),
                this._subscription.unsubscribe(this, this._handleCollectionChanged)
            }),
            (this._handleSubmit = () => {
              const e = this._source
              Object(S.isLineTool)(e) &&
                e.hasAlert.value() &&
                setTimeout(() => {
                  e.localAndServerAlertsMismatch && e.synchronizeAlert(!0)
                })
            }),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint)
            }),
            (this._propertyPages = e.propertyPages),
            (this._model = e.model),
            (this._activePageId = e.activePageId),
            (this._onClose = e.onClose),
            (this._source = e.source),
            (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint)),
            (this._subscription = this._model.model().dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged)
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose()
        }
        isVisible() {
          return this.visible().value()
        }
        show() {
          n.render(
            i.createElement(O, {
              source: this._source,
              onSubmit: this._handleSubmit,
              onClose: this._handleClose,
              onCancel: this._handleCancel,
              pages: this._propertyPages,
              model: this._model,
              activePageId: this._activePageId,
            }),
            this._container
          ),
            this._setVisibility(!0),
            a.emit('drawings_settings_dialog', { objectType: 'drawing', scriptTitle: this._source.title() })
        }
        _handleCollectionChanged() {
          null === this._timeout &&
            (this._timeout = setTimeout(() => {
              this._closeDialogIfSourceIsDeleted(), (this._timeout = null)
            }))
        }
        _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) && this._handleClose()
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e
        }
      }
    },
    K3s3: function (e, t, s) {
      'use strict'
      s.d(t, 'a', function () {
        return r
      }),
        s.d(t, 'b', function () {
          return l
        }),
        s.d(t, 'c', function () {
          return c
        })
      var i = s('q1tI'),
        o = s('TSYQ'),
        n = s('Eyy1'),
        a = s('5o6O')
      const r = a
      function l(e) {
        const t = o(e.className, a.tab, {
          [a.active]: e.isActive,
          [a.disabled]: e.isDisabled,
          [a.defaultCursor]: !!e.shouldUseDefaultCursor,
          [a.noBorder]: !!e.noBorder,
        })
        return i.createElement('div', { className: t, onClick: e.onClick, ref: e.reference }, e.children)
      }
      function c(e) {
        return class extends i.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null })
          }
          componentDidUpdate() {
            ;(Object(n.ensureNotNull)(this._slider).style.transition = 'transform 350ms'), this._componentDidUpdate()
          }
          componentDidMount() {
            this._componentDidUpdate()
          }
          render() {
            const { className: t } = this.props,
              s = this._generateTabs()
            return i.createElement(
              'div',
              { className: o(t, a.tabs), 'data-name': this.props['data-name'] },
              s,
              i.createElement(e, {
                reference: (e) => {
                  this._slider = e
                },
              })
            )
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              i.Children.map(this.props.children, (e) => {
                const t = e,
                  s = Boolean(t.props.isActive),
                  o = {
                    reference: (e) => {
                      s && (this.activeTab.current = e), t.props.reference && t.props.reference(e)
                    },
                  }
                return i.cloneElement(t, o)
              })
            )
          }
          _componentDidUpdate() {
            const e = Object(n.ensureNotNull)(this._slider).style
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                s = this.activeTab.current.offsetLeft
              ;(e.transform = `translateX(${s}px)`), (e.width = t + 'px'), (e.opacity = '1')
            } else e.opacity = '0'
          }
        }
      }
      c(function (e) {
        return i.createElement('div', { className: a.slider, ref: e.reference })
      })
    },
    aDg1: function (e, t, s) {
      'use strict'
      s('EsMY')
      var i = s('q1tI'),
        o = s('TSYQ'),
        n = s('K3s3'),
        a = s('nPPD'),
        r = s('dMmr')
      const l = Object(a.a)(n.a, r)
      var c = s('4Cm8'),
        u = s('5VK0')
      s.d(t, 'a', function () {
        return h
      })
      const d = Object(n.c)(function (e) {
        return i.createElement(
          'div',
          { className: l.slider, ref: e.reference },
          i.createElement('div', { className: l.inner })
        )
      })
      class h extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._createClickHandler = (e) => () => {
              this.props.onSelect(e)
            })
        }
        render() {
          const e = this._generateDialogTabs()
          return i.createElement(
            'div',
            { className: u.scrollWrap },
            i.createElement('div', { className: u.headerBottomSeparator }),
            i.createElement(
              c.a,
              {
                isVisibleFade: Modernizr.mobiletouch,
                isVisibleButtons: !Modernizr.mobiletouch,
                isVisibleScrollbar: !1,
              },
              i.createElement('div', { className: u.tabsWrap }, i.createElement(d, { className: u.tabs }, e))
            )
          )
        }
        _generateDialogTabs() {
          const { activeTabId: e, tabs: t } = this.props
          return t.allIds.map((s) => {
            const a = e === s
            return i.createElement(
              n.b,
              { key: s, className: o(u.tab, !a && u.withHover), isActive: a, onClick: this._createClickHandler(s) },
              t.byId[s].title
            )
          })
        }
      }
    },
    dMmr: function (e, t, s) {
      e.exports = { slider: 'slider-3RfwXbxu', inner: 'inner-3RfwXbxu' }
    },
    lpmA: function (e, t, s) {
      e.exports = {
        themesButtonText: 'themesButtonText-3JA3MxY8',
        themesButtonIcon: 'themesButtonIcon-3JA3MxY8',
        defaultsButtonText: 'defaultsButtonText-3JA3MxY8',
        defaultsButtonItem: 'defaultsButtonItem-3JA3MxY8',
      }
    },
    ttKw: function (e, t, s) {
      e.exports = { scrollable: 'scrollable-2w4-r8AL' }
    },
    vHME: function (e, t, s) {
      'use strict'
      s.d(t, 'a', function () {
        return h
      })
      var i = s('q1tI'),
        o = s('TSYQ'),
        n = s.n(o),
        a = (s('YFKU'), s('Iivm')),
        r = s('K+KL'),
        l = s('N5tr'),
        c = s('HWhk'),
        u = s('wt3x')
      const d = {
        reset: window.t('Reset Settings'),
        saveAsDefault: window.t('Save As Default'),
        defaults: window.t('Defaults'),
      }
      class h extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleResetToDefaults = () => {
              this.props.model.restorePropertiesForSource(this.props.source)
            }),
            (this._handleSaveAsDefaults = () => {
              this.props.source.properties().saveDefaults()
            })
        }
        render() {
          const { mode: e } = this.props
          return i.createElement(
            r.a,
            {
              id: 'study-defaults-manager',
              className: n()('normal' === e && u.defaultsButtonText),
              hideArrowButton: 'compact' === e,
              buttonChildren: this._getPlaceHolderItem('compact' === e),
            },
            i.createElement(l.b, {
              className: u.defaultsButtonItem,
              isActive: !1,
              label: d.reset,
              onClick: this._handleResetToDefaults,
            }),
            i.createElement(l.b, {
              className: u.defaultsButtonItem,
              isActive: !1,
              label: d.saveAsDefault,
              onClick: this._handleSaveAsDefaults,
            })
          )
        }
        _getPlaceHolderItem(e) {
          return e ? i.createElement(a.a, { className: u.defaultsButtonIcon, icon: c }) : d.defaults
        }
      }
    },
    wt3x: function (e, t, s) {
      e.exports = {
        defaultsButtonText: 'defaultsButtonText-3mn75BN0',
        defaultsButtonItem: 'defaultsButtonItem-3mn75BN0',
        defaultsButtonIcon: 'defaultsButtonIcon-3mn75BN0',
      }
    },
  },
])
