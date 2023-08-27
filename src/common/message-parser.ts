export function handleMessage(data: any) {
    try {
        const msg_type = data.payload.cmd
        switch (msg_type) {
            case 'DANMU_MSG':
                onDanmuMsg(data.rid, data.payload)
                break
        }
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * 监听【普通弹幕】: DANMU_MSG
 * @param rid 房间号
 * @param data 弹幕数据
 */
function onDanmuMsg(rid: number, data: any) {
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
    console.log(`【${rid}】${info.uname}=> ${info.text}`)
}
