// 动态导入所有活动图片
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

export const eventsData = [
    {
        id: 1,
        title: '奔跑吧NY！总督岛秋游',
        date: '2024-09-08',
        description: '在Governors Island畅享秋游！体验丢飞盘、猜歌名、猫捉老鼠等趣味小游戏，在清凉海风中放松身心，更可欣赏曼哈顿绝美天际线，乐趣无限！',
        image: eventImages[1],
        link: 'https://example.com/event-details',
    },
    {
        id: 2,
        title: '一站到底知识竞赛',
        date: '2024-11-03',
        description: '一站到底，脑力与激情的碰撞！活动为12人的个人赛和观众答题环节，涵盖知识问答、趣味互动等环节。展现你的智慧和应变能力，与朋友一起迎接挑战，争夺"一站到底"桂冠！快来加入，感受智力比拼的乐趣！',
        image: eventImages[2],
        link: 'https://example.com/event-details-2',
    },
    {
        id: 3,
        title: '心动的声音 NYC Open Mic 2024',
        date: '2024-12-08',
        description: '为音乐爱好者搭建的独特平台，通过音乐连接人心，温暖寒冬。无论是抒情慢歌还是激情快歌，都将为冬天增添热度。在心动的声音舞台，人们展示真实的自我，并通过现场表演实现情感碰撞。',
        image: eventImages[3],
        link: 'https://example.com/event-details-2',
    },
    {
        id: 4,
        title: 'NYU Tandon CSSA 新生线上见面会',
        date: '2024-07-27',
        description: '本次活动旨在帮助各位新生打破初来乍到的局面，通过轻松愉快的线上互动，快速融入NYU Tandon大家庭。在这里，你不仅可以了解到学校的各项资源、学术与生活资讯，还能结识来自全国甚至世界各地的同学。',
        image: eventImages[4],
    },
    {
        id: 5,
        title: '月满Tandon：中秋游园迎新会',
        date: '2024-09-17',
        description: '回顾Tandon CSSA的历程，各部门协同合作，秉持团结创新理念。期待新成员加入，共创精彩。中秋庙会备有滚滚乐、猜月饼馅、投壶等游戏，节日氛围浓厚，诚邀共度佳节！',
        image: eventImages[5],
    },
    {
        id: 6,
        title: 'NYU Tandon CSSA年度全员大会',
        date: '2024-09-29',
        description: '大会汇聚所有CSSA成员，共同探讨社团的成长，并通过丰富的互动环节增强彼此间的联系。无论你是经验丰富的老成员还是充满激情的新伙伴，这都是一个展示自我、凝聚力量的平台。',
        image: eventImages[6],
    },  
    {
        id: 7,
        title: 'NYU Tandon 校园初探: Campus Tour',
        date: '2024-09-02',
        description: '新生在学长学姐的带领下，依次参观了教学楼、实验室、图书馆、餐厅等多个校园地标。每个角落都蕴含着NYU Tandon的独特魅力与学术氛围，让新生同学对即将开启的大学生活充满了期待。',
        image: eventImages[7],
    },
    {
        id: 8,
        title: 'Coffee Chat：抢先一步 认识你的教授',
        date: '2024-09-11',
        description: '两位教授以亲切的方式打破了传统课堂的距离感，分享了他们的教学理念、科研故事以及在学术路上的点滴经历。在温馨的聊天氛围中，同学们踊跃提问，从学术发展到个人成长，教授们都耐心细致地解答，不仅为大家提供了宝贵的建议，更拉近了师生之间的距离。',
        image: eventImages[8],
    },
    {
        id: 9,
        title: 'Tandon桌游夜（全年无休版）',
        date: '2024-09-20',
        description: '在这里，无论你是桌游新手还是资深玩家，都能找到属于自己的乐趣。我们为大家精心挑选了各种经典与创新的桌游，让你在紧张的学习间隙放松心情、增进交流。',
        image: eventImages[9],
    },
    {
        id: 10,
        title: 'NYU Tandon CSSA x NYU CEC 创业分享会',
        date: '2024-10-11',
        description: '由NYU Tandon CSSA与创业社团NYU CEC联合举办的创业分享会，邀请了多位在创业领域有着丰富经验的校友，分享他们的创业故事、经验以及对未来创业趋势的看法。',
        image: eventImages[10],
    },
    {
        id: 11,
        title: 'Coffee Chat：大厂Engineer职场分享',
        date: '2024-10-26',
        description: '本次Coffee Chat邀请了来自Google和Amazon的工程师，分享他们的职场经验、技术成长以及对未来职业发展的看法。',
        image: eventImages[11],
    },
    {
        id: 12,
        title: '探索纽约·一周企划（持续更新版）',
        date: '2024-10-25',
        description: '从曼哈顿的繁华到布鲁克林的宁静，从中央公园的绿意到华尔街的金融气息，这里有着丰富的文化、历史和美食。我们将每周派出我们的成员，为大家带来地道的纽约生活体验。',
        image: eventImages[12],
    },  
    {
        id: 13,
        title: 'NYU Tandon CSSA x 合抱之木 浙江大学美国学者见面会',
        date: '2024-11-04',
        description: '我们邀请了来自浙江大学的学者，小规模线下交流海外科研人才回国引进的政策，面对面和中科院院士，浙江大学不同院系的院长进行交流，为身处纽约的华人学生学者量身定制一场科研networking活动。',
        image: eventImages[13],
    },
    {
        id: 14,
        title: 'NYU Tandon 2024 线上校友会',
        date: '2024-11-21',
        description: '我们邀请了多位来自SDE，PM，Quant，法律领域的NYU校友，分享他们的经验，为在校的同学们提供宝贵的建议。',
        image: eventImages[14],
    },
    {
        id: 15,
        title: 'NYU大厂求职分享 Tech Company Panel Discussion',
        date: '2024-11-22',
        description: '本次活动旨在为求职路上的每位同学提供一个与顶尖科技企业精英面对面交流的平台。在这里，多位来自全球知名大厂的嘉宾分享了他们的职场历程、求职策略以及在激烈竞争中脱颖而出的心得体会。',
        image: eventImages[15],
    },
    {
        id: 16,
        title: '2025蛇来运转·新春盛典',
        date: '2025-02-07',
        description: '在辞旧迎新的美好时刻，我们联合Pratt CSSA精心打造了一场融合传统韵味与现代活力的盛大庆典。活动现场呈现了精彩纷呈的国风表演、互动游戏和精美礼品，让每位参与者都能感受到浓浓的年味。让我们一同迎接2025年的到来，祈愿新的一年蛇年大吉，运转乾坤！',
        image: eventImages[16],
    },
    {
        id: 17,
        title: '2024英雄联盟总决赛线下观赛',
        date: '2024-11-02',
        description: '我们汇聚了一众电竞爱好者，共同沉浸在这场激动人心的电竞盛宴中。大家不仅见证了顶级战队的精妙操作和紧张刺激的战术较量，更在互动交流中结识了许多志同道合的朋友。感谢每一位参与者的热情支持！',
        image: eventImages[17],
    },
]; 