(() => {
  const problems = window.GIS_PROBLEMS || [];
  const layers = window.GIS_LAYERS || [];
  const toolsets = window.GIS_TOOLSETS || {};
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const layerFilter = document.getElementById('layerFilter');
  const ecosystemFilter = document.getElementById('ecosystemFilter');
  const count = document.getElementById('resultCount');
  const title = document.getElementById('resultTitle');
  const dialog = document.getElementById('problemDialog');
  const dialogContent = document.getElementById('dialogContent');
  const chips = document.getElementById('layerChips');

  layers.forEach(l => {
    const o = document.createElement('option');
    o.value = l.id; o.textContent = l.short + ' · ' + l.name;
    layerFilter.appendChild(o);
    const b = document.createElement('button');
    b.className = 'chip';
    b.dataset.layer = l.id;
    const chipName = l.name.split(/[·&]/)[0].trim();
    b.textContent = l.short + ' · ' + chipName;
    b.setAttribute('aria-label', 'Lọc ' + l.short + ': ' + l.name);
    b.addEventListener('click', () => {
      layerFilter.value = layerFilter.value === l.id ? '' : l.id;
      render();
    });
    chips.appendChild(b);
  });

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arr = v => Array.isArray(v) ? v : String(v || '').split('→').map(x => x.trim()).filter(Boolean);
  const layerOf = id => layers.find(l => l.id === id) || {short:id,name:id};
  const platformsFor = p => toolsets[p.toolset] || {qgis:'—',google:'—',arcgis:'—',open:'—'};
  const haystack = p => [p.title,p.scenario,p.inputs,p.steps,p.output,p.tags,p.example, ...Object.values(platformsFor(p))].join(' ').toLowerCase();

  function ecosystemMatch(p, eco) {
    if (!eco) return true;
    const v = platformsFor(p)[eco];
    return v && v !== '—' && !/không trực tiếp|không có/i.test(v);
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const lf = layerFilter.value;
    const eco = ecosystemFilter.value;
    const items = problems.filter(p => (!lf || p.layer === lf) && (!q || haystack(p).includes(q)) && ecosystemMatch(p, eco));
    count.textContent = items.length === problems.length ? problems.length + ' bài toán' : items.length + ' kết quả · ' + problems.length + ' tổng';
    const l = layerOf(lf);
    title.textContent = lf ? l.short + ' · ' + l.name : (q ? 'Kết quả cho “' + search.value.trim() + '”' : 'Tất cả bài toán');
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.layer === lf));
    grid.innerHTML = items.length ? items.map(card).join('') : '<div class="empty"><h3>Chưa tìm thấy bài toán phù hợp.</h3><p>Thử từ khóa rộng hơn hoặc đặt lại bộ lọc.</p></div>';
    grid.querySelectorAll('.card').forEach(el => el.addEventListener('click', () => openProblem(el.dataset.id)));
  }

  function card(p) {
    const l = layerOf(p.layer), t = platformsFor(p);
    const available = [['QGIS',t.qgis],['Google',t.google],['ArcGIS',t.arcgis],['Open',t.open]].filter(x => x[1] && x[1] !== '—').slice(0,3);
    return '<article class="card" tabindex="0" data-layer="'+esc(p.layer)+'" data-id="'+esc(p.id)+'"><div class="cardTop"><span class="layerBadge">'+esc(l.short)+' · '+esc(l.name)+'</span><span class="idBadge">'+esc(p.id)+'</span></div><h3>'+esc(p.title)+'</h3><p class="scenario">'+esc(p.scenario)+'</p><div class="miniTools">'+available.map(x=>'<span>'+esc(x[0])+'</span>').join('')+'</div><div class="cardFoot"><b>'+esc(p.exampleType || 'Tình huống thực tế')+'</b><span>Mở chi tiết →</span></div></article>';
  }

  function openProblem(id) {
    const p = problems.find(x => x.id === id); if (!p) return;
    const l = layerOf(p.layer), t = platformsFor(p);
    dialogContent.innerHTML = '<div class="dialogBody"><p class="eyebrow">'+esc(l.short)+' · '+esc(l.name)+' · '+esc(p.id)+'</p><h2>'+esc(p.title)+'</h2><p class="dialogLead">'+esc(p.scenario)+'</p><div class="detailGrid">'+
      block('Ai dùng / quyết định nào?', '<p>'+esc(p.user)+'</p>')+
      block('Dữ liệu đầu vào', '<ul>'+arr(p.inputs).map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>')+
      block('Cách làm', '<ol>'+arr(p.steps).map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol>', true)+
      '<div class="detail full"><h4>Đối chiếu hệ sinh thái</h4><div class="toolsCompare">'+
        tool('QGIS / Plugins',t.qgis)+tool('Google Maps / Earth',t.google)+tool('ArcGIS',t.arcgis)+
      '</div></div>'+
      block('Kết quả cần nhận', '<p>'+esc(p.output)+'</p>')+
      block('Ví dụ cụ thể', '<p>'+esc(p.example)+'</p>')+
      '<div class="detail full reference"><div><h4>Ví dụ / nguồn tham chiếu</h4><p>'+esc(p.reference)+'</p></div><a href="'+esc(p.url)+'" target="_blank" rel="noreferrer">Mở nguồn ↗</a></div>'+
      block('Từ khóa', '<p>'+esc(p.tags)+'</p>', true)+
      '</div></div>';
    dialog.showModal();
  }
  function block(h, body, full=false){return '<div class="detail'+(full?' full':'')+'"><h4>'+esc(h)+'</h4>'+body+'</div>'}
  function tool(h,v){return '<div class="toolBox"><b>'+esc(h)+'</b><span>'+esc(v || '—')+'</span></div>'}

  document.getElementById('dialogClose').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{ if(e.target===dialog) dialog.close(); });
  search.addEventListener('input', render);
  layerFilter.addEventListener('change', render);
  ecosystemFilter.addEventListener('change', render);
  document.getElementById('resetFilters').addEventListener('click',()=>{search.value='';layerFilter.value='';ecosystemFilter.value='';render()});
  grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('card')){e.preventDefault();openProblem(e.target.dataset.id)}});

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'SELECT') {
      e.preventDefault();
      search.focus();
    }
    if (e.key === 'Escape') {
      if (dialog.open) {
        dialog.close();
      } else if (search.value) {
        search.value = '';
        render();
      }
    }
  });

  document.getElementById('statProblems').textContent = problems.length;
  render();
})();