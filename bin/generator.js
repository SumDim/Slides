#!/usr/bin/env node

var _encode_inline = function(entities) {

	var text = '';


	entities.forEach(function(entity) {

		if (entity.token === 'Code') {

			text += ' <code>' + entity.value + '</code> ';

		} else if (entity.token === 'Text') {

			if (entity.value.match(/\.|\,|\?|\!/g)) {

				text += entity.value;

			} else {

				if (entity.type === 'bold') {
					text += ' <b>' + entity.value + '</b> ';
				} else if (entity.type === 'italic') {
					text += ' <i>'  + entity.value + '</i> ';
				} else {
					text += ' ' + entity.value;
				}

			}

		} else if (entity.token === 'Image') {

			text += ' <img src="' + entity.value + '" alt="' + entity.type + '"> ';

		} else if (entity.token === 'Link') {

			text += ' <a href="' + entity.value + '">' + entity.type + '</a> ';

		}

	});


	return text.trim();

};

var _encode = function(data) {

	var code         = '';
	var article_open = false;
	var section_open = false;

	for (var d = 0, dl = data.length; d < dl; d++) {

		var entry = data[d];
		if (entry.token === 'Article') {

			if (section_open === true) {
				code += '\t\t</section>\n';
			}

			if (article_open === true) {
				code += '\t</section>\n';
			}

			code += '\t<section>\n';
			article_open = true;
			section_open = false;

		} else if (entry.token === 'Headline') {

			if (section_open === true) {
				code += '\t\t</section>\n';
				section_open = false;
			}


			if (entry.type === 1) {

				code += '\t\t<section>\n';
				code += '\t\t\t<h1>' + entry.value + '</h1>\n';
				code += '\t\t</section>\n';

				section_open = false;

			} else if (entry.type === 2) {

				if (section_open === false) {
					code += '\t\t<section>\n';
					section_open = true;
				}

				code += '\t\t\t<h2>' + entry.value + '</h2>\n';

			}

		} else if (entry.token === 'List') {

			code += '\t\t\t<ul>\n';

			entry.value.forEach(function(item) {
				code += '\t\t\t\t<li>' + _encode_inline(item) + '</li>\n';
			});

			code += '\t\t\t</ul>\n';

		} else if (entry.token === 'Paragraph') {

			code += '\t\t\t<p>\n';
			code += '\t\t\t\t' + _encode_inline(entry.value) + '\n';
			code += '\t\t\t</p>\n';

		} else if (entry.token === 'Code') {

			code += '<pre class="' + entry.type + '">';
			code += '<code>';
			code += entry.value;
			code += '</code>';
			code += '</pre>\n';

		}

	}


	if (section_open === true) {
		code += '\t\t</section>\n';
	}

	if (article_open === true) {
		code += '\t</section>\n';
	}


	return code;

};



var fs       = require('fs');
var parser   = require('./generator/markdown.js');
var path     = require('path');
var tpl      = fs.readFileSync(__dirname + '/generator/template.html').toString('utf8');
var in_path  = path.resolve(__dirname + '/../', process.argv[2]);
var out_path = path.resolve(__dirname + '/../', process.argv[2].split('/').pop().replace('.md', '.html'));


var data = parser.decode(fs.readFileSync(in_path, 'utf8').toString('utf8'));
if (data !== null) {

	var html = _encode(data);
	if (html.length > 0) {

		html = tpl.replace('${slides}', html);
		fs.writeFileSync(out_path, html, 'utf8');

	}

}

