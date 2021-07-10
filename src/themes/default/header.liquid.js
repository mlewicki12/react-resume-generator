
// using a javascript file as a temporary measure bc im too tired rn
// to figure out webpack
export default `
<div class='resume-header'>
  <img src='{{ profile }}' class='resume-photo' alt='Profile' />
  <div class='resume-info'>
    <div class='resume-info-main'>
      <h1 class='resume-header-name'>{{ name }}</h1>
      <h2 class='resume-header-position'>{{ position }}</h2>
    </div>
    <p class='resume-header-links'>
      {% for item in info %}
        {% if item == 'br' %}
          <br />
        {% else %}
          {{ item }}&nbsp;
          {% unless forloop.last %}
            &bull;
          {% endunless %}
        {% endif %}
      {% endfor %}
    </p>
  </div>
</div>`;