---
title: Home
show_title: false
excerpt: "Zifan Peng is a Ph.D. Candidate in Financial Technology at The Hong Kong University of Science and Technology (Guangzhou), working on Trustworthy AI and DeFi & Blockchain."
---

<section class="intro-card">
  <p class="section-kicker">{% include icon.html name="research" %}<span>Research Theme</span></p>
  <p class="intro-lead">
    My name is Ziffer Zifan Peng (彭子帆). I am a Ph.D. Candidate in Financial Technology at
    <a href="https://hkust-gz.edu.cn/">The Hong Kong University of Science and Technology (Guangzhou)</a>.
    I obtained my Bachelor degree from Zhejiang University in 2021 and my
    Master degree from The Hong Kong University of Science and Technology in 2022.
  </p>
  <p>
    I am co-supervised by <a href="https://xinleihe.github.io/">Prof. Xinlei He</a>,
    <a href="https://xuechao2.github.io/">Prof. Xuechao Wang</a>, and
    <a href="https://yingjiexue-brown.github.io/">Dr. Yingjie Xue</a>.
    My current research interests lie in
    <a href="{{ "/research/#trustworthy-ai" | relative_url }}">Trustworthy AI</a>,
    <a href="{{ "/research/#decentralized-systems" | relative_url }}">DeFi & Blockchain</a>, and
    <a href="{{ "/research/#human-centered-ai" | relative_url }}">Human & Society-Centered AI</a>.
  </p>
  <div class="interest-pills" aria-label="Research interests">
    <a href="{{ "/research/#trustworthy-ai" | relative_url }}">{% include icon.html name="shield" %}<span>Trustworthy AI</span></a>
    <a href="{{ "/research/#decentralized-systems" | relative_url }}">{% include icon.html name="network" %}<span>DeFi & Blockchain</span></a>
    <a href="{{ "/research/#human-centered-ai" | relative_url }}">{% include icon.html name="users" %}<span>Human & Society-Centered AI</span></a>
  </div>
</section>

<section class="home-section" id="news">
  <div class="section-heading">
    <p class="section-kicker">{% include icon.html name="news" %}<span>News</span></p>
    <h2>Recent updates</h2>
  </div>
  <div class="news-panel">
    {% for post in site.posts limit:5 %}
      <article class="news-row">
        <div class="news-date">
          {% include icon.html name="calendar" %}
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m" }}</time>
        </div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section" id="experience">
  <div class="section-heading">
    <p class="section-kicker">{% include icon.html name="work" %}<span>Experience</span></p>
    <h2>Education, work, teaching, and service</h2>
  </div>

  <div class="experience-grid">
    <section class="experience-block">
      <h3>{% include icon.html name="education" %}<span>Education</span></h3>
      <div class="timeline-list">
        <article>
          <span>2023 - Present</span>
          <p class="timeline-title">Ph.D. in Financial Technology</p>
          <p><a href="https://hkust-gz.edu.cn/">HKUST (GZ)</a>, Guangzhou, China</p>
        </article>
        <article>
          <span>2021 - 2022</span>
          <p class="timeline-title">MSc in Information Technology</p>
          <p><a href="https://hkust.edu.hk/">HKUST</a>, Hong Kong SAR</p>
        </article>
        <article>
          <span>2017 - 2021</span>
          <p class="timeline-title">BEng in Software Engineering</p>
          <p><a href="https://www.zju.edu.cn/english/">Zhejiang University</a>, Hangzhou, China</p>
        </article>
      </div>
    </section>

    <section class="experience-block">
      <h3>{% include icon.html name="work" %}<span>Work</span></h3>
      <div class="timeline-list">
        <article>
          <span>2022 - 2023</span>
          <p class="timeline-title">Software Engineer</p>
          <p><a href="https://shopee.com/index.html">Shopee</a>, Singapore</p>
        </article>
        <article>
          <span>2022</span>
          <p class="timeline-title">Research Assistant</p>
          <p><a href="https://scm.hsu.edu.hk/hk/aboutus/faculty/56">HSU</a>, Hong Kong SAR</p>
        </article>
        <article>
          <span>2022</span>
          <p class="timeline-title">Research Assistant</p>
          <p><a href="https://sosc.hkust.edu.hk/people/wenjuan-zheng">HKUST</a>, Hong Kong SAR</p>
        </article>
        <article>
          <span>2021</span>
          <p class="timeline-title">Java Software Engineer Intern</p>
          <p><a href="https://www.alibabagroup.com/en-US">AMap · Alibaba Group</a>, Beijing, China</p>
        </article>
      </div>
    </section>

    <section class="experience-block">
      <h3>{% include icon.html name="teaching" %}<span>Teaching</span></h3>
      <div class="compact-list">
        <p>Teaching Assistant, FTEC 5050 - Machine Learning and Artificial Intelligence, Graduate Course, HKUST(GZ), 2025 Fall</p>
        <p>Teaching Assistant, UCMP 6050 - Project-driven Collaborative Design Thinking, Graduate Course, HKUST(GZ), 2025 Spring</p>
        <p>Teaching Assistant, FTEC 5310 - Blockchain Technology, Graduate Course, HKUST(GZ), 2024 Fall</p>
      </div>
    </section>

    <section class="experience-block">
      <h3>{% include icon.html name="service" %}<span>Service</span></h3>
      <div class="compact-list service-columns">
        <p>ACL 2026</p>
        <p>ICWSM 2026</p>
        <p>USENIX Security AE 2026</p>
        <p>ICDCS 2026</p>
        <p>ACM Multimedia 2025</p>
        <p>The Web Conference 2025</p>
      </div>
    </section>
  </div>
</section>

<section class="home-section contact-section" id="contact">
  <div class="section-heading">
    <p class="section-kicker">{% include icon.html name="contact" %}<span>Contact</span></p>
    <h2>Get in touch</h2>
  </div>
  Feel free to drop a message here or send an email directly.
  {% include site-form.html %}
</section>

<section class="home-section visit-tracker" aria-label="Visit tracker">
  <a class="tracker-card" href="https://clustrmaps.com/site/1bvqh" title="Visit tracker">
    <span class="tracker-label">{% include icon.html name="location" %}<span>Visit tracker</span></span>
    <img src="https://www.clustrmaps.com/map_v2.png?d=2ben3YzveUZsxGlDN7qE3EglP2r1PUu78IZ4eUw6rFU&cl=ffffff" alt="Visit tracker map" loading="lazy">
  </a>
</section>
