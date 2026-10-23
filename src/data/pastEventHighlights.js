import werewolf from '../images/werewolf2.0.png';
import alumniAssociation from '../images/alumni_association.jpg';
import ifYouAreTheOne from '../images/If_you_are_the_one.png';
import voiceOfNYC from '../images/Voice_of_NYC.jpg';
import coffeeChat from '../images/coffee_chat.jpg';

// 首页「活动 · 回顾」的卡片
export const pastEventHighlights = [
    {
        key: 'boardGameNight',
        image: werewolf,
        name: { zh: '周五桌游夜', en: 'Friday Game Night' },
        description: { zh: '游戏开始了，你准备好了吗？', en: 'The game has started, are you ready?' },
        reviewLink: 'https://mp.weixin.qq.com/s/aGcqx2f3yRKFcND69erLpA',
    },
    {
        key: 'alumni',
        image: alumniAssociation,
        name: { zh: '校友会', en: 'Alumni Association' },
        description: { zh: '与优秀校友面对面交流', en: 'Face-to-face communication with outstanding alumni' },
        reviewLink: 'https://mp.weixin.qq.com/s/zUUUnodaWAIr6A8ygWayaA',
    },
    {
        key: 'ifYouAreTheOne',
        image: ifYouAreTheOne,
        name: { zh: '非诚勿扰', en: 'If You Are The One' },
        description: { zh: '寻找属于你的\'The One\'', en: 'Finding Your Soulmate' },
        reviewLink: 'https://mp.weixin.qq.com/s/iKj8NE3CwyO9U-tZ-_eq6g',
    },
    {
        key: 'voiceOfHeart',
        image: voiceOfNYC,
        name: { zh: '心动的声音', en: 'Voice of Heart' },
        description: { zh: '一起寻找最强之声', en: 'Finding the Best Voice' },
        reviewLink: 'https://mp.weixin.qq.com/s/bcJDCI84PLyek9O63GaJRg',
    },
    {
        key: 'coffeeChat',
        image: coffeeChat,
        name: { zh: 'Coffee Chat', en: 'Coffee Chat' },
        description: { zh: '与资深嘉宾近距离交流', en: 'Close interaction with our senior guests' },
        reviewLink: 'https://mp.weixin.qq.com/s/w6_CleHw2INkQqvM9QucMw',
    },
];
