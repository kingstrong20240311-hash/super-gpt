import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="material-icons text-white text-xl">bolt</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Super GPT</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">法律文档</h4>
                <nav className="space-y-1">
                  <Link className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary" href="/privacy">
                    <span className="material-icons text-sm mr-2">security</span>
                    隐私政策
                  </Link>
                  <Link className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/terms">
                    <span className="material-icons text-sm mr-2">gavel</span>
                    服务条款
                  </Link>
                </nav>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">本页目录</h4>
                <nav className="space-y-1 border-l-2 border-slate-200 dark:border-slate-800 ml-2">
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#introduction">1. 引言</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#collection">2. 信息收集</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#usage">3. 数据使用</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#security">4. 信息安全</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#sharing">5. 信息共享</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#rights">6. 您的权利</a>
                </nav>
              </div>
            </div>
          </aside>

          <article className="flex-1 max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="mb-10 pb-10 border-b border-slate-100 dark:border-slate-800" id="privacy-policy">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">隐私政策</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><span className="material-icons text-xs">update</span> 最后更新日期：2023年10月24日</span>
                <span className="flex items-center gap-1"><span className="material-icons text-xs">history</span> 版本号：2.4.0</span>
              </div>
            </div>

            <div className="legal-content">
              <section id="introduction">
                <h2 className="dark:text-white">1. 引言</h2>
                <p>欢迎使用 Super GPT。您的隐私和信任对我们至关重要。本隐私政策详细说明了我们在您使用我们的 AI 平台时，如何收集、使用、存储和保护您的个人信息。</p>
                <p>通过访问或使用 Super GPT 服务，即表示您同意本政策所述的信息处理方式。我们建议您仔细阅读全文，以便充分了解您的权利。</p>
              </section>

              <section id="collection">
                <h2 className="dark:text-white">2. 我们收集的信息</h2>
                <p>为了提供高质量的 AI 驱动服务并不断改进用户体验，我们收集以下类型的信息：</p>
                <ul>
                  <li><strong>账户信息：</strong> 包括您的姓名、电子邮件地址、密码以及必要的账单信息。</li>
                  <li><strong>交互内容：</strong> 我们会存储您输入给 AI 的提示词（Prompts）以及系统生成的响应内容，用于提供连续的对话体验和模型优化。</li>
                  <li><strong>设备与技术数据：</strong> 包括 IP 地址、浏览器类型、操作系统、访问时间以及点击流数据，用于安全监测和故障排除。</li>
                  <li><strong>Cookie 与跟踪技术：</strong> 我们使用 Cookie 来保持您的登录状态并了解您对我们网站的使用偏好。</li>
                </ul>
              </section>

              <section id="usage">
                <h2 className="dark:text-white">3. 数据如何被使用</h2>
                <p>Super GPT 将收集的信息用于以下核心目的：</p>
                <ul>
                  <li>交付您请求的 AI 生成功能及相关服务。</li>
                  <li>管理您的订阅计划并处理支付事务。</li>
                  <li>分析服务性能，开发新功能并优化 AI 模型算法。</li>
                  <li>发送重要的系统通知、服务更新和营销信息（您可以随时退订）。</li>
                  <li>维护平台安全性，防止恶意攻击和欺诈行为。</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary p-4 my-6">
                  <p className="text-sm font-bold text-primary mb-1">隐私承诺</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">我们承诺绝不会将您的个人识别信息出售给任何第三方。您的对话数据仅在必要范围内用于模型改进，除非您在设置中明确选择退出数据贡献计划。</p>
                </div>
              </section>

              <section id="security">
                <h2 className="dark:text-white">4. 信息安全</h2>
                <p>我们采用行业领先的安全技术来保护您的数据。这包括但不限于：</p>
                <ul>
                  <li><strong>加密传输：</strong> 所有数据在传输过程中均通过 SSL/TLS 进行端到端加密。</li>
                  <li><strong>静态加密：</strong> 存储在服务器上的敏感信息均使用 AES-256 加密算法进行保护。</li>
                  <li><strong>访问控制：</strong> 仅限授权的运维人员在严格的身份验证下访问生产系统。</li>
                  <li><strong>定期审计：</strong> 我们定期进行内部安全审计和渗透测试，以确保防护体系的有效性。</li>
                </ul>
              </section>

              <section id="sharing">
                <h2 className="dark:text-white">5. 信息共享</h2>
                <p>我们仅在以下情况下共享您的信息：</p>
                <ul>
                  <li><strong>服务提供商：</strong> 我们可能与协助我们运营（如支付处理、云托管、邮件发送）的第三方供应商共享必要数据。</li>
                  <li><strong>法律要求：</strong> 在收到合法传票或根据适用法律法规要求时，我们可能需要披露信息。</li>
                  <li><strong>业务转让：</strong> 在涉及合并、收购或资产出售时，您的信息可能会作为商业资产进行转让。</li>
                </ul>
              </section>

              <section id="rights">
                <h2 className="dark:text-white">6. 您的权利</h2>
                <p>根据适用的数据保护法律，您拥有以下权利：</p>
                <ul>
                  <li><strong>访问与更正：</strong> 您可以随时查看并修改您的账户信息。</li>
                  <li><strong>数据导出：</strong> 您可以申请导出您的个人数据副本。</li>
                  <li><strong>注销账户：</strong> 您可以请求删除您的账户，此操作将同步删除我们的服务器上与之关联的个人数据（除非法律另有规定）。</li>
                  <li><strong>限制处理：</strong> 您可以选择退出特定的数据处理活动，如个性化推荐或模型训练。</li>
                </ul>
              </section>

            </div>
          </article>
        </div>
      </main>

      <a className="fixed bottom-8 right-8 w-12 h-12 bg-white dark:bg-slate-800 shadow-xl rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-primary group transition-all" href="#">
        <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">arrow_upward</span>
      </a>
    </div>
  );
}
