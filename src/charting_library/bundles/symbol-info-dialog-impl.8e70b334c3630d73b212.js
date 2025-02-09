;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbol-info-dialog-impl'],
  {
    '+EG+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var i = n('q1tI')
      class r extends i.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return i.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const o = i.createContext(null)
    },
    '0tRk': function (e, t, n) {
      !(function (e) {
        'use strict'
        e.defineLocale('pt-br', {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT'
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'em %s',
            past: '%s atrás',
            s: 'poucos segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: '%dº',
        })
      })(n('wd/R'))
    },
    '1Z/g': function (e, t, n) {
      'use strict'
      ;(function (e, i) {
        var r,
          o = n('PT1i').linking,
          a = n('+6ja').availableTimezones,
          s = n('kcTO').PriceFormatter,
          u = n('e3/o'),
          d = n('q1tI'),
          l = n('i8i4'),
          c = n('ZzxF').SymbolInfoDialog,
          _ = n('5mo2').SessionSpec,
          m = n('jCNj'),
          h = n('kcTO').numberToStringWithLeadingZero,
          f = n('Ialn'),
          y = n('IWXC').getQuoteSessionInstance,
          p = n('n5al').createSeriesFormatter,
          w = n('w3Pp').marketType,
          M = n('6vtU').getAdditionalSymbolInfoFields,
          D = [m.MONDAY, m.TUESDAY, m.WEDNESDAY, m.THURSDAY, m.FRIDAY, m.SATURDAY, m.SUNDAY],
          v = D.reduce(function (t, n) {
            return (t[n < 7 ? n + 1 : 1] = e.weekdaysMin(n)), t
          }, {})
        function Y(e) {
          return (
            !(function (e) {
              return e && e.type && 'economic' === e.type
            })(e) &&
            !(function (e, t) {
              return e && e.listed_exchange && t.indexOf(e.listed_exchange) >= 0
            })(e, ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'])
          )
        }
        function g(e) {
          return e.minmove2 > 0 && !e.fractional && e.pricescale
        }
        function L(e) {
          if (g(e)) return new s(e.pricescale / e.minmove2).format(e.minmove2 / e.pricescale)
        }
        function S(e) {
          return void 0 === e.minmov || void 0 === e.pricescale ? null : p(e).format(e.minmov / e.pricescale)
        }
        function T(e) {
          return w(e.type, e.typespecs)
        }
        function b(e) {
          return e.original_currency_code || e.currency_code || null
        }
        function k(e, t) {
          return e(t.original_unit_id || t.unit_id) || null
        }
        function O(e) {
          return e && e.type && 'futures' === e.type && e.front_contract
        }
        function H(e) {
          r || ((r = document.createElement('div')), document.body.appendChild(r)), l.render(d.createElement(c, e), r)
        }
        function x(e) {
          for (var t = a, n = 0; n < t.length; n++) if (t[n].id === e) return t[n].title
          return e
        }
        function C(e) {
          var t,
            n = new _('Etc/UTC', e)
          return ((t = n.entries()),
          D.reduce(function (e, n) {
            var i = t.filter(function (e) {
                return e.dayOfWeek() === n
              }),
              r = v[n] + ' '
            if (0 === i.length) return e.push(r + window.t('Closed')), e
            var o = i.reduce(function (e, t) {
              var n = t.sessionStartDayOfWeek(),
                i = t.sessionStartDaysOffset(),
                r = (function (e, t) {
                  for (var n = e + t; n > m.SATURDAY; ) n -= m.SATURDAY
                  return n
                })(n, i === t.sessionEndDaysOffset() ? 0 : i),
                o = n !== t.dayOfWeek(),
                a = o && r !== t.dayOfWeek(),
                s = o ? v[n] : '',
                u = a ? v[r] : '',
                d = E(t.start()) + s + '-' + E(t.start() + t.length()) + u
              return e.push(d), e
            }, [])
            return e.push(r + o.join(', ')), e
          }, [])).join('<br>')
        }
        function P(e) {
          return e || '-'
        }
        function W(e, t) {
          for (var n = 0, i = 0; i < t.length; i++)
            if (void 0 === t[i].getter) {
              var r = t[i].propName,
                o = t[i].altPropName,
                a = r in e ? r : void 0 !== o && o in e ? o : void 0
              if (void 0 !== a) {
                var s = e[a]
                ;(t[i].value = (t[i].formatter || P)(s)), n++
              }
            } else {
              var u = t[i].getter(e)
              null !== u && (t[i].value = u), n++
            }
          return (n -= (function (e, t) {
            for (var n = 0, i = 0; i < t.length; i++) {
              var r = t[i]
              void 0 === r.visibility || r.visibility(e) || (t.splice(i, 1), i--, n++)
            }
            return n
          })(e, t))
        }
        function E(e) {
          for (; e > m.minutesPerDay; ) e -= m.minutesPerDay
          var t = e % 60,
            n = h((e - t) / 60, 2) + ':' + h(t, 2)
          return f.isRtl() ? f.startWithLTR(n) : n
        }
        t.showSymbolInfoDialog = function (e, t) {
          if ((H({ isOpened: !1 }), null == e && (e = o.symbol.value()), null != e)) {
            e += ''
            var n = t && t.symbolInfo,
              a = [
                { title: window.t('Symbol Name'), propName: i.enabled('charting_library_base') ? 'name' : 'pro_name' },
                { title: window.t('Symbol Description'), propName: 'description' },
                { title: window.t('Symbol Type'), propName: 'type', getter: T },
                { title: window.t('Current Contract'), propName: 'front_contract', visibility: O },
                { title: window.t('Point Value'), propName: 'pointvalue' },
                { title: window.t('Exchange'), propName: 'exchange' },
                { title: window.t('Listed Exchange'), propName: 'listed_exchange' },
                {
                  title: window.t('Currency'),
                  propName: 'currency_code',
                  getter: b,
                  formatter: function (e) {
                    return e || ''
                  },
                  defValue: '',
                },
                {
                  title: window.t('Unit'),
                  propName: 'unit_id',
                  getter: k.bind(null, t.unitName),
                  visibility: function () {
                    return t.showUnit
                  },
                  formatter: function (e) {
                    return e || ''
                  },
                  defValue: '',
                },
                { title: window.t('Pip Size'), propName: 'pip_size', getter: L, visibility: g },
                { title: window.t('Tick Size'), propName: 'tick_size', getter: S },
                { title: window.t('Sector'), propName: 'sector' },
                { title: window.t('Industry'), propName: 'industry' },
                { title: window.t('Timezone'), propName: 'timezone', formatter: x, visibility: Y },
                {
                  title: window.t('Session'),
                  propName: 'session_display',
                  altPropName: 'session',
                  formatter: C,
                  visibility: Y,
                  setHtml: !0,
                },
              ],
              s = M()
            if (s && s.length > 0) for (const e of s) a.push({ title: e.title, propName: e.propertyName })
            var d = 0
            if ((n && (d = W(n, a)), d < a.length)) {
              var c = 'symbolinfodialog.' + u.guid(),
                _ = y('full')
              _.subscribe(c, e, function (t, n) {
                W(n.values, a), _.unsubscribe(c, e), H(m)
              })
            }
            var m = {
              isOpened: !0,
              onClose: function () {
                H({ isOpened: !1 }), l.unmountComponentAtNode(r), (r = null)
              },
              fields: a,
            }
            H(m)
          }
        }
      }.call(this, n('ldgD'), n('Kxc7')))
    },
    '8Rai': function (e, t, n) {
      'use strict'
      var i = n('q1tI')
      const r = function (e, { bubbles: t = !1, cancelable: n = !1, detail: i = null } = {}) {
        try {
          return new window.CustomEvent(e, { bubbles: t, cancelable: n, detail: i })
        } catch (r) {
          const o = document.createEvent('CustomEvent')
          return o.initCustomEvent(e, t, n, i), o
        }
      }
      var o = n('R5JZ')
      function a(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: a,
            touchStart: s,
            handler: u,
            reference: d,
            ownerDocument: l = document,
          } = e,
          c = Object(i.useRef)(null),
          _ = Object(i.useRef)(new r('timestamp').timeStamp)
        return (
          Object(i.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: a, touchStart: s },
              i = d ? d.current : c.current
            return Object(o.a)(_.current, i, u, l, e)
          }, [t, n, a, s, u]),
          d || c
        )
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    '8mBD': function (e, t, n) {
      !(function (e) {
        'use strict'
        e.defineLocale('pt', {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT'
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        })
      })(n('wd/R'))
    },
    AVTG: function (e, t, n) {
      'use strict'
      var i = n('q1tI'),
        r = n('TSYQ'),
        o = n('kgsH'),
        a = n('uo4K'),
        s = n('Iivm')
      function u(e) {
        const t = e.hideIcon ? null : i.createElement(s.a, { className: o.close, icon: a, onClick: e.onClose })
        return i.createElement(
          'div',
          { className: r(o.header, e.className), 'data-dragg-area': !0, ref: e.reference },
          e.children,
          t
        )
      }
      n('kQXJ')
      var d = n('XYXm')
      function l(e) {
        return i.createElement('div', { className: r(d.body, e.className), ref: e.reference }, e.children)
      }
      var c = n('8Rai'),
        _ = n('cJj4')
      function m(e) {
        let t
        e.text
          ? (t = i.createElement('span', null, e.text))
          : e.html && (t = i.createElement('span', { dangerouslySetInnerHTML: { __html: e.html } }))
        const n = Object(c.a)({ mouseDown: !0, touchStart: !0, handler: e.onClickOutside })
        if (!t) return null
        const o = r(_.message, e.className, { [_.error]: e.isError })
        return i.createElement('div', { className: o, key: '0' }, i.createElement('span', { ref: n }, t))
      }
      n.d(t, 'b', function () {
        return u
      }),
        n.d(t, 'a', function () {
          return l
        }),
        n.d(t, 'c', function () {
          return m
        })
    },
    AiMB: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      }),
        n.d(t, 'b', function () {
          return d
        })
      var i = n('q1tI'),
        r = n('i8i4'),
        o = n('e3/o'),
        a = n('jAh7'),
        s = n('+EG+')
      class u extends i.PureComponent {
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
            r.createPortal(i.createElement(d.Provider, { value: this }, this.props.children), e)
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context ? Object(a.getRootOverlapManager)() : this.context
        }
      }
      u.contextType = s.b
      const d = i.createContext(null)
    },
    B55N: function (e, t, n) {
      !(function (e) {
        'use strict'
        e.defineLocale('ja', {
          months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
          weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
          weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
          longDateFormat: {
            LT: 'Ah時m分',
            LTS: 'Ah時m分s秒',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah時m分',
            LLLL: 'YYYY年M月D日Ah時m分 dddd',
          },
          meridiemParse: /午前|午後/i,
          isPM: function (e) {
            return '午後' === e
          },
          meridiem: function (e, t, n) {
            return e < 12 ? '午前' : '午後'
          },
          calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: '[来週]dddd LT',
            lastDay: '[昨日] LT',
            lastWeek: '[前週]dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年',
          },
        })
      })(n('wd/R'))
    },
    DoHr: function (e, t, n) {
      !(function (e) {
        'use strict'
        var t = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı",
        }
        e.defineLocale('tr', {
          months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
          monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
          weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
          weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
          weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[haftaya] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen hafta] dddd [saat] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl',
          },
          ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
          ordinal: function (e) {
            if (0 === e) return e + "'ıncı"
            var n = e % 10
            return e + (t[n] || t[(e % 100) - n] || t[e >= 100 ? 100 : null])
          },
          week: { dow: 1, doy: 7 },
        })
      })(n('wd/R'))
    },
    Iivm: function (e, t, n) {
      'use strict'
      var i = n('mrSG'),
        r = n('q1tI')
      const o = r.forwardRef((e, t) => {
        const { icon: n = '' } = e,
          o = Object(i.a)(e, ['icon'])
        return r.createElement('span', Object.assign({}, o, { ref: t, dangerouslySetInnerHTML: { __html: n } }))
      })
      n.d(t, 'a', function () {
        return o
      })
    },
    'Ivi+': function (e, t, n) {
      !(function (e) {
        'use strict'
        e.defineLocale('ko', {
          months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
          weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
          weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
          longDateFormat: {
            LT: 'A h시 m분',
            LTS: 'A h시 m분 s초',
            L: 'YYYY.MM.DD',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h시 m분',
            LLLL: 'YYYY년 MMMM D일 dddd A h시 m분',
          },
          calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇초',
            ss: '%d초',
            m: '일분',
            mm: '%d분',
            h: '한시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한달',
            MM: '%d달',
            y: '일년',
            yy: '%d년',
          },
          ordinalParse: /\d{1,2}일/,
          ordinal: '%d일',
          meridiemParse: /오전|오후/,
          isPM: function (e) {
            return '오후' === e
          },
          meridiem: function (e, t, n) {
            return e < 12 ? '오전' : '오후'
          },
        })
      })(n('wd/R'))
    },
    Oaa7: function (e, t, n) {
      !(function (e) {
        'use strict'
        e.defineLocale('en-gb', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          ordinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10
            return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th')
          },
          week: { dow: 1, doy: 4 },
        })
      })(n('wd/R'))
    },
    R5JZ: function (e, t, n) {
      'use strict'
      function i(e, t, n, i, r) {
        function o(r) {
          if (e > r.timeStamp) return
          const o = r.target
          void 0 !== n && null !== t && null !== o && o.ownerDocument === i && (t.contains(o) || n(r))
        }
        return (
          r.click && i.addEventListener('click', o, !1),
          r.mouseDown && i.addEventListener('mousedown', o, !1),
          r.touchEnd && i.addEventListener('touchend', o, !1),
          r.touchStart && i.addEventListener('touchstart', o, !1),
          () => {
            i.removeEventListener('click', o, !1),
              i.removeEventListener('mousedown', o, !1),
              i.removeEventListener('touchend', o, !1),
              i.removeEventListener('touchstart', o, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    XYXm: function (e, t, n) {
      e.exports = { body: 'body-2IgbkgW8' }
    },
    ZzxF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SymbolInfoDialog', function () {
          return c
        })
      n('YFKU')
      var i = n('q1tI'),
        r = n('WXjp'),
        o = n('AVTG'),
        a = n('TSYQ'),
        s = n('ycI/'),
        u = n('FQhm'),
        d = n('ZjKI'),
        l = n('g9Yu')
      class c extends i.PureComponent {
        constructor() {
          super(...arguments), (this._close = () => this.props.onClose())
        }
        componentDidMount() {
          u.subscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null)
        }
        componentWillUnmount() {
          u.unsubscribe(d.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null)
        }
        render() {
          return i.createElement(
            r.a,
            { className: l.popupDialog, isOpened: this.props.isOpened, onClickOutside: this.props.onClose },
            i.createElement(o.b, { onClose: this.props.onClose }, window.t('Symbol Info')),
            i.createElement(
              o.a,
              null,
              i.createElement(s.a, { keyCode: 27, handler: this.props.onClose }),
              i.createElement(
                'div',
                { className: l.content, 'data-symbol-info-dialog-content': !0 },
                this._renderFields()
              )
            )
          )
        }
        _renderFields() {
          return this.props.fields
            ? this.props.fields.map((e, t) =>
                i.createElement(
                  'div',
                  { key: e.propName + t.toString(), className: l.row },
                  i.createElement(
                    'div',
                    { className: a(l.column, l.columnTitle) },
                    i.createElement('span', { className: l.title }, e.title)
                  ),
                  i.createElement(
                    'div',
                    { className: a(l.column, l.columnValue) },
                    i.createElement(
                      'span',
                      { className: l.value },
                      (function (e) {
                        const t = e.value || e.defValue || '-'
                        if (e.setHtml) return i.createElement('span', { dangerouslySetInnerHTML: { __html: t } })
                        return t
                      })(e)
                    )
                  )
                )
              )
            : []
        }
      }
    },
    bpih: function (e, t, n) {
      !(function (e) {
        'use strict'
        e.defineLocale('it', {
          months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
            '_'
          ),
          monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
          weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
          weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
          weekdaysMin: 'D_L_Ma_Me_G_V_S'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return '[la scorsa] dddd [alle] LT'
                default:
                  return '[lo scorso] dddd [alle] LT'
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: function (e) {
              return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e
            },
            past: '%s fa',
            s: 'alcuni secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: "un'ora",
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni',
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        })
      })(n('wd/R'))
    },
    cJj4: function (e, t, n) {
      e.exports = { message: 'message-2dEP78zc', error: 'error-2dEP78zc' }
    },
    g9Yu: function (e, t, n) {
      e.exports = {
        popupDialog: 'popupDialog-2uQzjNpP',
        content: 'content-2uQzjNpP',
        row: 'row-2uQzjNpP',
        column: 'column-2uQzjNpP',
        title: 'title-2uQzjNpP',
        value: 'value-2uQzjNpP',
        columnTitle: 'columnTitle-2uQzjNpP',
        columnValue: 'columnValue-2uQzjNpP',
      }
    },
    iYuL: function (e, t, n) {
      !(function (e) {
        'use strict'
        var t = 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.'.split('_'),
          n = 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_')
        e.defineLocale('es', {
          months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
          monthsShort: function (e, i) {
            return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
          },
          weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
          weekdaysShort: 'Dom._Lun._Mar._Mié._Jue._Vie._Sáb.'.split('_'),
          weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
          },
          calendar: {
            sameDay: function () {
              return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT'
            },
            nextDay: function () {
              return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT'
            },
            nextWeek: function () {
              return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT'
            },
            lastDay: function () {
              return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT'
            },
            lastWeek: function () {
              return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT'
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: { dow: 1, doy: 4 },
        })
      })(n('wd/R'))
    },
    ijHL: function (e, t, n) {
      'use strict'
      function i(e) {
        return o(e, a)
      }
      function r(e) {
        return o(e, s)
      }
      function o(e, t) {
        const n = Object.entries(e).filter(t),
          i = {}
        for (const [r, o] of n) i[r] = o
        return i
      }
      function a(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return r
        })
    },
    jVdC: function (e, t, n) {
      !(function (e) {
        'use strict'
        var t =
            'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
              '_'
            ),
          n =
            'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
              '_'
            )
        function i(e) {
          return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }
        function r(e, t, n) {
          var r = e + ' '
          switch (n) {
            case 'm':
              return t ? 'minuta' : 'minutę'
            case 'mm':
              return r + (i(e) ? 'minuty' : 'minut')
            case 'h':
              return t ? 'godzina' : 'godzinę'
            case 'hh':
              return r + (i(e) ? 'godziny' : 'godzin')
            case 'MM':
              return r + (i(e) ? 'miesiące' : 'miesięcy')
            case 'yy':
              return r + (i(e) ? 'lata' : 'lat')
          }
        }
        e.defineLocale('pl', {
          months: function (e, i) {
            return '' === i
              ? '(' + n[e.month()] + '|' + t[e.month()] + ')'
              : /D MMMM/.test(i)
              ? n[e.month()]
              : t[e.month()]
          },
          monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
          weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
          weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
          weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
          calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: '[W] dddd [o] LT',
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return '[W zeszłą niedzielę o] LT'
                case 3:
                  return '[W zeszłą środę o] LT'
                case 6:
                  return '[W zeszłą sobotę o] LT'
                default:
                  return '[W zeszły] dddd [o] LT'
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: r,
            y: 'rok',
            yy: r,
          },
          ordinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: { dow: 1, doy: 4 },
        })
      })(n('wd/R'))
    },
    kQXJ: function (e, t, n) {
      e.exports = { footer: 'footer-16Va6-EJ' }
    },
    kgsH: function (e, t, n) {
      e.exports = { header: 'header-2ibjJG9Z', close: 'close-2ibjJG9Z' }
    },
    lXzo: function (e, t, n) {
      !(function (e) {
        'use strict'
        function t(e, t, n) {
          var i, r
          return 'm' === n
            ? t
              ? 'минута'
              : 'минуту'
            : e +
                ' ' +
                ((i = +e),
                (r = {
                  mm: t ? 'минута_минуты_минут' : 'минуту_минуты_минут',
                  hh: 'час_часа_часов',
                  dd: 'день_дня_дней',
                  MM: 'месяц_месяца_месяцев',
                  yy: 'год_года_лет',
                }[n].split('_')),
                i % 10 == 1 && i % 100 != 11
                  ? r[0]
                  : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
                  ? r[1]
                  : r[2])
        }
        e.defineLocale('ru', {
          months: function (e, t) {
            return {
              nominative: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
              accusative: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
                '_'
              ),
            }[/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? 'accusative' : 'nominative'][e.month()]
          },
          monthsShort: function (e, t) {
            return {
              nominative: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
              accusative: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
            }[/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? 'accusative' : 'nominative'][e.month()]
          },
          weekdays: function (e, t) {
            return {
              nominative: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
              accusative: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            }[/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? 'accusative' : 'nominative'][e.day()]
          },
          weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          monthsParse: [
            /^янв/i,
            /^фев/i,
            /^мар/i,
            /^апр/i,
            /^ма[й|я]/i,
            /^июн/i,
            /^июл/i,
            /^авг/i,
            /^сен/i,
            /^окт/i,
            /^ноя/i,
            /^дек/i,
          ],
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., HH:mm',
            LLLL: 'dddd, D MMMM YYYY г., HH:mm',
          },
          calendar: {
            sameDay: '[Сегодня в] LT',
            nextDay: '[Завтра в] LT',
            lastDay: '[Вчера в] LT',
            nextWeek: function () {
              return 2 === this.day() ? '[Во] dddd [в] LT' : '[В] dddd [в] LT'
            },
            lastWeek: function (e) {
              if (e.week() === this.week()) return 2 === this.day() ? '[Во] dddd [в] LT' : '[В] dddd [в] LT'
              switch (this.day()) {
                case 0:
                  return '[В прошлое] dddd [в] LT'
                case 1:
                case 2:
                case 4:
                  return '[В прошлый] dddd [в] LT'
                case 3:
                case 5:
                case 6:
                  return '[В прошлую] dddd [в] LT'
              }
            },
            sameElse: 'L',
          },
          relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            m: t,
            mm: t,
            h: 'час',
            hh: t,
            d: 'день',
            dd: t,
            M: 'месяц',
            MM: t,
            y: 'год',
            yy: t,
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function (e) {
            return /^(дня|вечера)$/.test(e)
          },
          meridiem: function (e, t, n) {
            return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера'
          },
          ordinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function (e, t) {
            switch (t) {
              case 'M':
              case 'd':
              case 'DDD':
                return e + '-й'
              case 'D':
                return e + '-го'
              case 'w':
              case 'W':
                return e + '-я'
              default:
                return e
            }
          },
          week: { dow: 1, doy: 7 },
        })
      })(n('wd/R'))
    },
    ldgD: function (e, t, n) {
      'use strict'
      n('YFKU'), n('HbRj')
      var i = n('wd/R')
      window.language &&
        (i.locale(window.language, {
          months: [
            window.t('January'),
            window.t('February'),
            window.t('March'),
            window.t('April'),
            window.t('May'),
            window.t('June'),
            window.t('July'),
            window.t('August'),
            window.t('September'),
            window.t('October'),
            window.t('November'),
            window.t('December'),
          ],
          monthsShort: [
            window.t('Jan'),
            window.t('Feb'),
            window.t('Mar'),
            window.t('Apr'),
            window.t('May'),
            window.t('Jun'),
            window.t('Jul'),
            window.t('Aug'),
            window.t('Sep'),
            window.t('Oct'),
            window.t('Nov'),
            window.t('Dec'),
          ],
          weekdays: [
            window.t('Sunday'),
            window.t('Monday'),
            window.t('Tuesday'),
            window.t('Wednesday'),
            window.t('Thursday'),
            window.t('Friday'),
            window.t('Saturday'),
          ],
          weekdaysShort: [
            window.t('Sun'),
            window.t('Mon'),
            window.t('Tue'),
            window.t('Wed'),
            window.t('Thu'),
            window.t('Fri'),
            window.t('Sat'),
          ],
          weekdaysMin: [
            window.t('Su', { context: 'day_of_week' }),
            window.t('Mo', { context: 'day_of_week' }),
            window.t('Tu', { context: 'day_of_week' }),
            window.t('We', { context: 'day_of_week' }),
            window.t('Th', { context: 'day_of_week' }),
            window.t('Fr', { context: 'day_of_week' }),
            window.t('Sa', { context: 'day_of_week' }),
          ],
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'MMM D',
            l: 'M/D/YYYY',
            LL: 'MMM D, YYYY',
            ll: 'MMM D LT',
            LLL: 'LT - LL',
            lll: 'MMM D, YYYY LT',
            LLLL: 'ddd D MMMM YYYY LT',
            llll: 'ddd D MMM YYYY LT',
          },
          calendar: {
            sameDay: window
              .t('{specialSymbolOpen}Today at{specialSymbolClose} {dayTime}')
              .format({ specialSymbolOpen: '[', specialSymbolClose: ']', dayTime: 'LT' }),
            nextDay: window
              .t('{specialSymbolOpen}Tomorrow at{specialSymbolClose} {dayTime}')
              .format({ specialSymbolOpen: '[', specialSymbolClose: ']', dayTime: 'LT' }),
            nextWeek: window
              .t('{dayName} {specialSymbolOpen}at{specialSymbolClose} {dayTime}')
              .format({ specialSymbolOpen: '[', specialSymbolClose: ']', dayTime: 'LT', dayName: 'dddd' }),
            lastDay: window
              .t('{specialSymbolOpen}Yesterday at{specialSymbolClose} {dayTime}')
              .format({ specialSymbolOpen: '[', specialSymbolClose: ']', dayTime: 'LT' }),
            lastWeek: window
              .t(
                '{specialSymbolOpen}Last{specialSymbolClose} {dayName} {specialSymbolOpen}at{specialSymbolClose} {dayTime}'
              )
              .format({ specialSymbolOpen: '[', specialSymbolClose: ']', dayTime: 'LT', dayName: 'dddd' }),
            sameElse: 'L',
          },
          relativeTime: {
            future: function (e) {
              return e === window.t('just now') ? e : window.t('in %s', { context: 'time_range' }).replace('%s', e)
            },
            past: function (e) {
              return e === window.t('just now') ? e : window.t('%s ago', { context: 'time_range' }).replace('%s', e)
            },
            s: window.t('just now'),
            m: function (e) {
              return window.t('%d minute', { plural: '%d minutes', count: e }).replace('%d', e)
            },
            mm: function (e) {
              return window.t('%d minute', { plural: '%d minutes', count: e }).replace('%d', e)
            },
            h: window.t('an hour'),
            hh: function (e) {
              return window.t('%d hour', { plural: '%d hours', count: e }).replace('%d', e)
            },
            d: window.t('a day'),
            dd: function (e) {
              return window.t('%d day', { plural: '%d days', count: e }).replace('%d', e)
            },
            M: window.t('a month'),
            MM: function (e) {
              return window.t('%d month', { plural: '%d months', count: e }).replace('%d', e)
            },
            y: window.t('a year'),
            yy: function (e) {
              return window.t('%d year', { plural: '%d years', count: e }).replace('%d', e)
            },
          },
          week: { dow: 1, doy: 4 },
        }),
        i.locale(window.language)),
        (e.exports = i)
    },
    qoI1: function (e, t, n) {
      var i = {
        './en-gb': 'Oaa7',
        './en-gb.js': 'Oaa7',
        './es': 'iYuL',
        './es.js': 'iYuL',
        './it': 'bpih',
        './it.js': 'bpih',
        './ja': 'B55N',
        './ja.js': 'B55N',
        './ko': 'Ivi+',
        './ko.js': 'Ivi+',
        './pl': 'jVdC',
        './pl.js': 'jVdC',
        './pt': '8mBD',
        './pt-br': '0tRk',
        './pt-br.js': '0tRk',
        './pt.js': '8mBD',
        './ru': 'lXzo',
        './ru.js': 'lXzo',
        './tr': 'DoHr',
        './tr.js': 'DoHr',
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return i[e]
      }
      ;(r.keys = function () {
        return Object.keys(i)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 'qoI1')
    },
    uo4K: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
    },
    w3Pp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'marketType', function () {
          return u
        })
      var i = n('YFKU')
      n('HbRj')
      const r = new Map(),
        o = { context: 'market_type' },
        a = {
          cfd: Object(i.t)('cfd', o),
          bitcoin: Object(i.t)('crypto', o),
          crypto: Object(i.t)('crypto', o),
          dr: Object(i.t)('dr', o),
          forex: Object(i.t)('forex', o),
          futures: Object(i.t)('futures', o),
          index: Object(i.t)('index', o),
          stock: Object(i.t)('stock', o),
        },
        s = new Set(['cfd', 'spreadbet', 'defi'])
      function u(e, t = []) {
        const n = t.filter((e) => s.has(e)),
          u = `${e}_${n.sort().join('_')}`,
          d = r.get(u)
        if (void 0 !== d) return d
        const l = t.length ? Object(i.t)(e, o) + ' ' + n.join(' ') : a[e] || e
        return r.set(u, l), l
      }
    },
    'wd/R': function (e, t, n) {
      ;(function (e) {
        e.exports = (function () {
          'use strict'
          var t
          function i() {
            return t.apply(null, arguments)
          }
          function r(e) {
            return '[object Array]' === Object.prototype.toString.call(e)
          }
          function o(e) {
            return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e)
          }
          function a(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }
          function s(e, t) {
            for (var n in t) a(t, n) && (e[n] = t[n])
            return a(t, 'toString') && (e.toString = t.toString), a(t, 'valueOf') && (e.valueOf = t.valueOf), e
          }
          function u(e, t, n, i) {
            return We(e, t, n, i, !0).utc()
          }
          function d(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                }),
              e._pf
            )
          }
          function l(e) {
            if (null == e._isValid) {
              var t = d(e)
              ;(e._isValid = !(
                isNaN(e._d.getTime()) ||
                !(t.overflow < 0) ||
                t.empty ||
                t.invalidMonth ||
                t.invalidWeekday ||
                t.nullInput ||
                t.invalidFormat ||
                t.userInvalidated
              )),
                e._strict &&
                  (e._isValid =
                    e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
          }
          function c(e) {
            var t = u(NaN)
            return null != e ? s(d(t), e) : (d(t).userInvalidated = !0), t
          }
          var _ = (i.momentProperties = [])
          function m(e, t) {
            var n, i, r
            if (
              (void 0 !== t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject),
              void 0 !== t._i && (e._i = t._i),
              void 0 !== t._f && (e._f = t._f),
              void 0 !== t._l && (e._l = t._l),
              void 0 !== t._strict && (e._strict = t._strict),
              void 0 !== t._tzm && (e._tzm = t._tzm),
              void 0 !== t._isUTC && (e._isUTC = t._isUTC),
              void 0 !== t._offset && (e._offset = t._offset),
              void 0 !== t._pf && (e._pf = d(t)),
              void 0 !== t._locale && (e._locale = t._locale),
              _.length > 0)
            )
              for (n in _) void 0 !== (r = t[(i = _[n])]) && (e[i] = r)
            return e
          }
          var h = !1
          function f(e) {
            m(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              !1 === h && ((h = !0), i.updateOffset(this), (h = !1))
          }
          function y(e) {
            return e instanceof f || (null != e && null != e._isAMomentObject)
          }
          function p(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
          }
          function w(e) {
            var t = +e,
              n = 0
            return 0 !== t && isFinite(t) && (n = p(t)), n
          }
          function M(e, t, n) {
            var i,
              r = Math.min(e.length, t.length),
              o = Math.abs(e.length - t.length),
              a = 0
            for (i = 0; i < r; i++) ((n && e[i] !== t[i]) || (!n && w(e[i]) !== w(t[i]))) && a++
            return a + o
          }
          function D() {}
          var v,
            Y = {}
          function g(e) {
            return e ? e.toLowerCase().replace('_', '-') : e
          }
          function L(t) {
            var i = null
            if (!Y[t] && void 0 !== e && e && e.exports)
              try {
                ;(i = v._abbr), n('qoI1')('./' + t), S(i)
              } catch (r) {}
            return Y[t]
          }
          function S(e, t) {
            var n
            return e && (n = void 0 === t ? b(e) : T(e, t)) && (v = n), v._abbr
          }
          function T(e, t) {
            return null !== t ? ((t.abbr = e), (Y[e] = Y[e] || new D()), Y[e].set(t), S(e), Y[e]) : (delete Y[e], null)
          }
          function b(e) {
            var t
            if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return v
            if (!r(e)) {
              if ((t = L(e))) return t
              e = [e]
            }
            return (function (e) {
              for (var t, n, i, r, o = 0; o < e.length; ) {
                for (t = (r = g(e[o]).split('-')).length, n = (n = g(e[o + 1])) ? n.split('-') : null; t > 0; ) {
                  if ((i = L(r.slice(0, t).join('-')))) return i
                  if (n && n.length >= t && M(r, n, !0) >= t - 1) break
                  t--
                }
                o++
              }
              return null
            })(e)
          }
          var k = {}
          function O(e, t) {
            var n = e.toLowerCase()
            k[n] = k[n + 's'] = k[t] = e
          }
          function H(e) {
            return 'string' == typeof e ? k[e] || k[e.toLowerCase()] : void 0
          }
          function x(e) {
            var t,
              n,
              i = {}
            for (n in e) a(e, n) && (t = H(n)) && (i[t] = e[n])
            return i
          }
          function C(e, t) {
            return function (n) {
              return null != n ? (W(this, e, n), i.updateOffset(this, t), this) : P(this, e)
            }
          }
          function P(e, t) {
            return e._d['get' + (e._isUTC ? 'UTC' : '') + t]()
          }
          function W(e, t, n) {
            return e._d['set' + (e._isUTC ? 'UTC' : '') + t](n)
          }
          function E(e, t) {
            var n
            if ('object' == typeof e) for (n in e) this.set(n, e[n])
            else if ('function' == typeof this[(e = H(e))]) return this[e](t)
            return this
          }
          function F(e, t, n) {
            var i = '' + Math.abs(e),
              r = t - i.length
            return (e >= 0 ? (n ? '+' : '') : '-') + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
          }
          var N =
              /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            A = {},
            j = {}
          function U(e, t, n, i) {
            var r = i
            'string' == typeof i &&
              (r = function () {
                return this[i]()
              }),
              e && (j[e] = r),
              t &&
                (j[t[0]] = function () {
                  return F(r.apply(this, arguments), t[1], t[2])
                }),
              n &&
                (j[n] = function () {
                  return this.localeData().ordinal(r.apply(this, arguments), e)
                })
          }
          function I(e, t) {
            return e.isValid()
              ? ((t = G(t, e.localeData())),
                (A[t] =
                  A[t] ||
                  (function (e) {
                    var t,
                      n,
                      i,
                      r = e.match(N)
                    for (t = 0, n = r.length; t < n; t++)
                      j[r[t]]
                        ? (r[t] = j[r[t]])
                        : (r[t] = (i = r[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, '') : i.replace(/\\/g, ''))
                    return function (i) {
                      var o = ''
                      for (t = 0; t < n; t++) o += r[t] instanceof Function ? r[t].call(i, e) : r[t]
                      return o
                    }
                  })(t)),
                A[t](e))
              : e.localeData().invalidDate()
          }
          function G(e, t) {
            var n = 5
            function i(e) {
              return t.longDateFormat(e) || e
            }
            for (z.lastIndex = 0; n >= 0 && z.test(e); ) (e = e.replace(z, i)), (z.lastIndex = 0), (n -= 1)
            return e
          }
          var J = /\d/,
            R = /\d\d/,
            V = /\d{3}/,
            Z = /\d{4}/,
            Q = /[+-]?\d{6}/,
            q = /\d\d?/,
            B = /\d{1,3}/,
            X = /\d{1,4}/,
            K = /[+-]?\d{1,6}/,
            $ = /\d+/,
            ee = /[+-]?\d+/,
            te = /Z|[+-]\d\d:?\d\d/gi,
            ne =
              /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ie = {}
          function re(e, t, n) {
            var i
            ie[e] =
              'function' == typeof (i = t) && '[object Function]' === Object.prototype.toString.call(i)
                ? t
                : function (e) {
                    return e && n ? n : t
                  }
          }
          function oe(e, t) {
            return a(ie, e)
              ? ie[e](t._strict, t._locale)
              : new RegExp(
                  e
                    .replace('\\', '')
                    .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
                      return t || n || i || r
                    })
                    .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
                )
          }
          var ae = {}
          function se(e, t) {
            var n,
              i = t
            for (
              'string' == typeof e && (e = [e]),
                'number' == typeof t &&
                  (i = function (e, n) {
                    n[t] = w(e)
                  }),
                n = 0;
              n < e.length;
              n++
            )
              ae[e[n]] = i
          }
          function ue(e, t) {
            se(e, function (e, n, i, r) {
              ;(i._w = i._w || {}), t(e, i._w, i, r)
            })
          }
          function de(e, t, n) {
            null != t && a(ae, e) && ae[e](t, n._a, n, e)
          }
          function le(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
          }
          U('M', ['MM', 2], 'Mo', function () {
            return this.month() + 1
          }),
            U('MMM', 0, 0, function (e) {
              return this.localeData().monthsShort(this, e)
            }),
            U('MMMM', 0, 0, function (e) {
              return this.localeData().months(this, e)
            }),
            O('month', 'M'),
            re('M', q),
            re('MM', q, R),
            re('MMM', ne),
            re('MMMM', ne),
            se(['M', 'MM'], function (e, t) {
              t[1] = w(e) - 1
            }),
            se(['MMM', 'MMMM'], function (e, t, n, i) {
              var r = n._locale.monthsParse(e, i, n._strict)
              null != r ? (t[1] = r) : (d(n).invalidMonth = e)
            })
          var ce = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            _e = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_')
          function me(e, t) {
            var n
            return (
              ('string' == typeof t && 'number' != typeof (t = e.localeData().monthsParse(t))) ||
                ((n = Math.min(e.date(), le(e.year(), t))), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n)),
              e
            )
          }
          function he(e) {
            return null != e ? (me(this, e), i.updateOffset(this, !0), this) : P(this, 'Month')
          }
          function fe(e) {
            var t,
              n = e._a
            return (
              n &&
                -2 === d(e).overflow &&
                ((t =
                  n[1] < 0 || n[1] > 11
                    ? 1
                    : n[2] < 1 || n[2] > le(n[0], n[1])
                    ? 2
                    : n[3] < 0 || n[3] > 24 || (24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
                    ? 3
                    : n[4] < 0 || n[4] > 59
                    ? 4
                    : n[5] < 0 || n[5] > 59
                    ? 5
                    : n[6] < 0 || n[6] > 999
                    ? 6
                    : -1),
                d(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2),
                (d(e).overflow = t)),
              e
            )
          }
          function ye(e) {
            !1 === i.suppressDeprecationWarnings &&
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Deprecation warning: ' + e)
          }
          function pe(e, t) {
            var n = !0
            return s(function () {
              return n && (ye(e + '\n' + new Error().stack), (n = !1)), t.apply(this, arguments)
            }, t)
          }
          var we = {}
          i.suppressDeprecationWarnings = !1
          var Me =
              /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            De = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
              ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
              ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d{2}/],
              ['YYYY-DDD', /\d{4}-\d{3}/],
            ],
            ve = [
              ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
              ['HH:mm', /(T| )\d\d:\d\d/],
              ['HH', /(T| )\d\d/],
            ],
            Ye = /^\/?Date\((\-?\d+)/i
          function ge(e) {
            var t,
              n,
              i = e._i,
              r = Me.exec(i)
            if (r) {
              for (d(e).iso = !0, t = 0, n = De.length; t < n; t++)
                if (De[t][1].exec(i)) {
                  e._f = De[t][0]
                  break
                }
              for (t = 0, n = ve.length; t < n; t++)
                if (ve[t][1].exec(i)) {
                  e._f += (r[6] || ' ') + ve[t][0]
                  break
                }
              i.match(te) && (e._f += 'Z'), Ce(e)
            } else e._isValid = !1
          }
          function Le(e, t, n, i, r, o, a) {
            var s = new Date(e, t, n, i, r, o, a)
            return e < 1970 && s.setFullYear(e), s
          }
          function Se(e) {
            var t = new Date(Date.UTC.apply(null, arguments))
            return e < 1970 && t.setUTCFullYear(e), t
          }
          function Te(e) {
            return be(e) ? 366 : 365
          }
          function be(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
          }
          ;(i.createFromInputFallback = pe(
            'moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.',
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
            }
          )),
            U(0, ['YY', 2], 0, function () {
              return this.year() % 100
            }),
            U(0, ['YYYY', 4], 0, 'year'),
            U(0, ['YYYYY', 5], 0, 'year'),
            U(0, ['YYYYYY', 6, !0], 0, 'year'),
            O('year', 'y'),
            re('Y', ee),
            re('YY', q, R),
            re('YYYY', X, Z),
            re('YYYYY', K, Q),
            re('YYYYYY', K, Q),
            se(['YYYYY', 'YYYYYY'], 0),
            se('YYYY', function (e, t) {
              t[0] = 2 === e.length ? i.parseTwoDigitYear(e) : w(e)
            }),
            se('YY', function (e, t) {
              t[0] = i.parseTwoDigitYear(e)
            }),
            (i.parseTwoDigitYear = function (e) {
              return w(e) + (w(e) > 68 ? 1900 : 2e3)
            })
          var ke = C('FullYear', !1)
          function Oe(e, t, n) {
            var i,
              r = n - t,
              o = n - e.day()
            return (
              o > r && (o -= 7),
              o < r - 7 && (o += 7),
              (i = Ee(e).add(o, 'd')),
              { week: Math.ceil(i.dayOfYear() / 7), year: i.year() }
            )
          }
          function He(e, t, n) {
            return null != e ? e : null != t ? t : n
          }
          function xe(e) {
            var t,
              n,
              i,
              r,
              o = []
            if (!e._d) {
              for (
                i = (function (e) {
                  var t = new Date()
                  return e._useUTC
                    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                    : [t.getFullYear(), t.getMonth(), t.getDate()]
                })(e),
                  e._w &&
                    null == e._a[2] &&
                    null == e._a[1] &&
                    (function (e) {
                      var t, n, i, r, o, a, s
                      null != (t = e._w).GG || null != t.W || null != t.E
                        ? ((o = 1),
                          (a = 4),
                          (n = He(t.GG, e._a[0], Oe(Ee(), 1, 4).year)),
                          (i = He(t.W, 1)),
                          (r = He(t.E, 1)))
                        : ((o = e._locale._week.dow),
                          (a = e._locale._week.doy),
                          (n = He(t.gg, e._a[0], Oe(Ee(), o, a).year)),
                          (i = He(t.w, 1)),
                          null != t.d ? (r = t.d) < o && ++i : (r = null != t.e ? t.e + o : o)),
                        (s = (function (e, t, n, i, r) {
                          var o,
                            a = 6 + r - i,
                            s = Se(e, 0, 1 + a).getUTCDay()
                          return (
                            s < r && (s += 7),
                            {
                              year: (o = 1 + a + 7 * (t - 1) - s + (n = null != n ? 1 * n : r)) > 0 ? e : e - 1,
                              dayOfYear: o > 0 ? o : Te(e - 1) + o,
                            }
                          )
                        })(n, i, r, a, o)),
                        (e._a[0] = s.year),
                        (e._dayOfYear = s.dayOfYear)
                    })(e),
                  e._dayOfYear &&
                    ((r = He(e._a[0], i[0])),
                    e._dayOfYear > Te(r) && (d(e)._overflowDayOfYear = !0),
                    (n = Se(r, 0, e._dayOfYear)),
                    (e._a[1] = n.getUTCMonth()),
                    (e._a[2] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = o[t] = i[t]
              for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t]
              24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && ((e._nextDay = !0), (e._a[3] = 0)),
                (e._d = (e._useUTC ? Se : Le).apply(null, o)),
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[3] = 24)
            }
          }
          function Ce(e) {
            if (e._f !== i.ISO_8601) {
              ;(e._a = []), (d(e).empty = !0)
              var t,
                n,
                r,
                o,
                a,
                s = '' + e._i,
                u = s.length,
                l = 0
              for (r = G(e._f, e._locale).match(N) || [], t = 0; t < r.length; t++)
                (o = r[t]),
                  (n = (s.match(oe(o, e)) || [])[0]) &&
                    ((a = s.substr(0, s.indexOf(n))).length > 0 && d(e).unusedInput.push(a),
                    (s = s.slice(s.indexOf(n) + n.length)),
                    (l += n.length)),
                  j[o]
                    ? (n ? (d(e).empty = !1) : d(e).unusedTokens.push(o), de(o, n, e))
                    : e._strict && !n && d(e).unusedTokens.push(o)
              ;(d(e).charsLeftOver = u - l),
                s.length > 0 && d(e).unusedInput.push(s),
                !0 === d(e).bigHour && e._a[3] <= 12 && e._a[3] > 0 && (d(e).bigHour = void 0),
                (e._a[3] = (function (e, t, n) {
                  var i
                  return null == n
                    ? t
                    : null != e.meridiemHour
                    ? e.meridiemHour(t, n)
                    : null != e.isPM
                    ? ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0), t)
                    : t
                })(e._locale, e._a[3], e._meridiem)),
                xe(e),
                fe(e)
            } else ge(e)
          }
          function Pe(e) {
            var t = e._i,
              n = e._f
            return (
              (e._locale = e._locale || b(e._l)),
              null === t || (void 0 === n && '' === t)
                ? c({ nullInput: !0 })
                : ('string' == typeof t && (e._i = t = e._locale.preparse(t)),
                  y(t)
                    ? new f(fe(t))
                    : (r(n)
                        ? (function (e) {
                            var t, n, i, r, o
                            if (0 === e._f.length) return (d(e).invalidFormat = !0), void (e._d = new Date(NaN))
                            for (r = 0; r < e._f.length; r++)
                              (o = 0),
                                (t = m({}, e)),
                                null != e._useUTC && (t._useUTC = e._useUTC),
                                (t._f = e._f[r]),
                                Ce(t),
                                l(t) &&
                                  ((o += d(t).charsLeftOver),
                                  (o += 10 * d(t).unusedTokens.length),
                                  (d(t).score = o),
                                  (null == i || o < i) && ((i = o), (n = t)))
                            s(e, n || t)
                          })(e)
                        : n
                        ? Ce(e)
                        : o(t)
                        ? (e._d = t)
                        : (function (e) {
                            var t = e._i
                            void 0 === t
                              ? (e._d = new Date())
                              : o(t)
                              ? (e._d = new Date(+t))
                              : 'string' == typeof t
                              ? (function (e) {
                                  var t = Ye.exec(e._i)
                                  null === t
                                    ? (ge(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))
                                    : (e._d = new Date(+t[1]))
                                })(e)
                              : r(t)
                              ? ((e._a = (function (e, t) {
                                  var n,
                                    i = []
                                  for (n = 0; n < e.length; ++n) i.push(t(e[n], n))
                                  return i
                                })(t.slice(0), function (e) {
                                  return parseInt(e, 10)
                                })),
                                xe(e))
                              : 'object' == typeof t
                              ? (function (e) {
                                  if (!e._d) {
                                    var t = x(e._i)
                                    ;(e._a = [
                                      t.year,
                                      t.month,
                                      t.day || t.date,
                                      t.hour,
                                      t.minute,
                                      t.second,
                                      t.millisecond,
                                    ]),
                                      xe(e)
                                  }
                                })(e)
                              : 'number' == typeof t
                              ? (e._d = new Date(t))
                              : i.createFromInputFallback(e)
                          })(e),
                      e))
            )
          }
          function We(e, t, n, i, r) {
            var o,
              a = {}
            return (
              'boolean' == typeof n && ((i = n), (n = void 0)),
              (a._isAMomentObject = !0),
              (a._useUTC = a._isUTC = r),
              (a._l = n),
              (a._i = e),
              (a._f = t),
              (a._strict = i),
              (o = new f(fe(Pe(a))))._nextDay && (o.add(1, 'd'), (o._nextDay = void 0)),
              o
            )
          }
          function Ee(e, t, n, i) {
            return We(e, t, n, i, !1)
          }
          U('w', ['ww', 2], 'wo', 'week'),
            U('W', ['WW', 2], 'Wo', 'isoWeek'),
            O('week', 'w'),
            O('isoWeek', 'W'),
            re('w', q),
            re('ww', q, R),
            re('W', q),
            re('WW', q, R),
            ue(['w', 'ww', 'W', 'WW'], function (e, t, n, i) {
              t[i.substr(0, 1)] = w(e)
            }),
            U('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
            O('dayOfYear', 'DDD'),
            re('DDD', B),
            re('DDDD', V),
            se(['DDD', 'DDDD'], function (e, t, n) {
              n._dayOfYear = w(e)
            }),
            (i.ISO_8601 = function () {})
          var Fe = pe(
              'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
              function () {
                var e = Ee.apply(null, arguments)
                return e < this ? this : e
              }
            ),
            Ne = pe(
              'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
              function () {
                var e = Ee.apply(null, arguments)
                return e > this ? this : e
              }
            )
          function ze(e, t) {
            var n, i
            if ((1 === t.length && r(t[0]) && (t = t[0]), !t.length)) return Ee()
            for (n = t[0], i = 1; i < t.length; ++i) (t[i].isValid() && !t[i][e](n)) || (n = t[i])
            return n
          }
          function Ae(e) {
            var t = x(e),
              n = t.year || 0,
              i = t.quarter || 0,
              r = t.month || 0,
              o = t.week || 0,
              a = t.day || 0,
              s = t.hour || 0,
              u = t.minute || 0,
              d = t.second || 0,
              l = t.millisecond || 0
            ;(this._milliseconds = +l + 1e3 * d + 6e4 * u + 36e5 * s),
              (this._days = +a + 7 * o),
              (this._months = +r + 3 * i + 12 * n),
              (this._data = {}),
              (this._locale = b()),
              this._bubble()
          }
          function je(e) {
            return e instanceof Ae
          }
          function Ue(e, t) {
            U(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = '+'
              return e < 0 && ((e = -e), (n = '-')), n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
            })
          }
          Ue('Z', ':'),
            Ue('ZZ', ''),
            re('Z', te),
            re('ZZ', te),
            se(['Z', 'ZZ'], function (e, t, n) {
              ;(n._useUTC = !0), (n._tzm = Ge(e))
            })
          var Ie = /([\+\-]|\d\d)/gi
          function Ge(e) {
            var t = (e || '').match(te) || [],
              n = ((t[t.length - 1] || []) + '').match(Ie) || ['-', 0, 0],
              i = 60 * n[1] + w(n[2])
            return '+' === n[0] ? i : -i
          }
          function Je(e, t) {
            var n, r
            return t._isUTC
              ? ((n = t.clone()),
                (r = (y(e) || o(e) ? +e : +Ee(e)) - +n),
                n._d.setTime(+n._d + r),
                i.updateOffset(n, !1),
                n)
              : Ee(e).local()
          }
          function Re(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
          }
          function Ve() {
            return this._isUTC && 0 === this._offset
          }
          i.updateOffset = function () {}
          var Ze = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            Qe =
              /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/
          function qe(e, t) {
            var n,
              i,
              r,
              o,
              s,
              u,
              d = e,
              l = null
            return (
              je(e)
                ? (d = { ms: e._milliseconds, d: e._days, M: e._months })
                : 'number' == typeof e
                ? ((d = {}), t ? (d[t] = e) : (d.milliseconds = e))
                : (l = Ze.exec(e))
                ? ((n = '-' === l[1] ? -1 : 1),
                  (d = { y: 0, d: w(l[2]) * n, h: w(l[3]) * n, m: w(l[4]) * n, s: w(l[5]) * n, ms: w(l[6]) * n }))
                : (l = Qe.exec(e))
                ? ((n = '-' === l[1] ? -1 : 1),
                  (d = {
                    y: Be(l[2], n),
                    M: Be(l[3], n),
                    d: Be(l[4], n),
                    h: Be(l[5], n),
                    m: Be(l[6], n),
                    s: Be(l[7], n),
                    w: Be(l[8], n),
                  }))
                : null == d
                ? (d = {})
                : 'object' == typeof d &&
                  ('from' in d || 'to' in d) &&
                  ((o = Ee(d.from)),
                  (s = Je((s = Ee(d.to)), o)),
                  o.isBefore(s)
                    ? (u = Xe(o, s))
                    : (((u = Xe(s, o)).milliseconds = -u.milliseconds), (u.months = -u.months)),
                  ((d = {}).ms = (r = u).milliseconds),
                  (d.M = r.months)),
              (i = new Ae(d)),
              je(e) && a(e, '_locale') && (i._locale = e._locale),
              i
            )
          }
          function Be(e, t) {
            var n = e && parseFloat(e.replace(',', '.'))
            return (isNaN(n) ? 0 : n) * t
          }
          function Xe(e, t) {
            var n = { milliseconds: 0, months: 0 }
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, 'M').isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
              n
            )
          }
          function Ke(e, t) {
            return function (n, i) {
              var r
              return (
                null === i ||
                  isNaN(+i) ||
                  ((function (e, t) {
                    we[e] || (ye(t), (we[e] = !0))
                  })(
                    t,
                    'moment().' + t + '(period, number) is deprecated. Please use moment().' + t + '(number, period).'
                  ),
                  (r = n),
                  (n = i),
                  (i = r)),
                $e(this, qe((n = 'string' == typeof n ? +n : n), i), e),
                this
              )
            }
          }
          function $e(e, t, n, r) {
            var o = t._milliseconds,
              a = t._days,
              s = t._months
            ;(r = null == r || r),
              o && e._d.setTime(+e._d + o * n),
              a && W(e, 'Date', P(e, 'Date') + a * n),
              s && me(e, P(e, 'Month') + s * n),
              r && i.updateOffset(e, a || s)
          }
          qe.fn = Ae.prototype
          var et = Ke(1, 'add'),
            tt = Ke(-1, 'subtract')
          function nt() {
            var e = this.clone().utc()
            return 0 < e.year() && e.year() <= 9999
              ? 'function' == typeof Date.prototype.toISOString
                ? this.toDate().toISOString()
                : I(e, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
              : I(e, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
          }
          function it(e) {
            var t
            return void 0 === e ? this._locale._abbr : (null != (t = b(e)) && (this._locale = t), this)
          }
          i.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'
          var rt = pe(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e)
            }
          )
          function ot() {
            return this._locale
          }
          function at(e, t) {
            U(0, [e, e.length], 0, t)
          }
          function st(e, t, n) {
            return Oe(Ee([e, 11, 31 + t - n]), t, n).week
          }
          U(0, ['gg', 2], 0, function () {
            return this.weekYear() % 100
          }),
            U(0, ['GG', 2], 0, function () {
              return this.isoWeekYear() % 100
            }),
            at('gggg', 'weekYear'),
            at('ggggg', 'weekYear'),
            at('GGGG', 'isoWeekYear'),
            at('GGGGG', 'isoWeekYear'),
            O('weekYear', 'gg'),
            O('isoWeekYear', 'GG'),
            re('G', ee),
            re('g', ee),
            re('GG', q, R),
            re('gg', q, R),
            re('GGGG', X, Z),
            re('gggg', X, Z),
            re('GGGGG', K, Q),
            re('ggggg', K, Q),
            ue(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, i) {
              t[i.substr(0, 2)] = w(e)
            }),
            ue(['gg', 'GG'], function (e, t, n, r) {
              t[r] = i.parseTwoDigitYear(e)
            }),
            U('Q', 0, 0, 'quarter'),
            O('quarter', 'Q'),
            re('Q', J),
            se('Q', function (e, t) {
              t[1] = 3 * (w(e) - 1)
            }),
            U('D', ['DD', 2], 'Do', 'date'),
            O('date', 'D'),
            re('D', q),
            re('DD', q, R),
            re('Do', function (e, t) {
              return e ? t._ordinalParse : t._ordinalParseLenient
            }),
            se(['D', 'DD'], 2),
            se('Do', function (e, t) {
              t[2] = w(e.match(q)[0])
            })
          var ut = C('Date', !0)
          U('d', 0, 'do', 'day'),
            U('dd', 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e)
            }),
            U('ddd', 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e)
            }),
            U('dddd', 0, 0, function (e) {
              return this.localeData().weekdays(this, e)
            }),
            U('e', 0, 0, 'weekday'),
            U('E', 0, 0, 'isoWeekday'),
            O('day', 'd'),
            O('weekday', 'e'),
            O('isoWeekday', 'E'),
            re('d', q),
            re('e', q),
            re('E', q),
            re('dd', ne),
            re('ddd', ne),
            re('dddd', ne),
            ue(['dd', 'ddd', 'dddd'], function (e, t, n) {
              var i = n._locale.weekdaysParse(e)
              null != i ? (t.d = i) : (d(n).invalidWeekday = e)
            }),
            ue(['d', 'e', 'E'], function (e, t, n, i) {
              t[i] = w(e)
            })
          var dt = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            lt = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            ct = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_')
          function _t(e, t) {
            U(e, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
          }
          function mt(e, t) {
            return t._meridiemParse
          }
          U('H', ['HH', 2], 0, 'hour'),
            U('h', ['hh', 2], 0, function () {
              return this.hours() % 12 || 12
            }),
            _t('a', !0),
            _t('A', !1),
            O('hour', 'h'),
            re('a', mt),
            re('A', mt),
            re('H', q),
            re('h', q),
            re('HH', q, R),
            re('hh', q, R),
            se(['H', 'HH'], 3),
            se(['a', 'A'], function (e, t, n) {
              ;(n._isPm = n._locale.isPM(e)), (n._meridiem = e)
            }),
            se(['h', 'hh'], function (e, t, n) {
              ;(t[3] = w(e)), (d(n).bigHour = !0)
            })
          var ht = C('Hours', !0)
          U('m', ['mm', 2], 0, 'minute'), O('minute', 'm'), re('m', q), re('mm', q, R), se(['m', 'mm'], 4)
          var ft = C('Minutes', !1)
          U('s', ['ss', 2], 0, 'second'), O('second', 's'), re('s', q), re('ss', q, R), se(['s', 'ss'], 5)
          var yt,
            pt = C('Seconds', !1)
          for (
            U('S', 0, 0, function () {
              return ~~(this.millisecond() / 100)
            }),
              U(0, ['SS', 2], 0, function () {
                return ~~(this.millisecond() / 10)
              }),
              U(0, ['SSS', 3], 0, 'millisecond'),
              U(0, ['SSSS', 4], 0, function () {
                return 10 * this.millisecond()
              }),
              U(0, ['SSSSS', 5], 0, function () {
                return 100 * this.millisecond()
              }),
              U(0, ['SSSSSS', 6], 0, function () {
                return 1e3 * this.millisecond()
              }),
              U(0, ['SSSSSSS', 7], 0, function () {
                return 1e4 * this.millisecond()
              }),
              U(0, ['SSSSSSSS', 8], 0, function () {
                return 1e5 * this.millisecond()
              }),
              U(0, ['SSSSSSSSS', 9], 0, function () {
                return 1e6 * this.millisecond()
              }),
              O('millisecond', 'ms'),
              re('S', B, J),
              re('SS', B, R),
              re('SSS', B, V),
              yt = 'SSSS';
            yt.length <= 9;
            yt += 'S'
          )
            re(yt, $)
          function wt(e, t) {
            t[6] = w(1e3 * ('0.' + e))
          }
          for (yt = 'S'; yt.length <= 9; yt += 'S') se(yt, wt)
          var Mt = C('Milliseconds', !1)
          U('z', 0, 0, 'zoneAbbr'), U('zz', 0, 0, 'zoneName')
          var Dt = f.prototype
          ;(Dt.add = et),
            (Dt.calendar = function (e, t) {
              var n = e || Ee(),
                i = Je(n, this).startOf('day'),
                r = this.diff(i, 'days', !0),
                o =
                  r < -6
                    ? 'sameElse'
                    : r < -1
                    ? 'lastWeek'
                    : r < 0
                    ? 'lastDay'
                    : r < 1
                    ? 'sameDay'
                    : r < 2
                    ? 'nextDay'
                    : r < 7
                    ? 'nextWeek'
                    : 'sameElse'
              return this.format((t && t[o]) || this.localeData().calendar(o, this, Ee(n)))
            }),
            (Dt.clone = function () {
              return new f(this)
            }),
            (Dt.diff = function (e, t, n) {
              var i,
                r,
                o,
                a,
                s,
                u,
                d,
                l,
                c = Je(e, this),
                _ = 6e4 * (c.utcOffset() - this.utcOffset())
              return (
                'year' === (t = H(t)) || 'month' === t || 'quarter' === t
                  ? ((o = this),
                    (d = 12 * ((a = c).year() - o.year()) + (a.month() - o.month())),
                    (l = o.clone().add(d, 'months')),
                    a - l < 0
                      ? ((s = o.clone().add(d - 1, 'months')), (u = (a - l) / (l - s)))
                      : ((s = o.clone().add(d + 1, 'months')), (u = (a - l) / (s - l))),
                    (r = -(d + u)),
                    'quarter' === t ? (r /= 3) : 'year' === t && (r /= 12))
                  : ((i = this - c),
                    (r =
                      'second' === t
                        ? i / 1e3
                        : 'minute' === t
                        ? i / 6e4
                        : 'hour' === t
                        ? i / 36e5
                        : 'day' === t
                        ? (i - _) / 864e5
                        : 'week' === t
                        ? (i - _) / 6048e5
                        : i)),
                n ? r : p(r)
              )
            }),
            (Dt.endOf = function (e) {
              return void 0 === (e = H(e)) || 'millisecond' === e
                ? this
                : this.startOf(e)
                    .add(1, 'isoWeek' === e ? 'week' : e)
                    .subtract(1, 'ms')
            }),
            (Dt.format = function (e) {
              var t = I(this, e || i.defaultFormat)
              return this.localeData().postformat(t)
            }),
            (Dt.from = function (e, t) {
              return this.isValid()
                ? qe({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate()
            }),
            (Dt.fromNow = function (e) {
              return this.from(Ee(), e)
            }),
            (Dt.to = function (e, t) {
              return this.isValid()
                ? qe({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate()
            }),
            (Dt.toNow = function (e) {
              return this.to(Ee(), e)
            }),
            (Dt.get = E),
            (Dt.invalidAt = function () {
              return d(this).overflow
            }),
            (Dt.isAfter = function (e, t) {
              return 'millisecond' === (t = H(void 0 !== t ? t : 'millisecond'))
                ? +this > +(e = y(e) ? e : Ee(e))
                : (y(e) ? +e : +Ee(e)) < +this.clone().startOf(t)
            }),
            (Dt.isBefore = function (e, t) {
              var n
              return 'millisecond' === (t = H(void 0 !== t ? t : 'millisecond'))
                ? +this < +(e = y(e) ? e : Ee(e))
                : ((n = y(e) ? +e : +Ee(e)), +this.clone().endOf(t) < n)
            }),
            (Dt.isBetween = function (e, t, n) {
              return this.isAfter(e, n) && this.isBefore(t, n)
            }),
            (Dt.isSame = function (e, t) {
              var n
              return 'millisecond' === (t = H(t || 'millisecond'))
                ? +this == +(e = y(e) ? e : Ee(e))
                : ((n = +Ee(e)), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
            }),
            (Dt.isValid = function () {
              return l(this)
            }),
            (Dt.lang = rt),
            (Dt.locale = it),
            (Dt.localeData = ot),
            (Dt.max = Ne),
            (Dt.min = Fe),
            (Dt.parsingFlags = function () {
              return s({}, d(this))
            }),
            (Dt.set = E),
            (Dt.startOf = function (e) {
              switch ((e = H(e))) {
                case 'year':
                  this.month(0)
                case 'quarter':
                case 'month':
                  this.date(1)
                case 'week':
                case 'isoWeek':
                case 'day':
                  this.hours(0)
                case 'hour':
                  this.minutes(0)
                case 'minute':
                  this.seconds(0)
                case 'second':
                  this.milliseconds(0)
              }
              return (
                'week' === e && this.weekday(0),
                'isoWeek' === e && this.isoWeekday(1),
                'quarter' === e && this.month(3 * Math.floor(this.month() / 3)),
                this
              )
            }),
            (Dt.subtract = tt),
            (Dt.toArray = function () {
              var e = this
              return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }),
            (Dt.toObject = function () {
              var e = this
              return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
              }
            }),
            (Dt.toDate = function () {
              return this._offset ? new Date(+this) : this._d
            }),
            (Dt.toISOString = nt),
            (Dt.toJSON = nt),
            (Dt.toString = function () {
              return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
            }),
            (Dt.unix = function () {
              return Math.floor(+this / 1e3)
            }),
            (Dt.valueOf = function () {
              return +this._d - 6e4 * (this._offset || 0)
            }),
            (Dt.year = ke),
            (Dt.isLeapYear = function () {
              return be(this.year())
            }),
            (Dt.weekYear = function (e) {
              var t = Oe(this, this.localeData()._week.dow, this.localeData()._week.doy).year
              return null == e ? t : this.add(e - t, 'y')
            }),
            (Dt.isoWeekYear = function (e) {
              var t = Oe(this, 1, 4).year
              return null == e ? t : this.add(e - t, 'y')
            }),
            (Dt.quarter = Dt.quarters =
              function (e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3))
              }),
            (Dt.month = he),
            (Dt.daysInMonth = function () {
              return le(this.year(), this.month())
            }),
            (Dt.week = Dt.weeks =
              function (e) {
                var t = this.localeData().week(this)
                return null == e ? t : this.add(7 * (e - t), 'd')
              }),
            (Dt.isoWeek = Dt.isoWeeks =
              function (e) {
                var t = Oe(this, 1, 4).week
                return null == e ? t : this.add(7 * (e - t), 'd')
              }),
            (Dt.weeksInYear = function () {
              var e = this.localeData()._week
              return st(this.year(), e.dow, e.doy)
            }),
            (Dt.isoWeeksInYear = function () {
              return st(this.year(), 1, 4)
            }),
            (Dt.date = ut),
            (Dt.day = Dt.days =
              function (e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
                return null != e
                  ? ((e = (function (e, t) {
                      return 'string' != typeof e
                        ? e
                        : isNaN(e)
                        ? 'number' == typeof (e = t.weekdaysParse(e))
                          ? e
                          : null
                        : parseInt(e, 10)
                    })(e, this.localeData())),
                    this.add(e - t, 'd'))
                  : t
              }),
            (Dt.weekday = function (e) {
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7
              return null == e ? t : this.add(e - t, 'd')
            }),
            (Dt.isoWeekday = function (e) {
              return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            }),
            (Dt.dayOfYear = function (e) {
              var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1
              return null == e ? t : this.add(e - t, 'd')
            }),
            (Dt.hour = Dt.hours = ht),
            (Dt.minute = Dt.minutes = ft),
            (Dt.second = Dt.seconds = pt),
            (Dt.millisecond = Dt.milliseconds = Mt),
            (Dt.utcOffset = function (e, t) {
              var n,
                r = this._offset || 0
              return null != e
                ? ('string' == typeof e && (e = Ge(e)),
                  Math.abs(e) < 16 && (e *= 60),
                  !this._isUTC && t && (n = Re(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != n && this.add(n, 'm'),
                  r !== e &&
                    (!t || this._changeInProgress
                      ? $e(this, qe(e - r, 'm'), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0), i.updateOffset(this, !0), (this._changeInProgress = null))),
                  this)
                : this._isUTC
                ? r
                : Re(this)
            }),
            (Dt.utc = function (e) {
              return this.utcOffset(0, e)
            }),
            (Dt.local = function (e) {
              return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(Re(this), 'm')), this
            }),
            (Dt.parseZone = function () {
              return (
                this._tzm ? this.utcOffset(this._tzm) : 'string' == typeof this._i && this.utcOffset(Ge(this._i)), this
              )
            }),
            (Dt.hasAlignedHourOffset = function (e) {
              return (e = e ? Ee(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0
            }),
            (Dt.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              )
            }),
            (Dt.isDSTShifted = function () {
              if (void 0 !== this._isDSTShifted) return this._isDSTShifted
              var e = {}
              if ((m(e, this), (e = Pe(e))._a)) {
                var t = e._isUTC ? u(e._a) : Ee(e._a)
                this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0
              } else this._isDSTShifted = !1
              return this._isDSTShifted
            }),
            (Dt.isLocal = function () {
              return !this._isUTC
            }),
            (Dt.isUtcOffset = function () {
              return this._isUTC
            }),
            (Dt.isUtc = Ve),
            (Dt.isUTC = Ve),
            (Dt.zoneAbbr = function () {
              return this._isUTC ? 'UTC' : ''
            }),
            (Dt.zoneName = function () {
              return this._isUTC ? 'Coordinated Universal Time' : ''
            }),
            (Dt.dates = pe('dates accessor is deprecated. Use date instead.', ut)),
            (Dt.months = pe('months accessor is deprecated. Use month instead', he)),
            (Dt.years = pe('years accessor is deprecated. Use year instead', ke)),
            (Dt.zone = pe(
              'moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',
              function (e, t) {
                return null != e ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
              }
            ))
          var vt = Dt
          function Yt(e) {
            return e
          }
          var gt = D.prototype
          function Lt(e, t, n, i) {
            var r = b(),
              o = u().set(i, t)
            return r[n](o, e)
          }
          function St(e, t, n, i, r) {
            if (('number' == typeof e && ((t = e), (e = void 0)), (e = e || ''), null != t)) return Lt(e, t, n, r)
            var o,
              a = []
            for (o = 0; o < i; o++) a[o] = Lt(e, o, n, r)
            return a
          }
          ;(gt._calendar = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          }),
            (gt.calendar = function (e, t, n) {
              var i = this._calendar[e]
              return 'function' == typeof i ? i.call(t, n) : i
            }),
            (gt._longDateFormat = {
              LTS: 'h:mm:ss A',
              LT: 'h:mm A',
              L: 'MM/DD/YYYY',
              LL: 'MMMM D, YYYY',
              LLL: 'MMMM D, YYYY h:mm A',
              LLLL: 'dddd, MMMM D, YYYY h:mm A',
            }),
            (gt.longDateFormat = function (e) {
              var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()]
              return t || !n
                ? t
                : ((this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                  })),
                  this._longDateFormat[e])
            }),
            (gt._invalidDate = 'Invalid date'),
            (gt.invalidDate = function () {
              return this._invalidDate
            }),
            (gt._ordinal = '%d'),
            (gt.ordinal = function (e) {
              return this._ordinal.replace('%d', e)
            }),
            (gt._ordinalParse = /\d{1,2}/),
            (gt.preparse = Yt),
            (gt.postformat = Yt),
            (gt._relativeTime = {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years',
            }),
            (gt.relativeTime = function (e, t, n, i) {
              var r = this._relativeTime[n]
              return 'function' == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
            }),
            (gt.pastFuture = function (e, t) {
              var n = this._relativeTime[e > 0 ? 'future' : 'past']
              return 'function' == typeof n ? n(t) : n.replace(/%s/i, t)
            }),
            (gt.set = function (e) {
              var t, n
              for (n in e) 'function' == typeof (t = e[n]) ? (this[n] = t) : (this['_' + n] = t)
              this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source)
            }),
            (gt.months = function (e) {
              return this._months[e.month()]
            }),
            (gt._months = ce),
            (gt.monthsShort = function (e) {
              return this._monthsShort[e.month()]
            }),
            (gt._monthsShort = _e),
            (gt.monthsParse = function (e, t, n) {
              var i, r, o
              for (
                this._monthsParse ||
                  ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
                  i = 0;
                i < 12;
                i++
              ) {
                if (
                  ((r = u([2e3, i])),
                  n &&
                    !this._longMonthsParse[i] &&
                    ((this._longMonthsParse[i] = new RegExp('^' + this.months(r, '').replace('.', '') + '$', 'i')),
                    (this._shortMonthsParse[i] = new RegExp(
                      '^' + this.monthsShort(r, '').replace('.', '') + '$',
                      'i'
                    ))),
                  n ||
                    this._monthsParse[i] ||
                    ((o = '^' + this.months(r, '') + '|^' + this.monthsShort(r, '')),
                    (this._monthsParse[i] = new RegExp(o.replace('.', ''), 'i'))),
                  n && 'MMMM' === t && this._longMonthsParse[i].test(e))
                )
                  return i
                if (n && 'MMM' === t && this._shortMonthsParse[i].test(e)) return i
                if (!n && this._monthsParse[i].test(e)) return i
              }
            }),
            (gt.week = function (e) {
              return Oe(e, this._week.dow, this._week.doy).week
            }),
            (gt._week = { dow: 0, doy: 6 }),
            (gt.firstDayOfYear = function () {
              return this._week.doy
            }),
            (gt.firstDayOfWeek = function () {
              return this._week.dow
            }),
            (gt.weekdays = function (e) {
              return this._weekdays[e.day()]
            }),
            (gt._weekdays = dt),
            (gt.weekdaysMin = function (e) {
              return this._weekdaysMin[e.day()]
            }),
            (gt._weekdaysMin = ct),
            (gt.weekdaysShort = function (e) {
              return this._weekdaysShort[e.day()]
            }),
            (gt._weekdaysShort = lt),
            (gt.weekdaysParse = function (e) {
              var t, n, i
              for (this._weekdaysParse = this._weekdaysParse || [], t = 0; t < 7; t++)
                if (
                  (this._weekdaysParse[t] ||
                    ((n = Ee([2e3, 1]).day(t)),
                    (i =
                      '^' + this.weekdays(n, '') + '|^' + this.weekdaysShort(n, '') + '|^' + this.weekdaysMin(n, '')),
                    (this._weekdaysParse[t] = new RegExp(i.replace('.', ''), 'i'))),
                  this._weekdaysParse[t].test(e))
                )
                  return t
            }),
            (gt.isPM = function (e) {
              return 'p' === (e + '').toLowerCase().charAt(0)
            }),
            (gt._meridiemParse = /[ap]\.?m?\.?/i),
            (gt.meridiem = function (e, t, n) {
              return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM'
            }),
            S('en', {
              ordinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10
                return e + (1 === w((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th')
              },
            }),
            (i.lang = pe('moment.lang is deprecated. Use moment.locale instead.', S)),
            (i.langData = pe('moment.langData is deprecated. Use moment.localeData instead.', b))
          var Tt = Math.abs
          function bt(e, t, n, i) {
            var r = qe(t, n)
            return (
              (e._milliseconds += i * r._milliseconds),
              (e._days += i * r._days),
              (e._months += i * r._months),
              e._bubble()
            )
          }
          function kt(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
          }
          function Ot(e) {
            return (4800 * e) / 146097
          }
          function Ht(e) {
            return (146097 * e) / 4800
          }
          function xt(e) {
            return function () {
              return this.as(e)
            }
          }
          var Ct = xt('ms'),
            Pt = xt('s'),
            Wt = xt('m'),
            Et = xt('h'),
            Ft = xt('d'),
            Nt = xt('w'),
            zt = xt('M'),
            At = xt('y')
          function jt(e) {
            return function () {
              return this._data[e]
            }
          }
          var Ut = jt('milliseconds'),
            It = jt('seconds'),
            Gt = jt('minutes'),
            Jt = jt('hours'),
            Rt = jt('days'),
            Vt = jt('months'),
            Zt = jt('years'),
            Qt = Math.round,
            qt = { s: 45, m: 45, h: 22, d: 26, M: 11 }
          function Bt(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
          }
          var Xt = Math.abs
          function Kt() {
            var e,
              t,
              n = Xt(this._milliseconds) / 1e3,
              i = Xt(this._days),
              r = Xt(this._months)
            ;(e = p(n / 60)), (t = p(e / 60)), (n %= 60), (e %= 60)
            var o = p(r / 12),
              a = (r %= 12),
              s = i,
              u = t,
              d = e,
              l = n,
              c = this.asSeconds()
            return c
              ? (c < 0 ? '-' : '') +
                  'P' +
                  (o ? o + 'Y' : '') +
                  (a ? a + 'M' : '') +
                  (s ? s + 'D' : '') +
                  (u || d || l ? 'T' : '') +
                  (u ? u + 'H' : '') +
                  (d ? d + 'M' : '') +
                  (l ? l + 'S' : '')
              : 'P0D'
          }
          var $t = Ae.prototype
          return (
            ($t.abs = function () {
              var e = this._data
              return (
                (this._milliseconds = Tt(this._milliseconds)),
                (this._days = Tt(this._days)),
                (this._months = Tt(this._months)),
                (e.milliseconds = Tt(e.milliseconds)),
                (e.seconds = Tt(e.seconds)),
                (e.minutes = Tt(e.minutes)),
                (e.hours = Tt(e.hours)),
                (e.months = Tt(e.months)),
                (e.years = Tt(e.years)),
                this
              )
            }),
            ($t.add = function (e, t) {
              return bt(this, e, t, 1)
            }),
            ($t.subtract = function (e, t) {
              return bt(this, e, t, -1)
            }),
            ($t.as = function (e) {
              var t,
                n,
                i = this._milliseconds
              if ('month' === (e = H(e)) || 'year' === e)
                return (t = this._days + i / 864e5), (n = this._months + Ot(t)), 'month' === e ? n : n / 12
              switch (((t = this._days + Math.round(Ht(this._months))), e)) {
                case 'week':
                  return t / 7 + i / 6048e5
                case 'day':
                  return t + i / 864e5
                case 'hour':
                  return 24 * t + i / 36e5
                case 'minute':
                  return 1440 * t + i / 6e4
                case 'second':
                  return 86400 * t + i / 1e3
                case 'millisecond':
                  return Math.floor(864e5 * t) + i
                default:
                  throw new Error('Unknown unit ' + e)
              }
            }),
            ($t.asMilliseconds = Ct),
            ($t.asSeconds = Pt),
            ($t.asMinutes = Wt),
            ($t.asHours = Et),
            ($t.asDays = Ft),
            ($t.asWeeks = Nt),
            ($t.asMonths = zt),
            ($t.asYears = At),
            ($t.valueOf = function () {
              return (
                this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * w(this._months / 12)
              )
            }),
            ($t._bubble = function () {
              var e,
                t,
                n,
                i,
                r,
                o = this._milliseconds,
                a = this._days,
                s = this._months,
                u = this._data
              return (
                (o >= 0 && a >= 0 && s >= 0) ||
                  (o <= 0 && a <= 0 && s <= 0) ||
                  ((o += 864e5 * kt(Ht(s) + a)), (a = 0), (s = 0)),
                (u.milliseconds = o % 1e3),
                (e = p(o / 1e3)),
                (u.seconds = e % 60),
                (t = p(e / 60)),
                (u.minutes = t % 60),
                (n = p(t / 60)),
                (u.hours = n % 24),
                (a += p(n / 24)),
                (r = p(Ot(a))),
                (s += r),
                (a -= kt(Ht(r))),
                (i = p(s / 12)),
                (s %= 12),
                (u.days = a),
                (u.months = s),
                (u.years = i),
                this
              )
            }),
            ($t.get = function (e) {
              return this[(e = H(e)) + 's']()
            }),
            ($t.milliseconds = Ut),
            ($t.seconds = It),
            ($t.minutes = Gt),
            ($t.hours = Jt),
            ($t.days = Rt),
            ($t.weeks = function () {
              return p(this.days() / 7)
            }),
            ($t.months = Vt),
            ($t.years = Zt),
            ($t.humanize = function (e) {
              var t = this.localeData(),
                n = (function (e, t, n) {
                  var i = qe(e).abs(),
                    r = Qt(i.as('s')),
                    o = Qt(i.as('m')),
                    a = Qt(i.as('h')),
                    s = Qt(i.as('d')),
                    u = Qt(i.as('M')),
                    d = Qt(i.as('y')),
                    l = (r < qt.s && ['s', r]) ||
                      (1 === o && ['m']) ||
                      (o < qt.m && ['mm', o]) ||
                      (1 === a && ['h']) ||
                      (a < qt.h && ['hh', a]) ||
                      (1 === s && ['d']) ||
                      (s < qt.d && ['dd', s]) ||
                      (1 === u && ['M']) ||
                      (u < qt.M && ['MM', u]) ||
                      (1 === d && ['y']) || ['yy', d]
                  return (l[2] = t), (l[3] = +e > 0), (l[4] = n), Bt.apply(null, l)
                })(this, !e, t)
              return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }),
            ($t.toISOString = Kt),
            ($t.toString = Kt),
            ($t.toJSON = Kt),
            ($t.locale = it),
            ($t.localeData = ot),
            ($t.toIsoString = pe(
              'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
              Kt
            )),
            ($t.lang = rt),
            U('X', 0, 0, 'unix'),
            U('x', 0, 0, 'valueOf'),
            re('x', ee),
            re('X', /[+-]?\d+(\.\d{1,3})?/),
            se('X', function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e, 10))
            }),
            se('x', function (e, t, n) {
              n._d = new Date(w(e))
            }),
            (i.version = '2.10.6'),
            (t = Ee),
            (i.fn = vt),
            (i.min = function () {
              var e = [].slice.call(arguments, 0)
              return ze('isBefore', e)
            }),
            (i.max = function () {
              var e = [].slice.call(arguments, 0)
              return ze('isAfter', e)
            }),
            (i.utc = u),
            (i.unix = function (e) {
              return Ee(1e3 * e)
            }),
            (i.months = function (e, t) {
              return St(e, t, 'months', 12, 'month')
            }),
            (i.isDate = o),
            (i.locale = S),
            (i.invalid = c),
            (i.duration = qe),
            (i.isMoment = y),
            (i.weekdays = function (e, t) {
              return St(e, t, 'weekdays', 7, 'day')
            }),
            (i.parseZone = function () {
              return Ee.apply(null, arguments).parseZone()
            }),
            (i.localeData = b),
            (i.isDuration = je),
            (i.monthsShort = function (e, t) {
              return St(e, t, 'monthsShort', 12, 'month')
            }),
            (i.weekdaysMin = function (e, t) {
              return St(e, t, 'weekdaysMin', 7, 'day')
            }),
            (i.defineLocale = T),
            (i.weekdaysShort = function (e, t) {
              return St(e, t, 'weekdaysShort', 7, 'day')
            }),
            (i.normalizeUnits = H),
            (i.relativeTimeThreshold = function (e, t) {
              return void 0 !== qt[e] && (void 0 === t ? qt[e] : ((qt[e] = t), !0))
            }),
            i
          )
        })()
      }.call(this, n('YuTi')(e)))
    },
    'ycI/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var i = n('q1tI')
      class r extends i.PureComponent {
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
  },
])
