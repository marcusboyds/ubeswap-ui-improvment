;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['show-theme-save-dialog'],
  {
    KeOl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'showThemeSaveDialog', function () {
          return i
        })
      var o = n('YFKU'),
        a = n('fZEr'),
        s = n('EsvI'),
        c = n('JWMC')
      function i(e, t) {
        function n(n) {
          Object(s.saveTheme)(n, e).then(() => {
            t && t(n)
          }),
            Object(c.trackEvent)('GUI', 'Themes', 'Save custom theme')
        }
        Object(a.b)({
          title: Object(o.t)('Save Theme As'),
          text: Object(o.t)('Theme name') + ':',
          maxLength: 128,
          onRename: ({ newValue: e, focusInput: t, dialogClose: c, innerManager: i }) =>
            new Promise((m) => {
              Object(s.isThemeExist)(e).then((s) => {
                if (s) {
                  const s = Object(o.t)(
                    "Color Theme '__themeName__' already exists. Do you really want to replace it?",
                    { themeName: e }
                  )
                  Object(a.a)(
                    {
                      text: s,
                      onConfirm: ({ dialogClose: t }) => {
                        n(e), t(), c()
                      },
                      onClose: t,
                    },
                    i
                  ).then(() => {
                    m()
                  })
                } else n(e), m(), c()
              })
            }),
        })
      }
    },
  },
])
