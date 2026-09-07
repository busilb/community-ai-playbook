import type { Role } from "./types";

export const roles: Role[] = [
  {
    id: "volunteer",
    name: "社区志愿者",
    icon: "🤝",
    description: "让志愿服务更高效，从活动策划到探访记录，AI 帮你把时间花在更有价值的地方。",
    color: "from-emerald-500 to-teal-600",
    available: true,
    painPoints: [
      "活动通知不知道怎么写",
      "活动方案准备很耗时间",
      "活动结束后不会写总结",
      "探访老人时不知道该问什么",
      "老人说的问题很多，不知道怎么整理",
      "想做社区反诈宣传，但不会制作内容",
      "想把一次活动做成图文或短视频",
    ],
  },
  {
    id: "senior",
    name: "老年人",
    icon: "🧓",
    description: "安全上网、健康关怀、生活便利，AI 用最简单的方式帮助您的日常生活。",
    color: "from-amber-500 to-orange-600",
    available: true,
    painPoints: [
      "收到可疑电话短信不知道是不是诈骗",
      "体检报告看不懂",
      "不会用手机挂号、打车、买菜",
      "想了解自己吃的药有没有冲突",
      "想跟远方的孩子视频但不会操作",
    ],
  },
  {
    id: "kids",
    name: "家长 / 小学生",
    icon: "🎒",
    description: "让孩子在玩中学、在创作中理解 AI，培养面向未来的思维能力。",
    color: "from-violet-500 to-purple-600",
    available: true,
    painPoints: [
      "用 AI 把数学题变成小游戏",
      "和 AI 一起画图、做创意表达",
      "如何通过不断提问优化一张图片",
      "AI 为什么会说错",
      "怎么判断 AI 的答案能不能相信",
      "人和 AI 应该怎么分工",
    ],
  },
  {
    id: "community",
    name: "社区工作人员",
    icon: "🏘️",
    description: "提升社区治理效率，用 AI 辅助日常文书、居民沟通和活动组织。",
    color: "from-blue-500 to-indigo-600",
    available: false,
    painPoints: [],
  },
  {
    id: "property",
    name: "物业工作人员",
    icon: "🔧",
    description: "报修处理、通知公告、投诉响应，AI 让物业服务更专业更及时。",
    color: "from-slate-500 to-gray-600",
    available: false,
    painPoints: [],
  },
];

export function getRoleById(id: string) {
  return roles.find((r) => r.id === id);
}
