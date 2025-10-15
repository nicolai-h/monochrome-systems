document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      // Navbar
      navBrands: "Our Brands",
      navAbout: "About Us",
      navProfile: "Company Profile",

      // Hero (index.html)
      heroTitle: "Crafting Secure & Intuitive Digital Experiences.",
      heroSub: "Monochrome Systems specializes in creating powerful cybersecurity platforms and intuitive Japanese language applications for a global audience.",
      heroBtn: "Explore Our Brands",

      // Solutions section (index.html)
      solutionsIntro: "We specialize in creating robust cybersecurity platforms and innovative Japanese language learning applications.",
      secTitle: "Monochrome Security",
      secDesc: "Monochrome Security is a cybersecurity consultancy specializing in penetration testing. We help organizations strengthen their defenses by simulating real-world attacks to identify and address vulnerabilities before they can be exploited. Our experts deliver actionable insights and remediation strategies across web applications, networks, and cloud environments—ensuring your systems remain resilient against evolving cyber threats.",
      labTitle: "NihongoLab",
      labDesc: "NihongoLab is our interactive language learning application that makes mastering Japanese fun and effective. Through a gamified system, users progress step by step in Hiragana, Katakana, and Kanji with bite-sized lessons, quizzes, and challenges. Real-time progress tracking and personalized feedback keep learners motivated, while interactive exercises ensure long-term retention and practical use of the language. Going through the lessons will also help with preparing for the JLPT exams.",

      // About section (about.html)
      aboutTitle: "About Monochrome Systems",
      aboutIntro: "At Monochrome Systems, our purpose is simple: to bring clarity and control to a chaotic digital world. We are a small, passionate team dedicated to building solutions that are not only secure and reliable but also thoughtfully designed. Our philosophy marries the precision of cybersecurity with the elegance of intuitive user experience. We believe that whether you're protecting critical data or learning a new language, the tools you use should feel effortless and trustworthy.",
      missionTitle: "Our Mission",
      missionDesc: "We are a company with a dual mission: to secure the digital world and to make language learning accessible. We develop precise, reliable cybersecurity tools that provide clear defense and peace of mind. On a separate front, we create a Japanese language app designed to simplify a complex learning journey into an intuitive and effective experience. Our mission is to empower individuals with technology that is both trustworthy and transformative.",
      storyTitle: "Our Story",
      storyDesc: "Monochrome Systems was founded on a shared passion for two distinct fields: securing the digital world and the art of language learning. Our team is dedicated to creating innovative products that reflect our commitment to both robust security and effective, enjoyable education. Each of our product lines is built to the same high standards of quality and user-centric design that define our company.",

      // Profile section (profile.html)
      profileTitle: "Company Profile",
      labelCompany: "Company Name",
      contentCompany: "Monochrome Systems",
      labelCompanyEn: "Company Name (English)",
      contentCompanyEn: "Monochrome Systems",
      labelBusiness: "Business Activities",
      contentBusiness: "Cybersecurity Consulting Monochrome Sec\nJapanese Language Learning App NihongoLab",

      // Footer
      footerBrands: "Our Brands",
      footerAbout: "About Us",
      footerProfile: "Company Profile"
    },
    ja: {
      // Navbar
      navBrands: "ブランド一覧",
      navAbout: "会社概要",
      navProfile: "企業プロフィール",

      // Hero (index.html)
      heroTitle: "安全で直感的なデジタル体験を創造します。",
      heroSub: "モノクロームシステムズは、強力なサイバーセキュリティプラットフォームと直感的な日本語学習アプリを世界に提供しています。",
      heroBtn: "ブランドを見る",

      // Solutions section (index.html)
      solutionsIntro: "私たちは堅牢なサイバーセキュリティ基盤と革新的な日本語学習アプリを開発しています。",
      secTitle: "モノクローム・セキュリティ",
      secDesc: "モノクローム・セキュリティは、ペネトレーションテストを専門とするコンサルティング会社です。組織の防御力を強化するため、実際の攻撃をシミュレーションして脆弱性を特定・修正します。ウェブアプリケーション、ネットワーク、クラウド環境全体で、実用的な改善策と戦略を提供し、システムの強靭性を維持します。",
      labTitle: "日本語ラボ",
      labDesc: "日本語ラボは、日本語を楽しく効果的に学べるインタラクティブな学習アプリです。ユーザーはひらがな、カタカナ、漢字を段階的に学習し、クイズやチャレンジを通じて進行状況を確認できます。リアルタイムの進捗管理とパーソナライズされたフィードバックで学習意欲を維持し、長期的な定着と実践的な日本語使用をサポートします。JLPT試験の準備にも役立ちます。",

      // About section (about.html)
      aboutTitle: "モノクローム・システムについて",
      aboutIntro: "モノクローム・システムでは、目的はシンプルです：混沌としたデジタル世界に明確さとコントロールをもたらすこと。私たちは小規模で情熱的なチームで、セキュアで信頼性が高く、なおかつ考え抜かれたデザインのソリューションを構築しています。私たちの哲学は、サイバーセキュリティの精密さと直感的なユーザー体験の優雅さを融合させたものです。重要なデータを保護するときであれ、新しい言語を学ぶときであれ、使用するツールは使いやすく、信頼できるものであるべきだと信じています。",
      missionTitle: "私たちのミッション",
      missionDesc: "私たちは二重の使命を持つ会社です：デジタル世界を守ること、そして言語学習を誰にでもアクセス可能にすること。正確で信頼性の高いサイバーセキュリティツールを開発し、明確な防御と安心を提供します。また別の側面として、日本語学習アプリを開発し、複雑な学習過程を直感的で効果的な体験に簡略化します。私たちの使命は、信頼できるだけでなく変革的な技術で個人を力づけることです。",
      storyTitle: "私たちの物語",
      storyDesc: "モノクローム・システムは、二つの異なる分野への共通の情熱に基づいて設立されました：デジタル世界のセキュリティと、言語学習の芸術。私たちのチームは、堅牢なセキュリティと効果的で楽しい教育の両方へのコミットメントを反映した革新的な製品を作ることに専念しています。私たちの各製品ラインは、会社を定義する高水準の品質とユーザー中心のデザインに基づいて構築されています。",

      // Profile section (profile.html)
      profileTitle: "会社概要",
      labelCompany: "社名",
      contentCompany: "合同会社モノクロームシステムズ",
      labelCompanyEn: "社名（英語表記）",
      contentCompanyEn: "Monochrome Systems",
      labelBusiness: "事業内容",
      contentBusiness: "サイバーセキュリティコンサルティング事業 Monochrome Sec\n日本語学習アプリ事業 NihongoLab",

      // Footer
      footerBrands: "ブランド一覧",
      footerAbout: "会社概要",
      footerProfile: "企業プロフィール"
    }
  };

  // Get current language from localStorage or default to English
  let currentLang = localStorage.getItem("ms_lang") || "en";

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    for (const key in t) {
      const el = document.getElementById(key);
      if (el) {
        // Handle line breaks for profile content
        if (t[key].includes("\n")) {
          el.innerHTML = t[key].replace(/\n/g, "<br>");
        } else {
          el.textContent = t[key];
        }
      }
    }

    // Update toggle button
    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) toggleBtn.textContent = lang === "en" ? "日本語" : "English";

    document.documentElement.lang = lang;
  }

  // Apply translations on page load
  applyTranslations(currentLang);

  // Language toggle button
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ja" : "en";
      localStorage.setItem("ms_lang", currentLang);
      applyTranslations(currentLang);
    });
  }
});
