import Image from "next/image";
import ParallaxProvider from "./components/ParallaxProvider";

export default function Home() {
  return (
    <>
      <ParallaxProvider />
      <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-gray-900 dark:to-gray-800">
        {/* 全局背景装饰 */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* 主要圆形 */}
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float parallax" data-speed="0.2"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-2000 parallax" data-speed="0.15"></div>
          <div className="absolute bottom-20 left-1/3 w-[550px] h-[550px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-4000 parallax" data-speed="0.1"></div>
          
          {/* 小装饰圆形 */}
          <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow parallax" data-speed="0.3"></div>
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow animation-delay-2000 parallax" data-speed="0.25"></div>
          <div className="absolute top-2/3 right-1/4 w-44 h-44 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse-slow animation-delay-4000 parallax" data-speed="0.35"></div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 relative min-h-[600px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative h-full">
            {/* 左侧个人信息 */}
            <div className="flex-1 text-left z-10 parallax" data-speed="0.05">
              <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  vv
                </h1>
                <p className="text-2xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
                  材料学研究者 / 高分子材料专家
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
                  专注于高分子材料研究，对光电高分子材料有深入研究。擅长材料性能测试与表征，追求材料性能的极致优化。
                </p>
                <div className="flex gap-4">
                  <a
                    href="#about"
                    className="px-8 py-4 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                  >
                    了解更多
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-blue-600/80 backdrop-blur-sm text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                  >
                    联系我
                  </a>
                </div>
              </div>
            </div>

            {/* 右侧头像 */}
            <div className="relative w-full md:w-[400px] h-[400px] flex-shrink-0 parallax" data-speed="0.08">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm"></div>
              <div className="w-full h-full rounded-2xl overflow-hidden ring-4 ring-white/50 shadow-2xl relative">
                <Image
                  src="/avatar.jpeg"
                  alt="vv的个人头像"
                  fill
                  className="object-cover"
                  priority
                />
                {/* 渐变蒙版 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <div className="container mx-auto px-4 py-20">
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl floating-card">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                关于我
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  2001年7月28日出生，郑州大学材料学专业在读。专注于高分子材料研究，对光电高分子材料有深入研究。
                  擅长材料性能测试与表征，追求材料性能的极致优化。在实验室工作中注重团队协作，善于沟通，乐于分享研究经验。
                  热爱探索新材料，享受科研带来的成就感。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative">
          <div className="container mx-auto px-4 py-20">
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white parallax" data-speed="0.05">
                专业领域
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-lg floating-card">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">高分子合成</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>自由基聚合</li>
                    <li>缩聚反应</li>
                    <li>活性聚合</li>
                    <li>共聚物制备</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-lg floating-card">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">材料表征</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>热分析</li>
                    <li>光谱分析</li>
                    <li>显微分析</li>
                    <li>力学性能测试</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-lg floating-card">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">应用领域</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>光电材料</li>
                    <li>生物材料</li>
                    <li>智能材料</li>
                    <li>复合材料</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-lg floating-card">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">研究技能</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>实验设计</li>
                    <li>数据分析</li>
                    <li>文献调研</li>
                    <li>论文写作</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <div className="container mx-auto px-4 py-20">
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white parallax" data-speed="0.05">
                研究项目
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden floating-card">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">光电高分子材料研究</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      研究新型光电高分子材料的合成与性能优化，重点关注其在显示器件中的应用。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm">
                        材料合成
                      </span>
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm">
                        性能表征
                      </span>
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm">
                        器件制备
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden floating-card">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">智能高分子材料开发</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      开发对外部刺激响应的智能高分子材料，包括温敏、光敏、pH敏感等性能研究。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm">
                        智能材料
                      </span>
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm">
                        响应机理
                      </span>
                      <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full text-sm backdrop-blur-sm">
                        应用研究
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="container mx-auto px-4 py-20">
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl floating-card">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                联系方式
              </h2>
              <div className="max-w-xl mx-auto text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  如果您对我的研究感兴趣，欢迎通过以下方式联系我：
                </p>
                <div className="flex justify-center gap-6">
                  <a
                    href="mailto:vv@example.com"
                    className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    邮箱
                  </a>
                  <a
                    href="https://github.com/vv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/vv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
