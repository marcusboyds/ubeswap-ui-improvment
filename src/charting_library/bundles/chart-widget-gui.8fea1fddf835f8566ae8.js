;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['chart-widget-gui'],
  {
    '+jnJ': function (t, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return s
      }),
        i.d(e, 'b', function () {
          return a
        })
      i('YFKU'), i('EsMY')
      var s,
        l = i('m/cY'),
        o = i('Vdly')
      function n(t) {
        return t === s.AlwaysOn || t === s.AlwaysOff ? t : s.VisibleOnMouseOver
      }
      function a(t, e) {
        let i, a
        function r() {
          if (!i) {
            i = Object(l.a)()
            let s = o.getValue(t)
            void 0 === s && void 0 !== e && (s = o.getValue(e)),
              i.setValue(n(s)),
              i.subscribe(i, (e) => {
                o.setValue(t, n(e.value()))
              })
          }
          return i
        }
        return {
          property: r,
          availableValues: function () {
            return [
              { id: s.VisibleOnMouseOver, value: s.VisibleOnMouseOver, title: window.t('Visible on Mouse Over') },
              { id: s.AlwaysOn, value: s.AlwaysOn, title: window.t('Always Visible') },
              { id: s.AlwaysOff, value: s.AlwaysOff, title: window.t('Always Invisible') },
            ]
          },
          actualBehavior: function () {
            if (!a) {
              a = Object(l.a)()
              const t = r(),
                e = () => {
                  let e = t.value()
                  e !== s.AlwaysOn &&
                    e !== s.AlwaysOff &&
                    (e = Modernizr.mobiletouch ? s.AlwaysOn : s.VisibleOnMouseOver),
                    a && a.setValue(e)
                }
              t.subscribe(a, e), e()
            }
            return a
          },
        }
      }
      !(function (t) {
        ;(t.AlwaysOn = 'alwaysOn'), (t.VisibleOnMouseOver = 'visibleOnMouseOver'), (t.AlwaysOff = 'alwaysOff')
      })(s || (s = {}))
    },
    '/NcV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>'
    },
    '0jws': function (t, e, i) {
      t.exports = { blockHidden: 'blockHidden-xPfK7aM7', 'pane-button': 'pane-button-xPfK7aM7' }
    },
    '1ANp': function (t, e, i) {
      'use strict'
      i.d(e, 'c', function () {
        return l
      }),
        i.d(e, 'd', function () {
          return o
        }),
        i.d(e, 'b', function () {
          return n
        }),
        i.d(e, 'a', function () {
          return a
        })
      var s = i('+jnJ')
      const l = 'NavigationButtons.visibility',
        { property: o, availableValues: n, actualBehavior: a } = Object(s.b)(l)
    },
    '1Wf8': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>'
    },
    '2CEX': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>'
    },
    '5Alx': function (t, e, i) {
      t.exports = {
        marginlegendhoriz: '4px',
        legend: 'legend-2KhwsEwE',
        item: 'item-2KhwsEwE',
        withAction: 'withAction-2KhwsEwE',
        selected: 'selected-2KhwsEwE',
        last: 'last-2KhwsEwE',
        text: 'text-2KhwsEwE',
        noWrapWrapper: 'noWrapWrapper-2KhwsEwE',
        noWrap: 'noWrap-2KhwsEwE',
        series: 'series-2KhwsEwE',
        valuesAdditionalWrapper: 'valuesAdditionalWrapper-2KhwsEwE',
        valueItem: 'valueItem-2KhwsEwE',
        valueTitle: 'valueTitle-2KhwsEwE',
        valueValue: 'valueValue-2KhwsEwE',
        valuesWrapper: 'valuesWrapper-2KhwsEwE',
        directionColumn: 'directionColumn-2KhwsEwE',
        titleWrapper: 'titleWrapper-2KhwsEwE',
        button: 'button-2KhwsEwE',
        statusesWrapper: 'statusesWrapper-2KhwsEwE',
        buttonsWrapper: 'buttonsWrapper-2KhwsEwE',
        buttons: 'buttons-2KhwsEwE',
        noActions: 'noActions-2KhwsEwE',
        title: 'title-2KhwsEwE',
        title2nd: 'title2nd-2KhwsEwE',
        disabled: 'disabled-2KhwsEwE',
        withCustomTextColor: 'withCustomTextColor-2KhwsEwE',
        study: 'study-2KhwsEwE',
        title1st: 'title1st-2KhwsEwE',
        hideValues: 'hideValues-2KhwsEwE',
        has5Buttons: 'has5Buttons-2KhwsEwE',
        stayInHoveredMode: 'stayInHoveredMode-2KhwsEwE',
        withTail: 'withTail-2KhwsEwE',
        loading: 'loading-2KhwsEwE',
        loader: 'loader-2KhwsEwE',
        withDot: 'withDot-2KhwsEwE',
        title3rd: 'title3rd-2KhwsEwE',
        title4th: 'title4th-2KhwsEwE',
        miniHidden2Title: 'miniHidden2Title-2KhwsEwE',
        microHidden2Title: 'microHidden2Title-2KhwsEwE',
        hidden3Title: 'hidden3Title-2KhwsEwE',
        flagged: 'flagged-2KhwsEwE',
        medium: 'medium-2KhwsEwE',
        minimized: 'minimized-2KhwsEwE',
        micro: 'micro-2KhwsEwE',
        onlyOneButtonCanBeStick: 'onlyOneButtonCanBeStick-2KhwsEwE',
        touchMode: 'touchMode-2KhwsEwE',
        buttonIcon: 'buttonIcon-2KhwsEwE',
        flag: 'flag-2KhwsEwE',
        invisibleHover: 'invisibleHover-2KhwsEwE',
        eye: 'eye-2KhwsEwE',
        hiddenLoading: 'hiddenLoading-2KhwsEwE',
        'eye-animation': 'eye-animation-2KhwsEwE',
        markerContainer: 'markerContainer-2KhwsEwE',
        flagWrapper: 'flagWrapper-2KhwsEwE',
        sourcesWrapper: 'sourcesWrapper-2KhwsEwE',
        newCollapser: 'newCollapser-2KhwsEwE',
        sources: 'sources-2KhwsEwE',
        toggler: 'toggler-2KhwsEwE pane-button-xPfK7aM7',
        counter: 'counter-2KhwsEwE',
        iconArrow: 'iconArrow-2KhwsEwE',
        objectTree: 'objectTree-2KhwsEwE',
        onlyOneSourceShown: 'onlyOneSourceShown-2KhwsEwE',
        closed: 'closed-2KhwsEwE',
        objectsTreeCanBeShown: 'objectsTreeCanBeShown-2KhwsEwE',
      }
    },
    '61S9': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>'
    },
    '6dGu': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>'
    },
    '94TV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>'
    },
    '956S': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>'
    },
    '9Crk': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>'
    },
    '9lPX': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>'
    },
    AH3n: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13 12.78V5.22a.3.3 0 0 0-.51-.2L8.7 8.78a.3.3 0 0 0 0 .42L12.5 13a.3.3 0 0 0 .51-.21zM8 12.78V5.22a.3.3 0 0 0-.51-.2L3.7 8.78a.3.3 0 0 0 0 .42L7.5 13a.3.3 0 0 0 .51-.21z"/></svg>'
    },
    AvGy: function (t, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return l
      })
      var s = i('qFKp')
      const l = s.CheckMobile.any()
    },
    D8x7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>'
    },
    EV8o: function (t, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return l
      })
      var s = i('ogJP')
      function l(t, e, i, l, o) {
        const n = document.createElement('div')
        ;(n.className = e),
          n.classList.toggle(l, !t.visible.value()),
          Object.assign(n.dataset, t.dataset),
          void 0 !== t.className && n.classList.add(t.className),
          void 0 !== t.title &&
            (n.classList.add('apply-common-tooltip'),
            n.setAttribute('title', t.title.value()),
            void 0 !== t.hotKeyTitle && (n.dataset.tooltipHotkey = t.hotKeyTitle)),
          n.addEventListener('touchend', t.action),
          n.addEventListener('mousedown', (e) => {
            0 === e.button && t.action(e)
          })
        const a = document.createElement('div')
        a.classList.add(i)
        const r = t.iconMap.get(o) || ''
        return Object(s.isString)(r) ? (a.innerHTML = r) : a.appendChild(r), n.appendChild(a), n
      }
    },
    G2LI: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>'
    },
    GOhO: function (t, e, i) {
      'use strict'
      var s = i('+DwS')
      i('tc+8')
      var l = i('m/cY')
      function o(t, ...e) {
        const i = () => t(...e.map((t) => t.value())),
          s = Object(l.a)(i()),
          o = () => s.setValue(i()),
          n = {}
        for (const l of e) l.subscribe(n, o)
        return (
          (s.destroy = () => {
            e.forEach((t) => t.unsubscribeAll(n))
          }),
          s
        )
      }
      i.d(e, 'b', function () {
        return s.a
      }),
        i.d(e, 'a', function () {
          return o
        })
    },
    'Gp/h': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>'
    },
    Jjb7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>'
    },
    JmzL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'
    },
    LIcf: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>'
    },
    LVLx: function (t, e, i) {
      'use strict'
      ;((t) => {
        function e(t) {
          return t instanceof Node ? t : document.createTextNode(String(t))
        }
        for (const i of t) {
          if (i.hasOwnProperty('append')) return
          Object.defineProperty(i, 'append', {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function (...t) {
              if (1 === t.length) return void this.appendChild(e(t[0]))
              const i = document.createDocumentFragment()
              for (const s of t) i.appendChild(e(s))
              this.appendChild(i)
            },
          })
        }
      })([Element.prototype, Document.prototype, DocumentFragment.prototype])
    },
    M3mX: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>'
    },
    MQEA: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>'
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
    },
    'MyT/': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>'
    },
    OJSF: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>'
    },
    PXSR: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>'
    },
    QEZv: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>'
    },
    QkND: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>'
    },
    R5JZ: function (t, e, i) {
      'use strict'
      function s(t, e, i, s, l) {
        function o(l) {
          if (t > l.timeStamp) return
          const o = l.target
          void 0 !== i && null !== e && null !== o && o.ownerDocument === s && (e.contains(o) || i(l))
        }
        return (
          l.click && s.addEventListener('click', o, !1),
          l.mouseDown && s.addEventListener('mousedown', o, !1),
          l.touchEnd && s.addEventListener('touchend', o, !1),
          l.touchStart && s.addEventListener('touchstart', o, !1),
          () => {
            s.removeEventListener('click', o, !1),
              s.removeEventListener('mousedown', o, !1),
              s.removeEventListener('touchend', o, !1),
              s.removeEventListener('touchstart', o, !1)
          }
        )
      }
      i.d(e, 'a', function () {
        return s
      })
    },
    RgOa: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>'
    },
    RspR: function (t, e, i) {
      'use strict'
      i.d(e, 'c', function () {
        return o
      }),
        i.d(e, 'b', function () {
          return n
        }),
        i.d(e, 'a', function () {
          return a
        })
      var s = i('+jnJ'),
        l = i('1ANp')
      const { property: o, availableValues: n, actualBehavior: a } = Object(s.b)('PaneButtons.visibility', l.c)
    },
    S48P: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>'
    },
    TGRH: function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, 'ControlBarNavigation', function () {
          return k
        })
      var s = i('Eyy1'),
        l = (i('YFKU'), i('1ANp')),
        o = i('Ialn'),
        n = i('gWrr'),
        a = i('/DW5'),
        r = i('qFKp'),
        d = (i('JWMC'), i('MjtL')),
        h = i('e8Rm'),
        u = i('e2QN'),
        c = i('vg09'),
        _ = i('/NcV'),
        p = i('94TV'),
        b = i('qfuz'),
        g = i('MQEA'),
        m = i('eYcT'),
        w = i('nFx7')
      i('jrhZ')
      const v = Object(a.b)({ keys: ['Alt', 'R'], text: '{0} + {1}' }),
        S = Object(a.b)({ keys: ['Alt', 'Click', 'Alt', 'Enter'], text: '{0} + {1}, {2} + {3}' }),
        y = Object(a.b)({ keys: [b], text: '{0}' }),
        f = Object(a.b)({ keys: [g], text: '{0}' }),
        M = `<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="${window.t(
          'Zoom Out'
        )}">\n\t\t\t\t${h}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="${window.t(
          'Zoom In'
        )}">\n\t\t\t\t${c}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="${window.t(
          'Maximize chart'
        )}" data-tooltip-hotkey="${S}">\n\t\t\t\t${m}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="${window.t(
          'Restore chart'
        )}" data-tooltip-hotkey="${S}">\n\t\t\t\t${w}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="${window.t(
          'Scroll to the Left'
        )}" data-tooltip-hotkey="${y}">\n\t\t\t\t${d}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="${window.t(
          'Scroll to the Right'
        )}" data-tooltip-hotkey="${f}">\n\t\t\t\t${_}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="${window.t(
          'Reset Chart'
        )}" data-tooltip-hotkey="${v}">\n\t\t\t\t${u}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`,
        C = `<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="${window.t(
          'Scroll to the Most Recent Bar'
        )}">\n\t${p}\n</div>`,
        E = r.CheckMobile.any(),
        V = { zoomInOut: !0, maximize: !0, scrollLeftRight: !0, resetScale: !0, goToRealtime: !0 }
      class k {
        constructor(t, e, i) {
          ;(this._widget = Object(s.ensureNotNull)(Object(n.a)(M).querySelector('.control-bar-wrapper'))),
            (this._controlBar = Object(s.ensureNotNull)(this._widget.querySelector('.control-bar'))),
            (this._back = Object(s.ensureNotNull)(Object(n.a)(C).querySelector('.control-bar__btn--back-present'))),
            (this._btnGroups = Array.from(this._controlBar.querySelectorAll('.js-btn-group'))),
            (this._backButtonVisible = !1),
            (this._boundMouseHandler = null),
            (this._chartModel = null),
            (this._checkIntervalId = 0),
            (this._controlBarVisible = !1),
            (this._priceAxisChanged = null),
            (this._resetAvailabilityChanged = null),
            (this._priceAxisName = 'right'),
            (this._rafId = 0),
            (this._visibilityTypeProperty = null),
            (this._boundUpdateMaximizeButtonsVisibility = this._updateMaximizeButtonsVisibility.bind(this)),
            (this._boundToggleFullscreenButtons = this._toggleFullscreenButtons.bind(this)),
            (this._paneWidth = 0),
            (this._leftPriceScaleWidth = 0),
            (this._rightPriceScaleWidth = 0),
            (this._chart = t),
            (this._parent = e),
            (this._options = Object.assign({}, V, i)),
            (this._visibilityPrioritizedGroups = this._initGroupDescriptions()),
            this._init(),
            this._initHandlers(),
            this.updatePosition()
        }
        destroy() {
          if (
            (null !== this._visibilityTypeProperty &&
              (this._visibilityTypeProperty.unsubscribe(this, this._onVisibilityTypeChange),
              (this._visibilityTypeProperty = null)),
            null !== this._boundMouseHandler &&
              (this._parent.removeEventListener('mousemove', this._boundMouseHandler, !1),
              this._parent.removeEventListener('mouseleave', this._boundMouseHandler, !1),
              (this._boundMouseHandler = null)),
            null !== this._priceAxisChanged &&
              (this._priceAxisChanged.unsubscribe(this, this._updateBackBtnPosition), (this._priceAxisChanged = null)),
            clearInterval(this._checkIntervalId),
            null !== this._resetAvailabilityChanged)
          ) {
            this._resetAvailabilityChanged.unsubscribe(this, this._updateResetScalesButtonVisibility)
            const t = this._chart.getResizerDetacher()
            t.fullscreenable.unsubscribe(this._boundUpdateMaximizeButtonsVisibility),
              t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons),
              (this._resetAvailabilityChanged = null)
          }
          this._chart = null
        }
        updatePosition() {
          const t = this._chart.paneWidgets()
          if (0 === t.length) return
          ;(this._paneWidth = t[0].width()),
            (this._leftPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName('left')),
            (this._rightPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName('right'))
          const e = this._chart.timeAxisHeight() + this._bottomMargin()
          ;(this._widget.style.bottom = e + 'px'),
            (this._back.style.bottom = e + 'px'),
            this._updateBtnGroupVisibility()
        }
        _bottomMargin() {
          var t
          const e = this._chart.paneWidgets()
          return (null !== (t = this._chart.maximizedPaneWidget()) && void 0 !== t
            ? t
            : e[e.length - 1]
          ).containsMainSeries()
            ? 32
            : 5
        }
        _init() {
          if (r.CheckMobile.any()) for (const t of this._btnGroups) t.classList.add('js-hidden')
          ;(this._buttons = {
            zoomIn: this._widget.querySelector('.control-bar__btn--zoom-in'),
            zoomOut: this._widget.querySelector('.control-bar__btn--zoom-out'),
            moveLeft: this._widget.querySelector('.control-bar__btn--move-left'),
            moveRight: this._widget.querySelector('.control-bar__btn--move-right'),
            turn: this._widget.querySelector('.control-bar__btn--turn-button'),
            maximize: this._widget.querySelector('.control-bar__btn--maximize'),
            minimize: this._widget.querySelector('.control-bar__btn--minimize'),
          }),
            this._initVisibility(),
            this._parent.appendChild(this._widget),
            this._parent.appendChild(this._back),
            (this._backButtonVisible = !1),
            (this._priceAxisName = Object(o.isRtl)() ? 'left' : 'right'),
            this._chart.withModel(this, () => {
              ;(this._chartModel = this._chart.model()),
                (this._priceAxisChanged = this._chart.getPriceAxisWidthChangedByName(this._priceAxisName)),
                (this._resetAvailabilityChanged = this._chartModel.model().isScalesResetAvailableChanged()),
                this._priceAxisChanged.subscribe(this, this._updateBackBtnPosition),
                this._resetAvailabilityChanged.subscribe(this, this._updateResetScalesButtonVisibility)
              const t = this._chart.getResizerDetacher()
              t.fullscreenable.subscribe(this._boundUpdateMaximizeButtonsVisibility),
                t.fullscreen.subscribe(this._boundToggleFullscreenButtons),
                this._updateMaximizeButtonsVisibility(),
                this._updateBackBtnPosition(),
                this._back.addEventListener('click', () => {
                  null !== this._chartModel && this._chartModel.timeScale().scrollToRealtime(!0)
                }),
                (this._checkIntervalId = setInterval(() => this._check(), 1e3))
            })
        }
        _initHandlers() {
          const t = Modernizr.mobiletouch ? 'touchstart' : 'mousedown',
            e = Modernizr.mobiletouch ? ['touchend'] : ['mouseup', 'mouseout']
          this._buttons.moveLeft.addEventListener(t, (t) => {
            t.preventDefault(), this._chart.scrollHelper().moveByBar(1), this._trackEvent('Move Left')
          }),
            this._buttons.moveRight.addEventListener(t, (t) => {
              t.preventDefault(), this._chart.scrollHelper().moveByBar(-1), this._trackEvent('Move Right')
            })
          for (const s of e)
            this._buttons.moveLeft.addEventListener(s, () => this._chart.scrollHelper().stopMoveByBar()),
              this._buttons.moveRight.addEventListener(s, () => this._chart.scrollHelper().stopMoveByBar())
          this._buttons.turn.addEventListener('click', (t) => {
            t.preventDefault(), this._chart.GUIResetScales(), this._trackEvent('Reset to Default Settings')
          }),
            this._buttons.zoomOut.addEventListener('click', (t) => {
              t.preventDefault(), null !== this._chartModel && this._chartModel.zoomOut(), this._trackEvent('Zoom Out')
            }),
            this._buttons.zoomIn.addEventListener('click', (t) => {
              t.preventDefault(), null !== this._chartModel && this._chartModel.zoomIn(), this._trackEvent('Zoom In')
            }),
            this._buttons.maximize.addEventListener('click', (t) => {
              t.preventDefault(),
                this._chart.setActive(!0),
                this._chart.getResizerDetacher().requestFullscreen(),
                this._trackEvent(' Maximize Chart')
            }),
            this._buttons.minimize.addEventListener('click', (t) => {
              t.preventDefault(), this._chart.getResizerDetacher().exitFullscreen(), this._trackEvent(' Restore Chart')
            })
          const i = (t) => t.addEventListener('contextmenu', (t) => t.preventDefault())
          i(this._buttons.moveLeft),
            i(this._buttons.moveRight),
            i(this._buttons.turn),
            i(this._buttons.zoomOut),
            i(this._buttons.zoomIn),
            i(this._buttons.minimize),
            i(this._buttons.maximize)
        }
        _initGroupDescriptions() {
          return [
            {
              shouldBeHiddenOnMobile: !1,
              available: this._isMaximizeButtonAvailable.bind(this),
              className: 'js-btn-group-maximize',
              element: this._getBtnGroup('js-btn-group-maximize'),
              totalWidth: 50,
            },
            {
              shouldBeHiddenOnMobile: !1,
              available: () => this._options.resetScale,
              className: 'js-btn-group-reset-scale',
              element: this._getBtnGroup('js-btn-group-reset-scale'),
              totalWidth: 50,
            },
            {
              shouldBeHiddenOnMobile: !0,
              available: () => this._options.zoomInOut,
              className: 'js-btn-group-zoom',
              element: this._getBtnGroup('js-btn-group-zoom'),
              totalWidth: 86,
            },
            {
              shouldBeHiddenOnMobile: !0,
              available: () => this._options.scrollLeftRight,
              className: 'js-btn-group-scroll',
              element: this._getBtnGroup('js-btn-group-scroll'),
              totalWidth: 86,
            },
          ]
        }
        _check() {
          if (null === this._chartModel || !this._options.goToRealtime) return
          const t = this._chartModel.timeScale().rightOffset() < 0
          t !== this._backButtonVisible &&
            ((this._backButtonVisible = t),
            this._back.classList.toggle('control-bar__btn--btn-hidden', !this._backButtonVisible))
        }
        _initVisibility() {
          ;(this._visibilityTypeProperty = Object(l.a)()),
            this._visibilityTypeProperty.subscribe(this, this._onVisibilityTypeChange),
            this._onVisibilityTypeChange()
        }
        _onVisibilityTypeChange() {
          if (null === this._visibilityTypeProperty) return
          const t = this._visibilityTypeProperty.value()
          'alwaysOn' === t || 'alwaysOff' === t
            ? ((this._controlBarVisible = 'alwaysOn' === t),
              null !== this._boundMouseHandler &&
                (this._parent.removeEventListener('mousemove', this._boundMouseHandler, !1),
                this._parent.removeEventListener('mouseleave', this._boundMouseHandler, !1),
                (this._boundMouseHandler = null)))
            : ((this._controlBarVisible = !1),
              this._boundMouseHandler ||
                ((this._boundMouseHandler = this._visibilityMouseHandler.bind(this)),
                this._parent.addEventListener('mousemove', this._boundMouseHandler),
                this._parent.addEventListener('mouseleave', this._boundMouseHandler))),
            this._updateControlBarVisibility()
        }
        _visibilityMouseHandler(t) {
          if (t.buttons) return
          if (null !== this._chartModel && this._chartModel.lineBeingCreated()) return
          let e = 'mouseleave' !== t.type
          if ('mousemove' === t.type) {
            const i = this._widget.getBoundingClientRect(),
              s = 100 - this._bottomMargin()
            e =
              t.clientX >= i.left - 100 &&
              t.clientX <= i.right + 100 &&
              t.clientY >= i.top - s &&
              t.clientY <= i.bottom + 100
          }
          this._controlBarVisible !== e &&
            ((this._controlBarVisible = e),
            null === this._rafId &&
              (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                this._updateControlBarVisibility.bind(this)
              )))
        }
        _updateControlBarVisibility() {
          ;(this._rafId = null), this._controlBar.classList.toggle('control-bar--hidden', !this._controlBarVisible)
        }
        _updateBackBtnPosition() {
          if ('left' === this._priceAxisName || 'right' === this._priceAxisName) {
            const t = this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) + 14
            t && (this._back.style.marginRight = t + 'px')
          }
        }
        _updateBtnGroupVisibility() {
          const t = this._leftPriceScaleWidth + this._paneWidth,
            e = (t + this._rightPriceScaleWidth) / 2
          let i = 2 * Math.min(t - e, e - this._leftPriceScaleWidth) - 50 - 50,
            s = !1
          for (const l of this._visibilityPrioritizedGroups) {
            l.enoughSpaceForGroup = !1
            l.available() &&
              (!E || !l.shouldBeHiddenOnMobile) &&
              ((i -= l.totalWidth), (l.enoughSpaceForGroup = i >= 0 && !s), (s = s || !l.enoughSpaceForGroup)),
              !l.enoughSpaceForGroup !== l.element.classList.contains('js-hidden') &&
                l.element.classList.toggle('js-hidden', !l.enoughSpaceForGroup)
          }
          this._updateControlBarPosition()
        }
        _getBtnGroup(t) {
          return Object(s.ensureDefined)(this._btnGroups.find((e) => e.classList.contains(t)))
        }
        _updateControlBarPosition() {
          const t = this._visibilityPrioritizedGroups.reduce(
              (t, e) => t + (e.enoughSpaceForGroup ? e.totalWidth : 0),
              0
            ),
            e = (this._paneWidth + this._leftPriceScaleWidth + this._rightPriceScaleWidth) / 2 - Math.ceil(t / 2)
          this._widget.style.left = e + 'px'
        }
        _updateResetScalesButtonVisibility() {
          if (null === this._chartModel) return
          const t = this._chartModel.model().isScalesResetAvailable()
          this._buttons.turn.classList.toggle('control-bar__btn--btn-hidden', !t)
        }
        _updateMaximizeButtonsVisibility() {
          this._updateBtnGroupVisibility()
        }
        _toggleFullscreenButtons() {
          const t = this._chart.getResizerDetacher().fullscreen.value()
          this._buttons.maximize.classList.toggle('js-hidden', t),
            this._buttons.minimize.classList.toggle('js-hidden', !t)
        }
        _isMaximizeButtonAvailable() {
          return this._options.maximize, !1
        }
        _trackEvent(t) {
          0
        }
      }
    },
    Tq3g: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>'
    },
    Uua9: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>'
    },
    VrXG: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>'
    },
    VrrN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>'
    },
    WYzw: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>'
    },
    'Y+EN': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>'
    },
    YGQl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>'
    },
    ZKFq: function (t, e, i) {
      t.exports = {
        'css-value-pane-controls-padding-left': '1px',
        'css-value-pane-controls-padding-right': '5px',
        paneControls: 'paneControls-2fnY2ZKI',
        hasTopMargin: 'hasTopMargin-2fnY2ZKI',
        hidden: 'hidden-2fnY2ZKI',
        forceHidden: 'forceHidden-2fnY2ZKI',
        button: 'button-2fnY2ZKI pane-button-xPfK7aM7',
        buttonIcon: 'buttonIcon-2fnY2ZKI',
        minimize: 'minimize-2fnY2ZKI',
        newButton: 'newButton-2fnY2ZKI',
        touchMode: 'touchMode-2fnY2ZKI',
        maximize: 'maximize-2fnY2ZKI',
        'maximize-animation-up-bracket': 'maximize-animation-up-bracket-2fnY2ZKI',
        'maximize-animation-down-bracket': 'maximize-animation-down-bracket-2fnY2ZKI',
        'minimize-animation-up-bracket': 'minimize-animation-up-bracket-2fnY2ZKI',
        'minimize-animation-down-bracket': 'minimize-animation-down-bracket-2fnY2ZKI',
        up: 'up-2fnY2ZKI',
        'up-animation': 'up-animation-2fnY2ZKI',
        down: 'down-2fnY2ZKI',
        'down-animation': 'down-animation-2fnY2ZKI',
        buttonsWrapper: 'buttonsWrapper-2fnY2ZKI',
      }
    },
    bNWL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>'
    },
    cbig: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>'
    },
    e2QN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>'
    },
    e8Rm: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>'
    },
    eYcT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M6 9C6 7.89543 6.89543 7 8 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M17 8C17 7.44772 17.4477 7 18 7H20C21.1046 7 22 7.89543 22 9V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V9H18C17.4477 9 17 8.55228 17 8Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M21 16C21.5523 16 22 16.4477 22 17V19C22 20.1046 21.1046 21 20 21H18C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19H20V17C20 16.4477 20.4477 16 21 16Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M7 16C7.55228 16 8 16.4477 8 17V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H8C6.89543 21 6 20.1046 6 19V17C6 16.4477 6.44772 16 7 16Z"/></g></svg>'
    },
    fBig: function (t, e, i) {
      t.exports = {
        loader: 'loader-HRZE_iH8',
        loaderItem: 'loaderItem-HRZE_iH8',
        'loader-animation': 'loader-animation-HRZE_iH8',
        shown: 'shown-HRZE_iH8',
        touchMode: 'touchMode-HRZE_iH8',
      }
    },
    fk9O: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>'
    },
    gKdq: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>'
    },
    i9xP: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>'
    },
    jXu8: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>'
    },
    jrhZ: function (t, e, i) {
      t.exports = {
        'animation-minimize-corner-left-top': 'animation-minimize-corner-left-top-1yUqeyiZ',
        'animation-minimize-corner-right-top': 'animation-minimize-corner-right-top-1yUqeyiZ',
        'animation-minimize-corner-right-bottom': 'animation-minimize-corner-right-bottom-1yUqeyiZ',
        'animation-minimize-corner-left-bottom': 'animation-minimize-corner-left-bottom-1yUqeyiZ',
        'animation-maximize-corner-left-top': 'animation-maximize-corner-left-top-1yUqeyiZ',
        'animation-maximize-corner-right-top': 'animation-maximize-corner-right-top-1yUqeyiZ',
        'animation-maximize-corner-right-bottom': 'animation-maximize-corner-right-bottom-1yUqeyiZ',
        'animation-maximize-corner-left-bottom': 'animation-maximize-corner-left-bottom-1yUqeyiZ',
      }
    },
    ku84: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>'
    },
    lvAK: function (t, e, i) {
      'use strict'
      i.r(e)
      var s = i('RspR'),
        l = i('3ClC'),
        o = (i('LVLx'), i('Eyy1')),
        n = i('eJTA'),
        a = i('+jnJ'),
        r = i('AvGy'),
        d = i('EV8o'),
        h = i('ZKFq'),
        u = i('0jws')
      class c {
        constructor(t, e, i) {
          ;(this._parentEl = document.createElement('div')),
            (this._listActionsWrapperEl = null),
            (this._listActionsElements = {}),
            (this._actionsSpawns = {}),
            (this._onMouseEnterLeaveEventHandler = null),
            (this._mouseOverWidget = !1),
            (this._wrapEl = t),
            (this._onMouseEnterLeaveEventHandler = this._onMouseEnterLeaveEvent.bind(this)),
            this._wrapEl.addEventListener('mouseenter', this._onMouseEnterLeaveEventHandler),
            this._wrapEl.addEventListener('mouseleave', this._onMouseEnterLeaveEventHandler),
            (this._actions = e),
            (this._globalVisibility = i.globalVisibility.spawn()),
            this._globalVisibility.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)),
            (this._visibilityType = i.visibilityType.spawn()),
            this._visibilityType.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)),
            (this._doNotSwitchToContextMenuMode = i.doNotSwitchToContextMenuMode),
            (this._themedColor = i.themedColor.spawn()),
            this._themedColor.subscribe(this._updateThemedColor.bind(this))
          for (const [s, l] of Object.entries(this._actions)) {
            const t = s
            ;(this._actionsSpawns[t] = {
              visible: l.visible.spawn(),
              title: void 0 === l.title ? null : l.title.spawn(),
            }),
              this._actionsSpawns[t].visible.subscribe(this._updateActionVisibilities.bind(this, t))
            const e = this._actionsSpawns[t].title
            null !== e && e.subscribe(this._updateActionTitle.bind(this, t))
          }
          this._render(),
            this._updatePaneControlsWidgetVisibility(),
            this._updateThemedColor(this._themedColor.value()),
            this._parentEl.classList.toggle(h.touchMode, r.a),
            this._parentEl.addEventListener('contextmenu', (t) => t.preventDefault())
        }
        destroy() {
          this._visibilityType.destroy(), this._themedColor.destroy()
          for (const t of Object.keys(this._actionsSpawns)) {
            const e = t
            this._actionsSpawns[e].visible.destroy()
            const i = this._actionsSpawns[e].title
            null !== i && i.destroy()
          }
          null !== this._onMouseEnterLeaveEventHandler &&
            (this._wrapEl.removeEventListener('mouseenter', this._onMouseEnterLeaveEventHandler),
            this._wrapEl.removeEventListener('mouseleave', this._onMouseEnterLeaveEventHandler),
            (this._onMouseEnterLeaveEventHandler = null)),
            (this._parentEl.innerHTML = ''),
            delete this._parentEl
        }
        getElement() {
          return this._parentEl
        }
        updateWidgetModeByWidth(t) {
          const e = !this._doNotSwitchToContextMenuMode.value() && t < 356,
            i = !this._doNotSwitchToContextMenuMode.value() && t < 666.65,
            s = Object(o.ensureNotNull)(this._listActionsWrapperEl),
            l = Object(o.ensureNotNull)(this._listActionsElements.more)
          s.classList.toggle(u.blockHidden, e || i),
            l.classList.toggle(u.blockHidden, e || !i || !this._actions.more.visible.value())
        }
        _render() {
          this._renderActions(), this._parentEl.classList.add(h.paneControls), this._wrapEl.append(this._parentEl)
        }
        _renderActions() {
          null === this._listActionsWrapperEl &&
            ((this._listActionsWrapperEl = document.createElement('div')),
            this._listActionsWrapperEl.classList.add(h.buttonsWrapper),
            this._parentEl.append(this._listActionsWrapperEl))
          const t = r.a ? 'large' : 'small'
          ;(this._listActionsElements.up = Object(d.a)(this._actions.up, h.button, h.buttonIcon, u.blockHidden, t)),
            (this._listActionsElements.down = Object(d.a)(
              this._actions.down,
              h.button,
              h.buttonIcon,
              u.blockHidden,
              t
            )),
            (this._listActionsElements.close = Object(d.a)(
              this._actions.close,
              h.button,
              h.buttonIcon,
              u.blockHidden,
              t
            )),
            (this._listActionsElements.maximize = Object(d.a)(
              this._actions.maximize,
              h.button,
              h.buttonIcon,
              u.blockHidden,
              t
            )),
            (this._listActionsElements.minimize = Object(d.a)(
              this._actions.minimize,
              h.button,
              h.buttonIcon,
              u.blockHidden,
              t
            )),
            this._listActionsWrapperEl.append(
              this._listActionsElements.up,
              this._listActionsElements.down,
              this._listActionsElements.close,
              this._listActionsElements.maximize,
              this._listActionsElements.minimize
            ),
            (this._listActionsElements.more = Object(d.a)(this._actions.more, h.button, h.buttonIcon, u.blockHidden, t))
          for (const e of Object.keys(this._listActionsElements))
            Object(o.ensureNotNull)(this._listActionsElements[e]).classList.add(h.newButton)
          this._parentEl.append(this._listActionsElements.more)
        }
        _updateActionVisibilities(t, e) {
          Object(o.ensureNotNull)(this._listActionsElements[t]).classList.toggle(u.blockHidden, !e)
        }
        _updateActionTitle(t, e) {
          Object(o.ensureNotNull)(this._listActionsElements[t]).setAttribute('title', e)
        }
        _onMouseEnterLeaveEvent(t) {
          ;(this._mouseOverWidget = 'mouseenter' === t.type),
            this._visibilityType.value() === a.a.VisibleOnMouseOver && this._updatePaneControlsWidgetVisibility()
        }
        _updatePaneControlsWidgetVisibility() {
          let t,
            e = !1
          switch (this._visibilityType.value()) {
            case a.a.AlwaysOff:
              ;(t = !1), (e = !0)
              break
            case a.a.AlwaysOn:
              t = this._globalVisibility.value()
              break
            case a.a.VisibleOnMouseOver:
              t = this._globalVisibility.value() && this._mouseOverWidget
          }
          this._parentEl.classList.toggle(h.hidden, !t),
            this._parentEl.classList.toggle(h.forceHidden, !this._globalVisibility.value() || e)
        }
        _updateThemedColor(t) {
          if (t.length > 0) {
            const [e, i, s] = Object(n.parseRgb)(t)
            this._parentEl.style.color = Object(n.rgbaToString)([e, i, s, Object(n.normalizeAlphaComponent)(0.8)])
          } else this._parentEl.style.removeProperty('color')
        }
      }
      var _ = i('7KDR'),
        p = i('5VQP'),
        b = i('obM5'),
        g = i('fk9O'),
        m = i('gKdq'),
        w = i('WYzw')
      function v(t, e) {
        const i = Object(o.ensureNotNull)(e.target)
        return (function (t) {
          const e = []
          if (t.maximize.visible.value()) {
            const i = Object(o.ensure)(t.maximize.title),
              s = Object(o.ensureNotNull)(t.maximize.action)
            e.push(
              new _.Action({
                icon: w,
                label: i.value(),
                statName: 'Maximize Pane',
                shortcutHint: S,
                onExecute: () => s(),
              })
            )
          } else if (t.minimize.visible.value()) {
            const i = Object(o.ensure)(t.minimize.title),
              s = Object(o.ensureNotNull)(t.minimize.action)
            e.push(
              new _.Action({
                icon: w,
                label: i.value(),
                statName: 'Minimize Pane',
                shortcutHint: S,
                onExecute: () => s(),
              })
            )
          }
          if (t.up.visible.value()) {
            const i = Object(o.ensure)(t.up.title),
              s = Object(o.ensureNotNull)(t.up.action)
            e.push(new _.Action({ icon: g, label: i.value(), statName: 'Move pane up', onExecute: () => s() }))
          }
          if (t.down.visible.value()) {
            const i = Object(o.ensure)(t.down.title),
              s = Object(o.ensureNotNull)(t.down.action)
            e.push(new _.Action({ icon: m, label: i.value(), statName: 'Move pane down', onExecute: () => s() }))
          }
          if (t.close.visible.value()) {
            const i = Object(o.ensure)(t.close.title),
              s = Object(o.ensureNotNull)(t.close.action)
            e.push(new _.Action({ icon: b, label: i.value(), statName: 'Delete pane', onExecute: () => s() }))
          }
          return p.ContextMenuManager.createMenu(e)
        })(t).then(
          (t) => (
            t.show((t) => {
              const e = i.getBoundingClientRect()
              return { clientX: e.right - t, clientY: e.top + e.height + 3 }
            }),
            t
          )
        )
      }
      const S = window.t('Double click')
      var y = i('hY0g'),
        f = i.n(y),
        M = i('EsvI'),
        C = i('/DW5'),
        E = i('OJSF'),
        V = i('PXSR'),
        k = i('QEZv'),
        x = i('ku84'),
        L = i('i9xP'),
        H = i('1Wf8'),
        T = i('956S')
      i.d(e, 'PaneControlsWidget', function () {
        return I
      })
      const W = Modernizr.mobiletouch,
        A = window.t('Delete pane'),
        B = window.t('Move pane up'),
        O = window.t('Move pane down'),
        P = window.t('Maximize pane'),
        z = window.t('Restore pane'),
        D = window.t('Manage panes'),
        j = window.t('Double click'),
        N = Object(C.b)({ keys: [''], text: j })
      class I {
        constructor(t, e, i, l, o) {
          ;(this._actions = {}),
            (this._moreActionCM = null),
            (this._themedColor = new f.a('')),
            (this._model = t),
            (this._paneWidget = e),
            (this._callbacks = l),
            (this._closeButtonVisibility = new f.a(this._getCloseButtonVisibility())),
            (this._upButtonVisibility = new f.a(this._getUpButtonVisibility())),
            (this._downButtonVisibility = new f.a(this._getDownButtonVisibility())),
            (this._maximizeButtonVisibility = new f.a(this._getMaximizeButtonVisibility())),
            (this._minimizeButtonVisibility = new f.a(this._getMinimizeButtonVisibility())),
            this._createActions(),
            (this._visibilityTypeProperty = Object(s.a)()),
            this._visibilityTypeProperty.subscribe(this, (t) => {
              this._visibilityType.setValue(t.value())
            }),
            (this._visibilityType = new f.a(this._visibilityTypeProperty.value())),
            (this._isPaneMaximize = new f.a(this._getIsPaneMaximizeValue())),
            (this._isWidgetShow = new f.a(this._getIsWidgetShow())),
            (this._backgroundThemeName = i.backgroundThemeName),
            (this._renderer = new c(o, this._actions, {
              visibilityType: this._visibilityType.readonly(),
              globalVisibility: this._isWidgetShow.readonly(),
              doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
              themedColor: this._themedColor.readonly(),
            }))
        }
        destroy() {
          this._visibilityTypeProperty.unsubscribeAll(this), this._renderer.destroy()
        }
        getElement() {
          return this._renderer.getElement()
        }
        action() {
          return this._actions
        }
        update() {
          this._updateButtonsVisibility(),
            this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()),
            this._isWidgetShow.setValue(this._getIsWidgetShow())
        }
        updateWidgetModeByWidth(t) {
          this._renderer.updateWidgetModeByWidth(t)
        }
        updateThemedColors(t) {
          null === t &&
            (t = Object(M.getStdThemedValue)(
              'chartProperties.paneProperties.background',
              this._backgroundThemeName.value()
            )),
            this._themedColor.setValue(t || '')
        }
        _updateButtonsVisibility() {
          this._closeButtonVisibility.setValue(this._getCloseButtonVisibility()),
            this._upButtonVisibility.setValue(this._getUpButtonVisibility()),
            this._downButtonVisibility.setValue(this._getDownButtonVisibility()),
            this._maximizeButtonVisibility.setValue(this._getMaximizeButtonVisibility()),
            this._minimizeButtonVisibility.setValue(this._getMinimizeButtonVisibility())
        }
        _createActions() {
          ;(this._actions.up = {
            iconMap: new Map([
              ['large', V],
              ['small', V],
            ]),
            action: this._onUpDownButton.bind(this, 'up'),
            visible: this._upButtonVisibility,
            title: new f.a(B),
            className: h.up,
            dataset: { name: 'pane-button-up' },
          }),
            (this._actions.down = {
              iconMap: new Map([
                ['large', k],
                ['small', k],
              ]),
              action: this._onUpDownButton.bind(this, 'down'),
              visible: this._downButtonVisibility,
              title: new f.a(O),
              className: h.down,
              dataset: { name: 'pane-button-down' },
            }),
            (this._actions.close = {
              iconMap: new Map([
                ['large', E],
                ['small', E],
              ]),
              action: this._onCloseButton.bind(this),
              visible: this._closeButtonVisibility,
              title: new f.a(A),
              dataset: { name: 'pane-button-close' },
            }),
            (this._actions.maximize = {
              iconMap: new Map([
                ['large', H],
                ['small', x],
              ]),
              action: this._onToggleMaximizeButton.bind(this),
              visible: this._maximizeButtonVisibility,
              title: new f.a(P),
              hotKeyTitle: N,
              className: h.maximize,
              dataset: { name: 'pane-button-maximize' },
            }),
            (this._actions.minimize = {
              iconMap: new Map([
                ['large', H],
                ['small', x],
              ]),
              action: this._onToggleMaximizeButton.bind(this),
              visible: this._minimizeButtonVisibility,
              title: new f.a(z),
              hotKeyTitle: N,
              className: h.minimize,
              dataset: { name: 'pane-button-minimize' },
            }),
            (this._actions.more = {
              iconMap: new Map([
                ['large', T],
                ['small', L],
              ]),
              action: this._showButtonsInContextMenu.bind(this),
              visible: new f.a(!W),
              title: new f.a(D),
              dataset: { name: 'pane-button-more' },
            })
        }
        _getCloseButtonVisibility() {
          const t = this._paneWidget.state()
          let e = !1
          return (
            t.containsMainSeries() || t.isMaximized() || W || (e = t.dataSources().some((t) => Object(l.isStudy)(t))), e
          )
        }
        _onCloseButton() {
          const t = this._model.model().panes().indexOf(this._paneWidget.state())
          this._model.removePane(t)
        }
        _getUpButtonVisibility() {
          const t = this._paneWidget.state()
          return this._model.model().panes().indexOf(t) > 0 && !t.isMaximized() && !W
        }
        _getDownButtonVisibility() {
          const t = this._paneWidget.state(),
            e = this._model.model().panes()
          return e.indexOf(t) < e.length - 1 && !t.isMaximized() && !W
        }
        _onUpDownButton(t) {
          const e = this._model.model().panes().indexOf(this._paneWidget.state())
          this._model.rearrangePanes(e, t)
        }
        _getMaximizeButtonVisibility() {
          const t = this._paneWidget.state()
          return this._model.model().panes().length > 1 && !t.isMaximized() && !W
        }
        _getMinimizeButtonVisibility() {
          const t = this._paneWidget.state()
          return this._model.model().panes().length > 1 && t.isMaximized()
        }
        _onToggleMaximizeButton() {
          this._callbacks.toggleMaximizePane(this._paneWidget)
        }
        _showButtonsInContextMenu(t) {
          t.preventDefault(),
            null !== this._moreActionCM && this._moreActionCM.isShown()
              ? (this._moreActionCM = null)
              : v(this._actions, t).then((t) => {
                  this._moreActionCM = t
                })
        }
        _getIsPaneMaximizeValue() {
          return this._paneWidget.state().isMaximized()
        }
        _getIsWidgetShow() {
          return this._model.model().panes().length > 1
        }
      }
    },
    nFx7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M10 7C10.5523 7 11 7.44772 11 8V10C11 11.1046 10.1046 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9V8C9 7.44772 9.44772 7 10 7Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M18 7C18.5523 7 19 7.44772 19 8V10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C17.8954 12 17 11.1046 17 10V8C17 7.44772 17.4477 7 18 7Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M17 18C17 16.8954 17.8954 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M6 17C6 16.4477 6.44772 16 7 16H9C10.1046 16 11 16.8954 11 18V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V18H7C6.44772 18 6 17.5523 6 17Z"/></g></svg>'
    },
    obM5: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>'
    },
    qfuz: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>'
    },
    rGGD: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>'
    },
    rh3U: function (t, e, i) {
      t.exports = {
        'css-value-small-size': '18px',
        'css-value-border-radius-small-size': '9px',
        'css-value-large-size': '22px',
        'css-value-border-radius-large-size': '11px',
        statuses: 'statuses-1Ho_ylkC',
        statusItem: 'statusItem-1Ho_ylkC',
        small: 'small-1Ho_ylkC',
        large: 'large-1Ho_ylkC',
        blinking: 'blinking-1Ho_ylkC',
        oneWidgetsVisible: 'oneWidgetsVisible-1Ho_ylkC',
        twoWidgetsVisible: 'twoWidgetsVisible-1Ho_ylkC',
        threeWidgetsVisible: 'threeWidgetsVisible-1Ho_ylkC',
        'blinking-animation': 'blinking-animation-1Ho_ylkC',
        marketStatusOpen: 'marketStatusOpen-1Ho_ylkC',
        marketStatusClose: 'marketStatusClose-1Ho_ylkC',
        marketStatusPre: 'marketStatusPre-1Ho_ylkC',
        marketStatusPost: 'marketStatusPost-1Ho_ylkC',
        marketStatusHoliday: 'marketStatusHoliday-1Ho_ylkC',
        invalidSymbol: 'invalidSymbol-1Ho_ylkC',
        replayMode: 'replayMode-1Ho_ylkC',
        notAccurate: 'notAccurate-1Ho_ylkC',
        delay: 'delay-1Ho_ylkC',
        eod: 'eod-1Ho_ylkC',
        dataProblemHigh: 'dataProblemHigh-1Ho_ylkC',
        dataProblemLow: 'dataProblemLow-1Ho_ylkC',
      }
    },
    sAH5: function (t, e, i) {
      'use strict'
      i.r(e)
      var s = i('Eyy1'),
        l = i('hY0g'),
        o = i.n(l),
        n = i('ogJP'),
        a = i('ikwP'),
        r = i('eJTA'),
        d = i('Kxc7'),
        h = i('AvGy'),
        u = (i('LVLx'), i('MjAr')),
        c = i('EV8o'),
        _ = i('S8xo'),
        p = i('GUQs'),
        b = i('fBig')
      class g {
        constructor(t, e = {}) {
          ;(this._loadingEl = null), (this._parentEl = t), (this._options = e), this._renderLoading()
        }
        toggleVisibility(t) {
          null !== this._loadingEl && this._loadingEl.classList.toggle(b.shown, t)
        }
        _renderLoading() {
          ;(this._loadingEl = document.createElement('span')),
            this._loadingEl.classList.add(b.loader),
            this._options.className && this._loadingEl.classList.add(this._options.className),
            (this._loadingEl.innerHTML = `\n\t\t\t<span class="${b.loaderItem}"></span>\n\t\t\t<span class="${b.loaderItem}"></span>\n\t\t\t<span class="${b.loaderItem}"></span>\n\t\t`),
            this._parentEl.appendChild(this._loadingEl)
        }
      }
      var m = i('5Alx'),
        w = i('0jws'),
        v = i('qFKp')
      function S(t, e) {
        null === t.firstChild ? (t.textContent = e) : (t.firstChild.nodeValue = e)
      }
      const y = v.CheckMobile.any(),
        f = [m.title1st, m.title2nd, m.title3rd, m.title4th]
      class M {
        constructor(t, e, i) {
          ;(this._el = null),
            (this._firstBlockWrapper = null),
            (this._titleParentEl = null),
            (this._titleElements = []),
            (this._valuesParentEl = null),
            (this._valuesAdditionalWrapperEl = null),
            (this._valuesElements = []),
            (this._actionsParentEl = null),
            (this._actionAdditionalWrapperEl = null),
            (this._stayInHoveredMode = !1),
            (this._mode = 4),
            (this._statusesWrapper = null),
            (this._resizeObserver = null),
            (this._hideInvisibleHover = null),
            (this._hideValues = null),
            (this._allButtonsWidth = null),
            (this._lastStatusesWrapperWidth = null),
            (this._lastActionsWrapperWidth = null),
            (this._showActionsHandler = null),
            (this._hideActionsHandler = null),
            (this._selectedSourceHandler = null),
            (this._mouseEventHandlers = []),
            (this._disableTimeout = null),
            (this._loader = null),
            (this._model = t),
            (this._parentEl = e),
            (this._disabled = this._model.disabled().spawn()),
            this._disabled.subscribe(this._updateDisabledState.bind(this)),
            (this._selected = this._model.selected().spawn()),
            this._selected.subscribe(this._updateSelectedState.bind(this)),
            (this._loading = this._model.loading().spawn()),
            this._loading.subscribe(
              (function (t, e) {
                let i = 0
                return (s) => {
                  clearTimeout(i), s ? t() : (i = setTimeout(t, e, !1))
                }
              })(this._updateLoadingState.bind(this), 700)
            ),
            (this._isTitleHidden = this._model.isTitleHidden().spawn()),
            (this._isValuesHidden = this._model.isValuesHidden().spawn()),
            (this._isRowHidden = this._model.isRowHidden().spawn()),
            this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)),
            this._isValuesHidden.subscribe(this._updateShowValues.bind(this)),
            this._isRowHidden.subscribe(this._updateShowLine.bind(this)),
            (this._titlesSpawns = this._model.titles().map((t) => t.spawn()))
          for (let s = 0; s < this._titlesSpawns.length; s++)
            this._titlesSpawns[s].subscribe(this._updateTitlesHandler.bind(this, s))
          ;(this._values = this._model.values().spawn()),
            this._values.subscribe(this._updateValues.bind(this)),
            this._createValuesSpawns(),
            this._addValuesSpawnsSubscriptions(),
            (this._actionsSpawnArray = this._model
              .actions()
              .map((t) => ({ visible: t.visible.spawn(), title: void 0 === t.title ? null : t.title.spawn() })))
          for (let s = 0; s < this._actionsSpawnArray.length; s++) {
            this._actionsSpawnArray[s].visible.subscribe(this._updateActionVisibilities.bind(this, s))
            const t = this._actionsSpawnArray[s].title
            null !== t && t.subscribe(this._updateActionTitle.bind(this, s))
          }
          ;(this._withActions = i.withActions),
            this._render(),
            this._updateStates(),
            this._updateShowTitles(),
            this._updateShowValues(),
            this._updateShowLine(),
            null !== this._valuesParentEl && (this._loader = new g(this._valuesParentEl, { className: m.loader })),
            (this._customTextColor = i.customTextColor.spawn()),
            this._customTextColor.subscribe(this._updateCustomTextColor.bind(this)),
            this._updateCustomTextColor(),
            this._withActions &&
              ((this._showActionsHandler = Object(p.c)(this._showActions.bind(this))),
              (this._hideActionsHandler = Object(p.c)(this._hideActions.bind(this))),
              (this._selectedSourceHandler = Object(p.c)(this._model.setSourceSelected.bind(this._model))),
              null !== this._titleParentEl &&
                (this._titleParentEl.addEventListener('touchend', this._selectedSourceHandler),
                this._titleParentEl.addEventListener('mousedown', this._selectedSourceHandler),
                y ||
                  (this._titleParentEl.addEventListener('mouseenter', this._showActionsHandler),
                  this._titleParentEl.addEventListener('mouseleave', this._hideActionsHandler)),
                this._mouseEventHandlers.push(
                  new _.MouseEventHandler(this._titleParentEl, {
                    mouseDoubleClickEvent: this._model.onShowSettings.bind(this._model),
                    doubleTapEvent: this._model.onShowSettings.bind(this._model),
                  })
                )),
              null === this._actionAdditionalWrapperEl ||
                null === this._actionsParentEl ||
                y ||
                (this._actionAdditionalWrapperEl.addEventListener('mouseenter', this._showActionsHandler),
                this._actionAdditionalWrapperEl.addEventListener('mouseleave', this._hideActionsHandler),
                this._actionsParentEl.addEventListener('contextmenu', (t) => {
                  t.preventDefault(), t.stopPropagation()
                })))
        }
        destroy() {
          var t, e
          this._disabled.destroy(),
            this._selected.destroy(),
            this._loading.destroy(),
            this._isTitleHidden.destroy(),
            this._isValuesHidden.destroy(),
            this._isRowHidden.destroy(),
            this._customTextColor.destroy(),
            null !== this._disableTimeout && clearTimeout(this._disableTimeout)
          for (const i of this._titlesSpawns) i.destroy()
          if (null !== this._titleParentEl) {
            for (const t of this._mouseEventHandlers) t.destroy()
            ;(this._titleElements = []),
              this._withActions &&
                null !== this._selectedSourceHandler &&
                null !== this._showActionsHandler &&
                null !== this._hideActionsHandler &&
                (this._titleParentEl.removeEventListener('touchend', this._selectedSourceHandler),
                this._titleParentEl.removeEventListener('mousedown', this._selectedSourceHandler),
                y ||
                  (this._titleParentEl.removeEventListener('mouseenter', this._showActionsHandler),
                  this._titleParentEl.removeEventListener('mouseleave', this._hideActionsHandler))),
              (this._titleParentEl = null)
          }
          for (const i of this._actionsSpawnArray) {
            i.visible.destroy()
            const t = i.title
            null !== t && t.destroy()
          }
          if (
            (null !== this._actionAdditionalWrapperEl &&
              (this._withActions &&
                null !== this._showActionsHandler &&
                null !== this._hideActionsHandler &&
                !y &&
                (this._actionAdditionalWrapperEl.removeEventListener('mouseenter', this._showActionsHandler),
                this._actionAdditionalWrapperEl.removeEventListener('mouseleave', this._hideActionsHandler)),
              (this._actionAdditionalWrapperEl = null)),
            (this._actionsParentEl = null),
            this._removeValuesSpawnsSubscriptions(),
            this._values.destroy(),
            null !== this._valuesParentEl && ((this._valuesElements = []), (this._valuesParentEl = null)),
            null === (t = this._hideInvisibleHover) || void 0 === t || t.destroy(),
            null === (e = this._hideValues) || void 0 === e || e.destroy(),
            null !== this._resizeObserver && (this._resizeObserver.disconnect(), (this._resizeObserver = null)),
            null !== this._el)
          ) {
            Object(s.ensureNotNull)(this._el.parentNode).removeChild(this._el), (this._el = null)
          }
        }
        getHeight() {
          return null === this._el ? null : 24
        }
        updateMode(t) {
          ;(this._mode === t && null !== this._allButtonsWidth) || ((this._mode = t), this._updateAllButtonsWidth())
        }
        _render() {
          this._renderTitle(),
            this._renderActions(),
            this._renderValues(),
            (this._el = document.createElement('div')),
            (this._firstBlockWrapper = document.createElement('div')),
            this._firstBlockWrapper.classList.add(m.noWrapWrapper),
            this._firstBlockWrapper.appendChild(Object(s.ensureNotNull)(this._titleParentEl)),
            null !== this._actionsParentEl && this._firstBlockWrapper.appendChild(this._actionsParentEl),
            this._el.appendChild(this._firstBlockWrapper),
            this._el.appendChild(Object(s.ensureNotNull)(this._valuesParentEl)),
            this._parentEl.append(this._el)
        }
        _renderTitle() {
          null === this._titleParentEl &&
            ((this._titleParentEl = document.createElement('div')), this._titleParentEl.classList.add(m.titleWrapper))
          const t = this._titleParentEl
          for (let e = 0; e < this._titlesSpawns.length; e++) {
            const i = document.createElement('div')
            i.classList.add(m.title, f[e], 'apply-overflow-tooltip'), (i.dataset.name = 'legend-source-title')
            const s = this._titlesSpawns[e].value()
            s.length > 0
              ? (i.appendChild(document.createTextNode(s)), i.classList.add(m.withDot))
              : i.classList.add(w.blockHidden),
              t.appendChild(i),
              this._titleElements.push(i)
          }
        }
        _renderActions() {
          if (!this._withActions) return
          null === this._actionsParentEl &&
            ((this._actionsParentEl = document.createElement('div')),
            this._actionsParentEl.classList.add(m.buttonsWrapper),
            this._parentEl.append(this._actionsParentEl),
            (this._actionAdditionalWrapperEl = document.createElement('div')),
            this._actionAdditionalWrapperEl.classList.add(m.buttons),
            this._actionsParentEl.appendChild(this._actionAdditionalWrapperEl))
          const t = Object(s.ensureNotNull)(this._actionAdditionalWrapperEl),
            e = h.a ? 'large' : 'small'
          for (const i of this._model.actions()) {
            const s = Object(c.a)(i, m.button, m.buttonIcon, w.blockHidden, e)
            t.appendChild(s)
          }
        }
        _isWidthButtonsMode() {
          return (
            null !== this._el &&
            (this._el.classList.contains(m.withAction) ||
              this._disabled.value() ||
              this._selected.value() ||
              this._stayInHoveredMode)
          )
        }
        _updateTitlesHandler(t, e) {
          const i = Object(s.ensureNotNull)(this._titleElements[t]),
            l = 0 === e.length
          i.classList.toggle(w.blockHidden, l), i.classList.toggle(m.withDot, !l), S(i, e)
        }
        _updateStates(t) {
          this._updateDisabledState(),
            this._updateSelectedState(),
            this._updateLoadingState(),
            t && this._clearDisableState()
        }
        _updateValuesHTMLElHandler(t, e) {
          S(Object(s.ensure)(this._valuesElements[t].value), e), this._updateShowValues()
        }
        _updateValueColorHandler(t, e = '') {
          Object(s.ensure)(this._valuesElements[t].value).style.color = e
        }
        _updateValueVisibleHandler(t, e) {
          const i = Object(s.ensure)(this._valuesElements[t].value).closest('.' + m.valueItem)
          null !== i && i.classList.toggle(w.blockHidden, !e)
        }
        _updateShowLine() {
          null !== this._el && this._el.classList.toggle(w.blockHidden, this._isRowHidden.value())
        }
        _createValuesSpawns() {
          this._valuesSpawnArray = this._values
            .value()
            .map((t) => ({ value: t.value.spawn(), color: t.color.spawn(), visible: t.visible.spawn() }))
        }
        _removeValuesSpawnsSubscriptions() {
          for (const t of this._valuesSpawnArray) t.value.destroy(), t.color.destroy(), t.visible.destroy()
          this._valuesSpawnArray = []
        }
        _addValuesSpawnsSubscriptions() {
          for (let t = 0; t < this._valuesSpawnArray.length; t++) {
            const e = this._valuesSpawnArray[t]
            e.value.subscribe(this._updateValuesHTMLElHandler.bind(this, t)),
              e.color.subscribe(this._updateValueColorHandler.bind(this, t)),
              e.visible.subscribe(this._updateValueVisibleHandler.bind(this, t))
          }
        }
        _updateShowValues() {
          null !== this._valuesAdditionalWrapperEl &&
            this._valuesAdditionalWrapperEl.classList.toggle(w.blockHidden, this._isValuesShouldBeHidden())
        }
        _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some((t) => t.value.value().length > 0)
        }
        _addStatusesWidget(t, e, i) {
          ;(this._statusesWrapper = document.createElement('div')),
            this._statusesWrapper.classList.add(m.statusesWrapper),
            this._statusesWrapper.appendChild(t),
            Object(s.ensureNotNull)(this._firstBlockWrapper).appendChild(this._statusesWrapper),
            (this._hideInvisibleHover = e.spawn()),
            this._hideInvisibleHover.subscribe(this._updateInvisibleHoverMode.bind(this), { callWithLast: !0 }),
            (this._hideValues = i.spawn()),
            this._hideValues.subscribe(this._updateHideValuesMode.bind(this), { callWithLast: !0 }),
            this._updateStatusWidgetVisibility(this._disabled.value()),
            (this._resizeObserver = new u.default(this._handlerRestrictTitleWidth.bind(this))),
            null !== this._actionsParentEl && this._resizeObserver.observe(this._actionsParentEl),
            this._resizeObserver.observe(this._statusesWrapper)
        }
        _updateTitleMaxWidth() {
          if (null === this._firstBlockWrapper) return
          const t = this._allButtonsWidth || 0,
            e = (this._lastActionsWrapperWidth || 0) + (this._lastStatusesWrapperWidth || 0)
          this._isWidthButtonsMode()
            ? (this._firstBlockWrapper.style.maxWidth = `calc(100% - ${Math.max(t, e)}px)`)
            : (this._firstBlockWrapper.style.maxWidth = e > 0 ? `calc(100% - ${e}px)` : '')
        }
        _updateAllButtonsWidth() {
          ;(this._allButtonsWidth = this._getButtonsCount() * D + 1), this._updateTitleMaxWidth()
        }
        _updateInvisibleHoverMode(t) {
          null !== this._el && this._el.classList.toggle(m.invisibleHover, !t)
        }
        _updateHideValuesMode(t) {
          null !== this._el && this._el.classList.toggle(m.hideValues, t)
        }
        _showActions() {
          if (null === this._el || !this._withActions) return
          this._el.classList.add(m.withAction)
          const t =
            null !== this._valuesParentEl &&
            null !== this._titleParentEl &&
            this._valuesParentEl.offsetTop === this._titleParentEl.offsetTop
          this._el.classList.toggle(m.withTail, t), this._updateTitleMaxWidth()
        }
        _hideActions() {
          null !== this._el &&
            this._withActions &&
            !this._stayInHoveredMode &&
            (this._el.classList.remove(m.withAction),
            null !== this._valuesParentEl && this._valuesParentEl.classList.remove(m.withTail),
            this._updateTitleMaxWidth())
        }
        _handlerRestrictTitleWidth(t) {
          if (null === this._actionsParentEl || null === this._firstBlockWrapper) return
          let e = null,
            i = null
          for (const s of t)
            s.target === this._statusesWrapper && (e = s.contentRect.width),
              s.target === this._actionsParentEl && (i = s.contentRect.width)
          ;(e === this._lastStatusesWrapperWidth && i === this._lastActionsWrapperWidth) ||
            (null !== e && (this._lastStatusesWrapperWidth = e),
            null !== i && (this._lastActionsWrapperWidth = i),
            this._updateTitleMaxWidth())
        }
        _clearDesabledTimeout() {
          null !== this._disableTimeout && (clearTimeout(this._disableTimeout), (this._disableTimeout = null))
        }
        _updateDisabledState() {
          null !== this._el &&
            (this._el.classList.remove('tempDisabled'),
            this._el.classList.remove(m.hiddenLoading),
            this._clearDesabledTimeout(),
            this._disabled.value()
              ? (this._el.classList.add(m.disabled), this._updateStatusWidgetVisibility(!0))
              : (this._el.classList.add('tempDisabled'),
                this._el.classList.add(m.hiddenLoading),
                (this._disableTimeout = setTimeout(() => {
                  null !== this._el &&
                    (!this._loading.value() &&
                      this._el.classList.contains('tempDisabled') &&
                      (this._el.classList.remove('tempDisabled'),
                      this._el.classList.remove(m.hiddenLoading),
                      this._el.classList.toggle(m.disabled, this._disabled.value()),
                      this._updateStatusWidgetVisibility(!1)),
                    this._clearDesabledTimeout())
                }, 1e3))),
            this._updateTitleMaxWidth())
        }
        _clearDisableState() {
          null !== this._el &&
            (this._el.classList.remove(m.hiddenLoading),
            this._el.classList.remove(m.disabled),
            this._el.classList.remove('tempDisabled'),
            this._updateStatusWidgetVisibility(this._disabled.value()),
            this._updateTitleMaxWidth())
        }
        _updateSelectedState() {
          null !== this._el && this._withActions && this._el.classList.toggle(m.selected, this._selected.value())
        }
        _updateLoadingState() {
          if (null === this._el) return
          this._el.classList.contains('tempDisabled') &&
            (this._loading.value() ? this._el.classList.add(m.hiddenLoading) : this._clearDisableState())
          const t = this._loading.value()
          this._el.classList.toggle(m.loading, t), null !== this._loader && this._loader.toggleVisibility(t)
        }
        _updateShowTitles() {
          null !== this._titleParentEl &&
            (this._titleParentEl.classList.toggle(w.blockHidden, this._isTitleHidden.value()),
            null !== this._actionsParentEl &&
              this._actionsParentEl.classList.toggle(w.blockHidden, this._isTitleHidden.value()))
        }
        _updateValues() {
          this._removeValuesSpawnsSubscriptions(),
            this._createValuesSpawns(),
            null !== this._valuesParentEl &&
              null !== this._valuesAdditionalWrapperEl &&
              ((this._valuesElements = []), (this._valuesAdditionalWrapperEl.innerHTML = '')),
            this._renderValues(),
            this._addValuesSpawnsSubscriptions(),
            this._updateShowValues()
        }
        _updateActionVisibilities(t) {
          null !== this._actionsParentEl &&
            this._actionsParentEl
              .querySelectorAll('.' + m.button)
              [t].classList.toggle(w.blockHidden, !this._actionsSpawnArray[t].visible.value())
        }
        _updateActionTitle(t) {
          const e = this._actionsSpawnArray[t].title
          null !== this._actionsParentEl &&
            null !== e &&
            this._actionsParentEl.querySelectorAll('.' + m.button)[t].setAttribute('title', e.value())
        }
        _updateCustomTextColor() {
          const t = this._customTextColor.value() || ''
          for (const i of this._titleElements) null !== i && (i.style.color = t)
          const e = Object(s.ensureNotNull)(this._valuesParentEl).querySelectorAll('.' + m.valueTitle)
          for (let i = 0; i < e.length; i++) e[i].style.color = t
          Object(s.ensureNotNull)(this._el).classList.toggle(m.withCustomTextColor, Boolean(t))
        }
        _updateStatusWidgetVisibility(t) {
          null !== this._statusesWrapper && this._statusesWrapper.classList.toggle(w.blockHidden, t)
        }
      }
      class C extends M {
        constructor(t, e, i) {
          super(t, e, i),
            (this._clientHeight = null),
            (this._flagged = this._model.flagged().spawn()),
            this._flagged.subscribe(this._updateFlaggedState.bind(this)),
            this._updateStates(),
            i.statusWidgetEl && this._addStatusesWidget(i.statusWidgetEl, i.hideInvisibleHover, i.hideValues),
            this._selected.subscribe(this._updateTitleMaxWidth.bind(this))
        }
        destroy() {
          super.destroy(), void 0 !== this._flagged && this._flagged.destroy()
        }
        getHeight() {
          return null === this._el
            ? null
            : (null === this._clientHeight &&
                ((this._clientHeight = this._el.clientHeight), 0 === this._clientHeight && (this._clientHeight = null)),
              this._clientHeight)
        }
        _getButtonsCount() {
          return 1 === this._mode ? 1 : 3
        }
        _render() {
          super._render()
          const t = Object(s.ensureNotNull)(this._el)
          t.classList.add(m.item, m.series),
            t.classList.toggle(m.onlyOneButtonCanBeStick, this._model.isOneButtonCanBeStick()),
            (t.dataset.name = 'legend-series-item')
        }
        _updateStates() {
          super._updateStates(), this._updateFlaggedState()
        }
        _renderValues() {
          null === this._valuesParentEl &&
            ((this._valuesParentEl = document.createElement('div')),
            this._valuesParentEl.classList.add(m.valuesWrapper),
            (this._valuesAdditionalWrapperEl = document.createElement('div')),
            this._valuesAdditionalWrapperEl.classList.add(m.valuesAdditionalWrapper),
            this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl))
          const t = Object(s.ensureNotNull)(this._valuesAdditionalWrapperEl),
            e = this._values.value()
          for (const i of e) {
            const e = document.createElement('div')
            e.classList.add(m.valueItem), e.classList.toggle(w.blockHidden, !i.visible.value())
            const s = document.createElement('div'),
              l = i.title.value() || ''
            s.classList.add(m.valueTitle),
              s.classList.toggle(w.blockHidden, 0 === l.length),
              s.appendChild(document.createTextNode(l)),
              e.appendChild(s)
            const o = document.createElement('div')
            o.classList.add(m.valueValue),
              (o.style.color = i.color.value() || ''),
              o.appendChild(document.createTextNode(i.value.value())),
              e.appendChild(o),
              this._valuesElements.push({ title: s, value: o }),
              t.appendChild(e)
          }
        }
        _createValuesSpawns() {
          super._createValuesSpawns(),
            this._values.value().forEach((t, e) => {
              this._valuesSpawnArray[e].title = t.title.spawn()
            })
        }
        _removeValuesSpawnsSubscriptions() {
          for (const t of this._valuesSpawnArray) t.title.destroy()
          super._removeValuesSpawnsSubscriptions()
        }
        _addValuesSpawnsSubscriptions() {
          super._addValuesSpawnsSubscriptions()
          for (let t = 0; t < this._valuesSpawnArray.length; t++)
            this._valuesSpawnArray[t].title.subscribe(this._updateValuesTitleHTMLElHandler.bind(this, t))
        }
        _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some((t) => t.value.value().length > 0 || (t.title.value() || '').length > 0)
        }
        _updateValuesTitleHTMLElHandler(t, e = '') {
          const i = Object(s.ensure)(this._valuesElements[t].title)
          S(i, e), i.classList.toggle(w.blockHidden, 0 === e.length), this._updateShowValues()
        }
        _isWidthButtonsMode() {
          return (
            null !== this._el &&
            ((void 0 !== this._flagged && Boolean(this._flagged.value())) || super._isWidthButtonsMode())
          )
        }
        _updateFlaggedState() {
          if (void 0 === this._flagged) return
          Object(s.ensureNotNull)(this._el).classList.toggle(m.flagged, Boolean(this._flagged.value())),
            this._updateTitleMaxWidth()
        }
      }
      const E = v.isSafari ? 'click' : 'auxclick'
      class V extends M {
        constructor(t, e, i) {
          super(t, e, i),
            (this._wheelClickHandler = null),
            (this._canUpdateRowVisibility = !0),
            (this._globalRowVisibility = this._model.globalVisibility().spawn()),
            this._globalRowVisibility.subscribe(this._updateShowLine.bind(this), { callWithLast: !0 }),
            (this._has5Buttons = this._model.isPineScriptDataSource().spawn()),
            this._has5Buttons.subscribe(this._update5ButtonsStyles.bind(this)),
            this._updateStates(!this._disabled.value()),
            i.statusWidgetEl && this._addStatusesWidget(i.statusWidgetEl, i.hideInvisibleHover, i.hideValues),
            this._selected.subscribe(this._updateTitleMaxWidth.bind(this)),
            i.withActions &&
              ((this._wheelClickHandler = this._onWheelClicked.bind(this)),
              null !== this._titleParentEl && this._titleParentEl.addEventListener(E, this._wheelClickHandler))
        }
        destroy() {
          super.destroy(),
            this._has5Buttons.destroy(),
            this._globalRowVisibility && this._globalRowVisibility.destroy(),
            null !== this._wheelClickHandler &&
              null !== this._titleParentEl &&
              this._titleParentEl.removeEventListener(E, this._wheelClickHandler)
        }
        _updateShowLine() {
          if (null === this._el || !this._canUpdateRowVisibility) return
          const t = !this._globalRowVisibility.value()
          t ? this._el.classList.toggle(w.blockHidden, t) : super._updateShowLine()
        }
        _getButtonsCount() {
          switch (this._mode) {
            case 4:
              return this._has5Buttons.value() ? 5 : 4
            case 3:
              return 3
            default:
              return 2
          }
        }
        _render() {
          super._render()
          const t = Object(s.ensureNotNull)(this._el)
          t.classList.add(m.item, m.study), (t.dataset.name = 'legend-source-item')
        }
        _renderValues() {
          null === this._valuesParentEl &&
            ((this._valuesParentEl = document.createElement('div')),
            this._valuesParentEl.classList.add(m.valuesWrapper),
            (this._valuesAdditionalWrapperEl = document.createElement('div')),
            this._valuesAdditionalWrapperEl.classList.add(m.valuesAdditionalWrapper),
            this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl))
          const t = Object(s.ensureNotNull)(this._valuesAdditionalWrapperEl),
            e = this._values.value()
          for (const i of e) {
            const e = document.createElement('div')
            e.classList.add(m.valueItem), e.classList.toggle(w.blockHidden, !i.visible.value())
            const s = document.createElement('div')
            s.classList.add(m.valueValue),
              (s.style.color = i.color.value() || ''),
              s.appendChild(document.createTextNode(i.value.value())),
              e.appendChild(s),
              this._valuesElements.push({ value: s }),
              t.appendChild(e)
          }
        }
        _update5ButtonsStyles(t) {
          null !== this._el && (this._el.classList.toggle(m.has5Buttons, t), this._updateAllButtonsWidth())
        }
        _onWheelClicked(t) {
          1 === t.button && this._model.onRemoveSource()
        }
      }
      var k = i('6dGu'),
        x = i('rGGD'),
        L = i('Y+EN'),
        H = i('vYP1')
      const T = window.t('Hide Indicator Legend'),
        W = window.t('Show Indicator Legend'),
        A = window.t('Show Object Tree')
      class B {
        constructor(t, e, i) {
          ;(this._el = null),
            (this._counterEl = null),
            (this._arrowIconEL = null),
            (this._objectTreeEl = null),
            (this._mode = 0),
            (this._parentEl = t),
            (this._themedColor = e.spawn()),
            this._themedColor.subscribe(this._updateThemedColor.bind(this)),
            (this._sourceCount = i.visibleDataSourceCount.spawn()),
            this._sourceCount.subscribe(this._updateSourceCount.bind(this)),
            (this._isStateOpen = i.isDataSourcesCollapsed.spawn()),
            this._isStateOpen.subscribe(this._updateState.bind(this)),
            (this._showObjectsTree = i.showObjectsTree.spawn()),
            this._showObjectsTree.subscribe(this._updateObjectTreeVisibility.bind(this)),
            this._render(),
            this._updateState(),
            this._updateThemedColor(this._themedColor.value()),
            this._updateObjectTreeVisibility(this._showObjectsTree.value()),
            (this._toggleStateHandler = Object(p.c)(i.onCollapseDataSources)),
            (this._showObjectTreeHandler = Object(p.c)(i.onShowObjectsTreeDialog)),
            null !== this._el &&
              (this._el.addEventListener('touchend', this._toggleStateHandler),
              this._el.addEventListener('click', this._toggleStateHandler),
              this._el.addEventListener('contextmenu', (t) => {
                t.preventDefault(), t.stopPropagation()
              })),
            null !== this._objectTreeEl &&
              (this._objectTreeEl.addEventListener('touchend', this._showObjectTreeHandler),
              this._objectTreeEl.addEventListener('click', this._showObjectTreeHandler))
        }
        destroy() {
          this._sourceCount.destroy(),
            this._isStateOpen.destroy(),
            null !== this._objectTreeEl &&
              (this._objectTreeEl.removeEventListener('touchend', this._showObjectTreeHandler),
              this._objectTreeEl.removeEventListener('click', this._showObjectTreeHandler),
              (this._objectTreeEl = null)),
            (this._arrowIconEL = null),
            (this._counterEl = null),
            null !== this._el &&
              (this._el.removeEventListener('touchend', this._toggleStateHandler),
              this._el.removeEventListener('click', this._toggleStateHandler),
              (this._el.innerHTML = ''),
              (this._el = null))
        }
        setMode(t) {
          ;(this._mode = t ? 1 : 0), this._updateTooltip()
        }
        _render() {
          ;(this._el = document.createElement('div')),
            (this._el.className = m.toggler + ' apply-common-tooltip'),
            (this._arrowIconEL = document.createElement('div')),
            this._arrowIconEL.classList.add(m.iconArrow),
            (this._arrowIconEL.innerHTML = h.a ? x : k),
            this._el.appendChild(this._arrowIconEL),
            (this._objectTreeEl = document.createElement('div')),
            this._objectTreeEl.classList.add(m.objectTree),
            (this._objectTreeEl.innerHTML = h.a ? H : L),
            this._el.appendChild(this._objectTreeEl),
            (this._counterEl = document.createElement('div')),
            this._counterEl.classList.add(m.counter),
            this._counterEl.appendChild(document.createTextNode(String(this._sourceCount.value()))),
            this._el.appendChild(this._counterEl),
            this._parentEl.appendChild(this._el)
        }
        _updateThemedColor(t) {
          if (null !== this._el)
            if (t.length > 0) {
              const [e, i, s] = Object(r.parseRgb)(t)
              this._el.style.backgroundColor = Object(r.rgbaToString)([e, i, s, Object(r.normalizeAlphaComponent)(0.8)])
            } else this._el.style.removeProperty('background-color')
        }
        _updateSourceCount(t) {
          S(Object(s.ensureNotNull)(this._counterEl), String(t))
          {
            const e = Object(s.ensureNotNull)(this._el),
              i = t < 1
            e.classList.toggle(w.blockHidden, i)
            const l = 1 === t
            e.classList.toggle(m.onlyOneSourceShown, l)
          }
        }
        _updateCounterVisibility(t) {
          if (null === this._counterEl) return
          const e = 1 === t
          this._counterEl.classList.toggle(w.blockHidden, e)
        }
        _updateState() {
          const t = !this._isStateOpen.value()
          this._parentEl.classList.toggle(m.closed, t),
            this._updateTooltip(),
            Ri((t ? 'Hide' : 'Show') + ' not main sources')
        }
        _tooltip() {
          return 1 === this._mode ? A : this._isStateOpen.value() ? T : W
        }
        _updateTooltip() {
          null !== this._el && this._el.setAttribute('title', this._tooltip())
        }
        _updateObjectTreeVisibility(t) {
          Object(s.ensureNotNull)(this._el).classList.toggle(m.objectsTreeCanBeShown, t)
        }
      }
      var O = i('+6II'),
        P = i('R5JZ')
      function z(t, e) {
        const i = new o.a(e(t.value()))
        t.subscribe((t) => {
          i.setValue(e(t))
        })
        return i.readonly().spawn(() => t.unsubscribe())
      }
      const D = h.a ? 44 : 28,
        j = d.enabled('object_tree_legend_mode')
      class N {
        constructor(t, e) {
          ;(this._renderToggler = null),
            (this._mainDataSourceRenderer = null),
            (this._dataSourceRenderers = []),
            (this._wrapText = null),
            (this._parentEl = document.createElement('div')),
            (this._mainDataSourceEl = null),
            (this._dataSourcesEl = null),
            (this._dataSourcesAdditionalWrapperEl = null),
            (this._collapsedDataSourcesWrapperEl = null),
            (this._collapsedDataSourcesEl = null),
            (this._outsideEventForCollapsedTooltip = null),
            (this._options = t),
            (this._togglerOptions = e),
            (this._isStudiesLegendHidden = t.isStudiesLegendHidden.spawn()),
            this._isStudiesLegendHidden.subscribe(this._updateLegendVisibility.bind(this)),
            (this._isAllLegendHidden = t.isAllLegendHidden.spawn()),
            this._isAllLegendHidden.subscribe(this._updateLegendVisibility.bind(this)),
            this._updateLegendVisibility(),
            (this._themedColor = t.themedColor.spawn()),
            this._themedColor.subscribe(this._setCustomBg.bind(this)),
            (this._showBackground = t.showBackground.spawn()),
            this._showBackground.subscribe(this._setCustomBg.bind(this)),
            (this._backgroundTransparency = t.backgroundTransparency.spawn()),
            this._backgroundTransparency.subscribe(this._setCustomBg.bind(this)),
            (this._collapsedDataSourcesCountSpawn = t.collapsedDataSourcesCount.spawn()),
            this._collapsedDataSourcesCountSpawn.subscribe(this._updateCollapsedSourcesCount.bind(this)),
            (this._showCollapsedDataSourcesTooltipHandler = this._showCollapsedDataSourcesTooltip.bind(this)),
            h.a ||
              ((this._wrapText = t.wrapText.spawn()),
              this._wrapText.subscribe(this._updateWrapText.bind(this)),
              this._updateWrapText(this._wrapText.value())),
            this._parentEl.classList.add(m.legend),
            this._parentEl.classList.toggle(m.noActions, !this._options.withActions),
            this._parentEl.classList.toggle(m.touchMode, h.a),
            this._parentEl.classList.toggle(m.newCollapser, !0),
            (this._parentEl.dataset.name = 'legend'),
            this._parentEl.style.setProperty('--legend-source-item-button-width', D + 'px'),
            this._parentEl.addEventListener('contextmenu', (e) => {
              e.preventDefault(), t.showLegendWidgetContextMenu(e)
            })
        }
        destroy() {
          if (
            (this._isStudiesLegendHidden.destroy(),
            this._isAllLegendHidden.destroy(),
            this._themedColor.destroy(),
            this._showBackground.destroy(),
            this._backgroundTransparency.destroy(),
            this._collapsedDataSourcesCountSpawn.destroy(),
            h.a &&
              null !== this._collapsedDataSourcesWrapperEl &&
              this._collapsedDataSourcesWrapperEl.removeEventListener(
                'touchend',
                this._showCollapsedDataSourcesTooltipHandler
              ),
            this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(),
            null !== this._wrapText && this._wrapText.destroy(),
            null !== this._dataSourcesAdditionalWrapperEl &&
              ((this._dataSourcesAdditionalWrapperEl.innerHTML = ''), (this._dataSourcesAdditionalWrapperEl = null)),
            null !== this._dataSourcesEl && ((this._dataSourcesEl.innerHTML = ''), (this._dataSourcesEl = null)),
            null !== this._renderToggler && (this._renderToggler.destroy(), (this._renderToggler = null)),
            null !== this._mainDataSourceRenderer &&
              (this._mainDataSourceRenderer.destroy(), (this._mainDataSourceRenderer = null)),
            0 !== this._dataSourceRenderers.length)
          ) {
            for (const t of this._dataSourceRenderers) t.destroy()
            this._dataSourceRenderers = []
          }
          ;(this._parentEl.innerHTML = ''), delete this._parentEl
        }
        addMainDataSource(t, e) {
          this._renderMainDataSourceEl(),
            (this._mainDataSourceRenderer = new C(t, Object(s.ensureNotNull)(this._mainDataSourceEl), {
              withActions: this._options.withActions,
              customTextColor: this._options.customTextColor,
              statusWidgetEl: e.getElement(),
              hideInvisibleHover: z(e.visibleWidgetsCount, (t) => Boolean(t)),
              hideValues: e.errorWidgetIsShown,
            })),
            this._updateLegendVisibility(),
            t.onDestroy().subscribe(
              this,
              () => {
                null !== this._mainDataSourceRenderer &&
                  (this._mainDataSourceRenderer.destroy(), (this._mainDataSourceRenderer = null))
              },
              !0
            )
        }
        addDataSources(t, e) {
          this._renderDataSourcesEl()
          const i = Object(s.ensureNotNull)(this._dataSourcesAdditionalWrapperEl)
          for (let s = 0; s < t.length; s++) {
            const l = t[s],
              o = new V(l, i, {
                withActions: this._options.withActions,
                customTextColor: this._options.customTextColor,
                statusWidgetEl: e[s].getElement(),
                hideInvisibleHover: z(e[s].visibleWidgetsCount, (t) => Boolean(t)),
                hideValues: e[s].errorWidgetIsShown,
              })
            this._dataSourceRenderers.push(o),
              this._updateLegendVisibility(),
              l.onDestroy().subscribe(
                this,
                () => {
                  const t = this._dataSourceRenderers.indexOf(o)
                  ;-1 !== t && (this._dataSourceRenderers[t].destroy(), this._dataSourceRenderers.splice(t, 1))
                },
                !0
              )
          }
        }
        addCustomWidget(t, e) {
          if (0 === e.block) {
            this._renderMainDataSourceEl()
            const i = Object(s.ensureNotNull)(this._mainDataSourceEl)
            1 === e.position && t.renderTo(i, i.firstChild), 0 === e.position && t.renderTo(i)
          }
          if (1 === e.block) {
            this._renderDataSourcesEl()
            const i = Object(s.ensureNotNull)(this._dataSourcesAdditionalWrapperEl)
            1 === e.position && t.renderTo(i, i.firstChild), 0 === e.position && t.renderTo(i)
          }
        }
        firstTitle() {
          return this._parentEl.firstElementChild
        }
        getElement() {
          return this._parentEl
        }
        updateMode(t) {
          const e = j && t < 112 ? 1 : t < 205 ? 2 : t < 222 ? 3 : 4
          null !== this._mainDataSourceRenderer && this._mainDataSourceRenderer.updateMode(e)
          for (const s of this._dataSourceRenderers) s.updateMode(e)
          this._parentEl.classList.toggle(m.medium, 3 === e),
            this._parentEl.classList.toggle(m.minimized, 2 === e),
            this._parentEl.classList.toggle(m.micro, 1 === e),
            null !== this._renderToggler && this._renderToggler.setMode(1 === e)
          const i = h.a || t < 542
          this._parentEl.classList.toggle(m.directionColumn, i)
        }
        getMainSourceHeight() {
          return null === this._mainDataSourceRenderer ? 0 : this._mainDataSourceRenderer.getHeight()
        }
        getDataSourceHeight() {
          return 0 === this._dataSourceRenderers.length ? 0 : this._dataSourceRenderers[0].getHeight()
        }
        _renderMainDataSourceEl() {
          null === this._mainDataSourceEl &&
            ((this._mainDataSourceEl = document.createElement('div')),
            this._parentEl.insertBefore(this._mainDataSourceEl, this._dataSourcesEl))
        }
        _renderDataSourcesEl() {
          null === this._dataSourcesEl &&
            ((this._dataSourcesEl = document.createElement('div')),
            this._dataSourcesEl.classList.add(m.sourcesWrapper),
            this._renderToggle(this._dataSourcesEl),
            (this._dataSourcesAdditionalWrapperEl = document.createElement('div')),
            this._dataSourcesAdditionalWrapperEl.classList.add(m.sources),
            this._dataSourcesEl.appendChild(this._dataSourcesAdditionalWrapperEl),
            this._renderCollapsedCounter(this._dataSourcesAdditionalWrapperEl),
            this._parentEl.appendChild(this._dataSourcesEl))
        }
        _renderToggle(t) {
          this._options.showToggleButton &&
            (this._renderToggler = new B(t, this._options.themedColor, this._togglerOptions))
        }
        _renderCollapsedCounter(t) {
          ;(this._collapsedDataSourcesWrapperEl = document.createElement('div')),
            (this._collapsedDataSourcesWrapperEl.className = `${m.item} ${m.last}`),
            (this._collapsedDataSourcesEl = document.createElement('span')),
            (this._collapsedDataSourcesEl.className = m.text + ' apply-common-tooltip'),
            this._collapsedDataSourcesWrapperEl.append(this._collapsedDataSourcesEl),
            t.append(this._collapsedDataSourcesWrapperEl),
            h.a &&
              this._collapsedDataSourcesWrapperEl.addEventListener(
                'touchend',
                this._showCollapsedDataSourcesTooltipHandler
              ),
            this._updateCollapsedSourcesCount(this._collapsedDataSourcesCountSpawn.value())
        }
        _showCollapsedDataSourcesTooltip() {
          Object(O.showOnElement)(this._collapsedDataSourcesEl, {
            text: this._options.collapsedDataSourcesTitle.value(),
          }),
            this._addOutsideEventForHideTooltip()
        }
        _addOutsideEventForHideTooltip() {
          null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(),
            (this._outsideEventForCollapsedTooltip = Object(P.a)(
              new CustomEvent('timestamp').timeStamp,
              this._collapsedDataSourcesWrapperEl,
              () => {
                null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(),
                  Object(O.hide)()
              },
              window.document,
              { touchEnd: !0 }
            ))
        }
        _updateCollapsedSourcesCount(t) {
          if (null === this._collapsedDataSourcesWrapperEl || null === this._collapsedDataSourcesEl) return
          const e = 0 === t
          this._collapsedDataSourcesWrapperEl.classList.toggle(w.blockHidden, e),
            e ||
              (S(this._collapsedDataSourcesEl, '+' + t),
              this._collapsedDataSourcesEl.setAttribute('title', this._options.collapsedDataSourcesTitle.value()))
        }
        _updateLegendVisibility() {
          this._parentEl.classList.toggle(w.blockHidden, this._isAllLegendHidden.value()),
            null !== this._dataSourcesEl &&
              this._dataSourcesEl.classList.toggle(w.blockHidden, this._isStudiesLegendHidden.value())
        }
        _setCustomBg() {
          const t = this._showBackground.value(),
            e = this._themedColor.value(),
            i = this._backgroundTransparency.value()
          let s = ''
          if (t) {
            const [t, l, o] = Object(r.parseRgb)(e)
            s = Object(r.rgbaToString)([t, l, o, Object(r.normalizeAlphaComponent)(1 - i / 100)])
          }
          this._parentEl.style.color = s
        }
        _updateWrapText(t) {
          this._parentEl.classList.toggle(m.noWrap, !t)
        }
      }
      var I = i('Tmoa'),
        R = i('aIyQ'),
        K = i.n(R),
        F = i('Ialn'),
        G = i('QloM'),
        Z = i('1AAW'),
        U = i('CLNU')
      function Y(t) {
        return void 0 !== t ? I.resetTransparency(t) : t
      }
      const X = window.t('Show'),
        q = window.t('Hide')
      class $ {
        constructor(t, e, i, s, l) {
          ;(this._values = new o.a([])),
            (this._actions = []),
            (this._onDestroy = new K.a()),
            (this._loading = new o.a(!1)),
            (this._moreActionCM = null),
            (this._model = t),
            (this._source = e),
            (this._options = i),
            (this._callbacks = s),
            (this._contextMenuOptions = l),
            (this._disabled = new o.a(this._getDisabledState())),
            (this._selected = new o.a(!1)),
            (this._isTitleHidden = new o.a(this._getTitleHiddenValue())),
            (this._isValuesHidden = new o.a(this._getValuesHiddenValue())),
            (this._isRowHidden = new o.a(this._getRowHiddenValue())),
            Object(Z.a)(() => ({}), this._isTitleHidden, this._isValuesHidden, this._disabled).subscribe(
              this._updateRowVisibilities.bind(this)
            ),
            this._values.subscribe(() => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue())
            })
        }
        destroy() {}
        onDestroy() {
          return this._onDestroy
        }
        titles() {
          return this._titles.map((t) => t.readonly())
        }
        values() {
          return this._values.readonly()
        }
        actions() {
          return this._actions
        }
        disabled() {
          return this._disabled.readonly()
        }
        selected() {
          return this._selected.readonly()
        }
        loading() {
          return this._loading.readonly()
        }
        isTitleHidden() {
          return this._isTitleHidden.readonly()
        }
        isValuesHidden() {
          return this._isValuesHidden.readonly()
        }
        isRowHidden() {
          return this._isRowHidden.readonly()
        }
        update() {
          this._updateTitle(), this._updateValues(), this._updateStates()
        }
        updateSource(t) {
          this._source !== t &&
            ((this._source = t),
            this.update(),
            this._isTitleHidden.setValue(this._getTitleHiddenValue()),
            this._isValuesHidden.setValue(this._getValuesHiddenValue()))
        }
        onToggleDisabled() {
          const t = this._source.properties().childs().visible,
            e = !t.value()
          this._model.setProperty(t, e, `${e ? 'Show' : 'Hide'} ${this._source.title()}`),
            Ri((e ? 'Show' : 'Hide') + ' source')
        }
        onShowSettings() {
          this._source.userEditEnabled() &&
            (this.setSourceSelected(),
            this._callbacks.showChartPropertiesForSource(this._source, G.TabNames.style),
            Ri('Settings for source'))
        }
        onShowMoreActions(t) {
          return this._options.readOnlyMode
            ? Promise.resolve(null)
            : (this._callbacks.updateActions(),
              Ri('Show source context menu'),
              this._callbacks.showContextMenuForSources(
                [this._source],
                this._calcNewPosition(t),
                this._contextMenuOptions
              ))
        }
        setSourceSelected() {
          this._model.selectionMacro((t) => {
            t.clearSelection(), t.addSourceToSelection(this._source)
          })
        }
        _moreActionHandler(t) {
          t.preventDefault(),
            null !== this._moreActionCM && this._moreActionCM.isShown()
              ? (this._moreActionCM = null)
              : (this.setSourceSelected(),
                this.onShowMoreActions(t).then((t) => {
                  this._moreActionCM = t
                }))
        }
        _updateTitle() {
          const t = this._source.statusView()
          if (null === t) return
          const e = t.getSplitTitle()
          for (let i = 0; i < this._titles.length; i++) {
            const t = e[i],
              s = Object(U.clean)(Array.isArray(t) ? t.join(' ') : t || '', !0)
            this._titles[i].setValue(s)
          }
        }
        _updateStates() {
          this._disabled.setValue(this._getDisabledState()),
            this._selected.setValue(this._model.selection().isSelected(this._source)),
            this._loading.setValue(Boolean(this._source.isLoading()))
        }
        _hasValues() {
          return this._values.value().length > 0
        }
        _getEyeTitle() {
          return this._disabled.value() ? X : q
        }
        _getDisabledState() {
          return !this._source.properties().visible.value()
        }
        _updateRowVisibilities() {
          this._isRowHidden.setValue(this._getRowHiddenValue())
        }
        _getRowHiddenValue() {
          return (
            (this._options.readOnlyMode && this._disabled.value()) ||
            (this._isTitleHidden.value() && (this._isValuesHidden.value() || this._disabled.value()))
          )
        }
        _calcNewPosition(t) {
          let e = {}
          if (t.hasOwnProperty('touches') && t.touches.length > 0)
            e = { clientX: t.touches[0].clientX, clientY: t.touches[0].clientY }
          else if (null !== t.target) {
            const i = t.target.getBoundingClientRect()
            e = { clientX: Object(F.isRtl)() ? i.right : i.left, clientY: i.top + i.height + 3 }
          } else {
            const i = t
            e = { clientX: i.clientX, clientY: i.clientY }
          }
          return e
        }
      }
      var J = i('z4c1'),
        Q = i('61S9'),
        tt = i('vWJB'),
        et = i('wZiV')
      const it = window.t('More'),
        st = window.t('Flag Symbol'),
        lt = window.t('Unflag Symbol'),
        ot = d.enabled('show_hide_button_in_legend')
      class nt extends $ {
        constructor(t, e, i, s, l) {
          super(t, e, i, s, l),
            (this._titles = [new o.a(''), new o.a(''), new o.a(''), new o.a('')]),
            (this._symbolMarker = null),
            (this._symbolMarkerIcon = null),
            (this._flagged = new o.a(null)),
            (this._symbolAction = null),
            (this._symbol = null),
            (this._isOneButtonCanBeStick = !1),
            this._createActions(),
            this._updateSymbolMarker(),
            this._model
              .model()
              .properties()
              .paneProperties.legendProperties.showSeriesTitle.subscribe(this, () => {
                this._isTitleHidden.setValue(this._getTitleHiddenValue())
              })
          const n = [
            this._model.model().properties().paneProperties.legendProperties.showSeriesOHLC,
            this._model.model().properties().paneProperties.legendProperties.showBarChange,
          ]
          for (const o of n)
            o.subscribe(this, () => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue())
            })
          this.update(),
            this._source.onStatusChanged().subscribe(this, () => {
              this._loading.setValue(this._source.isLoading())
            })
        }
        destroy() {
          super.destroy(),
            this._model.model().properties().paneProperties.legendProperties.showSeriesTitle.unsubscribeAll(this),
            this._model.model().properties().paneProperties.legendProperties.showSeriesOHLC.unsubscribeAll(this),
            this._model.model().properties().paneProperties.legendProperties.showBarChange.unsubscribeAll(this),
            this._source.onStatusChanged().unsubscribeAll(this),
            this._onDestroy.fire()
        }
        flagged() {
          return this._flagged.readonly()
        }
        onShowSettings() {
          this._source.userEditEnabled() && this._callbacks.showGeneralChartProperties(G.TabNames.symbol)
        }
        isOneButtonCanBeStick() {
          return this._isOneButtonCanBeStick
        }
        _updateValues() {
          const t = this._source.legendView(),
            e = this._values.value(),
            i = t.marketTitle(),
            s = t.marketTitle().length > 0
          if (0 === e.length) {
            const e = { value: new o.a(''), color: new o.a(''), visible: new o.a(s), title: new o.a(i) },
              l = t.items().map((t) => ({
                value: new o.a(t.value()),
                color: new o.a(Y(t.color())),
                visible: new o.a(t.visible()),
                title: new o.a(t.title()),
              }))
            this._values.setValue([e].concat(l))
          } else {
            e[0].title.setValue(i), e[0].visible.setValue(s)
            const l = t.items()
            for (let t = 0; t < l.length; t++) {
              const i = l[t]
              e[t + 1].value.setValue(i.value()),
                e[t + 1].color.setValue(Y(i.color())),
                e[t + 1].visible.setValue(i.visible()),
                e[t + 1].title.setValue(i.title())
            }
          }
        }
        _updateStates() {
          super._updateStates(), this._updateSymbolMarker()
        }
        _getTitleHiddenValue() {
          return !this._model.model().properties().paneProperties.legendProperties.showSeriesTitle.value()
        }
        _getValuesHiddenValue() {
          return (
            !this._hasValues() ||
            (!this._model.model().properties().paneProperties.legendProperties.showSeriesOHLC.value() &&
              !this._model.model().properties().paneProperties.legendProperties.showBarChange.value())
          )
        }
        _createActions() {
          if (ot) {
            const t = {
              iconMap: new Map([
                ['large', Q],
                ['small', J],
              ]),
              action: Object(p.c)(this.onToggleDisabled.bind(this)),
              visible: new o.a(!0),
              className: m.eye,
              title: new o.a(this._getEyeTitle()),
              dataset: { name: 'legend-show-hide-action' },
            }
            this._actions.push(t),
              this._disabled.subscribe(() => {
                t.title.setValue(this._getEyeTitle())
              })
          }
          this._actions.push({
            iconMap: new Map([
              ['large', et],
              ['small', tt],
            ]),
            action: this._moreActionHandler.bind(this),
            visible: new o.a(!0),
            title: new o.a(it),
            dataset: { name: 'legend-more-action' },
          })
        }
        _getMarkerTitle() {
          return null !== this._symbolMarker ? (this._symbolMarker.isMarked() ? lt : st) : ''
        }
        _symbolActionHandler() {
          null !== this._symbolMarker && (this._updateSymbolMarker(), Ri('Change flag state'))
        }
        _updateSymbolMarker() {
          this._isOneButtonCanBeStick = !0
        }
      }
      var at = i('3ClC'),
        rt = i('fZEr')
      var dt = i('z61+'),
        ht = i('txPx'),
        ut = i('RgOa'),
        ct = i('2CEX'),
        _t = i('D8x7'),
        pt = i('bNWL'),
        bt = i('cKqi'),
        gt = i('YzC7')
      Object(ht.getLogger)('Chart.LegendWidget')
      const mt = window.t('Settings'),
        wt = window.t('Source code'),
        vt = window.t('Remove'),
        St = window.t('More'),
        yt =
          (window.t('Error'),
          window.t('Could not get Pine source code.'),
          d.enabled('study_buttons_in_legend'),
          d.enabled('show_hide_button_in_legend')),
        ft = d.enabled('property_pages'),
        Mt = d.enabled('format_button_in_legend'),
        Ct = d.enabled('delete_button_in_legend')
      class Et extends $ {
        constructor(t, e, i, s, l) {
          super(t, e, i, s, l),
            (this._titles = [new o.a(''), new o.a('')]),
            (this._error = new o.a(!1)),
            (this._isPineScriptDataSource = new o.a(!1)),
            (this._pineAction = null),
            (this._globalVisibility = new o.a(!0)),
            this._createActions()
          const n = [
            this._model.model().properties().paneProperties.legendProperties.showSeriesTitle,
            this._model.model().properties().paneProperties.legendProperties.showStudyTitles,
          ]
          for (const o of n)
            o.subscribe(this, () => {
              this._isTitleHidden.setValue(this._getTitleHiddenValue())
            })
          const a = [
            this._model.model().properties().paneProperties.legendProperties.showSeriesOHLC,
            this._model.model().properties().paneProperties.legendProperties.showBarChange,
            this._model.model().properties().paneProperties.legendProperties.showStudyValues,
          ]
          for (const o of a)
            o.subscribe(this, () => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue())
            })
          this.update()
        }
        destroy() {
          super.destroy()
          const t = this._model.model().properties().paneProperties.legendProperties
          t.showSeriesTitle.unsubscribeAll(this),
            t.showStudyTitles.unsubscribeAll(this),
            t.showSeriesOHLC.unsubscribeAll(this),
            t.showBarChange.unsubscribeAll(this),
            t.showStudyValues.unsubscribeAll(this),
            this._onDestroy.fire()
        }
        error() {
          return this._error.readonly()
        }
        isPineScriptDataSource() {
          return this._isPineScriptDataSource.readonly()
        }
        updateSource(t) {
          this._source !== t && (this._values.setValue([]), super.updateSource(t), this._updateAbleShowSourceCode())
        }
        onRemoveSource() {
          var t
          this._source.isUserDeletable() &&
            (this._source.hasChildren()
              ? ((t = this._model.removeSource.bind(this._model, this._source, !1)),
                Object(rt.a)({
                  title: window.t('Confirm Remove Study Tree'),
                  text: window.t("Do you really want to delete study and all of it's children?"),
                  onConfirm: ({ dialogClose: e }) => {
                    t(), e()
                  },
                }))
              : this._model.removeSource(this._source, !1),
            Ri('Remove sources'))
        }
        onShowSourceCode() {
          0
        }
        setGlobalVisibility(t) {
          this._globalVisibility.setValue(t)
        }
        globalVisibility() {
          return this._globalVisibility.readonly()
        }
        getFullTitle() {
          return this._titles.map((t) => t.value()).join(' ')
        }
        _updateValues() {
          const t = this._source.legendView()
          if (null === t) return
          if (0 === t.items().length) return
          const e = this._values.value()
          if (0 === e.length) {
            const e = t
              .items()
              .map((t) => ({ value: new o.a(t.value()), color: new o.a(Y(t.color())), visible: new o.a(t.visible()) }))
            this._values.setValue(e)
          } else {
            const i = t.items()
            for (let t = 0; t < i.length; t++) {
              const s = e[t],
                l = i[t]
              s.value.setValue(l.value()), s.color.setValue(Y(l.color())), s.visible.setValue(l.visible())
            }
          }
        }
        _updateStates() {
          super._updateStates(), void 0 !== this._error && this._error.setValue(Boolean(this._source.isFailed()))
        }
        _getTitleHiddenValue() {
          return this._isSymbolLikeStudy()
            ? !this._model.model().properties().paneProperties.legendProperties.showSeriesTitle.value()
            : !this._model.model().properties().paneProperties.legendProperties.showStudyTitles.value()
        }
        _getValuesHiddenValue() {
          return (
            !this._hasValues() ||
            (this._isSymbolLikeStudy()
              ? !this._model.model().properties().paneProperties.legendProperties.showSeriesOHLC.value() &&
                !this._model.model().properties().paneProperties.legendProperties.showBarChange.value()
              : !this._model.model().properties().paneProperties.legendProperties.showStudyValues.value())
          )
        }
        _isSymbolLikeStudy() {
          return this._source instanceof bt.study_Overlay || this._source instanceof gt.a
        }
        _updateAbleShowSourceCode() {
          0
        }
        _updateVisibilityPineAction(t) {
          null !== this._pineAction && (this._pineAction.visible.setValue(t), this._isPineScriptDataSource.setValue(t))
        }
        _createActions() {
          if (!this._options.readOnlyMode) {
            if (
              ((this._pineAction = {
                iconMap: new Map([
                  ['large', ct],
                  ['small', ct],
                ]),
                action: Object(p.c)(this.onShowSourceCode.bind(this)),
                visible: new o.a(!1),
                title: new o.a(wt),
                dataset: { name: 'legend-pine-action' },
              }),
              yt)
            ) {
              const t = {
                iconMap: new Map([
                  ['large', Q],
                  ['small', J],
                ]),
                action: Object(p.c)(this.onToggleDisabled.bind(this)),
                visible: new o.a(!0),
                className: m.eye,
                title: new o.a(this._getEyeTitle()),
                dataset: { name: 'legend-show-hide-action' },
              }
              this._actions.push(t),
                this._disabled.subscribe(() => {
                  t.title.setValue(this._getEyeTitle())
                })
            }
            ft &&
              Mt &&
              (!Object(at.isStudy)(this._source) || new dt.a(this._source.metaInfo()).hasUserEditableOptions()) &&
              this._actions.push({
                iconMap: new Map([
                  ['large', ut],
                  ['small', ut],
                ]),
                action: Object(p.c)(this.onShowSettings.bind(this)),
                visible: new o.a(!0),
                title: new o.a(mt),
                dataset: { name: 'legend-settings-action' },
              }),
              Ct &&
                this._actions.push({
                  iconMap: new Map([
                    ['large', pt],
                    ['small', _t],
                  ]),
                  action: Object(p.c)(this.onRemoveSource.bind(this)),
                  visible: new o.a(!0),
                  title: new o.a(vt),
                  dataset: { name: 'legend-delete-action' },
                }),
              this._actions.push({
                iconMap: new Map([
                  ['large', et],
                  ['small', tt],
                ]),
                action: this._moreActionHandler.bind(this),
                visible: new o.a(!0),
                title: new o.a(St),
                dataset: { name: 'legend-more-action' },
              })
          }
        }
      }
      var Vt = i('7KDR'),
        kt = i('5VQP'),
        xt = i('x2L+'),
        Lt = i('2uTr'),
        Ht = i('MXV9')
      function Tt(t, e, i) {
        t.setProperty(e, !e.value(), i)
      }
      function Wt(t, e, i, s, l, o) {
        return (function (t, e, i, s, l) {
          const o = [],
            n = s.get(0)
          if (void 0 !== n) {
            const t = n.get(1)
            void 0 !== t && t.length > 0 && (o.push(...t), o.push(new Vt.Separator()))
          }
          const a = t.model().properties().paneProperties.legendProperties
          o.push(
            new Vt.Action({
              checkable: !0,
              checked: a.showSeriesTitle.value(),
              label: At,
              statName: 'Show Symbol',
              onExecute: () => Tt(t, a.showSeriesTitle, 'Change Symbol Description Visibility'),
            })
          ),
            e.showOpenMarketStatus &&
              o.push(
                new Vt.Action({
                  checkable: !0,
                  checked: xt.b.value(),
                  label: Bt,
                  statName: 'Show Open market status',
                  onExecute: () => Tt(t, xt.b, 'Change open market status visibility'),
                })
              )
          if (
            (o.push(
              new Vt.Action({
                checkable: !0,
                checked: a.showSeriesOHLC.value(),
                label: Ot,
                statName: 'Show OHLC Values',
                onExecute: () => Tt(t, a.showSeriesOHLC, 'Change OHLC Values Visibility'),
              })
            ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: a.showBarChange.value(),
                label: Pt,
                statName: 'Show Bar Change Values',
                onExecute: () => Tt(t, a.showBarChange, 'Change Bar Change Visibility'),
              })
            ),
            o.push(new Vt.Separator()),
            void 0 !== n)
          ) {
            const t = n.get(0)
            void 0 !== t && t.length > 0 && (o.push(...t), o.push(new Vt.Separator()))
          }
          const r = s.get(1)
          if (void 0 !== r) {
            const t = r.get(1)
            void 0 !== t && t.length > 0 && (o.push(...t), o.push(new Vt.Separator()))
          }
          if (
            (o.push(
              new Vt.Action({
                checkable: !0,
                checked: a.showStudyTitles.value(),
                label: zt,
                statName: 'Show Indicator Titles',
                onExecute: () => Tt(t, a.showStudyTitles, 'Change Indicator Titles Visibility'),
              })
            ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: a.showStudyArguments.value(),
                label: Dt,
                statName: 'Show Indicator Arguments',
                onExecute: () => Tt(t, a.showStudyArguments, 'Change Indicator Arguments Visibility'),
              })
            ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: a.showStudyValues.value(),
                label: jt,
                statName: 'Show Indicator Values',
                onExecute: () => Tt(t, a.showStudyValues, 'Change Indicator Values Visibility'),
              })
            ),
            void 0 !== r)
          ) {
            const t = r.get(0)
            void 0 !== t && t.length > 0 && (o.push(...t), o.push(new Vt.Separator()))
          }
          0
          e.settings &&
            (o.push(new Vt.Separator()),
            o.push(
              new Vt.Action({
                label: Object(Lt.appendEllipsis)(window.t('Settings')),
                icon: Ht,
                statName: 'Settings...',
                onExecute: () => i(G.TabNames.legend),
              })
            ))
          return kt.ContextMenuManager.createMenu(o, {}, l)
        })(t, e, i, s, o).then((t) => (t.show(l), t))
      }
      const At = window.t('Show Symbol'),
        Bt = window.t('Show Open market status'),
        Ot = window.t('Show OHLC Values'),
        Pt = window.t('Show Bar Change Values'),
        zt = window.t('Show Indicator Titles'),
        Dt = window.t('Show Indicator Arguments'),
        jt = window.t('Show Indicator Values')
      window.t('Wrap text'), v.CheckMobile.any()
      var Nt = i('+DwS'),
        It = i('HGP3'),
        Rt = i('GOhO'),
        Kt = i('25b6'),
        Ft = i('rh3U')
      class Gt {
        constructor(t) {
          ;(this.isBlinkingMode = new o.a(!1)),
            (this._status = new o.a(null)),
            (this._fullTooltip = new o.a(null)),
            (this._iconClassNames = new o.a(null)),
            (this._visible = new o.a(!1)),
            (this._tooltip = new o.a(null)),
            (this._icon = new o.a(null)),
            (this._className = new o.a(null)),
            (this._infoMaps = t),
            (this._size = t.size || 'small'),
            this._status.subscribe(this._updateByStatus.bind(this), { callWithLast: !0 }),
            this._className.subscribe(this._updateIconClassName.bind(this))
        }
        turnOffBlinkingMode() {}
        status() {
          return this._status
        }
        tooltip() {
          return this._tooltip
        }
        icon() {
          return this._icon
        }
        className() {
          return this._className
        }
        visible() {
          return this._visible
        }
        size() {
          return this._size
        }
        fullInfo() {
          return this._fullTooltip
        }
        _getTooltip(t) {
          var e, i
          return null !== (i = null === (e = this._infoMaps.tooltipMap) || void 0 === e ? void 0 : e.get(t)) &&
            void 0 !== i
            ? i
            : null
        }
        _getIcon(t) {
          let e
          const i = this._infoMaps.iconMap.get(t)
          return void 0 !== i && (e = i.get(this._size)), e || null
        }
        _getClassName(t) {
          return this._infoMaps.classNameMap.get(t) || null
        }
        _getTitle(t) {
          var e, i
          return null !== (i = null === (e = this._infoMaps.titleMap) || void 0 === e ? void 0 : e.get(t)) &&
            void 0 !== i
            ? i
            : null
        }
        _getTitleColor(t) {
          var e, i
          return null !== (i = null === (e = this._infoMaps.titleColorMap) || void 0 === e ? void 0 : e.get(t)) &&
            void 0 !== i
            ? i
            : null
        }
        async _getHtml(t) {
          var e, i, s
          return null !==
            (s =
              null === (i = null === (e = this._infoMaps.htmlMap) || void 0 === e ? void 0 : e.get(t)) || void 0 === i
                ? void 0
                : i.map(Kt.b)) && void 0 !== s
            ? s
            : null
        }
        _getAction(t) {
          var e, i
          return null !== (i = null === (e = this._infoMaps.actionMap) || void 0 === e ? void 0 : e.get(t)) &&
            void 0 !== i
            ? i
            : null
        }
        async _updateFullTooltipByStatus(t) {
          const e = await this._getHtml(t)
          this._status.value() === t &&
            this._fullTooltip.setValue([
              {
                icon: this._icon.value(),
                iconClassName: this._iconClassNames.value(),
                title: this._getTitle(t),
                titleColor: this._getTitleColor(t),
                html: e,
                size: this._size,
                action: this._getAction(t),
              },
            ])
        }
        _updateByStatus(t) {
          if (null === t)
            return this._icon.setValue(null), this._tooltip.setValue(null), void this._visible.setValue(!1)
          this._icon.setValue(this._getIcon(t)),
            this._className.setValue(this._getClassName(t)),
            this._tooltip.setValue(this._getTooltip(t)),
            this._visible.setValue(!0),
            this._updateFullTooltipByStatus(t)
        }
        _updateIconClassName(t) {
          null !== t ? this._iconClassNames.setValue([Ft.statusItem, t]) : this._iconClassNames.setValue(null)
        }
      }
      var Zt = i('Vdly')
      const Ut = []
      function Yt() {
        return Zt.getJSON('tv.alreadyBlinkedStatuses', Ut)
      }
      const Xt = new o.a(Yt())
      function qt(t) {
        const e = Zt.getJSON('tv.alreadyBlinkedStatuses', Ut)
        e.includes(t) || (e.push(t), Zt.setJSON('tv.alreadyBlinkedStatuses', e), Xt.setValue(Yt()))
      }
      Zt.onSync.subscribe(null, () => Xt.setValue(Yt()))
      const $t = Xt
      var Jt = i('Cf1E'),
        Qt = i('VrrN'),
        te = i('VrXG'),
        ee = i('LIcf'),
        ie = i('Uua9'),
        se = i('9Crk'),
        le = i('Tq3g')
      const oe = Object(ht.getLogger)('Chart.LegendWidget'),
        ne = new Map([
          [
            'DelayToRealtime',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
          [
            'DelayNoRealtime',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
          [
            'TFEXDelayForGuest',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
          [
            'MOEXDelayForGuest',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
          [
            'CHIXAuDelayForGuest',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
          [
            'NGMDelayForGuest',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
          [
            'EOD',
            new Map([
              ['small', ee],
              ['large', ie],
            ]),
          ],
          [
            'TickByTick',
            new Map([
              ['small', se],
              ['large', le],
            ]),
          ],
          [
            'BATSToRealtime',
            new Map([
              ['small', se],
              ['large', le],
            ]),
          ],
          [
            'DelayWithoutMarketAgreement',
            new Map([
              ['small', Qt],
              ['large', te],
            ]),
          ],
        ]),
        ae = new Map([
          ['DelayToRealtime', Ft.delay],
          ['DelayNoRealtime', Ft.delay],
          ['TFEXDelayForGuest', Ft.delay],
          ['MOEXDelayForGuest', Ft.delay],
          ['CHIXAuDelayForGuest', Ft.delay],
          ['NGMDelayForGuest', Ft.delay],
          ['EOD', Ft.eod],
          ['TickByTick', Ft.notAccurate],
          ['BATSToRealtime', Ft.notAccurate],
          ['DelayWithoutMarketAgreement', Ft.delay],
        ]),
        re = new Map([
          ['DelayToRealtime', It.a['color-delay-mode']],
          ['DelayNoRealtime', It.a['color-delay-mode']],
          ['TFEXDelayForGuest', It.a['color-delay-mode']],
          ['MOEXDelayForGuest', It.a['color-delay-mode']],
          ['CHIXAuDelayForGuest', It.a['color-delay-mode']],
          ['NGMDelayForGuest', It.a['color-delay-mode']],
          ['EOD', It.a['color-eod-mode']],
          ['TickByTick', It.a['color-notaccurate-mode']],
          ['BATSToRealtime', It.a['color-notaccurate-mode']],
          ['DelayWithoutMarketAgreement', It.a['color-delay-mode']],
        ]),
        de = window.t('Data is delayed'),
        he = window.t('End of day data'),
        ue = window.t('One update per second'),
        ce = window.t('Cboe BZX'),
        _e = window.t('{exchange} by {originalExchange}'),
        pe = Object(Kt.b)(window.t('{symbolName} data is delayed by {time} minutes.')),
        be = Object(Kt.b)(window.t('{listedExchange} real-time data is available for free to registered users.')),
        ge = Object(Kt.b)(window.t('To get real-time data for {description}, please buy the real-time data package.')),
        me = Object(Kt.b)(
          window.t('Real-time data for {description} is not supported right now. We may support it in the future.')
        ),
        we = Object(Kt.b)(window.t('Data is updated once a day.')),
        ve = Object(Kt.b)(
          window.t('Data on our Basic plan is updated once per second, even if there are more updates on the market.')
        ),
        Se = Object(Kt.b)(window.t('Data is updated once per second, even if there are more updates on the market.')),
        ye = Object(Kt.b)(window.t('Paid plans feature faster data updates.')),
        fe = Object(Kt.b)(window.t('Real-time data for {symbolName} is provided by {exchange} exchange.')),
        Me = Object(Kt.b)(
          window.t(
            'This data is real-time, but it’s slightly different to its official counterpart coming from primary exchanges.'
          )
        ),
        Ce = Object(Kt.b)(
          window.t(
            'This data is real-time, but it’s slightly different to its official counterpart coming from {exchange}.'
          )
        ),
        Ee = Object(Kt.b)(
          window.t(
            "If you'd like {listedExchange} real-time data you'll need to complete an Exchange Agreement. Don't worry, it only takes a few clicks"
          )
        )
      window.t('Create a free account'), window.t('Learn more'), Object(Kt.b)(window.t('Fill out Exchange Agreements'))
      class Ve extends Gt {
        constructor(t, e, i) {
          super({ iconMap: ne, classNameMap: ae, titleColorMap: re, size: e }),
            (this._dataUpdatedMode = new o.a(null).spawn()),
            (this._options = i),
            (this._model = t),
            (this._dataModeBlinkingStatuses = $t.spawn()),
            this._dataModeBlinkingStatuses.subscribe(this._updateBlinkingMode.bind(this)),
            (this.turnOffBlinkingMode = this._turnOffBlinking.bind(this)),
            this.setModel(t)
        }
        destroy() {
          this._dataUpdatedMode.destroy(), this._dataModeBlinkingStatuses.destroy()
        }
        setModel(t) {
          if ((this._dataUpdatedMode.destroy(), null === t))
            return (this._model = t), void (this._dataUpdatedMode = new o.a(null).spawn())
          ;(this._dataUpdatedMode = t.status().spawn()),
            this._dataUpdatedMode.subscribe(this._updateStatus.bind(this), { callWithLast: !0 })
        }
        _getTooltip() {
          const t = this._getShortTexts()
          return null === t ? null : Object.values(t).join(' · ')
        }
        async _updateFullTooltipByStatus() {
          const t = this._dataUpdatedMode.value()
          if (null === t) return void this._fullTooltip.setValue(null)
          const e = this._getShortTexts(),
            i = await this._getHtmls(),
            s = await this._getActions()
          if (t !== this._dataUpdatedMode.value()) return
          const l = []
          for (const o of t)
            l.push({
              icon: this._getIcon(o),
              iconClassName: this._iconClassNames.value(),
              title: e && e[o],
              titleColor: this._getTitleColor(o),
              html: i && i[o],
              size: this._size,
              action: s && s[o],
            })
          this._fullTooltip.setValue(l)
        }
        _updateStatus(t) {
          const e = null !== t ? t[0] : null
          super._updateByStatus(e), this._updateBlinkingMode()
        }
        async _getHtmls() {
          const t = this._dataUpdatedMode.value()
          if (null === t || null === this._model) return Promise.resolve(null)
          const e = {},
            i = this._model.symbolName()
          let s = null,
            l = null
          try {
            ;(s = await this._model.description()), (l = this._model.exchange())
          } catch (o) {
            oe.logError("Can't get exchange description, reason: " + Object(Jt.a)(o))
          }
          for (const n of t)
            if (
              ((e[n] = []),
              [
                'DelayToRealtime',
                'DelayNoRealtime',
                'TFEXDelayForGuest',
                'MOEXDelayForGuest',
                'CHIXAuDelayForGuest',
                'NGMDelayForGuest',
                'DelayWithoutMarketAgreement',
              ].includes(n) &&
                (e[n].push(pe.format({ symbolName: i, time: this._model.time().toString() })),
                this._options.subscriptionFullInfo &&
                  null !== s &&
                  'DelayToRealtime' === n &&
                  e[n].push(ge.format({ description: `<b>${s}</b>` })),
                null !== s && 'DelayNoRealtime' === n && e[n].push(me.format({ description: `<b>${s}</b>` })),
                'DelayWithoutMarketAgreement' === n &&
                  e[n].push(Ee.format({ listedExchange: this._model.listedExchange() })),
                this._options.subscriptionFullInfo &&
                  ['TFEXDelayForGuest', 'MOEXDelayForGuest', 'CHIXAuDelayForGuest', 'NGMDelayForGuest'].includes(n) &&
                  e[n].push(be.format({ listedExchange: this._model.listedExchange() }))),
              'EOD' === n && (e[n] = [we]),
              'TickByTick' === n &&
                (e[n].push(this._options.subscriptionFullInfo ? ve : Se),
                this._options.subscriptionFullInfo && e[n].push(ye)),
              null !== l && 'BATSToRealtime' === n)
            ) {
              const t = this._model.listedExchange()
              e[n].push(fe.format({ symbolName: i, exchange: l }), '' !== t ? Ce.format({ exchange: t }) : Me)
            }
          return Object.keys(e).length > 0 ? e : null
        }
        async _getActions() {
          if (null === this._dataUpdatedMode.value() || null === this._model) return null
          const t = {}
          return Object.keys(t).length > 0 ? t : null
        }
        _getShortTexts() {
          const t = this._dataUpdatedMode.value()
          if (null === t || null === this._model) return null
          const e = {}
          for (const i of t)
            if (
              ([
                'DelayToRealtime',
                'DelayNoRealtime',
                'TFEXDelayForGuest',
                'MOEXDelayForGuest',
                'DelayWithoutMarketAgreement',
                'NGMDelayForGuest',
              ].includes(i) && (e[i] = de),
              'EOD' === i && (e[i] = he),
              'TickByTick' === i && (e[i] = ue),
              'BATSToRealtime' === i)
            ) {
              const t = this._model.listedExchange()
              e[i] = '' !== t ? _e.format({ exchange: t, originalExchange: ce }) : ce
            }
          return Object.keys(e).length > 0 ? e : null
        }
        _updateBlinkingMode() {
          const t = this._dataUpdatedMode.value()
          if (null === t) return
          const e = this._dataModeBlinkingStatuses.value()
          for (const i of t) if (!e.includes(i)) return void this.isBlinkingMode.setValue(!0)
          this.isBlinkingMode.setValue(!1)
        }
        _turnOffBlinking() {
          const t = this._dataUpdatedMode.value()
          if (null !== t) for (const e of t) qt(e)
        }
      }
      var ke = i('JmzL'),
        xe = i('M3mX')
      const Le = window.t('No volume data'),
        He = window.t('Study Error'),
        Te = new Map([
          [
            !0,
            new Map([
              ['small', ke],
              ['large', xe],
            ]),
          ],
          [
            !1,
            new Map([
              ['small', ''],
              ['large', ''],
            ]),
          ],
        ]),
        We = new Map([
          [!0, Ft.dataProblemLow],
          [!1, null],
        ]),
        Ae = new Map([
          [!0, He],
          [!1, null],
        ]),
        Be = new Map([
          [!0, He],
          [!1, null],
        ]),
        Oe = new Map([
          [!0, It.a['color-data-problem']],
          [!1, null],
        ])
      new Map()
      function Pe(t) {
        return null !== t &&
          -1 !== t.toLowerCase().indexOf("the data vendor doesn't provide volume data for this symbol.")
          ? Le
          : null
      }
      class ze extends Gt {
        constructor(t, e, i) {
          super({ iconMap: Te, classNameMap: We, tooltipMap: Ae, titleMap: Be, titleColorMap: Oe, size: e }),
            (this._dataSourceErrorStatus = new o.a(null).spawn()),
            (this._lastError = null),
            (this._options = i),
            this.setSource(t)
        }
        destroy() {
          this._dataSourceErrorStatus.destroy()
        }
        setSource(t) {
          this._dataSourceErrorStatus.destroy(),
            (this._source = t),
            (this._dataSourceErrorStatus = Object(Rt.b)(
              () =>
                (function (t) {
                  return t.isFailed() && !t.isSymbolInvalid() ? t.status() : null
                })(t),
              t.onStatusChanged()
            )),
            this._dataSourceErrorStatus.subscribe(this._updateStatus.bind(this), { callWithLast: !0 })
        }
        _getTooltip(t) {
          if (t) {
            const t = Pe(this._dataSourceErrorStatus.value())
            if (null !== t) return t
          }
          return super._getTooltip(t)
        }
        _getTitle(t) {
          if (t) {
            const t = Pe(this._dataSourceErrorStatus.value())
            if (null !== t) return t
          }
          return super._getTitle(t)
        }
        async _getHtml(t) {
          return [this._source.status()]
        }
        _getAction(t) {
          return null
        }
        _updateStatus(t) {
          const e = this._status.value()
          t
            ? (this._status.setValue(!0), e && this._lastError !== t && this._updateByStatus(!0))
            : this._status.setValue(null),
            (this._lastError = t)
        }
      }
      i('YFKU')
      const De = window.t('Data problem'),
        je = new Map([
          [
            'high',
            new Map([
              ['small', ke],
              ['large', xe],
            ]),
          ],
          [
            'low',
            new Map([
              ['small', ke],
              ['large', xe],
            ]),
          ],
        ]),
        Ne = new Map([
          ['high', Ft.dataProblemHigh],
          ['low', Ft.dataProblemLow],
        ]),
        Ie = new Map([
          ['high', De],
          ['low', De],
        ]),
        Re = new Map([
          ['high', It.a['color-data-problem']],
          ['low', It.a['color-data-problem']],
        ])
      class Ke extends Gt {
        constructor(t, e) {
          super({ tooltipMap: Ie, iconMap: je, classNameMap: Ne, titleMap: Ie, titleColorMap: Re, size: e }),
            (this._dataProblem = new o.a(null).spawn()),
            (this._isDataProblemCritical = new o.a(!1)),
            this.setModel(t)
        }
        destroy() {
          this._dataProblem.destroy()
        }
        isDataProblemCritical() {
          return this._isDataProblemCritical
        }
        setModel(t) {
          this._dataProblem.destroy(),
            null !== t
              ? ((this._dataProblem = t.status().spawn()),
                this._dataProblem.subscribe(this._updateStatus.bind(this), { callWithLast: !0 }))
              : (this._dataProblem = new o.a(null).spawn())
        }
        async _getHtml(t) {
          const e = this._dataProblem.value()
          return null === e ? null : [Object(Kt.b)(e.text)]
        }
        _updateStatus(t) {
          var e
          const i = null !== (e = null == t ? void 0 : t.severity) && void 0 !== e ? e : null
          this._status.setValue(i),
            this._isDataProblemCritical.setValue(
              (function (t) {
                return 'high' === t
              })(i)
            )
        }
      }
      class Fe extends Gt {
        constructor(t, e) {
          super(e), (this._booleanStatus = new o.a(!1).spawn()), this.updateStatus(t)
        }
        destroy() {
          this._booleanStatus.destroy()
        }
        updateStatus(t) {
          this._booleanStatus.destroy(),
            (this._booleanStatus = t.spawn()),
            this._booleanStatus.subscribe(this._updateStatus.bind(this), { callWithLast: !0 })
        }
        _updateStatus(t) {
          t ? this._status.setValue(!0) : this._status.setValue(null)
        }
      }
      var Ge = i('YGQl'),
        Ze = i('Jjb7')
      const Ue = window.t('Invalid Symbol'),
        Ye = window.t("This symbol doesn't exist, please pick another one."),
        Xe = new Map([
          [
            !0,
            new Map([
              ['small', Ge],
              ['large', Ze],
            ]),
          ],
          [
            !1,
            new Map([
              ['small', ''],
              ['large', ''],
            ]),
          ],
        ]),
        qe = new Map([
          [!0, Ft.invalidSymbol],
          [!1, null],
        ]),
        $e = new Map([
          [!0, Ue],
          [!1, null],
        ]),
        Je = new Map([
          [!0, Ue],
          [!1, null],
        ]),
        Qe = new Map([
          [!0, It.a['color-invalid-symbol']],
          [!1, null],
        ]),
        ti = new Map([
          [!0, [Ye]],
          [!1, null],
        ]),
        ei = new Map([
          [!0, null],
          [!1, null],
        ])
      class ii {
        constructor(t) {
          ;(this._el = document.createElement('div')),
            (this._prevCustomClass = null),
            (this._icon = t.icon.spawn()),
            this._icon.subscribe(this._updateIcon.bind(this), { callWithLast: !0 }),
            (this._className = t.className.spawn()),
            this._className.subscribe(this._updateClassName.bind(this), { callWithLast: !0 }),
            (this._visible = t.visible.spawn()),
            this._visible.subscribe(this._updateVisibility.bind(this), { callWithLast: !0 }),
            (this._size = t.size || 'small'),
            this._render(t.parentEl),
            t.isBlinking &&
              ((this._isBlinking = t.isBlinking.spawn()),
              this._isBlinking.subscribe(this._updateBlinkingMode.bind(this), { callWithLast: !0 }),
              (this._turnOffBlinking = t.turnOffBlinking))
        }
        destroy() {
          this._visible.destroy(),
            this._icon.destroy(),
            this._isBlinking && this._isBlinking.destroy(),
            this._el.remove()
        }
        onClick() {
          this._turnOffBlinking && this._turnOffBlinking()
        }
        visible() {
          return this._visible
        }
        _render(t) {
          this._el.classList.add(Ft.statusItem, Ft[this._size]), t.appendChild(this._el)
        }
        _updateVisibility(t) {
          this._el.classList.toggle('js-hidden', !t)
        }
        _updateIcon(t) {
          this._el.innerHTML = t || ''
        }
        _updateClassName(t) {
          this._prevCustomClass !== t &&
            (null !== this._prevCustomClass && this._el.classList.remove(this._prevCustomClass),
            null !== t && this._el.classList.add(t),
            (this._prevCustomClass = t))
        }
        _updateBlinkingMode(t) {
          this._el.classList.toggle(Ft.blinking, t)
        }
      }
      class si {
        constructor(t, e, i, s) {
          ;(this.element = document.createElement('div')), (this._blinkingSpawns = []), (this._iconsRenderers = [])
          const l = [Ft.statuses, 'apply-common-tooltip', 'common-tooltip-wide']
          h.a && l.push(Ft.touchMode),
            this.element.classList.add(...l, Ft[t]),
            (this._visibleWidgetsCount = e.spawn()),
            this._visibleWidgetsCount.subscribe(this._updateSpecialClassAndTooltip.bind(this)),
            (this._tooltips = i.spawn()),
            this._tooltips.subscribe(this._updateTooltip.bind(this)),
            (this._onClickCallback = s.onClick),
            (this._onClickHandler = this._onClick.bind(this)),
            this.element.addEventListener('click', this._onClickHandler)
        }
        destroy() {
          for (const t of this._iconsRenderers) t.destroy()
          for (const t of this._blinkingSpawns) t.destroy()
          this._visibleWidgetsCount.destroy(),
            this._tooltips.destroy(),
            this.element.removeEventListener('click', this._onClickHandler),
            this.element.remove()
        }
        addStatusModel(t) {
          this._iconsRenderers.push(
            new ii({
              visible: t.visible,
              icon: t.model.icon(),
              className: t.model.className(),
              size: t.model.size(),
              parentEl: this.element,
              isBlinking: t.model.isBlinkingMode,
              turnOffBlinking: t.model.turnOffBlinkingMode,
            })
          )
          const e = t.model.isBlinkingMode.spawn()
          e.subscribe(this._updateBlinkingMode.bind(this)), this._blinkingSpawns.push(e), this._updateBlinkingMode()
        }
        _onClick(t) {
          t.preventDefault()
          const e = this._iconsRenderers.filter((t) => t.visible().value())
          for (const o of e) o.onClick()
          let i = 14
          e.length > 1 && (i -= 2)
          const s = this.element.getBoundingClientRect(),
            l = { x: s.left - i, y: s.bottom + 4 }
          this._onClickCallback(l)
        }
        _updateTooltip() {
          this.element.setAttribute('title', this._tooltips.value().join(' · '))
        }
        _updateSpecialClassAndTooltip() {
          const t = this._visibleWidgetsCount.value()
          this.element.classList.toggle(Ft.oneWidgetsVisible, 1 === t),
            this.element.classList.toggle(Ft.twoWidgetsVisible, 2 === t),
            this.element.classList.toggle(Ft.threeWidgetsVisible, 3 === t),
            this._updateTooltip()
        }
        _updateBlinkingMode() {
          const t = this._blinkingSpawns.some((t) => t.value())
          this.element.classList.toggle(Ft.blinking, t)
        }
      }
      var li = i('9lPX'),
        oi = i('MyT/'),
        ni = i('jXu8'),
        ai = i('cbig'),
        ri = i('G2LI'),
        di = i('QkND'),
        hi = i('Gp/h'),
        ui = i('S48P')
      const ci = window.t('Market open'),
        _i = window.t('Pre-market'),
        pi = window.t('Post-market'),
        bi = window.t('Market closed'),
        gi = window.t('Holiday'),
        mi = window.t("All's well — Market is open."),
        wi = window.t('Morning. Market is open for pre-market trading.'),
        vi = window.t('Evening. Market is open for post-market trading.'),
        Si = window.t('Time for a walk — this market is closed.'),
        yi = window.t('Market is currently on holiday. Lucky them.'),
        fi = new Map([
          [
            'market',
            new Map([
              ['small', oi],
              ['large', ni],
            ]),
          ],
          [
            'pre_market',
            new Map([
              ['small', hi],
              ['large', ui],
            ]),
          ],
          [
            'post_market',
            new Map([
              ['small', ri],
              ['large', di],
            ]),
          ],
          [
            'out_of_session',
            new Map([
              ['small', li],
              ['large', li],
            ]),
          ],
          [
            'holiday',
            new Map([
              ['small', ai],
              ['large', ai],
            ]),
          ],
        ]),
        Mi = new Map([
          ['market', Ft.marketStatusOpen],
          ['pre_market', Ft.marketStatusPre],
          ['post_market', Ft.marketStatusPost],
          ['out_of_session', Ft.marketStatusClose],
          ['holiday', Ft.marketStatusHoliday],
        ]),
        Ci = new Map([
          ['market', ci],
          ['pre_market', _i],
          ['post_market', pi],
          ['out_of_session', bi],
          ['holiday', gi],
        ]),
        Ei = new Map([
          ['market', ci],
          ['pre_market', _i],
          ['post_market', pi],
          ['out_of_session', bi],
          ['holiday', gi],
        ]),
        Vi = new Map([
          ['market', It.a['color-market-open']],
          ['pre_market', It.a['color-pre-market']],
          ['post_market', It.a['color-post-market']],
          ['out_of_session', It.a['color-market-closed']],
          ['holiday', It.a['color-market-holiday']],
        ]),
        ki = new Map([
          ['market', [mi]],
          ['pre_market', [wi]],
          ['post_market', [vi]],
          ['out_of_session', [Si]],
          ['holiday', [yi]],
        ]),
        xi = new Map([
          ['market', null],
          ['pre_market', null],
          ['post_market', null],
          ['out_of_session', null],
          ['holiday', null],
        ]),
        Li = window.t('You can turn this data on or off.')
      class Hi extends Gt {
        constructor(t, e, i) {
          super({
            tooltipMap: Ci,
            iconMap: fi,
            classNameMap: Mi,
            titleMap: Ei,
            titleColorMap: Vi,
            htmlMap: ki,
            actionMap: xi,
            size: e,
          }),
            (this._marketStatus = new o.a(null).spawn()),
            (this._options = i),
            this.setModel(t)
        }
        destroy() {
          this._marketStatus.destroy()
        }
        setModel(t) {
          this._marketStatus.destroy(),
            null !== t
              ? ((this._marketStatus = t.status().spawn()),
                this._marketStatus.subscribe(this._updateStatus.bind(this), { callWithLast: !0 }))
              : (this._marketStatus = new o.a(null).spawn())
        }
        async _getHtml(t) {
          const e = await super._getHtml(t)
          return (
            null !== e &&
              (this._options.preMarketSolution || this._options.postMarketSolution) &&
              ('pre_market' === t && this._options.preMarketSolution && e.push(Li),
              'post_market' === t && this._options.postMarketSolution && e.push(Li)),
            e
          )
        }
        _getAction(t) {
          return super._getAction(t)
        }
        _updateStatus(t) {
          this._status.setValue(t)
        }
      }
      var Ti = i('JWMC')
      class Wi {
        constructor(t, e, i) {
          ;(this.visibleWidgetsCount = new o.a(0)),
            (this.errorWidgetIsShown = new o.a(!1)),
            (this._size = h.a ? 'large' : 'small'),
            (this._tooltips = new o.a([])),
            (this._visibilitySpawns = []),
            (this._tooltipSpawns = []),
            (this._statusWidgetInfos = []),
            (this._renderer = new si(this._size, this.visibleWidgetsCount, this._tooltips, {
              onClick: this._handleToggleDropdown.bind(this),
            })),
            (this._symbolInvalidViewModel = null),
            (this._dataSourceErrorStatusViewModel = null),
            (this._marketStatusViewModel = null),
            (this._dataUpdatedModeViewModel = null),
            (this._dataProblemViewModel = null),
            (this._isSymbolInvalid = null),
            (this._dataSourceHasErrorVisible = null),
            (this._studyErrorCanBeShown = new o.a(!1)),
            (this._marketStatusCanBeShown = new o.a(!1)),
            (this._dataUpdatedModeCanBeShown = new o.a(!1)),
            (this._dataProblemCanBeShown = new o.a(!1)),
            (this._isDataProblemCritical = null),
            (this._container = document.createElement('div')),
            (this._menuOpened = !1),
            (this._menuPosition = null),
            (this._source = t),
            (this._model = e),
            (this._options = i),
            this._recreateWidgets(),
            this._addSubscriptionForSymbolInvalid(),
            null !== this._dataSourceHasErrorVisible &&
              (this._dataSourceHasErrorVisible.subscribe(this._updateStatusWidgetsVisibilities.bind(this)),
              this._dataSourceHasErrorVisible.subscribe(this._updateErrorWidgetIsShown.bind(this))),
            this._options.dataProblemEnabled &&
              null !== this._isDataProblemCritical &&
              this._isDataProblemCritical.subscribe(this._updateStatusWidgetsVisibilities.bind(this))
          for (const s of this._tooltipSpawns) s.subscribe(this._updateTooltips.bind(this))
          for (const s of this._visibilitySpawns)
            s.subscribe(this._updateVisibleWidgetsCount.bind(this)), s.subscribe(this._updateTooltips.bind(this))
          this._updateErrorWidgetIsShown(),
            this._updateStatusWidgetsVisibilities(),
            this._updateVisibleWidgetsCount(),
            this._updateTooltips()
        }
        destroy() {
          var t
          this._source.properties().hasChild('symbol') &&
            this._source.properties().symbol.listeners().unsubscribeAll(this),
            this._options.sourceStatusesEnabled && null !== this._isSymbolInvalid && this._isSymbolInvalid.destroy(),
            null === (t = this._isDataProblemCritical) || void 0 === t || t.destroy()
          for (const e of this._tooltipSpawns) e.destroy()
          for (const e of this._visibilitySpawns) e.destroy()
          this.visibleWidgetsCount.unsubscribe()
          for (const e of this._statusWidgetInfos) e.model.destroy()
          this._renderer.destroy()
        }
        getElement() {
          return this._renderer.element
        }
        updateSource(t) {
          this._source !== t &&
            (this._source.properties().hasChild('symbol') &&
              this._source.properties().symbol.listeners().unsubscribeAll(this),
            (this._source = t),
            this._recreateWidgets(),
            this._updateStatusWidgetsVisibilities(),
            this._updateErrorWidgetIsShown(),
            this._updateVisibleWidgetsCount(),
            this._updateTooltips())
        }
        _updateStatusWidgetsVisibilities() {
          const t = this._isForceStatusActive()
          this._studyErrorCanBeShown.setValue(!t),
            this._marketStatusCanBeShown.setValue(!t),
            this._dataUpdatedModeCanBeShown.setValue(!t),
            this._dataProblemCanBeShown.setValue(!this._isPrimaryWidgetShown())
        }
        _isPrimaryWidgetShown() {
          var t, e
          return (
            null !== (e = null === (t = this._isSymbolInvalid) || void 0 === t ? void 0 : t.value()) &&
            void 0 !== e &&
            e
          )
        }
        _isForceStatusActive() {
          var t, e
          return (
            this._isPrimaryWidgetShown() ||
            (null !== (e = null === (t = this._isDataProblemCritical) || void 0 === t ? void 0 : t.value()) &&
              void 0 !== e &&
              e)
          )
        }
        _updateVisibleWidgetsCount() {
          const t = this._statusWidgetInfos.filter((t) => t.visible.value())
          this.visibleWidgetsCount.setValue(t.length)
        }
        _updateTooltips() {
          const t = []
          for (let e = 0; e < this._tooltipSpawns.length; e++) {
            if (!this._visibilitySpawns[e].value()) continue
            const i = this._tooltipSpawns[e].value()
            null !== i && i.length > 0 && t.push(i)
          }
          this._tooltips.setValue(t)
        }
        _recreateWidgets() {
          var t
          if (this._options.sourceStatusesEnabled) {
            if (
              Object(at.isStudy)(this._source) ||
              Object(at.isStudyStub)(this._source) ||
              this._source === this._model.mainSeries()
            ) {
              null === (t = this._isSymbolInvalid) || void 0 === t || t.destroy()
              const e = this._source
              if (
                ((this._isSymbolInvalid = Object(Nt.a)(e.isSymbolInvalid.bind(this._source), e.onStatusChanged())),
                null === this._symbolInvalidViewModel)
              ) {
                this._symbolInvalidViewModel = new Fe(this._isSymbolInvalid, {
                  tooltipMap: $e,
                  iconMap: Xe,
                  classNameMap: qe,
                  titleMap: Je,
                  titleColorMap: Qe,
                  htmlMap: ti,
                  actionMap: ei,
                  size: this._size,
                })
                const t = this._symbolInvalidViewModel.visible().spawn()
                this._visibilitySpawns.push(t), this._tooltipSpawns.push(this._symbolInvalidViewModel.tooltip().spawn())
                const e = { visible: t, model: this._symbolInvalidViewModel }
                this._statusWidgetInfos.push(e), this._renderer.addStatusModel(e)
              } else
                this._symbolInvalidViewModel.updateStatus(this._isSymbolInvalid),
                  this._addSubscriptionForSymbolInvalid()
            }
            if (Object(at.isStudy)(this._source) || Object(at.isStudyStub)(this._source))
              if (null === this._dataSourceErrorStatusViewModel) {
                ;(this._dataSourceErrorStatusViewModel = new ze(
                  this._source,
                  this._size,
                  this._options.sourceStatuses
                )),
                  (this._dataSourceHasErrorVisible = Object(Z.a)(
                    () =>
                      this._studyErrorCanBeShown.value() &&
                      Object(s.ensureNotNull)(this._dataSourceErrorStatusViewModel).visible().value(),
                    this._studyErrorCanBeShown,
                    this._dataSourceErrorStatusViewModel.visible()
                  )),
                  this._visibilitySpawns.push(this._dataSourceHasErrorVisible),
                  this._tooltipSpawns.push(this._dataSourceErrorStatusViewModel.tooltip().spawn())
                const t = { visible: this._dataSourceHasErrorVisible, model: this._dataSourceErrorStatusViewModel }
                this._statusWidgetInfos.push(t), this._renderer.addStatusModel(t)
              } else this._dataSourceErrorStatusViewModel.setSource(this._source)
          }
          if (this._options.marketStatusEnabled) {
            const t = this._source.marketStatusModel()
            if (null === this._marketStatusViewModel) {
              this._marketStatusViewModel = new Hi(t, this._size, this._options.marketStatus)
              const e = Object(Z.a)(
                () =>
                  this._marketStatusCanBeShown.value() &&
                  Object(s.ensureNotNull)(this._marketStatusViewModel).visible().value(),
                this._marketStatusCanBeShown,
                this._marketStatusViewModel.visible()
              )
              this._visibilitySpawns.push(e), this._tooltipSpawns.push(this._marketStatusViewModel.tooltip().spawn())
              const i = { visible: e, model: this._marketStatusViewModel }
              this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i)
            } else this._marketStatusViewModel.setModel(t)
          }
          if (this._options.dataUpdateModeEnabled) {
            const t = this._source.dataUpdatedModeModel()
            if (null === this._dataUpdatedModeViewModel) {
              this._dataUpdatedModeViewModel = new Ve(t, this._size, this._options.dataUpdateMode)
              const e = Object(Z.a)(
                () =>
                  this._dataUpdatedModeCanBeShown.value() &&
                  Object(s.ensureNotNull)(this._dataUpdatedModeViewModel).visible().value(),
                this._dataUpdatedModeCanBeShown,
                this._dataUpdatedModeViewModel.visible()
              )
              this._visibilitySpawns.push(e), this._tooltipSpawns.push(this._dataUpdatedModeViewModel.tooltip().spawn())
              const i = { visible: e, model: this._dataUpdatedModeViewModel }
              this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i)
            } else this._dataUpdatedModeViewModel.setModel(t)
          }
          if (this._options.dataProblemEnabled) {
            const t = this._source.dataProblemModel()
            if (null === this._dataProblemViewModel) {
              ;(this._dataProblemViewModel = new Ke(t, this._size)),
                (this._isDataProblemCritical = this._dataProblemViewModel.isDataProblemCritical().spawn())
              const e = Object(Z.a)(
                () =>
                  this._dataProblemCanBeShown.value() &&
                  Object(s.ensureNotNull)(this._dataProblemViewModel).visible().value(),
                this._dataProblemCanBeShown,
                this._dataProblemViewModel.visible()
              )
              this._visibilitySpawns.push(e), this._tooltipSpawns.push(this._dataProblemViewModel.tooltip().spawn())
              const i = { visible: e, model: this._dataProblemViewModel }
              this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i)
            } else this._dataProblemViewModel.setModel(t)
          }
        }
        _addSubscriptionForSymbolInvalid() {
          this._options.sourceStatusesEnabled &&
            null !== this._isSymbolInvalid &&
            (this._isSymbolInvalid.subscribe(this._updateStatusWidgetsVisibilities.bind(this)),
            this._isSymbolInvalid.subscribe(this._updateErrorWidgetIsShown.bind(this), { callWithLast: !0 }))
        }
        _updateErrorWidgetIsShown() {
          var t, e, i, s
          const l =
              null !== (e = null === (t = this._isSymbolInvalid) || void 0 === t ? void 0 : t.value()) &&
              void 0 !== e &&
              e,
            o =
              null !== (s = null === (i = this._dataSourceHasErrorVisible) || void 0 === i ? void 0 : i.value()) &&
              void 0 !== s &&
              s
          this.errorWidgetIsShown.setValue(l || o)
        }
        _handleToggleDropdown(t) {
          var e
          ;(this._menuPosition = t),
            (this._menuOpened = !this._menuOpened),
            this._menuOpened &&
              (this._source.properties().hasChild('symbol') &&
                this._source.properties().symbol.listeners().subscribe(this, this._handleDropdownMenuClose),
              (e = 'Open full tooltip for statuses: ' + this._tooltips.value().join(', ')),
              Object(Ti.trackEvent)('GUI', "Statuses widget's action", e)),
            this._updateDropdownMenu()
        }
        _handleDropdownMenuClose() {
          ;(this._menuOpened = !1),
            this._source.properties().hasChild('symbol') &&
              this._source.properties().symbol.listeners().unsubscribeAll(this),
            this._updateDropdownMenu()
        }
        _updateDropdownMenu() {
          Promise.all([i.e('react'), i.e(7), i.e(16), i.e(98), i.e(0), i.e(4), i.e('full-tooltips-popup')])
            .then(i.bind(null, 'vR7+'))
            .then((t) => {
              t.render(
                this._menuOpened,
                this._container,
                this._renderer.element,
                this._statusWidgetInfos,
                this._handleDropdownMenuClose.bind(this),
                Object(s.ensureNotNull)(this._menuPosition)
              )
            })
        }
      }
      var Ai = i('AH3n')
      const Bi = window.t('Replay mode'),
        Oi = window.t("You're in Replay mode. You're in Replay mode. You're in Replay mode.")
      new Map([
        [
          !0,
          new Map([
            ['small', Ai],
            ['large', Ai],
          ]),
        ],
        [
          !1,
          new Map([
            ['small', ''],
            ['large', ''],
          ]),
        ],
      ]),
        new Map([
          [!0, Ft.replayMode],
          [!1, null],
        ]),
        new Map([
          [!0, Bi],
          [!1, null],
        ]),
        new Map([
          [!0, Bi],
          [!1, null],
        ]),
        new Map([
          [!0, It.a['color-replay-mode']],
          [!1, null],
        ]),
        new Map([
          [!0, [Oi]],
          [!1, null],
        ]),
        new Map([
          [!0, null],
          [!1, null],
        ])
      class Pi extends Wi {
        constructor(t, e, i) {
          super(t, e, i),
            (this._isInReplay = new o.a(!1).readonly().spawn()),
            (this._isInReplayCanBeShown = null),
            (this._inited = !1)
        }
        destroy() {
          super.destroy()
        }
        _updateStatusWidgetsVisibilities() {
          super._updateStatusWidgetsVisibilities()
        }
        _isPrimaryWidgetShown() {
          var t, e
          return (
            super._isPrimaryWidgetShown() ||
            (null !== (e = null === (t = this._isInReplay) || void 0 === t ? void 0 : t.value()) && void 0 !== e && e)
          )
        }
      }
      var zi = i('EsvI'),
        Di = i('UXvI')
      i.d(e, 'trackLegendEvent', function () {
        return Ri
      }),
        i.d(e, 'LegendWidget', function () {
          return Fi
        })
      const ji = {
          readOnlyMode: !1,
          contextMenu: { settings: !0, mainSeries: !0, studies: !0, showOpenMarketStatus: !1 },
          symbolMarkerEnabled: !1,
          showToggleButton: !0,
          canShowSourceCode: !1,
          statusesWidgets: {
            sourceStatusesEnabled: !1,
            sourceStatuses: { errorSolution: !0 },
            marketStatusEnabled: !1,
            marketStatus: { preMarketSolution: !0, postMarketSolution: !0 },
            dataUpdateModeEnabled: !1,
            dataUpdateMode: { subscriptionFullInfo: !0 },
            dataProblemEnabled: !1,
          },
        },
        Ni = (d.enabled('hide_legend_by_default'), d.enabled('fundamental_widget')),
        Ii = d.enabled('legend_context_menu')
      function Ri(t) {
        Object(Ti.trackEvent)('GUI', 'Legend action', t)
      }
      const Ki = 2 * parseInt(m.marginlegendhoriz)
      class Fi {
        constructor(t, e, i, s, l, a) {
          ;(this._mainSeriesViewModel = null),
            (this._dataSourceViewModels = []),
            (this._visibleDataSourceCount = new o.a(0)),
            (this._themedColor = new o.a('')),
            (this._mainSeriesRowHidden = null),
            (this._dataSourceRowsHidden = []),
            (this._customWidgetsVisibilities = []),
            (this._allLegendHidden = new o.a(!1)),
            (this._studiesLegendHidden = new o.a(!1)),
            (this._customWidgetsHeights = []),
            (this._onLegendVisibilityToggled = null),
            (this._availableHeight = 0),
            (this._collapsedDataSourcesCount = new o.a(0)),
            (this._collapsedDataSourcesTitle = new o.a('')),
            (this._mainSeriesStatusWidget = null),
            (this._dataSourcesStatusesWidgets = []),
            (this._size = null),
            (this._customLegendWidgetsFactoriesMap = new Map()),
            (this._customLegendWidgetsMap = new Map()),
            (this._margin = 0),
            (this._model = t),
            (this._paneWidget = e),
            (this._options = Object(n.merge)(Object(n.clone)(ji), l)),
            (this._callbacks = a),
            (this._mainSeriesViewModelsOptions = {
              readOnlyMode: this._options.readOnlyMode,
              symbolMarkerEnabled: this._options.symbolMarkerEnabled,
            }),
            (this._dataSourceViewModelsOptions = Object.assign(Object.assign({}, this._mainSeriesViewModelsOptions), {
              canShowSourceCode: this._options.canShowSourceCode,
            })),
            (this._backgroundThemeName = i)
          const r = this._showLegendCalculatedProperty()
          ;(this._isDataSourcesCollapsed = new o.a(r.value())),
            r.subscribe(this, () => {
              this._isDataSourcesCollapsed.setValue(r.value())
            })
          const d = new o.a(this._getCustomTextColorValue())
          this._model
            .model()
            .properties()
            .scalesProperties.textColor.subscribe(this, () => {
              d.setValue(this._getCustomTextColorValue())
            })
          const h = this._model.model().properties().paneProperties.legendProperties.showBackground,
            u = new o.a(h.value())
          h.subscribe(this, () => {
            u.setValue(h.value())
          })
          const c = this._model.model().properties().paneProperties.legendProperties.backgroundTransparency,
            _ = new o.a(c.value())
          c.subscribe(this, () => {
            _.setValue(c.value())
          }),
            (this._wrapText = new o.a(!1)),
            (this._hideNotMainSources = s.spawn()),
            this._hideNotMainSources.subscribe(this._updateLegendVisibilities.bind(this)),
            (this._isPaneMain = new o.a(this._getIsPaneMainValue())),
            (this._updateCollapsedSourcesModeThrottle = Object(Di.default)(
              this._updateCollapsedSourcesMode.bind(this),
              100
            )),
            (this._renderer = new N(
              {
                withActions: !this._options.readOnlyMode,
                showToggleButton: this._options.showToggleButton,
                isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                isAllLegendHidden: this._allLegendHidden.readonly(),
                customTextColor: d.readonly(),
                themedColor: this._themedColor.readonly(),
                showBackground: u.readonly(),
                backgroundTransparency: _.readonly(),
                wrapText: this._wrapText.readonly(),
                collapsedDataSourcesCount: this._collapsedDataSourcesCount.readonly(),
                collapsedDataSourcesTitle: this._collapsedDataSourcesTitle.readonly(),
                showLegendWidgetContextMenu: this.onShowLegendWidgetContextMenu.bind(this),
              },
              {
                visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                showObjectsTree: this._isPaneMain.readonly(),
                onCollapseDataSources: this.onCollapseDataSources.bind(this),
                onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog,
              }
            ))
        }
        destroy() {
          this._hideNotMainSources.destroy(), null !== this._mainSeriesViewModel && this._destroyMainDataSource()
          for (const t of this._dataSourceViewModels) t.destroy()
          for (const t of this._dataSourcesStatusesWidgets) t.destroy()
          this._clearSubscriptions()
          for (const t of Array.from(this._customLegendWidgetsMap.keys())) this._destroyCustomWidgetFromLayerBlock(t)
          this._customLegendWidgetsMap.clear(),
            this._renderer.destroy(),
            delete this._renderer,
            this._showLegendCalculatedProperty().unsubscribeAll(this),
            this._showLegendOriginalProperty().unsubscribeAll(this),
            this._model.model().properties().scalesProperties.textColor.unsubscribeAll(this),
            this._model.model().properties().paneProperties.legendProperties.showBackground.unsubscribeAll(this),
            this._model.model().properties().paneProperties.legendProperties.backgroundTransparency.unsubscribeAll(this)
        }
        addCustomWidgetToLegend(t, e) {
          const i = this._customLegendWidgetsFactoriesMap.get(e.block) || new Map(),
            s = i.get(e.position) || []
          s.push(t),
            i.set(e.position, s),
            this._customLegendWidgetsFactoriesMap.set(e.block, i),
            this.updateLayout(),
            this._updateCustomWidgetModeBySize()
        }
        onShowLegendWidgetContextMenu(t, e) {
          if (this._options.readOnlyMode || !Ii) return Promise.resolve(null)
          Ri('Show legend context menu')
          const i = new Map()
          for (const l of Array.from(this._customLegendWidgetsMap.keys())) {
            const t = Object(s.ensureDefined)(this._customLegendWidgetsMap.get(l)),
              e = new Map()
            for (const i of Array.from(t.keys())) {
              const l = Object(s.ensureDefined)(t.get(i)),
                o = e.get(i) || []
              for (const t of l) o.push(...t.contextMenuActions())
              e.set(i, o)
            }
            i.set(l, e)
          }
          return Wt(this._model, this._options.contextMenu, this._callbacks.showGeneralChartProperties, i, t, e)
        }
        onCollapseDataSources() {
          const t = this._showLegendOriginalProperty()
          t.setValue(!t.value())
        }
        updateLayout() {
          const t = this._paneWidget
            .state()
            .sourcesByGroup()
            .all()
            .filter((t) => null !== t.statusView())
          if (0 === t.length) return
          const e = this._model.mainSeries(),
            i = t.indexOf(e)
          i > -1
            ? (t.splice(i, 1),
              Ni ||
                null !== this._mainSeriesViewModel ||
                ((this._mainSeriesViewModel = new nt(
                  this._model,
                  e,
                  this._mainSeriesViewModelsOptions,
                  this._callbacks,
                  this._options.contextMenu
                )),
                (this._mainSeriesStatusWidget = new Pi(e, this._model.model(), this._options.statusesWidgets)),
                this._renderer.addMainDataSource(this._mainSeriesViewModel, this._mainSeriesStatusWidget)),
              this._addCustomWidgetForLayerBlock(0))
            : null !== this._mainSeriesViewModel &&
              (this._destroyMainDataSource(), this._destroyCustomWidgetFromLayerBlock(0))
          const l = [],
            o = [],
            n = this._dataSourceViewModels.length
          if (0 === n)
            for (let s = t.length - 1; s >= 0; s--)
              l.push(
                new Et(this._model, t[s], this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)
              ),
                o.push(new Wi(t[s], this._model.model(), this._options.statusesWidgets))
          else {
            let e = 0
            for (let i = t.length - 1; i >= 0; i--)
              this._dataSourceViewModels[e]
                ? (this._dataSourceViewModels[e].updateSource(t[i]),
                  this._dataSourcesStatusesWidgets[e].updateSource(t[i]))
                : (l.push(
                    new Et(
                      this._model,
                      t[i],
                      this._dataSourceViewModelsOptions,
                      this._callbacks,
                      this._options.contextMenu
                    )
                  ),
                  o.push(new Wi(t[i], this._model.model(), this._options.statusesWidgets))),
                e++
            for (; this._dataSourceViewModels.length > e; )
              Object(s.ensureDefined)(this._dataSourceViewModels.pop()).destroy()
            for (; this._dataSourcesStatusesWidgets.length > e; )
              Object(s.ensureDefined)(this._dataSourcesStatusesWidgets.pop()).destroy()
          }
          0 !== l.length &&
            (this._renderer.addDataSources(l, o),
            this._dataSourceViewModels.push(...l),
            this._dataSourcesStatusesWidgets.push(...o)),
            n !== this._dataSourceViewModels.length && this._updateCollapsedSourcesMode(),
            this._dataSourceViewModels.length > 0
              ? this._addCustomWidgetForLayerBlock(1)
              : this._destroyCustomWidgetFromLayerBlock(1),
            this._recreateSubscriptions(),
            this._isPaneMain.setValue(this._getIsPaneMainValue()),
            this.update(),
            this._updateWidgetModeByWidth()
        }
        update() {
          null !== this._mainSeriesViewModel && this._mainSeriesViewModel.update()
          for (const t of this._dataSourceViewModels) t.update()
        }
        updateThemedColors(t) {
          null === t &&
            (t = Object(zi.getStdThemedValue)(
              'chartProperties.paneProperties.background',
              this._backgroundThemeName.value()
            )),
            this._themedColor.setValue(t || '')
        }
        firstTitle() {
          return this._renderer.firstTitle()
        }
        getElement() {
          return this._renderer.getElement()
        }
        addMargin(t) {
          if (this._margin === t) return
          this._margin = t
          ;(this._renderer.getElement().style.maxWidth =
            0 === this._margin ? '' : `calc(100% - ${this._margin + Ki}px)`),
            this._updateWidgetModeBySize()
        }
        updateWidgetModeBySize(t) {
          ;(this._size = t), this._updateWidgetModeBySize()
        }
        _updateWidgetModeBySize() {
          this._updateWidgetModeByWidth(), this._updateWidgetModeByHeight(), this._updateCustomWidgetModeBySize()
        }
        _updateWidgetModeByWidth() {
          null !== this._size && this._renderer.updateMode(this._availableWidth())
        }
        _updateWidgetModeByHeight() {
          null !== this._size &&
            ((this._availableHeight = 0.8 * this._size.h), this._updateCollapsedSourcesModeThrottle())
        }
        _updateCustomWidgetModeBySize() {
          if (null === this._size) return
          const t = new a.Size(this._availableWidth(), this._size.h)
          for (const e of Array.from(this._customLegendWidgetsMap.values()))
            for (const i of Array.from(e.values())) for (const e of i) e.updateWidgetModeBySize(t)
        }
        _destroyMainDataSource() {
          Object(s.ensureNotNull)(this._mainSeriesStatusWidget).destroy(),
            (this._mainSeriesStatusWidget = null),
            Object(s.ensureNotNull)(this._mainSeriesViewModel).destroy(),
            (this._mainSeriesViewModel = null)
        }
        _updateCollapsedSourcesMode() {
          const t = this._dataSourceViewModels.length
          if (!this._wrapText.value() && this._availableHeight > 0 && t > 2) {
            const e = this._renderer.getMainSourceHeight(),
              i = this._renderer.getDataSourceHeight(),
              s = this._getCustomWidgetsHeight()
            if (null !== e && null !== i) {
              const l = Math.floor((this._availableHeight - e - s) / i),
                o = Math.max(l, 2) - 1
              if (t > o + 1) {
                let e = ''
                for (let i = 0; i < t; i++) {
                  const t = i < o
                  this._dataSourceViewModels[i].setGlobalVisibility(t),
                    t || (e += `${0 === e.length ? '' : ', '}${this._dataSourceViewModels[i].getFullTitle()}`)
                }
                return this._collapsedDataSourcesTitle.setValue(e), void this._collapsedDataSourcesCount.setValue(t - o)
              }
            }
          }
          for (const e of this._dataSourceViewModels) e.setGlobalVisibility(!0)
          this._collapsedDataSourcesCount.setValue(0), this._collapsedDataSourcesTitle.setValue('')
        }
        _getCustomWidgetsHeight() {
          let t = 0
          for (const e of Array.from(this._customLegendWidgetsMap.values()))
            for (const i of Array.from(e.values())) for (const e of i) t += e.height().value()
          return t
        }
        _getCustomTextColorValue() {
          const t = this._model.model().properties().scalesProperties.textColor.value()
          return Object(zi.isStdThemedDefaultValue)(
            'chartProperties.scalesProperties.textColor',
            t,
            Object(zi.getCurrentTheme)().name
          )
            ? null
            : t
        }
        _clearSubscriptions() {
          null !== this._mainSeriesRowHidden &&
            (this._mainSeriesRowHidden.destroy(), (this._mainSeriesRowHidden = null))
          for (const t of this._dataSourceRowsHidden) t.destroy()
          this._dataSourceRowsHidden = []
          for (const t of this._customWidgetsVisibilities) t.destroy()
          this._customWidgetsVisibilities = []
          for (const t of this._customWidgetsHeights) t.destroy()
          this._customWidgetsHeights = []
        }
        _recreateSubscriptions() {
          this._clearSubscriptions(),
            null !== this._mainSeriesViewModel &&
              ((this._mainSeriesRowHidden = this._mainSeriesViewModel.isRowHidden().spawn()),
              this._mainSeriesRowHidden.subscribe(this._updateLegendVisibilities.bind(this)))
          for (const t of this._dataSourceViewModels) {
            const e = t.isRowHidden().spawn()
            this._dataSourceRowsHidden.push(e),
              e.subscribe(this._updateVisibleDataSourceCount.bind(this)),
              e.subscribe(this._updateLegendVisibilities.bind(this))
          }
          for (const t of Array.from(this._customLegendWidgetsMap.values()))
            for (const e of Array.from(t.values()))
              for (const t of e) {
                const e = t.visibility().spawn()
                this._customWidgetsVisibilities.push(e), e.subscribe(this._updateLegendVisibilities.bind(this))
                const i = t.height().spawn()
                this._customWidgetsHeights.push(i), i.subscribe(this._updateCollapsedSourcesMode.bind(this))
              }
          this._updateVisibleDataSourceCount(), this._updateLegendVisibilities()
        }
        _updateLegendVisibilities() {
          const t = this._dataSourceRowsHidden.every((t) => t.value()),
            e = this._hideNotMainSources.value() || t
          this._studiesLegendHidden.setValue(e)
          const i = null === this._mainSeriesRowHidden || this._mainSeriesRowHidden.value(),
            s = this._customWidgetsVisibilities.some((t) => t.value())
          this._allLegendHidden.setValue(t && i && !s)
        }
        _updateVisibleDataSourceCount() {
          const t = this._dataSourceRowsHidden.filter((t) => !t.value()).length
          this._visibleDataSourceCount.setValue(t)
        }
        _setLegendVisibilityToggled() {
          0
        }
        _getIsPaneMainValue() {
          return this._paneWidget.containsMainSeries()
        }
        _showLegendCalculatedProperty() {
          return this._model.model().showLegend()
        }
        _showLegendOriginalProperty() {
          return this._model.model().properties().paneProperties.legendProperties.showLegend
        }
        _addCustomWidgetForLayerBlock(t) {
          const e = this._customLegendWidgetsFactoriesMap.get(t)
          if (void 0 === e) return
          const i = this._customLegendWidgetsMap.get(t) || new Map()
          let s = !1
          for (const l of Array.from(e.keys())) {
            const o = i.get(l) || [],
              n = e.get(l) || []
            for (let e = o.length; e < n.length; e++) {
              const i = n[e](this._model.model(), this._backgroundThemeName)
              0 === t && 0 === l && i.setGlobalVisibility(this._hideNotMainSources.opposite()),
                o.push(i),
                this._renderer.addCustomWidget(i, { block: t, position: l }),
                (s = !0)
            }
            s && i.set(l, o)
          }
          s && this._customLegendWidgetsMap.set(t, i)
        }
        _destroyCustomWidgetFromLayerBlock(t) {
          const e = this._customLegendWidgetsMap.get(t)
          if (void 0 !== e) {
            for (const t of Array.from(e.values())) for (const e of t) e.destroy()
            e.clear(), this._customLegendWidgetsMap.delete(t)
          }
        }
        _availableWidth() {
          return null === this._size ? 0 : this._size.w - this._margin - Ki
        }
      }
    },
    vWJB: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>'
    },
    vYP1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>'
    },
    vg09: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>'
    },
    wZiV: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>'
    },
    z4c1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>'
    },
  },
])
