import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import UserMenu from "@/components/UserMenu";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
            </div>
            <span className="text-white text-2xl font-extrabold tracking-tight">Super <span className="text-blue-200">GPT</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
            <a className="hover:text-white transition-colors" href="#hero">首页</a>
            <a className="hover:text-white transition-colors" href="#features">功能介绍</a>
            <a className="hover:text-white transition-colors" href="#tutorial">新手教程</a>
            <a className="hover:text-white transition-colors" href="#download">下载软件</a>
            <a className="hover:text-white transition-colors" href="#pricing">会员方案</a>
            <a className="hover:text-white transition-colors" href="#contact">联系我们</a>
          </div>
          <UserMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient flex items-center pt-20 overflow-hidden" id="hero">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-300 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-wide text-blue-100 opacity-90 uppercase">最新最智能的</h2>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-tight">
                Super GPT <span className="text-4xl lg:text-6xl font-normal opacity-90">翻译器</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-2xl font-light items-center">
                <span className="font-bold border-b-4 border-white pb-1">探索</span><span className="opacity-70 text-base">语言的魅力</span>
                <span className="font-bold border-b-4 border-white pb-1">跨越</span><span className="opacity-70 text-base">语言的壁垒</span>
                <span className="font-bold border-b-4 border-white pb-1">踏入</span><span className="opacity-70 text-base">科技的时代</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/register" className="bg-secondary hover:bg-secondary/90 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-[0_15px_30px_rgba(255,153,0,0.4)] text-center">
                注册账号
              </Link>
              <button className="bg-white text-primary hover:bg-blue-50 px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                下载软件
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="software-card p-6 rounded-2xl overflow-hidden shadow-2xl relative transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8 px-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
                  </div>
                  <span className="text-white font-semibold text-sm">AI-Chat GPT Dashboard</span>
                </div>
                <div className="flex space-x-4">
                  <span className="material-symbols-outlined text-gray-400 text-sm cursor-pointer hover:text-white">notifications</span>
                  <div className="flex space-x-1 ml-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-32 flex flex-col space-y-4">
                  <div className="bg-blue-600/20 text-blue-400 p-2 rounded-lg flex items-center space-x-2 text-xs">
                    <span className="material-symbols-outlined text-sm">grid_view</span>
                    <span>应用中心</span>
                  </div>
                  <div className="text-gray-400 p-2 rounded-lg flex items-center space-x-2 text-xs">
                    <span className="material-symbols-outlined text-sm">settings</span>
                    <span>设置</span>
                  </div>
                  <div className="text-gray-400 p-2 rounded-lg flex items-center space-x-2 text-xs">
                    <span className="material-symbols-outlined text-sm">person</span>
                    <span>个人中心</span>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-4 text-center">
                  {[
                    { name: 'WhatsApp', color: 'bg-green-500', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP8-aoqg6pEloDDFtbBNHCVAnkxBN2HLoBZiq8IPRaAd8VbfQ2D2Fc4gqht_VZ4KfjpyHgFdgaeIqluQNW-r72vhz2-vKGLa5nRkiLKl0jVEq7fvWZzp4CYXovysGRZcXrVLWG0w8rvVeF2z9_csXortQtUDzZBjFFdF6g6xx0MLUTx3mSa7VLxA8WACiEzvT8RH6XPEISRNm6HYyyslj4hYjsPz2wAaNYWzbau8iRPbbEDJlgMn-at5ziNFvmPvlslzgkegADkcKs' },
                    { name: 'Telegram', color: 'bg-blue-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDm_iAWA5yWfFg7UUaZRoBk79-RMZHCtx1sXDczoAnO1fSeLdz9divR_ohSowB0Pd3BrK4RpgZRQiil7YBSQ_4tr_kpHg0ZlBMnqnZ4OmM2oJypP0M7_cAHq4jG0WgRo1Hp05WwjXcPgo14H1aD1xxHeAKMenyEfG9a6N7BjNfaGqQkszbV616GA2uUJyyR08WqCmMPvqG1iof5Jk6QJOASk1Uc23zIY_CsasH9Bo0CaGYGTUZ0ZqDhHPO4RotyluYvcdOjh5cH50E' },
                    { name: 'Messenger', color: 'bg-gradient-to-br from-blue-500 to-pink-500', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHY50TU59_xPDJpUnU8jr3M5dVOnvEA5km1xY5kTjA3A8uNL9Twidbfd3wx1XbHnlZRpBBih3fhpRkFub8GvS1Zb-6h7lyiZrU0fdaEbNGqh-Muyw4ipDc4tA4XyWo6V2K3Vd73R4unofZTFIZgg97NAOUFQLXrbh8ff87OfXNJNVf9EeAmQl8qLaQ9oYLPwM-a-V009vdjN2aEn-BsAobbQoXATY-L7iIPMwm3bTZxzNYi9MTrGA43Ud7Rps4b50IbkoHZHCqDb_d' },
                    { name: 'Instagram', color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC-eObgEDF56HLH7ZO6o-i75s79PI9Chwb3hW_m7R3FgHlUqtJSUodl3M4QnpPI1KtFQMVncush5KaLWZwuBzxGwRm2A3Ba7FZRdqjoKdPNsoQTO8hLAtsONkjNVkLJ1A2GaF_NBsF1DlL4wjKMmpNcnO5T8lQ__yYy5nTWT9sfVw9UW14ctT2D8NljBOUmWpr4j53DB8VlyFUQqvmL-Rx-IIqNVKyRc58aPQ1_0SWxrpp3FtzVijIbiNt0neHlbmbC0fQO182Fzqq' }
                  ].map(app => (
                    <div key={app.name} className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center space-y-2">
                      <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <img alt={app.name} className="w-7 h-7" src={app.img} />
                      </div>
                      <span className="text-[10px] text-gray-400">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">强大而全面的AI功能</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">基于最先进的 GPT 模型，为您提供全方位的跨境沟通支持</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">translate</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">实时多语种翻译</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>支持 100+ 语种即时互译</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>精准捕捉语境，地道表达</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">forum</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">智能社交助手</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>深度集成全球热门社交软件</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>消息自动提醒与快速回复</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">AI 写作增强</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>文案润色与拼写纠错</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>一键生成专业商务邮件</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950" id="tutorial">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">新手教程</h2>
            <p className="text-slate-500 dark:text-slate-400">只需三步，即可开启您的全球化视野</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-blue-200 dark:border-slate-700 -translate-y-12"></div>
            {[
              { icon: 'cloud_download', title: '1. 下载并安装', desc: '下载 Windows 客户端，一键完成极速安装' },
              { icon: 'login', title: '2. 登录账号', desc: '使用手机号或邮箱注册登录，激活您的专属特权' },
              { icon: 'rocket_launch', title: '3. 开始翻译', desc: '打开聊天界面，AI 即刻为您开启无障碍交流' }
            ].map(step => (
              <div key={step.title} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-blue-50 dark:border-slate-700 z-10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">限时优惠方案</h2>
            <p className="text-slate-500 dark:text-slate-400">选择最适合您的方案，享受专属 AI 加速服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden flex flex-col transition-all hover:shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">高级版 (Advanced)</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">满足日常翻译与工作交流需求</p>
              </div>
              <div className="space-y-6 mb-10">
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-slate-500 uppercase">1.5M 字符</span>
                    <span className="text-xs font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded">优惠价</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">$24</span>
                    <span className="text-slate-400 line-through text-lg">$48</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary">check</span>
                  <span>解锁全部基础翻译功能</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">立即订购高级版</button>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 border-2 border-primary shadow-2xl relative overflow-hidden flex flex-col transform md:scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-6 py-2 rounded-bl-3xl">
                Best Value
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">专业版 (Professional)</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2">更高优先级，更强AI处理能力</p>
              </div>
              <div className="space-y-6 mb-10">
                <div className="p-6 bg-blue-50/50 dark:bg-primary/5 rounded-2xl border border-blue-100 dark:border-primary/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-primary uppercase">1.5M 字符</span>
                    <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-0.5 rounded">尊享价</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-black text-primary">$35</span>
                    <span className="text-slate-400 line-through text-lg">$70</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 font-bold">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>高优先级 AI 响应通道</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none">立即订购专业版</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-slate-900" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">联系我们</h2>
                <p className="text-slate-500 dark:text-slate-400">如果您有任何问题或建议，欢迎随时通过表单与我们取得联系。</p>
              </div>
              <ContactForm />
            </div>
            <div className="lg:pl-12 space-y-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">公司信息</h2>
                  <p className="text-slate-500 dark:text-slate-400">我们致力于提供全球领先的 AI 智能沟通解决方案。</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">办公地址</h4>
                      <p className="text-slate-500 dark:text-slate-400">上海市浦东新区张江高科技园区 蓝天路 888 号 Super GPT 大厦</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">营业时间</h4>
                      <p className="text-slate-500 dark:text-slate-400">周一至周五: 09:00 - 18:00 (GMT+8)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">contact_support</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">客户支持</h4>
                      <p className="text-slate-500 dark:text-slate-400">Email: support@supergpt.ai</p>
                      <p className="text-slate-500 dark:text-slate-400">Phone: 400-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
            </div>
            <span className="text-white text-xl font-bold">Super GPT</span>
          </div>
          <p className="text-sm">© 2024 Super GPT AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link className="hover:text-white transition-colors" href="/privacy">隐私协议</Link>
            <Link className="hover:text-white transition-colors" href="/terms">服务条款</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
