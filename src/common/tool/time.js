export function timestampToTimeD(timestamp,type) {
        if (timestamp==undefined) return;
        let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + "-";//年
        let M =
        (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";//月
        let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";//日
        let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
        let m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) ;
        let s =
        date.getSeconds() < 10 ? ":0" + date.getSeconds() : ":"+date.getSeconds();
        let strDate
        switch (type){
            case 'yyyy-mm-dd':
                 strDate = Y + M + D;
                break;
            case 'yyyy-mm-dd-hh-mm':
                 strDate = Y + M + D + h + m
                break;
            default :
            strDate = Y + M + D + h + m + s
        }
        return strDate;
        }