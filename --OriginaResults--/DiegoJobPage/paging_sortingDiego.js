(function (d) {
    function s(a, b, e, c) {
        c = {
            data: c || c === 0 || c === false ? c : b ? b.data : {},
            _wrap: b ? b._wrap : null, tmpl: null,
            parent: b || null,
            nodes: [], calls: I,
            nest: J,
            wrap: K,
            html: L,
            update: M
        };
        a && d.extend(c, a, {
            nodes: [],
            parent: b
        });
        if (e) {
            c.tmpl = e;
            c._ctnt = c._ctnt || c.tmpl(d, c);
            c.key = ++t;
            (y.length ? u : l)[t] = c
        }
        return c
    }
    function v(a, b, e) {
        var c;
        e = e ? d.map(e, function (f) {
            return typeof f === "string" ? a.key ? f.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,
                "$1 " + q + '="' + a.key + '" $2') : f : v(f, a, f._ctnt)
        }) : a;
        if (b) return e; e = e.join("");
        e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
            function (f, g, h, j) {
                c = d(h).get(); B(c);
                if (g) c = z(g).concat(c); if (j) c = c.concat(z(j))
            });
        return c ? c : z(e)
    }
    function z(a) {
        var b = document.createElement("div"); b.innerHTML = a;
        return d.makeArray(b.childNodes)
    }
    function C(a) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + d.trim(a).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,

            function (b, e, c, f, g, h, j) {
                b = d.tmpl.tag[c];
                if (!b) throw "Unknown template tag: " + c; c = b._default || [];
                if (h && !/\w$/.test(g)) { g += h; h = "" } if (g) {
                    g = w(g); j = j ? "," + w(j) + ")" : h ? ")" : ""; j = h ? g.indexOf(".") > -1 ? g + w(h) : "(" + g + ").call($item" + j : g; h = h ? j : "(typeof(" + g + ")==='function'?(" + g + ").call($item):(" + g + "))"
                } else h = j = c.$1 || "null"; f = w(f); return "');" + b[e ? "close" : "open"].split("$notnull_1").join(g ? "typeof(" + g + ")!=='undefined' && (" + g + ")!=null" : "true").split("$1a").join(h).split("$1").join(j).split("$2").join(f || c.$2 || "") + "__.push('"
            }) + "');} return __;")
    }
    function D(a, b) {
        a._wrap = v(a, true, d.isArray(b) ? b : [E.test(b) ? b : d(b).html()]).join("")
    }
    function w(a) {
        return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function B(a) {
        function b(o) {
            function F(A) {
                A += e; i = g[A] = g[A] || s(i, l[i.parent.key + e] || i.parent)

            } var m, k = o, i, r;
            if (r = o.getAttribute(q)) {
                for (; k.parentNode && (k = k.parentNode).nodeType === 1 && !(m = k.getAttribute(q)););
                if (m !== r) {
                    k = k.parentNode ? k.nodeType === 11 ? 0 : k.getAttribute(q) || 0 : 0; if (!(i = l[r])) {
                        i = u[r]; i = s(i, l[k] || u[k]); i.key = ++t; l[t] = i
                    }
                    n && F(r)
                } o.removeAttribute(q)
            } else if (n && (i = d.data(o, "tmplItem"))) {
                F(i.key); l[i.key] = i; k = (k = d.data(o.parentNode, "tmplItem")) ? k.key : 0
            }
            if (i) {
                for (m = i; m && m.key != k;) {
                    m.nodes.push(o); m = m.parent
                } delete i._ctnt; delete i._wrap; d.data(o, "tmplItem", i)
            }
        }
        var e = "_" + n, c, f, g = {}, h, j, p;
        h = 0;
        //
        for (j = a.length; h < j; h++) {
            if ((c = a[h]).nodeType === 1) {
                f = c.getElementsByTagName("*"); for (p = f.length - 1; p >= 0; p--)b(f[p]); b(c)
            }
        }
    }
    function I(a, b, e, c) {
        if (!a) return y.pop(); y.push({ _: a, tmpl: b, item: this, data: e, options: c })
    }
    function J(a, b, e) {
        return d.tmpl(d.template(a), b, e, this)
    }
    function K(a, b) {
        var e = a.options || {};
        e.wrapped = b; return d.tmpl(d.template(a.tmpl), a.data, e, a.item)
    }
    function L(a, b) {
        var e = this._wrap; return d.map(d(d.isArray(e) ? e.join("") : e).filter(a || "*"), function (c) {
            if (b) c = c.innerText || c.textContent; else {
                var f; if (!(f = c.outerHTML)) {
                    f = document.createElement("div"); f.appendChild(c.cloneNode(true)); f = f.innerHTML
                } c = f
            }
            return c
        })
    }
    function M() {
        var a = this.nodes;
        d.tmpl(null, null, null, this).insertBefore(a[0]); d(a).remove()
    }
    var G = d.fn.domManip, q = "_tmplitem", E = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        l = {}, u = {}, x, H = { key: 0, data: {} }, t = 0, n = 0, y = [];

    d.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
        function (a, b) {
            d.fn[a] = function (e) {
                var c = [];
                e = d(e);
                var f, g, h;
                f = this.length === 1 && this[0].parentNode; x = l || {};
                if (f && f.nodeType === 11 && f.childNodes.length === 1 && e.length === 1) {
                    e[b](this[0]);
                    c = this
                } else {
                    g = 0;
                    for (h = e.length; g < h; g++) {
                        n = g; f = (g > 0 ? this.clone(true) : this).get();
                        d(e[g])[b](f); c = c.concat(f)
                    }
                    n = 0;
                    c = this.pushStack(c, a, e.selector)
                } e = x;
                x = null;
                d.tmpl.complete(e);
                return c
            }
        });
    d.fn.extend({
        tmpl: function (a, b, e) {
            return d.tmpl(this[0], a, b, e)
        },
        tmplItem: function () {
            return d.tmplItem(this[0])
        },
        template: function (a) {
            return d.template(a, this[0])
        },
        domManip: function (a, b, e) {
            if (a[0] && d.isArray(a[0])) {
                for (var c = d.makeArray(arguments),
                    f = a[0], g = f.length, h = 0, j;
                    h < g && !(j = d.data(f[h++], "tmplItem")););
                if (j && n) c[2] = function (p) {
                    d.tmpl.afterManip(this, p, e)
                };
                G.apply(this, c)
            } else
                G.apply(this, arguments);
            n = 0;
            x || d.tmpl.complete(l);
            return this
        }
    });
    d.extend({
        tmpl: function (a, b, e, c) {
            var f = !c;
            if (f) { c = H; a = d.template[a] || d.template(null, a); u = {} }
            else if (!a) {
                a = c.tmpl; l[c.key] = c; c.nodes = []; c.wrapped && D(c, c.wrapped); return d(v(c, null, c.tmpl(d, c)))
            }
            if (!a)
                return [];
            if (typeof b === "function")
                b = b.call(c || {});
            e && e.wrapped && D(e, e.wrapped);
            b = d.isArray(b) ? d.map(b, function (g) {
                return g ? s(e, c, a, g) : null
            }) : [s(e, c, a, b)];
            return f ? d(v(c, null, b)) : b
        },
        tmplItem: function (a) {
            var b;
            if (a instanceof d) a = a[0];
            for (; a && a.nodeType === 1 && !(b = d.data(a, "tmplItem")) && (a = a.parentNode););
            return b || H
        },
        template: function (a, b) {
            if (b) {
                if (typeof b === "string")
                    b = C(b); else if (b instanceof d) b = b[0] || {};
                if (b.nodeType) b = d.data(b, "tmpl") || d.data(b, "tmpl", C(b.innerHTML));
                return typeof a === "string" ? d.template[a] = b : b
            }
            return a ? typeof a !== "string" ? d.template(null, a) : d.template[a] || d.template(null, E.test(a) ? a : d(a)) : null
        },
        encode: function (a) {
            return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    d.extend(d.tmpl, {
        tag: {
            tmpl: { _default: { $2: "null" }, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}" },
            wrap: { _default: { $2: "null" }, open: "$item.calls(__,$1,$2);__=[];", close: "call=$item.calls();__=call._.concat($item.wrap(call,__));" }, each: { _default: { $2: "$index, $value" }, open: "if($notnull_1){$.each($1a,function($2){with(this){", close: "}});}" }, "if": { open: "if(($notnull_1) && $1a){", close: "}" }, "else": { _default: { $1: "true" }, open: "}else if(($notnull_1) && $1a){" }, html: { open: "if($notnull_1){__.push($1a);}" }, "=": { _default: { $1: "$data" }, open: "if($notnull_1){__.push($.encode($1a));}" }, "!": { open: "" }
        },
        complete: function () {
            l = {}
        },
        afterManip: function (a, b, e) {
            var c = b.nodeType === 11 ? d.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : [];
            e.call(a, b); B(c);
            n++
        }
    })
})
    (jQuery);