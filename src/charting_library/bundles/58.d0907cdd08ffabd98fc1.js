;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    BhuR: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>'
    },
    GAqT: function (t, e, o) {
      'use strict'
      ;(function (e, i) {
        var a = o('Hr11').max,
          n = o('A6WY').lazyJqueryUI,
          s = o('jAh7').getRootOverlapManager
        o('PVgW')
        var d = {
          modalDialog: null,
          dialogs: [],
          NOTIFICATION_ANIMATION_START_OFFSET: '-33px',
          _constrainDraggableOptionsIfNeeded: function (t) {
            return e.enabled('constraint_dialogs_movement') && (t.containment = '.chart-page'), t
          },
          showNotice: function (t, e, o) {
            'object' == typeof e && ((o = e), (e = ''))
            var a = (o = o || {}).doNotCloseOnBgClick || !1,
              n = o.html || '',
              s = o.width || '400px',
              l = {}
            ;(l.noClose = o.noClose || null), (l.addClass = o.modalDialogClass || null), d.createModalDialog(t, l)
            var r = o.centerCaption ? 'caption-big-center' : 'caption-big'
            d.modalDialog.find('._tv-dialog').css('width', s)
            var c = o.customButtonCaption ? o.customButtonCaption : $.t('OK')
            return (
              d.modalDialog.find('._tv-dialog-content').html(
                i.render(
                  '<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' +
                    n +
                    '</div>{{^removeOkButton}}<div class="buttons"><input type="button" class="_tv-button ok" value="' +
                    c +
                    '"/></div>{{/removeOkButton}}</div>',
                  {
                    captionClassName: r,
                    classSuffix: o.classSuffix || '',
                    text: e,
                    removeOkButton: o && o.removeOkButton,
                  }
                )
              ),
              d.modalDialog.find('._tv-button.ok').on('click', function () {
                d.destroy(), o.onOkButtonClick && o.onOkButtonClick()
              }),
              d.positionDialog(),
              d.applyHandlers(!1, { doNotCloseOnBgClickIfShadowbox: a, beforeDestroy: o.onClose }),
              d.modalDialog
            )
          },
          showCustomDialog: function (t) {
            function e(t) {
              d.destroy(), t.preventDefault()
            }
            return (
              d.createModalDialog(t.title || $.t('Dialog'), { addClass: '' }),
              d.modalDialog.find('._tv-dialog').css('width', t.width || '400px'),
              d.modalDialog
                .find('._tv-dialog-content')
                .html('<div class="main">' + (t.html || $.t('Content')) + '</div>'),
              d.modalDialog.find('.ok').click(e),
              d.modalDialog.find('form').submit(e),
              d.modalDialog.find('.cancel').click(e),
              d.modalDialog.find('._tv-dialog-title-close').click(e),
              d.positionDialog(),
              d.applyHandlers(),
              d.modalDialog
            )
          },
          createModalDialog: function (t, e) {
            ;(e = e || {}),
              null !== d.modalDialog && d.destroy(),
              (d.modalDialog = $(
                '<div class="_tv-dialog-shadowbox"><div class="_tv-dialog _tv-dialog-modal' +
                  (e.addClass ? ' ' + e.addClass : '') +
                  '">' +
                  (e.noHeader
                    ? ''
                    : '<div class="_tv-dialog-title">' +
                      (e.noClose ? '' : '<a class="_tv-dialog-title-close"></a>') +
                      '<span class="_tv-dialog-title-text">' +
                      t +
                      '</span></div>') +
                  '<div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div></div>'
              )
                .appendTo($('body'))
                .data('title', t)),
              d._addMessageCloseButton(d.modalDialog.find('._tv-dialog-error')),
              d._addMessageCloseButton(d.modalDialog.find('._tv-dialog-message')),
              e.noShadowBox && d.modalDialog.addClass('transparent'),
              e.addClass && d.modalDialog.addClass(e.addClass),
              e.width && d.modalDialog.find('._tv-dialog').css({ width: e.width }),
              e.content && d.modalDialog.find('._tv-dialog-content').html(e.content)
            var o = $('.fancybox-overlay')
            if (o.length) {
              var i = o.css('z-index')
              $('._tv-dialog-shadowbox').css('z-index', i + 1)
            }
            return (
              e.draggable &&
                n(d.modalDialog).draggable(
                  d._constrainDraggableOptionsIfNeeded({ handle: d.modalDialog.find('._tv-dialog-title') })
                ),
              e.zIndex && d.modalDialog.css('z-index', e.zIndex),
              d.modalDialog
            )
          },
          _addMessageCloseButton: function (t) {
            var e = $(o('BhuR')).attr({ class: 'close', title: $.t('Close message') })
            t.append(e),
              $(e).on('click', function () {
                t.animate({ marginTop: d.NOTIFICATION_ANIMATION_START_OFFSET, opacity: 0 }, 'fast', function () {
                  t.hide()
                })
              })
          },
          createDialog: function (t, e) {
            if (d.isOpen(t)) return (c = d.get(t)).find('._tv-dialog-content').html(''), c.data('new', !1), c
            var o = (e = e || {}).ownerDocument || document,
              l = s(o),
              r = l.ensureWindow(t, { position: 'relative' }),
              c = $(
                i.render(
                  '<div class="_tv-dialog _tv-dialog-nonmodal {{&addClass}}"><div class="_tv-dialog-title{{#hideTitle}} _tv-dialog-title-hidden{{/hideTitle}}{{#hideCloseCross}} _tv-dialog-title-no-close{{/hideCloseCross}}">{{^hideTitle}} {{&title}}{{/hideTitle}}{{^hideCloseCross}}<a class="_tv-dialog-title-close"></a>{{/hideCloseCross}}</div><div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div>',
                  { addClass: e.addClass || '', hideTitle: e.hideTitle, hideCloseCross: e.hideCloseCross, title: t }
                ),
                o
              ).appendTo(r)
            d._addMessageCloseButton(c.find('._tv-dialog-error')),
              d._addMessageCloseButton(c.find('._tv-dialog-message')),
              e.width && c.css({ width: e.width }),
              e.content && c.find('._tv-dialog-content').html(e.content)
            var g = 0
            ;(g = e.zIndex
              ? e.zIndex
              : d.dialogs && d.dialogs.length
              ? a(
                  $.map(d.dialogs, function (t) {
                    return parseInt((t.dialog || t).css('z-index'), 10)
                  })
                ) + 1
              : 110),
              c.css('z-index', g),
              c.data('new', !0),
              c.data('title', t),
              c.data('id', d.dialogs.length + 1),
              d.dialogs.push({ title: t, dialog: c, id: d.dialogs.length + 1 }),
              c.on('mousedown touchstart', function () {
                l.moveToTop(t)
              })
            var u = {
              start: function (t, e) {
                for (var o = e.helper.css('z-index'), i = 0, a = null, n = 0; n < d.dialogs.length; n++) {
                  var s = d.dialogs[n].dialog.css('z-index')
                  s > i && ((i = s), (a = d.dialogs[n].dialog))
                }
                e.helper.css('z-index', i), a.css('z-index', o)
              },
            }
            return (
              e.dragHandle ? (u.handle = e.dragHandle) : e.hideTitle || (u.handle = '._tv-dialog-title'),
              e.dragOptions && $.extend(u, e.dragOptions),
              n(c).draggable(d._constrainDraggableOptionsIfNeeded(u)),
              c
            )
          },
          positionDialog: function (t, e, o) {
            o = o || {}
            function i() {
              p.css('margin-left', -Math.round(p.outerWidth() / 2) + 'px'),
                p.css('margin-top', -Math.round(p.outerHeight() / 2) + 'px')
            }
            if (((e = e || o.position), t)) {
              var a,
                n,
                s = t.prop('ownerDocument'),
                l = s.defaultView,
                r = t.width(),
                c = t.height(),
                g = $(l).width(),
                u = $(l).height()
              if (e && e.top && e.left)
                (n = o.forcePosition ? e.left : Math.max(2, Math.min(g - r - 4, e.left)) + 'px'),
                  (a = o.forcePosition ? e.top : Math.max(2, Math.min(u - c - 4, e.top)) + 'px')
              else if (e && e.considerScroll) {
                var h = $(s)
                ;(n = Math.round((g - r) / 2 + h.scrollLeft()) + 'px'),
                  (a = Math.round((u - c) / 2 + h.scrollTop()) + 'px')
              } else (n = Math.round((g - r) / 2) + 'px'), (a = Math.round((u - c) / 2) + 'px')
              o.fadeIn
                ? t.css({ left: n, top: a }).hide().fadeIn('fast')
                : o.smooth
                ? t.animate({ left: n, top: a })
                : t.css({ left: n, top: a })
            } else {
              var p = (t = d.modalDialog).find('._tv-dialog')
              i(), p.resize(i)
            }
          },
          applyHandlers: function (t, e) {
            var o = !t || t === this.modalDialog,
              i =
                ((e = e || {}),
                o
                  ? function () {
                      d.destroy()
                    }
                  : function () {
                      d.destroy(t.data('title'))
                    }),
              a = (t = t || d.modalDialog.find('._tv-dialog')).prop('ownerDocument')
            e.beforeDestroy && t.on('destroy', e.beforeDestroy),
              t.find('._tv-dialog-title ._tv-dialog-title-close, .js-dialog-close').on('click', function (t) {
                e.closeHandler && 'function' == typeof e.closeHandler ? e.closeHandler(t) : i()
              }),
              e.doNotCloseOnBgClick ||
                setTimeout(function () {
                  $(a).on('mousedown.closeDialog', function (o) {
                    var n = $(o.target).parents().andSelf()
                    n.is(t) ||
                      (e.doNotCloseOnBgClickIfShadowbox && n.is('._tv-dialog-shadowbox, .tv-dialog__modal-wrap')) ||
                      n.is(
                        '.colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container, .context-menu-wrapper'
                      ) ||
                      ($(a).off('mousedown.closeDialog'), i())
                  })
                }, 0),
              t.find('input[type="checkbox"]').change(function () {
                var t = $(this)
                t.next('._tv-dialog-checkbox-mask')
                  .toggleClass('disabled', t.prop('disabled'))
                  .toggleClass('_tv-dialog-checkbox-mask-active', t.is(':checked'))
              })
            var n = t
              .find('input[type="text"]')
              .focus(function () {
                $(this).addClass('_tv-dialog-content-textactive')
              })
              .blur(function () {
                $(this).removeClass('_tv-dialog-content-textactive')
              })
              .first()
            Modernizr.mobiletouch || e.notFocusFirst || n.focus(),
              t
                .find('input[type="password"]')
                .focus(function () {
                  $(this).addClass('_tv-dialog-content-textactive')
                })
                .blur(function () {
                  $(this).removeClass('_tv-dialog-content-textactive')
                }),
              t
                .find('textarea')
                .focus(function () {
                  $(this).addClass('_tv-dialog-content-textareaactive')
                })
                .blur(function () {
                  $(this).removeClass('_tv-dialog-content-textareaactive')
                }),
              t.find('._tv-dialog-checkbox-mask').click(function () {
                var t = $(this).prev()
                t.prop('disabled') || (t.prop('checked', !t[0].checked), t.change())
              }),
              e.doNotCloseOnEsc ||
                $(a).bind('keyup.hideDialog', function (e) {
                  if (27 === e.keyCode) return t ? d.destroy(t.data('title')) : d.destroy(), !1
                }),
              e.processEnterButton &&
                $(a).bind('keyup.confirmAndCloseDialog', function (t) {
                  13 === t.keyCode &&
                    'textarea' !== t.target.tagName.toLowerCase() &&
                    (e.processEnterButton.click(), $(a).unbind('keyup.confirmAndCloseDialog'))
                })
          },
          showError: function (t, e, o) {
            d.showMessage(t, e, $.extend(o || {}, { isError: !0 }))
          },
          showMessage: function (t, e, o) {
            e || (e = $('._tv-dialog'))
            var i = (o = o || {}).isError ? '_tv-dialog-error' : '_tv-dialog-message',
              a = e.find('.' + i),
              n = a.find('.message')
            o.html ? n.html('string' == typeof o.html ? o.html : t) : n.text(t),
              n.css('width', e.width()).toggleClass('selectable', Boolean(o.selectable)),
              a
                .toggleClass('with-close', Boolean(o.withClose))
                .css({ marginTop: d.NOTIFICATION_ANIMATION_START_OFFSET, opacity: '0' })
                .show()
                .animate({ marginTop: 0, opacity: 1 }, 'fast'),
              o.withClose ||
                (o.hideWithoutAnimation
                  ? a.on('touchstartoutside mousedownoutside keydownoutside', function t() {
                      a.hide(), a.off('touchstartoutside mousedownoutside keydownoutside', t)
                    })
                  : a.on('touchstartoutside mousedownoutside keydownoutside', function t() {
                      a.animate({ marginTop: d.NOTIFICATION_ANIMATION_START_OFFSET, opacity: 0 }, 'fast', function () {
                        a.hide()
                      }),
                        a.off('touchstartoutside mousedownoutside keydownoutside', t)
                    }))
          },
          isOpen: function (t) {
            for (var e = 0; e < d.dialogs.length; e++) if (d.dialogs[e].title === t) return !0
            return !1
          },
          get: function (t) {
            for (var e = 0; e < d.dialogs.length; e++) if (d.dialogs[e].title === t) return d.dialogs[e].dialog
          },
          destroy: function (t, e) {
            var o = null
            if (t && 'string' == typeof t)
              for (var i = 0; i < d.dialogs.length; i++)
                d.dialogs[i].title === t &&
                  ((o = d.dialogs[i].dialog.prop('ownerDocument')),
                  d.dialogs[i].dialog.find('.apply-common-tooltip').mouseout(),
                  d.dialogs[i].dialog.trigger('destroy', e),
                  $(document).unbind('mouseup.hideDialog' + d.dialogs[i].id),
                  $('input', d.dialogs[i].dialog).blur(),
                  d.dialogs[i].dialog.remove(),
                  d.dialogs.splice(i, 1),
                  s(o).unregisterWindow(t))
            else
              d.modalDialog &&
                ((o = d.modalDialog.prop('ownerDocument')),
                d.modalDialog.find('.apply-common-tooltip').mouseout(),
                d.modalDialog.find('._tv-dialog').trigger('destroy'),
                d.modalDialog.remove(),
                (d.modalDialog = null))
            $(o).unbind('keyup.hideDialog'), $(o).unbind('keyup.confirmAndCloseDialog')
          },
          resizeContent: function (t, e, o) {
            null == o && (o = 20), (t += o)
            var i = parseInt($('body').height(), 10),
              a = e.height()
            t > i && ((a -= t - i), (a = Math.max(0, a)), e.height(a))
          },
        }
        t.exports.TVOldDialogs = d
      }.call(this, o('Kxc7'), o('nbsC')))
    },
    PVgW: function (t, e, o) {
      'use strict'
      o.r(e)
      o('P5fv'), o('si6p')
      var i = o('ogJP'),
        a = o('R4+T')
      function n(t) {
        return (
          (t = Math.abs(t)),
          !Object(i.isInteger)(t) && t > 1 && (t = parseFloat(t.toString().replace(/^.+\./, '0.'))),
          0 < t && t < 1
            ? Math.pow(
                10,
                (function (t) {
                  const e = String(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
                  if (null === e) return 0
                  const o = e[1] ? e[1].length : 0,
                    i = e[2] ? parseInt(e[2], 0) : 0
                  return Math.max(0, o - i)
                })(t)
              )
            : 1
        )
      }
      function s(t, e) {
        t.trigger('tvticker-beforechange')
        const o = t.data('TVTicker'),
          a = o && o.step
        let s = 0
        ;(s = o.parser ? o.parser(t.val()) : Object(i.isInteger)(a) ? parseInt(t.val(), 10) : parseFloat(t.val())),
          isNaN(s) && (s = 0)
        const d = n(a)
        let l = e(s, Math.max(d, n(s)))
        o.formatter && (l = o.formatter(l)), t.val(l), t.change()
      }
      function d(t) {
        const e = t.data('TVTicker'),
          o = e && e.step,
          i = e && e.max
        s(t, (t, e) => {
          let a = (Math.round(t * e) + Math.round(o * e)) / e
          return null != i && i < a && (a = t), a
        })
      }
      function l(t) {
        const e = t.data('TVTicker'),
          o = e && e.step,
          i = e && e.min
        s(t, (t, e) => {
          let a = (Math.round(t * e) - Math.round(o * e)) / e
          return null != i && a < i && (a = t), a
        })
      }
      $.fn.TVTicker = function (t = {}) {
        return this.each(function () {
          let e = !1
          const o = $(this)
          let i = o.data('TVTicker')
          if (
            (i ? (e = !0) : (i = { step: Number(o.data('step')) || 1 }),
            'step' in t && (i.step = Number(t.step) || i.step),
            'min' in t && (i.min = t.min),
            'max' in t && (i.max = t.max),
            'formatter' in t && (i.formatter = t.formatter),
            'parser' in t && (i.parser = t.parser),
            o.data('TVTicker', i),
            e)
          )
            return
          const n = $('<div class="tv-ticker">').appendTo(o.parent()),
            s = $('<div class="tv-ticker__btn tv-ticker__btn--up">').html(a).appendTo(n),
            r = $('<div class="tv-ticker__btn tv-ticker__btn--down">').html(a).appendTo(n)
          n.on('mousedown', (t) => {
            t.preventDefault(), o.focus()
          }),
            s.click(() => {
              o.is(':disabled') || d(o)
            }),
            r.click(() => {
              o.is(':disabled') || l(o)
            }),
            o.keydown((t) => {
              o.is(':disabled') ||
                (38 === t.keyCode ? s.addClass('i-active') : 40 === t.keyCode && r.addClass('i-active'))
            }),
            o.keyup((t) => {
              o.is(':disabled') ||
                (38 === t.keyCode
                  ? (d(o), s.removeClass('i-active'))
                  : 40 === t.keyCode && (l(o), r.removeClass('i-active')))
            }),
            o.mousewheel((t) => {
              t.deltaY * (t.deltaFactor / 100) > 0 ? s.click() : r.click()
            })
        })
      }
    },
    'R4+T': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    },
    jAh7: function (t, e, o) {
      'use strict'
      o.r(e),
        o.d(e, 'OverlapManager', function () {
          return n
        }),
        o.d(e, 'getRootOverlapManager', function () {
          return d
        })
      var i = o('Eyy1')
      class a {
        constructor() {
          this._storage = []
        }
        add(t) {
          this._storage.push(t)
        }
        remove(t) {
          this._storage = this._storage.filter((e) => t !== e)
        }
        has(t) {
          return this._storage.includes(t)
        }
        getItems() {
          return this._storage
        }
      }
      class n {
        constructor(t = document) {
          ;(this._storage = new a()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = t),
            (this._container = t.createDocumentFragment())
        }
        setContainer(t) {
          const e = this._container,
            o = null === t ? this._document.createDocumentFragment() : t
          !(function (t, e) {
            Array.from(t.childNodes).forEach((t) => {
              t.nodeType === Node.ELEMENT_NODE && e.appendChild(t)
            })
          })(e, o),
            (this._container = o)
        }
        registerWindow(t) {
          this._storage.has(t) || this._storage.add(t)
        }
        ensureWindow(t, e = { position: 'fixed', direction: 'normal' }) {
          const o = this._windows.get(t)
          if (void 0 !== o) return o
          this.registerWindow(t)
          const i = this._document.createElement('div')
          if (
            ((i.style.position = e.position),
            (i.style.zIndex = this._index.toString()),
            (i.dataset.id = t),
            void 0 !== e.index)
          ) {
            const t = this._container.childNodes.length
            if (e.index >= t) this._container.appendChild(i)
            else if (e.index <= 0) this._container.insertBefore(i, this._container.firstChild)
            else {
              const t = this._container.childNodes[e.index]
              this._container.insertBefore(i, t)
            }
          } else
            'reverse' === e.direction
              ? this._container.insertBefore(i, this._container.firstChild)
              : this._container.appendChild(i)
          return this._windows.set(t, i), ++this._index, i
        }
        unregisterWindow(t) {
          this._storage.remove(t)
          const e = this._windows.get(t)
          void 0 !== e && (null !== e.parentElement && e.parentElement.removeChild(e), this._windows.delete(t))
        }
        getZindex(t) {
          const e = this.ensureWindow(t)
          return parseInt(e.style.zIndex || '0')
        }
        moveToTop(t) {
          if (this.getZindex(t) !== this._index) {
            this.ensureWindow(t).style.zIndex = (++this._index).toString()
          }
        }
        removeWindow(t) {
          this.unregisterWindow(t)
        }
      }
      const s = new WeakMap()
      function d(t = document) {
        const e = t.getElementById('overlap-manager-root')
        if (null !== e) return Object(i.ensureDefined)(s.get(e))
        {
          const e = new n(t),
            o = (function (t) {
              const e = t.createElement('div')
              return (
                (e.style.position = 'absolute'),
                (e.style.zIndex = (150).toString()),
                (e.style.top = '0px'),
                (e.style.left = '0px'),
                (e.id = 'overlap-manager-root'),
                e
              )
            })(t)
          return s.set(o, e), e.setContainer(o), t.body.appendChild(o), e
        }
      }
    },
    'y1L/': function (t, e, o) {},
    zjLg: function (t, e, o) {},
  },
])
