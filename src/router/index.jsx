// 引入 React Router 核心方法
import { createBrowserRouter } from 'react-router-dom';

// 引入所有页面组件（对应 pages 目录下的页面）
import Home from '../pages/Home';
import About from '../pages/About';
import Team from '../pages/Team';
// 可选：如果后续要加“联系我们”页面，先预留，暂时用 Home 占位
import Contact from '../pages/Home';

// 配置路由规则：路径 → 对应页面组件
const router = createBrowserRouter([
  {
    path: '/',          // 访问根路径（首页）
    element: <Home />,  // 渲染 Home 页面
  },
  {
    path: '/about',     // 关于我们页路径
    element: <About />, // 渲染 About 页面
  },
  {
    path: '/team',      // 团队成员页路径
    element: <Team />,  // 渲染 Team 页面
  },
  {
    path: '/contact',   // 联系我们页路径（预留）
    element: <Contact />, // 暂时渲染 Home，后续替换为 Contact 页面
  },
  // 可选：404 页面配置（访问不存在的路径时显示）
  {
    path: '*',
    element: (
      <div className="page-wrapper container">
        <h1>404 - 页面未找到</h1>
        <p>你访问的页面不存在，请返回首页</p>
        <a href="/" className="btn-apple">返回首页</a>
      </div>
    ),
  },
]);

// 导出路由配置，供 App.js 挂载
export default router;