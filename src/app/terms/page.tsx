import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export default function TermsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <MaterialIcon name="bolt" className="text-white text-xl" />
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
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">法律文件</h4>
                <nav className="space-y-1">
                  <Link className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/privacy">
                    <MaterialIcon name="security" className="text-sm mr-2" />
                    隐私政策
                  </Link>
                  <Link className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary" href="/terms">
                    <MaterialIcon name="gavel" className="text-sm mr-2" />
                    服务条款
                  </Link>
                </nav>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">条款章节</h4>
                <nav className="space-y-1 border-l-2 border-slate-200 dark:border-slate-800 ml-2">
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#acceptance">1. 接受条款</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#service-desc">2. 服务描述</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#user-resp">3. 用户责任</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#limits">4. 服务限制</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#payment">5. 付款与订阅</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#termination">6. 协议终止</a>
                  <a className="block pl-4 py-1 text-sm text-slate-500 hover:text-primary border-l-2 border-transparent -ml-[2px] hover:border-primary" href="#disclaimer">7. 免责声明</a>
                </nav>
              </div>
            </div>
          </aside>

          <article className="flex-1 max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">服务条款</h1>
              <p className="text-slate-500 dark:text-slate-400 mb-6">欢迎使用 Super GPT。请在访问或使用我们的服务之前，仔细阅读以下服务条款。</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><MaterialIcon name="update" className="text-xs" /> 生效日期：2023年11月15日</span>
                <span className="flex items-center gap-1"><MaterialIcon name="history" className="text-xs" /> 版本号：3.1.0</span>
              </div>
            </div>

            <div className="legal-content">
              <section id="acceptance">
                <h2 className="dark:text-white">1. 条款的接受</h2>
                <p>通过访问、注册或使用 Super GPT（以下简称“本服务”），即表示您同意受本服务条款（以下简称“本条款”）的约束。如果您不同意这些条款的任何部分，请勿访问或使用本服务。</p>
                <p>我们保留随时修改或更换这些条款的权利。如果有重大更改，我们将在新条款生效前至少提前 30 天通过您的注册邮箱发出通知。</p>
              </section>

              <section id="service-desc">
                <h2 className="dark:text-white">2. 服务描述</h2>
                <p>Super GPT 是一个由人工智能驱动的内容生成和辅助工具平台。我们的服务包括但不限于：</p>
                <ul>
                  <li>基于大型语言模型（LLM）的文本生成和分析。</li>
                  <li>代码辅助、翻译以及数据提取功能。</li>
                  <li>API 访问接口（针对开发者用户）。</li>
                  <li>团队协作与知识库管理。</li>
                </ul>
              </section>

              <section id="user-resp">
                <h2 className="dark:text-white">3. 用户责任与义务</h2>
                <p>在使用本服务时，您承诺并同意：</p>
                <ul>
                  <li><strong>合规使用：</strong> 您将遵守所有适用的地方、州、国家及国际法律法规。</li>
                  <li><strong>账户安全：</strong> 您负责保护您的登录凭据并对您账户下的所有活动负责。</li>
                  <li><strong>内容责任：</strong> 您对输入到本服务的所有数据（提示词）以及您如何使用生成的内容负全部责任。</li>
                  <li><strong>知识产权：</strong> 尊重 Super GPT 及其授权方的所有权，不得未经授权复制或分发软件核心组件。</li>
                </ul>
              </section>

              <section id="limits">
                <h2 className="dark:text-white">4. 禁止行为与服务限制</h2>
                <p>为了保障平台的安全与公正，严禁以下行为：</p>
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 my-6">
                  <p className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">禁止性规定：</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 !mb-0">
                    <li>生成色情、暴力、仇恨言论或煽动犯罪的内容。</li>
                    <li>利用本服务进行大规模垃圾邮件发送或欺诈活动。</li>
                    <li>尝试绕过、破解或“越狱”AI 模型的安全限制。</li>
                    <li>使用自动化脚本在超出正常用户使用频率范围的情况下调用非 API 接口。</li>
                  </ul>
                </div>
                <p>我们保留对违反上述规定的账户采取暂停、禁用或永久封禁措施的权利。</p>
              </section>

              <section id="payment">
                <h2 className="dark:text-white">5. 付款、订阅与退款</h2>
                <p>部分功能需要付费订阅。有关付款的规则如下：</p>
                <ul>
                  <li><strong>订阅周期：</strong> 我们提供按月或按年计费的方案，订阅会自动续费，除非您提前取消。</li>
                  <li><strong>计费调整：</strong> 我们保留调整价格的权利，但会提前 30 天通知现有订阅用户。</li>
                  <li><strong>退款政策：</strong> 由于 AI 计算资源的即时消耗性质，我们通常不提供已消耗周期的退款，除非法律另有规定。</li>
                </ul>
              </section>

              <section id="termination">
                <h2 className="dark:text-white">6. 协议终止</h2>
                <p>您可以随时通过账户设置或联系支持团队注销您的账户。注销后，您将无法访问历史数据。Super GPT 也可能在发现用户严重违约或服务无法继续运营时，随时终止本服务协议。</p>
              </section>

              <section id="disclaimer">
                <h2 className="dark:text-white">7. 免责声明与责任限制</h2>
                <p>Super GPT 按“现状”提供，不附带任何形式的保证。鉴于人工智能技术的特性：</p>
                <ul>
                  <li>我们不保证生成内容的绝对准确性、完整性或实用性。</li>
                  <li>用户应对 AI 生成内容的任何决策后果独立承担责任。</li>
                  <li>在任何情况下，Super GPT 对任何间接、附带、特殊、后果性或惩罚性损害均不承担责任。</li>
                </ul>
              </section>

            </div>
          </article>
        </div>
      </main>

      <a className="fixed bottom-8 right-8 w-12 h-12 bg-white dark:bg-slate-800 shadow-xl rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:border-primary group transition-all" href="#">
        <MaterialIcon name="arrow_upward" className="text-slate-400 group-hover:text-primary transition-colors" />
      </a>
    </div>
  );
}
