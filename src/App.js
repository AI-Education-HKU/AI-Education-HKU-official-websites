import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// 直接引入页面组件，不再依赖 router/index.jsx
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact'; // 预留 Contact 页面，暂时用 Home 占位

function App() {
  // 生成随机星星位置
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`
    }));
  };

  const stars = generateStars(50);

  return (
    <div className="app-container">
      {/* ========== 背景装饰层 ========== */}
      
      {/* 基础渐变光晕 */}
      <div className="bg-decoration"></div>
      
      {/* 几何图形装饰 */}
      <div className="geometric-shapes">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="square"></div>
      </div>
      
      {/* 动态线条 */}
      <div className="line-decorations">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      
      {/* 浮动粒子 */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* 光束效果 */}
      <div className="light-beams">
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
      </div>
      
      {/* 星空效果 */}
      <div className="starfield">
        {stars.map(star => (
          <div 
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.animationDelay
            }}
          ></div>
        ))}
      </div>
      
      {/* 增强网格 */}
      <div className="enhanced-grid"></div>
      
      {/* 波浪背景 */}
      <div className="wave-background">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z" 
            fill="rgba(10, 132, 255, 0.05)"
          />
          <path 
            d="M0,20 C200,80 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" 
            fill="rgba(124, 92, 255, 0.03)"
          />
        </svg>
      </div>

      {/* ========== 主要内容区域 ========== */}
      
      {/* 关键：BrowserRouter 包裹整个应用，提供路由上下文 */}
      <BrowserRouter>
        <Header />
        
        {/* 路由规则配置 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 页面 */}
          <Route path="*" element={
            <div className="page-wrapper container">
              <h1>404 - 页面未找到</h1>
              <p>你访问的页面不存在，请返回首页</p>
              <a href="/" className="btn-apple">返回首页</a>
            </div>
          } />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
