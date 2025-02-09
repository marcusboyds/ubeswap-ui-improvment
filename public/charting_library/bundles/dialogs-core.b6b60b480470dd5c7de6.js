;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['dialogs-core'],
  {
    '6aJD': function (t, s, i) {
      'use strict'
      var e = i('APlX')
      i.d(s, 'a', function () {
        return e.TVModal
      })
    },
    APlX: function (t, s, i) {
      'use strict'
      ;(function (t) {
        Object.defineProperty(s, '__esModule', { value: !0 }), (s.TVModal = void 0)
        var e =
          Object.assign ||
          function (t) {
            for (var s = 1; s < arguments.length; s++) {
              var i = arguments[s]
              for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e])
            }
            return t
          }
        s.isOpenedModals = function () {
          return 0 !== p.length
        }
        var o = c(i('9uLv')),
          n = i('qFKp'),
          a = i('Nkvk'),
          r = i('KHon'),
          l = i('c2JX'),
          h = c(i('6et/')),
          d = c(i('lxNp'))
        function c(t) {
          if (t && t.__esModule) return t
          var s = {}
          if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
          return (s.default = t), s
        }
        let p = []
        const u = {
          ajax: {},
          closingDuration: o.dur / 2,
          fixBodyState: !0,
          overlayTemplate: '<div class="tv-dialog__overlay"></div>',
          containerTemplate:
            '<div class="tv-dialog__modal-wrap"><div class="tv-dialog__modal-container"><div class="tv-dialog__modal-body"></div></div></div>',
          ajaxErrorTemplate: `<div class="tv-dialog__error js-dialog__close">${window.t('Error')}</div>`,
        }
        class g extends r.TVDialogAbstract {
          constructor(t = {}) {
            if (
              (super(e({}, u, t)),
              (this.$overlay = $(this.options.overlayTemplate)),
              (this.$modalWrap = $(this.options.containerTemplate)),
              (this.$body = this.$modalWrap.find('.tv-dialog__modal-body').append(this.$el)),
              this.options.closeOnOutsideClick &&
                this.$overlay.add(this.$modalWrap).click((t) => {
                  this.isEventOut(t) && this.close()
                }),
              this.on('change:zIndex', () => {
                this.$overlay.css('z-index', this.zIndex), this.$modalWrap.css('z-index', this.zIndex)
              }),
              this.on('destroy', () => {
                const t = () => {
                  this.$overlay.remove(), this.$modalWrap.remove()
                }
                this.opened ? (this.close(), setTimeout(t, this.options.closingDuration)) : t()
              }),
              this.on('beforeOpen', () => {
                p.push(this)
              }),
              this.options.ajax.url)
            ) {
              const t = this.options.ajax.beforeSend || $.noop,
                s = this.options.ajax.success || !1,
                i = this.options.ajax.error || $.noop
              $.extend(this.options.ajax, {
                beforeSend: () => {
                  this.trigger('beforeLoading', [this]), this.startSpinner(), t(this)
                },
                success: (t) => {
                  this.trigger('afterLoading', [this]),
                    this.renderContent(s ? s(this, t) : t).showContent(),
                    this.trigger('afterLoadingShow', [this])
                },
                error: () => {
                  this.renderContent(this.options.ajaxErrorTemplate), i(this), this.trigger('errorLoading', [this])
                },
              })
            }
            this.on('error', (t, s) => {
              this.$modalWrap[0].getBoundingClientRect().height < this.$content[0].getBoundingClientRect().height &&
                s.addClass('i-fixed').css({ width: this.$el.width() })
            }),
              (this._keyboardBinderLockId = null)
          }
          open() {
            if (this.opened) return
            ;(this.opened = !0),
              (this._keyboardBinderLockId = h.disable()),
              this.options.fixBodyState && (0, a.setFixedBodyState)(!0),
              this._hotkeys ||
                ((this._hotkeys = d.createGroup({ desc: 'Modal Dialog', isDisabled: () => !this.opened, modal: !0 })),
                this.options.closeOnEsc &&
                  this._hotkeys.add({ desc: 'close', hotkey: 27, handler: () => this.close() }))
            const t = () => {
              this.focus(),
                this.toTop(),
                this.trigger('beforeOpen', [this]),
                $(this.$wrap)
                  .append(this.$overlay.addClass('i-hidden i-closed').css('z-index', this.zIndex))
                  .append(this.$modalWrap.addClass('i-hidden i-closed').css('z-index', this.zIndex)),
                this.$overlay.removeClass('i-hidden'),
                setTimeout(() => {
                  this.$overlay.removeClass('i-closed')
                }, 20),
                this.options.ajax.url ? (this.ajaxRequest = $.ajax(this.options.ajax)) : this.showContent()
            }
            return n.isSafari ? setTimeout(() => t(), 50) : t(), this
          }
          close() {
            if (this.opened)
              return (
                (this.opened = !1),
                this._keyboardBinderLockId && h.enable(this._keyboardBinderLockId),
                this._hotkeys && (this._hotkeys.destroy(), (this._hotkeys = null)),
                this.trigger('beforeClose', [this]),
                this.ajaxRequest && (this.ajaxRequest.abort(), delete this.ajaxRequest),
                this.hideContent(),
                this.$overlay.addClass('i-closed'),
                setTimeout(() => {
                  this.$modalWrap.addClass('i-hidden').detach(),
                    this.$overlay.addClass('i-hidden').detach(),
                    (p = t.without(p, this)),
                    this.options.fixBodyState && (0, a.setFixedBodyState)(!1),
                    this.trigger('afterClose', [this]),
                    this.unfocus(),
                    p.length > 0 && p[p.length - 1].focus(),
                    this.options.destroyOnClose && this.destroy()
                }, this.options.closingDuration),
                this
              )
          }
          showContent() {
            return (
              this.$modalWrap.removeClass('i-hidden'),
              setTimeout(() => {
                this.$modalWrap.removeClass('i-closed')
              }, 20),
              setTimeout(() => {
                this.trigger('afterOpen', [this]), this.spinner && this.stopSpinner()
              }, 0.75 * o.dur + 20),
              this
            )
          }
          hideContent() {
            if (this.$el) return this.$modalWrap.addClass('i-closed'), this.unfocus(), this
          }
          startSpinner() {
            return (this.spinner = new l.Spinner('large')), this.spinner.spin(this.$overlay[0]), this
          }
          stopSpinner() {
            if (this.spinner) return this.spinner.stop(), delete this.spinner, this
          }
        }
        s.TVModal = g
      }.call(this, i('F/us')))
    },
    KHon: function (t, s, i) {
      'use strict'
      i.r(s)
      var e = i('v2PZ')
      i.d(s, 'TVDialogAbstract', function () {
        return e.TVDialogAbstract
      }),
        i.d(s, 'closeAllDialogs', function () {
          return e.closeAllDialogs
        })
    },
    PzOn: function (t, s, i) {
      'use strict'
      i.r(s),
        i.d(s, 'buttonLoader', function () {
          return n
        }),
        i.d(s, 'ButtonLoader', function () {
          return a
        })
      i('IwoD')
      var e = i('IWoC'),
        o = i('9uLv')
      function n(t) {
        return new a($(t))
      }
      $.fn.tvButtonLoader = Object(e.createTvBlockWithInstance)('tv-button-loader', function (t) {
        return new a(t)
      })
      class a {
        constructor(t) {
          ;(this.$btn = $(t).addClass('tv-button--loader')),
            0 === this.$btn.find('.tv-button__loader').length &&
              this.$btn.html(
                '<span class="tv-button__text">' +
                  this.$btn.html() +
                  '</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span>'
              ),
            (this.loading = this.$btn.hasClass('i-loading'))
        }
        _start() {
          ;(this.starting = !0),
            this.$btn.addClass('i-start-load'),
            this.$btn.trigger('tv-button-loader:start'),
            setTimeout(() => {
              ;(this.loading = !0),
                (this.starting = !1),
                (this._startPromise = !1),
                this.$btn.addClass('i-loading'),
                this.$btn.removeClass('i-start-load'),
                this._stopPromise && this._stop()
            }, 2 * o.dur)
        }
        start() {
          this.starting || (this.stopping ? (this._startPromise = !0) : this._start())
        }
        _stop() {
          ;(this.stopping = !0),
            this.$btn.addClass('i-stop-load'),
            this.$btn.trigger('tv-button-loader:stop'),
            setTimeout(() => {
              ;(this.loading = !1),
                (this.stopping = !1),
                (this._stopPromise = !1),
                this.$btn.removeClass('i-loading i-start-load i-stop-load'),
                this._startPromise && this._start()
            }, o.dur)
        }
        stop() {
          this.stopping || (this.starting ? (this._stopPromise = !0) : this._stop())
        }
        toggle() {
          this.loading ? this.stop() : this.start()
        }
        contentHtml(t) {
          return t ? (this.$btn.find('.tv-button__text').html(t), t) : this.$btn.find('.tv-button__text').html()
        }
        contentNojQuery() {
          return this.$btn.get(0)
        }
        disable() {
          this.stop(), this.$btn.addClass('i-disabled')
        }
        enable() {
          this.$btn.removeClass('i-disabled')
        }
      }
    },
    nZrM: function (t, s, i) {},
    nbyR: function (t, s, i) {
      'use strict'
      Object.defineProperty(s, '__esModule', { value: !0 }), (s.TVPopup = void 0)
      var e =
          Object.assign ||
          function (t) {
            for (var s = 1; s < arguments.length; s++) {
              var i = arguments[s]
              for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e])
            }
            return t
          },
        o = d(i('9uLv')),
        n = i('Nkvk'),
        a = i('KHon'),
        r = i('sFgq'),
        l = i('A6WY'),
        h = d(i('lxNp'))
      function d(t) {
        if (t && t.__esModule) return t
        var s = {}
        if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
        return (s.default = t), s
      }
      const c = $('body'),
        p = $(window),
        u = {
          closeOnClickAtOtherDialogs: !0,
          draggable: !0,
          scrollWrap: '<div class="tv-dialog__scroll-wrap">',
          scrollWrapInner: '<div class="tv-dialog__scroll-wrap-inner">',
          withScroll: !0,
        }
      class g extends a.TVDialogAbstract {
        constructor(t = {}) {
          super(e({}, u, t)),
            (this.$scrollWrap = this.$content.hasClass('js-dialog__scroll-wrap')
              ? this.$content
              : this.$content.find('.js-dialog__scroll-wrap')),
            this.$scrollWrap.length
              ? (this.$scrollWrapInner = this.$scrollWrap.children().first())
              : ((this.$scrollWrap = this.$content.wrap($(this.options.scrollWrap)).parent()),
                (this.$scrollWrapInner = this.$content.wrap($(this.options.scrollWrapInner)).parent())),
            this.$actions && this.$scrollWrap.addClass('i-with-actions'),
            this.options.withScroll &&
              ((this.scroll = new r.SidebarCustomScroll(this.$scrollWrap, this.$scrollWrapInner)),
              this.scroll.scrolled.subscribe(null, () => this.trigger('scroll'))),
            this.$scrollWrap.css('overflow', '')
          const s = this.getDialogId()
          this.$el.addClass('tv-dialog--popup i-closed i-hidden'),
            this.options.width && this.$el.css({ width: 'calc(100% - 20px)', 'max-width': this.options.width }),
            (this._hotkeys = h.createGroup({ desc: 'Dialog', isDisabled: () => !this.opened, modal: !1 })),
            this.options.closeOnEsc && this._hotkeys.add({ desc: 'Close', hotkey: 27, handler: () => this.close() }),
            this.$el.on('mousedown touchstart', this.toTop.bind(this)),
            this.options.closeOnOutsideClick &&
              ((this._preventClick = !0),
              this.on('beforeOpen', () => {
                setTimeout(() => {
                  this.opened &&
                    ($(document).on('mousedown touchstart', () => {
                      this._preventClick = !1
                    }),
                    $(document).on('click.tv-popup-' + s, (t) => {
                      if (this._preventClick) return
                      const s = $(t.target).closest('.js-dialog')
                      ;(this.options.closeOnClickAtOtherDialogs || 0 === s.length) && this.isEventOut(t) && this.close()
                    }))
                }, 0)
              }),
              this.on('beforeClose', () => $(document).off('click.tv-popup-' + s))),
            this.on('change:zIndex', () => {
              this.$el.css('z-index', this.zIndex)
            }),
            this.on('destroy', () => {
              const t = () => {
                this.$el.remove(), this._hotkeys.destroy()
              }
              this.opened ? (this.close(), setTimeout(t, o.dur / 2)) : t()
            })
        }
        open() {
          return (
            this.opened ||
              ((this.opened = !0),
              this.trigger('beforeOpen', [this]),
              this.$el
                .appendTo(this.$wrap)
                .removeClass('i-hidden')
                .css(
                  (() => {
                    this.calcHeight()
                    const t = p.height(),
                      s = p.width(),
                      i = this.$el.height(),
                      e = this.$el.width()
                    let o = this.options.position
                    return (
                      o || (o = { top: t / 2 - i / 2, left: s / 2 - e / 2 }),
                      o.top > t - i && (o.top = t - i),
                      o.left > s - e && (o.left = s - e),
                      o.top < 10 && (o.top = 10),
                      o.left < 10 && (o.left = 10),
                      o
                    )
                  })()
                ),
              this.focus(),
              this.toTop(),
              this._doOpenAnimation().then(() => {
                this.opened &&
                  (this.$el.removeClass('i-closed'),
                  this.options.draggable &&
                    ((0, l.lazyJqueryUI)(this.$el).draggable({
                      handle: '.js-dialog__drag',
                      cancel: 'input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close',
                      containment: 'window',
                      cursor: '-webkit-grabbing',
                      stop: (t, s) => {
                        this.trigger('dragEnd', [this])
                      },
                    }),
                    this.$el.find('.js-dialog__drag').addClass('tv-dialog__grab')),
                  this.trigger('afterOpen', [this]))
              }),
              p.on('resize.tv-popup-' + this.getDialogId(), () => {
                this.calcHeight(), this.fixPos()
              })),
            this
          )
        }
        close() {
          if (this.opened)
            return (
              this.trigger('beforeClose', [this]),
              this.$el.addClass('i-closed'),
              (this.opened = !1),
              this._doCloseAnimation().then(() => {
                this.opened ||
                  ((0, l.lazyJqueryUI)(this.$el)
                    .draggable('instance')
                    .then((t) => {
                      t && t.destroy()
                    }),
                  this.$el.addClass('i-hidden').detach(),
                  c.css('cursor', 'auto'),
                  this.trigger('afterClose', [this]),
                  this.options.destroyOnClose && this.destroy())
              }),
              p.off('resize.tv-popup-' + this.getDialogId()),
              this
            )
        }
        hide() {
          this.$el.addClass('i-hidden')
        }
        show() {
          this.$el.removeClass('i-hidden')
        }
        fixPos() {
          const t = this.$el[0].getBoundingClientRect(),
            s = {}
          t.bottom > n.mediaState.height - 10 &&
            ((s.top = n.mediaState.height - 10 - t.height), s.top < 10 && (s.top = 10)),
            t.right > n.mediaState.width - 10 &&
              ((s.left = n.mediaState.width - 10 - t.width), s.left < 10 && (s.left = 10)),
            (s.top || s.left) && this.$el.css(s)
        }
        calcHeight() {
          const t = this.$el[0].getBoundingClientRect(),
            s = this.$scrollWrapInner[0].getBoundingClientRect(),
            i = this.$scrollWrap[0].getBoundingClientRect()
          let e =
            this.options.height && this.options.height < n.mediaState.height - 20
              ? this.options.height
              : n.mediaState.height - 20
          this.$scrollWrap.css({ height: '' }).removeClass('i-scrollable')
          const o = this.$el[0].getBoundingClientRect()
          ;(this.options.height || o.height > e) &&
            ((e -= t.height - i.height), e < 60 && (e = 60), this.$scrollWrap.css({ height: e })),
            this.options.withScroll && this.scroll.resize()
          const a = e < s.height
          a || this.$scrollWrapInner.css('top', 0),
            this.$scrollWrap.toggleClass('i-scrollable', a),
            this.$actions && this.$actions.toggleClass('tv-dialog__section--actions_with-border', a)
        }
        updateScroll() {
          this.scroll && (this.scroll.updateScroll(), this.scroll.updateScrollBar())
        }
        scrollToStart() {
          this.scroll && this.scroll.scrollToStart()
        }
        _doOpenAnimation() {
          return Promise.resolve()
        }
        _doCloseAnimation() {
          return Promise.resolve()
        }
      }
      s.TVPopup = g
    },
    tKRU: function (t, s, i) {
      'use strict'
      var e = i('nbyR')
      i.d(s, 'a', function () {
        return e.TVPopup
      })
    },
    v2PZ: function (t, s, i) {
      'use strict'
      ;(function (t, e) {
        Object.defineProperty(s, '__esModule', { value: !0 }), (s.TVDialogAbstract = void 0)
        var o =
          Object.assign ||
          function (t) {
            for (var s = 1; s < arguments.length; s++) {
              var i = arguments[s]
              for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e])
            }
            return t
          }
        s.closeAllDialogs = function () {
          p.forEach((t) => t.close())
        }
        var n = (function (t) {
          if (t && t.__esModule) return t
          var s = {}
          if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i])
          return (s.default = t), s
        })(i('9uLv'))
        i('PzOn')
        var a = h(i('QwKQ'))
        i('nZrM'), i('nec0'), i('IwoD')
        var r = h(i('4O8T')),
          l = i('jAh7')
        function h(t) {
          return t && t.__esModule ? t : { default: t }
        }
        let d,
          c = 0,
          p = []
        const u = $(document),
          g = {
            closeOnEsc: !0,
            closeButton: !0,
            focusFirstControl: !0,
            closeOnOutsideClick: !0,
            closeButtonAddClass: '',
            focusClass: 'i-focused',
            template: '<div class="tv-dialog" tabindex="-1">',
            errorTemplate:
              '<div class="tv-dialog__error i-slided{{# errorMod }} tv-dialog__error--{{ errorMod }}{{/ errorMod }}">{{{ error }}}</div>',
            titleTemplate:
              '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag"><div class="js-title-text tv-dialog__title">{{{ title }}}</div></div>',
            contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border">',
            actionsWrapTemplate:
              '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
            closeButtonTemplate: `<div class="tv-dialog__close js-dialog__close">${i('uo4K')}</div>`,
            helpButtonTemplate:
              '<a href="{{{ link }}}" target="_blank" class="tv-dialog__help apply-common-tooltip" title="{{{ title }}}"></a>',
            helpActionsMod: 'tv-dialog__section--actions_with-help',
          },
          f = {
            default: 'tv-button tv-button--default',
            primary: 'tv-button tv-button--primary',
            success: 'tv-button tv-button--success',
            danger: 'tv-button tv-button--danger',
            warning: 'tv-button tv-button--warning',
            link: 'tv-button tv-button--link',
            checkbox: 'tv-control-checkbox tv-control-checkbox--in-actions',
            'default-ghost': 'tv-button tv-button--default_ghost',
            'primary-ghost': 'tv-button tv-button--primary_ghost',
            'success-ghost': 'tv-button tv-button--success_ghost',
            'danger-ghost': 'tv-button tv-button--danger_ghost',
            'warning-ghost': 'tv-button tv-button--warning_ghost',
          },
          v = {
            _default:
              '<div data-name="{{ name }}" class="js-dialog__action-click js-dialog__no-drag {{ class }}">{{ text }}</div>',
            'submit-primary': '<button type="submit" class="tv-button tv-button--primary">{{ text }}</button>',
            'submit-success': '<button type="submit" class="tv-button tv-button--success">{{ text }}</button>',
          }
        class _ extends r.default {
          constructor(s = {}) {
            if (
              (super(),
              (this.manager = s.manager || (0, l.getRootOverlapManager)(s.ownerDocument)),
              (this._id = c++),
              (this.loadingActions = []),
              (this.disabledActions = []),
              (this.firstFocusControl = null),
              (this.options = o({}, g, s)),
              (this.$el = $(
                t.render(this.options.template, { title: this.options.title, closeButton: this.options.closeButton })
              )),
              this.$el.addClass('js-dialog'),
              (this.el = this.$el[0]),
              this.options.dataset)
            )
              for (const [t, i] of Object.entries(this.options.dataset))
                'string' == typeof i && this.el.setAttribute('data-' + t, i)
            for (
              this.options.addClass && this.$el.addClass(this.options.addClass),
                this.options.width && this.$el.css({ width: '100%', 'max-width': this.options.width }),
                this.on('beforeOpen', () => {
                  this.$wrap = this.manager.ensureWindow(this._id)
                }),
                this.on('afterClose', () => {
                  ;(this.$wrap = null), this.manager.unregisterWindow(this._id)
                }),
                this.options.title &&
                  (this.$title = $(t.render(this.options.titleTemplate, { title: this.options.title })).appendTo(
                    this.$el
                  )),
                this.$content = $(this.options.contentWrapTemplate).appendTo(this.$el),
                this.$contentIn = this.$content;
              this.$contentIn.length;

            )
              this.$contentIn = this.$contentIn.children()
            if (
              ((this.$contentIn = this.$contentIn.end()),
              this.options.content && this.renderContent(this.options.content),
              (this.options.actions || this.options.help) &&
                (this.$content.hasClass('tv-dialog__section') &&
                  this.$content.addClass('tv-dialog__section--no-padding_bottom'),
                (this.$actions = $(this.options.actionsWrapTemplate).appendTo(this.$el))),
              this.options.actions)
            ) {
              ;(this.actions = {}),
                this.$el.on('click touchend', '.js-dialog__action-click', (t) => {
                  t.preventDefault(), this.actionDispatcher($(t.currentTarget).data('name'))
                })
              for (let s = this.options.actions.length - 1; s >= 0; s--) {
                const i = this.options.actions[s]
                if (
                  (i.type || (i.type = 'default'),
                  i.class || (i.class = f[i.type] ? f[i.type] : f.default),
                  'checkbox' === i.type)
                ) {
                  const t = new a.default({ labelRight: i.text, name: i.name, checked: i.checked })
                  ;(this.actions[i.name] = t.$el.appendTo(this.$actions)),
                    this.actions[i.name].on('change', () => {
                      setTimeout(() => this.actionDispatcher(i.name, t.checked))
                    })
                } else
                  this.actions[i.name] = $(t.render(i.template ? i.template : v[i.type] || v._default, i, i)).appendTo(
                    this.$actions
                  )
                if (
                  (i.method &&
                    'function' == typeof this[i.method] &&
                    this.on('action:' + i.name, this[i.method].bind(this)),
                  i.addClass && this.actions[i.name].addClass(i.addClass),
                  i.key)
                ) {
                  let t
                  if ('string' == typeof i.key && i.key.split('+').length > 1) {
                    let s = []
                    const e = i.key.split('+')
                    t = (t) => {
                      s = []
                    }
                    const o = (t) => {
                      const o = '' + t.keyCode
                      ;-1 !== e.indexOf(o) && s.indexOf(o) && s.push(o),
                        this._focused && s.length === e.length && ((s = []), this.actionDispatcher(i.name))
                    }
                    this.on('afterOpen', () => {
                      u.on('keydown', o), u.on('keyup', t)
                    }),
                      this.on('beforeClose', () => {
                        u.off('keydown', o), u.off('keyup', t)
                      })
                  } else {
                    const s = $.isArray(i.key) ? i.key : [i.key]
                    ;(t = (t) => {
                      !t.isDefaultPrevented() &&
                        this._focused &&
                        -1 !== s.indexOf(t.keyCode) &&
                        this.actionDispatcher(i.name)
                    }),
                      this.on('afterOpen', () => u.on('keyup', t)),
                      this.on('beforeClose', () => u.off('keyup', t))
                  }
                }
              }
            }
            if (
              (this.options.help &&
                $(t.render(this.options.helpButtonTemplate, this.options.help)).prependTo(
                  this.$actions.addClass(this.options.helpActionsMod)
                ),
              this.options.closeButton)
            ) {
              const t = $(this.options.closeButtonTemplate)
              t.addClass(this.options.closeButtonAddClass || '')
              let s = this.$el
              1 === this.$el.find('.js-close-button-place').length && (s = this.$el.find('.js-close-button-place')),
                t.appendTo(s)
            }
            this.setZIndex(110 + p.length),
              s.errorMod && (this.errorMod = s.errorMod),
              this.on('afterOpen', () => {
                this.$el.focus(),
                  this.options.focusFirstControl &&
                    !Modernizr.mobiletouch &&
                    (this.firstFocusControl || this.$el.find('input:not([type="hidden"]), textarea').first()).focus()
              }),
              this.$el.on('click', '.js-dialog__close', this.close.bind(this)),
              this.$el.on('mousedown touchstart', this.focus.bind(this)),
              p.push(this)
          }
          renderContent(t) {
            return this.$contentIn.html('function' == typeof t ? t(this) : t), this
          }
          setDestroyOnClose(t) {
            this.options.destroyOnClose = t
          }
          setZIndex(t) {
            return (this.zIndex = t), this.trigger('change:zIndex', [this]), this
          }
          toTop() {
            for (let t = p.length - 1; t >= 0; t--) p[t].zIndex > this.zIndex && p[t].setZIndex(p[t].zIndex - 1)
            return (
              this.setZIndex(110 + p.length),
              this.manager.moveToTop(this._id),
              this._hotkeys && this._hotkeys.promote(),
              this
            )
          }
          isEventOut(t) {
            if (this.options.isClickOutFn) {
              const s = this.options.isClickOutFn(t)
              if (void 0 !== s) return s
            }
            let s = !0
            const i = $(t.target)
            return (
              i.get(0) !== this.$el.get(0) &&
              ($('>*', this.$el).each(function () {
                i.get(0) === $(this).get(0) && (s = !1), 0 === i.closest('HTML', $(this).get(0)).length && (s = !1)
              }),
              s)
            )
          }
          focus() {
            d && d !== this && d.unfocus(),
              this._setFocused(),
              (this._focused = !0),
              this.$el.addClass(this.options.focusClass),
              this.trigger('focus', [this]),
              setTimeout(() => {
                u.on('mousedown.tv-dialog-unfocus-' + this._id, (t) => {
                  this.isEventOut(t) && (this.unfocus(), u.off('mousedown.tv-dialog-unfocus-' + this._id))
                })
              }, 20)
          }
          _setFocused() {
            d !== this && (d = this)
          }
          _setUnfocused() {
            d === this && (d = void 0)
          }
          unfocus() {
            d === this &&
              (this._setUnfocused(),
              (this._focused = !1),
              this.$el.removeClass(this.options.focusClass).find(':focus').blur(),
              this.trigger('unfocus', [this]))
          }
          isFocused() {
            return this._focused
          }
          setTitle(t, s = !1) {
            return (
              this.$title.toggleClass('tv-dialog__section--one-line apply-overflow-tooltip', s),
              this.$title.html(t),
              this
            )
          }
          setTitleText(t) {
            this.$title.find('.js-title-text').text(t)
          }
          actionDispatcher(t, ...s) {
            this.disabledActions.includes(t) ||
              this.loadingActions.includes(t) ||
              this.trigger('action:' + t, [this, ...s])
          }
          toggleAction(t, s) {
            return (
              s || this.disabledActions.includes(t)
                ? s && this.disabledActions.includes(t) && (this.disabledActions = e.without(this.disabledActions, t))
                : this.disabledActions.push(t),
              this.actions[t].toggleClass('i-disabled', !s),
              this
            )
          }
          actionLoader(t, s = 'init') {
            return (
              this.actions[t].tvButtonLoader(s),
              'init' === s &&
                (this.actions[t]
                  .off('tv-button-loader:start.dialog-action')
                  .on('tv-button-loader:start.dialog-action', () => {
                    this.loadingActions.push(t)
                  }),
                this.actions[t]
                  .off('tv-button-loader:stop.dialog-action')
                  .on('tv-button-loader:stop.dialog-action', () => {
                    this.loadingActions = e.without(this.loadingActions, t)
                  })),
              this
            )
          }
          error(s) {
            const i = $(t.render(this.options.errorTemplate, { error: s, errorMod: this.errorMod })).appendTo(this.$el)
            return (
              setTimeout(() => i.removeClass('i-slided'), 20),
              u.one('touchstart mousedown keydown', () => {
                i.addClass('i-slided'), setTimeout(() => i.remove(), 0.75 * n.dur)
              }),
              this.trigger('error', [this, i]),
              this
            )
          }
          destroy() {
            ;(this.$wrap = null),
              this.manager.unregisterWindow(this._id),
              this._hotkeys && this._hotkeys.destroy(),
              (p = e.without(p, this))
            for (let t = 0; t < p.length; t++) p[t].setZIndex(110 + t)
            this.trigger('destroy', [this])
          }
          isOpened() {
            return Boolean(this.opened)
          }
          getDialogId() {
            return this._id
          }
        }
        s.TVDialogAbstract = _
      }.call(this, i('nbsC'), i('F/us')))
    },
  },
])
