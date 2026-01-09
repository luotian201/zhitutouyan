import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">智图投研</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              基于AI图形识别的下一代智能投研决策平台,让投资从"模糊盘感"走向"精准预测"。
            </p>
            <p className="text-gray-400 text-sm">
              联系人:Qais<br />
              电话:15121095409
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  产品功能
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-gray-400 hover:text-white transition-colors">
                  核心优势
                </a>
              </li>
              <li>
                <a href="#market" className="text-gray-400 hover:text-white transition-colors">
                  市场潜力
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">
                  为什么选择我们
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
              <li>
                <a
                  href="https://ztwd.top/#/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  产品网站
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">核心服务</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI图形识别</li>
              <li>历史数据匹配</li>
              <li>概率统计分析</li>
              <li>实时行情追踪</li>
              <li>策略回测系统</li>
              <li>定制化开发</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 智图投研. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                服务条款
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                免责声明
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
