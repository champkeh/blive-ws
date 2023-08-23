export function handleMessage(data) {
    try {
        const msg_type = data.payload.cmd
        switch (msg_type) {
            case 'DANMU_MSG':
                onDanmuMsg(data.rid, data.payload)
                break
            case 'INTERACT_WORD':
                onInteractWordMsg(data.rid, data.payload)
                break
            case 'SEND_GIFT':
                onSendGiftMsg(data.rid, data.payload)
                break
        }
    } catch (e) {

    }
}

class Logger {
    static debug(rid, type, msg) {
        console.debug(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5;",
            "color: deeppink;",
            "color: gray; font-weight: bold;",
            msg,
        )
    }

    static info(rid, type, msg) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5;",
            "color: deeppink;",
            "color: brown; font-weight: bold;",
            msg,
        )
    }

    static warn(rid, type, msg) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5;",
            "color: deeppink;",
            "color: #E95020; font-weight: bold;",
            msg,
        )
    }

    static error(rid, type, msg) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【${type}】`,
            "color: #b5b5b5;",
            "color: deeppink;",
            "color: red; font-weight: bold;",
            msg,
        )
    }

    static printDanmaku(rid, danmaku) {
        console.log(
            `%c【${now()}】%c【${rid}】%c【弹幕】%c${danmaku.uname}(${danmaku.uid}): %c${danmaku.text}`,
            "color: #b5b5b5;",
            "color: deeppink;",
            "color: green; font-weight: bold",
            "",
            "color: green; font-weight: bold",
        )
    }
}

function now() {
    const now = new Date()

    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const milliSeconds = now.getMilliseconds()

    return `${('00'+hours).slice(-2)}:${('00'+minutes).slice(-2)}:${('00'+seconds).slice(-2)}.${('000'+milliSeconds).slice(-3)}`
}


/**
 * 监听【普通弹幕】: DANMU_MSG
 * @param rid
 * @param data
 */
function onDanmuMsg(rid, data) {
    // 示例如下：
    // data.info = [
    //     [],
    //     '主播好可爱啊',
    //     [346319245, "crazywang1", 0, 0, 0, 10000, 1, ""],
    //     [3, "生态", "籽岷"]
    // ]

    const info = {
        uid: data.info[2][0],
        uname: data.info[2][1],
        text: data.info[1],
    }
    Logger.printDanmaku(rid, info)
}

/**
 * 监听【直播间互动文字】: INTERACT_WORD
 * @param rid
 * @param data
 */
function onInteractWordMsg(rid, data) {
    // 示例如下：
    // data.data = {
    //     contribution: {
    //         grade: 0,
    //     },
    //     dmscore: 10,
    //     fans_medal: {
    //         anchor_roomid: 544853,
    //         guard_level: 0,
    //         icon_id: 0,
    //         is_lighted: 0,
    //         medal_color: 6067854,
    //         medal_color_border: 12632256,
    //         medal_color_end: 12632256,
    //         medal_color_start: 12632256,
    //         medal_level: 3,
    //         medal_name: "生态",
    //         score: 702,
    //         special: "",
    //         target_id: 686127,
    //     },
    //     is_spread: 0,
    //     msg_type: 2,
    //     privilege_type: 0,
    //     roomid: 23654348,
    //     score: 1657548725386,
    //     spread_desc: "",
    //     spread_info: "",
    //     tail_icon: 0,
    //     timestamp: 1657548725,
    //     trigger_time: 1657548723382260000,
    //     uid: 346319245,
    //     uname: "crazywang1",
    //     uname_color: "",
    // }

    const user = {
        uid: data.data.uid,
        name: data.data.uname,
    }
    Logger.info(rid, "互动",`${user.name}(${user.uid})进入直播间`)
}

/**
 * 监听【送礼物】: SEND_GIFT
 * @param rid
 * @param data
 */
function onSendGiftMsg(rid, data) {
    // 示例如下：
    // data.data = {
    //     action: "投喂",
    //     batch_combo_id: "",
    //     batch_combo_send: null,
    //     beatId: "0",
    //     biz_source: "Live",
    //     blind_gift: null,
    //     broadcast_id: 0,
    //     coin_type: "silver",
    //     combo_resources_id: 1,
    //     combo_send: null,
    //     combo_stay_time: 3,
    //     combo_total_coin: 0,
    //     crit_prob: 0,
    //     demarcation: 1,
    //     discount_price: 0,
    //     dmscore: 8,
    //     draw: 0,
    //     effect: 0,
    //     effect_block: 1,
    //     face: "http://i1.hdslb.com/bfs/face/9a198010d6a1c36ddf3fe1bd6994af3812869b60.jpg",
    //     face_effect_id: 0,
    //     face_effect_type: 0,
    //     float_sc_resource_id: 0,
    //     giftId: 31531,
    //     giftName: "PK票",
    //     giftType: 5,
    //     gold: 0,
    //     guard_level: 0,
    //     is_first: true,
    //     is_special_batch: 0,
    //     magnification: 1,
    //     modal_info: {
    //         anchor_roomid: 0,
    //         anchor_uname: "",
    //         guard_level: 0,
    //         icon_id: 0,
    //         is_lighted: 0,
    //         medal_color: 6067854,
    //         medal_color_border: 12632256,
    //         medal_color_end: 12632256,
    //         medal_color_start: 12632256,
    //         medal_level: 3,
    //         medal_name: "生态",
    //         special: "",
    //         target_id: 686127,
    //     },
    //     name_color: "",
    //     num: 3,
    //     original_gift_name: "",
    //     price: 0,
    //     rcost: 5712,
    //     remain: 0,
    //     rnd: "1657548735110500002",
    //     send_master: null,
    //     silver: 0,
    //     super: 0,
    //     super_batch_gift_num: 0,
    //     super_gift_num: 0,
    //     svga_block: 0,
    //     switch: true,
    //     tag_image: "",
    //     tid: "1657548735110500002",
    //     timestamp: 1657548735,
    //     top_list: null,
    //     total_coin: 0,
    //     uid: 346319245,
    //     uname: "crazywang1",
    // }

    const info = {
        uid: data.data.uid,
        name: data.data.uname,
        giftName: data.data.giftName,
        num: data.data.num,
        price: data.data.price,
        action: data.data.action,
    }
    Logger.warn(rid, "送礼物", `${info.name} ${info.action} ${info.giftName}x${info.num}`)
}

/**
 * 获取 ws 地址
 * @return {string}
 */
export function getWsEndpoint() {
    if (window.location.protocol === 'http:') {
        return `ws://${window.location.host}`
    } else if (window.location.protocol === 'https:') {
        return `wss://${window.location.host}`
    } else {
        console.warn('获取ws地址失败')
    }
}
