// src/pages/Team/index.jsx
import './Team.css';

// 团队成员数据
const teamMembers = [
  {
    name: "Henry",
    role: "创始人 / 前端架构师",
    desc: "10年React开发经验，曾任职于一线互联网公司，专注前端性能优化与组件化设计",
    avatar: "/avatars/Henry.jpg"
  },
  {
    name: "李丽",
    role: "UI/UX 设计师",
    desc: "8年设计经验，擅长极简风格设计，深度研究苹果设计体系，注重用户体验细节",
    avatar: "/avatars/girl.jpeg"
  },
  {
    name: "Apylee",
    role: "后端开发负责人",
    desc: "12年后端开发经验，精通Node.js/Java，专注高可用、高性能架构设计",
    avatar: "/avatars/apylee.png"
  },
  {
    name: "陈雪",
    role: "产品经理",
    desc: "7年产品经验，擅长需求分析与产品规划，衔接设计与开发，保障项目落地",
    avatar: "/avatars/girl.jpeg"
  },
  {
    name: "赵阳",
    role: "测试工程师",
    desc: "6年测试经验，专注自动化测试与质量保障，确保产品稳定上线",
    avatar: "/avatars/boy.jpeg"
  },
  {
    name: "孙杰",
    role: "运营顾问",
    desc: "9年市场运营经验，帮助客户梳理产品定位，提升产品市场竞争力",
    avatar: "/avatars/boy.jpeg"
  }
];

const Team = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        
        {/* ✅ 添加背景层 - 与 Home 一致 */}
        <div className="hero-background">
          <div className="animated-gradient"></div>
          
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
          </div>
          
          <div className="wave-container wave-bottom">
            <svg className="wave-svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
              <path className="wave-path wave-3" d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,150 L0,150 Z" />
              <path className="wave-path wave-4" d="M0,100 C240,60 480,140 720,100 C960,60 1200,140 1440,100 L1440,150 L0,150 Z" />
            </svg>
          </div>
          
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="light-beams">
            <div className="beam beam-1"></div>
            <div className="beam beam-2"></div>
            <div className="beam beam-3"></div>
            <div className="beam beam-4"></div>
          </div>
          
          <div className="grid-overlay"></div>
          
          <div className="rotating-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          
          <div className="meteors">
            <div className="meteor meteor-1"></div>
            <div className="meteor meteor-2"></div>
            <div className="meteor meteor-3"></div>
          </div>
        </div>
        
        {/* 页面头部 - 原内容保持不变 */}
        <section className="team-header">
          <h1>我们的团队</h1>
          <p>一群热爱产品、追求极致的专业人士</p>
          <div className="divider"></div>
        </section>

        {/* 团队成员列表 - 原内容保持不变 */}
        <section className="team-members">
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div className="member-card" key={index}>
                <div className="avatar-wrapper">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="member-avatar" 
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
