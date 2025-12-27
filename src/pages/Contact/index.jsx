// src/pages/Contact/index.jsx
import './Contact.css';

const Contact = () => {
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
        <section className="contact-hero">
          <h1>联系我们</h1>
          <p className="hero-subtitle">随时为你解答疑问，期待与你合作</p>
        </section>

        {/* 联系人卡片 */}
        <section className="contact-card-section">
          <div className="contact-card">
            <div className="contact-avatar">
              <img src="/avatars/Henry.jpg" alt="Henry" />
            </div>
            
            <div className="contact-info">
              <h2>Henry</h2>
              <p className="contact-role">创始人 / 前端架构师</p>
              <p className="contact-desc">
                欢迎随时联系我。关于产品咨询、合作洽谈、技术交流，我都会尽快回复。
              </p>
              
              <div className="contact-email">
                <span className="email-icon">✉️</span>
                <a href="mailto:henrytojob@gmail.com">henrytojob@gmail.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* 工作时间提示 */}
        <section className="contact-footer">
          <p className="work-time">工作时间：周一至周五 9:00-18:00（法定节假日除外）</p>
          <p className="reply-info">一般情况下，我们会在1-2个工作日内回复您的邮件</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
