---
title: Research
permalink: /research/
show_title: false
publication_modal: true
excerpt: "Research topics and publications by Zifan Peng."
---

<section class="page-heading research-heading">
  <p class="section-kicker">{% include icon.html name="research" %}<span>Research</span></p>
  <h1>Problems I keep returning to</h1>
  <p>
    My research focuses on Trustworthy AI, Human-Centered AI, and DeFi & Blockchain,
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

<p class="equal-note"><strong><em>* denotes equal contribution (listed alphabetically). † denotes corresponding author. A full list is also available on <a href="https://scholar.google.com/citations?user=2M8-SOwAAAAJ">Google Scholar</a>.</em></strong></p>

<section class="research-topic-section selected-papers-section" aria-labelledby="selected-papers-title">
  <div class="topic-section-heading">
    <h2 id="selected-papers-title">Selected Papers</h2>
  </div>

  <div class="publication-grid">
    {% assign selected_current_year = "" %}
    {% for paper in site.data.publications %}
      {% assign first_author = paper.authors | split: "," | first | strip %}
      {% assign is_selected_paper = false %}
      {% if first_author contains "**Zifan Peng**" or paper.authors contains "**Zifan Peng***" %}
        {% assign is_selected_paper = true %}
      {% endif %}
      {% if paper.selected == false %}
        {% assign is_selected_paper = false %}
      {% endif %}
      {% if is_selected_paper %}
        {% capture paper_year %}{{ paper.year }}{% endcapture %}
        {% assign show_year = false %}
        {% if paper_year != selected_current_year %}
          {% assign selected_current_year = paper_year %}
          {% assign show_year = true %}
        {% endif %}
        {% assign primary_url = paper.webpage %}
        {% unless primary_url %}
          {% assign first_link = paper.links | first %}
          {% assign primary_url = first_link.url %}
        {% endunless %}
        <div class="publication-row{% if show_year %} publication-row--new-year{% endif %}">
          <div class="publication-year-label">
            {% if show_year %}{{ paper.year }}{% endif %}
          </div>
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
            <div class="publication-body">
              <h3>{{ paper.title }}</h3>
              {% assign formatted_authors = paper.authors
                | replace: "**Zifan Peng**", "<strong>Zifan Peng</strong>"
                | replace: "*", "<span class='author-mark'>*</span>"
                | replace: "†", "<span class='author-mark'>†</span>" %}
              <p class="authors">{{ formatted_authors }}</p>
              <div class="publication-meta-row">
                {% for badge in paper.badges %}
                  {% assign badge_label = badge | remove: paper_year | strip %}
                  <span class="venue-badge">{{ badge_label }}</span>
                {% endfor %}
                <span class="venue">{{ paper.venue }}</span>
                {% if paper.links %}
                  <div class="paper-links">
                    {% for link in paper.links %}
                      {% assign link_label = link.label %}
                      {% if link.url contains "arxiv.org" %}
                        {% assign link_label = "arXiv" %}
                      {% elsif link.url contains "doi.org" %}
                        {% assign link_label = "DOI" %}
                      {% elsif link.label == "DOI" %}
                        {% assign link_label = "Project" %}
                      {% endif %}
                      <a href="{{ link.url }}">{% include icon.html name="link" %}<span>{{ link_label }}</span></a>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
            </div>
          </article>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>

{% for topic in site.data.research_topics %}
  {% assign topic_papers = site.data.publications | where: "topic", topic.id %}
  <section class="research-topic-section" id="{{ topic.id }}">
    <div class="topic-section-heading">
      <p class="section-kicker"><span>Topic {{ topic.label }} · {{ topic_papers | size }} papers</span></p>
      <h2>{{ topic.title }}</h2>
      <p>{{ topic.summary }}</p>
    </div>

    <div class="publication-grid">
      {% assign current_year = "" %}
      {% for paper in topic_papers %}
        {% capture paper_year %}{{ paper.year }}{% endcapture %}
        {% assign show_year = false %}
        {% if paper_year != current_year %}
          {% assign current_year = paper_year %}
          {% assign show_year = true %}
        {% endif %}
        {% assign primary_url = paper.webpage %}
        {% unless primary_url %}
          {% assign first_link = paper.links | first %}
          {% assign primary_url = first_link.url %}
        {% endunless %}
        <div class="publication-row{% if show_year %} publication-row--new-year{% endif %}">
          <div class="publication-year-label">
            {% if show_year %}{{ paper.year }}{% endif %}
          </div>
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
            <div class="publication-body">
              <h3>{{ paper.title }}</h3>
              {% assign formatted_authors = paper.authors
                | replace: "**Zifan Peng**", "<strong>Zifan Peng</strong>"
                | replace: "*", "<span class='author-mark'>*</span>"
                | replace: "†", "<span class='author-mark'>†</span>" %}
              <p class="authors">{{ formatted_authors }}</p>
              <div class="publication-meta-row">
                {% for badge in paper.badges %}
                  {% assign badge_label = badge | remove: paper_year | strip %}
                  <span class="venue-badge">{{ badge_label }}</span>
                {% endfor %}
                <span class="venue">{{ paper.venue }}</span>
                {% if paper.links %}
                  <div class="paper-links">
                    {% for link in paper.links %}
                      {% assign link_label = link.label %}
                      {% if link.url contains "arxiv.org" %}
                        {% assign link_label = "arXiv" %}
                      {% elsif link.url contains "doi.org" %}
                        {% assign link_label = "DOI" %}
                      {% elsif link.label == "DOI" %}
                        {% assign link_label = "Project" %}
                      {% endif %}
                      <a href="{{ link.url }}">{% include icon.html name="link" %}<span>{{ link_label }}</span></a>
                    {% endfor %}
                  </div>
                {% endif %}
              </div>
            </div>
          </article>
        </div>
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
