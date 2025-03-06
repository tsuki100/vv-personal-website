import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="flex flex-col items-center text-center relative">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-white shadow-lg">
            <Image
              src="/avatar.jpeg"
              alt="vv的个人头像"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            vv
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            材料学研究者 / 高分子材料专家
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              了解更多
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              联系我
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          关于我
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            2001年7月28日出生，郑州大学材料学专业在读。专注于高分子材料研究，对光电高分子材料有深入研究。
            擅长材料性能测试与表征，追求材料性能的极致优化。在实验室工作中注重团队协作，善于沟通，乐于分享研究经验。
            热爱探索新材料，享受科研带来的成就感。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          专业领域
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">高分子合成</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>自由基聚合</li>
              <li>缩聚反应</li>
              <li>活性聚合</li>
              <li>共聚物制备</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">材料表征</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>热分析</li>
              <li>光谱分析</li>
              <li>显微分析</li>
              <li>力学性能测试</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">应用领域</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>光电材料</li>
              <li>生物材料</li>
              <li>智能材料</li>
              <li>复合材料</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">研究技能</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>实验设计</li>
              <li>数据分析</li>
              <li>文献调研</li>
              <li>论文写作</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          研究项目
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">光电高分子材料研究</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                研究新型光电高分子材料的合成与性能优化，重点关注其在显示器件中的应用。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  材料合成
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  性能表征
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  器件制备
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">智能高分子材料开发</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                开发对外部刺激响应的智能高分子材料，包括温敏、光敏、pH敏感等性能研究。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  智能材料
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  响应机理
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  应用研究
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          联系方式
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            如果您对我的研究感兴趣，欢迎通过以下方式联系我：
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:vv@example.com"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              邮箱
            </a>
            <a
              href="https://github.com/vv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
