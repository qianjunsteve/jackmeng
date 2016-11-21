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
;define('views/hobby/hobby.js', function(require, exports, module){ require('components/nav/nav.js');
var urlSearch = location.hash.slice(1);
var imgUrls;
switch(urlSearch) {
	case '2015opera': 
		imgUrls = ['https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-1_642ec7f.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-2_ca1b54f.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-3_4707630.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-4_ef0baa0.png', 
							 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-5_96617e8.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-6_b6b37bb.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-7_ffa6823.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-8_6ffa77b.png', 
							 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2015opera-9_66b61a0.png'];
	break;
	case '2016opera': 
		imgUrls = ['https://github.com/qianjunsteve/jackmeng/blob/master/v-2016opera-1_2a49bd5.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2016opera-2_6d2c88a.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2016opera-3_fbfd965.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2016opera-4_bfe7a9e.png', 
							 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2016opera-5_44270b5.png', 'https://github.com/qianjunsteve/jackmeng/blob/master/v-2016opera-6_67fe3a6.png'];
	break;
};
var hobbyData = {
	banner: imgUrls.shift(),
	title: '2015 opera',
	time: '2015-06-11',
	label: [{
		color: 'blue',
		txt: 'opera'
	}, {
		color: 'purple',
		txt: '2015'
	}, {
		color: 'orange',
		txt: 'Beijing'
	}],
	context: 'Beijing urges Washington to "be cautious in words and actions in regard to the Diaoyu Islands issue", the Ministry of National Defense said on Friday, a stern warning over recent remarks by a top United States Navy official.Beijing urges Washington to "be cautious in words and actions in regard to the Diaoyu Islands issue", the Ministry of National Defense said on Friday, a stern warning over recent remarks by a top United States Navy official.Beijing urges Washington to "be cautious in words and actions in regard to the Diaoyu Islands issue", the Ministry of National Defense said on Friday, a stern warning over recent remarks by a top United States Navy official.',
	imgs: imgUrls
}

var vm = new Vue({
	el: "#J_body",
	data: {
		hobby: hobbyData
	}
}); 
 
});