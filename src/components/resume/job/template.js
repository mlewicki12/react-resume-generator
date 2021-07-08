
export default `
<div class='resume-job'>
  <div class='resume-job-header'>
    <div class='resume-job-company'>
      <h3>{{ company }} / {{ location }}</h3>
      <h4>{{ title }}</h4>
    </div>
      {% capture array %}{{ start | array }}{% endcapture %}
      {% if array == 'true' %}
        <p>
          {% for item in start %}
            {% assign index = forloop.index0 | plus: 0  %}
            {{ item }} - {{ end[index] }}
            {% unless forloop.last %}
              &nbsp;/<br />
            {% endunless %}
          {% endfor %}
        </p>
      {% else %}
        <p>{{ start }} - {{ end }}</p>
      {% endif %}
  </div>
  <ul>
    {% for item in responsibilities %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>
`;