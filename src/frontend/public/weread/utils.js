/* eslint-disable */
// https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/js/utils.281a7e53.js


// 解密工具
(() => {
    // 引入依赖
    const base64js = window.base64js
    const cryptoJS = window.CryptoJS


    function base64Decode(input) {
        return new TextDecoder().decode(base64js.toByteArray(input))
    }

    function md5(data) {
        return cryptoJS.MD5(data).toString()
    }

    function cs(str) {
        for (var _0x2405e1 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x15, _0x6f4142 = '', _0x906562 = 0x0, _0x4e4be3 = str['length']; _0x906562 < _0x4e4be3; _0x906562 += 0x2)
            _0x6f4142 += String['fromCharCode'](parseInt(str['slice'](_0x906562, _0x906562 + 0x2), _0x2405e1));
        return _0x6f4142;
    }

    function decrypt(data) {
        if (!data || 'string' !== typeof data || data.length <= 1) {
            return ''
        }
        let _0xf518cd = data.slice(1);
        _0xf518cd = function (_0x3977ca) {
            var _0x3ab0a1 = function () {
                var _0x33e53b = _0x3977ca['length'];
                if (_0x33e53b < 0x4)
                    return [];
                if (_0x33e53b < 0xb)
                    return [0x0, 0x2];
                for (var _0x3cf60f = Math['min'](0x4, Math['ceil'](_0x33e53b / 0xa)), _0x5b3ac7 = '', _0x6a7382 = _0x33e53b - 0x1; _0x6a7382 > _0x33e53b - 0x1 - _0x3cf60f; _0x6a7382--) {
                    var _0x46e990 = _0x3977ca['charCodeAt'](_0x6a7382);
                    _0x5b3ac7 += parseInt(_0x46e990.toString(0x2), 0x4);
                }
                for (var _0x1800ae = _0x33e53b - _0x3cf60f - 0x2, _0x137a8d = _0x1800ae['toString']()['length'], _0x5cb455 = [], _0xd32f00 = 0x0; _0x5cb455['length'] < 0xa && _0xd32f00 + _0x137a8d < _0x5b3ac7['length']; _0xd32f00 += _0x137a8d) {
                    var _0x12637e = parseInt(_0x5b3ac7['slice'](_0xd32f00, _0xd32f00 + _0x137a8d));
                    _0x5cb455.push(_0x12637e % _0x1800ae),
                        _0x12637e = parseInt(_0x5b3ac7['slice'](_0xd32f00 + 0x1, _0xd32f00 + 0x1 + _0x137a8d)),
                        _0x5cb455['push'](_0x12637e % _0x1800ae);
                }
                return _0x5cb455;
            }();
            return function (_0x5f5c96, _0x5e6785) {
                for (var _0x27b5fa = _0x5f5c96['split'](''), _0x112e21 = _0x5e6785['length'] - 0x1; _0x112e21 >= 0x0; _0x112e21 -= 0x2)
                    for (var _0x31d03c = 0x1; _0x31d03c >= 0x0; _0x31d03c--) {
                        var _0x1febc9 = _0x27b5fa[_0x5e6785[_0x112e21] + _0x31d03c];
                        _0x27b5fa[_0x5e6785[_0x112e21] + _0x31d03c] = _0x27b5fa[_0x5e6785[_0x112e21 - 0x1] + _0x31d03c],
                            _0x27b5fa[_0x5e6785[_0x112e21 - 0x1] + _0x31d03c] = _0x1febc9;
                    }
                return _0x27b5fa['join']('');
            }(_0x3977ca, _0x3ab0a1);
        }(_0xf518cd)
        return _0xf518cd = base64Decode(_0xf518cd);
    }

    /**
     * 计算参数的编码
     * @param {string} data
     * @return {string}
     */
    function hash(data) {
        if (typeof data === "number") {
            data = data.toString();
        }
        if (typeof data !== "string") {
            return data;
        }

        const dataMd5 = md5(data);
        let _0x38b4d1 = dataMd5.substr(0, 3);
        const _0x4718f7 = function (data) {
            if (/^\d*$/.test(data)) {
                const dataLen = data.length;
                const _0xd2c2b1 = [];
                for (let i = 0; i < dataLen; i += 9) {
                    const _0x56eaa4 = data.slice(i, Math.min(i + 9, dataLen));
                    _0xd2c2b1.push(parseInt(_0x56eaa4).toString(16));
                }
                return ["3", _0xd2c2b1];
            }

            let _0x397242 = "";
            for (let i = 0; i < data.length; i++) {
                _0x397242 += data.charCodeAt(i).toString(16);
            }
            return ["4", [_0x397242]];
        }(data);

        _0x38b4d1 += _0x4718f7[0];
        _0x38b4d1 += 2 + dataMd5.substr(dataMd5.length - 2, 2);

        const _0x1e41f3 = _0x4718f7[1];
        for (let i = 0; i < _0x1e41f3.length; i++) {
            let _0x5c593c = _0x1e41f3[i].length.toString(16);
            1 === _0x5c593c.length && (_0x5c593c = "0" + _0x5c593c);
            _0x38b4d1 += _0x5c593c;
            _0x38b4d1 += _0x1e41f3[i];
            i < _0x1e41f3.length - 1 && (_0x38b4d1 += "g");
        }

        if (_0x38b4d1.length < 20) {
            _0x38b4d1 += dataMd5.substr(0, 20 - _0x38b4d1.length);
        }

        return _0x38b4d1 + md5(_0x38b4d1).substr(0, 3);
    }

    window.weread.utils = {
        chk: function (data) {
            if (!data || data.length <= 32) {
                return data
            }
            let header = data.slice(0, 32),
                body = data.slice(32);
            return header === md5(body).toUpperCase() ? body : '';
        },
        dT: function (data) {
            return data && 0 !== data.length ? decrypt(data) : '';
        },
        dH: function (data) {
            return data && 0 !== data.length ? decrypt(data) : '';
        },
        dS: function (data) {
            return data && 0 !== data.length ? decrypt(data) : '';
        },
        cs: cs,
        hash: hash,
    };
})();

