
export default `
<div class='resume-extra'>
  <p class='resume-extra-title'>
    <span style='font-weight: bold'>{{ title }} </span>  {{ description }}
  </p>

  {% if start %}
    <p class='resume-extra-date'>{{ start }}
      {% if end %}
        - {{ end }}
      {% endif %}
    </p>
  {% endif %}
</div>
`;