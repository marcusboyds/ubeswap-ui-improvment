;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['add-compare-dialog'],
  {
    '/NcV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>'
    },
    FxnJ: function (t, e, s) {},
    GhZA: function (t, e, s) {
      'use strict'
      s.r(e)
      var i = s('abKS'),
        a = s('QwKQ'),
        o = s.n(a)
      class l extends o.a {
        constructor(t) {
          ;(t.checked = TVSettings.getBool(t.settingsKey, t.defaultValue)),
            super(t),
            this.$checkbox.change(() => {
              setTimeout(() => {
                TVSettings.setValue(t.settingsKey, this.checked)
              })
            })
        }
      }
      var n = s('pZll'),
        r = s('Kxc7')
      s('UxRG'), s('k47Q')
      const d = r.enabled('secondary_series_extend_time_scale'),
        c = `\n\t<div class="tv-add-symbol-tab">\n\t\t<input type="text" class="tv-control-input js-add-symbol-tab-input" placeholder="${$.t(
          'Symbol'
        )}" autocomplete="off">\n\t\t<div class="tv-add-symbol-tab__add-symbol-overlay js-add-symbol-tab-checkbox"></div>\n\t</div>`
      class h {
        constructor(t, e) {
          ;(this._chartWidgetCollection = t), (this._dialog = e), (this._$popup = null), this.init()
        }
        init() {
          if (
            ((this.$tab = $(c)),
            (this._$input = this.$tab.find('.js-add-symbol-tab-input')),
            (this._overlayCheckbox = new l({
              defaultValue: !0,
              settingsKey: 'showAddSymbolDialog.checkboxState',
              labelRight: $.t('Overlay the main chart'),
              labelAddClass: 'tv-add-symbol-tab__checkbox-label',
              boxAddClass: 'tv-add-symbol-tab__checkbox-box',
            })),
            this.$tab.find('.js-add-symbol-tab-checkbox').append(this._overlayCheckbox.$el),
            d)
          ) {
            this._extendTimeScaleCheckbox = new l({
              defaultValue: !1,
              settingsKey: 'showAddSymbolDialog.extendCheckboxState',
              labelRight: $.t('Allow extend time scale'),
              labelAddClass: 'tv-add-symbol-tab__checkbox-label',
              boxAddClass: 'tv-add-symbol-tab__checkbox-box',
            })
            const t = $('<div class="tv-add-symbol-tab__add-symbol-overlay"></div>')
            t.append(this._extendTimeScaleCheckbox.$el), this.$tab.append(t)
          } else this._extendTimeScaleCheckbox = null
          Object(n.symbolSearchUIService)().bindToInput(this._$input, {
            callback: (t) => {
              const e = this._chartWidgetCollection.activeChartWidget.value()
              if (e) {
                const s = null !== this._extendTimeScaleCheckbox && this._extendTimeScaleCheckbox.checked
                e.addOverlayStudy(t, this._overlayCheckbox.checked, s)
              }
            },
            onPopupOpen: (t) => {
              t.css('z-index', this._dialog.getZIndex()), (this._$popup = t)
            },
            onPopupClose: () => {
              this._$popup = null
            },
            keepFocus: !0,
            clearAfterAccept: !0,
          })
        }
        focus() {
          Modernizr.mobiletouch || this._$input.focus()
        }
        isClickOnTab(t) {
          return !!this._$popup && !(this._$popup[0] !== t.target && !this._$popup[0].contains(t.target))
        }
      }
      var p = s('jlOC'),
        b = s('JWMC')
      s('jPTo')
      s.d(e, 'AddCompareDialog', function () {
        return _
      })
      class _ {
        constructor(t) {
          ;(this._chartWidgetCollection = t), (this._$symbolSearchPopup = null), (this._dialog = null)
        }
        show() {
          if (this.isOpened()) return this._dialog
          null !== this._dialog && this._dialog.destroy()
          const t = new i.a(this._chartWidgetCollection, this),
            e = new h(this._chartWidgetCollection, this),
            s = []
          s.push({ name: $.t('Compare'), page: t.$tab.addClass('tv-compare-dialog__tab-page') }),
            s.push({
              name: $.t('Add Symbol', { context: 'compare_or_add_symbol_dialog' }),
              page: e.$tab.addClass('tv-compare-dialog__tab-page'),
            })
          const a = Object(p.a)({
            tabs: s,
            width: 400,
            tabStateSaveKey: 'CompareAddDialog.tab',
            destroyOnClose: !0,
            withScroll: !1,
            addClass: 'tv-compare-dialog',
            tabsScrollBoxAddClass: 'tv-compare-dialog__scroll-box',
            tabAddClass: 'tv-compare-dialog__tab',
            isClickOutFn: (s) => {
              if (t.isClickOnTab(s) || e.isClickOnTab(s)) return !1
            },
          })
          return (
            (this._dialog = a.dialog),
            this._dialog.on('afterClose', () => {
              Object(b.trackEvent)('GUI', 'Compare', t.selectedSymbols.sort().join(', '))
            }),
            this._dialog.open(),
            this._dialog
          )
        }
        hide() {
          this.isOpened() && this._dialog.close()
        }
        isOpened() {
          return this._dialog && this._dialog.isOpened()
        }
        getZIndex() {
          return this._dialog.zIndex
        }
      }
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
    },
    UxRG: function (t, e, s) {},
    abKS: function (t, e, s) {
      'use strict'
      ;(function (t, i) {
        s.d(e, 'a', function () {
          return r
        })
        var a = s('pZll'),
          o = s('JWMC')
        s('UxRG'), s('b6p+'), s('frtK')
        const l = `\n\t<div class="tv-compare-tab">\n\t\t<input type="text" class="tv-control-input js-compare-tab-input" placeholder="${$.t(
            'Company Comparison'
          )}" autocomplete="off">\n\t</div>`,
          n = `\n\t<div class="tv-compare-tab__predefine-cell {{additionalClass}}">\n\t\t<label for="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox">\n\t\t\t\t<input class="tv-control-checkbox__input js-predefine-checkbox" type="checkbox" id="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox__box tv-compare-tab__checkbox-box">${s(
            'aLUT'
          )}</span>\n\t\t\t<span class="tv-control-checkbox__ripple js-ripple"></span>\n\t\t\t</span>\n\t\t\t<span class="tv-control-checkbox__label tv-compare-tab__checkbox-label">{{label}}</span>\n\t\t</label>\n\t</div>`
        class r {
          constructor(e, s) {
            ;(this.selectedSymbols = []),
              (this._chartWidgetCollection = e),
              (this._dialog = s),
              (this._$popup = null),
              (this._predefines = {}),
              (this._symbolAlias = {}),
              (this._isBovespa = t.enabled('bovespa_widget')),
              (this._predefines = this._chartWidgetCollection.activeChartWidget.value().compareSymbols() || []),
              this.init()
          }
          _addCompareSymbol(t, e, s) {
            const i = this._chartWidgetCollection.activeChartWidget.value()
            if (i)
              return (
                this.selectedSymbols.push(t),
                i.addCompareStudy(t).then(function (t) {
                  const e = null !== t
                  return e && Object(o.trackEvent)('GUI', 'Add Compare'), e
                })
              )
          }
          removeCompareSymbol(t) {
            const e = this._chartWidgetCollection.activeChartWidget.value()
            if (!e) return
            const s = e.model()
            s &&
              ((this.selectedSymbols = this.selectedSymbols.filter((e) => e !== t)),
              s.dataSources().forEach((e) => {
                if (e._metaInfo && 'Compare@tv-basicstudies' === e._metaInfo.id) {
                  const i = e.properties().inputs.symbol.value()
                  ;(i === t || (this._symbolAlias[i] && this._symbolAlias[i] === t)) && s.removeSource(e)
                }
              }))
          }
          init() {
            const t = this._chartWidgetCollection.activeChartWidget.value()
            if (!t) return
            const e = t.model()
            if (!e) return
            const s = e.dataSources()
            ;(this.$tab = $(l)), this._initSymbolSearch(), this._createPredefinesList()
            const i = this.$tab.find('.js-compare-tab-predefines')
            i.find('.js-predefine-checkbox').attr('checked', !1),
              this._predefines.forEach(({ symbol: t }) => {
                const e = this._symbolToId(t),
                  a = i.find('#' + e)
                s.forEach((e) => {
                  if (e._metaInfo && 'Compare@tv-basicstudies' === e._metaInfo.id) {
                    const s = e.properties().inputs.symbol.value()
                    ;(s === t || (this._symbolAlias[s] && this._symbolAlias[s] === t)) &&
                      (a.attr('checked', !0), this.selectedSymbols.push(s))
                  }
                })
              })
          }
          _initSymbolSearch() {
            ;(this._$input = this.$tab.find('.js-compare-tab-input')),
              Object(a.symbolSearchUIService)().bindToInput(this._$input, {
                callback: (t) => this._addCompareSymbol(t),
                onPopupOpen: (t) => {
                  t.css('z-index', this._dialog.getZIndex()), (this._$popup = t)
                },
                onPopupClose: () => {
                  this._$popup = null
                },
                keepFocus: !0,
                clearAfterAccept: !0,
              })
          }
          _createPredefinesList() {
            const t = this
            function e(e) {
              setTimeout(() => {
                $(this).is(':checked')
                  ? t._addCompareSymbol(e.data.symbol).then((t) => {
                      t || $(this).attr('checked', !1)
                    })
                  : t.removeCompareSymbol(e.data.symbol)
              })
            }
            const s = $('<div class="tv-compare-tab__predefines js-compare-tab-predefines"></div>')
            this._predefines.forEach(({ symbol: t, title: a }) => {
              const o = $(
                i.render(n, {
                  symbolId: this._symbolToId(t),
                  label: a,
                  additionalClass: this._isBovespa ? 'tv-compare-tab__predefine-cell--wide' : '',
                })
              )
              o.find('.js-predefine-checkbox').change({ symbol: t }, e), o.appendTo(s)
            }),
              s.appendTo(this.$tab)
          }
          _symbolToId(t) {
            return t.replace(/[^a-z0-9]/gi, '_')
          }
          focus() {
            Modernizr.mobiletouch || this._$input.focus()
          }
          isClickOnTab(t) {
            return !!this._$popup && !(this._$popup[0] !== t.target && !this._$popup[0].contains(t.target))
          }
        }
      }.call(this, s('Kxc7'), s('nbsC')))
    },
    frtK: function (t, e, s) {},
    jPTo: function (t, e, s) {},
    jlOC: function (t, e, s) {
      'use strict'
      ;(function (t) {
        s.d(e, 'a', function () {
          return l
        })
        var i = s('pIOw'),
          a = s('YDhE')
        s('FxnJ')
        const o = { tabs: [] }
        function l(e) {
          e = $.extend({}, o, e)
          const s = $(
            t.render(
              '<div class="tv-dialog__section tv-dialog__section--title tv-tabbed-dialog__header js-close-button-place" tabindex="-1"><div class="tv-tabs tv-tabbed-dialog__tabs js-dialog__drag">{{#tabs}}<div class="tv-tabs__tab">{{name}}</div>{{/tabs}}</div>{{#customControls}}<div class="js-custom-controls tv-tabbed-dialog__custom-controls {{#customControlsAddClass}}{{customControlsAddClass}}{{/customControlsAddClass}}"></div>{{/customControls}}<div class="tv-tabbed-dialog__bottom-border"></div></div>{{>additionalHeaderContent}}',
              {
                tabs: e.tabs,
                customControls: e.customControls,
                customControlsAddClass: e.customControlsContainerAddClass,
              },
              { additionalHeaderContent: e.additionalHeaderContent }
            )
          )
          let l = $('<div class="tv-tabbed-dialog__pages-container"></div>')
          const n = l
          e.contentAddClass && l.addClass(e.contentAddClass),
            !1 !== e.withScroll &&
              (l = $('<div class="js-dialog__scroll-wrap tv-dialog__scroll-wrap">').append(
                n.addClass('tv-dialog__scroll-wrap-inner')
              ))
          const r = $('<div class="tv-tabbed-dialog">').append(s).append(l)
          if ((e.customControls && s.find('.js-custom-controls').append(e.customControls), !0 !== e.doNotCreatePages))
            for (let t = 0; t < e.tabs.length; ++t)
              n.append($('<div class="tv-tabbed-dialog__tab-page">').append(e.tabs[t].page))
          const d = e.tabStateSaveKey,
            c = e.activeTab,
            h = e.tabsScrollBoxAddClass,
            p = e.tabAddClass
          delete e.tabs,
            delete e.activeTab,
            delete e.customControls,
            delete e.tabStateSaveKey,
            delete e.customControlsContainerAddClass,
            delete e.tabsScrollBoxAddClass,
            delete e.tabAddClass,
            (e.closeButtonAddClass = 'tv-tabbed-dialog__close'),
            (e.contentWrapTemplate = r)
          const b = Object(a.createDialog)(e),
            _ = new i.a(s.find('.tv-tabs').get(0), n.get(0), {
              addLeftArrowsClass: 'tv-tabbed-dialog__tabs-arrow-left',
              addRightArrowsClass: 'tv-tabbed-dialog__tabs-arrow-right',
              addScrollBoxClass: h,
              tabClass: p,
              saveTab: d,
              activeTab: c,
            })
          return (
            b.on('afterOpen', () => {
              _.setActivePage(_.index(), !0, !0)
            }),
            { dialog: b, tabs: _ }
          )
        }
      }.call(this, s('nbsC')))
    },
    k47Q: function (t, e, s) {},
    ohga: function (t, e, s) {},
    pIOw: function (t, e, s) {
      'use strict'
      s('ohga')
      var i = s('Eyy1')
      s('P5fv')
      async function a() {
        await s.e('lazy-velocity').then(s.t.bind(null, 'WJ2Z', 7))
      }
      $.fn.velocity = function (...t) {
        return (
          a().then(() => {
            $.fn.velocity.apply(this, t)
          }),
          this
        )
      }
      s('EsMY')
      var o,
        l = s('9uLv'),
        n = s('FIi8'),
        r = s('aIyQ'),
        d = s.n(r),
        c = s('MjtL'),
        h = s('/NcV'),
        p = s('Vdly'),
        b = s('Ialn')
      s.d(e, 'a', function () {
        return v
      }),
        (function (t) {
          ;(t[(t.Left = 0)] = 'Left'), (t[(t.Right = 1)] = 'Right')
        })(o || (o = {}))
      const _ = {
          saveTab: '',
          noSlider: !1,
          onTabClick: !1,
          loadedClass: 'i-loaded',
          tabsContainerClass: 'tv-tabs',
          tabClass: 'tv-tabs__tab',
          tabDisabledClass: 'disabled',
          activeTabClass: 'i-active',
          activePageClass: 'active',
          sliderClass: 'tv-tabs__slider',
          scrollBoxClass: 'tv-tabs__scroll-box',
          scrollWrapClass: 'tv-tabs__scroll-wrap',
          lArrowClass: 'tv-tabs__left-arrow',
          rArrowClass: 'tv-tabs__right-arrow',
        },
        u = c,
        g = h
      class v {
        constructor(t, e, s = {}) {
          ;(this._animating = !1),
            (this._prevWidth = -1),
            (this._bindings = []),
            (this._options = Object(n.deepExtend)({}, _, s)),
            (this.tabChanged = new d.a()),
            (this._elTabs = t),
            (this._elPages = e),
            (this._elScrollWrap = m(this._options.scrollWrapClass || '', this._elTabs, 'wrapInner')),
            (this._elScrollBox = m(this._options.scrollBoxClass || '', this._elScrollWrap, 'wrapInner')),
            this._options.noSlider ||
              (this._elSlider = m(this._options.sliderClass || '', this._elScrollBox, 'append')),
            Modernizr.mobiletouch ||
              ((this._elArrowLeft = m(
                this._options.lArrowClass || '',
                this._elTabs,
                'append',
                `<div class="${this._options.lArrowClass || ''} i-slided">${u}</div>`
              )),
              (this._elArrowRight = m(
                this._options.rArrowClass || '',
                this._elTabs,
                'append',
                `<div class="${this._options.rArrowClass || ''} i-slided">${g}</div>`
              )),
              this._addClass(this._elArrowLeft, this._options.addLeftArrowsClass),
              this._addClass(this._elArrowRight, this._options.addRightArrowsClass)),
            this._addClass(this._elScrollBox, this._options.addScrollBoxClass),
            this._addClass(this._elSlider, this._options.addSliderClass),
            this._addClass(this._elTabs, this._options.tabsContainerClass),
            this._addClass(this.getTabsArray(), this._options.tabClass),
            this._addClass(this._elTabs, this._options.loadedClass),
            this.checkScrollArrows(!0),
            this._initActivePage(),
            this._bindEvents()
        }
        getTabsArray() {
          const t = this._elScrollBox.children
          if (!this._options.sliderClass) return Array.prototype.slice.call(t)
          const e = []
          for (let s = 0; s < t.length; s++) {
            const i = t[s]
            S(i, this._options.sliderClass) || e.push(i)
          }
          return e
        }
        getPagesArray() {
          return this._elPages ? Array.prototype.slice.call(this._elPages.children) : []
        }
        getElTabs() {
          return this._elTabs
        }
        getElPages() {
          return this._elPages
        }
        checkScrollArrows(t = !1) {
          const e = Math.ceil(this._elScrollWrap.scrollLeft),
            s = f(this._elScrollWrap),
            i = this._elScrollWrap.scrollWidth - s - 2
          function n(t) {
            y(t, 'i-slided'),
              $.Velocity &&
                $.Velocity.animate(t, { translateX: '0%' }, { duration: l.dur / 2, easing: 'easeOutCubic', queue: !1 })
          }
          function r(e, s) {
            if (t) return C(e, 'i-slided'), void e.setAttribute('style', '')
            const i = s === o.Left ? '-100%' : '100%'
            a().then(() => {
              $.Velocity.animate(
                e,
                { translateX: i },
                { complete: () => C(e, 'i-slided'), duration: l.dur / 2, easing: 'easeOutCubic', queue: !1 }
              )
            })
          }
          this._elArrowLeft &&
            (e >= 1
              ? n(this._elArrowLeft)
              : (e <= 1 || this._elScrollWrap.scrollWidth <= s) && r(this._elArrowLeft, o.Left)),
            this._elArrowRight &&
              (i - e > 1
                ? n(this._elArrowRight)
                : (e >= i || this._elScrollWrap.scrollWidth <= s) && r(this._elArrowRight, o.Right))
        }
        index() {
          const t = this.getElActiveTab()
          return t ? this.getTabsArray().indexOf(t) : -1
        }
        getElActiveTab() {
          return this._getActiveElement(
            this.getTabsArray(),
            this._options.activeTabClass || '',
            this._options.inactiveTabClass
          )
        }
        getElActivePage() {
          return this._getActiveElement(
            this.getPagesArray(),
            this._options.activePageClass || '',
            this._options.inactivePageClass
          )
        }
        setActivePage(t, e, s) {
          if (-1 === t || (t === this.index() && !s)) return
          const i = this.index()
          function a(e, s, i) {
            e.forEach((e, a) => {
              const o = t === a
              s && A(e, s, o), i && A(e, i, !o)
            })
          }
          a(this.getTabsArray(), this._options.activeTabClass, this._options.inactiveTabClass),
            a(this.getPagesArray(), this._options.activePageClass, this._options.inactivePageClass),
            this._options.noSlider || this.updateSlider(i, t, e),
            this._options.saveTab && p.setValue(this._options.saveTab, t),
            this.tabChanged.fire(t)
        }
        updateSlider(t, e, s) {
          if (this._options.noSlider) return
          const i = this.getTabsArray()[e]
          if (
            0 === i.clientWidth ||
            0 === i.clientHeight ||
            'none' === window.getComputedStyle(i).getPropertyValue('display')
          )
            return
          const o = window.getComputedStyle(i)
          let n = i.offsetLeft + parseInt(o.getPropertyValue('padding-left')),
            r = f(i)
          const d = i.querySelector('.js-tabs__slider-pos')
          if (d) {
            const t = window.getComputedStyle(d)
            ;(n += parseInt(t.getPropertyValue('padding-left')) + d.offsetLeft), (r -= r - f(d))
          }
          ;(s = s || -1 === t || (document.all && !window.atob))
            ? ((this._elSlider.style.left = n + 'px'), (this._elSlider.style.width = r + 'px'))
            : ((this._animating = !0),
              a().then(() => {
                $.Velocity.animate(this._elSlider, { left: n }, { duration: l.dur, easing: 'easeOutCubic', queue: !1 }),
                  $.Velocity.animate(
                    this._elSlider,
                    { width: r },
                    {
                      complete: () => {
                        this._animating = !1
                      },
                      duration: l.dur,
                      easing: 'easeOutCubic',
                      queue: !1,
                    }
                  )
              }))
        }
        onTabClick(t) {
          const e = t.currentTarget || t.target,
            s = this.getTabsArray().indexOf(e)
          ;-1 === s || this._isTabDisabled(e) || this.setActivePage(s),
            document.activeElement.blur(),
            t.preventDefault()
        }
        resizeSlider() {
          if (this._options.noSlider) return
          const t = this._elTabs.offsetWidth
          if (t === this._prevWidth) return
          this._prevWidth = t
          const e = this.index()
          this.updateSlider(e, e, !0)
        }
        count() {
          return this.getTabsArray().length
        }
        add(t, e) {
          this._elScrollBox.appendChild(t),
            this._elPages && e && this._elPages.appendChild(e),
            this._bindTabEvents(t),
            this.checkScrollArrows(!0)
        }
        remove(t) {
          function e(t) {
            t.parentElement && t.parentElement.removeChild(t)
          }
          const s = this.tabAt(t)
          s && (this._unbindTabEvents(s), e(s))
          const i = this.pageAt(t)
          i && e(i)
          const a = t - 1 >= 0 ? t - 1 : 0
          this.setActivePage(a), this.checkScrollArrows(!0)
        }
        indexOfTab(t) {
          return this.getTabsArray().indexOf(t)
        }
        indexOfPage(t) {
          return this.getPagesArray().indexOf(t)
        }
        pageAt(t) {
          return this.getPagesArray()[t] || null
        }
        tabAt(t) {
          return this.getTabsArray()[t] || null
        }
        deselect() {
          const t = this.getElActiveTab()
          this._options.activeTabClass && t && y(t, this._options.activeTabClass)
          const e = this.getElActivePage()
          return (
            this._options.activePageClass && e && y(e, this._options.activePageClass),
            this._elSlider && ((this._elSlider.style.left = ''), (this._elSlider.style.width = '')),
            this
          )
        }
        stop() {
          this._unbindEvents({})
        }
        _addClass(t, e) {
          'string' == typeof e &&
            (Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              C(t, e)
            }))
        }
        _initActivePage() {
          let t = 0
          this._options.saveTab && (t = p.getInt(this._options.saveTab, 0))
          const e = this.index()
          ;-1 !== e && (t = e),
            void 0 !== this._options.activeTab && (t = this._options.activeTab),
            this.setActivePage(t, !0, !0)
        }
        _bindEvents() {
          this.getTabsArray().forEach(this._bindTabEvents.bind(this)),
            this._bindOneEvent({
              eventName: 'scroll',
              listener: this.checkScrollArrows.bind(this, !1),
              target: this._elScrollWrap,
            }),
            this._elArrowLeft &&
              this._bindOneEvent({
                eventName: 'click',
                listener: () => {
                  const t = this.getTabsArray()
                  let e = 0,
                    s = !1
                  const i = this._elScrollWrap.scrollLeft
                  Object(b.isRtl)() && t.reverse(),
                    t.forEach((t) => {
                      if (s) return
                      const a = t.offsetLeft + t.offsetWidth
                      a > i ? (s = !0) : (e = a)
                    }),
                    a().then(() => {
                      $.Velocity.animate(this._elScrollWrap, 'scroll', {
                        axis: 'x',
                        container: $(this._elScrollWrap),
                        duration: l.dur / 2,
                        easing: 'easeInOutCubic',
                        offset: Math.floor(e - i - f(this._elArrowLeft)),
                        queue: !1,
                      })
                    })
                },
                target: this._elArrowLeft,
              }),
            this._elArrowRight &&
              this._bindOneEvent({
                eventName: 'click',
                listener: () => {
                  const t = this.getTabsArray()
                  let e = 0
                  const s = Object(b.isRtl)() ? 0 : this._elScrollWrap.scrollLeft + f(this._elScrollWrap)
                  Object(b.isRtl)() && t.reverse(),
                    t.forEach((t) => {
                      if (0 !== e) return
                      const i = t.offsetLeft + t.offsetWidth
                      i > s && (e = i)
                    }),
                    a().then(() => {
                      $.Velocity.animate(this._elScrollWrap, 'scroll', {
                        axis: 'x',
                        container: $(this._elScrollWrap),
                        duration: l.dur / 2,
                        easing: 'easeInOutCubic',
                        offset: Math.ceil(e - s + f(Object(i.ensureDefined)(this._elArrowRight))),
                        queue: !1,
                      })
                    })
                },
                target: this._elArrowRight,
              })
          const t = Array.prototype.slice.call(this._elTabs.querySelectorAll('.js-tabs__slider-hover') || [])
          t.length &&
            t.forEach((t) =>
              this._bindOneEvent({
                eventName: 'mouseenter',
                listener: (t) => {
                  if (this._animating) return
                  const e = t.currentTarget
                  e && this._options.activeTabClass && S(e, this._options.activeTabClass) && this._hoverSlider(e)
                },
                target: t,
              })
            )
          let e = null
          const s = () => {
            ;(e = null), this.checkScrollArrows(!0), this._options.noSlider || this.resizeSlider()
          }
          this._bindOneEvent({
            eventName: 'resize',
            listener: () => {
              null === e && (e = window.requestAnimationFrame(s))
            },
            target: window,
          })
        }
        _bindTabEvents(t) {
          this._bindOneEvent({
            eventName: 'click',
            listener: (t) => {
              'function' == typeof this._options.onTabClick ? this._options.onTabClick(t) : this.onTabClick(t)
            },
            target: t,
          })
        }
        _unbindTabEvents(t) {
          this._unbindEvents({ target: t })
        }
        _bindOneEvent(t) {
          t.target.addEventListener(t.eventName, t.listener), this._bindings.push(t)
        }
        _unbindEvents(t) {
          const e = (e) =>
            !(
              (void 0 !== e.eventName && e.eventName !== t.eventName) ||
              (void 0 !== e.target && e.target !== t.target) ||
              (void 0 !== e.listener && e.listener !== t.listener)
            )
          this._bindings.filter(e).forEach((t) => t.target.removeEventListener(t.eventName, t.listener)),
            (this._bindings = this._bindings.filter((t) => !e(t)))
        }
        _getActiveElement(t, e, s) {
          return t.filter((t) => (e ? S(t, e) : !!s && !S(t, s)))[0] || null
        }
        _isTabDisabled(t) {
          return (
            S(t, 'i-disabled') ||
            (this._options.tabDisabledClass && S(t, this._options.tabDisabledClass)) ||
            t.hasAttribute('disabled')
          )
        }
        _hoverSlider(t) {
          const e = f(t),
            s = window.getComputedStyle(t),
            i =
              t.offsetLeft + parseInt(s.getPropertyValue('padding-left')) + parseInt(s.getPropertyValue('margin-left')),
            o = { duration: l.dur / 4, easing: 'easeOutCubic', queue: !1 }
          a().then(() => {
            $.Velocity.animate(this._elSlider, { left: i }, o), $.Velocity.animate(this._elSlider, { width: e }, o)
          })
          const n = () => {
            this.getElActiveTab() === t && this._unhoverSlider(t), t.removeEventListener('mousleave', n)
          }
          t.addEventListener('mouseleave', n)
        }
        _unhoverSlider(t) {
          const e = window.getComputedStyle(t),
            s = t.querySelector('.js-tabs__slider-pos'),
            i = window.getComputedStyle(s),
            o =
              t.offsetLeft +
              parseInt(e.getPropertyValue('padding-left')) +
              parseInt(e.getPropertyValue('margin-left')) +
              parseInt(i.getPropertyValue('padding-left')) +
              s.offsetLeft,
            n = f(t),
            r = n - (n - f(s)),
            d = { duration: l.dur / 2, easing: 'easeInSine', queue: !1 }
          a().then(() => {
            $.Velocity.animate(this._elSlider, { left: o }, d), $.Velocity.animate(this._elSlider, { width: r }, d)
          })
        }
      }
      function f(t) {
        if (0 === t.offsetWidth) return 0
        {
          const e = window.getComputedStyle(t)
          return (
            t.offsetWidth -
            parseFloat(e.getPropertyValue('padding-left')) -
            parseFloat(e.getPropertyValue('padding-right')) -
            parseFloat(e.getPropertyValue('border-left-width')) -
            parseFloat(e.getPropertyValue('border-right-width'))
          )
        }
      }
      function m(t, e, s, i) {
        let a = e.querySelector('.' + t)
        if (!a) {
          const o = document.createElement('div')
          if (((o.innerHTML = i || `<div class="${t}"></div>`), (a = o.firstElementChild), 'append' === s))
            e.appendChild(a)
          else {
            if ('wrapInner' !== s) throw new Error('Unknown insertMethod')
            {
              const t = Array.prototype.slice.call(e.childNodes)
              for (let e = 0; e < t.length; e++) a.appendChild(t[e])
              e.appendChild(a)
            }
          }
        }
        return a
      }
      function C(t, e) {
        t.classList.add(...w(e))
      }
      function y(t, e) {
        t.classList.remove(...w(e))
      }
      function S(t, e) {
        return w(e).every((e) => t.classList.contains(e))
      }
      function A(t, e, s) {
        w(e).forEach((e) => t.classList.toggle(e, s))
      }
      function w(t) {
        return t.split(/\s+/)
      }
    },
  },
])
