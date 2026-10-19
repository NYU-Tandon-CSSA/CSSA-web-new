// 动态导入所有活动图片
import { useLanguage } from "../components/UseLanguage";
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        const id = item.match(/event(\d+)/)[1];  // 从文件名提取ID
        images[id] = r(item);
    });
    return images;
};

// 导入 Events 文件夹下所有的图片
const eventImages = importAll(require.context('../images/Events', false, /event\d+\.(png|jpe?g|svg)$/i));

// link 为可选字段：填了公众号推文地址才会显示「活动回顾」按钮

export const useEventData = () => {
    const { t } = useLanguage();
    return [
    {
        id: 1,
        title: t('Events.eventsData.1.title'),
        date: '2024-09-08',
        description: t('Events.eventsData.1.description'),
        image: eventImages[1],
    },
    {
        id: 2,
        title: t('Events.eventsData.2.title'),
        date: '2024-11-03',
        description: t('Events.eventsData.2.description'),
        image: eventImages[2],
    },
    {
        id: 3,
        title: t('Events.eventsData.3.title'),
        date: '2024-12-08',
        description: t('Events.eventsData.3.description'),
        image: eventImages[3],
    },
    {
        id: 4,
        title: t('Events.eventsData.4.title'),
        date: '2024-07-27',
        description: t('Events.eventsData.4.description'),
        image: eventImages[4],
    },
    {
        id: 5,
        title: t('Events.eventsData.5.title'),
        date: '2024-09-17',
        description: t('Events.eventsData.5.description'),
        image: eventImages[5],
    },
    {
        id: 6,
        title: t('Events.eventsData.6.title'),
        date: '2024-09-29',
        description: t('Events.eventsData.6.description'),
        image: eventImages[6],
    },  
    {
        id: 7,
        title: t('Events.eventsData.7.title'),
        date: '2024-09-02',
        description: t('Events.eventsData.7.description'),
        image: eventImages[7],
    },
    {
        id: 8,
        title: t('Events.eventsData.8.title'),
        date: '2024-09-11',
        description: t('Events.eventsData.8.description'),
        image: eventImages[8],
    },
    {
        id: 9,
        title: t('Events.eventsData.9.title'),
        date: '2024-09-20',
        description: t('Events.eventsData.9.description'),
        image: eventImages[9],
    },
    {
        id: 10,
        title: t('Events.eventsData.10.title'),
        date: '2024-10-11',
        description: t('Events.eventsData.10.description'),
        image: eventImages[10],
    },
    {
        id: 11,
        title: t('Events.eventsData.11.title'),
        date: '2024-10-26',
        description: t('Events.eventsData.11.description'),
        image: eventImages[11],
    },
    {
        id: 12,
        title: t('Events.eventsData.12.title'),
        date: '2024-10-25',
        description: t('Events.eventsData.12.description'),
        image: eventImages[12],
    },  
    {
        id: 13,
        title: t('Events.eventsData.13.title'),
        date: '2024-11-04',
        description: t('Events.eventsData.13.description'),
        image: eventImages[13],
    },
    {
        id: 14,
        title: t('Events.eventsData.14.title'),
        date: '2024-11-21',
        description: t('Events.eventsData.14.description'),
        image: eventImages[14],
    },
    {
        id: 15,
        title: t('Events.eventsData.15.title'),
        date: '2024-11-22',
        description: t('Events.eventsData.15.description'),
        image: eventImages[15],
    },
    {
        id: 16,
        title: t('Events.eventsData.16.title'),
        date: '2025-02-07',
        description: t('Events.eventsData.16.description'),
        image: eventImages[16],
    },
    {
        id: 17,
        title: t('Events.eventsData.17.title'),
        date: '2024-11-02',
        description: t('Events.eventsData.17.description'),
        image: eventImages[17],
    },
]; 

}