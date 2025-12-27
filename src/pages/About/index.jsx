// src/pages/About/index.jsx
import './About.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        {/* 动态背景层 - 与 Home 一致 */}
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

        {/* Hero 区域 */}
        <section className="about-hero">
          <div className="hero-inner">
            <h1>关于我们</h1>
            <p className="hero-subtitle">
              HKU AI Education | 始于热爱，成于同行
            </p>
          </div>
        </section>

        {/* 我们的故事 */}
        <section className="about-story">
          <h2>我们的故事</h2>
          <div className="story-content">
            <p>
              缘起港大，因梦相聚。2025年，8位扎根香港大学的追光者，因对AI重塑教育的共同信仰走到一起。我们来自计算机、教育学、设计等不同专业，却怀揣着同一个初心：让人工智能走出实验室，成为每个学习者手中的「个性化导师」，让优质教育资源突破边界、触手可及。
            </p>
            <p>
              作为港大校内成长的初创团队，我们深植学术土壤，又兼具敏锐的创业热情—— 从宿舍里的第一版原型，到面向港大师生的内测产品，我们始终以「教育为本，AI为辅」为准则，拒绝技术的炫技式堆砌，只做真正能解决学习痛点的产品。
            </p>
            <p>
              这不是一场孤军奋战的旅程，而是8份热爱的同频共振。我们相信，小团队也能创造大价值，而源自HKU的学术基因与创新精神，终将让我们的AI教育理念，照亮更多学习者的成长之路。
            </p>
          </div>
        </section>

        {/* 核心价值观 */}
        <section className="about-values">
          <h2>核心价值观</h2>
          <div className="values-list">
            {/* 卡片1 */}
            <div className="value-item">
              <span className="corner-tl"></span>
              <span className="corner-br"></span>
              <div className="icon-wrapper">📚</div>
              <h3>学术为本</h3>
              <p>扎根港大科研体系，让AI教育落地有理论支撑</p>
            </div>
            
            {/* 卡片2 */}
            <div className="value-item">
              <span className="corner-tl"></span>
              <span className="corner-br"></span>
              <div className="icon-wrapper">👥</div>
              <h3>用户中心</h3>
              <p>从学习者需求出发，拒绝脱离实际的技术空想</p>
            </div>
            
            {/* 卡片3 */}
            <div className="value-item">
              <span className="corner-tl"></span>
              <span className="corner-br"></span>
              <div className="icon-wrapper">🌱</div>
              <h3>共创成长</h3>
              <p>8人同频，与用户同行，在迭代中实现双向成长</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
