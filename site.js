// Small helper used by homepage to show sample upcoming events (no change needed here)
document.addEventListener('DOMContentLoaded', function(){
  // load schedule.json for mini preview if present
  fetch('schedule.json').then(r=>r.json()).then(data=>{
    const section = document.querySelector('.work-showcase');
    if(section && data.upcoming){
      const el = document.createElement('div');
      el.className = 'mini-schedule';
      el.innerHTML = '<h3>Upcoming</h3>';
      const ul = document.createElement('ul');
      ul.style.listStyle='none';
      ul.style.padding=0;
      data.upcoming.slice(0,4).forEach(item=>{
        const li = document.createElement('li');
        li.style.padding='.4rem 0';
        li.innerHTML = `<strong>${item.day}</strong> — ${item.activity} <span style="color:#8C7B6B"> (${item.time})</span>`;
        ul.appendChild(li);
      });
      el.appendChild(ul);
      section.appendChild(el);
    }
  }).catch(()=>{});
});
