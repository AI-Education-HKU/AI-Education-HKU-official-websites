// src/pages/Home/index.jsx
import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        {/* 苹果风格的首页头部 */}
        <section className="home-hero">
          <h1>打造极致的产品体验</h1>
          <p>我们是一支专注于前端、后端、设计的全栈团队</p>
          <button className="btn-apple">了解我们的服务</button>
        </section>

        {/* 苹果风格的内容模块 */}
        <section className="home-features">
          <h2>我们的优势</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>极简设计</h3>
              <p>遵循苹果设计理念，打造简洁、易用的产品体验</p>
            </div>
            <div className="feature-item">
              <h3>技术驱动</h3>
              <p>基于 React、Node.js 等前沿技术栈开发</p>
            </div>
            <div className="feature-item">
              <h3>团队协作</h3>
              <p>高效的协作流程，确保项目按时、高质量交付</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;