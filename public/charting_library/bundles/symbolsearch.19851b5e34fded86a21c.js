;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbolsearch'],
  {
    '56W2': function (t, e, i) {
      ;(function (e) {
        var i
        ;(i = void 0 !== e ? e : this),
          (t.exports = (function (t) {
            if (t.CSS && t.CSS.escape) return t.CSS.escape
            var e = function (t) {
              if (0 == arguments.length) throw new TypeError('`CSS.escape` requires an argument.')
              for (var e, i = String(t), n = i.length, s = -1, o = '', r = i.charCodeAt(0); ++s < n; )
                0 != (e = i.charCodeAt(s))
                  ? (o +=
                      (e >= 1 && e <= 31) ||
                      127 == e ||
                      (0 == s && e >= 48 && e <= 57) ||
                      (1 == s && e >= 48 && e <= 57 && 45 == r)
                        ? '\\' + e.toString(16) + ' '
                        : (0 == s && 1 == n && 45 == e) ||
                          !(
                            e >= 128 ||
                            45 == e ||
                            95 == e ||
                            (e >= 48 && e <= 57) ||
                            (e >= 65 && e <= 90) ||
                            (e >= 97 && e <= 122)
                          )
                        ? '\\' + i.charAt(s)
                        : i.charAt(s))
                  : (o += '�')
              return o
            }
            return t.CSS || (t.CSS = {}), (t.CSS.escape = e), e
          })(i))
      }.call(this, i('yLpj')))
    },
    Gs9W: function (t, e, i) {},
    HBUj: function (t, e, i) {},
    'U+7v': function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, 'LEFT_ARROW', function () {
          return n
        }),
        i.d(e, 'UP_ARROW', function () {
          return s
        }),
        i.d(e, 'RIGHT_ARROW', function () {
          return o
        }),
        i.d(e, 'DOWN_ARROW', function () {
          return r
        }),
        i.d(e, 'ENTER', function () {
          return a
        }),
        i.d(e, 'ESC', function () {
          return l
        }),
        i.d(e, 'SPACE', function () {
          return c
        }),
        i.d(e, 'SLASH', function () {
          return p
        })
      const n = 37,
        s = 38,
        o = 39,
        r = 40,
        a = 13,
        l = 27,
        c = 32,
        p = 47
    },
    m5UM: function (t, e, i) {
      'use strict'
      ;(function (e) {
        i('sZhh'), i('HBUj')
        var n = i('PT1i').linking,
          s = i('qdOW'),
          o = i('6et/'),
          r = i('w3Pp').marketType,
          a = i('c2JX').Spinner,
          l = i('+6II'),
          c = i('dTSQ').regExpEscape,
          p = i('ePL1'),
          u = i('U+7v'),
          d = i('+GxX').isFeatureEnabled,
          h = i('GAqT').TVOldDialogs,
          f = i('jAh7').getRootOverlapManager,
          g = i('e3/o').guid,
          _ = i('LxhU').Interval,
          m = i('h24c'),
          b = m.canShowSpreadActions,
          v = m.skipAccept,
          y = m.syncSymbolSearch,
          S = m.setLinkingResolution,
          x = m.globalKeypressMatches,
          C = d('futures-descriptions')
        function E() {
          var t = null
          if (t && t.metainfo().configFlags.supportSymbolSearch)
            return t.metainfo().backendBrokerName || t.metainfo().id.toLowerCase()
        }
        function I(t) {
          return (
            w[
              {
                'EURONEXT AMSTERDAM': 'EURONEXTAMS',
                'EURONEXT BRUSSELS': 'EURONEXTBRU',
                'EURONEXT LISBON': 'EURONEXTLIS',
                'EURONEXT PARIS': 'EURONEXTPAR',
              }[t.exchange] ||
                t.prefix ||
                t.exchange
            ] ||
            t.exchange ||
            ''
          )
        }
        function T(t, e) {
          return e in t || (t[e] = 'bitcoin' === e || 'crypto' === e ? window.t('crypto') : window.t(e)), t[e]
        }
        var w = {},
          k = /^(\w{3,4}) (\d{4})$/,
          O = (function () {
            var t = [
              { name: 'input', immediate: !0 },
              { name: 'sync', immediate: !0 },
              { name: 'keypress' },
              { name: 'keydown' },
              { name: 'keyup' },
              { name: 'mousedown' },
              { name: 'mouseup' },
              { name: 'cut' },
              { name: 'paste' },
            ]
            var i = [/^e-m/i]
            function m(i) {
              if (!(this instanceof m)) throw new TypeError('SymbolSearch is a constructor')
              if (
                (!(i = i || {}).dontUseInputParser && e.enabled('symbol_search_parser_mixin'),
                (this._inputElement = $(i.input).get(0)),
                !this._inputElement)
              )
                throw new TypeError('options.input must be a DOM element, jQuery object or selector')
              if (
                ((this.$list = $(i.list).eq(0)), 0 === this.$list.size() && delete this.$list, void 0 !== i.callback)
              ) {
                if ('function' != typeof i.callback) throw new TypeError('options.callback must be function')
                this._callback = i.callback
              }
              if (void 0 !== i.onValueChanged) {
                if ('function' != typeof i.onValueChanged)
                  throw new TypeError('options.onValueChanged must be function')
                this._onValueChanged = i.onValueChanged
              }
              if (void 0 !== i.onEmptyApply) {
                if ('function' != typeof i.onEmptyApply) throw new TypeError('options.onEmptyApply must be function')
                this._onEmptyApply = i.onEmptyApply
              }
              if (
                (i.ignoreInterval && (this._ignoreInterval = !0),
                m.resetStoredInterval(),
                i.hidePro && (this._hidePro = !0),
                i.allowMultipleSymbols && (this._allowMultipleSymbols = !0),
                void 0 !== i.onParse)
              ) {
                if ('function' != typeof i.onParse) throw new TypeError('options.onParse must be function')
                this._onParse = i.onParse
              }
              ;(this._state = {}),
                (this._resolveViaSymbolSearchId = null),
                (this.acceptEmpty = !!i.acceptEmpty),
                $(this._inputElement).data('symbol-search-instance', this)
              for (
                var n = (this._boundListener = this._eventListener.bind(this)),
                  s = (this.boundTimeoutListener = function (t) {
                    setTimeout(function () {
                      n(t)
                    }, 0)
                  }),
                  o = 0;
                o < t.length;
                o++
              )
                t[o].immediate ? $(this._inputElement).on(t[o].name, n) : $(this._inputElement).on(t[o].name, s)
              ;(this._boundOnKeyDown = this._onKeyDown.bind(this)),
                (this._boundOnKeyPress = this._onKeyPress.bind(this)),
                $(this._inputElement).on('keydown', this._boundOnKeyDown).on('keypress', this._boundOnKeyPress),
                this._eventListener(),
                i.autoFocus && m.registerAutoFocus(this)
            }
            function O(t, e) {
              var i = ChartApiInstance.supportedSymbolsTypes()
              E() &&
                (i = i.filter(function (t) {
                  return 'quandl' !== t.value && 'economic' !== t.value
                }))
              var n = TVSettings.getValue('symboledit.filter')
              return (
                !i.some(function (t) {
                  return t.value === n
                }) &&
                  i.length > 0 &&
                  (n = i[0].value),
                0 !== i.length &&
                  (i.forEach(function (i) {
                    var s = i.value,
                      o = $('<a class="type-filter">')
                        .attr('href', '#' + s)
                        .text($.t(i.name))
                    s === n && o.addClass('active'),
                      o.on('click', function (i) {
                        i.preventDefault(),
                          e.find('.type-filter').removeClass('active'),
                          $(this).addClass('active'),
                          t.typeFilter(s),
                          TVSettings.setValue('symboledit.filter', s)
                      }),
                      o.appendTo(e)
                  }),
                  t.typeFilter(n),
                  !0)
              )
            }
            function R(t, e) {
              var i = ChartApiInstance.supportedExchangesList()
              i.reduce(function (t, e) {
                return (t[e.value] = e.name), t
              }, w)
              var n,
                s = ((n = TVSettings.getValue('symboledit.exchangefilter')), /_MINI$/.test(n) ? '' : n)
              if ('bovespa' !== TradingView.widgetCustomer) {
                if (0 === i.length) return !1
                var o = $('<div id="exchange-filter" class="exchange-filter">').appendTo(e)
                return L(t, i, s, o), t.setExchangeFilter(s), !0
              }
            }
            ;(m.registerAutoFocus = function (t) {
              if ((t instanceof jQuery && (t = t.data('symbol-search-instance')), !(t instanceof m)))
                throw new TypeError(
                  'arg must be an SymbolSearch instance of jQuery input with bound SymbolSearch object'
                )
              o.registerListener(
                'symbolEdit',
                function (t) {
                  if (x(t)) {
                    t.preventDefault(), this.resetState(), (this._skipAutoFocus = !0), this._inputElement.focus()
                    var e = String.fromCharCode(t.charCode)
                    'function' == typeof this._setInputValue ? this._setInputValue(e) : (this._inputElement.value = e),
                      this._eventListener()
                  }
                }.bind(t)
              )
            }),
              (m.prototype.searchRequestDelay = 0),
              (m.setSearchRequestDelay = function (t) {
                m.prototype.searchRequestDelay = t
              }),
              (m.prototype.resetState = function () {
                this._state = {}
              }),
              (m.prototype.typeFilter = function (t) {
                if (!(arguments.length > 0)) return this._state.typeFilter
                t !== this._state.typeFilter &&
                  (null == t ? delete this._state.typeFilter : (this._state.typeFilter = t + ''),
                  delete this._state.keepListFor,
                  this._onSelectionChanged(),
                  this.selectExchangeFilter())
              }),
              (m.prototype.setExchangeFilter = function (t) {
                t !== this._state.exchangeFilter &&
                  (null == t ? delete this._state.exchangeFilter : (this._state.exchangeFilter = t + ''),
                  delete this._state.keepListFor,
                  this._onSelectionChanged())
              }),
              (m.prototype.setTradableFilter = function (t) {
                t !== this._state.tradableFilter && ((this._state.tradableFilter = t), this._onSelectionChanged())
              }),
              (m.prototype.getExchangeFilter = function () {
                return this._state.exchangeFilter
              }),
              (m.prototype.destroy = function () {
                $(this._inputElement).off(), $(this._inputElement).removeData('symbol-search-instance')
              }),
              (m.prototype._moveSelection = function (t, e) {
                if (this.$list) {
                  var i,
                    n = this.$list.find('table.symbol-edit-popup'),
                    s = n.find('tr:not(.hidden)'),
                    o = n.find('tr.symbol-edit-popup-active').removeClass('symbol-edit-popup-active'),
                    r = 0 !== o.length ? s.index(o) : -1
                  if (r !== (i = 1 === t ? (o.get(0) === s.get(-1) ? 0 : r + t) : Math.max(-1, r + t))) {
                    var a = s.get(i)
                    if (a) {
                      var l = this._getItemByElement(a)
                      if (P.isRoot(l)) {
                        var c = a.getAttribute('data-root')
                        a.classList.add('symbol-edit-popup-active'),
                          this._scrollHighlightIntoView(),
                          c
                            ? ((this._state.highlightedItem = null), (this._selectedGroupRoot = c))
                            : ((this._state.highlightedItem = l), this._replaceCurrentSymbol(e))
                      } else delete this._selectedGroupRoot, this._highlightItem(l, !0, e)
                    }
                  }
                }
              }),
              (m.prototype._groupToggleCollapsed = function (t, e) {
                this._groupListHandler && this._groupListHandler.toggleCollapsed(t, e)
              }),
              (m.prototype._onKeyDown = function (t) {
                ;(t.keyCode !== u.DOWN_ARROW && t.keyCode !== u.UP_ARROW) ||
                  (this._moveSelection(t.keyCode === u.DOWN_ARROW ? 1 : -1, !0),
                  t.preventDefault(),
                  t.stopPropagation()),
                  t.keyCode === u.ENTER && t.stopPropagation(),
                  !this._selectedGroupRoot ||
                    (t.keyCode !== u.LEFT_ARROW && t.keyCode !== u.RIGHT_ARROW) ||
                    (this._groupToggleCollapsed(this._selectedGroupRoot, t.keyCode === u.LEFT_ARROW),
                    t.preventDefault())
              }),
              (m.prototype._onKeyPress = function (t) {
                if (t.keyCode === u.DOWN_ARROW || t.keyCode === u.UP_ARROW) {
                  if (t.charCode) return
                  if (this._boundOnKeyDown)
                    return (
                      $(this._inputElement).off('keydown', this._boundOnKeyDown),
                      delete this._boundOnKeyDown,
                      void t.preventDefault()
                    )
                  this._moveSelection(t.keyCode === u.DOWN_ARROW ? 1 : -1), t.preventDefault()
                }
                t.keyCode === u.ENTER &&
                  (this._selectedGroupRoot
                    ? (this._groupToggleCollapsed(this._selectedGroupRoot, !1), t.preventDefault())
                    : this.acceptTypeIn())
              }),
              (m.prototype._eventListener = function (t, i) {
                var n = this._inputElement,
                  s = this._getInputValue()
                e.enabled('uppercase_instrument_names') && (s = s.toUpperCase())
                var o = !1,
                  r = !1
                this._state.value !== s &&
                  (this._state.hasOwnProperty('value') && this._onValueChanged && this._onValueChanged(s),
                  (this._state.value = s),
                  (o = !0),
                  this._inputParserMixin && this._inputParserMixin.parse()),
                  this._fixIntervalCase()
                var a = this._limitInputSelectionValue('selectionStart')
                this._state.selectionStart !== a && ((this._state.selectionStart = a), (r = !0))
                var l = this._limitInputSelectionValue('selectionEnd')
                if (
                  (this._state.selectionEnd !== l && ((this._state.selectionEnd = l), (r = !0)),
                  this._state.selectionDirection !== n.selectionDirection &&
                    ((this._state.selectionDirection = n.selectionDirection), (r = !0)),
                  o || (r && this._inputParserMixin))
                ) {
                  this._onSelectionChanged(void 0, i)
                  var c = !1
                  this._getInputValue() !== this._state.value && (this._setInputValue(this._state.value), (c = !0)),
                    (c ||
                      this._state.selectionStart !== this._limitInputSelectionValue('selectionStart') ||
                      this._state.selectionEnd !== this._limitInputSelectionValue('selectionEnd')) &&
                      n.setSelectionRange &&
                      n.setSelectionRange(
                        this._state.selectionStart,
                        this._state.selectionEnd,
                        this._state.selectionDirection
                      )
                }
              }),
              (m.prototype._fixIntervalCase = function () {
                if (this._selectionInsideInterval()) {
                  var t = m.detachInterval(this._inputElement.value)
                  ;/[a-z]/.test(t.detached) && (this._inputElement.value = t.rest + t.detached.toUpperCase())
                }
              }),
              (m.prototype._selectionInsideInterval = function (t) {
                if (this._ignoreInterval) return !1
                var e = m.detachInterval(this._inputElement.value)
                return (
                  !!e &&
                  ('string' == typeof t
                    ? this._inputElement[t] > e.rest.length
                    : this._inputElement.selectionStart > e.rest.length &&
                      this._inputElement.selectionEnd > e.rest.length)
                )
              }),
              (m.prototype._limitInputSelectionValue = function (t) {
                return this._selectionInsideInterval(t)
                  ? m.detachInterval(this._inputElement.value).rest.length
                  : t in this._inputElement
                  ? this._inputElement[t]
                  : this._inputElement.value.length
              }),
              (m.prototype._getInputValue = function () {
                if (this._ignoreInterval) return this._inputElement.value
                var t = m.detachStoreInterval(this._inputElement.value)
                return $(this._inputElement).toggleClass('interval-error', m.intervalError()), t
              }),
              (m.prototype._setInputValue = function (t) {
                this._ignoreInterval
                  ? (this._inputElement.value = t)
                  : (this._inputElement.value = m.recallAttachInterval(t))
              }),
              (m.prototype._onSelectionChanged = function (t, e) {
                var n = this
                function s(t, e, i, s, o) {
                  ;(n._state.contextTicker = t),
                    (n._state.contextExchange = e),
                    (n._state.contextType = i),
                    (n._state.contextTradable = o),
                    (n._state.keepListFor && n._state.keepListFor === s) ||
                      (n._getSuggestList(), delete n._state.keepListFor)
                }
                if (
                  !i.some(function (t) {
                    return t.test(n._state.value)
                  }) &&
                  (this._isSpreadInInput() || (this._inputParserMixin && !0 !== e))
                )
                  this._inputParserMixin.onSelectionChanged(s)
                else if (this.$list) {
                  this._state._selectedTicker = null
                  var o = this._state.value
                  this._isSpreadInInput() && this._state.contextToken && (o = this._state.contextToken.value),
                    s(o, this.getExchangeFilter(), this._state.typeFilter, o, this._state.tradableFilter)
                }
              }),
              (m.prototype._clearSelectionState = function () {
                delete this._state.contextTicker,
                  delete this._state.contextExchange,
                  delete this._state.contextType,
                  delete this._state.contextToken,
                  delete this._state.keepListFor
              }),
              (m.prototype._clearSearchTimeout = function () {
                this._searchTimeout && (clearTimeout(this._searchTimeout), (this._searchTimeout = null))
              }),
              (m.prototype._doGetSuggestList = function () {
                this._clearSearchTimeout()
                var t = E(),
                  e = this._state.contextTicker || '',
                  i = this._state.contextExchange || this.getExchangeFilter() || '',
                  n = this._state.typeFilter || '',
                  s = t && this._state.tradableFilter,
                  o = this._getUnhideSymbolSearchGroups(),
                  r = window.language || ''
                this._showLoading()
                var a = this
                ChartApiInstance.searchSymbols(e, i, n, r, !1, !1, t, s, o, function (t) {
                  e !== (a._state.contextTicker || '') ||
                    i !== (a._state.contextExchange || a.getExchangeFilter() || '') ||
                    n !== (a._state.typeFilter || '') ||
                    (n === p.types.QUANDL && (t = a._processQuandlResponse(t)),
                    a._renderSuggestList(t),
                    a._onResponse(t))
                })
              }),
              (m.prototype._getSuggestList = function () {
                this._clearSearchTimeout(),
                  (this._searchTimeout = setTimeout(this._doGetSuggestList.bind(this), m.prototype.searchRequestDelay))
              }),
              (m.prototype._showLoading = function () {
                if (this.$list && !this._spinner) {
                  this._clearSuggestList()
                  var t = $('<div class="symbol-search-loading">').appendTo(this.$list)
                  this._spinner = new a('medium').spin(t.get(0))
                }
              }),
              (m.prototype._groupContracts = function (t) {
                for (var e = ChartApiInstance.symbolsGrouping(), i = {}, n = [], s = 0; s < t.length; ++s) {
                  var o = t[s]
                  if (o.prefix || Array.isArray(o.contracts)) return t
                  var r = e[o.type]
                  if (void 0 !== r) {
                    var a = r.exec(o.symbol)
                    if (a) {
                      var l,
                        c = a[1]
                      c in i
                        ? (l = i[c])
                        : ((l = n.length),
                          (i[c] = l),
                          n.push({
                            type: o.type,
                            symbol: c,
                            exchange: o.exchange,
                            description: o.description,
                            full_name: o.exchange + ':' + c,
                            contracts: [],
                          })),
                        n[l].contracts.push(o)
                    } else n.push(o)
                  } else n.push(o)
                }
                return n
              }),
              (m.prototype._renderSuggestList = function (t) {
                if (this.$list) {
                  ;(t = this._groupContracts(t)), (C = d('futures-descriptions'))
                  var i = this,
                    n = this._state
                  this._clearSuggestList()
                  var s = c(n.contextTicker).trim(),
                    o = new RegExp(s.replace(' ', '|'), 'i' + (s.length > 1 ? 'g' : ''))
                  if (
                    (delete n.highlightedItem,
                    this._hidePro &&
                      (t = t.filter(function (t) {
                        return !t.params || -1 === t.params.indexOf('pro')
                      })),
                    0 !== t.length)
                  ) {
                    var r = document.createElement('table')
                    r.setAttribute('class', 'symbol-edit-popup')
                    var a = new m.GroupListHandler(r, o, {}),
                      l = null
                    this._renderedResponse = []
                    TVSettings.getBool('fxcm_cfd', !1)
                    for (var p = 0; p < t.length; p++) {
                      var u = t[p]
                      a.append(u),
                        l || u.ticker !== n.contextTicker || u.exchange !== n.contextExchange || (l = u),
                        this._renderedResponse.push(u)
                    }
                    e.enabled('expand_symbolsearch_items') || a.collapse(),
                      (this._groupListHandler = a),
                      l && this._highlightItem(u),
                      $(r)
                        .on('click', 'tr', function (t) {
                          if (!t.isDefaultPrevented()) {
                            t.preventDefault()
                            var e = i._getItemByElement(this)
                            e &&
                              e.full_name &&
                              (i._isSpreadInInput() ? i._highlightItem(e, !0, !1) : i.accept(e.full_name, e.ticker))
                          }
                        })
                        .appendTo(this.$list)
                  } else
                    this.$list.html(
                      '<div style="text-align: center; padding: 7px 0; font-style: italic;">' +
                        $.t('No symbols matched your criteria') +
                        '</div>'
                    )
                }
              }),
              (m.prototype._isEmptySuggestList = function () {
                return !(this._renderedResponse && this._renderedResponse.length)
              }),
              (m.prototype._isSpreadInInput = function () {
                return this._inputParserMixin && this._state.parsed && this._state.parsed.length > 1
              }),
              (m.prototype._getItemByElement = function (t) {
                return this._renderedResponse && this._groupListHandler
                  ? this._groupListHandler.getItemByTicker(t.getAttribute('data-item-ticker'))
                  : null
              }),
              (m.prototype._getElementByItem = function (t) {
                if (!this._renderedResponse || !this.$list) return null
                var e = P.itemTicker(t)
                return this.$list.get(0).querySelector('tr[data-item-ticker="' + e + '"]')
              }),
              (m.prototype._highlightItem = function (t, e, i) {
                var n = this._state
                if (n.highlightedItem) {
                  var s = this._getElementByItem(n.highlightedItem)
                  s && $(s).removeClass('symbol-edit-popup-active')
                }
                n.highlightedItem = t
                var o = this._getElementByItem(n.highlightedItem)
                o && ($(o).addClass('symbol-edit-popup-active'), this._scrollHighlightIntoView()),
                  e && this._replaceCurrentSymbol(i)
              }),
              (m.prototype._scrollHighlightIntoView = function () {
                var t = this.$list.find('tr.symbol-edit-popup-active')
                t.length &&
                  (t.offset().top < this.$list.offset().top
                    ? this.$list.scrollTop(this.$list.scrollTop() - (this.$list.offset().top - t.offset().top))
                    : t.offset().top + t.outerHeight() > this.$list.offset().top + this.$list.outerHeight() &&
                      this.$list.scrollTop(
                        this.$list.scrollTop() +
                          (t.offset().top + t.outerHeight() - (this.$list.offset().top + this.$list.outerHeight()))
                      ))
              }),
              (m.prototype._clearSuggestList = function () {
                ;(this._renderedResponse = null),
                  this._spinner && (this._spinner.stop(), delete this._spinner),
                  this.$list && this.$list.empty()
              }),
              (m.prototype._showErrorNotice = function () {
                this.$list && (this._clearSuggestList(), this.$list.text('Invalid expression'))
              }),
              (m.prototype._replaceCurrentSymbol = function (t) {
                var e = this._state
                if (e.highlightedItem) {
                  var i = e.highlightedItem,
                    n = '',
                    s = 0
                  if (this._isSpreadInInput() || (this._inputParserMixin && !0 !== t)) {
                    var o = this._inputParserMixin.replaceCurrentSymbol(i)
                    if (!o.ok) return
                    ;(n = o.newValue), (s = o.newCaretPos), (e.keepListFor = o.keepListFor)
                  } else
                    (this._state._selectedTicker = i.ticker || i.symbol),
                      (e.keepListFor = this._state._selectedTicker),
                      (s = (n = !0 === t && i.full_name && this._inputParserMixin ? i.full_name : i.symbol).length)
                  this._setInputValue(n),
                    this._inputElement.setSelectionRange
                      ? this._inputElement.setSelectionRange(s, s)
                      : this._inputElement.select(),
                    this._eventListener(void 0, t)
                }
              }),
              (m.prototype.splitAndAcceptUserInput = function () {
                for (var t = this._getInputValue().split(','), e = 0; e < t.length; e++) this.acceptSymbolIn(t[e])
              }),
              (m.prototype.acceptSymbolIn = function (t) {
                var e, i
                this._inputParserMixin
                  ? (e = this._inputParserMixin.parseSymbol(t))
                  : ((e = t), (i = this._state._selectedTicker || t)),
                  this.accept(e, i)
              }),
              (m.prototype.acceptTypeIn = function () {
                this._allowMultipleSymbols ? this.splitAndAcceptUserInput() : this.acceptSymbolIn(this._getInputValue())
              }),
              (m.prototype.accept = function (t, e) {
                var i = this
                !(function () {
                  if ((e = e || t) || ('' === e && i.acceptEmpty)) {
                    delete i._state.keepListFor
                    var n = i._ignoreInterval ? void 0 : m.getInterval(!0)
                    ;(i._inputElement.value = t),
                      i._eventListener(),
                      i._callback && i._callback(e, n),
                      $(i._inputElement).trigger('accept-symbol', [e])
                  }
                })()
              }),
              (m.prototype.bindListWrapper = function (t) {
                if (0 === (t = $(t).eq(0)).size())
                  throw new TypeError('element must be a DOM element, jQuery object or selector')
                ;(this.$list = t), this._clearSelectionState(), this._eventListener()
              }),
              (m.prototype.removeListWrapper = function () {
                delete this.$list, this._clearSuggestList(), this._clearSelectionState(), this._eventListener()
              }),
              (m.prototype.selectExchangeFilter = function () {
                this.$filterContainer.find('.exchange-filter').hide(),
                  this._state.typeFilter === p.types.QUANDL
                    ? this.$filterContainer.find('#quandl-filter').show()
                    : this._state.typeFilter !== p.types.ECONOMIC &&
                      this.$filterContainer.find('#exchange-filter').show()
              }),
              (m.prototype._onResponse = function (t) {
                t.length > 0 && this._state.typeFilter === p.types.QUANDL && this._showNotification()
              }),
              (m.prototype._showNotification = function () {
                if (TVSettings.getBool('symboledit.show_quandl_notification', !0)) {
                  var t =
                      $.t(
                        'Quandl is a huge financial database that we have connected to TradingView. Most of its data is EOD and is not updated in real-time, however the information may be extremely useful for fundamental analysis.'
                      ) +
                      ' <a target="_blank" href="' +
                      ('ru' === window.locale
                        ? 'http://blog.tradingview.com/?p=1530&lang=ru'
                        : 'http://blog.tradingview.com/?p=1530') +
                      '">' +
                      $.t('Read our blog for more info!') +
                      '</a>',
                    e = $('<div class="symbol-edit-notification">').prependTo(this.$list)
                  e.html(t),
                    e.find('a').click(function (t) {
                      t.preventDefault()
                      var e = $(this).attr('href')
                      window.open(e, '_blank')
                    }),
                    $('<a class="close">')
                      .appendTo(e)
                      .click(function () {
                        TVSettings.setValue('symboledit.show_quandl_notification', !1), e.remove()
                      })
                }
              }),
              (m.prototype._processQuandlResponse = function (t) {
                return t.datasets
                  .filter(function (t) {
                    return !t.premium
                  })
                  .map(function (t) {
                    return {
                      description: t.name,
                      exchange: t.database_code,
                      full_name: 'QUANDL:' + t.database_code + '/' + t.dataset_code,
                      params: ['eod'],
                      symbol: t.dataset_code,
                      type: 'quandl',
                    }
                  })
              }),
              (m.prototype._getUnhideSymbolSearchGroups = function () {
                var t = '',
                  e = null
                if (e) {
                  var i = e.metainfo().configFlags.supportUnhideSymbolSearchGroups
                  e.connectionStatus() === (void 0).CONNECTED && i && (t = e.unhideSymbolSearchGroups().join(',')),
                    (void 0)().trackEvent(
                      'Symbol Search Tradable checkbox',
                      E() && this._state.tradableFilter ? 'on' : 'off'
                    )
                }
                return t
              }),
              (m.prototype.forceFocus = function () {
                this._inputElement.focus()
              }),
              (m.createSuggestListRow = function (t, e, i, n) {
                n || (n = {})
                var s = document.createElement('tr'),
                  o = 'symbol-edit-popup'
                n.addClass && (o += ' ' + n.addClass), s.setAttribute('class', o)
                var a = document.createElement('td')
                a.setAttribute(
                  'class',
                  'symbol-edit-popup-td name apply-overflow-tooltip apply-overflow-tooltip--allow-text'
                )
                var l,
                  c = t.symbol.replace(e, '<strong>$&</strong>'),
                  p = n.nameContent || c
                ;((l = null), Boolean(l && l.metainfo().configFlags.supportDisplayBrokerNameInSymbolSearch)) &&
                  t.broker_symbol &&
                  (p = p + ' (' + t.broker_symbol.replace(e, '<strong>$&</strong>') + ')'),
                  (a.innerHTML = p)
                var u = document.createElement('td')
                u.setAttribute('class', 'symbol-edit-popup-td desc apply-overflow-tooltip')
                var d = t.description.toUpperCase()
                if (C && t.contractDescription) {
                  var h = k.exec(t.contractDescription)
                  d += h ? ' (' + T(i, h[1]) + ' ' + h[2] + ')' : ' (' + T(i, t.contractDescription) + ')'
                }
                u.innerHTML = e.test(t.symbol) ? d : d.replace(e, '<strong>$&</strong>')
                var f = document.createElement('td')
                f.setAttribute('class', 'symbol-edit-popup-td type apply-overflow-tooltip')
                var g = ''
                if (n.typeContent) g = n.typeContent
                else {
                  t.params && ~t.params.indexOf('eod') && (g = '<i class="eod">eod</i>&nbsp;')
                  var _ = r(t.type, t.typespecs)
                  if (t.exchange) g += _ + (_.length ? ' - ' : '') + I(t)
                  else g += _
                }
                f.innerHTML = g
                var b = document.createElement('td')
                b.setAttribute('class', 'symbol-edit-popup-td flag apply-overflow-tooltip'),
                  (b.innerHTML = m.getItemFlag(t))
                var v = b.getElementsByTagName('svg')[0]
                return (
                  v && v.setAttribute('class', 'flag'),
                  s.appendChild(a),
                  s.appendChild(u),
                  s.appendChild(f),
                  s.appendChild(b),
                  s
                )
              }),
              (m.getItemFlag = function (t) {
                return ''
              })
            var A,
              D,
              L = function (t, i, n, o) {
                !(i = s.displayedExchangesFilter(i)).some(function (t) {
                  return t.value === n
                }) &&
                  i.length > 0 &&
                  (n = i[0].value)
                var r = $('<select>').appendTo(o)
                i.forEach(function (t) {
                  var e = t.value,
                    i = t.name || e,
                    s = t.desc || i,
                    o = $('<option>')
                      .addClass('filter-item')
                      .attr('value', e)
                      .text($.t(i))
                      .data('custom-option-text', $.t(s))
                      .appendTo(r)
                  t.value === n && o.attr('selected', !0)
                }),
                  r.change(function () {
                    var e = $(this).val() || ''
                    TVSettings.setValue('symboledit.exchangefilter', e), t.setExchangeFilter(e)
                  }),
                  r.selectbox({
                    speed: 0,
                    useCustomPrependWithSelector: 'after',
                    customPrependSelectorClass: 'exchange-with-flag',
                    classHolder: 'tv-unstyled-select-container tv-symbol-select',
                    classOptions: e.enabled('symbol_search_three_columns_exchanges')
                      ? 'sbOptions three-column-filter'
                      : 'sbOptions',
                  })
              }
            function F(t) {
              var e = R(t, t.$filterContainer)
              return t.selectExchangeFilter(), e
            }
            function P(t, e, i) {
              ;(this._container = t),
                (this._tickerRegExp = e),
                (this._translationCache = i),
                (this._exchangeNameCache = this._roots = {}),
                (this._itemsByTicker = {})
            }
            return (
              (m.showDialog = function (t) {
                t = t || {}
                if (!h.get('Symbol Search')) {
                  var e = h.createDialog('Symbol Search', {
                    hideTitle: !0,
                    hideCloseCross: !0,
                    dragHandle: '.filter',
                    width: '750px',
                    dragOptions: { cancel: '.sbOptions' },
                    content:
                      '<div class="symbol-block"><div class="spread-actions"></div><div class="symbol-block-inputspacer"><input maxlength="1000" /><div class="search-icon"></div></div></div><div class="filter"></div><div class="results"></div>',
                    ownerDocument: t.ownerDocument,
                  })
                  h.positionDialog(e)
                  var i,
                    n,
                    s,
                    o = e.find('._tv-dialog-content').addClass('symbol-search-dialog'),
                    r = o.find('.results'),
                    a = o.find('input').get(0)
                  if (
                    (t.initialValue && (a.value = t.initialValue),
                    'selectionStart' in a && (a.selectionStart = a.selectionEnd = a.value.length),
                    a.focus(),
                    b())
                  )
                    t.ignoreInterval || ((n = m.getInputValueGetter(a)), (s = m.getInputValueSetter(a))),
                      (i = (void 0).addSpreadActions(o.find('.spread-actions'), a, n, s))
                  var l = new m({
                      input: a,
                      list: o.find('.results').get(0),
                      callback: function (e, i) {
                        t.callback && t.callback(e, i), h.destroy('Symbol Search')
                      },
                      onParse: i,
                      ignoreInterval: t.ignoreInterval,
                    }),
                    c = o.find('.filter')
                  l.$filterContainer = c
                  var p = O(l, c),
                    u = F(l)
                  return (
                    p || u || c.attr('style', 'display: none'),
                    h.resizeContent(e.height(), r),
                    h.applyHandlers(e),
                    h.positionDialog(e),
                    e.on('destroy', function () {
                      TVSettings.setValue('symboledit.dialog_last_entry', a.value)
                    }),
                    e
                  )
                }
              }),
              (m.bindToInput = function (t, i) {
                ;(i = i || {}), (t = $(t).eq(0))
                var s,
                  o = g(),
                  r = t.prop('ownerDocument'),
                  a = i.overlapManager || f(r),
                  c = i.callback,
                  p = null,
                  d = null,
                  h = !1,
                  _ = null
                function x() {
                  _ &&
                    (a.removeWindow(o),
                    w.removeListWrapper(),
                    _.off(),
                    _.remove(),
                    (_ = null),
                    l.hide(),
                    'function' == typeof i.onPopupClose && i.onPopupClose())
                }
                function C(t) {
                  t.preventDefault()
                }
                var E,
                  I,
                  T = i.spreadActions && $(i.spreadActions).eq(0)
                T &&
                  T.size() &&
                  b() &&
                  (i.ignoreInterval || ((E = m.getInputValueGetter(t.get(0))), (I = m.getInputValueSetter(t.get(0)))),
                  (s = (void 0).addSpreadActions(T, t.get(0), E, I)))
                var w = new m({
                    input: t,
                    onValueChanged: function () {
                      if (!_) {
                        var t = a.ensureWindow(o, { position: 'relative' }),
                          n = (function (t, e, i) {
                            var n = $('<div class="symbol-edit-popup">').appendTo(e),
                              s = $('<div class="filter">').appendTo(n)
                            ;(t.$filterContainer = s), O(t, s), F(t)
                            var o = $('<div class="table-wrapper">').appendTo(n),
                              r = $(t._inputElement),
                              a = r.offset()
                            if ('relative' === i)
                              var l = n.offset(),
                                c = Math.min(0, $(window).width() - l.left - n.outerWidth()),
                                p = 1
                            else
                              (c = Math.max(0, Math.min(a.left, $(window).width() - n.outerWidth()))),
                                (p = a.top + r.outerHeight() + 1)
                            n.css('left', c), n.css('top', p)
                            var u = s.outerHeight(),
                              d = $(window).scrollTop(),
                              h = r.height(),
                              f =
                                (TradingView.isMobile.any()
                                  ? parseInt(window.screen.height, 10)
                                  : parseInt($(window).height(), 10)) -
                                (a.top - d) -
                                h / 2
                            return o.css('maxHeight', f - h - u + 'px'), { popup: n, listWrapper: o }
                          })(w, t, i.position)
                        ;(_ = n.popup),
                          w.bindListWrapper(n.listWrapper),
                          _.on('focus', C),
                          _.on('click', C),
                          _.on('mousedown', C),
                          _.on('focus', '*', C),
                          _.on('click', '*', C),
                          _.on('mousedown', '*', C),
                          'function' == typeof i.onPopupOpen && i.onPopupOpen(n.popup)
                      }
                      if (e.enabled('charting_library_base')) {
                        var s = this._state
                        if (s.keepListFor)
                          if (s.highlightedItem) {
                            var r = s.highlightedItem,
                              l = this._getInputValue()
                            e.enabled('uppercase_instrument_names') && (l = l.toUpperCase()),
                              r.symbol !== l && delete this._state.keepListFor
                          } else delete this._state.keepListFor
                      }
                    },
                    callback: function (e, n) {
                      x(),
                        ('function' == typeof d && d(e, n)) ||
                          ('function' == typeof c && c(e, n), 'function' == typeof p && p(e, n)),
                        i.clearAfterAccept && t.val(''),
                        i.keepFocus ? t.get(0).focus() : t.get(0).blur(),
                        w.resetState()
                    },
                    hidePro: i.hidePro,
                    autoFocus: i.autoFocus,
                    onEmptyApply: i.onEmptyApply,
                    onParse: s,
                    acceptEmpty: i.acceptEmpty,
                    dontUseInputParser: i.dontUseInputParser,
                    allowMultipleSymbols: i.allowMultipleSymbols,
                    ignoreInterval: i.ignoreInterval,
                  }),
                  k = !1,
                  R = !0
                function A(e) {
                  y(t, e), w.resetState()
                }
                if (
                  (TradingView.isMobile.iOS() && $('body').css('cursor', 'pointer'),
                  t.on('focus', function (e, i) {
                    ;(k = !0),
                      (h = !0),
                      w._skipAutoFocus
                        ? delete w._skipAutoFocus
                        : setTimeout(function () {
                            k && t.get(0).select()
                          }, 0)
                  }),
                  t.on('blur', function (e) {
                    var i,
                      n,
                      s,
                      o = this
                    if (
                      _ &&
                      ((i = document.activeElement),
                      (n = _.is(i)),
                      (s = _.has(i).length > 0),
                      (-1 !== navigator.userAgent.indexOf('Trident') || -1 !== navigator.userAgent.indexOf('MSIE')) &&
                        (n || s))
                    )
                      return (
                        e.preventDefault(),
                        e.stopImmediatePropagation(),
                        void setTimeout(function () {
                          t.focus()
                        }, 0)
                      )
                    if (
                      (TradingView.isMobile.iOS() && R && ((R = !1), (k = !0)),
                      TradingView.isMobile.iOS() && k && null === e.relatedTarget)
                    ) {
                      var r = function (t) {
                        $(t.target).closest(_).length ||
                          ($(o).is($(t.target))
                            ? $(document).off('touchend', 'body', r)
                            : ((k = !1),
                              setTimeout(function () {
                                x(), $(document).off('touchend', 'body', r)
                              }, 0)))
                      }
                      $(document).on('touchend', 'body', r)
                    } else k = !1
                    setTimeout(function () {
                      k || x()
                    }, 0)
                  }),
                  i.syncWithChartWidget)
                ) {
                  A(!0),
                    n.seriesShortSymbol.subscribe(function () {
                      A(!0)
                    }),
                    (p = function (t, e) {
                      ;(h = !(t || e)), t && n.symbol.setValue(t), e && S(e)
                    }),
                    (d = v),
                    i.syncOnBlur &&
                      t.on('blur', function () {
                        h && (A(!0), (h = !1))
                      })
                  var D = function () {
                    t.get(0).blur(), A(!1)
                  }
                  t.on('keypress', function (t) {
                    t.keyCode === u.ESC && D()
                  }),
                    t.on('keydown', function (t) {
                      t.keyCode === u.ESC && D()
                    })
                }
                return w
              }),
              (P.isRoot = function (t) {
                return !(!t || !Array.isArray(t.contracts))
              }),
              (P.itemTicker = function (t) {
                var e = P.isRoot(t)
                return (t.ticker || t.full_name) + (e ? '___root' : '')
              }),
              (P.prototype.addRoot = function (t, e) {
                this._currentTbody = null
                var i = document.createElement('tbody')
                this._container.appendChild(i)
                var n = this
                e.addEventListener('click', function (i) {
                  i.preventDefault(), e.classList.contains('collapsed') ? n.expand(t) : n.collapse(t)
                }),
                  e.setAttribute('data-root', t),
                  i.appendChild(e),
                  (this._roots[t] = { titleRow: e, tbody: i })
              }),
              (P.prototype.append = function (t) {
                var e = null,
                  i = null
                if (P.isRoot(t)) {
                  var n = t.symbol,
                    s = (t.exchange || 'unknown') + '_' + n
                  ;(e = m.createSuggestListRow(t, this._tickerRegExp, this._translationCache, {
                    nameContent: '<div>' + n.replace(this._tickerRegExp, '<strong>$&</strong>') + '</div>',
                    typeContent: T(this._translationCache, t.type) + (t.exchange && ' - ' + I(t)),
                    addClass: 'group-title',
                  })),
                    this._roots[s] || this.addRoot(s, e)
                  for (var o, r, a = 0; a < t.contracts.length; ++a)
                    (o = t.contracts[a]),
                      (r = m.createSuggestListRow(o, this._tickerRegExp, this._translationCache)),
                      (i = o.ticker || o.full_name),
                      (this._itemsByTicker[i] = o),
                      r.setAttribute('data-item-ticker', i),
                      this._roots[s].tbody.appendChild(r)
                } else
                  this._currentTbody ||
                    ((this._currentTbody = document.createElement('tbody')),
                    this._container.appendChild(this._currentTbody)),
                    (e = m.createSuggestListRow(t, this._tickerRegExp, this._translationCache)),
                    this._currentTbody.appendChild(e)
                ;(i = P.itemTicker(t)), (this._itemsByTicker[i] = t), e.setAttribute('data-item-ticker', i)
              }),
              (P.prototype.toggleCollapsed = function (t, e) {
                if (t) {
                  var i = this._roots[t]
                  i &&
                    ($(i.titleRow).toggleClass('collapsed', !!e),
                    $(i.tbody).find('tr:not(.group-title)').toggleClass('hidden', !!e))
                } else for (var t in this._roots) this.toggleCollapsed(t, e)
              }),
              (P.prototype.collapse = function (t) {
                this.toggleCollapsed(t, !0)
              }),
              (P.prototype.expand = function (t) {
                this.toggleCollapsed(t, !1)
              }),
              (P.prototype.getItemByTicker = function (t) {
                return this._itemsByTicker[t] || null
              }),
              (m.GroupListHandler = P),
              (m.detachInterval = function (t) {
                var e = /,[^,]*$/i.exec(t) || []
                if (e[0]) return { rest: t.substr(0, t.length - e[0].length), detached: e[0] }
              }),
              (A = ''),
              (D = null),
              (m.resetStoredInterval = function () {
                ;(A = ''), (D = null)
              }),
              (m.detachStoreInterval = function (t) {
                var e = m.detachInterval(t)
                return e ? ((A = e.detached), (D = _.normalize(A)), e.rest) : (m.resetStoredInterval(), t)
              }),
              (m.recallAttachInterval = function (t) {
                return t + A
              }),
              (m.getInterval = function (t) {
                var e = D
                return !0 === t && m.resetStoredInterval(), e
              }),
              (m.getInputValueGetter = function (t) {
                return function () {
                  return m.detachStoreInterval(t.value)
                }
              }),
              (m.getInputValueSetter = function (t) {
                return function (e) {
                  t.value = m.recallAttachInterval(e)
                }
              }),
              (m.intervalError = function () {
                return !(!A || /^,\s*$/.test(A) || D)
              }),
              m
            )
          })()
        t.exports = O
      }.call(this, i('Kxc7')))
    },
    qdOW: function (t, e, i) {
      'use strict'
      var n = i('Kxc7')
      ;(t.exports.displayedExchangesFilter = function (t) {
        return (
          n.enabled('symbol_search_limited_exchanges') &&
            (t = t.filter(function (t) {
              return !('bitcoin' === t.flag || 'crypto' === t.flag || t.hideInSymbolSearch)
            })),
          t
        )
      }),
        (t.exports.sortExchangesListByFlagIfNeeded = function (t) {
          return t
        })
    },
    sZhh: function (t, e, i) {
      'use strict'
      var n = i('56W2')
      i('Gs9W'),
        (function (t, e) {
          function i() {
            ;(this._state = []),
              (this._defaults = {
                classHolder: 'sbHolder',
                classHolderDisabled: 'sbHolderDisabled',
                classHolderOpen: 'sbHolderOpen',
                classSelector: 'sbSelector',
                classOptions: 'sbOptions',
                classGroup: 'sbGroup',
                classSub: 'sbSub',
                classDisabled: 'sbDisabled',
                classToggleOpen: 'sbToggleOpen',
                classToggle: 'sbToggle',
                classSeparator: 'sbSeparator',
                useCustomPrependWithSelector: '',
                customPrependSelectorClass: '',
                speed: 200,
                slidesUp: !1,
                effect: 'slide',
                onChange: null,
                beforeOpen: null,
                onOpen: null,
                onClose: null,
              })
          }
          function s(e, i, n, s) {
            function o() {
              i.removeClass(e.settings.customPrependSelectorClass),
                e._lastSelectorPrepend && (e._lastSelectorPrepend.remove(), delete e._lastSelectorPrepend),
                n.data('custom-option-prepend') &&
                  (e.settings.customPrependSelectorClass && i.addClass(e.settings.customPrependSelectorClass),
                  (e._lastSelectorPrepend = t(n.data('custom-option-prepend')).clone()),
                  i[e.settings.useCustomPrependWithSelector](e._lastSelectorPrepend))
            }
            e.settings.useCustomPrependWithSelector && (s ? (e._onAttachCallback = o) : o())
          }
          t.extend(i.prototype, {
            _refreshSelectbox: function (t, e) {
              if (!t) return !1
              var i = this._getInst(t)
              return null != i && (this._fillList(t, i, e), !0)
            },
            _isOpenSelectbox: function (t) {
              return !!t && this._getInst(t).isOpen
            },
            _isDisabledSelectbox: function (t) {
              return !!t && this._getInst(t).isDisabled
            },
            _attachSelectbox: function (e, i) {
              if (this._getInst(e)) return !1
              var s,
                o,
                r,
                a,
                l = t(e),
                c = this,
                p = c._newInst(l)
              l.find('optgroup'), l.find('option').length
              function u() {
                var e,
                  i = this.attr('id').split('_')[1]
                for (e in c._state)
                  e !== i &&
                    c._state.hasOwnProperty(e) &&
                    t(":input[sb='" + e + "']")[0] &&
                    c._closeSelectbox(t(":input[sb='" + e + "']")[0])
              }
              l.attr('sb', p.uid),
                t.extend(p.settings, c._defaults, i),
                (c._state[p.uid] = !1),
                l.hide(),
                (s = t('<div>', { id: 'sbHolder_' + p.uid, class: p.settings.classHolder }))
              var d = l.data('selectbox-css')
              function h(i) {
                l.children().each(function (n) {
                  var s
                  if (t(this).is(':selected')) {
                    if (38 == i && n > 0)
                      return (s = t(l.children()[n - 1])), c._changeSelectbox(e, s.val(), s.text()), !1
                    if (40 == i && n < l.children().length - 1)
                      return (s = t(l.children()[n + 1])), c._changeSelectbox(e, s.val(), s.text()), !1
                  }
                })
              }
              d && s.css(d),
                (o = t('<a>', {
                  id: 'sbSelector_' + p.uid,
                  href: '#',
                  class: p.settings.classSelector,
                  click: function (i) {
                    i.preventDefault(), i.stopPropagation(), u.apply(t(this), [])
                    var n = t(this).attr('id').split('_')[1]
                    c._state[n] ? c._closeSelectbox(e) : (c._openSelectbox(e), r.focus())
                  },
                  keyup: function (t) {
                    h(t.keyCode)
                  },
                })),
                (r = t('<a>', {
                  id: 'sbToggle_' + p.uid,
                  href: '#',
                  class: p.settings.classToggle,
                  click: function (i) {
                    i.preventDefault(), i.stopPropagation(), u.apply(t(this), [])
                    var n = t(this).attr('id').split('_')[1]
                    c._state[n] ? c._closeSelectbox(e) : (c._openSelectbox(e), r.focus())
                  },
                  keyup: function (t) {
                    h(t.keyCode)
                  },
                })),
                t('<div class="tv-caret"></div>').appendTo(r),
                r.appendTo(s),
                (a = t('<ul>', { id: 'sbOptions_' + p.uid, class: p.settings.classOptions, css: { display: 'none' } })),
                (p.sbOptions = a),
                (p.sbToggle = r),
                (p.sbSelector = o),
                this._fillList(e, p),
                t.data(e, 'selectbox', p),
                o.appendTo(s),
                a.appendTo(s),
                s.insertAfter(l),
                p._onAttachCallback && (p._onAttachCallback(), delete p._onAttachCallback),
                l.is(':disabled') && t.selectbox._disableSelectbox(e),
                l.change(function () {
                  var i = t(this).val(),
                    s = l.find("option[value='" + n(i) + "']").text()
                  c._changeSelectbox(e, i, s)
                })
            },
            _detachSelectbox: function (e) {
              var i = this._getInst(e)
              if (!i) return !1
              t('#sbHolder_' + i.uid).remove(), delete this._state[i.uid], t.data(e, 'selectbox', null), t(e).show()
            },
            _changeSelectbox: function (e, i, o) {
              var r = t(e.ownerDocument),
                a = this._getInst(e),
                l = this._get(a, 'onChange')
              if (
                !(
                  r.find('#sbSelector_' + a.uid).text() === o &&
                  r
                    .find('#sbOptions_' + a.uid)
                    .find('a[rel="' + i + '"]')
                    .hasClass('active')
                )
              ) {
                var c = t(e).find("option[value='" + n(i) + "']"),
                  p = r.find('#sbSelector_' + a.uid)
                p.text(o),
                  s(a, p, c),
                  r
                    .find('#sbOptions_' + a.uid)
                    .find('.active')
                    .removeClass('active'),
                  r
                    .find('#sbOptions_' + a.uid)
                    .find('a[rel="' + i + '"]')
                    .addClass('active'),
                  t(e).find('option').attr('selected', !1),
                  c.attr('selected', !0),
                  l ? l.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger('change')
              }
            },
            _enableSelectbox: function (e) {
              var i = this._getInst(e)
              if (!i || !i.isDisabled) return !1
              t(e.ownerDocument)
                .find('#sbHolder_' + i.uid)
                .removeClass(i.settings.classHolderDisabled),
                (i.isDisabled = !1),
                t.data(e, 'selectbox', i)
            },
            _disableSelectbox: function (e) {
              var i = this._getInst(e)
              if (!i || i.isDisabled) return !1
              t(e.ownerDocument)
                .find('#sbHolder_' + i.uid)
                .addClass(i.settings.classHolderDisabled),
                (i.isDisabled = !0),
                t.data(e, 'selectbox', i)
            },
            _optionSelectbox: function (e, i, n) {
              var s = this._getInst(e)
              return !!s && (null == n ? s[i] : ((s[i] = n), void t.data(e, 'selectbox', s)))
            },
            _openSelectbox: function (e) {
              var i = this._getInst(e),
                n = this
              if (i && !i.isOpen && !i.isDisabled) {
                var s = t(e.ownerDocument),
                  o = t(e.ownerDocument.defaultView),
                  r = s.find('#sbOptions_' + i.uid),
                  a = parseInt(o.height(), 10),
                  l = parseInt(o.width(), 10),
                  c = s.find('#sbHolder_' + i.uid).offset(),
                  p = o.scrollTop(),
                  u = r.prev().height(),
                  d = a - (c.top - p) - u / 2,
                  h = this._get(i, 'onOpen'),
                  f = this._get(i, 'beforeOpen'),
                  g = null
                f && (g = f()),
                  'object' == typeof g && null !== g
                    ? r.css(g)
                    : (d > 50 && !i.settings.slidesUp
                        ? r.css({ bottom: 'auto', top: u + 2 + 'px', maxHeight: d - u + 'px' })
                        : r.css({ top: 'auto', bottom: u + 2 + 'px', maxHeight: c.top - p - u / 2 + 'px' }),
                      c.left + r.width() > l
                        ? r.css('left', '-' + (r.width() - r.parent().width() + 3) + 'px')
                        : r.css('left', '-1px')),
                  'fade' === i.settings.effect ? r.fadeIn(i.settings.speed) : r.slideDown(i.settings.speed),
                  s.find('#sbToggle_' + i.uid).addClass(i.settings.classToggleOpen),
                  s.find('#sbHolder_' + i.uid).addClass(i.settings.classHolderOpen),
                  (this._state[i.uid] = !0),
                  (i.isOpen = !0),
                  h && h.apply(i.input ? i.input[0] : null, [i]),
                  t.data(e, 'selectbox', i),
                  s.unbind('click.sbClose').one('click.sbClose', function () {
                    n._closeSelectbox(e)
                  })
              }
            },
            _closeSelectbox: function (e) {
              var i = this._getInst(e)
              if (i && i.isOpen) {
                var n = t(e.ownerDocument),
                  s = this._get(i, 'onClose')
                n.find('#sbOptions_' + i.uid).hide(),
                  n.find('#sbToggle_' + i.uid).removeClass(i.settings.classToggleOpen),
                  n.find('#sbHolder_' + i.uid).removeClass(i.settings.classHolderOpen),
                  (this._state[i.uid] = !1),
                  (i.isOpen = !1),
                  s && s.apply(i.input ? i.input[0] : null, [i]),
                  t.data(e, 'selectbox', i),
                  n.unbind('click.sbClose')
              }
            },
            _newInst: function (t) {
              return {
                id: t[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'),
                input: t,
                uid: Math.floor(99999999 * Math.random()),
                isOpen: !1,
                isDisabled: !1,
                isSelected: !1,
                settings: {},
              }
            },
            _getInst: function (e) {
              try {
                return t.data(e, 'selectbox')
              } catch (i) {
                throw 'Missing instance data for this selectbox'
              }
            },
            _get: function (t, e) {
              return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _getOptions: function (e, i, n, o, r) {
              var a = !(!arguments[1] || !arguments[1].sub),
                l = !(!arguments[1] || !arguments[1].disabled),
                c = this
              arguments[0].each(function (e) {
                var i,
                  p = t(this),
                  u = t('<li>')
                p.is(':selected') && (n.sbSelector.text(p.text()), s(n, n.sbSelector, p, !0), (n.isSelected = !0)),
                  e === o - 1 && u.addClass('last'),
                  (function () {
                    var e = p.text(),
                      s = p.data('custom-option-text'),
                      o = void 0 !== s ? s : e
                    '__separator__' === p.val()
                      ? (i = t('<span>').addClass(n.settings.classSeparator)).appendTo(u)
                      : p.is(':disabled') || l
                      ? ((i = t('<span>', { text: o }).addClass(n.settings.classDisabled)),
                        a && i.addClass(n.settings.classSub),
                        i.appendTo(u))
                      : ((i = t('<a>', {
                          href: '#' + p.val(),
                          rel: p.val(),
                          text: o,
                          class: 'filter',
                          click: function (i) {
                            i.preventDefault()
                            var s = n.sbToggle
                            s.attr('id').split('_')[1]
                            c._closeSelectbox(r), c._changeSelectbox(r, t(this).attr('rel'), e), s.focus()
                          },
                        })),
                        p.is(':selected') && i.addClass('active'),
                        a && i.addClass(n.settings.classSub),
                        i.appendTo(u))
                    var d = p.data('custom-option-prepend')
                    d && i.prepend(d)
                  })(),
                  u.addClass(p.attr('class')),
                  u.appendTo(n.sbOptions)
              })
            },
            _fillList: function (e, i, n) {
              var o = this,
                r = t(e),
                a = (r.find('optgroup'), r.find('option')),
                l = a.length
              n || (n = 0),
                r
                  .children()
                  .slice(n)
                  .each(function (n) {
                    var s,
                      r = t(this),
                      a = {}
                    r.is('option')
                      ? o._getOptions(r, null, i, l, e)
                      : r.is('optgroup') &&
                        ((s = t('<li>')),
                        t('<span>', { text: r.attr('label') })
                          .addClass(i.settings.classGroup)
                          .appendTo(s),
                        s.appendTo(i.sbOptions),
                        r.is(':disabled') && (a.disabled = !0),
                        (a.sub = !0),
                        o._getOptions(r.find('option'), a, i, l, e))
                  }),
                i.isSelected ||
                  (i.sbSelector.text(a.first().text()), s(i, i.sbSelector, a.first(), !0), (i.isSelected = !0))
            },
          }),
            (t.fn.selectbox = function (e) {
              var i = Array.prototype.slice.call(arguments, 1)
              return ('string' == typeof e && 'isDisabled' == e) ||
                ('option' == e && 2 == arguments.length && 'string' == typeof arguments[1])
                ? t.selectbox['_' + e + 'Selectbox'].apply(t.selectbox, [this[0]].concat(i))
                : this.each(function () {
                    'string' == typeof e
                      ? t.selectbox['_' + e + 'Selectbox'].apply(t.selectbox, [this].concat(i))
                      : t.selectbox._attachSelectbox(this, e)
                  })
            }),
            (t.selectbox = new i()),
            (t.selectbox.version = '0.1.3')
        })(jQuery)
    },
    w3Pp: function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, 'marketType', function () {
          return l
        })
      var n = i('YFKU')
      i('HbRj')
      const s = new Map(),
        o = { context: 'market_type' },
        r = {
          cfd: Object(n.t)('cfd', o),
          bitcoin: Object(n.t)('crypto', o),
          crypto: Object(n.t)('crypto', o),
          dr: Object(n.t)('dr', o),
          forex: Object(n.t)('forex', o),
          futures: Object(n.t)('futures', o),
          index: Object(n.t)('index', o),
          stock: Object(n.t)('stock', o),
        },
        a = new Set(['cfd', 'spreadbet', 'defi'])
      function l(t, e = []) {
        const i = e.filter((t) => a.has(t)),
          l = `${t}_${i.sort().join('_')}`,
          c = s.get(l)
        if (void 0 !== c) return c
        const p = e.length ? Object(n.t)(t, o) + ' ' + i.join(' ') : r[t] || t
        return s.set(l, p), p
      }
    },
  },
])
