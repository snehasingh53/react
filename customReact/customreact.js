




/*function customRender(reactElement, mainContainer) {

    const domElement = document.createElement(reactElement.type);

    domElement.textContent = reactElement.children;

    
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }

    
    mainContainer.appendChild(domElement);
}
/*
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
*/

const reactElement = React.createElement( //create element using react 
    'a', // first element will be tag
    { href:'https://google.com' , target:'_blank' }, // second eleement will be object
   'click me to visit google' // third element will be text 

)
createRoot(document.getElementById('root')).render(

    reactElement
 
)

