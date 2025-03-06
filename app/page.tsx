import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8">
            <Image
              src="/avatar.jpeg"
              alt="vv的个人头像"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            vv
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            全栈开发工程师 / 技术探索者
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              了解更多
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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
            2001年7月28日出生，清华大学计算机系在读。热爱编程和技术创新，专注于全栈开发。
            擅长解决复杂问题，追求代码质量和用户体验。在工作中注重团队协作，善于沟通，乐于分享技术经验。
            喜欢探索新技术，享受编程带来的乐趣。热爱生活，热爱创造，热爱make love。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          技能专长
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">前端开发</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">后端开发</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>数据库设计</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">开发工具</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Linux</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">其他技能</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>敏捷开发</li>
              <li>团队协作</li>
              <li>问题解决</li>
              <li>技术写作</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          项目经历
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">个人网站</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                使用Next.js和Tailwind CSS构建的响应式个人网站，支持暗色模式。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">在线学习平台</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                全栈开发的在线教育平台，支持课程管理、视频播放和用户互动。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  MongoDB
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
            如果您对我的工作感兴趣，欢迎通过以下方式联系我：
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
