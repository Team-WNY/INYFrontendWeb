/**
 * 기본 (yyyy-MM-dd HH:mm:ss.SSS)? 년월일 ? HH시 mm분 ? N 시간 전 ?
 *
 * 글을 올린 시간이 360분(6시간) 이내일 경우 : N시간 전 (6시간 이내일 경우 분단위 까지 출력 ex) 4시간 38분 전 ),
 * 글을 올린 시간이 360분(6시간) 이상이면서 같은 날일 경우 : HH:mm (24시간 체계를 이용하여 글을 올린 시간 출력 ex) 08:38분 )
 * 글을 올린 시간이 360분(6시간) 이상이면서 전 날일 경우 : yyyy년 mm월 dd일 (날짜까지만 출력 ex) 2023년 08월 01일 )
 * @param target:Date
 */
import moment from "moment";

export const parseTimeForToday = (target: Date) => {
    let result: string;

    const startDate = new Date(target)
    const endDate = new Date()

    const minDuration = Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60)

    let hours = Math.floor(minDuration / 60)
    let min = Math.floor(minDuration % 60)

    if (min < 5) {
        result = `방금 전`
    } else if (hours < 6) {
        if (hours === 0) {
            result = `${min}분 전`
        } else {
            result = `${hours}시간 ${min}분 전`
        }
    } else if (6 < hours) {
        // 글을 올린 시간이 360분(6시간) 이상이면서 같은 날일 경우
        //  :  HH:mm (24시간 체계를 이용하여 글을 올린 시간 출력 ex) 08:38분 )
        // if (startDtm.get('date') === endDtm.get('date')) {
        if (startDate.getDate() === endDate.getDate()) {
            const hour: string = target.getHours().toString()
            const minutes: string = target.getMinutes().toString()
            const resHour = hour.length < 2 ? "0" + hour : hour
            const resMin = minutes.length < 2 ? "0" + minutes : minutes
            result = `${resHour}:${resMin}`
        } else {
            console.log(target)
            const year = target.getFullYear()
            const month = target.getMonth()
            console.log(year)
            console.log(month)
            const day = target.getDate()
            result = `${year}년 ${month}월 ${day}일`
        }
    }
    return result
}

// export const parseTimeForToday = (target: Date) => {
//     console.log("target ", target)
//     const today = new Date();
//     const timeValue = new Date(target);
//
//     const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
//     if (betweenTime < 1) return '방금전';
//     if (betweenTime < 60) {
//         return `${betweenTime}분전`;
//     }
//
//     const betweenTimeHour = Math.floor(betweenTime / 60);
//     if (betweenTimeHour < 24) {
//         return `${betweenTimeHour}시간전`;
//     }
//
//     const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
//     if (betweenTimeDay < 365) {
//         return `${betweenTimeDay}일전`;
//     }
//
//     return `${Math.floor(betweenTimeDay / 365)}년전`;
// }


export const dateToStr = (date: Date) => {
    let d = new Date(date);
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-');
}
