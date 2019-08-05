import './index.scss';

const listItens = () => [{name: 'lists', href: 'lists.html'}];

const createLink = (item: any) => {
    const aLink = document.createElement('a');

    aLink.href = item.href;
    aLink.textContent = item.name;

    return aLink;
};

const iteractItens = () => listItens().map((item) => {
    const itemList = document.createElement('li');

    itemList.appendChild(createLink(item));

    return itemList;
});

const addItens = (list: HTMLUListElement) => {
    list.append(...iteractItens());

    return list;
};

const createList = () => document.createElement('ul');

const appendLinks = () => {
    const pages = document.getElementById('pages');

    if (pages) {
        const list = addItens(createList());
        pages.append(list);
    }
};

appendLinks();
