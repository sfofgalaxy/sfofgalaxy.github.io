---
title: Research
permalink: /research/
redirect_from:
  - /publications/
show_title: false
publication_modal: true
excerpt: "Research topics and publications by Zifan Peng."
---

<section class="page-heading research-heading">
  <p class="section-kicker">{% include icon.html name="research" %}<span>Research</span></p>
  <h1>Problems I keep returning to</h1>
  <p>
    My research focuses on Trustworthy AI, DeFi & Blockchain, and Human & Society-Centered AI,
    with a recent emphasis on safety and privacy for embodied AI systems.
  </p>
</section>

<section class="topic-jump-grid" aria-label="Research topic navigation">
  {% for topic in site.data.research_topics %}
    {% assign topic_papers = site.data.publications | where: "topic", topic.id %}
    <a class="topic-jump topic-{{ topic.accent }}" href="#{{ topic.id }}">
      <span class="topic-jump-meta">
        <span class="topic-number">{{ topic.label }}</span>
        <span class="topic-count">{{ topic_papers | size }} papers</span>
      </span>
      <span class="topic-title">{% include icon.html name=topic.icon %}<span>{{ topic.title }}</span></span>
      <p>{{ topic.summary }}</p>
    </a>
  {% endfor %}
</section>

<p class="equal-note">* denotes equal contribution. A full list is also available on <a href="https://scholar.google.com/citations?user=2M8-SOwAAAAJ">Google Scholar</a>.</p>

{% for topic in site.data.research_topics %}
  {% assign topic_papers = site.data.publications | where: "topic", topic.id %}
  <section class="research-topic-section" id="{{ topic.id }}">
    <div class="topic-section-heading">
      <p class="section-kicker"><span>Topic {{ topic.label }} · {{ topic_papers | size }} papers</span></p>
      <h2>{{ topic.title }}</h2>
      <p>{{ topic.summary }}</p>
    </div>

    <div class="publication-grid">
      {% for paper in topic_papers %}
        {% assign primary_url = paper.webpage %}
        {% unless primary_url %}
          {% assign first_link = paper.links | first %}
          {% assign primary_url = first_link.url %}
        {% endunless %}
        <article
          class="publication-card publication-card--interactive"
          tabindex="0"
          role="button"
          aria-label="Open details for {{ paper.title | escape }}"
          data-publication-card
          data-publication-title="{{ paper.title | escape }}"
          data-publication-venue="{{ paper.venue | escape }}"
          data-publication-badges="{{ paper.badges | join: ' | ' | escape }}"
          data-publication-summary="{{ paper.summary | default: 'Summary coming soon.' | normalize_whitespace | escape }}"
          data-publication-abstract="{{ paper.abstract | default: 'Abstract coming soon.' | normalize_whitespace | escape }}"
          data-publication-webpage="{{ primary_url | escape }}">
          <div class="publication-year">{{ paper.year }}</div>
          <div class="publication-body">
            <div class="badge-row">
              {% for badge in paper.badges %}
                <span>{{ badge }}</span>
              {% endfor %}
            </div>
            <h3>{{ paper.title }}</h3>
            <p class="authors">{{ paper.authors | replace: "**Zifan Peng**", "<strong>Zifan Peng</strong>" | replace: "*", "<span class='equal-star'>*</span>" }}</p>
            <p class="venue">{{ paper.venue }}</p>
            {% if paper.links %}
              <div class="paper-links">
                {% for link in paper.links %}
                  <a href="{{ link.url }}">{% include icon.html name="link" %}<span>{{ link.label }}</span></a>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}

<div class="publication-modal" data-publication-modal hidden>
  <div class="publication-modal-backdrop" data-publication-close></div>
  <section class="publication-dialog" role="dialog" aria-modal="true" aria-labelledby="publication-modal-title">
    <button class="publication-dialog-close" type="button" data-publication-close aria-label="Close publication details">
      <span aria-hidden="true">x</span>
    </button>
    <p class="publication-dialog-badges" data-publication-modal-badges></p>
    <h2 id="publication-modal-title" data-publication-modal-title></h2>
    <p class="publication-dialog-venue" data-publication-modal-venue></p>

    <div class="publication-dialog-section">
      <h3>Summary</h3>
      <p data-publication-modal-summary></p>
    </div>

    <div class="publication-dialog-section">
      <h3>Abstract</h3>
      <p data-publication-modal-abstract></p>
    </div>

    <a class="publication-dialog-link" href="#" target="_blank" rel="noopener" data-publication-modal-webpage>
      {% include icon.html name="link" %}<span>Paper page</span>
    </a>
  </section>
</div>