// style 解析
(() => {
    // 引入依赖
    const csstree = window.csstree


    function removeAllFontSizes(style) {
        let ast = csstree.parse(style);
        csstree.walk(ast, {
            'visit': 'Declaration',
            'enter': function (node, item, list) {
                if ('font-size' === node.property) {
                    list.remove(item)
                }
            }
        })
        return csstree.generate(ast);
    }

    function removeTopClassSpanStyle(style) {
        let ast = csstree.parse(style);
        csstree.walk(ast, {
            'visit': 'Rule',
            'enter': function (node, item, list) {
                let selectorList = node.prelude
                if (csstree.find(selectorList, (node) => 'TypeSelector' === node.type && node.name === 'span') &&
                    !csstree.find(selectorList, (node) => 'ClassSelector' === node.type || 'IdSelector' === node.type)
                ) {
                    list.remove(item)
                }
            }
        })
        return csstree.generate(ast);
    }

    function _0x481152(style) {
        let ast = csstree.parse(style);
        try {
            csstree.walk(ast, {
                'visit': 'Rule',
                'enter': function (node) {
                    if (node.prelude && (m1536.find(node.prelude, (node) => 'TypeSelector' === node.type && node.name === 'div'))) {
                        csstree.walk(node, {
                            'visit': 'Declaration',
                            'enter': function (node, item, list) {
                                if ('display' === node.property && node.value.children && node.value.children.some((_) => 'Identifier' === _.type && 'block' === _.name)) {
                                    list.remove(item)
                                }
                            }
                        })
                    }
                }
            });
        } catch (err) {
        }
        return csstree.generate(ast);
    }

    function parse(style, options) {
        let _removeFontSizes = options.removeFontSizes,
            removeFontSizes = undefined !== _removeFontSizes && _removeFontSizes,
            _enableTranslate = options.enableTranslate,
            enableTranslate = undefined !== _enableTranslate && _enableTranslate;

        style = style.replace(/font-family:([^;]*?);/g, 'font-family:$1,"PingFang SC", -apple-system, "SF UI Text", "Lucida Grande", STheiti, "Microsoft YaHei", sans-serif;')
        if (removeFontSizes) {
            style = removeAllFontSizes(style)
        }

        style = _0x481152(style = function (style) {
            let ast = csstree.parse(style);
            csstree.walk(ast, {
                'visit': 'Atrule',
                'enter': function (node, item, list) {
                    if ('media' === node.name) {
                        list.remove(item)
                    }
                }
            })
            return csstree.generate(ast);
        }(style = function (style) {
            let ast = csstree.parse(style);
            csstree.walk(ast, {
                'visit': 'Rule',
                'enter': function (node, item, list) {
                    if ('TypeSelector' === node.prelude.type && 'code' === node.prelude.name) {
                        list.remove(item)
                    }
                }
            })
            return csstree.generate(ast);
        }(style = function (style) {
            let ast = csstree.parse(style);
            csstree.walk(ast, {
                'visit': 'Declaration',
                'enter': function (node, item, list) {
                    if ('position' === node.property && 'Identifier' === node.value.type && 'relative' === node.value.name) {
                        list.remove(item)
                    }
                }
            })
            return csstree.generate(ast);
        }(style = removeTopClassSpanStyle(style)))))

        if (enableTranslate) {
            style = style.replace(/\.wr-translation\s*?\{(?:\n|.|\r)*?}/g, '')
        }
        return style
    }

    window.weread.style = {
        parse: parse,
        removeAllFontSizes: removeAllFontSizes,
    }
})();

