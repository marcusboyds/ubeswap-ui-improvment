;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['custom-intervals-add-dialog'],
  {
    Qhte: function (e, t, n) {
      e.exports = {
        scrollable: 'scrollable-FNPZI_Xo',
        content: 'content-FNPZI_Xo',
        row: 'row-FNPZI_Xo',
        title: 'title-FNPZI_Xo',
        control: 'control-FNPZI_Xo',
      }
    },
    w9vS: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolWidgetIntervalsAddDialog', function () {
          return v
        })
      var a = n('q1tI'),
        o = n.n(a),
        c = n('YFKU'),
        l = n('ycFu'),
        s = n('PECq'),
        r = n('wHCJ'),
        i = n('tWVy'),
        m = n('tmL0'),
        u = n('cSDC'),
        d = n('Qhte')
      const b = u.a.map((e) => ({ value: e.name, content: e.label }))
      function v(e) {
        const { onAdd: t, onClose: n, onUnmount: v } = e,
          [N, f] = Object(a.useState)(u.a[0].name),
          [w, E] = Object(a.useState)('1')
        return (
          Object(a.useEffect)(
            () => () => {
              v && v()
            },
            []
          ),
          o.a.createElement(l.a, {
            dataName: 'add-custom-interval-dialog',
            title: Object(c.t)('Add custom time interval'),
            isOpened: !0,
            onSubmit: function () {
              t(w, N), n()
            },
            onCancel: n,
            onClickOutside: n,
            onClose: n,
            render: () =>
              o.a.createElement(
                m.a,
                { className: d.scrollable, onScroll: p },
                o.a.createElement(
                  'div',
                  { className: d.content },
                  o.a.createElement(
                    'div',
                    { className: d.row },
                    o.a.createElement('div', { className: d.title }, Object(c.t)('Type')),
                    o.a.createElement(s.a, {
                      id: 'metric-items',
                      className: d.control,
                      value: N,
                      items: b,
                      onChange: C,
                    })
                  ),
                  o.a.createElement(
                    'div',
                    { className: d.row },
                    o.a.createElement('div', { className: d.title }, Object(c.t)('Interval')),
                    o.a.createElement(r.a, {
                      className: d.control,
                      inputMode: 'numeric',
                      maxLength: 6,
                      value: w,
                      onChange: O,
                    })
                  )
                )
              ),
            defaultActionOnClose: 'none',
            submitButtonText: Object(c.t)('Add'),
            submitOnEnterKey: !1,
            fullScreen: !0,
          })
        )
        function O(e) {
          const { value: t } = e.currentTarget
          ;/^[0-9]*$/.test(t) && E(t)
        }
        function p() {
          i.a.fire()
        }
        function C(e) {
          f(e)
        }
      }
    },
  },
])
