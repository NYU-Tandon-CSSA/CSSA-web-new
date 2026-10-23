import EOPhoto from '../images/EO2.jpg';
import PMPhoto from '../images/PM.png';
import EAPhoto from '../images/EA.jpg';
import ITCDPhoto from '../images/ITCD.png';

export const departmentsData = [
    {
        key: 'events',
        image: EOPhoto,
        name: { zh: '活动部 Event Organizer', en: 'Event Organizer' },
        description: {
            zh: '我们是NYU Tandon CSSA 策划、组织和执行活动的部门。从前期brainstorm活动方案、场地人员安排、道具准备，到后期的现场推进与协调，活动部成员一次次地把脑洞变成现实。',
            en: 'We are the department responsible for planning, organizing, and executing events for NYU Tandon CSSA. From initial brainstorming of event ideas, venue and staff arrangements, to the final execution and coordination on-site, our members continuously turn creative concepts into reality.',
        },
    },
    {
        key: 'externalRelations',
        image: EAPhoto,
        name: { zh: '外联部 External Affair', en: 'External Affair' },
        description: {
            zh: '我们主要负责对外联系公司、赞助商以及其他学联，在建立良好沟通、合作的基础上，为Tandon CSSA提供活动和宣传所需要的信息、资源、赞助资金等。',
            en: 'We are primarily responsible for establishing and maintaining connections with companies, sponsors, and other student organizations. Building on the foundation of good communication and collaboration, we provide the necessary information, resources, and sponsorship funds for Tandon CSSA\'s events and promotions.',
        },
    },
    {
        key: 'media',
        image: PMPhoto,
        name: { zh: '宣传媒体部 Public Relation & Media', en: 'Public Relation & Media' },
        description: {
            zh: '我们运营着CSSA各个官方平台，负责各项活动工作的宣传、记录及总结，是搭建起各部门间合作及学联与学生间交流的重要桥梁。我们产出各种活动海报、纪录片和各类干货，还有不定期的原创主题专栏。',
            en: 'We manage all of CSSA\'s official platforms, handling the promotion, documentation, and summarization of various events. We serve as a crucial bridge between different departments and between the student organization and the student body. We produce various event posters, documentaries, and informative content, along with regular original themed columns.',
        },
    },
    {
        key: 'itcd',
        image: ITCDPhoto,
        name: { zh: '技术和职业发展部 ITCD', en: 'ITCD' },
        description: {
            zh: '我们正在积极运用学校和CSSA的校友资源，为中国学生及学者搭建一个职业发展和交流的平台。我们策划了和行业精英的Coffee Chat活动以及校友网的搭建。同时，我们还为CSSA举办的各种活动提供技术支持。',
            en: 'We are actively utilizing the school and CSSA alumni resources to build a platform for career development and exchange for Chinese students and scholars. We have organized Coffee Chat events with industry elites and built an alumni network. At the same time, we also provide technical support for various events hosted by CSSA.',
        },
    },
];
