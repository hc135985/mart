import React, { Component } from 'react';
import { createPortal, render } from 'react-dom';

class HelloReact extends React.Component {
    state = {}
    componentDidMount() {
    }
    componentWillUnmount() {
        console.log(this.he, '已经销毁');
    }

    ok() {

    }
    noOk() {

    }
    he = null;
    am = null;
    render() {
        return (
            <div>
                <h1>hollp</h1>
            </div>
        )
    }
}
let i = 0;
function cj() {
    return i += 1
}

function DomRender(props) {
    let i = cj()
    console.log(i);
    let dom = '#madol'
    if (i === 1) {
        return <>
            {createPortal(<HelloReact />,
                document.body)}
        </>
    } else {
        let div = window.document.getElementById(dom)
        console.log(div);
        return <>
            {
                render(
                    <HelloReact />,
                    document.body
                )
            }
        </>
    }
}



export default DomRender;