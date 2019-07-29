import $ from 'jquery';

import './index.scss';

const listItens = () => [{name: 'lists', href: 'lists.html'}];

const iteractItens = () => listItens().map((item) => `<a href="${item.href}>${item.name}</a>`);

const appendLinks = () => {
    $('#pages').append(''.concat(...iteractItens()));
};

appendLinks();
