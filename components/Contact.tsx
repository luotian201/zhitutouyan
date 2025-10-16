import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            期待与您携手,共创智能投研新时代
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">智图投研</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm mb-1">公司名称</div>
                    <div className="text-xl font-semibold">智图投研</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm mb-1">联系人</div>
                    <div className="text-xl font-semibold">Qais</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm mb-1">联系方式</div>
                    <div className="text-xl font-semibold">15121095409</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm mb-1">定位</div>
                    <div className="text-lg font-semibold leading-relaxed">
                      基于AI图形识别的下一代<br />智能投研决策平台
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-sm leading-relaxed">
                  我们致力于通过先进的人工智能技术,为全球投资者提供科学、高效、可信赖的智能投研决策支持,让投资从"模糊盘感"走向"精准预测"。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">专业咨询</div>
                <p className="text-gray-600">为您提供专业的产品咨询和演示服务</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">定制方案</div>
                <p className="text-gray-600">根据您的需求定制专属投研解决方案</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                我们能为您提供
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">产品演示</h4>
                    <p className="text-gray-600">一对一产品功能演示,深入了解智图投研的强大能力</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">试用体验</h4>
                    <p className="text-gray-600">免费试用账号,亲身体验AI智能投研的魅力</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">技术支持</h4>
                    <p className="text-gray-600">专业技术团队提供全方位技术支持和培训服务</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">定制开发</h4>
                    <p className="text-gray-600">为机构客户提供私有化部署和定制化开发服务</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">合作洽谈</h4>
                    <p className="text-gray-600">探讨战略合作、API授权等多种合作模式</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                适用客户类型
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="font-bold text-gray-900">个人投资者</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">💼</div>
                    <div className="font-bold text-gray-900">专业交易员</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏢</div>
                    <div className="font-bold text-gray-900">量化机构</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎓</div>
                    <div className="font-bold text-gray-900">培训机构</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-4">
                立即联系我们,开启智能投研之旅
              </h4>
              <a
                href="tel:15121095409"
                className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                拨打电话咨询
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
