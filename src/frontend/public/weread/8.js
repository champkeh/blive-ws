/* eslint-disable */
// https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/js/8.a6ca3e96.js

(() => {
    function processStyles(styles, bookId) {
        return function (styles, bookId) {
            if (!styles || styles.length <= 0) {
                return ''
            }

            // 去掉 /* */ 注释
            styles = styles.trim().replace(/\/\*.*?\*\//gi, '');
            let re = new RegExp('[^{}]*?{[\x5cs\x5cS]+?}', 'gi'),
                matchArray = styles.match(re);
            if (!matchArray || 0 === matchArray.length) {
                return ''
            }

            // 把 epub 内联图片地址替换成绝对地址，方便 html 进行访问
            return matchArray.map((_) => {
                return '.readerChapterContent ' +
                    (_ = _.trim()).split('\n').map((__) => {
                        return -1 === (__ = __.trim()).indexOf('{') &&
                        -1 === __.indexOf('}') && -1 === __.indexOf(';')
                            ? __ + ';'
                            : __;
                    }).join('');
            }).join('').trim().replace(
                /\.\.\/images\/(.*?\.(png|jpg|jpeg|gif))/gi,
                'https://res.weread.qq.com/wrepub/web/' + bookId + '/$1'
            );
        }(styles || '', bookId);
    }
    function processHtmls(sections, bookId) {
        return sections.map((section) => {
            return function (section, bookId) {
                if (!section || section.length <= 0) {
                    return ''
                }

                let re1 = new RegExp('<img[^>]+?data-wr-co="([^"]+?)"[^>]+?alt="([^"]+?)"[^>]+?qqreader-footnote[^>]+?>', 'gi');
                section = section.replace(re1, '<span class="reader_footer_note js_readerFooterNote" data-wr-co="$1" data-wr-footernote="$2"></span>');

                let re2 = new RegExp('<img[^>]+?data-wr-co="([^"]+?)"[^>]+?qqreader-footnote[^>]+?alt="([^"]+?)"[^>]*?>', 'gi');

                section = section.replace(re2, '<span class="reader_footer_note js_readerFooterNote" data-wr-co="$1" data-wr-footernote="$2"></span>')
                section = section.replace(/\.\.\/video\/(.*?\.(mp4|wmv|3gp|rm|rmvb|mov|m4v|avi))/gi, 'https://res.weread.qq.com/wrepub/web/' + bookId + '/$1')
                section = section.replace(/\.\.\/images\/(.*?\.(png|jpg|jpeg|gif))/gi, 'https://res.weread.qq.com/wrepub/web/' + bookId + '/$1')
                return section.trim();
            }(section || '', bookId)
        });
    }

    window.weread.store = {
        processStyles: processStyles,
        processHtmls: processHtmls,
    }
})()
