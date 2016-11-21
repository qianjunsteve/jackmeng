define('components/nav/nav.js', function(require, exports, module){ var navArray = [{
  dt: 'About',
  dd: ['age', 'sex', 'height', 'nation']
}, {
  dt: 'Hobby',
  dd: ['football', 'paint', 'dance']
}, {
  dt: 'Contact',
  dd: ['tel', 'email', 'fb']
}];

Vue.component('c-nav', {
  template: "<nav class=\"nav cf\">\n\t<div class=\"logo\"><img src=\"https://github.com/qianjunsteve/jackmeng/blob/master/c-Jack-Meng_6824792.png\" width=\"200\" height=\"40\">\n\t</div>\n\t<div class=\"nav-content fr\">\n\t\t<dl v-for=\"item in list\">\n\t\t\t<dt><a href=\"\">{{item.dt}}</a></dt>\n\t\t\t<dd v-for=\"elem in item.dd\"><a href=\"\">{{elem}}</a></dd>\n\t\t</dl>\n\t</div>\n</nav>",
  data: function() {
    return {
      list: navArray
    }
  },
  methods: {

  }
}); 
});
;define('components/brief/brief.js', function(require, exports, module){ var briefArray = [{
  img: 'https://github.com/qianjunsteve/jackmeng/blob/master/c-2015opera-brief_c2db1ea.png',
  title: 'School Opera Show',
  time: '2015-06-11',
  tag: '2015opera'
}, {
  img: 'https://github.com/qianjunsteve/jackmeng/blob/master/c-2016opera-brief_0fbb567.png',
  title: 'School Opera Show',
  time: '2016-01-07',
  tag: '2016opera'
}, {
  img: 'https://github.com/qianjunsteve/jackmeng/blob/master/c-2015football-brief_0dbb772.png',
  title: 'School Football Match',
  time: '2015-05-1',
  tag: '2015football'
}, {
  img: 'https://github.com/qianjunsteve/jackmeng/blob/master/c-2016football-brief_d44036f.png',
  title: 'School Football Match',
  time: '2016-05-08',
  tag: '2016football'
}, {
  img: 'https://github.com/qianjunsteve/jackmeng/blob/master/c-2016paint-brief_881c96a.png',
  title: 'School Painting Works',
  time: '2016-11-07',
  tag: '2016paint'
}];

Vue.component('c-brief', {
  template: "<ul class=\"brief-wrap\">\n\t<li v-for=\"item in list\" class=\"brief-item\" v-on:click=\"onLinkClick\">\n\t\t<img class=\"brief-img\" v-bind:src=\"item.img\" alt=\"\" width=\"\">\n\t\t<div class=\"brief-desc\">\n\t\t<p class=\"brief-title\">{{item.title}}</p>\n\t\t<p class=\"brief-time\">{{item.time}}</p>\n\t\t</div>\n\t</li>\n</ul>",
  data: function() {
    return {
      list: briefArray
    }
  },
  methods: {
    onLinkClick: function(e){
      var index = $(e.currentTarget).index();
      location.href = '/jackmeng/blob/master/hobby.html' + '#' + briefArray[index].tag;
    }
  }
});
 
});
;define('views/index/index.js', function(require, exports, module){ require('components/nav/nav.js');
require('components/brief/brief.js');

var vm = new Vue({
	el: "#J_body",
	data: {
	}
}); 
 
});