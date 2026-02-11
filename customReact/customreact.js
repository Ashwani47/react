// how react works behind the scene 
function customRender(elem, container){
    // // not so good because what if there are more than two or less than two props of your elem?
    // const domElem = document.createElement(elem.type)
    // domElem.innerHTML = elem.children
    // domElem.setAttribute('href', elem.props.href)
    // domElem.setAttribute('target', elem.props.target)
    // container.appendChild(domElem)

    // we will use iterative approach
    const domElem = document.createElement(elem.type)
    domElem.innerHTML = elem.children
    for(const prop in elem.props){
        if(prop === 'children') continue;
        domElem.setAttribute(prop, elem.props[prop])
    }
    container.appendChild(domElem)
}

const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google.'
}

const mainContainer = document.querySelector('#root')

customRender(reactElem,mainContainer)