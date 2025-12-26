import './About.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        {/* 页面头部 */}
        <section className="about-header">
          <h1>关于我们</h1>
          <p>我们是一支追求极致体验的产品研发团队</p>
          <div className="divider"></div>
        </section>

        {/* 团队介绍 */}
        <section className="about-intro">
          <h2>我们的故事</h2>
          <p>
            成立于2020年，我们从一个3人小团队起步，始终坚持「极简、高效、用户至上」的理念，
            借鉴苹果的产品设计哲学，为客户打造兼具美感与实用性的数字产品。
          </p>
          <p>
            我们的核心业务涵盖前端开发、后端架构、UI/UX设计、产品咨询，服务过科技、电商、教育等多个领域的客户，
            累计交付超过50个高质量项目。
          </p>
        </section>

        {/* 核心价值观 */}
        <section className="about-values">
          <h2>核心价值观</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>极简设计</h3>
              <p>去掉一切不必要的元素，让产品回归本质</p>
            </div>
            <div className="value-item">
              <h3>技术驱动</h3>
              <p>用前沿技术解决实际问题，提升效率与体验</p>
            </div>
            <div className="value-item">
              <h3>长期主义</h3>
              <p>与客户建立长期合作，持续优化产品价值</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;