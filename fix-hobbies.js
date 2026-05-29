const fs = require('fs');
let s = fs.readFileSync('e:/AI/mygithubweb/index.html', 'utf-8');

// 第一个：园艺种植 → 排球
s = s.replace(
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #2d5016, #4a7c23);">\n            <span class="hobby-emoji">\u{1F333}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>园艺种植</h3>\n            <p>喜欢在阳台种植花草，在自然中感受生长的力量，这是最好的放松方式。</p>',
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #c0392b, #e74c3c);">\n            <span class="hobby-emoji">\u{1F3D0}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>排球</h3>\n            <p>热爱运动，享受团队配合的默契与竞技的快乐。</p>'
);

// 第二个：摄影 → 美食
s = s.replace(
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #4a3728, #8b6914);">\n            <span class="hobby-emoji">\u{1F4F7}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>摄影</h3>\n            <p>用镜头记录校园四季，捕捉数学与自然中隐藏的对称之美。</p>',
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #d35400, #e67e22);">\n            <span class="hobby-emoji">\u{1F35C}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>美食</h3>\n            <p>品尝各地风味，人间烟火气，最抚凡人心。</p>'
);

// 第三个：阅读 保持，只更新描述
s = s.replace(
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #1a365d, #2c5282);">\n            <span class="hobby-emoji">\u{1F4D6}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>阅读</h3>\n            <p>数学史、科普著作、人物传记——阅读是跨越时空的对话。</p>',
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #1a365d, #2c5282);">\n            <span class="hobby-emoji">\u{1F4D6}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>阅读</h3>\n            <p>数学史、科普著作、人物传记——阅读是跨越时空的对话。</p>'
);

// 第四个：围棋 → 摄影，修复??
s = s.replace(
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #553c2d, #a0522d);">\n            <span class="hobby-emoji">??</span>\n          </div>\n          <div class="hobby-info">\n            <h3>围棋</h3>\n            <p>黑白之间的博弈，蕴含着无穷的策略与数学美感。</p>',
  '<div class="hobby-visual" style="background: linear-gradient(135deg, #4a3728, #8b6914);">\n            <span class="hobby-emoji">\u{1F4F7}</span>\n          </div>\n          <div class="hobby-info">\n            <h3>摄影</h3>\n            <p>用镜头记录校园四季，捕捉数学与自然中隐藏的对称之美。</p>'
);

fs.writeFileSync('e:/AI/mygithubweb/index.html', s, 'utf-8');
console.log('Done');