// html 解析
(() => {
    // 引入依赖
    const xss = window.filterXSS


    let filterXSSInstance = undefined,
        tagInfos = [],
        _0x6fd51b = [],
        charTotal = 0;
    let _0x1ccf52 = /^\s*$/;

    function newFilterXSSInstance() {
        const baseAttrs = ['class', 'id'],
            options = {
                'whiteList': {
                    'body': baseAttrs.concat(['class', 'style']),
                    'a': baseAttrs.concat(['target', 'href', 'title']),
                    'abbr': baseAttrs.concat(['title']),
                    'address': baseAttrs,
                    'area': baseAttrs.concat(['shape', 'coords', 'href', 'alt']),
                    'article': baseAttrs,
                    'aside': baseAttrs,
                    'audio': baseAttrs.concat(['autoplay', 'controls', 'loop', 'preload', 'src']),
                    'b': baseAttrs,
                    'bdi': baseAttrs.concat(['dir']),
                    'bdo': baseAttrs.concat(['dir']),
                    'big': baseAttrs,
                    'blockquote': baseAttrs.concat(['cite']),
                    'br': baseAttrs,
                    'caption': baseAttrs,
                    'center': baseAttrs,
                    'cite': baseAttrs,
                    'code': baseAttrs,
                    'col': baseAttrs.concat(['align', 'valign', 'span', 'width']),
                    'colgroup': baseAttrs.concat(['align', 'valign', 'span', 'width']),
                    'dd': baseAttrs,
                    'del': baseAttrs.concat(['datetime']),
                    'details': baseAttrs.concat(['open']),
                    'div': baseAttrs,
                    'dl': baseAttrs,
                    'dt': baseAttrs,
                    'em': baseAttrs,
                    'font': baseAttrs.concat(['color', 'size', 'face']),
                    'footer': baseAttrs,
                    'h1': baseAttrs,
                    'h2': baseAttrs,
                    'h3': baseAttrs,
                    'h4': baseAttrs,
                    'h5': baseAttrs,
                    'h6': baseAttrs,
                    'header': baseAttrs,
                    'hr': baseAttrs,
                    'i': baseAttrs,
                    'img': baseAttrs.concat(['src', 'alt', 'title', 'width', 'height', 'data-w', 'data-ratio', 'data-w-new']),
                    'ins': baseAttrs.concat(['datetime']),
                    'li': baseAttrs,
                    'mark': baseAttrs,
                    'nav': baseAttrs,
                    'ol': baseAttrs,
                    'p': baseAttrs,
                    'pre': baseAttrs,
                    's': baseAttrs,
                    'section': baseAttrs,
                    'small': baseAttrs,
                    'span': baseAttrs,
                    'sub': baseAttrs,
                    'sup': baseAttrs,
                    'strong': baseAttrs,
                    'table': baseAttrs.concat(['width', 'border', 'align', 'valign']),
                    'tbody': baseAttrs.concat(['align', 'valign']),
                    'td': baseAttrs.concat(['width', 'rowspan', 'colspan', 'align', 'valign']),
                    'tfoot': baseAttrs.concat(['align', 'valign']),
                    'th': baseAttrs.concat(['width', 'rowspan', 'colspan', 'align', 'valign']),
                    'thead': baseAttrs.concat(['align', 'valign']),
                    'tr': baseAttrs.concat(['rowspan', 'align', 'valign']),
                    'tt': baseAttrs,
                    'u': baseAttrs,
                    'ul': baseAttrs,
                    'video': baseAttrs.concat(['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width'])
                },
                'onTag': function (tag, html, options) {
                    options.isWhite && tagInfos.push({
                        'tag': tag,
                        'srcHtml': html,
                        'isClosing': options.isClosing,
                        'pos': options.position,
                        'srcPos': options.sourcePosition,
                    });
                },
                'onIgnoreTag': function (tag, html, options) {
                    return '';
                },
                'onIgnoreTagAttr': function (tag, name, value) {
                    if ('style' === name)
                        return 'style="' + value + '"';
                },
                'safeAttrValue': function (tag, name, value, _0x16f0d0) {
                    var _0x50c937 = xss.safeAttrValue(tag, name, value, _0x16f0d0);
                    return 'video' === tag && 'src' === name && '' === _0x50c937 && 0 === value.indexOf('../')
                        ? value
                        : 'img' === tag && 'src' === name
                            ? (tagInfos.length && 'img' === tagInfos[tagInfos.length - 1].tag && (tagInfos[tagInfos.length - 1].src = value), value)
                            : _0x50c937;
                }
            };
        return new xss.FilterXSS(options);
    }

    function _0x190bf2(tagInfo) {
        for (var _0x381df8 = tagInfo['srcPos'], _0x506b6a = 0x0, _0x1356b6 = 0x0; _0x1356b6 < _0x6fd51b['length']; _0x1356b6++) {
            var _0xa8aac2 = _0x6fd51b[_0x1356b6];
            if (tagInfo.srcPos >= _0x506b6a && tagInfo['srcPos'] < _0x506b6a + _0xa8aac2.contentLength) {
                _0x381df8 += _0xa8aac2['indexInFullHtml'] - _0x506b6a;
                break;
            }
            _0x506b6a += _0xa8aac2['contentLength'];
        }
        return _0x381df8;
    }

    function _0xdb6349(safeHtml, tagInfos, sectionStep) {
        if (!safeHtml || 0 === safeHtml['length'])
            return safeHtml;
        var result = [''],
            _0x12d13c = 0,
            _0x439b72 = 0,
            _0x5f2d35 = 0,
            _0x33c74f = []
        var _0x46aef6 = function () {
            var _0x2f9aba = tagInfos[_0x5f2d35];
            if (_0x2f9aba.isClosing) {
                _0x33c74f.length && _0x33c74f[_0x33c74f.length - 1].tag === _0x2f9aba.tag && _0x33c74f.pop(),
                    _0x439b72 = safeHtml.indexOf('>', _0x2f9aba.pos) + 1,
                    result[result.length - 1] += safeHtml.slice(_0x12d13c, _0x439b72),
                    _0x12d13c = _0x439b72;
                var _0x1233eb = _0x5f2d35 + 0x1 < tagInfos.length ? tagInfos[_0x5f2d35 + 1] : void 0x0;
                if (_0x1233eb) {
                    var _0x819688 = _0x1233eb['pos']
                        , _0x475187 = _0x190bf2(_0x2f9aba) + _0x2f9aba['srcHtml'].length;
                    if (result[result['length'] - 1] += parseParagraph(safeHtml, _0x12d13c, _0x819688, _0x475187),
                        _0x12d13c = _0x819688,
                        !result[Math.floor(charTotal / sectionStep)]) {
                        var _0x2c68b9 = '';
                        if (_0x33c74f.length) {
                            _0x33c74f.forEach(function (_0x42a495) {
                                _0x2c68b9 += _0x42a495['srcHtml'];
                            });
                            var _0x77e7ab = [].concat(_0x33c74f);
                            _0x77e7ab['reverse']();
                            for (var _0x37734c = 0x0; _0x37734c < _0x77e7ab['length']; _0x37734c++) {
                                var _0x38aadc = _0x77e7ab[_0x37734c];
                                result[result.length - 1] += '</' + _0x38aadc['tag'] + '>';
                            }
                        }
                        result.push(_0x2c68b9);
                    }
                }
                _0x5f2d35++;
            } else {
                'img' !== _0x2f9aba['tag'] && 'br' !== _0x2f9aba['tag'] && 'hr' !== _0x2f9aba['tag'] && 'pre' !== _0x2f9aba['tag'] && 'video' !== _0x2f9aba && _0x33c74f['push'](_0x2f9aba),
                    _0x439b72 = _0x2f9aba['pos'] + 0x1 + _0x2f9aba['tag']['length'],
                    result[result['length'] - 0x1] += safeHtml['slice'](_0x12d13c, _0x439b72);
                var _0x366d11 = _0x190bf2(_0x2f9aba);
                result[result['length'] - 0x1] += '\x20data-wr-co=\x22' + _0x366d11 + '\x22',
                    _0x12d13c = _0x439b72;
                var _0x333b9b = safeHtml.indexOf('>', _0x2f9aba['pos']) + 0x1
                    , _0x2493a2 = safeHtml['slice'](_0x12d13c, _0x333b9b);
                if ('img' === _0x2f9aba['tag'] && _0x2f9aba['src'] && -0x1 !== _0x2493a2['indexOf']('src=') && (_0x2493a2 = _0x2493a2['replace']('src="' + _0x2f9aba['src'] + '\x22', 'src=\x22data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\x22\x20data-src=\x22' + _0x2f9aba['src'] + '\x22')),
                'img' === _0x2f9aba['tag'] && -0x1 !== _0x2493a2.indexOf('data-w='))
                    try {
                        var _0x53cc46 = _0x2493a2['match'](/style="([^"]*)"/)
                            , _0x53b33c = _0x53cc46 && _0x53cc46[0x1] ? _0x53cc46[0x1] : ''
                            , _0x14397f = _0x2493a2['match'](/data-w="([^"]*)"/)
                            , _0x27dd5a = _0x2493a2['match'](/data-w-new="([^"]*)"/)
                            , _0x2d26d8 = _0x14397f && _0x14397f[0x1] ? _0x14397f[0x1] : ''
                            , _0x595fe1 = _0x27dd5a && _0x27dd5a[0x1] ? _0x27dd5a[0x1] : ''
                            ,
                            _0x14e03b = (_0x2d26d8 ? 'max-width:' + _0x2d26d8 + ';' : '') + (_0x595fe1 ? 'max-height:' + _0x595fe1 + ';' : '') + _0x53b33c;
                        _0x2493a2 = _0x53cc46 ? _0x2493a2['replace'](_0x53b33c, _0x14e03b) : _0x2493a2['replace']('>', '\x20style=\x22' + _0x14e03b + '\x22>');
                    } catch (_0x2cde6f) {
                    }
                if (result[result['length'] - 0x1] += _0x2493a2,
                    _0x12d13c = _0x333b9b,
                'pre' === _0x2f9aba['tag']) {
                    var _0x1910df = function (_0x3f53e9, _0x36aea0, _0x12f789) {
                        if (_0x12f789 >= _0x3f53e9['length'])
                            return -0x1;
                        for (var _0x307eae = _0x12f789; _0x307eae < _0x3f53e9['length']; _0x307eae++)
                            if (_0x36aea0(_0x3f53e9[_0x307eae]))
                                return _0x307eae;
                        return -0x1;
                    }(tagInfos, function (_0x1f478a) {
                        return _0x1f478a.tag === _0x2f9aba.tag && _0x1f478a['isClosing'];
                    }, _0x5f2d35);
                    if (-0x1 !== _0x1910df) {
                        var _0x5e429c = tagInfos[_0x1910df];
                        result[result.length - 1] += safeHtml['slice'](_0x12d13c, _0x5e429c['pos']),
                            _0x12d13c = _0x5e429c['pos'],
                            _0x5f2d35 = _0x1910df + 0x1;
                    } else
                        _0x5f2d35++;
                } else {
                    var _0x529aa0 = _0x5f2d35 + 0x1 < tagInfos['length'] ? tagInfos[_0x5f2d35 + 0x1] : void 0x0;
                    if (_0x529aa0) {
                        var _0x298fcc = _0x529aa0['pos']
                            , _0x1778ae = _0x366d11 + _0x2f9aba['srcHtml']['length'];
                        result[result['length'] - 0x1] += parseParagraph(safeHtml, _0x12d13c, _0x298fcc, _0x1778ae),
                            _0x12d13c = _0x298fcc;
                    }
                    _0x5f2d35++;
                }
            }
        }

        for (; _0x5f2d35 < tagInfos['length'];) {
            _0x46aef6()
        }
        _0x12d13c < safeHtml.length && (result[result['length'] - 0x1] += safeHtml.slice(_0x12d13c))
        return result;
    }

    function _0xa4ab39(html, style) {
        for (var _0x507268 = '', _0x3d1a12 = 0x0, _0x2572c4 = /<body[^>]*>/g, _0x4ca8ca = /class="([^"]+)">/, _0xa6fb1c = _0x2572c4['exec'](html); _0xa6fb1c;) {
            if (0x1 === _0xa6fb1c['length']) {
                var _0x14f83b = _0xa6fb1c[0x0]
                    , _0x39cede = _0xa6fb1c.index
                    , _0x545ff2 = _0x39cede + _0x14f83b.length
                    , _0x20e730 = -0x1 !== _0x14f83b.indexOf('background-image');
                if (!_0x20e730) {
                    var _0x1e255d = _0x4ca8ca['exec'](_0x14f83b);
                    if (_0x1e255d && 2 === _0x1e255d['length'])
                        for (var _0x4e5b52 = _0x1e255d[0x1].split('\x20'), _0x2a1362 = 0x0, _0x451650 = _0x4e5b52['length']; _0x2a1362 < _0x451650; _0x2a1362++) {
                            var _0x25c130 = _0x4e5b52[_0x2a1362]
                                , _0x5cb99f = style['indexOf'](_0x25c130);
                            if (-0x1 !== _0x5cb99f) {
                                var _0x4c91db = style['indexOf']('{', _0x5cb99f);
                                if (-0x1 !== _0x4c91db) {
                                    var _0x164228 = style['indexOf']('}', _0x4c91db);
                                    if (-0x1 !== _0x164228)
                                        if (-0x1 !== style.slice(_0x4c91db, _0x164228)['indexOf']('background-image')) {
                                            _0x20e730 = !0x0;
                                            break;
                                        }
                                }
                            }
                        }
                }
                _0x507268 += html['slice'](_0x3d1a12, _0x39cede),
                    _0x507268 += _0x20e730 ? _0x14f83b['replace']('<body', '<div\x20data-wr-bd=\x221\x22\x20data-wr-inset=\x221\x22') : _0x14f83b['replace']('<body', '<div data-wr-bd="1"'),
                    _0x3d1a12 = _0x545ff2;
            }
            _0xa6fb1c = _0x2572c4['exec'](html);
        }
        return _0x3d1a12 < html['length'] && (_0x507268 += html.slice(_0x3d1a12)),
            _0x507268 = _0x507268['replace'](/<\/body>/g, '</div>');
    }

    function parseBodyHtml(html) {
        const result = {
            'allContentMerged': '',
            'contentLengthAndIndex': []
        };
        if (!html || 0 === html.length) {
            return result
        }
        for (var _0x5400df = /<body[^>]*>\s*([\s\S]*?)\s*<\/body>/g, _0x555f6d = _0x5400df.exec(html); _0x555f6d;) {
            if (_0x555f6d && 2 === _0x555f6d.length) {
                var _0x2d6eda = _0x555f6d[0],
                    _0x5025a0 = _0x555f6d.index;
                result.allContentMerged = result.allContentMerged + _0x2d6eda
                result.contentLengthAndIndex.push({
                    'contentLength': _0x2d6eda.length,
                    'indexInFullHtml': _0x5025a0
                })
            }
            _0x555f6d = _0x5400df.exec(html);
        }
        return result;
    }

    const getAllStyleAttrs = function getAllStyleAttrs(node) {
        const styleAttrs = [];
        node.childNodes && node.childNodes.forEach((childNode) => {
            if (childNode.nodeType !== 1) {
                return
            }
            let styleAttr = childNode.attributes.getNamedItem('style')
            styleAttr && styleAttrs.push(styleAttr)
            styleAttrs.push.apply(styleAttrs, Array.from(getAllStyleAttrs(childNode)));
        })
        return styleAttrs;
    };

    function _0x5af1d0(html) {
        const dom = new DOMParser().parseFromString(html, 'text/html').documentElement
        getAllStyleAttrs(dom).forEach(styleAttr => {
            let style = '{' + styleAttr.value + '}'
            style = window.style.removeAllFontSizes(style);
            styleAttr.value = style.substring(1, style.length - 1);
        })
        return dom.outerHTML
    }

    function parseTxt(txt, sectionStep) {
        if (!txt || 'string' != typeof txt)
            return '';
        let lines = txt.split(/\n/),
            lineContentInfos = [],
            offset = -1
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i]
            let lineContent = line['trim']()
            offset += 1
            lineContent['length'] > 0x0 && lineContentInfos.push({
                'content': lineContent,
                'offset': offset + line['indexOf'](lineContent)
            })
            offset += line['length'];
        }
        let result = ['']
        for (let i = 0; i < lineContentInfos.length; i++) {
            let lineContentInfo = lineContentInfos[i];

            result[result.length - 1] += '<p class="chapterContent_p" data-wr-co="' + lineContentInfo['offset'] + '">' + parseParagraph(lineContentInfo.content, 0, lineContentInfo.content.length, lineContentInfo.offset) + '</p>'
            result[Math.floor(lineContentInfo['offset'] / sectionStep)] || result['push']('');
        }
        return result;
    }

    function splitChars(text, start, end) {
        let content = text.slice(start, end),
            re = /&#\d*;|&\w*;|[iftjl]*[iftjl]+[iftjl]*/g,
            offset = 0
        var searchResult = re.exec(content),
            wordLengthArray = []
        for (; searchResult;) {
            if (searchResult['length'] > 0x0) {
                for (var _0x14e9ee = searchResult['index'], _0x268bf9 = searchResult[0x0]['length']; _0x14e9ee > offset;) {
                    var _0x4e2dc7 = splitChars(text, start + offset, start + _0x14e9ee);
                    wordLengthArray.push.apply(wordLengthArray, Array.from(_0x4e2dc7))
                    offset += _0x4e2dc7['reduce'](function (_0x3734b6, _0x1ccd87) {
                        return _0x3734b6 + _0x1ccd87;
                    });
                }
                wordLengthArray['push'](_0x268bf9)
                offset = _0x14e9ee + _0x268bf9;
            }
            searchResult = re['exec'](content);
        }
        if (wordLengthArray['length'] > 0x0)
            return wordLengthArray;
        for (var _0x3fc49c = new Array(end - start), _0x3903f8 = 0x0; _0x3903f8 < _0x3fc49c['length']; _0x3903f8++)
            _0x3fc49c[_0x3903f8] = 0x1;
        return _0x3fc49c;
    }

    function parseParagraph(text, start, end, offset) {
        var content = text.slice(start, end);
        if (function (content) {
            if (0 === (content = content.trim().replace(/&nbsp;/g, '')).length)
                return !0x0;
            return _0x1ccf52.test(content);
        }(content)) {
            return content
        }
        let result = ''
        for (let i = start; i < end;) {
            splitChars(text, i, end).forEach((charLen) => {
                result += '<span data-wr-id="layout" data-wr-co="%%OFFSET%%">'.replace('%%OFFSET%%', offset + i - start) + text.slice(i, i + charLen) + '</span>'
                charTotal++
                i += charLen
            });
        }
        return result;
    }

    function parse(html, style = '', sectionStep) {
        if (-1 === html.indexOf('<body')) {
            return parseTxt(html, sectionStep)
        }
        if (!filterXSSInstance) {
            filterXSSInstance = newFilterXSSInstance()
        }
        charTotal = 0
        const bodyHtml = parseBodyHtml(html)
        html = bodyHtml.allContentMerged
        _0x6fd51b = bodyHtml.contentLengthAndIndex

        // 重置 tagInfos 数组
        tagInfos.length = 0

        let safeHtml = filterXSSInstance.process(html),
            _0x37c2cf = _0xdb6349(safeHtml, tagInfos, sectionStep),
            _0x4c57ed = _0x37c2cf.map((_) => _0xa4ab39(_, style));
        try {
            _0x4c57ed = _0x4c57ed.map((_) => _0x5af1d0(_));
        } catch (err) {
        }
        return _0x4c57ed;
    }


    window.weread.html = {
        parse: parse,
        parseTxt: parseTxt,
    }
})();
