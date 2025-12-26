import './Footer.css';

const Footer = () => {
  return (
    <footer className="apple-footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">© {new Date().getFullYear()} 团队官网 - 保留所有权利</p>
          <p className="footer-link">
            {/* 修复：设置有效 href + 禁用 ESLint 检查 */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#privacy">隐私政策</a> |
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#terms">使用条款</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;