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

// 新增活动：复制一条，title / description 的中英文写在一起；en 留空时页面会显示中文
// link 为可选字段：填了公众号推文地址才会显示「活动回顾」按钮
export const eventsData = [
    {
        id: 1,
        date: '2024-09-08',
        title: { zh: '奔跑吧NY！总督岛秋游', en: 'Running NY! Governors Island Autumn Excursion' },
        description: {
            zh: '在Governors Island畅享秋游！体验丢飞盘、猜歌名、猫捉老鼠等趣味小游戏，在清凉海风中放松身心，更可欣赏曼哈顿绝美天际线，乐趣无限！',
            en: 'Enjoy an autumn excursion at Governors Island! Experience engaging activities including frisbee games, song trivia, and cat-and-mouse tag. Unwind in the refreshing ocean breeze while taking in the spectacular Manhattan skyline.',
        },
        image: eventImages[1],
    },
    {
        id: 2,
        date: '2024-11-03',
        title: { zh: '一站到底知识竞赛', en: 'Stand to the End: Academic & Trivia Competition' },
        description: {
            zh: '一站到底，脑力与激情的碰撞！活动为12人的个人赛和观众答题环节，涵盖知识问答、趣味互动等环节。展现你的智慧和应变能力，与朋友一起迎接挑战，争夺"一站到底"桂冠！快来加入，感受智力比拼的乐趣！',
            en: 'A thrilling convergence of intellect and passion! The event features a 12-contestant individual competition alongside audience participation rounds, encompassing general knowledge trivia and interactive challenges. Showcase your wisdom and quick thinking, embrace the challenge with peers, and compete for the ultimate championship title.',
        },
        image: eventImages[2],
    },
    {
        id: 3,
        date: '2024-12-08',
        title: { zh: '心动的声音 NYC Open Mic 2024', en: 'Heartbeat Melodies: NYC Open Mic 2024' },
        description: {
            zh: '为音乐爱好者搭建的独特平台，通过音乐连接人心，温暖寒冬。无论是抒情慢歌还是激情快歌，都将为冬天增添热度。在心动的声音舞台，人们展示真实的自我，并通过现场表演实现情感碰撞。',
            en: 'A dedicated platform for music enthusiasts, designed to foster community and bring warmth through music during the winter season. From soulful ballads to high-energy performances, artists showcase their authentic selves on stage, creating meaningful emotional connections through live performance.',
        },
        image: eventImages[3],
    },
    {
        id: 4,
        date: '2024-07-27',
        title: { zh: 'NYU Tandon CSSA 新生线上见面会', en: 'NYU Tandon CSSA Incoming Student Virtual Welcome Session' },
        description: {
            zh: '本次活动旨在帮助各位新生打破初来乍到的局面，通过轻松愉快的线上互动，快速融入NYU Tandon大家庭。在这里，你不仅可以了解到学校的各项资源、学术与生活资讯，还能结识来自全国甚至世界各地的同学。',
            en: 'Designed to ease incoming students into their university transition, this event facilitates a seamless integration into the NYU Tandon community through engaging virtual interactions. Participants gain comprehensive insights into institutional resources, academic expectations, and student life, while connecting with peers globally.',
        },
        image: eventImages[4],
    },
    {
        id: 5,
        date: '2024-09-17',
        title: { zh: '月满Tandon：中秋游园迎新会', en: 'Moonlit Tandon: Mid-Autumn Festival & Welcome Fair' },
        description: {
            zh: '回顾Tandon CSSA的历程，各部门协同合作，秉持团结创新理念。期待新成员加入，共创精彩。中秋庙会备有滚滚乐、猜月饼馅、投壶等游戏，节日氛围浓厚，诚邀共度佳节！',
            en: 'Celebrating unity and innovation across all Tandon CSSA departments, this gathering welcomes new members to join our vibrant community. The Mid-Autumn carnival features traditional festive games—including rolling challenges, mooncake flavor guessing, and pitch-pot (Touhu)—offering an immersive cultural experience for all attendees.',
        },
        image: eventImages[5],
    },
    {
        id: 6,
        date: '2024-09-29',
        title: { zh: 'NYU Tandon CSSA年度全员大会', en: 'NYU Tandon CSSA Annual General Assembly' },
        description: {
            zh: '大会汇聚所有CSSA成员，共同探讨社团的成长，并通过丰富的互动环节增强彼此间的联系。无论你是经验丰富的老成员还是充满激情的新伙伴，这都是一个展示自我、凝聚力量的平台。',
            en: 'The assembly brings together all CSSA members to review organizational progress and strengthen internal community ties through interactive sessions. Serving as a platform for empowerment and collaboration, it welcomes both returning members and prospective leaders.',
        },
        image: eventImages[6],
    },
    {
        id: 7,
        date: '2024-09-02',
        title: { zh: 'NYU Tandon 校园初探: Campus Tour', en: 'NYU Tandon Campus Exploration: Campus Tour' },
        description: {
            zh: '新生在学长学姐的带领下，依次参观了教学楼、实验室、图书馆、餐厅等多个校园地标。每个角落都蕴含着NYU Tandon的独特魅力与学术氛围，让新生同学对即将开启的大学生活充满了期待。',
            en: 'Guided by senior student mentors, incoming students tour essential campus landmarks, including academic buildings, research laboratories, libraries, and dining facilities. The tour offers an orientation to the academic landscape and vibrant campus environment of NYU Tandon.',
        },
        image: eventImages[7],
    },
    {
        id: 8,
        date: '2024-09-11',
        title: { zh: 'Coffee Chat：抢先一步 认识你的教授', en: 'Coffee Chat: Meet Your Professors' },
        description: {
            zh: '两位教授以亲切的方式打破了传统课堂的距离感，分享了他们的教学理念、科研故事以及在学术路上的点滴经历。在温馨的聊天氛围中，同学们踊跃提问，从学术发展到个人成长，教授们都耐心细致地解答，不仅为大家提供了宝贵的建议，更拉近了师生之间的距离。',
            en: 'In an accessible and casual environment, faculty members share their educational philosophies, research trajectories, and academic experiences. Students engage in discussions spanning academic development and career orientation, gaining tailored mentorship and building valuable faculty connections.',
        },
        image: eventImages[8],
    },
    {
        id: 9,
        date: '2024-09-20',
        title: { zh: 'Tandon桌游夜（全年无休版）', en: 'Tandon Board Game Night (Ongoing Edition)' },
        description: {
            zh: '在这里，无论你是桌游新手还是资深玩家，都能找到属于自己的乐趣。我们为大家精心挑选了各种经典与创新的桌游，让你在紧张的学习间隙放松心情、增进交流。',
            en: 'Tandon CSSA Board Game Night provides an engaging social platform for students to unwind and connect through tabletop gaming. Featuring a curated selection of strategic and casual games, the event accommodates all skill levels, encouraging friendly competition and community building.',
        },
        image: eventImages[9],
    },
    {
        id: 10,
        date: '2024-10-11',
        title: { zh: 'NYU Tandon CSSA x NYU CEC 创业分享会', en: 'NYU Tandon CSSA x NYU CEC Entrepreneurship Forum' },
        description: {
            zh: '由NYU Tandon CSSA与创业社团NYU CEC联合举办的创业分享会，邀请了多位在创业领域有着丰富经验的校友，分享他们的创业故事、经验以及对未来创业趋势的看法。',
            en: 'Co-hosted by NYU Tandon CSSA and the NYU Chinese Entrepreneurship Club (CEC), this forum invites distinguished alumni entrepreneurs to share insights on venture building, industry experiences, and emerging technological trends.',
        },
        image: eventImages[10],
    },
    {
        id: 11,
        date: '2024-10-26',
        title: { zh: 'Coffee Chat：大厂Engineer职场分享', en: 'Coffee Chat: Tech Industry Engineering Panel' },
        description: {
            zh: '本次Coffee Chat邀请了来自Google和Amazon的工程师，分享他们的职场经验、技术成长以及对未来职业发展的看法。',
            en: 'This panel features software engineers from leading technology companies, including Google and Amazon, discussing career growth strategies, technical skill development, and industry perspectives.',
        },
        image: eventImages[11],
    },
    {
        id: 12,
        date: '2024-10-25',
        title: { zh: '探索纽约·一周企划（持续更新版）', en: 'Explore NYC: Weekly City Guide (Series)' },
        description: {
            zh: '从曼哈顿的繁华到布鲁克林的宁静，从中央公园的绿意到华尔街的金融气息，这里有着丰富的文化、历史和美食。我们将每周派出我们的成员，为大家带来地道的纽约生活体验。',
            en: 'Capturing the cultural richness, historical landmarks, and culinary diversity of New York City—from Midtown Manhattan to Brooklyn. Our student representatives regularly share curated guides and authentic insights into navigating NYC life.',
        },
        image: eventImages[12],
    },
    {
        id: 13,
        date: '2024-11-04',
        title: { zh: 'NYU Tandon CSSA x 合抱之木 浙江大学美国学者见面会', en: 'NYU Tandon CSSA x Zhejiang University US Scholar Networking Symposium' },
        description: {
            zh: '我们邀请了来自浙江大学的学者，小规模线下交流海外科研人才回国引进的政策，面对面和中科院院士，浙江大学不同院系的院长进行交流，为身处纽约的华人学生学者量身定制一场科研networking活动。',
            en: 'Jointly organized by NYU Tandon CSSA and Zhejiang University, this symposium convenes prominent scholars based in the U.S. to exchange perspectives on academic advancement, research opportunities, and talent recruitment policies in China.',
        },
        image: eventImages[13],
    },
    {
        id: 14,
        date: '2024-11-21',
        title: { zh: 'NYU Tandon 2024 线上校友会', en: 'NYU Tandon 2024 Virtual Alumni Symposium' },
        description: {
            zh: '我们邀请了多位来自SDE，PM，Quant，法律领域的NYU校友，分享他们的经验，为在校的同学们提供宝贵的建议。',
            en: 'This virtual panel convenes NYU alumni across key professional sectors—including Software Engineering, Product Management, Quantitative Finance, and Legal Services—to deliver strategic career guidance and actionable insights for current students.',
        },
        image: eventImages[14],
    },
    {
        id: 15,
        date: '2024-11-22',
        title: { zh: 'NYU大厂求职分享 Tech Company Panel Discussion', en: 'NYU Tech Company Panel Discussion & Career Forum' },
        description: {
            zh: '本次活动旨在为求职路上的每位同学提供一个与顶尖科技企业精英面对面交流的平台。在这里，多位来自全球知名大厂的嘉宾分享了他们的职场历程、求职策略以及在激烈竞争中脱颖而出的心得体会。',
            en: 'Designed to bridge students with industry professionals, this career forum features guest speakers from global technology corporations sharing competitive job-search strategies, interviewing insights, and professional progression advice.',
        },
        image: eventImages[15],
    },
    {
        id: 16,
        date: '2025-02-07',
        title: { zh: '2025蛇来运转·新春盛典', en: '2025 Lunar New Year Gala: Year of the Snake' },
        description: {
            zh: '在辞旧迎新的美好时刻，我们联合Pratt CSSA精心打造了一场融合传统韵味与现代活力的盛大庆典。活动现场呈现了精彩纷呈的国风表演、互动游戏和精美礼品，让每位参与者都能感受到浓浓的年味。让我们一同迎接2025年的到来，祈愿新的一年蛇年大吉，运转乾坤！',
            en: 'Co-organized with Pratt CSSA, this celebratory gala honors the Lunar New Year by integrating cultural heritage with modern performing arts. Featuring traditional artistic performances, interactive activities, and festive cultural gifts, the event fosters community spirit as we usher in the Year of the Snake.',
        },
        image: eventImages[16],
    },
    {
        id: 17,
        date: '2024-11-02',
        title: { zh: '2024英雄联盟总决赛线下观赛', en: '2024 League of Legends World Championship Viewing Party' },
        description: {
            zh: '我们汇聚了一众电竞爱好者，共同沉浸在这场激动人心的电竞盛宴中。大家不仅见证了顶级战队的精妙操作和紧张刺激的战术较量，更在互动交流中结识了许多志同道合的朋友。感谢每一位参与者的热情支持！',
            en: 'Bringing together esports enthusiasts for an immersive viewing experience of the World Championship finals. Attendees witnessed elite gameplay and tactical competition while connecting with peers in a vibrant community atmosphere.',
        },
        image: eventImages[17],
    },
];
