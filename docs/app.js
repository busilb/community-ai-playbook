(function(){
  const grid=document.querySelector('#scenario-grid'), classes=document.querySelector('#class-grid'), count=document.querySelector('#result-count'), empty=document.querySelector('#empty-state'), dialog=document.querySelector('#detail-dialog'), detail=document.querySelector('#detail-content');
  let role='all', category='all', query='';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const track=(event,data={})=>window.dispatchEvent(new CustomEvent('community-ai-event',{detail:{event,...data,time:new Date().toISOString()}}));
  function render(){const list=COMMUNITY_SCENARIOS.filter(x=>(role==='all'||x.role===role)&&(category==='all'||x.category===category)&&(!query||[x.title,x.summary,x.pain,x.roleName,x.category].join(' ').toLowerCase().includes(query.toLowerCase()))); count.textContent=`共 ${list.length} 个场景`; empty.hidden=list.length>0; grid.innerHTML=list.map(x=>`<button class="scenario-card" data-id="${esc(x.id)}"><div class="card-top"><span class="card-icon">${x.icon}</span><span class="tag">${esc(x.category)} · ${esc(x.roleName)}</span></div><h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p><div class="quote">${esc(x.pain)}</div><span class="card-arrow">查看场景卡 →</span></button>`).join(''); grid.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>openDetail(b.dataset.id));}
  function renderClasses(){classes.innerHTML=COMMUNITY_CLASSES.map(x=>`<a class="class-card" href="${esc(x.href)}"><div class="class-date">${esc(x.date)} · 课堂记录</div><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p><div class="class-tags">${x.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></a>`).join('');}
  function openDetail(id){const x=COMMUNITY_SCENARIOS.find(s=>s.id===id); if(!x)return; track('scenario_view',{id}); detail.innerHTML=`<div class="detail-meta">${esc(x.roleName)} · ${esc(x.category)}</div><h2>${esc(x.icon)} ${esc(x.title)}</h2><p>${esc(x.summary)}</p><div class="detail-pain">真实问题：${esc(x.pain)}</div><h3>推荐操作流程</h3><ol class="detail-list">${x.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h3>可复制提示词</h3><div class="prompt-box" id="prompt-${esc(x.id)}">${esc(x.prompt)}</div><div class="dialog-actions"><button class="button primary" id="copy-prompt">复制提示词</button><button class="feedback" data-feedback="有帮助">有帮助</button><button class="feedback" data-feedback="一般">一般</button><button class="feedback" data-feedback="没解决">没解决我的问题</button></div><p class="detail-meta">安全边界：${esc(x.safety)}</p>`; dialog.showModal(); document.querySelector('#copy-prompt').onclick=async()=>{try{await navigator.clipboard.writeText(x.prompt)}catch(e){const area=document.createElement('textarea');area.value=x.prompt;document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()} document.querySelector('#copy-prompt').textContent='已复制 ✓';track('prompt_copy',{id})}; detail.querySelectorAll('[data-feedback]').forEach(b=>b.onclick=()=>{detail.querySelectorAll('[data-feedback]').forEach(n=>n.classList.remove('selected'));b.classList.add('selected');track('feedback',{id,value:b.dataset.feedback})});}
  // Keep proposed teaching guidance separate from transcript evidence.
  const originalOpenDetail=openDetail;
  openDetail=function(id){
    originalOpenDetail(id);
    const x=COMMUNITY_SCENARIOS.find(s=>s.id===id);
    if(!x)return;
    detail.querySelector('.detail-pain').textContent=`需求归纳（非逐字引用）：${x.pain.replace(/[“”]/g,'')}`;
    if(x.source){
      const block=document.createElement('section');
      block.innerHTML=`<h3>课堂线索与带练建议</h3><p class="detail-meta">来源：${esc(x.source)}</p><p>${esc(x.evidence)}</p><p><strong>建议时长：</strong>${esc(x.duration)} · 尚待试点验证</p><p><strong>验收标准：</strong>${esc(x.outcome)}</p><a href="senior-training.html">查看完整带练方案 →</a><p class="detail-meta">以下为 AI 辅助分析，不代表任何个人观点。</p>`;
      detail.appendChild(block);
    }
  };
  document.querySelector('#scenario-total').textContent=COMMUNITY_SCENARIOS.length;
  document.querySelector('.dialog-close').onclick=()=>dialog.close(); dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>{role=b.dataset.role;document.querySelectorAll('[data-role]').forEach(n=>n.classList.toggle('active',n===b));render();document.querySelector('#scenarios').scrollIntoView({behavior:'smooth'})});
  document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{category=b.dataset.category;document.querySelectorAll('[data-category]').forEach(n=>n.classList.toggle('active',n===b));render()});
  document.querySelector('#search-input').oninput=e=>{query=e.target.value;render()}; render(); renderClasses();
})();
