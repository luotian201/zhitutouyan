import React from 'react';

export default function Market() {
  return (
    <section id="market" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            巨大的市场潜力
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI赋能投资是不可逆转的趋势,从"人脑经验"走向"数据驱动"是必然进程
          </p>
        </div>

        {/* Market Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl font-bold mb-4">2000万+</div>
            <div className="text-xl mb-2">全球活跃个人投资者</div>
            <p className="text-blue-100">巨大的C端市场基础</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl font-bold mb-4">1万+</div>
            <div className="text-xl mb-2">专业交易员与机构</div>
            <p className="text-purple-100">高价值B端客户群体</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl font-bold mb-4">千亿级</div>
            <div className="text-xl mb-2">金融科技市场规模</div>
            <p className="text-green-100">持续高速增长的赛道</p>
          </div>
        </div>

        {/* Target Customers */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            目标客户群体
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-indigo-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">个人投资者</h4>
              <p className="text-gray-600 text-center text-sm">
                活跃股民、期货交易者,希望提升决策准确率,降低投资风险
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">专业交易员</h4>
              <p className="text-gray-600 text-center text-sm">
                职业操盘手、投资顾问,需要更高效的技术分析工具辅助决策
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">量化投资机构</h4>
              <p className="text-gray-600 text-center text-sm">
                对冲基金、私募基金,寻求将图形识别技术整合进量化策略
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">金融培训机构</h4>
              <p className="text-gray-600 text-center text-sm">
                投资教育平台,需要先进的教学工具和实战案例资源
              </p>
            </div>
          </div>
        </div>

        {/* Market Trends */}
        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-10 md:p-16 text-white mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            不可逆转的市场趋势
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold">量化交易主流化</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                全球量化交易规模持续扩大,已占据主要市场交易量的60%以上。机器学习和AI技术在金融领域的应用日益成熟,投资决策的数据驱动化成为行业共识。智图投研正是这一趋势下的创新产物,将AI技术普惠到更广泛的投资者群体。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold">金融科技创新</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                全球金融科技投资规模逐年攀升,各国政府积极推动金融创新和数字化转型。投资者对智能化工具的接受度和需求度不断提高,愿意为能真正带来价值的技术产品付费。智图投研抓住了金融科技创新的最佳时机。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold">投资门槛降低</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                互联网券商和交易平台的普及,使得越来越多普通人参与投资市场。但新手投资者往往缺乏专业知识和经验,急需智能化工具辅助决策。智图投研通过AI技术降低了技术分析的门槛,让投资决策更加科学和民主化。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold">全球市场机遇</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                金融市场全球化程度不断加深,跨境投资日益便利。智图投研支持多市场、多品种的图形识别分析,能够服务全球投资者。从中国出发,逐步拓展亚太、欧美市场,具备国际化发展的巨大潜力。
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            典型应用场景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-5xl mb-4">📈</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">日内短线交易</h4>
              <p className="text-gray-600 leading-relaxed">
                截取当前分时或小时图,快速匹配历史相似走势,把握短线交易机会。特别适合T+0市场的高频交易者,提升决策速度和胜率。
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">中长线趋势判断</h4>
              <p className="text-gray-600 leading-relaxed">
                分析日线、周线图形态,识别趋势转折点和支撑阻力位。基于历史规律评估上涨/下跌空间,制定中长期投资计划和止盈止损策略。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">风险预警监控</h4>
              <p className="text-gray-600 leading-relaxed">
                设置关注股票池,系统自动监控异常形态。当出现暴跌、放量滞涨等风险信号时,第一时间推送预警,帮助投资者及时止损避险。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
