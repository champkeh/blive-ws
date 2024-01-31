/* eslint-disable */

(() => {
    function isObject(obj) {
        return typeof obj === 'object' && obj !== null
    }

    class M278 {
        static hasOtherType(bookInfo) {
            return isObject(bookInfo) && bookInfo.otherType && bookInfo.otherType.length > 0
        }

        static otherType(bookInfo) {
            if (this.hasOtherType(bookInfo) && isObject(bookInfo)) {
                return bookInfo.otherType[0].type
            } else {
                return null
            }
        }

        static isHasTranslate(bookInfo) {
            if (!this.hasOtherType(bookInfo) || !isObject(bookInfo) || !this.otherType(bookInfo)) {
                return false
            }
            const otherType = bookInfo.otherType || []
            return !!Array.isArray(otherType) && otherType.some((bookType) => {
                return bookType && undefined !== bookType.translateStatus && bookType.showType && bookType.translateDone
            })
        }

        static isTranslationEnabled(bookInfo) {
            if (!this.hasOtherType(bookInfo) || !isObject(bookInfo) || !this.otherType(bookInfo)) {
                return false
            }
            const otherType = bookInfo.otherType || []
            return !!Array.isArray(otherType) && otherType.some((bookType) => {
                return bookType && 'open' === bookType.translateStatus && bookType.showType && bookType.translateDone
            })
        }

        static showOtherType(bookInfo) {
            if (this.hasOtherType(bookInfo) && isObject(bookInfo) && this.otherType(bookInfo)) {
                return bookInfo.otherType[0].showType
            } else {
                return false
            }
        }

        static actualTreatBookFormatAs(bookInfo) {
            if (this.hasOtherType(bookInfo) && this.showOtherType(bookInfo)) {
                return this.otherType(bookInfo)
            } else {
                return bookInfo.format
            }
        }

        static actualTreatBookAsEpub(bookInfo) {
            return 'epub' === this.actualTreatBookFormatAs(bookInfo)
        }

        static actualTreatBookAsPdf(bookInfo) {
            return 'pdf' === this.actualTreatBookFormatAs(bookInfo)
        }

        static isSupportedBookType(type) {
            return 0 === type || 8 === type
        }

        static isLegacyReaderSupportBook(bookInfo) {
            const type = bookInfo.type
            return this.isSupportedBookType(type) || this.actualTreatBookAsEpub(bookInfo)
        }

        static isPDFBookType(type) {
            return 11 === type
        }

        static isMPBookType(type) {
            return type === 3
        }

        static isComicType(type) {
            return 5 === type
        }

        static isSelfBookType(type) {
            return 8 === type
        }

        static isImportedBook(bookId) {
            return 'string' === typeof bookId && bookId.startsWith('CB_')
        }

        static isBuyUnitWholeBook(bookInfo) {
            return isObject(bookInfo) && 0 !== (1 & bookInfo.payType)
        }

        static isBuyUnitChapter(bookInfo) {
            return isObject(bookInfo) && 0 !== (2 & bookInfo.payType)
        }

        static isFree(bookInfo) {
            return isObject(bookInfo) && 0 !== (0x20 & bookInfo.payType)
        }

        static isLimitFree(bookInfo) {
            return isObject(bookInfo) && 0 !== (0x40 & bookInfo.payType)
        }

        static isLimitedSalesPromotion(bookInfo) {
            return isObject(bookInfo) && bookInfo.originalPrice > 0 && bookInfo.originalPrice > bookInfo.price
        }

        static isSupportFreeMemberShip(bookInfo) {
            return isObject(bookInfo) && !(0x2 === bookInfo.payingStatus || 0x4 === bookInfo.payingStatus)
        }

        static isSupportMemberShip(bookInfo) {
            return isObject(bookInfo) && 0 !== (0x1000 & bookInfo.payType)
        }

        static isPaidCoinPurchaseOnly(bookInfo) {
            return isObject(bookInfo) && 0 !== (bookInfo.payType & 0x1 << 0x15)
        }

        static isEPub(bookInfo) {
            return isObject(bookInfo) && this.actualTreatBookFormatAs(bookInfo) === 'epub'
        }

        static isSupportReaderProgress(bookInfo) {
            return isObject(bookInfo)
        }

        static isOuterBook(bookId) {
            return 'string' == typeof bookId && bookId.startsWith('W')
        }

        static isSoldOut(bookInfo) {
            return isObject(bookInfo) && (0x1 === bookInfo.soldout || 0x2 === bookInfo.soldout)
        }

        static isPaperBook(bookInfo) {
            return isObject(bookInfo) && bookInfo.paperBook && Number(bookInfo.paperBook.skuId) > 0
        }

        static isTrialReadBook(bookInfo) {
            return isObject(bookInfo) && !bookInfo.paid && 0 !== (bookInfo.payType & 0x1 << 0x13)
        }

        static isCopyRightForbiddenRead(bookInfo) {
            return isObject(bookInfo) && '金庸' === bookInfo.author
        }

        static isPoliticalSensitive(bookInfo) {
            if (!isObject(bookInfo)) {
                return false
            }
            const payType = bookInfo.payType
            return Boolean(0x8000 & payType || 0x10000 & payType || payType & 0x1 << 0x11 || payType & 0x1 << 0x12)
        }

        static isSinglePurchaseBook(bookInfo) {
            return (bookInfo) && 0 !== (bookInfo.payType & 0x1 << 0x1a)
        }

        static copyRightForbiddenReadToast = '因版权原因，本书不支持在网页端阅读。请至微信读书 App 阅读本书'
    }


    /**
     * 获取章节标题
     * @param bookInfo
     * @param chapter
     */
    function chapterTitleText(bookInfo, chapter) {
        if (!M278.isSupportedBookType(bookInfo.type)) {
            return ''
        }
        if (!chapter) {
            return ''
        }
        const title = chapter.title
        return [M278.isEPub(bookInfo) ? '' : '第' + (chapter.chapterIdx || '') + '章', title].join(' ').trim()
    }

    /**
     * 是否显示章节标题
     * @param bookInfo
     */
    function showChapterTitle(bookInfo) {
        return !(M278.isEPub(bookInfo) || M278.actualTreatBookAsEpub(bookInfo)) || M278.isTrialReadBook(bookInfo)
    }

    window.weread.m278 = {
        chapterTitleText: chapterTitleText,
        showChapterTitle: showChapterTitle,
    }
})();
