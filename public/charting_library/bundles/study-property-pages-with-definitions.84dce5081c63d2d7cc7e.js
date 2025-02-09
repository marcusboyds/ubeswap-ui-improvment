;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-property-pages-with-definitions'],
  {
    WUYT: function (e, t, s) {
      'use strict'
      s.r(t)
      s('YFKU'), s('HbRj')
      var i = s('Eyy1'),
        o = s('Kxc7'),
        n = s('HSjo'),
        r = s('1yQO'),
        l = s('hY0g'),
        u = s.n(l),
        c = s('25b6')
      function p(e, t) {
        const s = e.id
        return (
          'first_visible_bar_time' !== s &&
          'last_visible_bar_time' !== s &&
          'time' !== e.type &&
          !e.isHidden &&
          !(t && !e.confirm) &&
          void 0 === e.groupId
        )
      }
      function d(e) {
        return e.name || Object(c.a)(e.id.toLowerCase())
      }
      var a = s('zqjM'),
        y = s('0YCj'),
        h = s.n(y),
        b = s('pPtI')
      const _ = window.t('Style'),
        S = window.t('Inputs'),
        f = ['1', '3', '5', '15', '30', '45', '60', '120', '180', '240', '1D', '1W', '1M'].map((e) => ({
          value: e,
          title: Object(b.getTranslatedResolutionModel)(e).hint,
        }))
      var m = s('Equz')
      s.d(t, 'StudyOverlayDefinitionsViewModel', function () {
        return w
      })
      const I = [
          { title: window.t('Bars'), value: 0 },
          { title: window.t('Candles'), value: 1 },
          { title: window.t('Hollow Candles'), value: 9 },
          { title: window.t('Line'), value: 2 },
          { title: window.t('Area'), value: 3 },
          { title: window.t('Baseline'), value: 10 },
        ],
        g = window.t('Style'),
        O = window.t('Price Line'),
        j = window.t('Override Min Tick')
      class w extends class {
        constructor(e, t) {
          ;(this._inputSourceItems = null),
            (this._propertyPages = []),
            (this._sourceInput = null),
            (this._source = t),
            (this._undoModel = e)
          const s = this._sortInputs(this._source.metaInfo().inputs)
          for (const i of s) 'source' === i.type && (this._sourceInput = i)
          this._createPropertyRages(),
            null !== this._inputSourceItems &&
              this._undoModel
                .model()
                .dataSourceCollectionChanged()
                .subscribe(this, () => {
                  null !== this._inputSourceItems && this._inputSourceItems.setValue(this._getInputSourceItems())
                })
        }
        destroy() {
          null !== this._inputSourceItems && this._undoModel.model().dataSourceCollectionChanged().unsubscribeAll(this),
            this._propertyPages.forEach((e) => {
              Object(n.u)(e.definitions.value())
            })
        }
        propertyPages() {
          return Promise.resolve(this._propertyPages)
        }
        _createPropertyRages() {
          this._propertyPages = []
          const e = this._createInputsPropertyPage()
          null !== e && this._propertyPages.push(e)
          const t = this._createStylePropertyPage()
          null !== t && this._propertyPages.push(t)
        }
        _createStylePropertyPage() {
          const e = this._stylePropertyDefinitions()
          return null !== e ? Object(r.a)(e, 'style', _) : null
        }
        _stylePropertyDefinitions() {
          return null
        }
        _createInputsPropertyPage() {
          const e = this._inputsPropertyDefinitions()
          return null !== e ? Object(r.a)(e, 'inputs', S) : null
        }
        _inputsPropertyDefinitions() {
          const e = this._sortInputs(this._source.metaInfo().inputs),
            t = this._source.properties().childs().inputs.childs()
          return (
            null !== this._sourceInput && (this._inputSourceItems = new u.a(this._getInputSourceItems())),
            (function (e, t, s, o, r) {
              const l = []
              for (const c of t) {
                if (!p(c, o)) continue
                const t = d(c),
                  a = window.t(t, { context: 'input' })
                let y = null
                if ('resolution' === c.type)
                  y = Object(n.k)(
                    { option: Object(n.b)(e, s[c.id], 'Change ' + t) },
                    { id: 'StudyInput' + t, title: a, options: new u.a(r.resolutionItems) }
                  )
                else if ('source' === c.type) {
                  const o = Object(i.ensure)(r.sourcesItems)
                  y = Object(n.k)(
                    { option: Object(n.b)(e, s[c.id], 'Change ' + t) },
                    { id: 'StudyInput' + t, title: a, options: o }
                  )
                } else if ('options' in c && void 0 !== c.options) {
                  const i = []
                  for (const e of c.options) {
                    const t = (c.optionsTitles && c.optionsTitles[e]) || e,
                      s = window.t(t)
                    i.push({ value: e, title: s })
                  }
                  y = Object(n.k)(
                    { option: Object(n.b)(e, s[c.id], 'Change ' + t) },
                    { id: 'StudyInput' + t, title: a, options: new u.a(i) }
                  )
                } else if ('symbol' === c.type) {
                  const o = s[c.id],
                    l = Object(i.ensure)(r.getSymbolInfoBySymbol),
                    u = Object(i.ensure)(r.onSymbolsInfosChanged)
                  y = Object(n.p)(
                    { symbol: Object(n.z)(e, o, l, u, 'Change ' + a, r.customSymbolInputSetter) },
                    { id: 'StudyInput' + t, title: a }
                  )
                } else if ('session' === c.type)
                  y = Object(n.o)(
                    { session: Object(n.b)(e, s[c.id], 'Change ' + t) },
                    { id: 'StudyInput' + t, title: a }
                  )
                else if ('bool' === c.type)
                  y = Object(n.c)(
                    { checked: Object(n.b)(e, s[c.id], 'Change ' + a) },
                    { id: 'StudyInput' + t, title: a }
                  )
                else if ('integer' === c.type || 'float' === c.type || 'price' === c.type) {
                  const i = {
                    id: 'StudyInput' + t,
                    title: a,
                    type: 'float' === c.type || 'price' === c.type ? 1 : 0,
                    defval: c.defval,
                  }
                  c.min && (i.min = new u.a(c.min)),
                    c.max && (i.max = new u.a(c.max)),
                    void 0 !== c.step && isFinite(c.step) && c.step > 0 && (i.step = new u.a(c.step)),
                    (y = Object(n.j)({ value: Object(n.b)(e, s[c.id], 'Change ' + a) }, i))
                } else
                  y = Object(n.q)(
                    { text: Object(n.b)(e, s[c.id], 'Change ' + a) },
                    { id: 'StudyInput' + t, title: a, isEditable: !0, isMultiLine: !1 }
                  )
                l.push(y)
              }
              return 0 === l.length ? null : l
            })(this._undoModel, e, t, !1, {
              resolutionItems: f,
              customSymbolInputSetter: this._customSymbolInputSetter(),
              getSymbolInfoBySymbol: this._getSymbolInfoBySymbol.bind(this),
              onSymbolsInfosChanged: this._source.symbolsResolved(),
              sourcesItems: this._inputSourceItems,
            })
          )
        }
        _sortInputs(e) {
          return e
        }
        _getInputSourceItems() {
          const e = a.b.slice(),
            t = Object(i.ensureNotNull)(this._sourceInput)
          if (this._source && this._source.isChildStudy()) {
            const s = this._source.parentSource(),
              i = s.title(),
              o = h.a.getChildSourceInputTitles(t, s.metaInfo(), i)
            for (const t of Object.keys(o)) e.push({ id: t, value: t, title: o[t] })
          }
          if (
            o.enabled('study_on_study') &&
            this._source &&
            (this._source.isChildStudy() || h.a.canBeChild(this._source.metaInfo()))
          ) {
            const t = new Set([this._source, ...this._source.getAllChildren()])
            this._undoModel
              .model()
              .allStudies()
              .filter((e) => e.canHaveChildren() && !t.has(e))
              .forEach((t) => {
                const s = t.title(!0, void 0, !0),
                  o = t.sourceId() || '#' + t.id(),
                  n = t.metaInfo(),
                  r = n.styles,
                  l = n.plots || []
                if (1 === l.length) e.push({ id: o, value: o, title: s })
                else if (l.length > 1) {
                  const t = l.reduce((e, t, n) => {
                    if (!h.a.canPlotBeSourceOfChildStudy(t.type)) return e
                    let l
                    try {
                      l = Object(i.ensureDefined)(Object(i.ensureDefined)(r)[t.id]).title
                    } catch (u) {
                      l = t.id
                    }
                    return Object.assign(Object.assign({}, e), { [`${o}$${n}`]: `${s}: ${l}` })
                  }, {})
                  for (const s of Object.keys(t)) e.push({ id: s, value: s, title: t[s] })
                }
              })
          }
          return e
        }
        _customSymbolInputSetter() {}
        _getSymbolInfoBySymbol(e) {
          return this._source.resolvedSymbolInfoBySymbol(e.value())
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this._stylesPropertyPage = null),
            this.propertyPages().then((e) => {
              this._stylesPropertyPage = e.filter((e) => 'style' === e.id)[0]
            }),
            this._source
              .properties()
              .childs()
              .style.subscribe(this, (e) => {
                null !== this._stylesPropertyPage &&
                  (Object(n.u)(this._stylesPropertyPage.definitions.value()),
                  this._stylesPropertyPage.definitions.setValue(this._stylePropertyDefinitions()))
              })
        }
        destroy() {
          this._source.properties().childs().style.unsubscribeAll(this), super.destroy()
        }
        _customSymbolInputSetter() {
          return (e) => {
            this._undoModel.setSymbol(this._source, e)
          }
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = Object(n.k)(
              { option: Object(n.b)(this._undoModel, e.style, 'Change study overlay style') },
              { id: 'StudyOverlayStyle', title: g, options: new u.a(I) }
            ),
            s = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, e.showPriceLine, 'Change Price Price Line') },
              { id: 'StudyOverlayPriceLine', title: O }
            ),
            i = Object(n.k)(
              { option: Object(n.b)(this._undoModel, e.minTick, 'Change study overlay style') },
              { id: 'StudyOverlayMinTick', title: j, options: new u.a(Object(a.d)()) }
            ),
            o = Object(c.c)(this._source.title())
          return [Object(n.l)([t, ...this._getSeriesStylesDefinitions()], 'SeriesStyleGroup' + o), s, i]
        }
        _getSeriesStylesDefinitions() {
          const e = this._source.properties().childs()
          return Object(m.a)(
            this._undoModel,
            e,
            e.style.value(),
            { seriesPriceSources: a.b, lineStyleTypes: a.c, isJapaneseChartsAvailable: !1 },
            'mainSeries'
          )
        }
      }
    },
  },
])
